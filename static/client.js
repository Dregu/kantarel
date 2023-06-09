    const row_names = {
      0: '<span class="ability">abilities</span> <span class="equip">equip state</span>',
      1: '<span class="health">health</span> <span class="spell">spells</span> <span class="relic">relics</span> <span class="emblem">emblems</span>',
      2: '<span class="brain">brainnodes</span> <span class="ability">abilities</span> <span class="room">room</span> <span class="igt">igt</span> <span class="upgrade">upgrades</span>',
      3: '<span class="mindshroom">mindshrooms</span>',
      4: '<span class="health">health pieces</span>',
      5: 'switches walls vines (full row)',
      6: '<span class="ladybug">ladybugs</span>',
      7: 'boss room chains',
      8: '<span class="assist">assists</span> <span class="map">pins</span> <span class="map">mapshrooms</span>',
      9: '<span class="astral">astral fragments</span>',
      11: '<span class="room">rooms</span>: color caverns',
      12: '<span class="room">rooms</span>: mechanical fort',
      13: '<span class="room">rooms</span>: deep grotto',
      14: '<span class="room">rooms</span>: corrupted tunnels',
      15: '<span class="room">rooms</span>: acid dungeon',
      16: '<span class="room">rooms</span>: lava temple',
      17: '<span class="room">rooms</span>: gold mines',
      18: '<span class="room">rooms</span>: undergrounds',
      19: '<span class="room">rooms</span>: frozen depths',
      20: '<span class="room">rooms</span>: mossy ruins',
      21: '<span class="room">rooms</span>: surface',
      22: 'watcher encounters',
      23: 'talked to statues (count)',
      24: 'something map related, maybe shrines',
      25: 'midbosses seen'
    };

    const names = [
    // 0
    { 0: 'ability: pine sword', 1: 'ability: forward dash', 2: 'ability: upwards dash', 4: 'ability: great slash',

    5: 'equip: spell: bouncy spore', 6: 'equip: spell: spicy nut', 7: 'equip: spell: vibrant crystal', 8: 'equip: spell: returning contraption', 9: 'equip: spell: bouncy ball', 11: 'equip: spell: golden light', 42: 'equip: spell: boost projectile', 43: 'equip: spell: acid hammer', 68: 'equip: spell: spark ball', 72: 'equip: spell: berserk',

    16: 'equip: relic: holy counter heal',
    29: 'equip: relic: mind recovery',
    37: 'equip: relic: fast recovery',
    38: 'equip: relic: counter heal',
    48: 'equip: relic: invincibility stone',
    76: 'equip: relic: recovery armor',

    21: 'equip: relic: mind shell',
    35: 'equip: relic: purple mindshroom',
    26: 'equip: relic: refreshing body',
    57: 'equip: relic: combo heal',
    64: 'equip: relic: blue health orb',
    56: 'equip: relic: green health orb',

    23: 'equip: relic: meditation blast',
    25: 'equip: relic: stone body',
    46: 'equip: relic: projectile shield',
    63: 'equip: relic: spike shield',
    24: 'equip: relic: super healing',
    34: 'equip: relic: cheaper healing',

    58: 'equip: relic: spike bounce',
    96: 'equip: relic: restoration protection',
    87: 'equip: relic: lunar orb',
    70: 'equip: relic: barry',
    54: 'equip: relic: magic bean',
    20: 'equip: relic: double shot',

    13: 'equip: relic: quick feet',
    51: 'equip: relic: acid infusion',
    14: 'equip: relic: counter dodge',
    41: 'equip: relic: shadow spin',
    18: 'equip: relic: magic dice',
    17: 'equip: relic: devil\'s dice',

    39: 'equip: relic: spell booster',
    40: 'equip: relic: strong spell booster',
    19: 'equip: relic: spell sphere',
    94: 'equip: relic: sword booster',
    77: 'equip: relic: fast charge',
    97: 'equip: relic: crescent protector',

    31: 'equip: relic: long slash',
    32: 'equip: relic: wide slash',
    90: 'equip: relic: swordmaster\'s trinket',
    71: 'equip: relic: big meteor blast',
    65: 'equip: relic: large great slash',
    45: 'equip: relic: big spin slash',

    30: 'equip: relic: poison slash',
    27: 'equip: relic: quick slash',
    55: 'equip: relic: sorcerer\'s slash',
    15: 'equip: relic: spectre slash',
    67: 'equip: relic: fire slash',
    69: 'equip: relic: lightning slash',

    47: 'equip: relic: counter attack',
    22: 'equip: relic: mind slash',
    50: 'equip: relic: combo slash',
    49: 'equip: relic: shroomouken relic',
    74: 'equip: relic: velocity slash',
    36: 'equip: relic: dark lord\'s trinket',

    61: 'equip: relic: steady body',
    73: 'equip: relic: rose slash',
    93: 'equip: relic: knight\'s trinket',
    33: 'equip: relic: hex mushroom',
    66: 'equip: relic: projectile pogo',
    62: 'equip: relic: spicy mushroom',

    78: 'equip: emblem: double flash',
    79: 'equip: emblem: short cooldown',
    85: 'equip: emblem: healing parry',
    86: 'equip: emblem: parry vortex',
    88: 'equip: emblem: parry sprint',
    92: 'equip: emblem: ice block',
    95: 'equip: emblem: auto parry',

    80: 'equip: emblem: protection parry',
    81: 'equip: emblem: mind parry',
    82: 'equip: emblem: swordmaster parry',
    83: 'equip: emblem: fire parry',
    84: 'equip: emblem: power reflect',
    89: 'equip: emblem: laser parry',
    91: 'equip: emblem: living projectile'
  },
  // 1
  { 0: 'health', 1: 'mana', 2: 'brainnodes', 3: 'health piece count', 29: 'available spell stones', 56: 'available emblem stones?',

  5: 'spell: bouncy spore', 6: 'spell: spicy nut', 7: 'spell: vibrant crystal', 8: 'spell: returning contraption', 9: 'spell: bouncy ball', 11: 'spell: golden light', 42: 'spell: boost projectile', 43: 'spell: acid hammer', 68: 'spell: spark ball', 72: 'spell: berserk',

  16: 'relic: holy counter heal',
  29: 'relic: mind recovery',
  37: 'relic: fast recovery',
  38: 'relic: counter heal',
  48: 'relic: invincibility stone',
  76: 'relic: recovery armor',

  21: 'relic: mind shell',
  35: 'relic: purple mindshroom',
  26: 'relic: refreshing body',
  57: 'relic: combo heal',
  64: 'relic: blue health orb',
  56: 'relic: green health orb',

  23: 'relic: meditation blast',
  25: 'relic: stone body',
  46: 'relic: projectile shield',
  63: 'relic: spike shield',
  24: 'relic: super healing',
  34: 'relic: cheaper healing',

  58: 'relic: spike bounce',
  96: 'relic: restoration protection',
  87: 'relic: lunar orb',
  70: 'relic: barry',
  54: 'relic: magic bean',
  20: 'relic: double shot',

  13: 'relic: quick feet',
  51: 'relic: acid infusion',
  14: 'relic: counter dodge',
  41: 'relic: shadow spin',
  18: 'relic: magic dice',
  17: 'relic: devil\'s dice',

  39: 'relic: spell booster',
  40: 'relic: strong spell booster',
  19: 'relic: spell sphere',
  94: 'relic: sword booster',
  77: 'relic: fast charge',
  97: 'relic: crescent protector',

  31: 'relic: long slash',
  32: 'relic: wide slash',
  90: 'relic: swordmaster\'s trinket',
  71: 'relic: big meteor blast',
  65: 'relic: large great slash',
  45: 'relic: big spin slash',

  30: 'relic: poison slash',
  27: 'relic: quick slash',
  55: 'relic: sorcerer\'s slash',
  15: 'relic: spectre slash',
  67: 'relic: fire slash',
  69: 'relic: lightning slash',

  47: 'relic: counter attack',
  22: 'relic: mind slash',
  50: 'relic: combo slash',
  49: 'relic: shroomouken relic',
  74: 'relic: velocity slash',
  36: 'relic: dark lord\'s trinket',

  61: 'relic: steady body',
  73: 'relic: rose slash',
  93: 'relic: knight\'s trinket',
  33: 'relic: hex mushroom',
  66: 'relic: projectile pogo',
  62: 'relic: spicy mushroom',

  78: 'emblem: double flash',
  79: 'emblem: short cooldown',
  85: 'emblem: healing parry',
  86: 'emblem: parry vortex',
  88: 'emblem: parry sprint',
  92: 'emblem: ice block',
  95: 'emblem: auto parry',

  80: 'emblem: protection parry',
  81: 'emblem: mind parry',
  82: 'emblem: swordmaster parry',
  83: 'emblem: fire parry',
  84: 'emblem: power reflect',
  89: 'emblem: laser parry',
  91: 'emblem: living projectile'
},
// 2
{
  0: 'brainnode', 1: 'brainnode', 2: 'brainnode', 3: 'brainnode', 4: 'brainnode', 5: 'brainnode', 6: 'brainnode', 7: 'brainnode', 8: 'brainnode',

  34: 'room saved (1-based)',

  41: 'igt: second', 42: 'igt: minute', 43: 'igt: hour',

  51: 'ladybugs: inserted', 45: 'ladybugs: total',

  71: 'tutorial: downward slash', 83: 'tutorial: how to use spells', 84: 'killed: enemies', 85: 'killed: flowers',

  89: 'upgrade: sharpening stone', 90: 'upgrade: sharpening stone', 91: 'upgrade: sharpening stone', 92: 'upgrade: sharpening stone',

  24: 'ability: dash crystal', 28: 'ability: mushmover infusion', 30: 'ability: wall-bounce', 31: 'ability: crouch jump', 32: 'ability: water breath', 33: 'ability: ground-bounce', 35: 'ability: meteor strike', 36: 'ability: teleportation wand', 39: 'ability: spin jump', 40: 'ability: conjure mushmover', 46: 'ability: blue key infusion', 47: 'ability: great spin-slash', 48: 'ability: royal ornament', 49: 'ability: magic crouch jump', 50: 'ability: magnetic fungus', 52: 'ability: healing fungus', 53: 'ability: shield cap', 58: 'ability: acid sandals', 59: 'ability: fire bounce', 60: 'ability: magic dash', 61: 'ability: silver ornament', 63: 'ability: power extractor', 64: 'ability: spin-bounce', 65: 'item: all-seeing eye', 67: 'ability: astral mushmover', 69: 'item: iron key', 73: 'item: gold key'
},
// 3
{},
// 4
{
  12: 'health piece: ladybug reward'
},
// 5
{},
// 6
{},
// 7
{},
// 8
{
  0: 'assist: magic platforms',
  1: 'assist: stronger sword',
  2: 'assist: infinite mp',
  3: 'assist: invincibility',
  4: 'assist: worldmap hints',
  5: 'assist: platforming pause 1..6',
  9: 'assist: assist mode enabled',

  18: 'map pins (feature)',
  19: 'map pins (item)',

  49: 'mapshroom: color caverns',
  50: 'mapshroom: mechnanical fort',
  51: 'mapshroom: deep grotto',
  52: 'mapshroom: corrupted tunnels',
  53: 'mapshroom: acid dungeon',
  54: 'mapshroom: lava temple',
  55: 'mapshroom: gold mines',
  56: 'mapshroom: undergrounds',
  57: 'mapshroom: frozen depths',
  58: 'mapshroom: mossy ruins'
},
// 9
{},
// 10
{},
// 11
{},
// 12
{},
// 13
{},
// 14
{},
// 15
{},
// 16
{},
// 17
{},
// 18
{},
// 19
{},
// 20
{},
// 21
{},
// 22
{},
// 23
{},
// 24
{},
// 25
{}
];

