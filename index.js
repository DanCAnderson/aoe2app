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


const techs = {};

function populateTechTree(tree) {
  
  Vue.set(tree, 'BARRACKS', {});

  Vue.set(tree.BARRACKS, CHAMPION, { name: 'Champion', column: 1, row: 4, req: TWO_HANDED_SWORDSMAN });
  Vue.set(tree.BARRACKS, HALBERDIER, { name: 'Halberdier', column: 2, row: 3, req: PIKEMAN });
  Vue.set(tree.BARRACKS, SQUIRES, { name: 'Squires', column: 4, row: 2 });
  Vue.set(tree.BARRACKS, EAGLE_SCOUT, { name: 'Eagle Scout', column: 3, row: 2 });
  Vue.set(tree.BARRACKS, PIKEMAN, { name: 'Pikeman', column: 2, row: 2, req: SPEARMAN, upgrade: HALBERDIER });
  Vue.set(tree.BARRACKS, SPEARMAN, { name: 'Spearman', column: 2, row: 1, upgrade: PIKEMAN });
  Vue.set(tree.BARRACKS, SUPPLIES, { name: 'Supplies', column: 4, row: 1 });
  Vue.set(tree.BARRACKS, LONG_SWORDSMAN, { name: 'Longswordsman', column: 1, row: 2, upgrade: TWO_HANDED_SWORDSMAN });
  Vue.set(tree.BARRACKS, TWO_HANDED_SWORDSMAN, { name: 'Two Handed Swordsman', column: 1, row: 3, req: LONG_SWORDSMAN, upgrade: CHAMPION });

  Vue.set(tree, 'STABLE', {});

  Vue.set(tree.STABLE, SCOUT_CAVALRY, { name: 'Scout Cavalry', column: 1, row: 1, upgrade: LIGHT_CAVALRY });
  Vue.set(tree.STABLE, LIGHT_CAVALRY, { name: 'Light Cavalry', column: 1, row: 2, req: SCOUT_CAVALRY, upgrade: HUSSAR });
  Vue.set(tree.STABLE, HUSSAR, { name: 'Hussar', column: 1, row: 3, req: LIGHT_CAVALRY });
  Vue.set(tree.STABLE, KNIGHT, { name: 'Knight', column: 2, row: 2, upgrade: CAVALIER });
  Vue.set(tree.STABLE, CAVALIER, { name: 'Cavalier', column: 2, row: 3, req: KNIGHT, upgrade: PALADIN });
  Vue.set(tree.STABLE, PALADIN, { name: 'Paladin', column: 2, row: 4, req: CAVALIER });
  Vue.set(tree.STABLE, CAMEL_RIDER, { name: 'Camel Rider', column: 3, row: 2, upgrade: HEAVY_CAMEL_RIDER, unupgrade: 'wat' });
  Vue.set(tree.STABLE, HEAVY_CAMEL_RIDER, { name: 'Heavy Camel Rider', column: 3, row: 3, req: CAMEL_RIDER });
  Vue.set(tree.STABLE, BLOODLINES, { name: 'Bloodlines', column: 2, row: 1 });
  Vue.set(tree.STABLE, HUSBANDRY, { name: 'Husbandry', column: 6, row: 2 });
  Vue.set(tree.STABLE, BATTLE_ELEPHANT, { name: 'Battle Elephant', column: 4, row: 2 });
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



const EventBus = new Vue();

const selectedTechs = [];
 
const civs = Object.keys(disabledTechs);
const availableCivs = [...civs];

const civItem = Vue.component('civ-list-item', {
  props: ['civ', 'initHighlighted'],

  data: function () {
    return { isHighlighted: this.initHighlighted }
  },

  computed: {
    imgPath: function() {
      return `./img/CIVS/${this.civ.toLowerCase()}.png`;
    }
  },

  mounted: function() {
    EventBus.$on('clear_highlights', function () {this.isHighlighted = false}.bind(this) );
  },

  methods: {
    toggle: function () {
      if ( this.isHighlighted ) {
        EventBus.$emit('clear_highlights', this.civ);
      } else {
        EventBus.$emit('clear_highlights', this.civ);
        EventBus.$emit('highlight_civ', this.civ);
        this.isHighlighted = true;
      }
    }
  },

  template: 
    `<li class="civ-list-item" :class="{highlighted: isHighlighted}" @click='toggle'>
      <img class="civ-emblem" :src=imgPath>
      <span>{{civ}}</span>
    </li>`
})

const techButton = Vue.component('tech-button', {
  props: ['tech', 'techGroup'],
  
  data: function () {
    return { techs, isSelected: false, isUnavailable: false, isIncluded: false, isHighlighted: false }
  },
  
  mounted: function() {
    //EventBus.$on('reset', this.reset);
    EventBus.$on('activate_button', function (tech) {this.activate(tech);}.bind(this) );
    EventBus.$on('deactivate_button', function (tech) {this.deactivate(tech);}.bind(this) );
    EventBus.$on('include_button', function (tech) {this.include(tech);}.bind(this) );
    EventBus.$on('uninclude_button', function (tech) {this.uninclude(tech);}.bind(this) );
    EventBus.$on('highlight_button', function (civ) {this.highlight(civ);}.bind(this) );
    EventBus.$on('clear_highlights', function () {this.isHighlighted = false;}.bind(this) );
    EventBus.$on('update_available', this.updateAvailability);
    EventBus.$on('reset', this.reset);
  },
  
  computed: {
    imgPath: function () {
      return `./img/${this.techGroup}/${techs[this.techGroup][this.tech].name.replaceAll(' ', '_').toUpperCase()}.png`;
    },
    rowClass: function () {
      return 'row-' + techs[this.techGroup][this.tech].row;
    },
    columnClass: function () {
      return 'column-' + techs[this.techGroup][this.tech].column;
    }
  },
  
  methods: {
    reset: function () {
      this.isUnavailable = false;
      this.isSelected = false;
    },
    toggle: function () {
      if (this.isUnavailable) return;
      
      if (this.isSelected)
        EventBus.$emit('on_deselect', this.tech, this.techGroup);
      else
        EventBus.$emit('on_select', this.tech, this.techGroup);
    },
    activate: function (tech) {
      if (this.isSelected) return;
      if (this.tech === tech) {
        this.isSelected = true;
      }
    },
    deactivate: function (tech) {
      if (!this.isSelected) return;
      if (this.tech === tech) {
        this.isSelected = false;
      }
    },
    include: function (tech) {
      if (this.tech === tech) {
        this.isIncluded = true;
      }
    },
    uninclude: function (tech) {
      if (this.tech === tech) {
        this.isIncluded = false;
      }
    },
    highlight: function (civ) {
      if (!disabledTechs[civ].includes(this.tech)) {
        this.isHighlighted = true;
      }
    },
    removeHighlight: function () {
      this.isHighlighted = false;
    },
    updateAvailability: function (availableCivsList) {
      this.isUnavailable = !availableCivsList.some(function (civName) {
        //if any civ in the list doesn't have this tech marked disabled,
        //then this button is available and we can move on
        let available = !disabledTechs[civName].includes(this.tech);
        return available;
      }, this);
    }
  },
  template:
    `<button 
        class='tech-button'
        v-bind:id=tech
        v-bind:style='{ "background-image": "url(" + imgPath + ")" }'
        v-bind:class='[{highlighted: isHighlighted, selected: isSelected, unavailable: isUnavailable, included: isIncluded}, rowClass, columnClass]'
        
        @click='toggle'>
          {{techs[techGroup][tech].name}}
    </button>`
});

const techContainer = Vue.component('tech-container', {
  props: ['techGroup'],
  data: function () {
    return { techs }
  },
  computed: {
    imgPath: function() {
      return `./img/${this.techGroup.toUpperCase()}/${this.techGroup.toUpperCase()}.png`;
    }
  },
  template: 
    `<div class="building-container">
      <div class="building-header">
        <img class="building-header-icon" :src="imgPath">
      </div>
      <div class="tech-button-container" :id=techGroup>
        <tech-button 
          v-for="tech in Object.keys(techs[techGroup])" 
          :key=tech v-bind:tech="Number(tech)" 
          :tech-group="techGroup">
        </tech-button>
      </div>
    </div>`
});

const app = new Vue({
  el: '#app',
  data: {
    civs,
    availableCivs,
    disabledCivs: [],
    highlightedCiv: null,
    techs,
    selectedTechs,
  },

  created: function () {
    populateTechTree(techs);
  },

  mounted: function() {
    EventBus.$on('on_select', function (tech, techGroup) {app.onButtonSelect(tech, techGroup)} );
    EventBus.$on('on_deselect', function (tech, techGroup) {app.onButtonDeselect(tech, techGroup);} );
    EventBus.$on('highlight_civ', function (civ) {app.onHighlightCiv(civ);} );
    EventBus.$on('clear_highlights', function () {app.highlightedCiv = null;} );
    this.updateIncludedAll();
  },

  methods: {
    
    onButtonSelect: function (techId, techGroup) {
      this.selectTech(techId);
      if (techs[techGroup][techId].upgrade)
        this.deselectUpgrades(techs[techGroup][techId].upgrade, techGroup);
      if (techs[techGroup][techId].req)
        this.deselectPrereqs(techs[techGroup][techId].req, techGroup);
      //this.activatePrereqs(techId, techGroup);
      this.updateAvailableCivs();
      this.updateIncludedAll();
    },
    
    onButtonDeselect: function (techId, techGroup) {
      this.deselectTech(techId);
      //this.deactivateUpgrades(techId, techGroup);
      this.updateAvailableCivs();
      this.updateIncludedAll();
    },
    
    selectTech: function (techId) {
      if(!selectedTechs.includes(techId))
        selectedTechs.push(techId);
      EventBus.$emit('activate_button', techId);
    },
    
    deselectTech: function (techId) {
      let index = selectedTechs.indexOf(techId);
      if (index !== -1) {
        selectedTechs.splice(index, 1);
        EventBus.$emit('deactivate_button', techId);
      }
    },
    
    deselectPrereqs: function (techId, techGroup) {
      let required = techs[techGroup][techId];
      if (required) {
        this.deselectTech(techId);
        if (required.req) this.deselectPrereqs(required.req, techGroup);
      }
    },
    
    deselectUpgrades: function (techId, techGroup) {
      let upgrade = techs[techGroup][techId];
      if (upgrade) {
        this.deselectTech(techId);
        if (upgrade.upgrade) this.deselectUpgrades(upgrade.upgrade, techGroup);
      }
    },
    
    updateAvailableCivs: function() {
      //filter from base civ list
      this.availableCivs = civs.filter((civ) => {
        let available = true;
        this.selectedTechs.forEach((tech) => {
          //check if any of the selected techs appear in each civ's disabled tech lists
          //if they do, this civ isn't available
          if (disabledTechs[civ].includes(tech))
            available = false;
        });
        return available;
      });
      
      this.disabledCivs = civs.filter((civ) => {
        return !this.availableCivs.includes(civ);
      })
      EventBus.$emit('update_available', this.availableCivs);
    },
    
    checkIsIncluded: function (tech) {
      return this.availableCivs.every((civ) => {
        return !disabledTechs[civ].includes(tech);
      });
    },
    
    updateIncludedAll: function () {
      for (let group of Object.values(techs)) {
        for (let tech of Object.keys(group)) {
          tech = Number(tech);
          if(this.checkIsIncluded(tech))
            EventBus.$emit('include_button', tech);
          else 
            EventBus.$emit('uninclude_button', tech);
        }
      }
    },
    
    clearAll: function() {
      this.selectedTechs.splice(0, this.selectedTechs.length);
      this.updateAvailableCivs();
      this.updateIncludedAll();
      EventBus.$emit('reset');
    },
    
    onHighlightCiv: function(civ) {
      this.highlightedCiv = civ;
      EventBus.$emit('highlight_button', civ)
    }
  }
})
