/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/TextColorMenu.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/TextColorMenu.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_click_outside__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-click-outside */ "./node_modules/vue-click-outside/index.js");
/* harmony import */ var vue_click_outside__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_click_outside__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tailwindcss_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tailwindcss/colors */ "./node_modules/tailwindcss/colors.js");
/* harmony import */ var tailwindcss_colors__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tailwindcss_colors__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  mixins: [BardToolbarButton],
  data: function data() {
    return {
      showColorMenu: false,
      availableColors: (tailwindcss_colors__WEBPACK_IMPORTED_MODULE_1___default()),
      availableCustomColors: null,
      selectedColors: (tailwindcss_colors__WEBPACK_IMPORTED_MODULE_1___default()),
      selectedGroup: 'default',
      // getMarkAttrs: this.editor.getMarkAttrs.bind(this.editor),
      enabled: false
    };
  },
  directives: {
    ClickOutside: (vue_click_outside__WEBPACK_IMPORTED_MODULE_0___default())
  },
  methods: {
    onClickOutside: function onClickOutside() {
      this.showColorMenu = false;
    },
    setColor: function setColor(color) {
      this.editor.commands.changeTextColor({
        key: color === this.currentKey ? false : color,
        color: color
      });
      this.showColorMenu = false;
    },
    switchColors: function switchColors(group) {
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
    }
  },
  computed: {
    currentKey: function currentKey() {
      return this.editor.getAttributes('textColor').key;
    }
  },
  mounted: function mounted() {
    this.availableCustomColors = window.bardCustomColors ? window.bardCustomColors : null; // check if bard button is enabled

    if (this.config && this.config.buttons.includes('color')) {
      this.enabled = true;
    }
  },
  created: function created() {}
});

/***/ }),

/***/ "./resources/js/TextColor.js":
/*!***********************************!*\
  !*** ./resources/js/TextColor.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TextColor": () => (/* binding */ TextColor)
