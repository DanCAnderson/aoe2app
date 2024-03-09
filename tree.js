/* Underscore format is used for raw data and image files */
/* 'name' property is used for user display */

const CHAMPION = 1;
const HALBERDIER = 2;
const SQUIRES = 3;
const EAGLE_SCOUT = 4;
const PIKEMAN = 5;
const SPEARMAN = 6;
const SUPPLIES = 7;
const LONG_SWORDSMAN = 8;
const TWO_HANDED_SWORDSMAN = 9;
const SCOUT_CAVALRY = 10;
const LIGHT_CAVALRY = 11;
const HUSSAR = 12;
const KNIGHT = 13;
const CAVALIER = 14;
const PALADIN = 15;
const CAMEL_RIDER = 16;
const HEAVY_CAMEL_RIDER = 17;
const BLOODLINES = 18;
const HUSBANDRY = 19;
const BATTLE_ELEPHANT = 20;
const STEPPE_LANCER = 21;
const ARCHER = 22;
const CROSSBOWMAN = 23;
const ARBALESTER = 24;
const SKIRMISHER = 25;
const ELITE_SKIRMISHER = 26;
const HAND_CANNONEER = 27;
const CAVALRY_ARCHER = 28;
const HEAVY_CAV_ARCHER = 29;
const THUMB_RING = 30;
const PARTHIAN_TACTICS = 31;
const ONAGER = 32;
const SIEGE_ONAGER = 33;
const SIEGE_RAM = 34;
const HEAVY_SCORPION = 35;
const BOMBARD_CANNON = 36;
const IRON_CASTING = 37;
const CHAIN_BARDING_ARMOR = 38;
const CHAIN_MAIL_ARMOR = 39;
const LEATHER_ARCHER_ARMOR = 40;
const RING_ARCHER_ARMOR = 41;
const PLATE_BARDING_ARMOR = 42;
const PLATE_MAIL_ARMOR = 43;
const BLAST_FURNACE = 44;
const BODKIN_ARROW = 45;
const BRACER = 46;
const REDEMPTION = 47;
const ATONEMENT = 48;
const HERESY = 49;
const BLOCK_PRINTING = 50;
const ILLUMINATION = 51;
const THEOCRACY = 52;
const FAITH = 53;
const FERVOR = 54;
const SANCTITY = 55;
const ARCHITECTURE = 56;
const BOMBARD_TOWER = 57;
const SIEGE_ENGINEERS = 58;
const TREADMILL_CRANE = 59;
const CROP_ROTATION = 60;
const GOLD_SHAFT_MINING = 61;
const GUILDS = 62;
const STONE_SHAFT_MINING = 63;
const TWO_MAN_SAW = 64;
const FIRE_GALLEY = 65;
const FIRE_SHIP = 66;
const FAST_FIRE_SHIP = 67;
const CANNON_GALLEON = 68;
const ELITE_CANNON_GALLEON = 69;
const DEMOLITION_RAFT = 70;
const DEMOLITION_SHIP = 71;
const HEAVY_DEMO_SHIP = 72;
const GALLEY = 73;
const WAR_GALLEY = 74;
const GALLEON = 75;
const WATCH_TOWER = 76;
const GUARD_TOWER = 77;
const KEEP = 78;
//const BOMBARD_TOWER = 79;
const STONE_WALL = 80;
const FORTIFIED_WALL = 81;
const HOARDINGS = 82;
const SAPPERS = 83;

const ELEPHANT_ARCHER = 84;
const ARMORED_ELEPHANT = 85;

const GAMBESONS =86;
const DROMON = 87;
const ELITE_BATTLE_ELEPHANT = 88;


const techs = {};

