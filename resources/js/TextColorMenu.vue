<template>
  <div class="inline-block relative">
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
      <div class="flex flex-wrap py-2 w-full px-1" v-if="availableCustomColors">
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
      <template v-for="(color, index) in selectedColors" >
        <div @click="setColor(color)" :key="index" class="py-1 hover:bg-gray-300 w-full sm:w-1/2 xl:w-1/4 flex flex-row justify-start cursor-pointer items-center my-1" v-if="typeof color == 'string' && index != 'transparent' && index !='current'">
          <div class="w-6 h-6 mx-1" style="border: 1px solid #000;" :style="'background-color:'+color+';'"></div>
          <p class="text-center" style="font-size: 0.75rem!important;">{{ index }}</p>
        </div>
        <template v-if="typeof color == 'object'">
          <div v-for="(hex, intensity) in color" :key="index + '-' + intensity" @click="setColor(hex)" class="py-1 hover:bg-gray-300 w-full sm:w-1/2 xl:w-1/4 flex flex-row justify-start cursor-pointer items-center my-1">
            <div class="w-6 h-6 mx-1" style="border: 1px solid #000;" :style="'background-color:'+hex+';'"></div>
            <p class="text-center px-1" style="font-size: 0.75rem!important;">{{ index + '-' + intensity }}</p>
          </div>
        </template>
      </template>
    </div>
  </div>
</template>
<script>

import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../../../../tailwind.config.js'

const resolvedConfig = resolveConfig(tailwindConfig)
const defaultTheme = require('tailwindcss/defaultTheme')
const customTheme = resolvedConfig.theme

export default {
  mixins: [ BardToolbarButton ],
  data() {
    return {
      showColorMenu: false,
      availableColors: defaultTheme.colors,
      availableCustomColors: customTheme.colors,
      selectedColors: defaultTheme.colors,
      selectedGroup: 'default',
      getMarkAttrs: this.editor.getMarkAttrs.bind(this.editor),
    };
  },
  methods: {
    setColor(color) {
      this.editor.commands.textColor({ color: color })
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
  created() {
      if(this.availableCustomColors && this.availableCustomColors.length) {
          this.switchColors('custom')
      } else {
          this.switchColors('default')
      }
  }
};
</script>
<style>
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