for (var x = 0; x < 75; ++x) names[3][x] = 'mindshroom';
for (var x = 0; x < 12; ++x) names[4][x] = 'health piece';
for (var x = 0; x < 25; ++x) names[6][x] = 'ladybug';
for (var x = 0; x < 47; ++x) names[9][x] = 'astral fragment';

const buttons = {
  'abilities': [
    { name: 'Pine Sword', y: 0, x: 0 },
    { name: 'Wall-Bounce', y: 2, x: 30 },
    { name: 'Ground-Bounce', y: 2, x: 33 },
    { name: 'Spin Bounce', y: 2, x: 64 },
    { name: 'Great Slash', y: 0, x: 4 },
    { name: 'Great Spin-Slash', y: 2, x: 47 },
    { name: 'Silver Ornament', y: 2, x: 61 },
    { name: 'Healing Fungus', y: 2, x: 52 },
    { name: 'Shield Cap', y: 2, x: 53 },
    { name: 'Mushmover Infusion', y: 2, x: 28 },
    { name: 'Fire Bounce', y: 2, x: 59 },
    { name: 'Magnetic Fungus', y: 2, x: 50 },
    { name: 'Spin Jump', y: 2, x: 39 },
    { name: 'Royal Ornament', y: 2, x: 48 },
    { name: 'Upwards Dash', y: 0, x: 2 },
    { name: 'Forward Dash', y: 0, x: 1 },
    { name: 'Meteor Strike', y: 2, x: 35 },
    { name: 'Crouch Jump', y: 2, x: 31 },
    { name: 'Magic Crouch Jump', y: 2, x: 49 },
    { name: 'Astral Mushmover', y: 2, x: 67 },
    { name: 'Conjure Mushmover', y: 2, x: 40 },
    { name: 'Dash Crystal', y: 2, x: 24 },
    { name: 'Water Breath', y: 2, x: 32 },
    { name: 'Blue Key Infusion', y: 2, x: 46 },
    { name: 'Teleportation Wand', y: 2, x: 36 },
    { name: 'Acid Sandals', y: 2, x: 58 },
    { name: 'Magic Dash', y: 2, x: 60 },
    { name: 'Power Extractor', y: 2, x: 63 },
  ],
  'spells': [
    { name: 'Bouncy Spore', y: 1, x: 5 },
    { name: 'Spicy Nut', y: 1, x: 6 },
    { name: 'Vibrant Crystal', y: 1, x: 7 },
    { name: 'Returning Contraption', y: 1, x: 8 },
    { name: 'Bouncy Ball', y: 1, x: 9 },
    { name: 'Golden Light', y: 1, x: 11 },
    { name: 'Boost Projectile', y: 1, x: 42 },
    { name: 'Acid Hammer', y: 1, x: 43 },
    { name: 'Berserk', y: 1, x: 72 },
    { name: 'Spark Ball', y: 1, x: 68 },
  ],
  'relics': [
    { name: 'Fast Recovery', y: 1, x: 37 },
    { name: 'Invincibility Stone', y: 1, x: 48 },
    { name: 'Counter Heal', y: 1, x: 38 },
    { name: 'Holy Counter Heal', y: 1, x: 16 },
    { name: 'Recovery Armor', y: 1, x: 76 },
    { name: 'Mind Recovery', y: 1, x: 29 },
    { name: 'Mind Shell', y: 1, x: 21 },
    { name: 'Purple Mindshroom', y: 1, x: 35 },
    { name: 'Refreshing Body', y: 1, x: 26 },
    { name: 'Combo Heal', y: 1, x: 57 },
    { name: 'Blue Health Orb', y: 1, x: 64 },
    { name: 'Green Health Orb', y: 1, x: 56 },
    { name: 'Meditation Blast', y: 1, x: 23 },
    { name: 'Stone Body', y: 1, x: 25 },
    { name: 'Projectile Shield', y: 1, x: 46 },
    { name: 'Spike Shield', y: 1, x: 58 },
    { name: 'Super Healing', y: 1, x: 24 },
    { name: 'Cheaper Healing', y: 1, x: 34 },
    { name: 'Spike-Bounce', y: 1, x: 63 },
    { name: 'Restoration Protection', y: 1, x: 96 },
    { name: 'Lunar Orb', y: 1, x: 87 },
    { name: 'Barry', y: 1, x: 70 },
    { name: 'Magic Bean', y: 1, x: 54 },
    { name: 'Double Shot', y: 1, x: 20 },
    { name: 'Quick Feet', y: 1, x: 13 },
    { name: 'Acid Infusion', y: 1, x: 51 },
    { name: 'Counter Dodge', y: 1, x: 14 },
    { name: 'Shadow Spin', y: 1, x: 41 },
    { name: 'Magic Dice', y: 1, x: 18 },
    { name: 'Devil\'s Dice', y: 1, x: 17 },
  ],
  'relics2': [
    { name: 'Spell Booster', y: 1, x: 39 },
    { name: 'Strong Spell Booster', y: 1, x: 40 },
    { name: 'Spell Sphere', y: 1, x: 19 },
    { name: 'Sword Booster', y: 1, x: 94 },
    { name: 'Fast Charge', y: 1, x: 77 },
    { name: 'Crescent Protecor', y: 1, x: 97 },
    { name: 'Long Slash', y: 1, x: 31 },
    { name: 'Wide Slash', y: 1, x: 32 },
    { name: 'Swordmaster\'s Trinket', y: 1, x: 90 },
    { name: 'Big Meteor Blast', y: 1, x: 71 },
    { name: 'Large Great Slash', y: 1, x: 65 },
    { name: 'Big Spin Slash', y: 1, x: 45 },
    { name: 'Poison Slash', y: 1, x: 30 },
    { name: 'Quick Slash', y: 1, x: 27 },
    { name: 'Sorcerer\'s Slash', y: 1, x: 55 },
    { name: 'Spectre Slash', y: 1, x: 15 },
    { name: 'Fire Slash', y: 1, x: 67 },
    { name: 'Lightning Slash', y: 1, x: 69 },
    { name: 'Counter Attack', y: 1, x: 47 },
    { name: 'Mind Slash', y: 1, x: 22 },
    { name: 'Combo Slash', y: 1, x: 50 },
    { name: 'Shroomouken Relic', y: 1, x: 49 },
    { name: 'Velocity Slash', y: 1, x: 74 },
    { name: 'Dash Lords Trinket', y: 1, x: 36 },
    { name: 'Steady Body', y: 1, x: 61 },
    { name: 'Rose Slash', y: 1, x: 73 },
    { name: 'Knight\'s Trinket', y: 1, x: 93 },
    { name: 'Hex Mushroom', y: 1, x: 33 },
    { name: 'Projectile Pogo', y: 1, x: 66 },
    { name: 'Spicy Mushroom', y: 1, x: 62 },
  ],
  'emblems': [
    { name: 'Double Flash', y: 1, x: 78 },
    { name: 'Short Cooldown', y: 1, x: 79 },
    { name: 'Healing Parry', y: 1, x: 85 },
    { name: 'Parry Vortex', y: 1, x: 86 },
    { name: 'Parry Sprint', y: 1, x: 88 },
    { name: 'Ice Block', y: 1, x: 92 },
    { name: 'Auto Parry', y: 1, x: 95 },
    { name: 'Protection Parry', y: 1, x: 80 },
    { name: 'Mind Parry', y: 1, x: 81 },
    { name: 'Swordmaster Parry', y: 1, x: 82 },
    { name: 'Fire Parry', y: 1, x: 83 },
    { name: 'Power Reflect', y: 1, x: 84 },
    { name: 'Laser Parry', y: 1, x: 89 },
    { name: 'Living Projectile', y: 1, x: 91 },
  ],
  'items': [
    { name: 'All-Seeing Eye', y: 2, x: 65 },
    { name: 'Gold Key', y: 2, x: 73 },
    { name: 'Iron Key', y: 2, x: 69 },
  ],
};

