<template>
  <div class="btc-relative btc-inline-block" v-if="enabled" v-click-outside="onClickOutside">
    <button
      ref="button"
      class="bard-toolbar-button"
      :class="{ active: showColorMenu }"
      v-html="button.html"
      v-tooltip="button.text"
      @click="toggleColorMenu"
    />
    <div
      class="btc-absolute btc-left-0 btc-z-10 btc-overflow-y-scroll btc-bg-white dark:btc-bg-gray-800 btc-border btc-border-gray-200 dark:btc-border-gray-700 btc-rounded-sm btc-min-w-[250px] lg:btc-min-w-[500px] btc-text-gray-900 dark:btc-text-gray-100"
      :class="{ 'btc-hidden': !showColorMenu, 'btc-bottom-full btc-mb-1': openUpwards, 'btc-mt-1': !openUpwards }"
      :style="{ maxHeight: dynamicMaxHeight + 'px' }"
    >
      <div class="btc-sticky btc-top-0 btc-items-center btc-flex btc-px-2 btc-py-2 btc-bg-white dark:btc-bg-gray-800 btc-w-full">
        <input id="color-filter" class="btc-flex-1 btc-px-2 btc-py-1 btc-block btc-w-full btc-border btc-border-gray-300 dark:btc-border-gray-700 btc-rounded-md btc-shadow-sm focus:btc-ring-indigo-500 focus:btc-border-indigo-500 sm:btc-text-sm dark:btc-bg-gray-900 dark:btc-text-gray-100 dark:placeholder:btc-text-gray-500" type="text" v-model="filter" placeholder="Color name">
      </div>
      <div class="btc-px-2">
        <div class="btc-flex btc-flex-wrap btc-w-full btc-pt-2">
          <p class="btc-w-full btc-mb-2 btc-font-bold">Color presets</p>
        </div>
        <div class="btc-flex btc-flex-col btc-w-full btc-mb-2">
          <div class="btc-inline-flex btc-items-center">
            <input id="radio-color-default" class="btc-inline btc-appearance-auto" type="radio" v-model="selectedGroup" value="default" @click="switchColors('default')">
            <label for="radio-color-default" class="btc-inline" style="margin-left: .2rem;">Default</label>
          </div>
          <div class="btc-inline-flex btc-items-center btc-mt-2">
            <input id="radio-color-custom" class="btc-inline btc-appearance-auto" type="radio" v-model="selectedGroup" value="custom" @click="switchColors('custom')">
            <label for="radio-color-custom" class="btc-inline" style="margin-left: .2rem;">Custom</label>
          </div>
        </div>

        <div class="btc-flex btc-flex-wrap btc-w-full" v-if="selectedGroup == 'default'">
          <template v-for="(color, index) in filteredColors" :key="index">
            <div @click="setColor(color)" class="btc-flex btc-flex-row btc-items-center btc-justify-start btc-w-full btc-py-1 btc-my-1 btc-rounded-sm btc-cursor-pointer hover:btc-bg-gray-300 dark:hover:btc-bg-gray-700 sm:btc-w-1/2 xl:btc-w-1/4" v-if="typeof color == 'string' && index != 'transparent' && index != 'current'">
              <div class="btc-w-6 btc-h-6 btc-mx-1" style="border: 1px solid #000;" :style="'background-color:' + color + ';'"></div>
              <p class="btc-text-center" style="font-size: 0.6rem!important;">{{ index }}</p>
            </div>
            <template v-if="typeof color == 'object'">
              <div v-for="(hex, intensity) in color" :key="index + '-' + intensity" @click="setColor(hex)" class="btc-flex btc-flex-row btc-items-center btc-justify-start btc-w-full btc-py-1 btc-my-1 btc-rounded-sm btc-cursor-pointer hover:btc-bg-gray-300 dark:hover:btc-bg-gray-700 sm:btc-w-1/2 xl:btc-w-1/4">
                <div class="btc-w-6 btc-h-6 btc-mx-1" style="border: 1px solid #000;" :style="'background-color:' + hex + ';'"></div>
                <p class="btc-px-1 btc-text-center" style="font-size: 0.6rem!important;">{{ index + '-' + intensity }}</p>
              </div>
            </template>
          </template>
        </div>

        <div class="btc-flex btc-flex-wrap btc-w-full" v-else-if="availableCustomColors">
          <template v-for="(color, index) in filteredColors" :key="index">
            <div @click="setColor(color)" class="btc-flex btc-flex-row btc-items-center btc-justify-start btc-w-full btc-py-1 btc-my-1 btc-rounded-sm btc-cursor-pointer hover:btc-bg-gray-300 dark:hover:btc-bg-gray-700 sm:btc-w-1/2 xl:btc-w-1/4" v-if="typeof color == 'string' && index != 'transparent' && index != 'current'">
              <div class="btc-w-6 btc-h-6 btc-mx-1" style="border: 1px solid #000;" :style="'background-color:' + color + ';'"></div>
              <p class="btc-text-center" style="font-size: 0.6rem!important;">{{ index }}</p>
            </div>
            <template v-if="typeof color == 'object'">
              <div v-for="(hex, intensity) in color" :key="index + '-' + intensity" @click="setColor(hex)" class="btc-flex btc-flex-row btc-items-center btc-justify-start btc-w-full btc-py-1 btc-my-1 btc-rounded-sm btc-cursor-pointer hover:btc-bg-gray-300 dark:hover:btc-bg-gray-700 sm:btc-w-1/2 xl:btc-w-1/4">
                <div class="btc-w-6 btc-h-6 btc-mx-1" style="border: 1px solid #000;" :style="'background-color:' + hex + ';'"></div>
                <p class="btc-px-1 btc-text-center" style="font-size: 0.6rem!important;">{{ index + '-' + intensity }}</p>
              </div>
            </template>
          </template>
        </div>

        <div class="btc-flex btc-flex-col btc-items-center btc-w-full btc-py-4" v-else>
          <svg class="btc-w-8 btc-h-8 btc-mb-1 btc-text-red-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <p>It appears there are no custom colors.</p>
          <p>Please check the <a class="btc-text-blue-600 dark:btc-text-blue-400" href="https://github.com/xndbogdan/statamic-bard-text-color/blob/main/README.md#custom-colors">documentation</a> on how to configure them.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import colors from 'tailwindcss/colors';

