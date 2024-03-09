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
    exceptionCivs: [],
    highlightedCiv: null,
    techs,
    selectedTechs,
    showExceptions: false
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

      if (this.showExceptions) {
        this.exceptionCivs = this.disabledCivs.filter((civ) => {
          let isException = true;
          this.selectedTechs.forEach((tech) => {
            if (disabledTechs[civ].includes(tech)) {
              if (!ExceptionList[tech])
                isException = false;
              else if (!ExceptionList[tech].includes(civ))
                isException = false;
            }
          })
          return isException;
        });
        this.disabledCivs.filter((civ) => !this.exceptionCivs.includes(civ));
      }
      else
        this.exceptionCivs = [];

      EventBus.$emit('update_available', this.availableCivs);
    },
    
    checkIsIncluded: function (tech) {
      return this.availableCivs.every((civ) => {
        if ( this.showExceptions && ExceptionList[tech] && ExceptionList[tech].includes(civ) )
          return true;
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
      EventBus.$emit('clear_highlights');
      this.selectedTechs.splice(0, this.selectedTechs.length);
      this.updateAvailableCivs();
      this.updateIncludedAll();
      EventBus.$emit('reset');
    },
    
    onHighlightCiv: function(civ) {
      this.highlightedCiv = civ;
      EventBus.$emit('highlight_button', civ)
    },

    horizontalScrollHandler: function(event) {
      const domElement = document.getElementById(event.currentTarget.id);
      if (domElement) {
        if (event.deltaY > 0) {
          domElement.scrollLeft += 100;
        } else {
          domElement.scrollLeft -= 100;
        }
        event.preventDefault();
      }
    }
}
})