var buts = {};
var w = 0;
var h = 0;

Object.entries(buttons).forEach((e) => {
  const [cat, items] = e;
  let el = document.getElementById(cat + '-box');
  items.forEach((i) => {
    el.innerHTML += '<div class="k-item"><button class="btn btn-secondary" data-bs-toggle="button" data-y='+i.y+' data-x='+i.x+'><img src="img/'+i.name.replaceAll(' ', '_').replaceAll('\'', '')+'.png"><div class="k-label">'+i.name+'</div></button></div>';
  });
});

document.querySelectorAll('#items button[data-bs-toggle]').forEach((el) => {
  let x = el.dataset.x;
  let y = el.dataset.y;
  if (!buts[y]) buts[y] = {};
  buts[y][x] = el;
  el.onclick = (ev) => {
    let val = el.classList.contains('active') ? 1 : 0;
    ws.send(JSON.stringify({'type': 'set', 'x': el.dataset.x, 'y': el.dataset.y, 'value': val}));
  }
});

document.getElementById("give-all").onclick = (e) => {
  document.querySelectorAll('#items button[data-bs-toggle]').forEach((el) => {
    el.classList.remove('active');
    el.click();
  });
};

document.getElementById("remove-all").onclick = (e) => {
  document.querySelectorAll('#items button[data-bs-toggle]').forEach((el) => {
    el.classList.add('active');
    el.click();
  });
};

