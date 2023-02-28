<template>
  <div class="relative inline-block" v-if="enabled" v-click-outside="onClickOutside">
    <button
      class="bard-toolbar-button"
      :class="{
        active: showColorMenu,
      }"
      v-html="button.html"
      v-tooltip="button.text"
      @click="toggleColorMenu"
    />
    <div class="absolute left-0 z-10 flex flex-wrap px-2 overflow-y-scroll bg-white border border-gray-200 rounded-sm mt-sm min-w-250 lg:min-w-500 max-h-300px" :class="{ hidden: !showColorMenu }">
      <div class="flex flex-wrap w-full pt-2">
        <p class="w-full mb-2 font-bold">Filters</p>
        
        <div class="inline-flex items-center">
          <input id="color-filter" class="block w-full py-1 pl-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" type="text" v-model="filter" placeholder="Color name">
        </div>
      </div>
      <div class="flex flex-wrap w-full pt-2 mb-2">
        <div class="inline-flex items-center">
            <input id="radio-color-default" class="form-radio" type="radio" v-model="selectedGroup" value="default" @click="switchColors('default')">
            <label for="radio-color-default" style="margin-left: .2rem;">Default</label>
        </div>
        <div class="inline-flex items-center pl-2">
            <input id="radio-color-custom" class="form-radio" type="radio" v-model="selectedGroup" value="custom" @click="switchColors('custom')">
            <label for="radio-color-custom" style="margin-left: .2rem;">Custom</label>
        </div>
      </div>
     

      <div class="flex flex-wrap w-full" v-if="selectedGroup=='default'">
        <template v-for="(color, index) in filteredColors" >
          <div @click="setColor(color)" :key="index" class="flex flex-row items-center justify-start w-full py-1 my-1 rounded-sm cursor-pointer hover:bg-gray-300 sm:w-1/2 xl:w-1/4" v-if="typeof color == 'string' && index != 'transparent' && index !='current'">
            <div class="w-6 h-6 mx-1" style="border: 1px solid #000;" :style="'background-color:'+color+';'"></div>
            <p class="text-center" style="font-size: 0.6rem!important;">{{ index }}</p>
          </div>
          <template v-if="typeof color == 'object'">
            <div v-for="(hex, intensity) in color" :key="index + '-' + intensity" @click="setColor(hex)" class="flex flex-row items-center justify-start w-full py-1 my-1 rounded-sm cursor-pointer hover:bg-gray-300 sm:w-1/2 xl:w-1/4">
              <div class="w-6 h-6 mx-1" style="border: 1px solid #000;" :style="'background-color:'+hex+';'"></div>
              <p class="px-1 text-center" style="font-size: 0.6rem!important;">{{ index + '-' + intensity }}</p>
            </div>
          </template>
        </template>
      </div>

      <div class="flex flex-wrap w-full" v-else-if="availableCustomColors">
        <template v-for="(color, index) in filteredColors" >
          <div @click="setColor(color)" :key="index" class="flex flex-row items-center justify-start w-full py-1 my-1 rounded-sm cursor-pointer hover:bg-gray-300 sm:w-1/2 xl:w-1/4" v-if="typeof color == 'string' && index != 'transparent' && index !='current'">
            <div class="w-6 h-6 mx-1" style="border: 1px solid #000;" :style="'background-color:'+color+';'"></div>
            <p class="text-center" style="font-size: 0.6rem!important;">{{ index }}</p>
          </div>
          <template v-if="typeof color == 'object'">
            <div v-for="(hex, intensity) in color" :key="index + '-' + intensity" @click="setColor(hex)" class="flex flex-row items-center justify-start w-full py-1 my-1 rounded-sm cursor-pointer hover:bg-gray-300 sm:w-1/2 xl:w-1/4">
              <div class="w-6 h-6 mx-1" style="border: 1px solid #000;" :style="'background-color:'+hex+';'"></div>
              <p class="px-1 text-center" style="font-size: 0.6rem!important;">{{ index + '-' + intensity }}</p>
            </div>
          </template>
        </template>
      </div>

      <div class="flex flex-col items-center w-full py-4" v-else>
          <svg class="w-8 h-8 mb-1 text-red" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <p>It appears there are no custom colors.</p>
          <p>Please check the <a class="text-blue-600" href="https://github.com/xndbogdan/statamic-bard-text-color/blob/main/README.md#custom-colors">documentation</a> on how to configure them.</p>
      </div>
    </div>
  </div>
</template>
<script>
import ClickOutside from 'vue-click-outside'
import colors from 'tailwindcss/colors'

