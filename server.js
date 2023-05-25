console.log('KANTAREL 0.5');
console.log('Loading something probably...');

const path = require('path');
const mjs = require('memoryjs');
var express = require('express');
var app = express();
var expressWs = require('express-ws')(app);
const processName = 'Lone Fungus.exe';

const ptrs = {
  state: [0x9d5cc, 0x1e4],
  room: [0x9d5cc, 0x1ec],
  room_loaded: [0x9d5cc, 0x1f0],
  save: [0x9d5cc, 0xDC, 0x13C, 0x1C, 0x18, 0x4, 0x0]
};

var ps = {}

function getPs() {
  try {
    ps = mjs.openProcess(processName);
  } catch (e) {
    return false
  }
  return true
}

function readAddr(addr) {
  return mjs.readMemory(ps.handle, addr, mjs.UINT32);
}

function readPtr(offsets, base, proc) {
  let addr = base || Number(ps.modBaseAddr);
  let value = mjs.readMemory(ps.handle, addr + offsets[0], mjs.UINT32);
  offsets = offsets.slice(1);
  if (offsets.length) return readPtr(offsets, value, ps);
  return value;
}

function getPtr(offsets, base, proc) {
  let addr = base || Number(ps.modBaseAddr);
  let value = mjs.readMemory(ps.handle, addr + offsets[0], mjs.UINT32);
  let offset = offsets[0];
  offsets = offsets.slice(1);
  if (offsets.length) return getPtr(offsets, value, ps);
  return addr + offset;
}

function getSave() {
  if (!getPs()) return false;
  let room = readPtr(ptrs.room);
  if (room <= 1) return false;
  let ptr = getPtr(ptrs.save);
  if (ptr == 0) return false;
  //console.log("savePtr", ptr.toString(16));
  return ptr;
}

function getData() {
  var savePtr = getSave();
  if (!savePtr) {
    if (ps.handle) mjs.closeProcess(ps.handle);
    ps = {};
    return false;
  }
  let data = [];
  let w = readAddr(savePtr);
  let h = readAddr(savePtr + 4);
  if (w < 80 || w > 300 || h < 20 || h > 30) {
    //console.log('Invalid save');
    mjs.closeProcess(ps.handle);
    ps = {};
    return []
  }
  const buf = mjs.readBuffer(ps.handle, savePtr, w * h * 4 + 0x20);
  const arr = new Int32Array(buf.buffer);
  return arr;
}

function setData(y, x, val) {
  var savePtr = getSave();
  if (!savePtr) {
    if (ps.handle) mjs.closeProcess(ps.handle);
    ps = {};
    return;
  }
  let w = readAddr(savePtr);
  let h = readAddr(savePtr + 4);
  if (w < 80 || w > 300 || h < 20 || h > 30) {
    console.log('Invalid save')
    if (ps.handle) mjs.closeProcess(ps.handle);
    ps = {};
    return;
  }
  mjs.writeMemory(ps.handle, savePtr + 0x20 + (4 * (w * y + x)), val, mjs.INT32);
  mjs.closeProcess(ps.handle);
  ps = {};
}

function warp(to, mode) {
  var savePtr = getSave();
  if (!savePtr) {
    if (ps.handle) mjs.closeProcess(ps.handle);
    ps = {};
    return;
  }
  if (mode == 'room') {
    setData(2, 34, to);
  } else if (mode == 'instant') {
    let roomPtr = getPtr(ptrs.room);
    let loadedPtr = getPtr(ptrs.room_loaded);
    let statePtr = getPtr(ptrs.state);
    mjs.writeMemory(ps.handle, loadedPtr, -1, mjs.INT32);
    mjs.writeMemory(ps.handle, roomPtr, to - 1, mjs.INT32);
    mjs.writeMemory(ps.handle, statePtr, 1, mjs.INT32);
  }
  if (ps.handle) {
    mjs.closeProcess(ps.handle);
    ps = {};
  }
}

function setMap(val) {
  var savePtr = getSave();
  if (!savePtr) {
    if (ps.handle) mjs.closeProcess(ps.handle);
    ps = {};
    return;
  }
  let w = readAddr(savePtr);
  let h = readAddr(savePtr + 4);
  let arr = new Array(w).fill(val);
  let arr32 = new Int32Array(arr);
  let rows = [5, 7, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
  rows.forEach((y) => {
    if (y >= h) return;
    let ptr = savePtr + 0x20 + (4 * (w * y));
    mjs.writeBuffer(ps.handle, ptr, arr32);
  });
  mjs.closeProcess(ps.handle);
  ps = {};
}

function setBuf(y, x, val, len) {
  var savePtr = getSave();
  if (!savePtr) {
    if (ps.handle) mjs.closeProcess(ps.handle);
    ps = {};
    return;
  }
  let w = readAddr(savePtr);
  let h = readAddr(savePtr + 4);
  let arr = new Array(len).fill(val);
  let arr32 = new Int32Array(arr);
  let ptr = savePtr + 0x20 + (4 * (w * y + x));
  mjs.writeBuffer(ps.handle, ptr, arr32);
  mjs.closeProcess(ps.handle);
  ps = {};
}

app.use(express.static(path.join(__dirname, 'node_modules/bootstrap/dist')));
app.use(express.static(path.join(__dirname, 'static')));

function handle(data, ws) {
  if (data.type == 'get') {
    ws.send(getData(), {binary: true, mask: false});
  } else if (data.type == 'set') {
    setData(parseInt(data.y), parseInt(data.x), parseInt(data.value));
  } else if (data.type == 'setbuf') {
    setBuf(parseInt(data.y), parseInt(data.x), parseInt(data.value), parseInt(data.len));
  } else if (data.type == 'warp') {
    warp(parseInt(data.room), data.mode);
  } else if (data.type == 'map') {
    setMap(data.value);
  }
}

app.ws('/', function (ws, req) {
  ws.on('message', function (msg) {
    var data
    try {
      data = JSON.parse(msg);
    } catch (e) {
      console.log("Invalid message");
    }
    if (!data) return;

    if (Array.isArray(data)) {
      data.forEach((item) => {
        handle(item, ws);
      })
    } else {
      handle(data, ws);
    }
  });
});

let server = app.listen(0, 'localhost', () => {
  let url = 'http://localhost:' + server.address().port;
  console.log('Listening on ' + url);
  console.log('Opening UI in default browser...');
  require('openurl').open(url);
});
