<template>
  <div class="inline-block relative" v-if="enabled" v-click-outside="onClickOutside">
    <button
      class="bard-toolbar-button"
      :class="{
        active: showColorMenu,
      }"
      v-html="button.html"
      v-tooltip="button.text"
      @click="showColorMenu = !showColorMenu"
    />
    <div class="absolute left-10 bg-gray-200 px-1 rounded-sm flex flex-wrap min-w-250 lg:min-w-500 z-10 max-h-300px overflow-y-scroll" :class="{ hidden: !showColorMenu }">
      <div class="flex flex-wrap py-2 w-full px-1">
        <p class="font-bold w-full mb-2">Color pack</p>
        <div class="inline-flex items-center">
            <input id="radio-color-default" class="form-radio" type="radio" v-model="selectedGroup" value="default" @click="switchColors('default')">
            <label for="radio-color-default" style="margin-left: .2rem;">Default</label>
        </div>
        <div class="pl-2 inline-flex items-center">
            <input id="radio-color-custom" class="form-radio" type="radio" v-model="selectedGroup" value="custom" @click="switchColors('custom')">
            <label for="radio-color-custom" style="margin-left: .2rem;">Custom</label>
        </div>
      </div>

      <div class="flex flex-wrap w-full" v-if="selectedGroup=='default'">
        <template v-for="(color, index) in availableColors" >
          <div @click="setColor(color)" :key="index" class="py-1 hover:bg-gray-300 w-full sm:w-1/2 xl:w-1/4 flex flex-row justify-start cursor-pointer items-center my-1" v-if="typeof color == 'string' && index != 'transparent' && index !='current'">
            <div class="w-6 h-6 mx-1" style="border: 1px solid #000;" :style="'background-color:'+color+';'"></div>
            <p class="text-center" style="font-size: 0.65rem!important;">{{ index }}</p>
          </div>
          <template v-if="typeof color == 'object'">
            <div v-for="(hex, intensity) in color" :key="index + '-' + intensity" @click="setColor(hex)" class="py-1 hover:bg-gray-300 w-full sm:w-1/2 xl:w-1/4 flex flex-row justify-start cursor-pointer items-center my-1">
              <div class="w-6 h-6 mx-1" style="border: 1px solid #000;" :style="'background-color:'+hex+';'"></div>
              <p class="text-center px-1" style="font-size: 0.75rem!important;">{{ index + '-' + intensity }}</p>
            </div>
          </template>
        </template>
      </div>

      <div class="flex flex-wrap w-full" v-else-if="availableCustomColors">
        <template v-for="(color, index) in availableCustomColors" >
          <div @click="setColor(color)" :key="index" class="py-1 hover:bg-gray-300 w-full sm:w-1/2 xl:w-1/4 flex flex-row justify-start cursor-pointer items-center my-1" v-if="typeof color == 'string' && index != 'transparent' && index !='current'">
            <div class="w-6 h-6 mx-1" style="border: 1px solid #000;" :style="'background-color:'+color+';'"></div>
            <p class="text-center" style="font-size: 0.75rem!important;">{{ index }}</p>
          </div>
          <template v-if="typeof color == 'object'">
            <div v-for="(hex, intensity) in color" :key="index + '-' + intensity" @click="setColor(hex)" class="py-1 hover:bg-gray-300 w-full sm:w-1/2 xl:w-1/4 flex flex-row justify-start cursor-pointer items-center my-1">
              <div class="w-6 h-6 mx-1" style="border: 1px solid #000;" :style="'background-color:'+hex+';'"></div>
              <p class="text-center px-1" style="font-size: 0.65rem!important;">{{ index + '-' + intensity }}</p>
            </div>
          </template>
        </template>
      </div>

      <div class="w-full flex flex-col items-center py-4" v-else>
          <svg class="h-8 w-8 text-red mb-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
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
    };
  },
  directives: {
    ClickOutside
  },
  methods: {
    onClickOutside() {
      this.showColorMenu = false;
    },
    setColor(color) {
      this.editor.commands.changeTextColor({ 
        key: color === this.currentKey ? false : color,
        color: color 
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
    currentKey() {
      return this.editor.getAttributes('textColor').key;
    }
  },
  mounted() {
    this.availableCustomColors = window.bardCustomColors ? window.bardCustomColors : null
    // check if bard button is enabled
    if(this.config && this.config.buttons.includes('color')) {
      this.enabled = true
    }
  },
  created() {
  }
};
</script>
<style scoped>
  .overflow-y-scroll {
    overflow-y: scroll;
  }
  .max-h-300px {
    max-height: 300px;
  }
  .max-h-320px {
    max-height: 300px;
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
  .rounded-xl {
    border-radius: 0.75rem;
  }
  .bg-gray-50 {
    background-color: rgba(249, 250, 251, 1);
  }
  .bg-gray-200 {
    background-color: rgba(229, 231, 235, 1);
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
  }
  @media (min-width: 640px) {
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
  }
</style>