let collectibles = [
  { type: "setbuf", y: 2, x: 0, len: 9, value: 1 }, // brainnodes
  { type: "setbuf", y: 3, x: 0, len: 75, value: 1 }, // mindshrooms
  { type: "setbuf", y: 6, x: 0, len: 25, value: 1 }, // ladybugs
  { type: "setbuf", y: 9, x: 0, len: 56, value: 1 }, // astral fragments
  { type: "setbuf", y: 8, x: 49, len: 10, value: 1 }, // mapshrooms
  { type: "set", y: 2, x: 45, value: 25 }, // ladybug count
  { type: "set", y: 2, x: 51, value: 25 }, // ladybug count
];

let no_collectibles = [
  { type: "setbuf", y: 2, x: 0, len: 9, value: 0 }, // brainnodes
  { type: "setbuf", y: 3, x: 0, len: 75, value: 0 }, // mindshrooms
  { type: "setbuf", y: 6, x: 0, len: 25, value: 0 }, // ladybugs
  { type: "setbuf", y: 9, x: 0, len: 56, value: 0 }, // astral fragments
  { type: "setbuf", y: 8, x: 49, len: 10, value: 0 }, // mapshrooms
  { type: "set", y: 2, x: 45, value: 0 }, // ladybug count
  { type: "set", y: 2, x: 51, value: 0 }, // ladybug count
];

let upgrades = [
  { type: "setbuf", y: 2, x: 89, len: 4, value: 1 }, // sharpening stones
  { type: "setbuf", y: 4, x: 0, len: 13, value: 1 }, // health pieces
  { type: "set", y: 1, x: 0, value: 10 }, // health
  { type: "setbuf", y: 8, x: 18, len: 2, value: 1 }, // pins
];

let no_upgrades = [
  { type: "setbuf", y: 2, x: 89, len: 4, value: 0 }, // sharpening stones
  { type: "setbuf", y: 4, x: 0, len: 13, value: 0 }, // health pieces
  { type: "set", y: 1, x: 0, value: 7 }, // health
  { type: "setbuf", y: 8, x: 18, len: 2, value: 0 }, // pins
];

document.getElementById("give-collectibles").onclick = (e) => {
  ws.send(JSON.stringify(collectibles));
};

document.getElementById("remove-collectibles").onclick = (e) => {
  ws.send(JSON.stringify(no_collectibles));
};

document.getElementById("give-upgrades").onclick = (e) => {
  ws.send(JSON.stringify(upgrades));
};

document.getElementById("remove-upgrades").onclick = (e) => {
  ws.send(JSON.stringify(no_upgrades));
};

document.getElementById("give-map").onclick = (e) => {
  ws.send(JSON.stringify({'type': 'map', 'value': 1}));
};

document.getElementById("remove-map").onclick = (e) => {
  ws.send(JSON.stringify({'type': 'map', 'value': 0}));
};

document.getElementById("warp").onclick = (e) => {
  let mode = 'room';
  if (document.getElementById('warp-instant').checked) mode = 'instant';
  ws.send(JSON.stringify({'type': 'warp', 'room': document.getElementById('room').value, mode: mode}));
};


var map = document.getElementById('rooms');
var mx = 0;
var my = 0;
panzoom(map);
map.onclick = e => {
  var room = parseInt(e.target.innerHTML.replaceAll(/[^0-9]/g, ''));
  if (e.target.dataset.room) room = parseInt(e.target.dataset.room);
  document.getElementById('room').value = room;
};


