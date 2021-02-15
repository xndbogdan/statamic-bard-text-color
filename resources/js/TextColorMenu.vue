<template>
  <div class="inline-block relative">
    <button
      class="bard-toolbar-button"
      :class="{
        active: getMarkAttrs('textColor').color != null,
      }"
      v-html="button.html"
      v-tooltip="button.text"
      @click="showColorMenu = !showColorMenu"
    />
    <div class="absolute left-10 bg-gray-200 px-1 rounded-sm flex flex-wrap min-w-250 lg:min-w-500 z-10" :class="{ hidden: !showColorMenu }">
      <template v-for="(color, index) in availableColors" >
        <div @click="setColor(color)" :key="index" class="py-1 hover:bg-gray-300 w-full sm:w-1/2 lg:w-1/4 flex flex-row justify-start cursor-pointer items-center my-1" v-if="typeof color == 'string' && index != 'transparent' && index !='current'">
          <div class="w-6 h-6 mx-2" :style="'background-color:'+color+';'"></div>
          <p class="text-center">{{ index }}</p>
        </div>
        <template v-if="typeof color == 'object'">
          <div v-for="(hex, intensity) in color" :key="index + '-' + intensity" @click="setColor(hex)" class="py-1 hover:bg-gray-300 w-full sm:w-1/2 lg:w-1/4 flex flex-row justify-start cursor-pointer items-center my-1">
            <div class="w-6 h-6 mx-2" :style="'background-color:'+hex+';'"></div>
            <p class="text-center">{{ index + '-' + intensity }}</p>
          </div>
        </template>
      </template>
    </div>
  </div>
</template>
<script>

const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  mixins: [ BardToolbarButton ],
  data() {
    return {
      showColorMenu: false,
      availableColors: defaultTheme.colors,
      getMarkAttrs: this.editor.getMarkAttrs.bind(this.editor),
    };
  },
  methods: {
    setColor(color) {
      this.editor.commands.textColor({ color: color })
      this.showColorMenu = false
    },
  },
  mounted() {
  }
};
</script>
<style>
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
  @media (min-width: 1024px) {
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