function populateTechTree(tree) {
  
  Vue.set(tree, 'BARRACKS', {});

  Vue.set(tree.BARRACKS, CHAMPION, { name: 'Champion', column: 1, row: 4, req: TWO_HANDED_SWORDSMAN });
  Vue.set(tree.BARRACKS, HALBERDIER, { name: 'Halberdier', column: 2, row: 3, req: PIKEMAN });
  Vue.set(tree.BARRACKS, SQUIRES, { name: 'Squires', column: 5, row: 2 });
  Vue.set(tree.BARRACKS, EAGLE_SCOUT, { name: 'Eagle Scout', column: 3, row: 2 });
  Vue.set(tree.BARRACKS, PIKEMAN, { name: 'Pikeman', column: 2, row: 2, req: SPEARMAN, upgrade: HALBERDIER });
  Vue.set(tree.BARRACKS, SPEARMAN, { name: 'Spearman', column: 2, row: 1, upgrade: PIKEMAN });
  Vue.set(tree.BARRACKS, SUPPLIES, { name: 'Supplies', column: 4, row: 1, upgrade: GAMBESONS });
  Vue.set(tree.BARRACKS, GAMBESONS, { name: 'Gambesons', column: 4, row: 2, req: SUPPLIES })
  Vue.set(tree.BARRACKS, LONG_SWORDSMAN, { name: 'Longswordsman', column: 1, row: 2, upgrade: TWO_HANDED_SWORDSMAN });
  Vue.set(tree.BARRACKS, TWO_HANDED_SWORDSMAN, { name: 'Two Handed Swordsman', column: 1, row: 3, req: LONG_SWORDSMAN, upgrade: CHAMPION });

  Vue.set(tree, 'STABLE', {});

  Vue.set(tree.STABLE, SCOUT_CAVALRY, { name: 'Scout Cavalry', column: 1, row: 1, upgrade: LIGHT_CAVALRY });
  Vue.set(tree.STABLE, LIGHT_CAVALRY, { name: 'Light Cavalry', column: 1, row: 2, req: SCOUT_CAVALRY, upgrade: HUSSAR });
  Vue.set(tree.STABLE, HUSSAR, { name: 'Hussar', column: 1, row: 3, req: LIGHT_CAVALRY });
  Vue.set(tree.STABLE, KNIGHT, { name: 'Knight', column: 2, row: 2, upgrade: CAVALIER });
  Vue.set(tree.STABLE, CAVALIER, { name: 'Cavalier', column: 2, row: 3, req: KNIGHT, upgrade: PALADIN });
  Vue.set(tree.STABLE, PALADIN, { name: 'Paladin', column: 2, row: 4, req: CAVALIER });
  Vue.set(tree.STABLE, CAMEL_RIDER, { name: 'Camel Rider', column: 3, row: 2, upgrade: HEAVY_CAMEL_RIDER });
  Vue.set(tree.STABLE, HEAVY_CAMEL_RIDER, { name: 'Heavy Camel Rider', column: 3, row: 3, req: CAMEL_RIDER });
  Vue.set(tree.STABLE, BLOODLINES, { name: 'Bloodlines', column: 2, row: 1 });
  Vue.set(tree.STABLE, HUSBANDRY, { name: 'Husbandry', column: 6, row: 2 });
  Vue.set(tree.STABLE, BATTLE_ELEPHANT, { name: 'Battle Elephant', column: 4, row: 2, upgrade: ELITE_BATTLE_ELEPHANT });
  Vue.set(tree.STABLE, ELITE_BATTLE_ELEPHANT, { name: 'Elite Battle Elephant', column: 4, row: 3, req: BATTLE_ELEPHANT });
  Vue.set(tree.STABLE, STEPPE_LANCER, { name: 'Steppe Lancer', column: 5, row: 2 });

  Vue.set(tree, 'ARCHERY_RANGE', {});

  Vue.set(tree.ARCHERY_RANGE, ARCHER, { name: 'Archer' , column: 1, row: 1, upgrade: CROSSBOWMAN });
  Vue.set(tree.ARCHERY_RANGE, CROSSBOWMAN, { name: 'Crossbowman', column: 1, row: 2, req: ARCHER, upgrade: ARBALESTER });
  Vue.set(tree.ARCHERY_RANGE, ARBALESTER, { name: 'Arbalester', column: 1, row: 3, req: CROSSBOWMAN });
  Vue.set(tree.ARCHERY_RANGE, SKIRMISHER, { name: 'Skirmisher', column: 2, row: 1, upgrade: ELITE_SKIRMISHER });
  Vue.set(tree.ARCHERY_RANGE, ELITE_SKIRMISHER, { name: 'Elite Skirmisher', column: 2, row: 2, req: SKIRMISHER });
  Vue.set(tree.ARCHERY_RANGE, HAND_CANNONEER, { name: 'Hand Cannoneer', column: 3, row: 3 });
  Vue.set(tree.ARCHERY_RANGE, CAVALRY_ARCHER, { name: 'Cavalry Archer', column: 4, row: 2, upgrade: HEAVY_CAV_ARCHER });
  Vue.set(tree.ARCHERY_RANGE, HEAVY_CAV_ARCHER, { name: 'Heavy Cavalry Archer', column: 4, row: 3, req: CAVALRY_ARCHER });
  Vue.set(tree.ARCHERY_RANGE, ELEPHANT_ARCHER, { name: 'Elephant Archer', column: 5, row: 2 });
  Vue.set(tree.ARCHERY_RANGE, THUMB_RING, { name: 'Thumb Ring', column: 6, row: 2 });
  Vue.set(tree.ARCHERY_RANGE, PARTHIAN_TACTICS, { name: 'Parthian Tactics', column: 6, row: 3 });

  Vue.set(tree, 'SIEGE_WORKSHOP', {});

  Vue.set(tree.SIEGE_WORKSHOP, ONAGER, { name: 'Onager', column: 3, row: 2, upgrade: SIEGE_ONAGER });
  Vue.set(tree.SIEGE_WORKSHOP, SIEGE_ONAGER, { name: 'Siege Onager', column: 3, row: 3, req: ONAGER });
  Vue.set(tree.SIEGE_WORKSHOP, SIEGE_RAM, { name: 'Siege Ram', column: 1, row: 3 });
  Vue.set(tree.SIEGE_WORKSHOP, ARMORED_ELEPHANT, { name: 'Armored Elephant', column: 2, row: 2 });
  Vue.set(tree.SIEGE_WORKSHOP, HEAVY_SCORPION, { name: 'Heavy Scorpion', column: 4, row: 2 });
  Vue.set(tree.SIEGE_WORKSHOP, BOMBARD_CANNON, { name: 'Bombard Cannon', column: 5, row: 2 });

  Vue.set(tree, 'BLACKSMITH', {});

  Vue.set(tree.BLACKSMITH, IRON_CASTING, { name: 'Iron Casting', column: 3, row: 2, upgrade: BLAST_FURNACE });
  Vue.set(tree.BLACKSMITH, CHAIN_BARDING_ARMOR, { name: 'Chain Barding Armor', column: 4, row: 2, upgrade: PLATE_BARDING_ARMOR });
  Vue.set(tree.BLACKSMITH, CHAIN_MAIL_ARMOR, { name: 'Chain Mail Armor', column: 5, row: 2, upgrade: PLATE_MAIL_ARMOR });
  Vue.set(tree.BLACKSMITH, LEATHER_ARCHER_ARMOR, { name: 'Leather Archer Armor', column: 1, row: 2, upgrade: RING_ARCHER_ARMOR });
  Vue.set(tree.BLACKSMITH, RING_ARCHER_ARMOR, { name: 'Ring Archer Armor', column: 1, row: 3, req: LEATHER_ARCHER_ARMOR });
  Vue.set(tree.BLACKSMITH, PLATE_BARDING_ARMOR, { name: 'Plate Barding Armor', column: 4, row: 3, req: CHAIN_BARDING_ARMOR });
  Vue.set(tree.BLACKSMITH, PLATE_MAIL_ARMOR, { name: 'Plate Mail Armor', column: 5, row: 3, req: CHAIN_MAIL_ARMOR });
  Vue.set(tree.BLACKSMITH, BLAST_FURNACE, { name: 'Blast Furnace', column: 3, row: 3, req: IRON_CASTING });
  Vue.set(tree.BLACKSMITH, BODKIN_ARROW, { name: 'Bodkin Arrow', column: 2, row: 2, upgrade: BRACER });
  Vue.set(tree.BLACKSMITH, BRACER, { name: 'Bracer', column: 2, row: 3, req: BODKIN_ARROW });

  Vue.set(tree, 'DOCK', {});

  Vue.set(tree.DOCK, FIRE_GALLEY, { name: 'Fire Galley', column: 1, row: 1, upgrade: FIRE_SHIP });
  Vue.set(tree.DOCK, FIRE_SHIP, { name: 'Fire Ship', column: 1, row: 2, upgrade: FAST_FIRE_SHIP, req: FIRE_GALLEY });
  Vue.set(tree.DOCK, FAST_FIRE_SHIP, { name: 'Fast Fire Ship', column: 1, row: 3, req: FIRE_GALLEY, FIRE_SHIP });
  Vue.set(tree.DOCK, CANNON_GALLEON, { name: 'Cannon Galleon', column: 2, row: 3, upgrade: ELITE_CANNON_GALLEON });
  Vue.set(tree.DOCK, ELITE_CANNON_GALLEON, { name: 'Elite Cannon Galleon', column: 2, row: 4, req: CANNON_GALLEON });
  Vue.set(tree.DOCK, DEMOLITION_RAFT, { name: 'Demolition Raft', column: 3, row: 1, upgrade: DEMOLITION_SHIP });
  Vue.set(tree.DOCK, DEMOLITION_SHIP, { name: 'Demolition Ship', column: 3, row: 2, upgrade: HEAVY_DEMO_SHIP, req: DEMOLITION_RAFT });
  Vue.set(tree.DOCK, HEAVY_DEMO_SHIP, { name: 'Heavy Demolition Ship', column: 3, row: 3, req: DEMOLITION_SHIP });
  Vue.set(tree.DOCK, GALLEY, { name: 'Galley', column: 4, row: 1, upgrade: WAR_GALLEY });
  Vue.set(tree.DOCK, WAR_GALLEY, { name: 'War Galley', column: 4, row: 2, upgrade: GALLEON, req: GALLEY });
  Vue.set(tree.DOCK, GALLEON, { name: 'Galleon', column: 4, row: 3, req: WAR_GALLEY });
  Vue.set(tree.DOCK, DROMON, { name: 'Dromon', column: 5, row: 3 });

  Vue.set(tree, 'CASTLE', {});

  Vue.set(tree.CASTLE, WATCH_TOWER, { name: 'Watch Tower', column: 1, row: 1, upgrade: GUARD_TOWER });
  Vue.set(tree.CASTLE, GUARD_TOWER, { name: 'Guard Tower', column: 1, row: 2, upgrade: KEEP, req: WATCH_TOWER });
  Vue.set(tree.CASTLE, KEEP, { name: 'Keep', column: 1, row: 3, req: GUARD_TOWER });
  Vue.set(tree.CASTLE, BOMBARD_TOWER, { name: 'Bombard Tower', column: 1, row: 4 });
  Vue.set(tree.CASTLE, STONE_WALL, { name: 'Stone Wall', column: 2, row: 1, upgrade: FORTIFIED_WALL });
  Vue.set(tree.CASTLE, FORTIFIED_WALL, { name: 'Fortified Wall', column: 2, row: 2, req: STONE_WALL });
  Vue.set(tree.CASTLE, HOARDINGS, { name: 'Hoardings', column: 3, row: 3 });
  Vue.set(tree.CASTLE, SAPPERS, { name: 'Sappers', column: 4, row: 3 });

  Vue.set(tree, 'MONASTERY', {});

  Vue.set(tree.MONASTERY, REDEMPTION, { name: 'Redemption', column: 1, row: 2 });
  Vue.set(tree.MONASTERY, ATONEMENT, { name: 'Atonement', column: 2, row: 2 });
  Vue.set(tree.MONASTERY, HERESY, { name: 'Heresy', column: 3, row: 2 });
  Vue.set(tree.MONASTERY, BLOCK_PRINTING, { name: 'Block Printing', column: 3, row: 3 });
  Vue.set(tree.MONASTERY, ILLUMINATION, { name: 'Illumination', column: 2, row: 3 });
  Vue.set(tree.MONASTERY, THEOCRACY, { name: 'Theocracy', column: 4, row: 3 });
  Vue.set(tree.MONASTERY, FAITH, { name: 'Faith', column: 1, row: 3 });
  Vue.set(tree.MONASTERY, FERVOR, { name: 'Fervor', column: 5, row: 2 });
  Vue.set(tree.MONASTERY, SANCTITY, { name: 'Sanctity', column: 4, row: 2 });

  Vue.set(tree, 'UNIVERSITY', {});

  Vue.set(tree.UNIVERSITY, ARCHITECTURE, { name: 'Architecture', column: 3, row: 3 });
  Vue.set(tree.UNIVERSITY, BOMBARD_TOWER, { name: 'Bombard Tower', column: 1, row: 3 });
  Vue.set(tree.UNIVERSITY, SIEGE_ENGINEERS, { name: 'Siege Engineers', column: 2, row: 3 });
  Vue.set(tree.UNIVERSITY, TREADMILL_CRANE, { name: 'Treadmill Crane', column: 1, row: 2 });

  Vue.set(tree, 'ECONOMY', {});

  Vue.set(tree.ECONOMY, CROP_ROTATION, { name: 'Crop Rotation', column: 2, row: 2 });
  Vue.set(tree.ECONOMY, GOLD_SHAFT_MINING, { name: 'Gold Shaft Mining', column: 1, row: 1 });
  Vue.set(tree.ECONOMY, GUILDS, { name: 'Guilds', column: 3, row: 2 });
  Vue.set(tree.ECONOMY, STONE_SHAFT_MINING, { name: 'Stone Shaft Mining', column: 2, row: 1 });
  Vue.set(tree.ECONOMY, TWO_MAN_SAW, { name: 'Two Man Saw', column: 1, row: 2 });
}

const ExceptionList = {};
ExceptionList[HUSBANDRY] = ["Cumans"];
ExceptionList[TWO_HANDED_SWORDSMAN] = ["Romans"];
ExceptionList[CHAMPION] = ["Romans"];
ExceptionList[SQUIRES] = ["Celts"];
ExceptionList[HUSSAR] = ["Lithuanians", "Poles"];
ExceptionList[PALADIN] = ["Persians"];
ExceptionList[FERVOR] = ["Slavs"];
ExceptionList[ARCHITECTURE] = ["Byzantines"];
ExceptionList[BLOODLINES] = ["Franks"];
ExceptionList[SUPPLIES] = ["Goths"];
ExceptionList[KEEP] = ["Sicilians"];
ExceptionList[GUARD_TOWER] = ["Sicilians"];
ExceptionList[PLATE_MAIL_ARMOR] = ["Romans"];