var ws = new WebSocket(window.location.href.replace('http', 'ws'));
ws.binaryType = 'arraybuffer';
var el = document.getElementById('data');
var lel = document.getElementById('log');

var oldw = 0;
var checks = {};
var inputs = {};

ws.onopen = function() {
  ws.send(JSON.stringify({'type':'get'}));
  setInterval(function() {
    ws.send(JSON.stringify({'type':'get'}));
  }, 1000);
};

ws.onmessage = function (e) {
  var buf = new Int32Array(e.data);
  w = buf[0];
  h = buf[1];
  var data = [];
  for (let y = 0; y < h; ++y) {
    data[y] = Array.from(buf.slice(y*w+8, y*w+w+8));
  }
  if (!data || data.length == 0) {
    document.getElementById("warning").style.display = "flex";
    document.getElementById("online").style.display = "none";
    return;
  }
  document.getElementById("warning").style.display = "none";
  document.getElementById("online").style.display = "flex";

  Object.entries(data).forEach(entry => {
    const [y, row] = entry;
    Object.entries(row).forEach(entry => {
      const [x, val] = entry;
      if (buts[y] && buts[y][x]) {
        if (val > 0) buts[y][x].classList.add('active');
        else buts[y][x].classList.remove('active');
      }

      if (checks[y] && checks[y][x]) checks[y][x].checked = val > 0;

      if (inputs[y] && inputs[y][x] && inputs[y][x] != document.activeElement && inputs[y][x].dataset.val != val) {
        if (y != 2 || (x != 41 && x != 42 && x != 43)) {
          let line = document.createElement('div')
          line.innerHTML = ((new Date).toLocaleTimeString('it-IT')) + " | " + inputs[2][43].value + ":" + inputs[2][42].value + ":" + inputs[2][41].value + " | " + y + ", " + x + " : " + inputs[y][x].value + " -> " + val;
          log.prepend(line);
        }
        inputs[y][x].value = val;
        inputs[y][x].dataset.val = val;
      }
    });
  });

  // old debug stuff
  if (w != oldw) {
    el.innerHTML = '';
    checks = {};
    inputs = {};
    let rel = document.createElement('div');
    rel.className = 'xrow';
    let label = document.createElement('span');
    label.className = 'label';
    label.innerHTML = w + ', ' + h;
    rel.append(label);
    for (let x = 0; x < w; ++x) {
      let iel = document.createElement('div');
      iel.className = 'cell header';
      iel.innerHTML = x;
      rel.append(iel);
    }
    el.append(rel);
  }
  oldw = w;
  Object.entries(data).forEach(entry => {
    const [y, row] = entry;
    let rel = document.querySelector('.xrow[data-row="'+y+'"]');
    let add = false;
    if (!rel) {
      add = true;
      rel = document.createElement('div');
      rel.className = 'xrow';
      rel.dataset.row = y;
      let label = document.createElement('span');
      label.className = 'label';
      label.innerHTML = '<span class="num">' + y + '</span>' + (row_names[y] ? '<span class="name">'+row_names[y]+'</span>' : '');
      let all = document.createElement('button');
      all.innerHTML = 'all';
      all.dataset.row = y;
      all.onclick = function(e) {
        document.querySelectorAll('input[type="checkbox"][data-y="'+e.target.dataset.row+'"]').forEach(function(i) {
          i.click();
        });
      };
      label.prepend(all);
      rel.append(label);
    }
    Object.entries(row).forEach(entry => {
      const [x, val] = entry;
      if (!checks[y] || !checks[y][x]) {
        let iel = document.createElement('div');
        iel.className = 'cell';
        iel.dataset.col = x;
        iel.dataset.row = y;
        if (names[y] && names[y][x])
        iel.title = names[y][x];

        let box = document.createElement('input');
        box.type = 'checkbox';
        box.dataset.x = x;
        box.dataset.y = y;
        box.dataset.val = val;
        box.checked = val > 0;
        //box.disabled = val > 1;
        box.onclick = function(e) {
          let val = e.target.checked ? 1 : 0;
          ws.send(JSON.stringify({'type': 'set', 'x': e.target.dataset.x, 'y': e.target.dataset.y, 'value': val}));
        };
        if (!checks[y]) checks[y] = {};
        checks[y][x] = box;
        iel.append(box);

        let box2 = document.createElement('input');
        box2.type = 'text';
        box2.size = 2;
        box2.dataset.x = x;
        box2.dataset.y = y;
        box2.dataset.val = val;
        box2.value = val;
        box2.onchange = function(e) {
          ws.send(JSON.stringify({'type': 'set', 'x': e.target.dataset.x, 'y': e.target.dataset.y, 'value': e.target.value}));
        };
        if (!inputs[y]) inputs[y] = {};
        inputs[y][x] = box2;
        iel.append(box2);

        rel.append(iel);
      }
    });
    if (add) el.append(rel);
  });
};

/*
Relics / Emblems = 2
Mindshrooms = 1
Brain Nodes = 2
Ladybugs = 1
Astral Fragments = 1
Health Nodes = 2
Abilities = 2
Mapshrooms = 1
it add adds up to 443 points
*/