export default {
  mixins: [ BardToolbarButton ],
  data() {
    return {
      showColorMenu: false,
      availableColors: colors,
      availableCustomColors: null,
      selectedColors: colors,
      selectedGroup: 'default',
      // getMarkAttrs: this.editor.getMarkAttrs.bind(this.editor),
      enabled: false,
      filter: '',
    };
  },
  directives: {
    ClickOutside
  },
  methods: {
    onClickOutside() {
      this.showColorMenu = false;
      this.filter = ''
    },
    toggleColorMenu() {
      this.showColorMenu = !this.showColorMenu;
      this.filter = ''
    },
    setColor(color) {
      // this.filter = ''
      this.editor.commands.changeTextColor({
        color: color === this.currentColor ? false : color,
      })
      // this.showColorMenu = false
    },
    switchColors(group) {
      switch(group) {
        case 'default':
          this.selectedGroup = 'default'
          this.selectedColors = this.availableColors
        break;
        case 'custom':
          this.selectedGroup = 'custom'
          this.selectedColors = this.availableCustomColors
        break;
      }
    }
  },
  computed: {
    currentColor() {
      return this.editor.getAttributes('textColor').color;
    },
    filteredColors() {
      let filteredObject = null
      if(this.selectedGroup !== 'default' && !this.availableCustomColors) {
        return null
      }
      
      if(this.selectedGroup === 'default') {
        filteredObject = this.availableColors
      } else {
        filteredObject = this.availableCustomColors
      }

      if(!this.filter) {
        return filteredObject
      }

      const finalFilteredObject = {}

      Object.entries(filteredObject).forEach(([key, value]) => {
        if(key.toLowerCase().includes(this.filter.toLowerCase())) {
          finalFilteredObject[key] = value
        }
      })

      return finalFilteredObject
    }
  },
  mounted() {
      this.availableCustomColors = window.bardCustomColors ? window.bardCustomColors : null
      this.availableColors = window.bardDefaultColors ? window.bardDefaultColors : colors
      if(this.config && this.config.buttons.includes('color')) {
        this.enabled = true
      }
  },
  created() {
  }
};
</script>
<style scoped>
  .shadow-sm {
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  }
  .focus\:ring-indigo-500:focus {
    box-shadow: 0 0 0 1px #6366f1;
  }
  .block {
    display: block;
  }

  .border {
    border-width: 1px;
  }
  .left-10 {
    left: 2.5rem;
  }
  .overflow-y-scroll {
    overflow-y: scroll;
  }
  .max-h-300px {
    max-height: 300px;
  }
  .max-h-320px {
    max-height: 300px;
  }
  .mt-sm {
    margin-top: 0.15rem;
  }
  .mt-1 {
    margin-top: 0.25rem;
  }
  .px-1 {
    padding-left: 0.25rem;
    padding-right: 0.25rem;
  }
  .py-1 {
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
  }
  .cursor-pointer {
    cursor: pointer;
  }
  .hover\:bg-gray-300:hover {
    background-color: rgba(209, 213, 219, 1);
  }
  .z-10 {
    z-index:10;
  }
  .text-center {
    text-align: center;
  }
  .mx-1 {
    margin-left: 0.25rem;
    margin-right: 0.25rem;
  }
  .mx-2 {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }
  .mr-2 {
    margin-right: 0.5rem;
  }
  .mt-2 {
    margin-top: 0.5rem;
  }
  .my-1 {
    margin-top:.25rem;
    margin-bottom:.25rem;
  }
  .rounded-md {
    border-radius: 0.375rem;
  }
  .rounded-xl {
    border-radius: 0.75rem;
  }
  .bg-gray-50 {
    background-color: rgba(249, 250, 251, 1);
  }
  .bg-gray-200 {
    background-color: rgba(229, 231, 235, 1);
  }
  .border-gray-200 {
    border-color: solid rgba(249, 250, 251, 1);
  }
  .border-gray-300 {
    border-color: solid rgba(229, 231, 235, 1);
  }
  .bg-white {
    background-color: rgba(255, 255, 255, 1);
  }
  .flex {
    display: flex;
  }
  .flex-wrap {
    flex-wrap: wrap;
  }
  .items-center {
    align-items: center;
  }
  .flex-row {
    flex-direction: row;
  }
  .flex-col {
    flex-direction: column;
  }
  .justify-center {
    justify-content: center;
  }
  .justify-start {
    justify-content: start;
  }
  .w-6 {
    width: 1.5rem;
  }
  .h-6 {
    height: 1.5rem;
  }
  @media (min-width: 0px) {
    .w-full {
      width: 100%;
    }
    .w-1\/4 {
      width: 25%;
    }
    .w-1\/2 {
      width: 50%;
    }
    .min-w-250 {
      min-width:250px;
    }
    .min-w-500 {
      min-width:500px;
    }
    .pl-2 {
      padding-left: 0.5rem;
    }
    .pl-0 {
      padding-left: 0;
    }
    .mt-2 {
      margin-top: 0.5rem;
    }
    .mt-0 {
      margin-top: 0;
    }
  }
  @media screen and (min-width: 640px) and (max-width: 768px) {
    .sm\:text-xl {
      font-size: 1.25rem;
      line-height: 1.75rem;
    }
    .sm\:w-full {
      width: 100%;
    }
    .sm\:w-1\/4 {
      width: 25%;
    }
    .sm\:w-1\/2 {
      width: 50%;
    }
    .sm\:pl-2 {
      padding-left: 0.5rem;
    }
    .sm\:pl-0 {
      padding-left: 0;
    }
    .sm\:mt-2 {
      margin-top: 0.5rem;
    }
    .sm\:mt-0 {
      margin-top: 0;
    }
    .sm\:text-sm {
      font-size: 0.875rem;
      line-height: 1.25rem;
    }
  }
  @media (min-width: 768px) {
    .md\:w-full {
      width: 100%;
    }
    .md\:w-1\/4 {
      width: 25%;
    }
    .md\:w-1\/2 {
      width: 50%;
    }
    .md\:pl-2 {
      padding-left: 0.5rem;
    }
    .md\:pl-0 {
      padding-left: 0;
    }
    .md\:mt-2 {
      margin-top: 0.5rem;
    }
    .md\:mt-0 {
      margin-top: 0;
    }
  }
  @media (min-width: 1280px) {
    .lg\:w-full {
      width: 100%;
    }
    .lg\:w-1\/4 {
      width: 25%;
    }
    .lg\:w-1\/2 {
      width: 50%;
    }
    .lg\:min-w-250 {
      min-width:250px;
    }
    .lg\:min-w-500 {
      min-width:500px;
    }
    .lg\:pl-2 {
      padding-left: 0.5rem;
    }
    .lg\:pl-0 {
      padding-left: 0;
    }
    .lg\:mt-2 {
      margin-top: 0.5rem;
    }
    .lg\:mt-0 {
      margin-top: 0;
    }
  }
</style>