const clickOutside = {
  beforeMount(el, binding) {
    el.__clickOutsideHandler__ = (event) => {
      if (!(el === event.target || el.contains(event.target))) {
        binding.value(event);
      }
    };
    document.addEventListener('click', el.__clickOutsideHandler__);
  },
  unmounted(el) {
    document.removeEventListener('click', el.__clickOutsideHandler__);
    delete el.__clickOutsideHandler__;
  },
};

export default {
  props: {
    button: { type: Object, required: true },
    active: { type: Boolean, default: false },
    variant: { type: String, default: null },
    config: { type: Object, default: () => ({}) },
    bard: { type: Object, default: () => ({}) },
    editor: { type: Object, required: true },
  },
  directives: {
    clickOutside,
  },
  data() {
    return {
      showColorMenu: false,
      availableColors: colors,
      availableCustomColors: null,
      selectedColors: colors,
      selectedGroup: 'default',
      enabled: false,
      filter: '',
      openUpwards: false,
      dynamicMaxHeight: 300,
    };
  },
  computed: {
    currentColor() {
      return this.editor.getAttributes('textColor').color;
    },
    filteredColors() {
      if (this.selectedGroup !== 'default' && !this.availableCustomColors) {
        return null;
      }

      const filteredObject = this.selectedGroup === 'default'
        ? this.availableColors
        : this.availableCustomColors;

      if (!this.filter) {
        return filteredObject;
      }

      const finalFilteredObject = {};
      Object.entries(filteredObject).forEach(([key, value]) => {
        if (key.toLowerCase().includes(this.filter.toLowerCase())) {
          finalFilteredObject[key] = value;
        }
      });

      return finalFilteredObject;
    },
  },
  methods: {
    onClickOutside() {
      this.showColorMenu = false;
    },
    toggleColorMenu() {
      this.showColorMenu = !this.showColorMenu;
      if (this.showColorMenu) {
        this.calculatePosition();
      }
    },
    calculatePosition() {
      this.$nextTick(() => {
        if (!this.$refs.button) return;
        const buttonRect = this.$refs.button.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const spaceBelow = viewportHeight - buttonRect.bottom;
        const spaceAbove = buttonRect.top;

        let maxHeight = 300;

        if (spaceBelow < 300 && spaceAbove > spaceBelow) {
          this.openUpwards = true;
          maxHeight = Math.min(300, spaceAbove - 20);
        } else {
          this.openUpwards = false;
          maxHeight = Math.min(300, spaceBelow - 20);
        }

        this.dynamicMaxHeight = Math.max(150, Math.floor(maxHeight));
      });
    },
    setColor(color) {
      this.editor.commands.changeTextColor({
        color: color === this.currentColor ? false : color,
      });
      this.showColorMenu = false;
    },
    switchColors(group) {
      switch (group) {
        case 'default':
          this.selectedGroup = 'default';
          this.selectedColors = this.availableColors;
          break;
        case 'custom':
          this.selectedGroup = 'custom';
          this.selectedColors = this.availableCustomColors;
          break;
      }
    },
  },
  mounted() {
    this.availableCustomColors = window.bardCustomColors ? window.bardCustomColors : null;
    this.availableColors = window.bardDefaultColors ? window.bardDefaultColors : colors;
    if (this.config && this.config.buttons && this.config.buttons.includes('color')) {
      this.enabled = true;
    }
  },
};
</script>

<style>
@tailwind utilities;
</style>