// skins
var skins = {
  'Samuraicap': {
    in: {
      'preview': { w: 64, h: 64 },
      'side': { w: 59, h: 33 },
      'spin': { w: 61, h: 41 },
      'trail': { w: 59, h: 48 },
    },
    out: {
      '41E3319E': { src: 'preview', w: 64, h: 64 },     // preview

      // RIGHTS
      'FC41A9C1': { src: 'side', w: 59, h: 33 },
      '71D4E8FC': { src: 'side', w: 58, h: 39, a: 14.5, x: 5, y: 0 },
      '444103F0': { src: 'side', w: 58, h: 42, a: -14.5, x: -4, y: -1 },
      '87802667': { src: 'side', w: 33, h: 59, a: 90 },
      '79484F87': { src: 'side', w: 58, h: 39, a: 188.7, x: -3, y: 1 },
      '243856E9': { src: 'side', w: 39, h: 58, a: 98, x: 1, y: 2 },
      'EB7D142B': { src: 'side', w: 39, h: 58, a: -82, x: -1, y: -3 },

      '4F196346': { src: 'side', w: 60, h: 31, m: [1.00, 0.00, 0.00, 31 / 33, 0, 0] },     // squish
      '8C7C1241': { src: 'side', w: 50, h: 33, m: [50 / 59, 0.00, 0.00, 1.00, 0, 0] },     // squish
      '49E9B9A9': { src: 'side', w: 55, h: 33, m: [55 / 59, 0.00, 0.00, 1.00, 0, 0] },     // squish
      '218B7A12': { src: 'side', w: 59, h: 38, m: [1.07, 0, 0, 1.2, -2, -1] },             // squish
      'A240653F': { src: 'side', w: 53, h: 35, m: [53 / 59, 0.00, 0.00, 35 / 33, 0, 0] },  // squish
      'A894477F': { src: 'side', w: 62, h: 33, m: [62 / 59, 0.00, 0.00, 1.00, 0, 0] },     // squish
      'B7FD89BC': { src: 'side', w: 62, h: 30, m: [62 / 59, 0.00, 0.00, 30 / 33, 0, 0] },  // squish
      'E1FA2678': { src: 'side', w: 57, h: 33, m: [57 / 59, 0.00, 0.00, 1.00, 0, 0] },     // squish

      '69A692A8': { src: 'side', w: 59, h: 33, m: [1.00, 0.00, 0.00, 1.00, 0, 0], f: 'contrast(110%) brightness(130%)' },     // brighter blink

      '7EE6CAC4': { src: 'spin', w: 61, h: 41, m: [1.00, 0.00, 0.00, 1.00, 0, 0] },      // spin
      '25888596': { src: 'spin', w: 61, h: 42, m: [1.00, 0.00, 0.00, 1.00, 0, 0] },      // 1px higher?
      '2A0B4D22': { src: 'spin', w: 43, h: 61, m: [0.00, 1.00, -1.00, 0.00, 42, 0] },    // 90deg
      '28D55BC9': { src: 'spin', w: 43, h: 61, m: [0.00, -1.00, 1.00, 0.00, 0, 61] },    // -90deg
      '9ACA061B': { src: 'spin', w: 61, h: 43, m: [-1.00, 0.00, 0.00, -1.00, 61, 42] },  // 180deg

      '44F74DC3': { src: 'spin', w: 65, h: 46, m: [1.00, 0.00, 0.00, 1.00, 2, 2], f: 'contrast(60%) sepia(200%) saturate(400%) hue-rotate(310deg) drop-shadow(0 0 2px #922) brightness(70%) saturate(200%)' },        // spin trail red
      'BA6253FB': { src: 'spin', w: 65, h: 46, m: [1.00, 0.00, 0.00, 1.00, 2, 2], f: 'contrast(60%) sepia(200%) saturate(400%) hue-rotate(60deg) drop-shadow(0 0 2px #292) brightness(70%) saturate(200%)' },        // spin trail green
      '1AE840F5': { src: 'spin', w: 65, h: 46, m: [1.00, 0.00, 0.00, 1.00, 2, 2], f: 'contrast(60%) sepia(200%) saturate(400%) hue-rotate(175deg) drop-shadow(0 0 2px #229) brightness(70%) saturate(200%)' },        // spin trail blue
      'AEBA51E8': { src: 'spin', w: 65, h: 46, m: [1.00, 0.00, 0.00, 1.00, 2, 2], f: 'contrast(60%) sepia(200%) saturate(400%) hue-rotate(250deg) drop-shadow(0 0 2px #929) brightness(70%) saturate(200%)' },        // spin trail purple

      'EDD1D6CD': { src: 'trail', w: 59, h: 48, m: [1.00, 0.00, 0.00, 1.00, 0, 0] },        // ghost trail
      'F58DFFDB': { src: 'trail', w: 63, h: 52, m: [1.00, 0.00, 0.00, 1.00, 2, 2], f: 'contrast(60%) sepia(200%) saturate(400%) hue-rotate(310deg) drop-shadow(0 0 2px #922) brightness(70%) saturate(200%)' },        // ghost trail red
      'E0E6F821': { src: 'trail', w: 63, h: 52, m: [1.00, 0.00, 0.00, 1.00, 2, 2], f: 'contrast(60%) sepia(200%) saturate(400%) hue-rotate(60deg) drop-shadow(0 0 2px #292) brightness(70%) saturate(200%)' },        // ghost trail green
      '87A6E7A1': { src: 'trail', w: 63, h: 52, m: [1.00, 0.00, 0.00, 1.00, 2, 2], f: 'contrast(60%) sepia(200%) saturate(400%) hue-rotate(175deg) drop-shadow(0 0 2px #229) brightness(70%) saturate(200%)' },        // ghost trail blue
      '37C5BE64': { src: 'trail', w: 63, h: 52, m: [1.00, 0.00, 0.00, 1.00, 2, 2], f: 'contrast(60%) sepia(200%) saturate(400%) hue-rotate(250deg) drop-shadow(0 0 2px #929) brightness(70%) saturate(200%)' },        // ghost trail purple

      // LEFTS
      // side + rotates
      '4EF813FB': { mirror: 'FC41A9C1' },
      '158CDF3E': { mirror: '71D4E8FC' },
      '15358A00': { mirror: '444103F0' },
      '678E3681': { mirror: '87802667' },
      '3A7A6037': { mirror: '79484F87' },
      '24E26535': { mirror: '243856E9' },
      'E95571BA': { mirror: 'EB7D142B' },
      // side squishes
      '7E28F932': { mirror: '4F196346' },
      'D89F47E8': { mirror: '8C7C1241' },
      'D90794AA': { mirror: '49E9B9A9' },
      '828035B8': { mirror: '218B7A12' },
      '1689E24D': { mirror: 'A240653F' },
      '23B716A8': { mirror: 'A894477F' },
      '6ADED588': { mirror: 'B7FD89BC' },
      '1A7754F2': { mirror: 'E1FA2678' },
      // blink
      '7C8B5890': { mirror: '69A692A8' },
      // spin
      '3477FB03': { mirror: '7EE6CAC4' },
      '604CC070': { mirror: '25888596' },
      'C2276784': { mirror: '2A0B4D22' },
      'C2858CD6': { mirror: '28D55BC9' },
      '6611F606': { mirror: '9ACA061B' },
      // spin trails
      'C8BDAC4C': { mirror: '1AE840F5' },
      'ADEA117A': { mirror: '44F74DC3' },
      '8C02D12C': { mirror: 'AEBA51E8' },
      'E96A3903': { mirror: 'BA6253FB' },
      // trail
      '51835505': { mirror: 'EDD1D6CD' },
      '8F40D97F': { mirror: '37C5BE64' },
      '83200992': { mirror: '87A6E7A1' },
      '06BCD90E': { mirror: 'E0E6F821' },
      '933C336A': { mirror: 'F58DFFDB' },
    }
  }
};

