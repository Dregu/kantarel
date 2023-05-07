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
  var ptr = getSave();
  if (!ptr) {
    if (ps.handle) mjs.closeProcess(ps.handle);
    ps = {};
    return false;
  }
  let data = [];
  let w = readAddr(ptr);
  let h = readAddr(ptr + 4);
  if (w < 80 || w > 300 || h < 20 || h > 30) {
    console.log('Invalid save')
    mjs.closeProcess(ps.handle);
    ps = {};
    return []
  }
  const buf = mjs.readBuffer(ps.handle, ptr + 0x20, w * h * 4);
  const arr = new Int32Array(buf.buffer);
  for (let y = 0; y < h; ++y) {
    data[y] = Array.from(arr.slice(y*w, y*w+w));
  }
  mjs.closeProcess(ps.handle);
  ps = {};
  return data
}

//console.log(getData()); process.exit(0)

function setData(y, x, val) {
  var ptr = getSave();
  if (!ptr) {
    if (ps.handle) mjs.closeProcess(ps.handle);
    ps = {};
    return;
  }
  let w = readAddr(ptr);
  let h = readAddr(ptr + 4);
  if (w < 80 || w > 300 || h < 20 || h > 30) {
    console.log('Invalid save')
    if (ps.handle) mjs.closeProcess(ps.handle);
    ps = {};
    return;
  }
  mjs.writeMemory(ps.handle, ptr + 0x20 + (4 * (w * y + x)), val, mjs.INT32);
}

function warp(to) {
  if (!getPs()) return;
  let roomPtr = getPtr(ptrs.room);
  let loadedPtr = getPtr(ptrs.room_loaded);
  let statePtr = getPtr(ptrs.state);
  let room = readAddr(roomPtr);
  if (room <= 1) return;
  mjs.writeMemory(ps.handle, loadedPtr, -1, mjs.INT32);
  mjs.writeMemory(ps.handle, roomPtr, to - 1, mjs.INT32);
  mjs.writeMemory(ps.handle, statePtr, 1, mjs.INT32);
}

app.get('/', function (req, res, next) {
  const options = {
    root: path.join(__dirname)
  };
  res.sendFile('index.html', options);
});

app.ws('/', function(ws, req) {
  ws.on('message', function (msg) {
    var data
    try {
      data = JSON.parse(msg);
    } catch (e) {
      console.log("Invalid message");
    }
    if (!data) return;

    //console.log(data);

    if (data.type == 'get') {
      ws.send(JSON.stringify(getData()));
    } else if (data.type == 'set') {
      setData(parseInt(data.y), parseInt(data.x), parseInt(data.value));
    } else if (data.type == 'warp') {
      warp(parseInt(data.room));
    }
  });
});

let server = app.listen(0, 'localhost', () => {
  let url = 'http://localhost:' + server.address().port;
  console.log('Listening on ' + url);
  require('openurl').open(url);
});
