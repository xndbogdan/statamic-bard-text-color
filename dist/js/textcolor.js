(()=>{var e={332:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});var n=r(519),a=r.n(n)()((function(e){return e[1]}));a.push([e.id,".overflow-y-scroll[data-v-41cd26d6]{overflow-y:scroll}.max-h-300px[data-v-41cd26d6],.max-h-320px[data-v-41cd26d6]{max-height:300px}.px-1[data-v-41cd26d6]{padding-left:.25rem;padding-right:.25rem}.py-1[data-v-41cd26d6]{padding-bottom:.25rem;padding-top:.25rem}.cursor-pointer[data-v-41cd26d6]{cursor:pointer}.hover\\:bg-gray-300[data-v-41cd26d6]:hover{background-color:#d1d5db}.z-10[data-v-41cd26d6]{z-index:10}.text-center[data-v-41cd26d6]{text-align:center}.mx-1[data-v-41cd26d6]{margin-left:.25rem;margin-right:.25rem}.mx-2[data-v-41cd26d6]{margin-left:.5rem}.mr-2[data-v-41cd26d6],.mx-2[data-v-41cd26d6]{margin-right:.5rem}.mt-2[data-v-41cd26d6]{margin-top:.5rem}.my-1[data-v-41cd26d6]{margin-bottom:.25rem;margin-top:.25rem}.rounded-xl[data-v-41cd26d6]{border-radius:.75rem}.bg-gray-50[data-v-41cd26d6]{background-color:#f9fafb}.bg-gray-200[data-v-41cd26d6]{background-color:#e5e7eb}.flex[data-v-41cd26d6]{display:flex}.flex-wrap[data-v-41cd26d6]{flex-wrap:wrap}.items-center[data-v-41cd26d6]{align-items:center}.flex-row[data-v-41cd26d6]{flex-direction:row}.flex-col[data-v-41cd26d6]{flex-direction:column}.justify-center[data-v-41cd26d6]{justify-content:center}.justify-start[data-v-41cd26d6]{justify-content:start}.w-6[data-v-41cd26d6]{width:1.5rem}.h-6[data-v-41cd26d6]{height:1.5rem}@media (min-width:0px){.w-full[data-v-41cd26d6]{width:100%}.w-1\\/4[data-v-41cd26d6]{width:25%}.w-1\\/2[data-v-41cd26d6]{width:50%}.min-w-250[data-v-41cd26d6]{min-width:250px}.min-w-500[data-v-41cd26d6]{min-width:500px}}@media (min-width:640px){.sm\\:text-xl[data-v-41cd26d6]{font-size:1.25rem;line-height:1.75rem}.sm\\:w-full[data-v-41cd26d6]{width:100%}.sm\\:w-1\\/4[data-v-41cd26d6]{width:25%}.sm\\:w-1\\/2[data-v-41cd26d6]{width:50%}}@media (min-width:768px){.md\\:w-full[data-v-41cd26d6]{width:100%}.md\\:w-1\\/4[data-v-41cd26d6]{width:25%}.md\\:w-1\\/2[data-v-41cd26d6]{width:50%}}@media (min-width:1280px){.lg\\:w-full[data-v-41cd26d6]{width:100%}.lg\\:w-1\\/4[data-v-41cd26d6]{width:25%}.lg\\:w-1\\/2[data-v-41cd26d6]{width:50%}.lg\\:min-w-250[data-v-41cd26d6]{min-width:250px}.lg\\:min-w-500[data-v-41cd26d6]{min-width:500px}}",""]);const o=a},519:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r=e(t);return t[2]?"@media ".concat(t[2]," {").concat(r,"}"):r})).join("")},t.i=function(e,r,n){"string"==typeof e&&(e=[[null,e,""]]);var a={};if(n)for(var o=0;o<this.length;o++){var i=this[o][0];null!=i&&(a[i]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);n&&a[d[0]]||(r&&(d[2]?d[2]="".concat(r," and ").concat(d[2]):d[2]=r),t.push(d))}},t}},241:e=>{var t=String,r=function(){return{isColorSupported:!1,reset:t,bold:t,dim:t,italic:t,underline:t,inverse:t,hidden:t,strikethrough:t,black:t,red:t,green:t,yellow:t,blue:t,magenta:t,cyan:t,white:t,gray:t,bgBlack:t,bgRed:t,bgGreen:t,bgYellow:t,bgBlue:t,bgMagenta:t,bgCyan:t,bgWhite:t}};e.exports=r(),e.exports.createColors=r},155:e=>{var t,r,n=e.exports={};function a(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function i(e){if(t===setTimeout)return setTimeout(e,0);if((t===a||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:a}catch(e){t=a}try{r="function"==typeof clearTimeout?clearTimeout:o}catch(e){r=o}}();var c,d=[],s=!1,l=-1;function f(){s&&c&&(s=!1,c.length?d=c.concat(d):l=-1,d.length&&u())}function u(){if(!s){var e=i(f);s=!0;for(var t=d.length;t;){for(c=d,d=[];++l<t;)c&&c[l].run();l=-1,t=d.length}c=null,s=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===o||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function m(e,t){this.fun=e,this.array=t}function v(){}n.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];d.push(new m(e,t)),1!==d.length||s||i(u)},m.prototype.run=function(){this.fun.apply(null,this.array)},n.title="browser",n.browser=!0,n.env={},n.argv=[],n.version="",n.versions={},n.on=v,n.addListener=v,n.once=v,n.off=v,n.removeListener=v,n.removeAllListeners=v,n.emit=v,n.prependListener=v,n.prependOnceListener=v,n.listeners=function(e){return[]},n.binding=function(e){throw new Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(e){throw new Error("process.chdir is not supported")},n.umask=function(){return 0}},379:(e,t,r)=>{"use strict";var n,a=function(){return void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n},o=function(){var e={};return function(t){if(void 0===e[t]){var r=document.querySelector(t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}e[t]=r}return e[t]}}(),i=[];function c(e){for(var t=-1,r=0;r<i.length;r++)if(i[r].identifier===e){t=r;break}return t}function d(e,t){for(var r={},n=[],a=0;a<e.length;a++){var o=e[a],d=t.base?o[0]+t.base:o[0],s=r[d]||0,l="".concat(d," ").concat(s);r[d]=s+1;var f=c(l),u={css:o[1],media:o[2],sourceMap:o[3]};-1!==f?(i[f].references++,i[f].updater(u)):i.push({identifier:l,updater:h(u,t),references:1}),n.push(l)}return n}function s(e){var t=document.createElement("style"),n=e.attributes||{};if(void 0===n.nonce){var a=r.nc;a&&(n.nonce=a)}if(Object.keys(n).forEach((function(e){t.setAttribute(e,n[e])})),"function"==typeof e.insert)e.insert(t);else{var i=o(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var l,f=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function u(e,t,r,n){var a=r?"":n.media?"@media ".concat(n.media," {").concat(n.css,"}"):n.css;if(e.styleSheet)e.styleSheet.cssText=f(t,a);else{var o=document.createTextNode(a),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(o,i[t]):e.appendChild(o)}}function m(e,t,r){var n=r.css,a=r.media,o=r.sourceMap;if(a?e.setAttribute("media",a):e.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var v=null,p=0;function h(e,t){var r,n,a;if(t.singleton){var o=p++;r=v||(v=s(t)),n=u.bind(null,r,o,!1),a=u.bind(null,r,o,!0)}else r=s(t),n=m.bind(null,r,t),a=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(r)};return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else a()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=a());var r=d(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var n=0;n<r.length;n++){var a=c(r[n]);i[a].references--}for(var o=d(e,t),s=0;s<r.length;s++){var l=c(r[s]);0===i[l].references&&(i[l].updater(),i.splice(l,1))}r=o}}}},808:(e,t,r)=>{let n=r(921);e.exports=(n.__esModule?n:{default:n}).default},921:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,a=(n=r(679))&&n.__esModule?n:{default:n};function o({version:e,from:t,to:r}){a.default.warn(`${t}-color-renamed`,[`As of Tailwind CSS ${e}, \`${t}\` has been renamed to \`${r}\`.`,"Update your configuration file to silence this warning."])}var i={inherit:"inherit",current:"currentColor",transparent:"transparent",black:"#000",white:"#fff",slate:{50:"#f8fafc",100:"#f1f5f9",200:"#e2e8f0",300:"#cbd5e1",400:"#94a3b8",500:"#64748b",600:"#475569",700:"#334155",800:"#1e293b",900:"#0f172a"},gray:{50:"#f9fafb",100:"#f3f4f6",200:"#e5e7eb",300:"#d1d5db",400:"#9ca3af",500:"#6b7280",600:"#4b5563",700:"#374151",800:"#1f2937",900:"#111827"},zinc:{50:"#fafafa",100:"#f4f4f5",200:"#e4e4e7",300:"#d4d4d8",400:"#a1a1aa",500:"#71717a",600:"#52525b",700:"#3f3f46",800:"#27272a",900:"#18181b"},neutral:{50:"#fafafa",100:"#f5f5f5",200:"#e5e5e5",300:"#d4d4d4",400:"#a3a3a3",500:"#737373",600:"#525252",700:"#404040",800:"#262626",900:"#171717"},stone:{50:"#fafaf9",100:"#f5f5f4",200:"#e7e5e4",300:"#d6d3d1",400:"#a8a29e",500:"#78716c",600:"#57534e",700:"#44403c",800:"#292524",900:"#1c1917"},red:{50:"#fef2f2",100:"#fee2e2",200:"#fecaca",300:"#fca5a5",400:"#f87171",500:"#ef4444",600:"#dc2626",700:"#b91c1c",800:"#991b1b",900:"#7f1d1d"},orange:{50:"#fff7ed",100:"#ffedd5",200:"#fed7aa",300:"#fdba74",400:"#fb923c",500:"#f97316",600:"#ea580c",700:"#c2410c",800:"#9a3412",900:"#7c2d12"},amber:{50:"#fffbeb",100:"#fef3c7",200:"#fde68a",300:"#fcd34d",400:"#fbbf24",500:"#f59e0b",600:"#d97706",700:"#b45309",800:"#92400e",900:"#78350f"},yellow:{50:"#fefce8",100:"#fef9c3",200:"#fef08a",300:"#fde047",400:"#facc15",500:"#eab308",600:"#ca8a04",700:"#a16207",800:"#854d0e",900:"#713f12"},lime:{50:"#f7fee7",100:"#ecfccb",200:"#d9f99d",300:"#bef264",400:"#a3e635",500:"#84cc16",600:"#65a30d",700:"#4d7c0f",800:"#3f6212",900:"#365314"},green:{50:"#f0fdf4",100:"#dcfce7",200:"#bbf7d0",300:"#86efac",400:"#4ade80",500:"#22c55e",600:"#16a34a",700:"#15803d",800:"#166534",900:"#14532d"},emerald:{50:"#ecfdf5",100:"#d1fae5",200:"#a7f3d0",300:"#6ee7b7",400:"#34d399",500:"#10b981",600:"#059669",700:"#047857",800:"#065f46",900:"#064e3b"},teal:{50:"#f0fdfa",100:"#ccfbf1",200:"#99f6e4",300:"#5eead4",400:"#2dd4bf",500:"#14b8a6",600:"#0d9488",700:"#0f766e",800:"#115e59",900:"#134e4a"},cyan:{50:"#ecfeff",100:"#cffafe",200:"#a5f3fc",300:"#67e8f9",400:"#22d3ee",500:"#06b6d4",600:"#0891b2",700:"#0e7490",800:"#155e75",900:"#164e63"},sky:{50:"#f0f9ff",100:"#e0f2fe",200:"#bae6fd",300:"#7dd3fc",400:"#38bdf8",500:"#0ea5e9",600:"#0284c7",700:"#0369a1",800:"#075985",900:"#0c4a6e"},blue:{50:"#eff6ff",100:"#dbeafe",200:"#bfdbfe",300:"#93c5fd",400:"#60a5fa",500:"#3b82f6",600:"#2563eb",700:"#1d4ed8",800:"#1e40af",900:"#1e3a8a"},indigo:{50:"#eef2ff",100:"#e0e7ff",200:"#c7d2fe",300:"#a5b4fc",400:"#818cf8",500:"#6366f1",600:"#4f46e5",700:"#4338ca",800:"#3730a3",900:"#312e81"},violet:{50:"#f5f3ff",100:"#ede9fe",200:"#ddd6fe",300:"#c4b5fd",400:"#a78bfa",500:"#8b5cf6",600:"#7c3aed",700:"#6d28d9",800:"#5b21b6",900:"#4c1d95"},purple:{50:"#faf5ff",100:"#f3e8ff",200:"#e9d5ff",300:"#d8b4fe",400:"#c084fc",500:"#a855f7",600:"#9333ea",700:"#7e22ce",800:"#6b21a8",900:"#581c87"},fuchsia:{50:"#fdf4ff",100:"#fae8ff",200:"#f5d0fe",300:"#f0abfc",400:"#e879f9",500:"#d946ef",600:"#c026d3",700:"#a21caf",800:"#86198f",900:"#701a75"},pink:{50:"#fdf2f8",100:"#fce7f3",200:"#fbcfe8",300:"#f9a8d4",400:"#f472b6",500:"#ec4899",600:"#db2777",700:"#be185d",800:"#9d174d",900:"#831843"},rose:{50:"#fff1f2",100:"#ffe4e6",200:"#fecdd3",300:"#fda4af",400:"#fb7185",500:"#f43f5e",600:"#e11d48",700:"#be123c",800:"#9f1239",900:"#881337"},get lightBlue(){return o({version:"v2.2",from:"lightBlue",to:"sky"}),this.sky},get warmGray(){return o({version:"v3.0",from:"warmGray",to:"stone"}),this.stone},get trueGray(){return o({version:"v3.0",from:"trueGray",to:"neutral"}),this.neutral},get coolGray(){return o({version:"v3.0",from:"coolGray",to:"gray"}),this.gray},get blueGray(){return o({version:"v3.0",from:"blueGray",to:"slate"}),this.slate}};t.default=i},679:(e,t,r)=>{"use strict";var n=r(155);Object.defineProperty(t,"__esModule",{value:!0}),t.dim=function(e){return o.default.dim(e)},t.default=void 0;var a,o=(a=r(241))&&a.__esModule?a:{default:a};let i=new Set;function c(e,t,r){void 0!==n&&n.env.JEST_WORKER_ID||r&&i.has(r)||(r&&i.add(r),console.warn(""),t.forEach((t=>console.warn(e,"-",t))))}var d={info(e,t){c(o.default.bold(o.default.cyan("info")),...Array.isArray(e)?[e]:[t,e])},warn(e,t){c(o.default.bold(o.default.yellow("warn")),...Array.isArray(e)?[e]:[t,e])},risk(e,t){c(o.default.bold(o.default.magenta("risk")),...Array.isArray(e)?[e]:[t,e])}};t.default=d},649:(e,t)=>{function r(e){return"function"==typeof e.value||(console.warn("[Vue-click-outside:] provided expression",e.expression,"is not a function."),!1)}function n(e){return void 0!==e.componentInstance&&e.componentInstance.$isServer}e.exports={bind:function(e,t,a){if(!r(t))return;function o(t){if(a.context){var r=t.path||t.composedPath&&t.composedPath();r&&r.length>0&&r.unshift(t.target),e.contains(t.target)||function(e,t){if(!e||!t)return!1;for(var r=0,n=t.length;r<n;r++)try{if(e.contains(t[r]))return!0;if(t[r].contains(e))return!1}catch(e){return!1}return!1}(a.context.popupItem,r)||e.__vueClickOutside__.callback(t)}}e.__vueClickOutside__={handler:o,callback:t.value};const i="ontouchstart"in document.documentElement?"touchstart":"click";!n(a)&&document.addEventListener(i,o)},update:function(e,t){r(t)&&(e.__vueClickOutside__.callback=t.value)},unbind:function(e,t,r){const a="ontouchstart"in document.documentElement?"touchstart":"click";!n(r)&&e.__vueClickOutside__&&document.removeEventListener(a,e.__vueClickOutside__.handler),delete e.__vueClickOutside__}}}},t={};function r(n){var a=t[n];if(void 0!==a)return a.exports;var o=t[n]={id:n,exports:{}};return e[n](o,o.exports,r),o.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.nc=void 0,(()=>{"use strict";function e(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function t(t){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?e(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):e(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var a=Statamic.$bard.tiptap.core.Mark,o=(Statamic.$bard.tiptap.core.markInputRule,a.create({name:"textColor",addAttributes:function(){return{key:{default:"",parseHTML:function(e){var t;null===(t=e.querySelector("span.text-color"))||void 0===t||t.getAttribute("data-class")}}}},parseHtml:function(){return[{tag:"span.text-color"}]},renderHTML:function(e){var r=e.HTMLAttributes,n="color: ";return n+=r.key,["span",t(t({},r),{},{class:"text-color","data-class":r.key,style:n}),0]},addCommands:function(){var e=this;return{changeTextColor:function(t){return function(r){var n=r.chain;return t.key?n().setMark(e.name,t).run():n().unsetMark(e.name,{extendEmptyMarkRange:!0}).run()}}}}})),i=r(649),c=r.n(i),d=r(808),s=r.n(d);const l={mixins:[BardToolbarButton],data:function(){return{showColorMenu:!1,availableColors:s(),availableCustomColors:null,selectedColors:s(),selectedGroup:"default",enabled:!1}},directives:{ClickOutside:c()},methods:{onClickOutside:function(){this.showColorMenu=!1},setColor:function(e){this.editor.commands.changeTextColor({key:e!==this.currentKey&&e,color:e}),this.showColorMenu=!1},switchColors:function(e){switch(e){case"default":this.selectedGroup="default",this.selectedColors=this.availableColors;break;case"custom":this.selectedGroup="custom",this.selectedColors=this.availableCustomColors}}},computed:{currentKey:function(){return this.editor.getAttributes("textColor").key}},mounted:function(){this.availableCustomColors=window.bardCustomColors?window.bardCustomColors:null,this.config&&this.config.buttons.includes("color")&&(this.enabled=!0)},created:function(){}};var f=r(379),u=r.n(f),m=r(332),v={insert:"head",singleton:!1};u()(m.Z,v);m.Z.locals;var p=function(e,t,r,n,a,o,i,c){var d,s="function"==typeof e?e.options:e;if(t&&(s.render=t,s.staticRenderFns=r,s._compiled=!0),n&&(s.functional=!0),o&&(s._scopeId="data-v-"+o),i?(d=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),a&&a.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},s._ssrRegister=d):a&&(d=c?function(){a.call(this,(s.functional?this.parent:this).$root.$options.shadowRoot)}:a),d)if(s.functional){s._injectStyles=d;var l=s.render;s.render=function(e,t){return d.call(t),l(e,t)}}else{var f=s.beforeCreate;s.beforeCreate=f?[].concat(f,d):[d]}return{exports:e,options:s}}(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.enabled?r("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:e.onClickOutside,expression:"onClickOutside"}],staticClass:"inline-block relative"},[r("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:e.button.text,expression:"button.text"}],staticClass:"bard-toolbar-button",class:{active:e.showColorMenu},domProps:{innerHTML:e._s(e.button.html)},on:{click:function(t){e.showColorMenu=!e.showColorMenu}}}),e._v(" "),r("div",{staticClass:"absolute left-10 bg-gray-200 px-1 rounded-sm flex flex-wrap min-w-250 lg:min-w-500 z-10 max-h-300px overflow-y-scroll",class:{hidden:!e.showColorMenu}},[r("div",{staticClass:"flex flex-wrap py-2 w-full px-1"},[r("p",{staticClass:"font-bold w-full mb-2"},[e._v("Color pack")]),e._v(" "),r("div",{staticClass:"inline-flex items-center"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.selectedGroup,expression:"selectedGroup"}],staticClass:"form-radio",attrs:{id:"radio-color-default",type:"radio",value:"default"},domProps:{checked:e._q(e.selectedGroup,"default")},on:{click:function(t){return e.switchColors("default")},change:function(t){e.selectedGroup="default"}}}),e._v(" "),r("label",{staticStyle:{"margin-left":".2rem"},attrs:{for:"radio-color-default"}},[e._v("Default")])]),e._v(" "),r("div",{staticClass:"pl-2 inline-flex items-center"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.selectedGroup,expression:"selectedGroup"}],staticClass:"form-radio",attrs:{id:"radio-color-custom",type:"radio",value:"custom"},domProps:{checked:e._q(e.selectedGroup,"custom")},on:{click:function(t){return e.switchColors("custom")},change:function(t){e.selectedGroup="custom"}}}),e._v(" "),r("label",{staticStyle:{"margin-left":".2rem"},attrs:{for:"radio-color-custom"}},[e._v("Custom")])])]),e._v(" "),"default"==e.selectedGroup?r("div",{staticClass:"flex flex-wrap w-full"},[e._l(e.availableColors,(function(t,n){return["string"==typeof t&&"transparent"!=n&&"current"!=n?r("div",{key:n,staticClass:"py-1 hover:bg-gray-300 w-full sm:w-1/2 xl:w-1/4 flex flex-row justify-start cursor-pointer items-center my-1",on:{click:function(r){return e.setColor(t)}}},[r("div",{staticClass:"w-6 h-6 mx-1",staticStyle:{border:"1px solid #000"},style:"background-color:"+t+";"}),e._v(" "),r("p",{staticClass:"text-center",staticStyle:{"font-size":"0.65rem!important"}},[e._v(e._s(n))])]):e._e(),e._v(" "),"object"==typeof t?e._l(t,(function(t,a){return r("div",{key:n+"-"+a,staticClass:"py-1 hover:bg-gray-300 w-full sm:w-1/2 xl:w-1/4 flex flex-row justify-start cursor-pointer items-center my-1",on:{click:function(r){return e.setColor(t)}}},[r("div",{staticClass:"w-6 h-6 mx-1",staticStyle:{border:"1px solid #000"},style:"background-color:"+t+";"}),e._v(" "),r("p",{staticClass:"text-center px-1",staticStyle:{"font-size":"0.75rem!important"}},[e._v(e._s(n+"-"+a))])])})):e._e()]}))],2):e.availableCustomColors?r("div",{staticClass:"flex flex-wrap w-full"},[e._l(e.availableCustomColors,(function(t,n){return["string"==typeof t&&"transparent"!=n&&"current"!=n?r("div",{key:n,staticClass:"py-1 hover:bg-gray-300 w-full sm:w-1/2 xl:w-1/4 flex flex-row justify-start cursor-pointer items-center my-1",on:{click:function(r){return e.setColor(t)}}},[r("div",{staticClass:"w-6 h-6 mx-1",staticStyle:{border:"1px solid #000"},style:"background-color:"+t+";"}),e._v(" "),r("p",{staticClass:"text-center",staticStyle:{"font-size":"0.75rem!important"}},[e._v(e._s(n))])]):e._e(),e._v(" "),"object"==typeof t?e._l(t,(function(t,a){return r("div",{key:n+"-"+a,staticClass:"py-1 hover:bg-gray-300 w-full sm:w-1/2 xl:w-1/4 flex flex-row justify-start cursor-pointer items-center my-1",on:{click:function(r){return e.setColor(t)}}},[r("div",{staticClass:"w-6 h-6 mx-1",staticStyle:{border:"1px solid #000"},style:"background-color:"+t+";"}),e._v(" "),r("p",{staticClass:"text-center px-1",staticStyle:{"font-size":"0.65rem!important"}},[e._v(e._s(n+"-"+a))])])})):e._e()]}))],2):r("div",{staticClass:"w-full flex flex-col items-center py-4"},[r("svg",{staticClass:"h-8 w-8 text-red mb-1",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"}},[r("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"}})]),e._v(" "),r("p",[e._v("It appears there are no custom colors.")]),e._v(" "),e._m(0)])])]):e._e()}),[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v("Please check the "),r("a",{staticClass:"text-blue-600",attrs:{href:"https://github.com/xndbogdan/statamic-bard-text-color/blob/main/README.md#custom-colors"}},[e._v("documentation")]),e._v(" on how to configure them.")])}],!1,null,"41cd26d6",null);const h=p.exports;Statamic.booting((function(){var e=Statamic.$config.get("bard-custom-colors")||null;window.bardCustomColors=e,Statamic.$bard.addExtension((function(){return o})),Statamic.$bard.buttons((function(){return{name:"color",text:"Text Color",command:function(e){return e.commands.changeTextColor()},args:{color:"#fff"},icon:"paint-brush",component:h}}))}))})()})();