var sources = {};
var selectedSkin = skins.Samuraicap;

var knownSource = (name) => {
  return !!selectedSkin.in[name];
};

var dropHandler = (e) => {
  e.preventDefault();
  if (e.dataTransfer.items) {
    for (var i = 0; i < e.dataTransfer.items.length; i++) {
      if (e.dataTransfer.items[i].kind === 'file') {
        var file = e.dataTransfer.items[i].getAsFile();
        var reader = new FileReader();
        reader.filename = e.target.className;
        let filename = file.name.replace(/\.png$/ig, '');
        if (knownSource(filename))
          reader.filename = filename;
        reader.onload = (() => {
          return (f) => {
            let filename = f.target.filename;
            sources[filename] = { img: new Image(), in: selectedSkin.in[filename] };
            sources[filename].img.dataset.filename = filename;
            sources[filename].img.src = f.target.result;
            sources[filename].img.onload = (g) => {
              var filename = g.target.dataset.filename;
              var canvas = document.querySelector('#skin-input .' + filename);
              var ctx = canvas.getContext('2d');
              ctx.imageSmoothingEnabled = false;
              ctx.clearRect(0, 0, canvas.width, canvas.height);
              ctx.drawImage(sources[filename].img, 0, 0, sources[filename].img.width, sources[filename].img.height, 0, 0, canvas.width, canvas.height);
              updateSkin();
            }
          }
        })(e.target);
        reader.readAsDataURL(file);
      }
    }
  }
}

var dragOverHandler = (e) => {
  e.preventDefault();
};

// obsolete with premultiplied alpha
const filterSkin = (o) => {
  const imageData = o.ctx.getImageData(0, 0, o.canvas.width, o.canvas.height);
  const data = imageData.data;
  for (let i = 0; i < data.length; i += 4) {
    if (data[i + 3] < 10) {
      data[i] = 0
      data[i + 1] = 0
      data[i + 2] = 0
      data[i + 3] = 0
    }
  }
  o.ctx.putImageData(imageData, 0, 0);
};

var drawRotated = (o) => {
  var rad = (o.a || 0) * Math.PI / 180;
  var i = sources[o.src].in;
  o.ctx.save();
  o.ctx.translate(o.w/2 + (o.x || 0), o.h/2 + (o.y || 0));
  o.ctx.rotate(rad);
  o.ctx.translate(-i.w/2, -i.h/2);
  o.ctx.drawImage(sources[o.src].img, 0, 0);
  o.ctx.restore();
}

var updateSkin = () => {
  var scale = document.getElementById('skin-debug-scale').value;
  document.querySelectorAll('#skin-input canvas').forEach((canvas) => {
    var id = canvas.className;
    var i = selectedSkin.in[id];
    canvas.style.width = (scale * i.w) + 'px';
    canvas.style.height = (scale * i.h) + 'px';
  });
  if (Object.keys(sources).length == 0) return;
  var s = selectedSkin;
  var el = document.getElementById('skin-output');
  while (el.firstChild) el.removeChild(el.firstChild);
  document.getElementById('skin-download').disabled = false;

  Object.entries(s.out).forEach(e => {
    const [id, o] = e;
    o.canvas = document.createElement('canvas');
    o.canvas.className = id;
    //let mtx = [1.00, 0.00, 0.00, 1.00, 0, 0];
    if (o.mirror) {
      o.w = s.out[o.mirror].w;
      o.h = s.out[o.mirror].h;
      o.f = s.out[o.mirror].f;
      o.m = s.out[o.mirror].m;
      o.a = s.out[o.mirror].a;
      o.x = s.out[o.mirror].x;
      o.y = s.out[o.mirror].y;
      o.src = s.out[o.mirror].src;
    }
    if (o.w) o.canvas.width = o.w;
    if (o.h) o.canvas.height = o.h;
    o.canvas.style.backgroundImage = 'url(img/caps/Samuraicap/'+id+'.png)';
    o.canvas.style.width = (scale * o.canvas.width) + 'px';
    o.canvas.style.height = (scale * o.canvas.height) + 'px';
    o.canvas.title = id + ' ' + o.canvas.width + 'x' + o.canvas.height;
    o.ctx = o.canvas.getContext('2d');
    o.ctx.imageSmoothingEnabled = document.getElementById('skin-smoothing').checked;
    if (o.mirror) {
      o.ctx.translate(o.canvas.width, 0);
      o.ctx.scale(-1, 1);
    }
    if (o.m) o.ctx.transform(...o.m);
    o.ctx.filter = o.f;
    if (document.getElementById('skin-debug-switch').checked) {
      document.getElementById('skin').classList.add('debug');
      o.ctx.globalAlpha = document.getElementById('skin-debug-opacity').value / 100;
      o.ctx.filter = (o.ctx.filter == 'none' ? '' : o.ctx.filter + ' ') + document.getElementById('skin-debug-filter').value;
      o.canvas.onclick = setTexture;
    }
    if (o.src && sources[o.src]) {
      if (o.m && o.m.length) o.ctx.drawImage(sources[o.src].img, 0, 0);
      else drawRotated(o);
    }
    document.getElementById('skin-output').append(o.canvas);
  });
};

Object.entries(skins).forEach(e => {
  const [name, s] = e;
  Object.entries(s.in).forEach(e => {
    const [id, i] = e;
    var scale = document.getElementById('skin-debug-scale').value;
    let canvas = document.createElement('canvas');
    canvas.className = id;
    canvas.width = i.w;
    canvas.height = i.h;
    canvas.style.width = (scale * i.w) + 'px';
    canvas.style.height = (scale * i.h) + 'px';
    canvas.title = id + ' ' + i.w + 'x' + i.h;
    canvas.ondrop = dropHandler;
    canvas.ondragover = dragOverHandler;
    document.getElementById('skin-input').append(canvas);
  });
});


