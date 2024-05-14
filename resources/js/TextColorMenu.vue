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
    <div class="absolute left-0 z-10 flex flex-wrap overflow-y-scroll bg-white border border-gray-200 rounded-sm mt-sm min-w-250 lg:min-w-500 max-h-300px" :class="{ hidden: !showColorMenu }">
      <div class="items-center flex fixed px-2 py-2 bg-white min-w-248">
        <input id="color-filter" class="flex-1 px-2 py-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" type="text" v-model="filter" placeholder="Color name">
      </div>
      <div class="px-2">
        <div class="flex flex-wrap w-full pt-12">
          <p class="w-full mb-2 font-bold">Color presets</p>
        </div>
        <div class="flex flex-col w-full mb-2">
          <div class="inline-flex items-center">
              <input id="radio-color-default" class="inline form-radio" type="radio" v-model="selectedGroup" value="default" @click="switchColors('default')">
              <label for="radio-color-default" class="inline" style="margin-left: .2rem;">Default</label>
          </div>
          <div class="inline-flex items-center mt-2">
              <input id="radio-color-custom" class="inline form-radio" type="radio" v-model="selectedGroup" value="custom" @click="switchColors('custom')">
              <label for="radio-color-custom" class="inline" style="margin-left: .2rem;">Custom</label>
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
  </div>
</template>
<script>
import '../css/tailwind.css'
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
      // this.filter = ''
    },
    toggleColorMenu() {
      this.showColorMenu = !this.showColorMenu;
      // this.filter = ''
    },
    setColor(color) {
      // this.filter = ''
      this.editor.commands.changeTextColor({
        color: color === this.currentColor ? false : color,
      })
      this.showColorMenu = false
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