/* harmony export */ });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Mark = Statamic.$bard.tiptap.core.Mark;
var commands = Statamic.$bard.tiptap.core;
var markInputRule = commands.markInputRule;
var TextColor = Mark.create({
  name: 'textColor',
  addAttributes: function addAttributes() {
    return {
      key: {
        "default": '',
        parseHTML: function parseHTML(element) {
          var _element$querySelecto;

          (_element$querySelecto = element.querySelector('span.text-color')) === null || _element$querySelecto === void 0 ? void 0 : _element$querySelecto.getAttribute('data-class');
        }
      }
    };
  },
  parseHtml: function parseHtml() {
    return [{
      tag: 'span.text-color'
    }];
  },
  renderHTML: function renderHTML(_ref) {
    var HTMLAttributes = _ref.HTMLAttributes;
    var style = 'color: ';
    style += HTMLAttributes.key;
    return ['span', _objectSpread(_objectSpread({}, HTMLAttributes), {}, {
      "class": 'text-color',
      'data-class': HTMLAttributes.key,
      'style': style
    }), 0];
  },
  addCommands: function addCommands() {
    var _this = this;

    return {
      changeTextColor: function changeTextColor(attributes) {
        return function (_ref2) {
          var chain = _ref2.chain;

          if (attributes.key) {
            return chain().setMark(_this.name, attributes).run();
          }

          return chain().unsetMark(_this.name, {
            extendEmptyMarkRange: true
          }).run();
        };
      }
    };
  }
});

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/TextColorMenu.vue?vue&type=style&index=0&id=57133487&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/TextColorMenu.vue?vue&type=style&index=0&id=57133487&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.border[data-v-57133487] {\n  border-width: 1px;\n}\n.left-10[data-v-57133487] {\n  left: 2.5rem;\n}\n.overflow-y-scroll[data-v-57133487] {\n  overflow-y: scroll;\n}\n.max-h-300px[data-v-57133487] {\n  max-height: 300px;\n}\n.max-h-320px[data-v-57133487] {\n  max-height: 300px;\n}\n.mt-sm[data-v-57133487] {\n  margin-top: 0.15rem;\n}\n.mt-1[data-v-57133487] {\n  margin-top: 0.25rem;\n}\n.px-1[data-v-57133487] {\n  padding-left: 0.25rem;\n  padding-right: 0.25rem;\n}\n.py-1[data-v-57133487] {\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n}\n.cursor-pointer[data-v-57133487] {\n  cursor: pointer;\n}\n.hover\\:bg-gray-300[data-v-57133487]:hover {\n  background-color: rgba(209, 213, 219, 1);\n}\n.z-10[data-v-57133487] {\n  z-index:10;\n}\n.text-center[data-v-57133487] {\n  text-align: center;\n}\n.mx-1[data-v-57133487] {\n  margin-left: 0.25rem;\n  margin-right: 0.25rem;\n}\n.mx-2[data-v-57133487] {\n  margin-left: 0.5rem;\n  margin-right: 0.5rem;\n}\n.mr-2[data-v-57133487] {\n  margin-right: 0.5rem;\n}\n.mt-2[data-v-57133487] {\n  margin-top: 0.5rem;\n}\n.my-1[data-v-57133487] {\n  margin-top:.25rem;\n  margin-bottom:.25rem;\n}\n.rounded-xl[data-v-57133487] {\n  border-radius: 0.75rem;\n}\n.bg-gray-50[data-v-57133487] {\n  background-color: rgba(249, 250, 251, 1);\n}\n.bg-gray-200[data-v-57133487] {\n  background-color: rgba(229, 231, 235, 1);\n}\n.border-gray-200[data-v-57133487] {\n  border-color: solid rgba(249, 250, 251, 1);\n}\n.bg-white[data-v-57133487] {\n  background-color: rgba(255, 255, 255, 1);\n}\n.flex[data-v-57133487] {\n  display: flex;\n}\n.flex-wrap[data-v-57133487] {\n  flex-wrap: wrap;\n}\n.items-center[data-v-57133487] {\n  align-items: center;\n}\n.flex-row[data-v-57133487] {\n  flex-direction: row;\n}\n.flex-col[data-v-57133487] {\n  flex-direction: column;\n}\n.justify-center[data-v-57133487] {\n  justify-content: center;\n}\n.justify-start[data-v-57133487] {\n  justify-content: start;\n}\n.w-6[data-v-57133487] {\n  width: 1.5rem;\n}\n.h-6[data-v-57133487] {\n  height: 1.5rem;\n}\n@media (min-width: 0px) {\n.w-full[data-v-57133487] {\n    width: 100%;\n}\n.w-1\\/4[data-v-57133487] {\n    width: 25%;\n}\n.w-1\\/2[data-v-57133487] {\n    width: 50%;\n}\n.min-w-250[data-v-57133487] {\n    min-width:250px;\n}\n.min-w-500[data-v-57133487] {\n    min-width:500px;\n}\n}\n@media (min-width: 640px) {\n.sm\\:text-xl[data-v-57133487] {\n    font-size: 1.25rem;\n    line-height: 1.75rem;\n}\n.sm\\:w-full[data-v-57133487] {\n    width: 100%;\n}\n.sm\\:w-1\\/4[data-v-57133487] {\n    width: 25%;\n}\n.sm\\:w-1\\/2[data-v-57133487] {\n    width: 50%;\n}\n}\n@media (min-width: 768px) {\n.md\\:w-full[data-v-57133487] {\n    width: 100%;\n}\n.md\\:w-1\\/4[data-v-57133487] {\n    width: 25%;\n}\n.md\\:w-1\\/2[data-v-57133487] {\n    width: 50%;\n}\n}\n@media (min-width: 1280px) {\n.lg\\:w-full[data-v-57133487] {\n    width: 100%;\n}\n.lg\\:w-1\\/4[data-v-57133487] {\n    width: 25%;\n}\n.lg\\:w-1\\/2[data-v-57133487] {\n    width: 50%;\n}\n.lg\\:min-w-250[data-v-57133487] {\n    min-width:250px;\n}\n.lg\\:min-w-500[data-v-57133487] {\n    min-width:500px;\n}\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js":
/*!******************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/picocolors/picocolors.browser.js":
/*!*******************************************************!*\
  !*** ./node_modules/picocolors/picocolors.browser.js ***!
  \*******************************************************/
/***/ ((module) => {

var x=String;
var create=function() {return {isColorSupported:false,reset:x,bold:x,dim:x,italic:x,underline:x,inverse:x,hidden:x,strikethrough:x,black:x,red:x,green:x,yellow:x,blue:x,magenta:x,cyan:x,white:x,gray:x,bgBlack:x,bgRed:x,bgGreen:x,bgYellow:x,bgBlue:x,bgMagenta:x,bgCyan:x,bgWhite:x}};
module.exports=create();
module.exports.createColors = create;


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/***/ ((module) => {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/TextColorMenu.vue?vue&type=style&index=0&id=57133487&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/TextColorMenu.vue?vue&type=style&index=0&id=57133487&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TextColorMenu_vue_vue_type_style_index_0_id_57133487_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TextColorMenu.vue?vue&type=style&index=0&id=57133487&scoped=true&lang=css& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/TextColorMenu.vue?vue&type=style&index=0&id=57133487&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TextColorMenu_vue_vue_type_style_index_0_id_57133487_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TextColorMenu_vue_vue_type_style_index_0_id_57133487_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/tailwindcss/colors.js":
/*!********************************************!*\
  !*** ./node_modules/tailwindcss/colors.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let colors = __webpack_require__(/*! ./lib/public/colors */ "./node_modules/tailwindcss/lib/public/colors.js")
module.exports = (colors.__esModule ? colors : { default: colors }).default


/***/ }),

/***/ "./node_modules/tailwindcss/lib/public/colors.js":
/*!*******************************************************!*\
  !*** ./node_modules/tailwindcss/lib/public/colors.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports["default"] = void 0;
var _log = _interopRequireDefault(__webpack_require__(/*! ../util/log */ "./node_modules/tailwindcss/lib/util/log.js"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function warn({ version , from , to  }) {
    _log.default.warn(`${from}-color-renamed`, [
        `As of Tailwind CSS ${version}, \`${from}\` has been renamed to \`${to}\`.`,
        "Update your configuration file to silence this warning.", 
    ]);
}
var _default = {
    inherit: "inherit",
    current: "currentColor",
    transparent: "transparent",
    black: "#000",
    white: "#fff",
    slate: {
        50: "#f8fafc",
        100: "#f1f5f9",
        200: "#e2e8f0",
        300: "#cbd5e1",
        400: "#94a3b8",
        500: "#64748b",
        600: "#475569",
        700: "#334155",
        800: "#1e293b",
        900: "#0f172a"
    },
    gray: {
        50: "#f9fafb",
        100: "#f3f4f6",
        200: "#e5e7eb",
        300: "#d1d5db",
        400: "#9ca3af",
        500: "#6b7280",
        600: "#4b5563",
        700: "#374151",
        800: "#1f2937",
        900: "#111827"
    },
    zinc: {
        50: "#fafafa",
        100: "#f4f4f5",
        200: "#e4e4e7",
        300: "#d4d4d8",
        400: "#a1a1aa",
        500: "#71717a",
        600: "#52525b",
        700: "#3f3f46",
        800: "#27272a",
        900: "#18181b"
    },
    neutral: {
        50: "#fafafa",
        100: "#f5f5f5",
        200: "#e5e5e5",
        300: "#d4d4d4",
        400: "#a3a3a3",
        500: "#737373",
        600: "#525252",
        700: "#404040",
        800: "#262626",
        900: "#171717"
    },
    stone: {
        50: "#fafaf9",
        100: "#f5f5f4",
        200: "#e7e5e4",
        300: "#d6d3d1",
        400: "#a8a29e",
        500: "#78716c",
        600: "#57534e",
        700: "#44403c",
        800: "#292524",
        900: "#1c1917"
    },
    red: {
        50: "#fef2f2",
        100: "#fee2e2",
        200: "#fecaca",
        300: "#fca5a5",
        400: "#f87171",
        500: "#ef4444",
        600: "#dc2626",
        700: "#b91c1c",
        800: "#991b1b",
        900: "#7f1d1d"
    },
    orange: {
        50: "#fff7ed",
        100: "#ffedd5",
        200: "#fed7aa",
        300: "#fdba74",
        400: "#fb923c",
        500: "#f97316",
        600: "#ea580c",
        700: "#c2410c",
        800: "#9a3412",
        900: "#7c2d12"
    },
    amber: {
        50: "#fffbeb",
        100: "#fef3c7",
        200: "#fde68a",
        300: "#fcd34d",
        400: "#fbbf24",
        500: "#f59e0b",
        600: "#d97706",
        700: "#b45309",
        800: "#92400e",
        900: "#78350f"
    },
    yellow: {
        50: "#fefce8",
        100: "#fef9c3",
        200: "#fef08a",
        300: "#fde047",
        400: "#facc15",
        500: "#eab308",
        600: "#ca8a04",
        700: "#a16207",
        800: "#854d0e",
        900: "#713f12"
    },
    lime: {
        50: "#f7fee7",
        100: "#ecfccb",
        200: "#d9f99d",
        300: "#bef264",
        400: "#a3e635",
        500: "#84cc16",
        600: "#65a30d",
        700: "#4d7c0f",
        800: "#3f6212",
        900: "#365314"
    },
    green: {
        50: "#f0fdf4",
        100: "#dcfce7",
        200: "#bbf7d0",
        300: "#86efac",
        400: "#4ade80",
        500: "#22c55e",
        600: "#16a34a",
        700: "#15803d",
        800: "#166534",
        900: "#14532d"
    },
    emerald: {
        50: "#ecfdf5",
        100: "#d1fae5",
        200: "#a7f3d0",
        300: "#6ee7b7",
        400: "#34d399",
        500: "#10b981",
        600: "#059669",
        700: "#047857",
        800: "#065f46",
        900: "#064e3b"
    },
    teal: {
        50: "#f0fdfa",
        100: "#ccfbf1",
        200: "#99f6e4",
        300: "#5eead4",
        400: "#2dd4bf",
        500: "#14b8a6",
        600: "#0d9488",
        700: "#0f766e",
        800: "#115e59",
        900: "#134e4a"
    },
    cyan: {
        50: "#ecfeff",
        100: "#cffafe",
        200: "#a5f3fc",
        300: "#67e8f9",
        400: "#22d3ee",
        500: "#06b6d4",
        600: "#0891b2",
        700: "#0e7490",
        800: "#155e75",
        900: "#164e63"
    },
    sky: {
        50: "#f0f9ff",
        100: "#e0f2fe",
        200: "#bae6fd",
        300: "#7dd3fc",
        400: "#38bdf8",
        500: "#0ea5e9",
        600: "#0284c7",
        700: "#0369a1",
        800: "#075985",
        900: "#0c4a6e"
    },
    blue: {
        50: "#eff6ff",
        100: "#dbeafe",
        200: "#bfdbfe",
        300: "#93c5fd",
        400: "#60a5fa",
        500: "#3b82f6",
        600: "#2563eb",
        700: "#1d4ed8",
        800: "#1e40af",
        900: "#1e3a8a"
    },
    indigo: {
        50: "#eef2ff",
        100: "#e0e7ff",
        200: "#c7d2fe",
        300: "#a5b4fc",
        400: "#818cf8",
        500: "#6366f1",
        600: "#4f46e5",
        700: "#4338ca",
        800: "#3730a3",
        900: "#312e81"
    },
    violet: {
        50: "#f5f3ff",
        100: "#ede9fe",
        200: "#ddd6fe",
        300: "#c4b5fd",
        400: "#a78bfa",
        500: "#8b5cf6",
        600: "#7c3aed",
        700: "#6d28d9",
        800: "#5b21b6",
        900: "#4c1d95"
    },
    purple: {
        50: "#faf5ff",
        100: "#f3e8ff",
        200: "#e9d5ff",
        300: "#d8b4fe",
        400: "#c084fc",
        500: "#a855f7",
        600: "#9333ea",
        700: "#7e22ce",
        800: "#6b21a8",
        900: "#581c87"
    },
    fuchsia: {
        50: "#fdf4ff",
        100: "#fae8ff",
        200: "#f5d0fe",
        300: "#f0abfc",
        400: "#e879f9",
        500: "#d946ef",
        600: "#c026d3",
        700: "#a21caf",
        800: "#86198f",
        900: "#701a75"
    },
    pink: {
        50: "#fdf2f8",
        100: "#fce7f3",
        200: "#fbcfe8",
        300: "#f9a8d4",
        400: "#f472b6",
        500: "#ec4899",
        600: "#db2777",
        700: "#be185d",
        800: "#9d174d",
        900: "#831843"
    },
    rose: {
        50: "#fff1f2",
        100: "#ffe4e6",
        200: "#fecdd3",
        300: "#fda4af",
        400: "#fb7185",
        500: "#f43f5e",
        600: "#e11d48",
        700: "#be123c",
        800: "#9f1239",
        900: "#881337"
    },
    get lightBlue () {
        warn({
            version: "v2.2",
            from: "lightBlue",
            to: "sky"
        });
        return this.sky;
    },
    get warmGray () {
        warn({
            version: "v3.0",
            from: "warmGray",
            to: "stone"
        });
        return this.stone;
    },
    get trueGray () {
        warn({
            version: "v3.0",
            from: "trueGray",
            to: "neutral"
        });
        return this.neutral;
    },
    get coolGray () {
        warn({
            version: "v3.0",
            from: "coolGray",
            to: "gray"
        });
        return this.gray;
    },
    get blueGray () {
        warn({
            version: "v3.0",
            from: "blueGray",
            to: "slate"
        });
        return this.slate;
    }
};
exports["default"] = _default;


/***/ }),