var formatDate = (date) => {
  var pad = (num) => {
    return (num < 10 ? '0' : '') + num;
  };
  return date.getFullYear() +
    '-' + pad(date.getMonth() + 1) +
    '-' + pad(date.getDate()) +
    '_' + pad(date.getHours()) +
    '-' + pad(date.getMinutes()) +
    '-' + pad(date.getSeconds());
}

var downloadSkin = () => {
  var format = document.getElementById('skin-format').value;
  var pma = document.getElementById('skin-premultiply').checked;
  var zip = new JSZip();
  Object.entries(selectedSkin.out).forEach(e => {
    const [id, o] = e;
    if (o.canvas) {
      if (format == 'png' || format == 'all') {
        var uri = o.canvas.toDataURL();
        var idx = uri.indexOf('base64,') + 'base64,'.length;
        var content = uri.substring(idx);
        zip.file((format == 'all' ? 'png/' : '') + id + '.png', content, { base64: true });
      }
      if (format == 'dds' || format == 'all') {
        var header = new Uint8Array([0x44, 0x44, 0x53, 0x20, 0x7C, 0x00, 0x00, 0x00, 0x0F, 0x10, 0x00, 0x00, 0x21, 0x00, 0x00, 0x00, 0x39, 0x00, 0x00, 0x00, 0xE4, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x20, 0x00, 0x00, 0x00, 0x41, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x20, 0x00, 0x00, 0x00, 0x00, 0x00, 0xFF, 0x00, 0x00, 0xFF, 0x00, 0x00, 0xFF, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xFF, 0x00, 0x10, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00]);
        header[12] = o.h;
        header[16] = o.w;
        const imageData = o.ctx.getImageData(0, 0, o.canvas.width, o.canvas.height);
        for (let i = 0; i < imageData.data.length; i += 4) {
          [imageData.data[i], imageData.data[i + 2]] = [imageData.data[i + 2], imageData.data[i]]
          if (pma) {
            var A = imageData.data[i + 3] / 255;
            imageData.data[i]   = Math.floor(imageData.data[i] * A);
            imageData.data[i+1] = Math.floor(imageData.data[i+1] * A);
            imageData.data[i+2] = Math.floor(imageData.data[i+2] * A);
          }
        }
        var data = new Uint8Array(header.length + imageData.data.length);
        data.set(header);
        data.set(imageData.data, header.length);
        zip.file((format == 'all' ? 'dds/' : '') + id + '.dds', data.buffer);
      }
    }
  });
  if (format == 'all') {
    document.querySelectorAll('#skin-input canvas').forEach(e => {
      var uri = e.toDataURL();
      var idx = uri.indexOf('base64,') + 'base64,'.length;
      var content = uri.substring(idx);
      zip.file('original/' + e.className + '.png', content, { base64: true });
    });
  }
  var date = formatDate(new Date());
  var zipname = 'kantarel_cap.zip';
  if (format == 'all') zipname = 'kantarel_cap_bundle_' + date + '.zip';
  if (format == 'png') zipname = 'kantarel_cap_png_' + date + '.zip';
  if (format == 'dds') zipname = 'kantarel_cap_dds_' + date + '.zip';
  zip.generateAsync({type:"blob"})
    .then(function(content) {
      saveAs(content, zipname);
    });
};

var updateDebug = () => {
  var on = document.getElementById('skin-debug-switch').checked;
  if (on) {
    document.getElementById('skin').classList.add('debug');
  } else {
    document.getElementById('skin').classList.remove('debug');
  }
  updateSkin();
};

var setTexture = (e) => {
  var id = e.target.className;
  var o = selectedSkin.out[id];
  document.getElementById('skin-texture').dataset.id = id;
  document.getElementById('skin-id').innerHTML = id;
  document.getElementById('skin-id-angle').value = o.a || 0;
  document.getElementById('skin-id-x').value = o.x || 0;
  document.getElementById('skin-id-y').value = o.y || 0;
  document.getElementById('skin-id-matrix').value = o.m ? o.m.join(',') : '';
  document.getElementById('skin-id-filter').value = o.f || '';
};

document.getElementById('skin-download').onclick = downloadSkin;
document.getElementById('skin-smoothing').onchange = updateSkin;
document.getElementById('skin').ondrop = dropHandler;
document.getElementById('skin').ondragover = dragOverHandler;
document.getElementById('skin-debug-switch').onchange = updateDebug;
document.getElementById('skin-debug-opacity').onchange = updateSkin;
document.getElementById('skin-debug-scale').onchange = updateSkin;
document.getElementById('skin-debug-filter').onkeyup = updateSkin;

var changeAngle = (e) => {
  var id = document.getElementById('skin-texture').dataset.id;
  var o = selectedSkin.out[id];
  o.a = e.target.value;
  updateSkin();
};

var changeX = (e) => {
  var id = document.getElementById('skin-texture').dataset.id;
  var o = selectedSkin.out[id];
  o.x = 1*e.target.value;
  updateSkin();
};

var changeY = (e) => {
  var id = document.getElementById('skin-texture').dataset.id;
  var o = selectedSkin.out[id];
  o.y = 1*e.target.value;
  updateSkin();
};

var changeMatrix = (e) => {
  var id = document.getElementById('skin-texture').dataset.id;
  var o = selectedSkin.out[id];
  var strs = e.target.value.split(',');
  var mtx = strs.map(Number);
  console.log(mtx);
  o.m = mtx;
  updateSkin();
};

var changeFilter = (e) => {
  var id = document.getElementById('skin-texture').dataset.id;
  var o = selectedSkin.out[id];
  o.f = e.target.value;
  updateSkin();
};

document.getElementById('skin-id-angle').onchange = changeAngle;
document.getElementById('skin-id-x').onchange = changeX;
document.getElementById('skin-id-y').onchange = changeY;
document.getElementById('skin-id-matrix').onchange = changeMatrix;
document.getElementById('skin-id-filter').onkeyup = changeFilter;

window.onload = (e) => updateDebug;