/***/ "./node_modules/tailwindcss/lib/util/log.js":
/*!**************************************************!*\
  !*** ./node_modules/tailwindcss/lib/util/log.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var process = __webpack_require__(/*! process/browser.js */ "./node_modules/process/browser.js");

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.dim = dim;
exports["default"] = void 0;
var _picocolors = _interopRequireDefault(__webpack_require__(/*! picocolors */ "./node_modules/picocolors/picocolors.browser.js"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
let alreadyShown = new Set();
function log(type, messages, key) {
    if (typeof process !== "undefined" && process.env.JEST_WORKER_ID) return;
    if (key && alreadyShown.has(key)) return;
    if (key) alreadyShown.add(key);
    console.warn("");
    messages.forEach((message)=>console.warn(type, "-", message));
}
function dim(input) {
    return _picocolors.default.dim(input);
}
var _default = {
    info (key, messages) {
        log(_picocolors.default.bold(_picocolors.default.cyan("info")), ...Array.isArray(key) ? [
            key
        ] : [
            messages,
            key
        ]);
    },
    warn (key, messages) {
        log(_picocolors.default.bold(_picocolors.default.yellow("warn")), ...Array.isArray(key) ? [
            key
        ] : [
            messages,
            key
        ]);
    },
    risk (key, messages) {
        log(_picocolors.default.bold(_picocolors.default.magenta("risk")), ...Array.isArray(key) ? [
            key
        ] : [
            messages,
            key
        ]);
    }
};
exports["default"] = _default;


/***/ }),

/***/ "./node_modules/vue-click-outside/index.js":
/*!*************************************************!*\
  !*** ./node_modules/vue-click-outside/index.js ***!
  \*************************************************/
/***/ ((module, exports) => {

function validate(binding) {
  if (typeof binding.value !== 'function') {
    console.warn('[Vue-click-outside:] provided expression', binding.expression, 'is not a function.')
    return false
  }

  return true
}

function isPopup(popupItem, elements) {
  if (!popupItem || !elements)
    return false

  for (var i = 0, len = elements.length; i < len; i++) {
    try {
      if (popupItem.contains(elements[i])) {
        return true
      }
      if (elements[i].contains(popupItem)) {
        return false
      }
    } catch(e) {
      return false
    }
  }

  return false
}

function isServer(vNode) {
  return typeof vNode.componentInstance !== 'undefined' && vNode.componentInstance.$isServer
}

exports = module.exports = {
  bind: function (el, binding, vNode) {
    if (!validate(binding)) return

    // Define Handler and cache it on the element
    function handler(e) {
      if (!vNode.context) return

      // some components may have related popup item, on which we shall prevent the click outside event handler.
      var elements = e.path || (e.composedPath && e.composedPath())
      elements && elements.length > 0 && elements.unshift(e.target)

      if (el.contains(e.target) || isPopup(vNode.context.popupItem, elements)) return

      el.__vueClickOutside__.callback(e)
    }

    // add Event Listeners
    el.__vueClickOutside__ = {
      handler: handler,
      callback: binding.value
    }
    const clickHandler = 'ontouchstart' in document.documentElement ? 'touchstart' : 'click';
    !isServer(vNode) && document.addEventListener(clickHandler, handler)
  },

  update: function (el, binding) {
    if (validate(binding)) el.__vueClickOutside__.callback = binding.value
  },

  unbind: function (el, binding, vNode) {
    // Remove Event Listeners
    const clickHandler = 'ontouchstart' in document.documentElement ? 'touchstart' : 'click';
    !isServer(vNode) && el.__vueClickOutside__ && document.removeEventListener(clickHandler, el.__vueClickOutside__.handler)
    delete el.__vueClickOutside__
  }
}


/***/ }),

/***/ "./resources/js/TextColorMenu.vue":
/*!****************************************!*\
  !*** ./resources/js/TextColorMenu.vue ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TextColorMenu_vue_vue_type_template_id_57133487_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TextColorMenu.vue?vue&type=template&id=57133487&scoped=true& */ "./resources/js/TextColorMenu.vue?vue&type=template&id=57133487&scoped=true&");
/* harmony import */ var _TextColorMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TextColorMenu.vue?vue&type=script&lang=js& */ "./resources/js/TextColorMenu.vue?vue&type=script&lang=js&");
/* harmony import */ var _TextColorMenu_vue_vue_type_style_index_0_id_57133487_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TextColorMenu.vue?vue&type=style&index=0&id=57133487&scoped=true&lang=css& */ "./resources/js/TextColorMenu.vue?vue&type=style&index=0&id=57133487&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _TextColorMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TextColorMenu_vue_vue_type_template_id_57133487_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _TextColorMenu_vue_vue_type_template_id_57133487_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "57133487",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/TextColorMenu.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/TextColorMenu.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./resources/js/TextColorMenu.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TextColorMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TextColorMenu.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/TextColorMenu.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TextColorMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/TextColorMenu.vue?vue&type=style&index=0&id=57133487&scoped=true&lang=css&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/TextColorMenu.vue?vue&type=style&index=0&id=57133487&scoped=true&lang=css& ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TextColorMenu_vue_vue_type_style_index_0_id_57133487_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/style-loader/dist/cjs.js!../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TextColorMenu.vue?vue&type=style&index=0&id=57133487&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/TextColorMenu.vue?vue&type=style&index=0&id=57133487&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/TextColorMenu.vue?vue&type=template&id=57133487&scoped=true&":
/*!***********************************************************************************!*\
  !*** ./resources/js/TextColorMenu.vue?vue&type=template&id=57133487&scoped=true& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TextColorMenu_vue_vue_type_template_id_57133487_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TextColorMenu_vue_vue_type_template_id_57133487_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TextColorMenu_vue_vue_type_template_id_57133487_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TextColorMenu.vue?vue&type=template&id=57133487&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/TextColorMenu.vue?vue&type=template&id=57133487&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/TextColorMenu.vue?vue&type=template&id=57133487&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/TextColorMenu.vue?vue&type=template&id=57133487&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.enabled
    ? _c(
        "div",
        {
          directives: [
            {
              name: "click-outside",
              rawName: "v-click-outside",
              value: _vm.onClickOutside,
              expression: "onClickOutside",
            },
          ],
          staticClass: "inline-block relative",
        },
        [
          _c("button", {
            directives: [
              {
                name: "tooltip",
                rawName: "v-tooltip",
                value: _vm.button.text,
                expression: "button.text",
              },
            ],
            staticClass: "bard-toolbar-button",
            class: {
              active: _vm.showColorMenu,
            },
            domProps: { innerHTML: _vm._s(_vm.button.html) },
            on: {
              click: function ($event) {
                _vm.showColorMenu = !_vm.showColorMenu
              },
            },
          }),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass:
                "absolute left-0 bg-white border border-gray-200 px-1 mt-sm rounded-sm flex flex-wrap min-w-250 lg:min-w-500 z-10 max-h-300px overflow-y-scroll",
              class: { hidden: !_vm.showColorMenu },
            },
            [
              _c("div", { staticClass: "flex flex-wrap py-2 w-full px-1" }, [
                _c("p", { staticClass: "font-bold w-full mb-2" }, [
                  _vm._v("Color pack"),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "inline-flex items-center" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.selectedGroup,
                        expression: "selectedGroup",
                      },
                    ],
                    staticClass: "form-radio",
                    attrs: {
                      id: "radio-color-default",
                      type: "radio",
                      value: "default",
                    },
                    domProps: { checked: _vm._q(_vm.selectedGroup, "default") },
                    on: {
                      click: function ($event) {
                        return _vm.switchColors("default")
                      },
                      change: function ($event) {
                        _vm.selectedGroup = "default"
                      },
                    },
                  }),
                  _vm._v(" "),
                  _c(
                    "label",
                    {
                      staticStyle: { "margin-left": ".2rem" },
                      attrs: { for: "radio-color-default" },
                    },
                    [_vm._v("Default")]
                  ),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "pl-2 inline-flex items-center" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.selectedGroup,
                        expression: "selectedGroup",
                      },
                    ],
                    staticClass: "form-radio",
                    attrs: {
                      id: "radio-color-custom",
                      type: "radio",
                      value: "custom",
                    },
                    domProps: { checked: _vm._q(_vm.selectedGroup, "custom") },
                    on: {
                      click: function ($event) {
                        return _vm.switchColors("custom")
                      },
                      change: function ($event) {
                        _vm.selectedGroup = "custom"
                      },
                    },
                  }),
                  _vm._v(" "),
                  _c(
                    "label",
                    {
                      staticStyle: { "margin-left": ".2rem" },
                      attrs: { for: "radio-color-custom" },
                    },
                    [_vm._v("Custom")]
                  ),
                ]),
              ]),
              _vm._v(" "),
              _vm.selectedGroup == "default"
                ? _c(
                    "div",
                    { staticClass: "flex flex-wrap w-full" },
                    [
                      _vm._l(_vm.availableColors, function (color, index) {
                        return [
                          typeof color == "string" &&
                          index != "transparent" &&
                          index != "current"
                            ? _c(
                                "div",
                                {
                                  key: index,
                                  staticClass:
                                    "py-1 hover:bg-gray-300 rounded-sm w-full sm:w-1/2 xl:w-1/4 flex flex-row justify-start cursor-pointer items-center my-1",
                                  on: {
                                    click: function ($event) {
                                      return _vm.setColor(color)
                                    },
                                  },
                                },
                                [
                                  _c("div", {
                                    staticClass: "w-6 h-6 mx-1",
                                    staticStyle: { border: "1px solid #000" },
                                    style: "background-color:" + color + ";",
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "p",
                                    {
                                      staticClass: "text-center",
                                      staticStyle: {
                                        "font-size": "0.6rem!important",
                                      },
                                    },
                                    [_vm._v(_vm._s(index))]
                                  ),
                                ]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          typeof color == "object"
                            ? _vm._l(color, function (hex, intensity) {
                                return _c(
                                  "div",
                                  {
                                    key: index + "-" + intensity,
                                    staticClass:
                                      "py-1 hover:bg-gray-300 rounded-sm w-full sm:w-1/2 xl:w-1/4 flex flex-row justify-start cursor-pointer items-center my-1",
                                    on: {
                                      click: function ($event) {
                                        return _vm.setColor(hex)
                                      },
                                    },
                                  },
                                  [
                                    _c("div", {
                                      staticClass: "w-6 h-6 mx-1",
                                      staticStyle: { border: "1px solid #000" },
                                      style: "background-color:" + hex + ";",
                                    }),
                                    _vm._v(" "),
                                    _c(
                                      "p",
                                      {
                                        staticClass: "text-center px-1",
                                        staticStyle: {
                                          "font-size": "0.6rem!important",
                                        },
                                      },
                                      [_vm._v(_vm._s(index + "-" + intensity))]
                                    ),
                                  ]
                                )
                              })
                            : _vm._e(),
                        ]
                      }),
                    ],
                    2
                  )
                : _vm.availableCustomColors
                ? _c(
                    "div",
                    { staticClass: "flex flex-wrap w-full" },
                    [
                      _vm._l(
                        _vm.availableCustomColors,
                        function (color, index) {
                          return [
                            typeof color == "string" &&
                            index != "transparent" &&
                            index != "current"
                              ? _c(
                                  "div",
                                  {
                                    key: index,
                                    staticClass:
                                      "py-1 hover:bg-gray-300 rounded-sm w-full sm:w-1/2 xl:w-1/4 flex flex-row justify-start cursor-pointer items-center my-1",
                                    on: {
                                      click: function ($event) {
                                        return _vm.setColor(color)
                                      },
                                    },
                                  },
                                  [
                                    _c("div", {
                                      staticClass: "w-6 h-6 mx-1",
                                      staticStyle: { border: "1px solid #000" },
                                      style: "background-color:" + color + ";",
                                    }),
                                    _vm._v(" "),
                                    _c(
                                      "p",
                                      {
                                        staticClass: "text-center",
                                        staticStyle: {
                                          "font-size": "0.6rem!important",
                                        },
                                      },
                                      [_vm._v(_vm._s(index))]
                                    ),
                                  ]
                                )
                              : _vm._e(),
                            _vm._v(" "),
                            typeof color == "object"
                              ? _vm._l(color, function (hex, intensity) {
                                  return _c(
                                    "div",
                                    {
                                      key: index + "-" + intensity,
                                      staticClass:
                                        "py-1 hover:bg-gray-300 rounded-sm w-full sm:w-1/2 xl:w-1/4 flex flex-row justify-start cursor-pointer items-center my-1",
                                      on: {
                                        click: function ($event) {
                                          return _vm.setColor(hex)
                                        },
                                      },
                                    },
                                    [
                                      _c("div", {
                                        staticClass: "w-6 h-6 mx-1",
                                        staticStyle: {
                                          border: "1px solid #000",
                                        },
                                        style: "background-color:" + hex + ";",
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "p",
                                        {
                                          staticClass: "text-center px-1",
                                          staticStyle: {
                                            "font-size": "0.6rem!important",
                                          },
                                        },
                                        [
                                          _vm._v(
                                            _vm._s(index + "-" + intensity)
                                          ),
                                        ]
                                      ),
                                    ]
                                  )
                                })
                              : _vm._e(),
                          ]
                        }
                      ),
                    ],
                    2
                  )
                : _c(
                    "div",
                    { staticClass: "w-full flex flex-col items-center py-4" },
                    [
                      _c(
                        "svg",
                        {
                          staticClass: "h-8 w-8 text-red mb-1",
                          attrs: {
                            xmlns: "http://www.w3.org/2000/svg",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor",
                            "aria-hidden": "true",
                          },
                        },
                        [
                          _c("path", {
                            attrs: {
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round",
                              "stroke-width": "2",
                              d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z",
                            },
                          }),
                        ]
                      ),
                      _vm._v(" "),
                      _c("p", [
                        _vm._v("It appears there are no custom colors."),
                      ]),
                      _vm._v(" "),
                      _vm._m(0),
                    ]
                  ),
            ]
          ),
        ]
      )
    : _vm._e()
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [
      _vm._v("Please check the "),
      _c(
        "a",
        {
          staticClass: "text-blue-600",
          attrs: {
            href: "https://github.com/xndbogdan/statamic-bard-text-color/blob/main/README.md#custom-colors",
          },
        },
        [_vm._v("documentation")]
      ),
      _vm._v(" on how to configure them."),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ normalizeComponent)
/* harmony export */ });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!******************************!*\
  !*** ./resources/js/bard.js ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TextColor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TextColor */ "./resources/js/TextColor.js");
/* harmony import */ var _TextColorMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TextColorMenu */ "./resources/js/TextColorMenu.vue");


Statamic.booting(function () {
  var customColors = Statamic.$config.get('bard-custom-colors') || null;
  window.bardCustomColors = customColors;
  Statamic.$bard.addExtension(function () {
    return _TextColor__WEBPACK_IMPORTED_MODULE_0__.TextColor;
  });
  Statamic.$bard.buttons(function () {
    return {
      name: "color",
      text: "Text Color",
      command: function command(editor) {
        return editor.commands.changeTextColor();
      },
      args: {
        color: "#fff"
      },
      icon: "paint-brush",
      component: _TextColorMenu__WEBPACK_IMPORTED_MODULE_1__["default"]
    };
  });
});
})();

/******/ })()
;