/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./app.scss":
/*!*************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./app.scss ***!
  \*************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "../node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_normalize_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!./styles/normalize.css */ "../node_modules/css-loader/dist/cjs.js!./styles/normalize.css");
// Imports



var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_styles_normalize_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* screen sizes */\nh1,\nh2,\nh3,\nh4 {\n  color: var(--font-primary-color);\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  text-shadow: 0 0 1px transparent; }\n\n:root {\n  --fire-engine-red: #ce2029;\n  --atlantis: #97cd2d;\n  --light-pea-green: #c4fe82;\n  --titanium-yellow: #eee600;\n  --golden-rod: #edda74;\n  --rebecca-purple: #663399;\n  --bluish-purple: #743ad5;\n  --dodger-blue: #1e90ff;\n  --dimorphotheca-magenta: #d53a9d;\n  --neon-pink: #f535aa;\n  --light-plum: #9d5783;\n  --bobo-gray: #b0b0b0;\n  --boulder: #777777;\n  --storm-dust: #646463;\n  --black-eel: #463e3f;\n  --font-weight: 300;\n  --font-primary: 'Segoe UI Webfont', '-apple - system', 'Helvetica Neue',\n    'Lucida Grande', Roboto, Ebrima, 'Nirmala UI', Gadugi, 'Segoe Xbox Symbol',\n    'Segoe UI Symbol', 'Meiryo UI', 'Khmer UI', Tunga, 'Lao UI', Raavi,\n    'Iskoola Pota', Latha, Leelawadee, 'Microsoft YaHei UI',\n    'Microsoft JhengHei UI', 'Malgun Gothic', 'Estrangelo Edessa',\n    'Microsoft Himalaya', 'Microsoft New Tai Lue', 'Microsoft PhagsPa',\n    'Microsoft Tai Le', 'Microsoft Yi Baiti', 'Mongolian Baiti', 'MV Boli',\n    'Myanmar Text', 'Cambria Math';\n  --font-primary-color: var(--boulder);\n  --font-secondary: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo,\n    Courier, monospace;\n  --font-secondary-color: var(--black-eel);\n  --grid-rows: 2;\n  --grid-columns: 2;\n  --timer: '';\n  --win: '0';\n  --image-url: ''; }\n\nh1 {\n  font-size: var(--text-xxl); }\n\nh2 {\n  font-size: var(--text-xl); }\n\nh3 {\n  font-size: var(--text-lg); }\n\nh4 {\n  font-size: var(--text-md); }\n\nsmall {\n  font-size: var(--text-sm); }\n\nbody {\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n  font-size: var(--text-base-size);\n  font-family: var(--font-primary);\n  font-weight: var(--font-weight);\n  color: var(--font-secondary);\n  /* set base values */\n  --text-base-size: 1em;\n  --text-scale-ratio: 1.2;\n  /* type scale */\n  --text-xs: calc(1em / (var(--text-scale-ratio) * var(--text-scale-ratio)));\n  --text-sm: calc(1em / var(--text-scale-ratio));\n  --text-md: calc(1em * var(--text-scale-ratio));\n  --text-lg: calc(1em * var(--text-scale-ratio) * var(--text-scale-ratio));\n  --text-xl: calc(\n    1em * var(--text-scale-ratio) * var(--text-scale-ratio) *\n      var(--text-scale-ratio)\n  );\n  --text-xxl: calc(\n    1em * var(--text-scale-ratio) * var(--text-scale-ratio) *\n      var(--text-scale-ratio) * var(--text-scale-ratio)\n  );\n  --text-xxxl: calc(\n    1em * var(--text-scale-ratio) * var(--text-scale-ratio) *\n      var(--text-scale-ratio) * var(--text-scale-ratio) *\n      var(--text-scale-ratio)\n  ); }\n  @media (min-width: 576px) {\n    body {\n      --text-base-size: 1.2em;\n      --text-scale-ratio: 1.25; } }\n  @media (min-width: 768px) {\n    body {\n      --text-base-size: 1.3em;\n      --text-scale-ratio: 1.27; } }\n  @media (min-width: 992px) {\n    body {\n      --text-base-size: 1.5em;\n      --text-scale-ratio: 1.28; } }\n  @media (min-width: 1200px) {\n    body {\n      --text-base-size: 1.8em;\n      --text-scale-ratio: 1.3; } }\n\nheader {\n  min-height: 100vh;\n  width: 100%;\n  margin-left: 10%;\n  margin-right: 10%;\n  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);\n  background-size: 400% 400%;\n  animation: gradient 15s ease infinite;\n  mix-blend-mode: overlay; }\n\n@keyframes gradient {\n  0% {\n    background-position: 0% 50%; }\n  50% {\n    background-position: 100% 50%; }\n  100% {\n    background-position: 0% 50%; } }\n  header h1 {\n    animation: slowlyAppear ease 5s;\n    text-align: center;\n    padding-top: 4rem;\n    mix-blend-mode: color-dodge; }\n\n@keyframes slowlyAppear {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n  header p {\n    animation: slowlyAppear ease 5s;\n    max-width: 80%;\n    margin: auto;\n    mix-blend-mode: color-dodge;\n    text-align: center;\n    color: var(--storm-dust);\n    border: 1px solid;\n    border-width: 1px;\n    padding: 0.375rem 0.675rem 0.5rem;\n    border-image-slice: 1;\n    border-image-source: linear-gradient(var(--dimorphotheca-magenta), var(--rebecca-purple));\n    opacity: 0.6;\n    transition: opacity 0.3s ease-in; }\n\n@keyframes slowlyAppear {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n    header p:hover {\n      opacity: 1;\n      transition: opacity 0.3s ease-in; }\n    @media (min-width: 576px) {\n      header p {\n        font-size: 80%; } }\n    @media (min-width: 992px) {\n      header p {\n        max-width: 576px;\n        margin: 1em auto 2em;\n        line-height: 1.375em;\n        font-size: 75%; } }\n    header p a {\n      text-decoration: none;\n      color: dodgerblue; }\n      header p a:hover {\n        text-decoration: underline; }\n  header button {\n    text-rendering: optimizeLegibility;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    text-shadow: 0 0 1px transparent;\n    user-select: none;\n    font-size: 1.5rem;\n    height: 3.5em;\n    width: 3.5em;\n    display: block;\n    font-family: var(--font-secondary);\n    margin: 2rem auto;\n    border: 2px solid transparent;\n    outline: none !important;\n    color: #fff;\n    background: var(--bluish-purple);\n    cursor: pointer;\n    position: relative;\n    border-radius: 50%;\n    transition: background 0.5s ease; }\n    header button:before {\n      content: '';\n      background-color: var(--light-plum);\n      background: linear-gradient(45deg, var(--dodger-blue), var(--rebecca-purple), var(--dodger-blue), var(--dimorphotheca-magenta), var(--rebecca-purple), rgba(255, 0, 0, 0.5), var(--dodger-blue));\n      position: absolute;\n      top: -4px;\n      left: -4px;\n      background-size: 400%;\n      z-index: -1;\n      filter: blur(9px);\n      width: calc(100% + 11px);\n      height: calc(100% + 13px);\n      animation: glowing 20s linear infinite;\n      opacity: 0;\n      transition: opacity 0.2s ease-in-out;\n      border-radius: 50%; }\n    header button:active, header button:focus, header button:hover {\n      outline: 0;\n      border-style: outset;\n      transition: background 0.5s ease; }\n      header button:active:before, header button:focus:before, header button:hover:before {\n        opacity: 1; }\n    header button:after {\n      z-index: -1;\n      content: '';\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      background: var(--rebecca-purple);\n      left: 0;\n      top: 0;\n      border-radius: 50%;\n      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; }\n\n@keyframes glowing {\n  0% {\n    background-position: 0 0; }\n  50% {\n    background-position: 400% 0; }\n  100% {\n    background-position: 0 0; } }\n\nbody > main input {\n  animation: blackRainbow ease 3s;\n  vertical-align: middle;\n  line-height: 1rem;\n  padding: 0.375rem 0.5rem;\n  border: 1px solid var(--bobo-gray);\n  font-family: var(--font-secondary);\n  font-size: small; }\n\n@keyframes blackRainbow {\n  from {\n    color: var(--fire-engine-red);\n    opacity: 0; }\n  to {\n    color: inherit;\n    opacity: 1; } }\n  body > main input#image-url {\n    min-width: 40ch;\n    margin-right: 0.25rem; }\n\nbody > main label {\n  animation: blackRainbow ease 3s;\n  font-size: 1.125rem;\n  vertical-align: middle;\n  margin-right: 0.5rem;\n  font-weight: bolder;\n  line-height: 2rem; }\n\n@keyframes blackRainbow {\n  from {\n    color: var(--fire-engine-red);\n    opacity: 0; }\n  to {\n    color: inherit;\n    opacity: 1; } }\n  body > main label[for='grid-rows'], body > main label[for='grid-columns'] {\n    font-size: 1rem; }\n\nbody > main button {\n  font-size: small;\n  animation: blackRainbow ease 3s;\n  vertical-align: middle;\n  padding: 0.375rem 0.5rem;\n  border: 1px solid var(--bobo-gray);\n  font-family: var(--font-secondary);\n  color: var(--dimorphotheca-magenta);\n  line-height: 0.75rem;\n  background-color: white;\n  cursor: pointer; }\n\n@keyframes blackRainbow {\n  from {\n    color: var(--fire-engine-red);\n    opacity: 0; }\n  to {\n    color: inherit;\n    opacity: 1; } }\n  body > main button:not(:last-of-type) {\n    margin-right: 0.25rem; }\n  @media (min-width: 576px) {\n    body > main button {\n      line-height: 1rem; } }\n\nbody > main input[type='number'] {\n  margin-right: 1rem;\n  max-width: 5ch; }\n\nbody > main #grid {\n  position: relative;\n  animation: blackRainbow ease 3s;\n  margin: 0 auto;\n  width: 100%;\n  box-sizing: border-box;\n  border: 1px solid;\n  border-width: 1px;\n  border-image-slice: 1;\n  border-image-source: linear-gradient(180deg, dodgerblue, dodgerblue);\n  background-image: var(--image-url);\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center center;\n  height: 80vw;\n  max-height: 75vmin;\n  display: grid;\n  grid-template-columns: repeat(var(--grid-columns), 1fr); }\n\n@keyframes blackRainbow {\n  from {\n    color: var(--fire-engine-red);\n    opacity: 0; }\n  to {\n    color: inherit;\n    opacity: 1; } }\n  body > main #grid area {\n    cursor: move;\n    cursor: grab;\n    cursor: -moz-grab;\n    cursor: -webkit-grab;\n    font-size: 1rem;\n    color: white;\n    border: 1px solid rgba(30, 144, 255, 0.5);\n    background-image: var(--image-url);\n    background-clip: border-box;\n    border-image-slice: 1;\n    transition: backgroundColor 0.1s ease-out;\n    background-blend-mode: lighten; }\n    body > main #grid area:active {\n      cursor: grabbing;\n      cursor: -moz-grabbing;\n      cursor: -webkit-grabbing; }\n    body > main #grid area:hover {\n      background-color: rgba(30, 144, 255, 0.5); }\n  body > main #grid:after {\n    content: var(--timer);\n    color: var(--neon-pink);\n    font-size: 3rem;\n    font-family: var(--font-secondary);\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    pointer-events: none;\n    opacity: 0.7; }\n    @media (min-width: 768px) {\n      body > main #grid:after {\n        top: 1vmin;\n        opacity: 0.8; } }\n    @media (min-width: 992px) {\n      body > main #grid:after {\n        opacity: 0.9;\n        top: 2vmin; } }\n\nbody > main {\n  display: block;\n  width: 80%;\n  padding-left: 10%;\n  padding-right: 10%;\n  text-align: center;\n  min-height: 100vh;\n  padding-bottom: 5em; }\n  body > main h2 {\n    animation: blackRainbow ease 3s;\n    padding-top: 3rem; }\n\n@keyframes blackRainbow {\n  from {\n    color: var(--fire-engine-red);\n    opacity: 0; }\n  to {\n    color: inherit;\n    opacity: 1; } }\n  body > main section {\n    margin: auto;\n    text-align: center;\n    line-height: 2rem;\n    padding-bottom: 1rem; }\n    body > main section p {\n      animation: blackRainbow ease 3s;\n      margin: 0;\n      font-size: 1.125rem; }\n\n@keyframes blackRainbow {\n  from {\n    color: var(--fire-engine-red);\n    opacity: 0; }\n  to {\n    color: inherit;\n    opacity: 1; } }\n  body > main #start {\n    text-rendering: optimizeLegibility;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    text-shadow: 0 0 1px transparent;\n    user-select: none;\n    font-size: 1.5rem;\n    height: 3.5em;\n    width: 3.5em;\n    display: block;\n    font-family: var(--font-secondary);\n    margin: 2rem auto;\n    border: 2px solid transparent;\n    outline: none !important;\n    color: #fff;\n    background: var(--bluish-purple);\n    cursor: pointer;\n    position: relative;\n    border-radius: 50%;\n    transition: background 0.5s ease;\n    display: inline-block; }\n    body > main #start:before {\n      content: '';\n      background-color: var(--light-plum);\n      background: linear-gradient(45deg, var(--dodger-blue), var(--rebecca-purple), var(--dodger-blue), var(--dimorphotheca-magenta), var(--rebecca-purple), rgba(255, 0, 0, 0.5), var(--dodger-blue));\n      position: absolute;\n      top: -4px;\n      left: -4px;\n      background-size: 400%;\n      z-index: -1;\n      filter: blur(9px);\n      width: calc(100% + 11px);\n      height: calc(100% + 13px);\n      animation: glowing 20s linear infinite;\n      opacity: 0;\n      transition: opacity 0.2s ease-in-out;\n      border-radius: 50%; }\n    body > main #start:active, body > main #start:focus, body > main #start:hover {\n      outline: 0;\n      border-style: outset;\n      transition: background 0.5s ease; }\n      body > main #start:active:before, body > main #start:focus:before, body > main #start:hover:before {\n        opacity: 1; }\n    body > main #start:after {\n      z-index: -1;\n      content: '';\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      background: var(--rebecca-purple);\n      left: 0;\n      top: 0;\n      border-radius: 50%;\n      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; }\n\n@keyframes glowing {\n  0% {\n    background-position: 0 0; }\n  50% {\n    background-position: 400% 0; }\n  100% {\n    background-position: 0 0; } }\n\n#overlay {\n  position: absolute;\n  background-color: #4747eb;\n  font-family: var(--font-secondary);\n  animation: 3s 0.375s cubic-bezier(0.9, 0, 0.1, 1) forwards background_color; }\n\n@keyframes background_color {\n  33.33333% {\n    background-color: #eb47b4; }\n  66.66667% {\n    background-color: #ebb447; }\n  100% {\n    background-color: #47eb47; }\n  133.33333% {\n    background-color: #47b4eb; } }\n\n#overlay {\n  width: 50vmin;\n  height: 50vmin;\n  font-size: 25vmin;\n  text-shadow: 2.5vmin 2.5vmin 5vmin rgba(0, 0, 0, 0.125);\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n  color: white;\n  font-weight: 700; }\n  #overlay:before {\n    content: \"3\";\n    animation: 3s 0.5s forwards timer_countdown, 1s 0.375s 3 timer_beat; }\n\n@keyframes timer_beat {\n  40%, 80% {\n    transform: none; }\n  50% {\n    transform: scale(1.125); } }\n\n@keyframes timer_countdown {\n  0% {\n    content: \"3\"; }\n  33.33333% {\n    content: \"2\"; }\n  66.66667% {\n    content: \"1\"; }\n  100% {\n    content: 'go!'; } }\n  #overlay:after {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    z-index: -100;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.125);\n    animation: 3s 0.5s linear forwards timer_indicator; }\n\n@keyframes timer_indicator {\n  100% {\n    transform: translateY(100%); } }\n", "",{"version":3,"sources":["webpack://./styles/screen-sizes.scss","webpack://./styles/fonts.scss","webpack://./styles/mixins/improve-legibility.scss","webpack://./app.scss","webpack://./styles/colors.scss","webpack://./styles/type-scales.scss","webpack://./styles/body.scss","webpack://./greeter/greeter.scss","webpack://./styles/mixins/text-fade-in.scss","webpack://./styles/mixins/shinny-button.scss","webpack://./main/image/url-input.scss","webpack://./main/image/image-buttons.scss","webpack://./main/grid/grid.scss","webpack://./styles/mixins/grab-cursor.scss","webpack://./main/main.scss","webpack://./game/countdown.scss"],"names":[],"mappings":"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","sourcesContent":["/* screen sizes */\n$screen-sm-min: 576px; // Small tablets and large smartphones (landscape view)\n$screen-md-min: 768px; // Small tablets (portrait view)\n$screen-lg-min: 992px; // Tablets and small desktops\n$screen-xl-min: 1200px; // Large tablets and desktops\n\n// Small devices\n@mixin sm {\n  @media (min-width: #{$screen-sm-min}) {\n    @content;\n  }\n}\n\n// Medium devices\n@mixin md {\n  @media (min-width: #{$screen-md-min}) {\n    @content;\n  }\n}\n\n// Large devices\n@mixin lg {\n  @media (min-width: #{$screen-lg-min}) {\n    @content;\n  }\n}\n\n// Extra large devices\n@mixin xl {\n  @media (min-width: #{$screen-xl-min}) {\n    @content;\n  }\n}\n","@import 'mixins/improve-legibility';\n\n@mixin fonts {\n  --font-weight: 300;\n  --font-primary: 'Segoe UI Webfont', '-apple - system', 'Helvetica Neue',\n    'Lucida Grande', Roboto, Ebrima, 'Nirmala UI', Gadugi, 'Segoe Xbox Symbol',\n    'Segoe UI Symbol', 'Meiryo UI', 'Khmer UI', Tunga, 'Lao UI', Raavi,\n    'Iskoola Pota', Latha, Leelawadee, 'Microsoft YaHei UI',\n    'Microsoft JhengHei UI', 'Malgun Gothic', 'Estrangelo Edessa',\n    'Microsoft Himalaya', 'Microsoft New Tai Lue', 'Microsoft PhagsPa',\n    'Microsoft Tai Le', 'Microsoft Yi Baiti', 'Mongolian Baiti', 'MV Boli',\n    'Myanmar Text', 'Cambria Math';\n  --font-primary-color: var(--boulder);\n  --font-secondary: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo,\n    Courier, monospace;\n  --font-secondary-color: var(--black-eel);\n}\n\nh1,\nh2,\nh3,\nh4 {\n  color: var(--font-primary-color);\n  @include improve-legibility;\n}\n","@mixin improve-legibility {\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  text-shadow: 0 0 1px transparent;\n}\n","@import 'styles/normalize.css';\n@import 'styles/screen-sizes';\n\n@import 'styles/colors';\n@import 'styles/fonts';\n\n:root {\n  @include colors;\n  @include fonts;\n\n  --grid-rows: 2;\n  --grid-columns: 2;\n  --timer: '';\n  --win: '0';\n  --image-url: '';\n}\n\n@import 'styles/body';\n@import 'greeter/greeter';\n@import 'main/main';\n@import 'game/countdown';\n","@mixin colors {\n  --fire-engine-red: #ce2029;\n  --atlantis: #97cd2d;\n  --light-pea-green: #c4fe82;\n  --titanium-yellow: #eee600;\n  --golden-rod: #edda74;\n  --rebecca-purple: #663399;\n  --bluish-purple: #743ad5;\n  --dodger-blue: #1e90ff;\n  --dimorphotheca-magenta: #d53a9d;\n  --neon-pink: #f535aa;\n  --light-plum: #9d5783;\n  --bobo-gray: #b0b0b0;\n  --boulder: #777777;\n  --storm-dust: #646463;\n  --black-eel: #463e3f;\n}\n","// Extra large devices\n@mixin type-scales {\n  /* set base values */\n  --text-base-size: 1em;\n  --text-scale-ratio: 1.2;\n\n  /* type scale */\n  --text-xs: calc(1em / (var(--text-scale-ratio) * var(--text-scale-ratio)));\n  --text-sm: calc(1em / var(--text-scale-ratio));\n  --text-md: calc(1em * var(--text-scale-ratio));\n  --text-lg: calc(1em * var(--text-scale-ratio) * var(--text-scale-ratio));\n  --text-xl: calc(\n    1em * var(--text-scale-ratio) * var(--text-scale-ratio) *\n      var(--text-scale-ratio)\n  );\n  --text-xxl: calc(\n    1em * var(--text-scale-ratio) * var(--text-scale-ratio) *\n      var(--text-scale-ratio) * var(--text-scale-ratio)\n  );\n  --text-xxxl: calc(\n    1em * var(--text-scale-ratio) * var(--text-scale-ratio) *\n      var(--text-scale-ratio) * var(--text-scale-ratio) *\n      var(--text-scale-ratio)\n  );\n\n  @include sm {\n    --text-base-size: 1.2em;\n    --text-scale-ratio: 1.25;\n  }\n\n  @include md {\n    --text-base-size: 1.3em;\n    --text-scale-ratio: 1.27;\n  }\n\n  @include lg {\n    --text-base-size: 1.5em;\n    --text-scale-ratio: 1.28;\n  }\n\n  @include xl {\n    --text-base-size: 1.8em;\n    --text-scale-ratio: 1.3;\n  }\n}\n\nh1 {\n  font-size: var(--text-xxl);\n}\n\nh2 {\n  font-size: var(--text-xl);\n}\n\nh3 {\n  font-size: var(--text-lg);\n}\n\nh4 {\n  font-size: var(--text-md);\n}\n\nsmall {\n  font-size: var(--text-sm);\n}\n","@import 'type-scales';\n\nbody {\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n\n  font-size: var(--text-base-size);\n  font-family: var(--font-primary);\n  font-weight: var(--font-weight);\n  color: var(--font-secondary);\n\n  @include type-scales;\n}\n","@import '../styles/mixins/text-fade-in';\n@import '../styles/mixins/shinny-button';\n\nheader {\n  min-height: 100vh;\n  width: 100%;\n  margin-left: 10%;\n  margin-right: 10%;\n  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);\n  background-size: 400% 400%;\n  animation: gradient 15s ease infinite;\n  mix-blend-mode: overlay;\n\n  @keyframes gradient {\n    0% {\n      background-position: 0% 50%;\n    }\n    50% {\n      background-position: 100% 50%;\n    }\n    100% {\n      background-position: 0% 50%;\n    }\n  }\n\n  h1 {\n    @include hero-fade-in;\n    text-align: center;\n    padding-top: 4rem;\n    mix-blend-mode: color-dodge;\n  }\n\n  p {\n    @include hero-fade-in;\n    $transition-hover: opacity 0.3s ease-in;\n    max-width: 80%;\n    margin: auto;\n    mix-blend-mode: color-dodge;\n    text-align: center;\n    color: var(--storm-dust);\n    border: 1px solid;\n    border-width: 1px;\n    padding: 0.375rem 0.675rem 0.5rem;\n    border-image-slice: 1;\n    border-image-source: linear-gradient(\n      var(--dimorphotheca-magenta),\n      var(--rebecca-purple)\n    );\n    opacity: 0.6;\n    transition: $transition-hover;\n\n    &:hover {\n      opacity: 1;\n      transition: $transition-hover;\n    }\n\n    @include sm {\n      font-size: 80%;\n    }\n\n    @include lg {\n      max-width: $screen-sm-min;\n      margin: 1em auto 2em;\n      line-height: 1.375em;\n      font-size: 75%;\n    }\n\n    a {\n      text-decoration: none;\n      color: dodgerblue;\n      &:hover {\n        text-decoration: underline;\n      }\n    }\n  }\n\n  button {\n    @include shinny-button;\n  }\n}\n","@mixin text-fade-in {\n  animation: blackRainbow ease 3s;\n\n  @keyframes blackRainbow {\n    from {\n      color: var(--fire-engine-red);\n      opacity: 0;\n    }\n    to {\n      color: inherit;\n      opacity: 1;\n    }\n  }\n}\n\n@mixin hero-fade-in {\n  animation: slowlyAppear ease 5s;\n\n  @keyframes slowlyAppear {\n    from {\n      opacity: 0;\n    }\n    to {\n      opacity: 1;\n    }\n  }\n}\n","@mixin shinny-button {\n  @include improve-legibility;\n  user-select: none;\n  $button-color: var(--rebecca-purple);\n  font-size: 1.5rem;\n  $button-radius: 50%;\n  $button-size: 3.5em;\n  height: $button-size;\n  width: $button-size;\n  display: block;\n  font-family: var(--font-secondary);\n  margin: 2rem auto;\n  border: 2px solid transparent;\n  outline: none !important;\n  color: #fff;\n  background: var(--bluish-purple);\n  cursor: pointer;\n  position: relative;\n  border-radius: $button-radius;\n  transition: background 0.5s ease;\n\n  &:before {\n    content: '';\n    background-color: var(--light-plum);\n    background: linear-gradient(\n      45deg,\n      var(--dodger-blue),\n      var(--rebecca-purple),\n      var(--dodger-blue),\n      var(--dimorphotheca-magenta),\n      var(--rebecca-purple),\n      rgba(red, 0.5),\n      var(--dodger-blue)\n    );\n\n    position: absolute;\n    top: -4px;\n    left: -4px;\n    background-size: 400%;\n    z-index: -1;\n    filter: blur(9px);\n    width: calc(100% + 11px);\n    height: calc(100% + 13px);\n    animation: glowing 20s linear infinite;\n    opacity: 0;\n    transition: opacity 0.2s ease-in-out;\n    border-radius: $button-radius;\n  }\n\n  &:active,\n  &:focus,\n  &:hover {\n    outline: 0;\n    border-style: outset;\n    transition: background 0.5s ease;\n\n    &:before {\n      opacity: 1;\n    }\n  }\n\n  &:after {\n    z-index: -1;\n    content: '';\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    background: $button-color;\n    left: 0;\n    top: 0;\n    border-radius: $button-radius;\n    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n  }\n\n  @keyframes glowing {\n    0% {\n      background-position: 0 0;\n    }\n    50% {\n      background-position: 400% 0;\n    }\n    100% {\n      background-position: 0 0;\n    }\n  }\n}\n","body > main {\n  input {\n    @include text-fade-in;\n    vertical-align: middle;\n    line-height: 1rem;\n    padding: 0.375rem 0.5rem;\n    border: 1px solid var(--bobo-gray);\n    font-family: var(--font-secondary);\n    font-size: small;\n\n    &#image-url {\n      min-width: 40ch;\n      margin-right: 0.25rem;\n    }\n  }\n\n  label {\n    @include text-fade-in;\n    font-size: 1.125rem;\n    vertical-align: middle;\n    margin-right: 0.5rem;\n    font-weight: bolder;\n    line-height: 2rem;\n\n    &[for='grid-rows'],\n    &[for='grid-columns'] {\n      font-size: 1rem;\n    }\n  }\n}\n","body > main {\n  button {\n    font-size: small;\n\n    @include text-fade-in;\n    vertical-align: middle;\n\n    padding: 0.375rem 0.5rem;\n    border: 1px solid var(--bobo-gray);\n    font-family: var(--font-secondary);\n    color: var(--dimorphotheca-magenta);\n    line-height: 0.75rem;\n    background-color: white;\n    cursor: pointer;\n\n    &:not(:last-of-type) {\n      margin-right: 0.25rem;\n    }\n\n    @include sm {\n      line-height: 1rem;\n    }\n  }\n}\n","body > main {\n  input[type='number'] {\n    margin-right: 1rem;\n    max-width: 5ch;\n  }\n\n  #grid {\n    position: relative;\n    @include text-fade-in;\n    margin: 0 auto;\n    width: 100%;\n    box-sizing: border-box;\n\n    border: 1px solid;\n    border-width: 1px;\n    border-image-slice: 1;\n    border-image-source: linear-gradient(\n      180deg,\n      rgba(#1e90ff, 1),\n      rgba(#1e90ff, 1)\n    );\n\n    background-image: var(--image-url);\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: center center;\n    height: 80vw;\n    max-height: 75vmin;\n\n    display: grid;\n    grid-template-columns: repeat(var(--grid-columns), 1fr);\n\n    area {\n      @include grab-cursor;\n      font-size: 1rem;\n      color: white;\n      border: 1px solid rgba(#1e90ff, 0.5);\n      background-image: var(--image-url);\n      background-clip: border-box;\n      border-image-slice: 1;\n      transition: backgroundColor 0.1s ease-out;\n      background-blend-mode: lighten;\n\n      &:hover {\n        background-color: rgba(30, 144, 255, 0.5);\n      }\n    }\n\n    // This is the actual timer after the game starts\n    &:after {\n      content: var(--timer);\n      color: var(--neon-pink);\n      font-size: 3rem;\n      font-family: var(--font-secondary);\n\n      display: block;\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 100%;\n      pointer-events: none;\n      opacity: 0.7;\n\n      @include md {\n        top: 1vmin;\n        opacity: 0.8;\n      }\n\n      @include lg {\n        opacity: 0.9;\n        top: 2vmin;\n      }\n    }\n  }\n}\n","@mixin grab-cursor {\n  cursor: move;\n  cursor: grab;\n  cursor: -moz-grab;\n  cursor: -webkit-grab;\n\n  &:active {\n    cursor: grabbing;\n    cursor: -moz-grabbing;\n    cursor: -webkit-grabbing;\n  }\n}\n","@import '../styles/mixins/text-fade-in';\n@import '../styles/mixins/shinny-button';\n@import '../styles/mixins/grab-cursor';\n\n@import 'image/url-input.scss';\n@import 'image/image-buttons.scss';\n@import 'grid/grid.scss';\n\nbody > main {\n  display: block;\n  width: 80%;\n  padding-left: 10%;\n  padding-right: 10%;\n  text-align: center;\n  min-height: 100vh;\n  padding-bottom: 5em;\n\n  h2 {\n    @include text-fade-in;\n    padding-top: 3rem;\n  }\n\n  section {\n    margin: auto;\n    text-align: center;\n    line-height: 2rem;\n    padding-bottom: 1rem;\n\n    p {\n      @include text-fade-in;\n      margin: 0;\n      font-size: 1.125rem;\n    }\n  }\n\n  #start {\n    @include shinny-button;\n    display: inline-block;\n  }\n}\n","$timer_unit: 1s;\n$timer_length: 3;\n$timer_delay: 0.5s;\n\n$starting_hue: 240;\n$hue_increment: 120 / $timer_length;\n\n@mixin scale_timer($scale) {\n  $x: $scale;\n  width: 50vmin * $x;\n  height: 50vmin * $x;\n\n  font-size: 25vmin * $x;\n  text-shadow: (2.5vmin * $x) (2.5vmin * $x) (5vmin * $x) rgba(black, 0.125);\n}\n\n#overlay {\n  position: absolute;\n\n  background-color: hsl($starting_hue, 80, 60);\n  font-family: var(--font-secondary);\n  animation: ($timer_unit * $timer_length) ($timer_delay - $timer_unit * 0.125)\n    cubic-bezier(0.9, 0, 0.1, 1) forwards background_color;\n\n  @at-root {\n    @keyframes background_color {\n      @for $i from 1 through $timer_length + 1 {\n        #{100% / $timer_length * $i} {\n          $hue: $hue_increment * $i * 2;\n          background-color: hsl($starting_hue + $hue, 80, 60);\n        }\n      }\n    }\n  }\n}\n\n#overlay {\n  width: 50vmin;\n  height: 50vmin;\n\n  font-size: 25vmin;\n  text-shadow: (2.5vmin) (2.5vmin) (5vmin) rgba(black, 0.125);\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n  color: white;\n  font-weight: 700;\n\n  &:before {\n    content: '#{$timer_length}';\n\n    animation: ($timer_unit * $timer_length) $timer_delay forwards\n        timer_countdown,\n      $timer_unit ($timer_delay - $timer_unit * 0.125) $timer_length timer_beat;\n\n    @at-root {\n      @keyframes timer_beat {\n        40%,\n        80% {\n          transform: none;\n        }\n        50% {\n          transform: scale(1.125);\n        }\n      }\n    }\n\n    @at-root {\n      @keyframes timer_countdown {\n        @for $i from 0 through $timer_length {\n          #{100% / $timer_length * $i} {\n            $actual: -$i + $timer_length;\n            @if $actual == 0 {\n              content: 'go!';\n            } @else {\n              content: '#{$actual}';\n            }\n          }\n        }\n      }\n    }\n  }\n  &:after {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    z-index: -100;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(black, 0.125);\n    animation: ($timer_unit * $timer_length) $timer_delay linear forwards\n      timer_indicator;\n\n    @at-root {\n      @keyframes timer_indicator {\n        100% {\n          transform: translateY(100%);\n        }\n      }\n    }\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!./styles/normalize.css":
/*!*********************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./styles/normalize.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "../node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n     ========================================================================== */\n\n/**\n   * Remove the margin in all browsers.\n   */\n\nbody {\n  margin: 0;\n}\n\n/**\n   * Render the `main` element consistently in IE.\n   */\n\nmain {\n  display: block;\n}\n\n/**\n   * Correct the font size and margin on `h1` elements within `section` and\n   * `article` contexts in Chrome, Firefox, and Safari.\n   */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n     ========================================================================== */\n\n/**\n   * 1. Add the correct box sizing in Firefox.\n   * 2. Show the overflow in Edge and IE.\n   */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n   * 1. Correct the inheritance and scaling of font size in all browsers.\n   * 2. Correct the odd `em` font sizing in all browsers.\n   */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n     ========================================================================== */\n\n/**\n   * Remove the gray background on active links in IE 10.\n   */\n\na {\n  background-color: transparent;\n}\n\n/**\n   * 1. Remove the bottom border in Chrome 57-\n   * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n   */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n   * Add the correct font weight in Chrome, Edge, and Safari.\n   */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n   * 1. Correct the inheritance and scaling of font size in all browsers.\n   * 2. Correct the odd `em` font sizing in all browsers.\n   */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n   * Add the correct font size in all browsers.\n   */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n   * Prevent `sub` and `sup` elements from affecting the line height in\n   * all browsers.\n   */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n     ========================================================================== */\n\n/**\n   * Remove the border on images inside links in IE 10.\n   */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n     ========================================================================== */\n\n/**\n   * 1. Change the font styles in all browsers.\n   * 2. Remove the margin in Firefox and Safari.\n   */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n   * Show the overflow in IE.\n   * 1. Show the overflow in Edge.\n   */\n\nbutton,\ninput {\n  /* 1 */\n  overflow: visible;\n}\n\n/**\n   * Remove the inheritance of text transform in Edge, Firefox, and IE.\n   * 1. Remove the inheritance of text transform in Firefox.\n   */\n\nbutton,\nselect {\n  /* 1 */\n  text-transform: none;\n}\n\n/**\n   * Correct the inability to style clickable types in iOS and Safari.\n   */\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n  -webkit-appearance: button;\n}\n\n/**\n   * Remove the inner border and padding in Firefox.\n   */\n\nbutton::-moz-focus-inner,\n[type='button']::-moz-focus-inner,\n[type='reset']::-moz-focus-inner,\n[type='submit']::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n   * Restore the focus styles unset by the previous rule.\n   */\n\nbutton:-moz-focusring,\n[type='button']:-moz-focusring,\n[type='reset']:-moz-focusring,\n[type='submit']:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n   * Correct the padding in Firefox.\n   */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n   * 1. Correct the text wrapping in Edge and IE.\n   * 2. Correct the color inheritance from `fieldset` elements in IE.\n   * 3. Remove the padding so developers are not caught out when they zero out\n   *    `fieldset` elements in all browsers.\n   */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n   * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n   */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n   * Remove the default vertical scrollbar in IE 10+.\n   */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n   * 1. Add the correct box sizing in IE 10.\n   * 2. Remove the padding in IE 10.\n   */\n\n[type='checkbox'],\n[type='radio'] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n   * Correct the cursor style of increment and decrement buttons in Chrome.\n   */\n\n[type='number']::-webkit-inner-spin-button,\n[type='number']::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n   * 1. Correct the odd appearance in Chrome and Safari.\n   * 2. Correct the outline style in Safari.\n   */\n\n[type='search'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n   * Remove the inner padding in Chrome and Safari on macOS.\n   */\n\n[type='search']::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n   * 1. Correct the inability to style clickable types in iOS and Safari.\n   * 2. Change font properties to `inherit` in Safari.\n   */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n     ========================================================================== */\n\n/*\n   * Add the correct display in Edge, IE 10+, and Firefox.\n   */\n\ndetails {\n  display: block;\n}\n\n/*\n   * Add the correct display in all browsers.\n   */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n     ========================================================================== */\n\n/**\n   * Add the correct display in IE 10+.\n   */\n\ntemplate {\n  display: none;\n}\n\n/**\n   * Add the correct display in IE 10.\n   */\n\n[hidden] {\n  display: none;\n}\n", "",{"version":3,"sources":["webpack://./styles/normalize.css"],"names":[],"mappings":"AAAA,2EAA2E;;AAE3E;+EAC+E;;AAE/E;;;EAGE;;AAEF;EACE,iBAAiB,EAAE,MAAM;EACzB,8BAA8B,EAAE,MAAM;AACxC;;AAEA;iFACiF;;AAEjF;;IAEI;;AAEJ;EACE,SAAS;AACX;;AAEA;;IAEI;;AAEJ;EACE,cAAc;AAChB;;AAEA;;;IAGI;;AAEJ;EACE,cAAc;EACd,gBAAgB;AAClB;;AAEA;iFACiF;;AAEjF;;;IAGI;;AAEJ;EACE,uBAAuB,EAAE,MAAM;EAC/B,SAAS,EAAE,MAAM;EACjB,iBAAiB,EAAE,MAAM;AAC3B;;AAEA;;;IAGI;;AAEJ;EACE,iCAAiC,EAAE,MAAM;EACzC,cAAc,EAAE,MAAM;AACxB;;AAEA;iFACiF;;AAEjF;;IAEI;;AAEJ;EACE,6BAA6B;AAC/B;;AAEA;;;IAGI;;AAEJ;EACE,mBAAmB,EAAE,MAAM;EAC3B,0BAA0B,EAAE,MAAM;EAClC,iCAAiC,EAAE,MAAM;AAC3C;;AAEA;;IAEI;;AAEJ;;EAEE,mBAAmB;AACrB;;AAEA;;;IAGI;;AAEJ;;;EAGE,iCAAiC,EAAE,MAAM;EACzC,cAAc,EAAE,MAAM;AACxB;;AAEA;;IAEI;;AAEJ;EACE,cAAc;AAChB;;AAEA;;;IAGI;;AAEJ;;EAEE,cAAc;EACd,cAAc;EACd,kBAAkB;EAClB,wBAAwB;AAC1B;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,WAAW;AACb;;AAEA;iFACiF;;AAEjF;;IAEI;;AAEJ;EACE,kBAAkB;AACpB;;AAEA;iFACiF;;AAEjF;;;IAGI;;AAEJ;;;;;EAKE,oBAAoB,EAAE,MAAM;EAC5B,eAAe,EAAE,MAAM;EACvB,iBAAiB,EAAE,MAAM;EACzB,SAAS,EAAE,MAAM;AACnB;;AAEA;;;IAGI;;AAEJ;;EAEE,MAAM;EACN,iBAAiB;AACnB;;AAEA;;;IAGI;;AAEJ;;EAEE,MAAM;EACN,oBAAoB;AACtB;;AAEA;;IAEI;;AAEJ;;;;EAIE,0BAA0B;AAC5B;;AAEA;;IAEI;;AAEJ;;;;EAIE,kBAAkB;EAClB,UAAU;AACZ;;AAEA;;IAEI;;AAEJ;;;;EAIE,8BAA8B;AAChC;;AAEA;;IAEI;;AAEJ;EACE,8BAA8B;AAChC;;AAEA;;;;;IAKI;;AAEJ;EACE,sBAAsB,EAAE,MAAM;EAC9B,cAAc,EAAE,MAAM;EACtB,cAAc,EAAE,MAAM;EACtB,eAAe,EAAE,MAAM;EACvB,UAAU,EAAE,MAAM;EAClB,mBAAmB,EAAE,MAAM;AAC7B;;AAEA;;IAEI;;AAEJ;EACE,wBAAwB;AAC1B;;AAEA;;IAEI;;AAEJ;EACE,cAAc;AAChB;;AAEA;;;IAGI;;AAEJ;;EAEE,sBAAsB,EAAE,MAAM;EAC9B,UAAU,EAAE,MAAM;AACpB;;AAEA;;IAEI;;AAEJ;;EAEE,YAAY;AACd;;AAEA;;;IAGI;;AAEJ;EACE,6BAA6B,EAAE,MAAM;EACrC,oBAAoB,EAAE,MAAM;AAC9B;;AAEA;;IAEI;;AAEJ;EACE,wBAAwB;AAC1B;;AAEA;;;IAGI;;AAEJ;EACE,0BAA0B,EAAE,MAAM;EAClC,aAAa,EAAE,MAAM;AACvB;;AAEA;iFACiF;;AAEjF;;IAEI;;AAEJ;EACE,cAAc;AAChB;;AAEA;;IAEI;;AAEJ;EACE,kBAAkB;AACpB;;AAEA;iFACiF;;AAEjF;;IAEI;;AAEJ;EACE,aAAa;AACf;;AAEA;;IAEI;;AAEJ;EACE,aAAa;AACf","sourcesContent":["/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n     ========================================================================== */\n\n/**\n   * Remove the margin in all browsers.\n   */\n\nbody {\n  margin: 0;\n}\n\n/**\n   * Render the `main` element consistently in IE.\n   */\n\nmain {\n  display: block;\n}\n\n/**\n   * Correct the font size and margin on `h1` elements within `section` and\n   * `article` contexts in Chrome, Firefox, and Safari.\n   */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n     ========================================================================== */\n\n/**\n   * 1. Add the correct box sizing in Firefox.\n   * 2. Show the overflow in Edge and IE.\n   */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n   * 1. Correct the inheritance and scaling of font size in all browsers.\n   * 2. Correct the odd `em` font sizing in all browsers.\n   */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n     ========================================================================== */\n\n/**\n   * Remove the gray background on active links in IE 10.\n   */\n\na {\n  background-color: transparent;\n}\n\n/**\n   * 1. Remove the bottom border in Chrome 57-\n   * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n   */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n   * Add the correct font weight in Chrome, Edge, and Safari.\n   */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n   * 1. Correct the inheritance and scaling of font size in all browsers.\n   * 2. Correct the odd `em` font sizing in all browsers.\n   */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n   * Add the correct font size in all browsers.\n   */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n   * Prevent `sub` and `sup` elements from affecting the line height in\n   * all browsers.\n   */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n     ========================================================================== */\n\n/**\n   * Remove the border on images inside links in IE 10.\n   */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n     ========================================================================== */\n\n/**\n   * 1. Change the font styles in all browsers.\n   * 2. Remove the margin in Firefox and Safari.\n   */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n   * Show the overflow in IE.\n   * 1. Show the overflow in Edge.\n   */\n\nbutton,\ninput {\n  /* 1 */\n  overflow: visible;\n}\n\n/**\n   * Remove the inheritance of text transform in Edge, Firefox, and IE.\n   * 1. Remove the inheritance of text transform in Firefox.\n   */\n\nbutton,\nselect {\n  /* 1 */\n  text-transform: none;\n}\n\n/**\n   * Correct the inability to style clickable types in iOS and Safari.\n   */\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n  -webkit-appearance: button;\n}\n\n/**\n   * Remove the inner border and padding in Firefox.\n   */\n\nbutton::-moz-focus-inner,\n[type='button']::-moz-focus-inner,\n[type='reset']::-moz-focus-inner,\n[type='submit']::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n   * Restore the focus styles unset by the previous rule.\n   */\n\nbutton:-moz-focusring,\n[type='button']:-moz-focusring,\n[type='reset']:-moz-focusring,\n[type='submit']:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n   * Correct the padding in Firefox.\n   */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n   * 1. Correct the text wrapping in Edge and IE.\n   * 2. Correct the color inheritance from `fieldset` elements in IE.\n   * 3. Remove the padding so developers are not caught out when they zero out\n   *    `fieldset` elements in all browsers.\n   */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n   * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n   */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n   * Remove the default vertical scrollbar in IE 10+.\n   */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n   * 1. Add the correct box sizing in IE 10.\n   * 2. Remove the padding in IE 10.\n   */\n\n[type='checkbox'],\n[type='radio'] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n   * Correct the cursor style of increment and decrement buttons in Chrome.\n   */\n\n[type='number']::-webkit-inner-spin-button,\n[type='number']::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n   * 1. Correct the odd appearance in Chrome and Safari.\n   * 2. Correct the outline style in Safari.\n   */\n\n[type='search'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n   * Remove the inner padding in Chrome and Safari on macOS.\n   */\n\n[type='search']::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n   * 1. Correct the inability to style clickable types in iOS and Safari.\n   * 2. Change font properties to `inherit` in Safari.\n   */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n     ========================================================================== */\n\n/*\n   * Add the correct display in Edge, IE 10+, and Firefox.\n   */\n\ndetails {\n  display: block;\n}\n\n/*\n   * Add the correct display in all browsers.\n   */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n     ========================================================================== */\n\n/**\n   * Add the correct display in IE 10+.\n   */\n\ntemplate {\n  display: none;\n}\n\n/**\n   * Add the correct display in IE 10.\n   */\n\n[hidden] {\n  display: none;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/api.js":
/*!******************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!*************************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \*************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./app.scss":
/*!******************!*\
  !*** ./app.scss ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "../node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "../node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "../node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "../node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_app_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./app.scss */ "../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./app.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_app_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_app_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_app_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_app_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
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
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!*********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \*********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
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
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!***********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \***********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!***********************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \***********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!****************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \****************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!**********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./common.ts":
/*!*******************!*\
  !*** ./common.ts ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "scrollTo": () => (/* binding */ scrollTo),
/* harmony export */   "getImage": () => (/* binding */ getImage),
/* harmony export */   "setImage": () => (/* binding */ setImage),
/* harmony export */   "getColumns": () => (/* binding */ getColumns),
/* harmony export */   "setColumns": () => (/* binding */ setColumns),
/* harmony export */   "getRows": () => (/* binding */ getRows),
/* harmony export */   "setRows": () => (/* binding */ setRows),
/* harmony export */   "getWin": () => (/* binding */ getWin),
/* harmony export */   "setWin": () => (/* binding */ setWin),
/* harmony export */   "getTimer": () => (/* binding */ getTimer),
/* harmony export */   "setTimer": () => (/* binding */ setTimer)
/* harmony export */ });
function scrollTo(element) {
    window.scroll({
        behavior: 'smooth',
        left: 0,
        top: element.offsetTop,
    });
}
function getImage() {
    const cssValue = getComputedStyle(document.documentElement).getPropertyValue('--image-url');
    const removeUrlEncapsulation = cssValue
        .substring(4, cssValue.length - 1)
        .replace(/["]+/g, '');
    return removeUrlEncapsulation;
}
function setImage(url) {
    document.documentElement.style.setProperty('--image-url', `url("${url}")`);
}
function getColumns() {
    const cssValue = getComputedStyle(document.documentElement).getPropertyValue('--grid-columns');
    return cssValue;
}
function setColumns(size) {
    document.documentElement.style.setProperty('--grid-columns', String(size));
}
function getRows() {
    const cssValue = getComputedStyle(document.documentElement).getPropertyValue('--grid-rows');
    return cssValue;
}
function setRows(size) {
    document.documentElement.style.setProperty('--grid-rows', String(size));
}
function getWin() {
    const cssValue = getComputedStyle(document.documentElement).getPropertyValue('--win');
    return cssValue;
}
function setWin(size) {
    document.documentElement.style.setProperty('--win', String(size));
}
function getTimer() {
    const cssValue = getComputedStyle(document.documentElement).getPropertyValue('--timer');
    return cssValue;
}
function setTimer(size) {
    document.documentElement.style.setProperty('--timer', size + 's');
}


/***/ }),

/***/ "./game/game.ts":
/*!**********************!*\
  !*** ./game/game.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Game)
/* harmony export */ });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common */ "./common.ts");
/* harmony import */ var _main_grid_grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../main/grid/grid */ "./main/grid/grid.ts");
/* harmony import */ var _timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./timer */ "./game/timer.ts");



class Game {
    constructor() {
        this.loadedTimer = null;
        this.loadedPinger = null;
        this.timer = new _timer__WEBPACK_IMPORTED_MODULE_2__["default"]();
    }
    stop(canvas) {
        const overlayDom = document.getElementById('overlay');
        if (overlayDom)
            canvas.removeChild(overlayDom);
        if (this.loadedTimer !== null)
            clearTimeout(this.loadedTimer);
        if (this.loadedPinger !== null)
            clearInterval(this.loadedPinger);
        (0,_common__WEBPACK_IMPORTED_MODULE_0__.setTimer)(0);
    }
    start(canvas) {
        this.stop(canvas);
        _main_grid_grid__WEBPACK_IMPORTED_MODULE_1__["default"].shuffle(canvas);
        (0,_common__WEBPACK_IMPORTED_MODULE_0__.setWin)(0);
        (0,_common__WEBPACK_IMPORTED_MODULE_0__.setTimer)(0);
        const overlay = document.createElement('div');
        overlay.id = 'overlay';
        canvas.appendChild(overlay);
        this.loadedTimer = setTimeout((x) => {
            const overlayDom = document.getElementById('overlay');
            if (overlayDom)
                canvas.removeChild(overlayDom);
            this.timer.reset();
            this.timer.start();
            this.loadedPinger = setInterval(() => {
                const win = (0,_common__WEBPACK_IMPORTED_MODULE_0__.getWin)() === '1';
                if (win) {
                    clearInterval(this.loadedPinger);
                    setTimeout(() => {
                        alert(`you win! You completed the challenge!`);
                    }, 300);
                    return;
                }
                const time = Math.round(this.timer.getTime() / 1000);
                document.documentElement.style.setProperty('--timer', `'${time}s'`);
                document.documentElement.style.setProperty('--win', `'0'`);
            }, 100);
            this.loadedTimer = null;
        }, 4000);
    }
    checkWin() {
        let win = true;
        const areas = document.querySelectorAll('area');
        areas.forEach((area) => {
            const originalOrder = area.getAttribute('data-order');
            const actualOrder = area.style.order;
            if (actualOrder !== originalOrder)
                win = false;
        });
        if (win)
            (0,_common__WEBPACK_IMPORTED_MODULE_0__.setWin)(1);
    }
}


/***/ }),

/***/ "./game/timer.ts":
/*!***********************!*\
  !*** ./game/timer.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Timer)
/* harmony export */ });
class Timer {
    constructor() {
        this.isRunning = false;
        this.startTime = 0;
        this.overallTime = 0;
    }
    _getTimeElapsedSinceLastStart() {
        if (!this.startTime)
            return 0;
        return Date.now() - this.startTime;
    }
    getTime() {
        if (!this.startTime)
            return 0;
        if (this.isRunning)
            return this.overallTime + this._getTimeElapsedSinceLastStart();
        return this.overallTime;
    }
    reset() {
        this.overallTime = 0;
        if (this.isRunning) {
            this.startTime = Date.now();
            return;
        }
        this.startTime = 0;
    }
    start() {
        if (this.isRunning)
            return console.error('Timer is already running');
        this.isRunning = true;
        this.startTime = Date.now();
    }
    stop() {
        if (!this.isRunning)
            return console.error('Timer is already stopped');
        this.isRunning = false;
        this.overallTime = this.overallTime + this._getTimeElapsedSinceLastStart();
    }
}


/***/ }),

/***/ "./greeter/greeter.ts":
/*!****************************!*\
  !*** ./greeter/greeter.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Greeter)
/* harmony export */ });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common */ "./common.ts");

class Greeter {
    constructor(greeting, author) {
        this.greeting = greeting;
        this.author = author;
    }
    start(container) {
        const header = document.createElement('header');
        const h1 = document.createElement('h1');
        h1.textContent = `${this.greeting}!`;
        const subtitle = document.createElement('p');
        subtitle.innerHTML = `made with love by <em><a href="https://about.me/bpalma" target="_blank">${this.author}</a></em>`;
        const callToAction = document.createElement('button');
        callToAction.textContent = `Play`;
        callToAction.type = 'button';
        callToAction.addEventListener('click', () => {
            const anchor = document.querySelector('main>h2:first-of-type');
            if (anchor)
                setTimeout(() => (0,_common__WEBPACK_IMPORTED_MODULE_0__.scrollTo)(anchor), 150);
        });
        header.appendChild(h1);
        header.appendChild(subtitle);
        header.appendChild(callToAction);
        container.appendChild(header);
        callToAction.focus();
    }
}


/***/ }),

/***/ "./main/grid/columns-input.ts":
/*!************************************!*\
  !*** ./main/grid/columns-input.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ColumnsInput)
/* harmony export */ });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common */ "./common.ts");

class ColumnsInput {
    constructor() { }
    start(container, main) {
        const label = document.createElement('label');
        label.textContent = `Columns`;
        label.setAttribute('for', 'grid-columns');
        const input = document.createElement('input');
        input.id = 'grid-columns';
        input.type = 'number';
        input.min = '2';
        input.max = '12';
        input.value = (0,_common__WEBPACK_IMPORTED_MODULE_0__.getColumns)();
        input.addEventListener('change', (e) => {
            (0,_common__WEBPACK_IMPORTED_MODULE_0__.setColumns)(Number(input.value));
            main.grid.start(main);
        });
        container.appendChild(label);
        container.appendChild(input);
    }
}


/***/ }),

/***/ "./main/grid/grid.ts":
/*!***************************!*\
  !*** ./main/grid/grid.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Grid)
/* harmony export */ });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common */ "./common.ts");

class Grid {
    constructor() { }
    start(main) {
        const columns = (0,_common__WEBPACK_IMPORTED_MODULE_0__.getColumns)();
        const rows = (0,_common__WEBPACK_IMPORTED_MODULE_0__.getRows)();
        const gridSize = Number(columns) * Number(rows);
        Grid.clean(main.map, main);
        for (let i = 0; i < gridSize; i++) {
            const area = document.createElement('area');
            area.setAttribute('data-order', String(i));
            area.style.order = String(i);
            area.draggable = true;
            area.addEventListener('dragstart', (e) => Grid.onDragStart(e));
            area.addEventListener('dragover', (e) => Grid.onDragOver(e));
            area.addEventListener('dragleave', (e) => Grid.onDragLeave(e));
            area.addEventListener('drop', (e) => Grid.onDragDrop(e, main));
            const originalOrder = Number(area.dataset.order);
            const initialRow = Math.ceil((originalOrder + 1) / Number(columns));
            const initialColumn = (originalOrder % Number(columns)) + 1;
            // Getting the height of the container as the image is set to background-position: cover;
            // We need to calculate the position of the background of each square in the grid
            const width = main.map.clientWidth;
            const height = main.map.clientHeight;
            // Loading a temp image to get the size of the image once loaded
            const tempImage = new Image();
            tempImage.src = (0,_common__WEBPACK_IMPORTED_MODULE_0__.getImage)();
            const imageHeight = tempImage.height;
            const imageWidth = tempImage.width;
            // Adjusting if the container or the image are in landscape or portrait mode
            const imageRatio = imageWidth / imageHeight;
            const containerRatio = width / height;
            let realWidth;
            let realHeight;
            if (containerRatio > imageRatio) {
                realWidth = width;
                realHeight = width / imageRatio;
            }
            else {
                realWidth = height * imageRatio;
                realHeight = height;
            }
            // Adjusting for outer borders 1px each
            realWidth += 2;
            realHeight += 2;
            const realBackgroundSize = `${realWidth}px ${realHeight}px`;
            area.style.backgroundSize = realBackgroundSize;
            const areaPositionX = width / Number(columns);
            const areaPositionY = height / Number(rows);
            const shrinkWidth = (realWidth - width) / 2;
            const shrinkHeight = (realHeight - height) / 2;
            // Calculating the correspondent position X and Y of the background
            // based on the size of the square, the image and the canvas
            area.style.backgroundPositionX =
                -areaPositionX * (initialColumn - 1) - shrinkWidth - 1 + 'px';
            area.style.backgroundPositionY =
                -areaPositionY * (initialRow - 1) - shrinkHeight - 1 + 'px';
            main.map.appendChild(area);
        }
    }
    static clean(container, main) {
        const oldAreas = document.querySelectorAll('area');
        for (const area of oldAreas) {
            area.removeEventListener('dragstart', (e) => Grid.onDragStart(e));
            area.removeEventListener('dragover', (e) => Grid.onDragOver(e));
            area.removeEventListener('dragleave', (e) => Grid.onDragLeave(e));
            area.removeEventListener('drop', (e) => Grid.onDragDrop(e, main));
            container.removeChild(area);
        }
    }
    static shuffle(container) {
        const size = container.childElementCount;
        const areas = container.children;
        // We create an array from 1 to $size
        // We put each element in the array in an object, and give it a random sort key
        // We sort using the random key
        const shuffled = [...Array(size).keys()]
            .map((value) => ({ value, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .map(({ value }) => value);
        // change the order in the grid
        const oldAreasOrder = [];
        const newAreasOrder = [];
        for (const area of areas) {
            const newOrder = shuffled[0];
            oldAreasOrder.push(area.style.order);
            newAreasOrder.push(String(newOrder));
            area.style.order = String(newOrder);
            shuffled.shift();
        }
        // hmm nasty, shuffle again
        let sameOrder = oldAreasOrder === newAreasOrder;
        if (sameOrder)
            this.shuffle(container);
    }
    static onDragDrop(event, main) {
        var _a;
        if (!event.dataTransfer)
            return;
        const target = event.target;
        const targetOrder = target.style.order;
        const sourceOrder = (_a = event.dataTransfer) === null || _a === void 0 ? void 0 : _a.getData('text');
        const sources = Array.from(document.querySelectorAll('[data-order]'));
        const source = sources.find((x) => x.style.order === sourceOrder);
        if (source) {
            source.style.order = targetOrder;
            target.style.removeProperty('background-color');
        }
        target.style.order = sourceOrder;
        target.style.removeProperty('background-color');
        main.game.checkWin();
    }
    static onDragLeave(event) {
        const target = event.target;
        target.style.removeProperty('background-color');
    }
    static onDragOver(event) {
        event.preventDefault();
        const target = event.target;
        target.style.backgroundColor = 'rgba(30, 144, 255, 0.5)';
    }
    static onDragStart(event) {
        var _a, _b;
        const target = event.target;
        const order = ((_a = target.style) === null || _a === void 0 ? void 0 : _a.order) || '';
        (_b = event.dataTransfer) === null || _b === void 0 ? void 0 : _b.setData('text/plain', order);
    }
}


/***/ }),

/***/ "./main/grid/rows-input.ts":
/*!*********************************!*\
  !*** ./main/grid/rows-input.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RowsInput)
/* harmony export */ });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common */ "./common.ts");

class RowsInput {
    constructor() { }
    start(container, main) {
        const label = document.createElement('label');
        label.textContent = `Rows`;
        label.setAttribute('for', 'grid-rows');
        const input = document.createElement('input');
        input.id = 'grid-rows';
        input.type = 'number';
        input.min = '2';
        input.max = '12';
        input.value = (0,_common__WEBPACK_IMPORTED_MODULE_0__.getRows)();
        input.addEventListener('change', (e) => {
            (0,_common__WEBPACK_IMPORTED_MODULE_0__.setRows)(Number(input.value));
            main.grid.start(main);
        });
        container.appendChild(label);
        container.appendChild(input);
    }
}


/***/ }),

/***/ "./main/image/load-button.ts":
/*!***********************************!*\
  !*** ./main/image/load-button.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ImageLoadButton)
/* harmony export */ });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common */ "./common.ts");

class ImageLoadButton {
    constructor() { }
    start(container, main) {
        const button = document.createElement('button');
        button.id = 'set-url';
        button.type = 'button';
        button.textContent = '↵ load image';
        button.addEventListener('click', () => {
            (0,_common__WEBPACK_IMPORTED_MODULE_0__.setImage)(main.imageInput.input.value);
            (0,_common__WEBPACK_IMPORTED_MODULE_0__.setTimer)(0);
            main.game.stop(main.map);
            const tempImage = new Image();
            tempImage.addEventListener('load', () => main.grid.start(main));
            tempImage.src = (0,_common__WEBPACK_IMPORTED_MODULE_0__.getImage)();
        });
        container.appendChild(button);
    }
}


/***/ }),

/***/ "./main/image/random-button.ts":
/*!*************************************!*\
  !*** ./main/image/random-button.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ImageRandomButton)
/* harmony export */ });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common */ "./common.ts");

class ImageRandomButton {
    constructor() { }
    start(container, main) {
        const button = document.createElement('button');
        button.id = 'reset-url';
        button.type = 'button';
        button.textContent = '🐱 random';
        button.addEventListener('click', () => {
            main.game.stop(main.map);
            const randomHeight = Math.floor(Math.random() * 799) + 401;
            const randomWidth = Math.floor(Math.random() * 799) + 401;
            const imageUrl = (0,_common__WEBPACK_IMPORTED_MODULE_0__.getImage)();
            const removeDefaultValues = imageUrl.split('/').slice(0, -2).join('/');
            const newUrl = `${removeDefaultValues}/${randomWidth}/${randomHeight}`;
            main.imageInput.input.value = newUrl;
            (0,_common__WEBPACK_IMPORTED_MODULE_0__.setImage)(newUrl);
            const tempImage = new Image();
            tempImage.addEventListener('load', () => main.grid.start(main));
            tempImage.src = (0,_common__WEBPACK_IMPORTED_MODULE_0__.getImage)();
        });
        container.appendChild(button);
    }
}


/***/ }),

/***/ "./main/image/url-input.ts":
/*!*********************************!*\
  !*** ./main/image/url-input.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UrlInput)
/* harmony export */ });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common */ "./common.ts");

class UrlInput {
    constructor() {
        this.input = document.createElement('input');
    }
    start(container) {
        const image = (0,_common__WEBPACK_IMPORTED_MODULE_0__.getImage)();
        const label = document.createElement('label');
        label.textContent = `Choose an image`;
        label.setAttribute('for', 'image-url');
        container.appendChild(label);
        const input = this.input;
        input.id = 'image-url';
        input.type = 'url';
        input.setAttribute('placeholder', image);
        input.value = image;
        input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter')
                (0,_common__WEBPACK_IMPORTED_MODULE_0__.setImage)(input.value);
        });
        container.appendChild(input);
    }
}


/***/ }),

/***/ "./main/main.ts":
/*!**********************!*\
  !*** ./main/main.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Main)
/* harmony export */ });
/* harmony import */ var _game_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../game/game */ "./game/game.ts");
/* harmony import */ var _grid_columns_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./grid/columns-input */ "./main/grid/columns-input.ts");
/* harmony import */ var _grid_grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./grid/grid */ "./main/grid/grid.ts");
/* harmony import */ var _grid_rows_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./grid/rows-input */ "./main/grid/rows-input.ts");
/* harmony import */ var _image_load_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./image/load-button */ "./main/image/load-button.ts");
/* harmony import */ var _image_random_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./image/random-button */ "./main/image/random-button.ts");
/* harmony import */ var _image_url_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./image/url-input */ "./main/image/url-input.ts");
/* harmony import */ var _start_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./start-button */ "./main/start-button.ts");








class Main {
    constructor() {
        this.imageInput = new _image_url_input__WEBPACK_IMPORTED_MODULE_6__["default"]();
        this.imageLoadButton = new _image_load_button__WEBPACK_IMPORTED_MODULE_4__["default"]();
        this.imageRandomButton = new _image_random_button__WEBPACK_IMPORTED_MODULE_5__["default"]();
        this.columnsInput = new _grid_columns_input__WEBPACK_IMPORTED_MODULE_1__["default"]();
        this.rowsInput = new _grid_rows_input__WEBPACK_IMPORTED_MODULE_3__["default"]();
        this.grid = new _grid_grid__WEBPACK_IMPORTED_MODULE_2__["default"]();
        this.game = new _game_game__WEBPACK_IMPORTED_MODULE_0__["default"]();
        this.startButton = new _start_button__WEBPACK_IMPORTED_MODULE_7__["default"]();
        this.map = document.createElement('map');
    }
    start(container) {
        const main = document.createElement('main');
        const title = document.createElement('h2');
        title.textContent = 'Settings';
        main.appendChild(title);
        // Image Settings section
        const imageSection = document.createElement('section');
        this.imageInput.start(imageSection);
        this.imageLoadButton.start(imageSection, this);
        this.imageRandomButton.start(imageSection, this);
        main.appendChild(imageSection);
        // Grid Settings section
        const gridSection = document.createElement('section');
        const subtitle = document.createElement('p');
        subtitle.textContent = `Setup the Grid`;
        gridSection.appendChild(subtitle);
        this.columnsInput.start(gridSection, this);
        this.rowsInput.start(gridSection, this);
        main.appendChild(gridSection);
        // Other stuff
        this.map.id = 'grid';
        window.addEventListener('load', () => this.grid.start(this));
        main.appendChild(this.map);
        this.startButton.start(main, this);
        container.appendChild(main);
    }
}


/***/ }),

/***/ "./main/start-button.ts":
/*!******************************!*\
  !*** ./main/start-button.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ StartButton)
/* harmony export */ });
class StartButton {
    constructor() { }
    start(container, main) {
        const button = document.createElement('button');
        button.textContent = `Start`;
        button.type = 'button';
        button.id = 'start';
        button.addEventListener('click', (e) => main.game.start(main.map));
        container.appendChild(button);
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!****************!*\
  !*** ./app.ts ***!
  \****************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.scss */ "./app.scss");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common */ "./common.ts");
/* harmony import */ var _greeter_greeter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./greeter/greeter */ "./greeter/greeter.ts");
/* harmony import */ var _main_main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main/main */ "./main/main.ts");




const greeter = new _greeter_greeter__WEBPACK_IMPORTED_MODULE_2__["default"]('Jigsaw puzzle', '@bpalma');
const image = 'https://placekitten.com/g/300/400';
const rows = 2;
const columns = 2;
(0,_common__WEBPACK_IMPORTED_MODULE_1__.setRows)(rows);
(0,_common__WEBPACK_IMPORTED_MODULE_1__.setColumns)(columns);
(0,_common__WEBPACK_IMPORTED_MODULE_1__.setImage)(image);
const main = new _main_main__WEBPACK_IMPORTED_MODULE_3__["default"]();
const app = document.getElementById('app');
if (app) {
    greeter.start(app);
    main.start(app);
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyaXB0cy93YWdhd2luLjkwMzQxOGYyLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN1QjtBQUNoSCw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLDBCQUEwQixpR0FBaUM7QUFDM0Q7QUFDQSxpRkFBaUYscUNBQXFDLHVDQUF1Qyx3Q0FBd0MsdUNBQXVDLHVDQUF1QyxXQUFXLCtCQUErQix3QkFBd0IsK0JBQStCLCtCQUErQiwwQkFBMEIsOEJBQThCLDZCQUE2QiwyQkFBMkIscUNBQXFDLHlCQUF5QiwwQkFBMEIseUJBQXlCLHVCQUF1QiwwQkFBMEIseUJBQXlCLHVCQUF1QixtaUJBQW1pQix5Q0FBeUMsb0dBQW9HLDZDQUE2QyxtQkFBbUIsc0JBQXNCLGdCQUFnQixlQUFlLHNCQUFzQixRQUFRLGlDQUFpQyxRQUFRLGdDQUFnQyxRQUFRLGdDQUFnQyxRQUFRLGdDQUFnQyxXQUFXLGdDQUFnQyxVQUFVLGtCQUFrQixzQkFBc0Isd0JBQXdCLHFDQUFxQyxxQ0FBcUMsb0NBQW9DLGlDQUFpQyxtREFBbUQsNEJBQTRCLG1HQUFtRyxtREFBbUQsbURBQW1ELDZFQUE2RSx3SEFBd0gsbUpBQW1KLHVMQUF1TCwrQkFBK0IsWUFBWSxnQ0FBZ0MscUNBQXFDLCtCQUErQixZQUFZLGdDQUFnQyxxQ0FBcUMsK0JBQStCLFlBQVksZ0NBQWdDLHFDQUFxQyxnQ0FBZ0MsWUFBWSxnQ0FBZ0Msb0NBQW9DLFlBQVksc0JBQXNCLGdCQUFnQixxQkFBcUIsc0JBQXNCLDRFQUE0RSwrQkFBK0IsMENBQTBDLDhCQUE4Qix5QkFBeUIsUUFBUSxvQ0FBb0MsU0FBUyxzQ0FBc0MsVUFBVSxzQ0FBc0MsZUFBZSxzQ0FBc0MseUJBQXlCLHdCQUF3QixvQ0FBb0MsNkJBQTZCLFVBQVUsbUJBQW1CLFFBQVEscUJBQXFCLGNBQWMsc0NBQXNDLHFCQUFxQixtQkFBbUIsa0NBQWtDLHlCQUF5QiwrQkFBK0Isd0JBQXdCLHdCQUF3Qix3Q0FBd0MsNEJBQTRCLGdHQUFnRyxtQkFBbUIseUNBQXlDLDZCQUE2QixVQUFVLG1CQUFtQixRQUFRLHFCQUFxQixzQkFBc0IsbUJBQW1CLDJDQUEyQyxpQ0FBaUMsa0JBQWtCLDZCQUE2QixpQ0FBaUMsa0JBQWtCLDJCQUEyQiwrQkFBK0IsK0JBQStCLDZCQUE2QixrQkFBa0IsOEJBQThCLDRCQUE0QiwwQkFBMEIsdUNBQXVDLG1CQUFtQix5Q0FBeUMsMENBQTBDLHlDQUF5Qyx1Q0FBdUMsd0JBQXdCLHdCQUF3QixvQkFBb0IsbUJBQW1CLHFCQUFxQix5Q0FBeUMsd0JBQXdCLG9DQUFvQywrQkFBK0Isa0JBQWtCLHVDQUF1QyxzQkFBc0IseUJBQXlCLHlCQUF5Qix5Q0FBeUMsNEJBQTRCLG9CQUFvQiw0Q0FBNEMseU1BQXlNLDJCQUEyQixrQkFBa0IsbUJBQW1CLDhCQUE4QixvQkFBb0IsMEJBQTBCLGlDQUFpQyxrQ0FBa0MsK0NBQStDLG1CQUFtQiw2Q0FBNkMsNkJBQTZCLHNFQUFzRSxtQkFBbUIsNkJBQTZCLDJDQUEyQyw2RkFBNkYsdUJBQXVCLDJCQUEyQixvQkFBb0Isb0JBQW9CLDJCQUEyQixvQkFBb0IscUJBQXFCLDBDQUEwQyxnQkFBZ0IsZUFBZSwyQkFBMkIsdURBQXVELHdCQUF3QixRQUFRLGlDQUFpQyxTQUFTLG9DQUFvQyxVQUFVLG1DQUFtQyx1QkFBdUIsb0NBQW9DLDJCQUEyQixzQkFBc0IsNkJBQTZCLHVDQUF1Qyx1Q0FBdUMsdUJBQXVCLDZCQUE2QixVQUFVLG9DQUFvQyxtQkFBbUIsUUFBUSxxQkFBcUIscUJBQXFCLGlDQUFpQyxzQkFBc0IsOEJBQThCLHVCQUF1QixvQ0FBb0Msd0JBQXdCLDJCQUEyQix5QkFBeUIsd0JBQXdCLHdCQUF3Qiw2QkFBNkIsVUFBVSxvQ0FBb0MsbUJBQW1CLFFBQVEscUJBQXFCLHFCQUFxQiwrRUFBK0Usd0JBQXdCLHdCQUF3QixxQkFBcUIsb0NBQW9DLDJCQUEyQiw2QkFBNkIsdUNBQXVDLHVDQUF1Qyx3Q0FBd0MseUJBQXlCLDRCQUE0QixzQkFBc0IsNkJBQTZCLFVBQVUsb0NBQW9DLG1CQUFtQixRQUFRLHFCQUFxQixxQkFBcUIsMkNBQTJDLDhCQUE4QiwrQkFBK0IsMEJBQTBCLDhCQUE4QixzQ0FBc0MsdUJBQXVCLHFCQUFxQix1QkFBdUIsdUJBQXVCLG9DQUFvQyxtQkFBbUIsZ0JBQWdCLDJCQUEyQixzQkFBc0Isc0JBQXNCLDBCQUEwQix5RUFBeUUsdUNBQXVDLDJCQUEyQixpQ0FBaUMsdUNBQXVDLGlCQUFpQix1QkFBdUIsa0JBQWtCLDhEQUE4RCw2QkFBNkIsVUFBVSxvQ0FBb0MsbUJBQW1CLFFBQVEscUJBQXFCLHFCQUFxQiw0QkFBNEIsbUJBQW1CLG1CQUFtQix3QkFBd0IsMkJBQTJCLHNCQUFzQixtQkFBbUIsZ0RBQWdELHlDQUF5QyxrQ0FBa0MsNEJBQTRCLGdEQUFnRCx1Q0FBdUMscUNBQXFDLHlCQUF5Qiw4QkFBOEIsbUNBQW1DLG9DQUFvQyxvREFBb0QsNkJBQTZCLDRCQUE0Qiw4QkFBOEIsc0JBQXNCLHlDQUF5QyxxQkFBcUIseUJBQXlCLGFBQWEsY0FBYyxrQkFBa0IsMkJBQTJCLHFCQUFxQixpQ0FBaUMsaUNBQWlDLHFCQUFxQiwyQkFBMkIsaUNBQWlDLGlDQUFpQyx1QkFBdUIseUJBQXlCLGlCQUFpQixtQkFBbUIsZUFBZSxzQkFBc0IsdUJBQXVCLHVCQUF1QixzQkFBc0IsMEJBQTBCLG9CQUFvQixzQ0FBc0MsMEJBQTBCLDZCQUE2QixVQUFVLG9DQUFvQyxtQkFBbUIsUUFBUSxxQkFBcUIscUJBQXFCLHlCQUF5QixtQkFBbUIseUJBQXlCLHdCQUF3Qiw2QkFBNkIsNkJBQTZCLHdDQUF3QyxrQkFBa0IsOEJBQThCLDZCQUE2QixVQUFVLG9DQUFvQyxtQkFBbUIsUUFBUSxxQkFBcUIscUJBQXFCLHdCQUF3Qix5Q0FBeUMsMENBQTBDLHlDQUF5Qyx1Q0FBdUMsd0JBQXdCLHdCQUF3QixvQkFBb0IsbUJBQW1CLHFCQUFxQix5Q0FBeUMsd0JBQXdCLG9DQUFvQywrQkFBK0Isa0JBQWtCLHVDQUF1QyxzQkFBc0IseUJBQXlCLHlCQUF5Qix1Q0FBdUMsOEJBQThCLGlDQUFpQyxvQkFBb0IsNENBQTRDLHlNQUF5TSwyQkFBMkIsa0JBQWtCLG1CQUFtQiw4QkFBOEIsb0JBQW9CLDBCQUEwQixpQ0FBaUMsa0NBQWtDLCtDQUErQyxtQkFBbUIsNkNBQTZDLDZCQUE2QixxRkFBcUYsbUJBQW1CLDZCQUE2QiwyQ0FBMkMsNEdBQTRHLHVCQUF1QixnQ0FBZ0Msb0JBQW9CLG9CQUFvQiwyQkFBMkIsb0JBQW9CLHFCQUFxQiwwQ0FBMEMsZ0JBQWdCLGVBQWUsMkJBQTJCLHVEQUF1RCx3QkFBd0IsUUFBUSxpQ0FBaUMsU0FBUyxvQ0FBb0MsVUFBVSxtQ0FBbUMsY0FBYyx1QkFBdUIsOEJBQThCLHVDQUF1QyxrRkFBa0YsaUNBQWlDLGVBQWUsa0NBQWtDLGVBQWUsa0NBQWtDLFVBQVUsa0NBQWtDLGdCQUFnQixvQ0FBb0MsY0FBYyxrQkFBa0IsbUJBQW1CLHNCQUFzQiw0REFBNEQsdUJBQXVCLGlCQUFpQixnQkFBZ0Isa0JBQWtCLHdCQUF3Qiw0QkFBNEIscUJBQXFCLGlCQUFpQix1QkFBdUIscUJBQXFCLHFCQUFxQiw0RUFBNEUsMkJBQTJCLGNBQWMsd0JBQXdCLFNBQVMsa0NBQWtDLGdDQUFnQyxRQUFRLHVCQUF1QixlQUFlLHVCQUF1QixlQUFlLHVCQUF1QixVQUFVLHlCQUF5QixvQkFBb0Isa0JBQWtCLHlCQUF5QixhQUFhLGNBQWMsb0JBQW9CLGtCQUFrQixtQkFBbUIsNkNBQTZDLDJEQUEyRCxnQ0FBZ0MsVUFBVSxzQ0FBc0MsU0FBUyxvcEJBQW9wQixTQUFTLFlBQVksY0FBYyxhQUFhLGFBQWEsbUJBQW1CLE1BQU0sWUFBWSxZQUFZLFlBQVksYUFBYSxZQUFZLFlBQVksYUFBYSxZQUFZLFlBQVksWUFBWSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sWUFBWSxNQUFNLE9BQU8sYUFBYSxXQUFXLFdBQVcsVUFBVSxVQUFVLGdCQUFnQixNQUFNLGtCQUFrQixNQUFNLGtCQUFrQixNQUFNLGtCQUFrQixNQUFNLGtCQUFrQixNQUFNLGtCQUFrQixPQUFPLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsWUFBWSxZQUFZLGFBQWEsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sS0FBSyxPQUFPLEtBQUssUUFBUSxVQUFVLEtBQUssS0FBSyxhQUFhLHdCQUF3QixLQUFLLEtBQUssYUFBYSx5QkFBeUIsS0FBSyxNQUFNLGFBQWEseUJBQXlCLE1BQU0sTUFBTSxhQUFhLDBCQUEwQixLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsbUJBQW1CLE1BQU0sS0FBSyxpQkFBaUIsTUFBTSxpQkFBaUIsTUFBTSxzQkFBc0IsT0FBTyxZQUFZLGFBQWEsYUFBYSxtQkFBbUIsTUFBTSxLQUFLLGVBQWUsS0FBSyxvQkFBb0IsT0FBTyxZQUFZLFlBQVksVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFlBQVksVUFBVSxrQkFBa0IsT0FBTyxLQUFLLGVBQWUsS0FBSyxvQkFBb0IsT0FBTyxXQUFXLGtCQUFrQixPQUFPLEtBQUssdUJBQXVCLE1BQU0sTUFBTSxhQUFhLGFBQWEsYUFBYSxzQkFBc0IsTUFBTSxhQUFhLGtCQUFrQixPQUFPLGtCQUFrQixPQUFPLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFlBQVksWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGtCQUFrQixPQUFPLFdBQVcsWUFBWSxZQUFZLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxtQkFBbUIsTUFBTSxXQUFXLFlBQVksa0JBQWtCLE9BQU8sZ0JBQWdCLE9BQU8sV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLGFBQWEsWUFBWSxVQUFVLGFBQWEsb0JBQW9CLE1BQU0sS0FBSyxpQkFBaUIsTUFBTSxpQkFBaUIsTUFBTSx1QkFBdUIsT0FBTyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxtQkFBbUIsTUFBTSxLQUFLLFlBQVksZ0JBQWdCLEtBQUssVUFBVSxvQkFBb0IsTUFBTSxVQUFVLGtCQUFrQixNQUFNLFlBQVksY0FBYyxhQUFhLGFBQWEsYUFBYSxtQkFBbUIsT0FBTyxLQUFLLFlBQVksZ0JBQWdCLEtBQUssVUFBVSxvQkFBb0IsTUFBTSxpQkFBaUIsT0FBTyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxpQkFBaUIsTUFBTSxLQUFLLFlBQVksZ0JBQWdCLEtBQUssVUFBVSxvQkFBb0IsTUFBTSxrQkFBa0IsTUFBTSxLQUFLLHlCQUF5QixNQUFNLFlBQVksaUJBQWlCLE1BQU0sWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFlBQVksWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxrQkFBa0IsT0FBTyxLQUFLLFlBQVksZ0JBQWdCLEtBQUssVUFBVSxvQkFBb0IsTUFBTSxVQUFVLFVBQVUsWUFBWSxhQUFhLFlBQVksVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsa0JBQWtCLE9BQU8sWUFBWSxhQUFhLGtCQUFrQixNQUFNLGtCQUFrQixPQUFPLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksZ0JBQWdCLE9BQU8sS0FBSyxXQUFXLG9CQUFvQixNQUFNLE1BQU0sV0FBVyxxQkFBcUIsTUFBTSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxrQkFBa0IsTUFBTSxZQUFZLG9CQUFvQixPQUFPLEtBQUssWUFBWSxnQkFBZ0IsS0FBSyxVQUFVLG9CQUFvQixNQUFNLFVBQVUsWUFBWSxhQUFhLGtCQUFrQixPQUFPLFlBQVksWUFBWSxrQkFBa0IsT0FBTyxLQUFLLFlBQVksZ0JBQWdCLEtBQUssVUFBVSxvQkFBb0IsTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxZQUFZLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLG1CQUFtQixPQUFPLFVBQVUsWUFBWSxZQUFZLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxtQkFBbUIsT0FBTyxVQUFVLFlBQVksa0JBQWtCLE1BQU0sZUFBZSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxhQUFhLFlBQVksVUFBVSxhQUFhLG9CQUFvQixNQUFNLEtBQUssaUJBQWlCLE1BQU0saUJBQWlCLE1BQU0sdUJBQXVCLE9BQU8sWUFBWSxhQUFhLGFBQWEsbUJBQW1CLE1BQU0sS0FBSyxpQkFBaUIsTUFBTSxpQkFBaUIsTUFBTSxpQkFBaUIsTUFBTSx1QkFBdUIsTUFBTSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxpQkFBaUIsTUFBTSxZQUFZLG1CQUFtQixNQUFNLEtBQUssZUFBZSxNQUFNLHVCQUF1QixNQUFNLEtBQUssZ0JBQWdCLE1BQU0sZ0JBQWdCLE1BQU0sZ0JBQWdCLE1BQU0sb0JBQW9CLE9BQU8sV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLG1CQUFtQixLQUFLLEtBQUsscUZBQXFGLGdGQUFnRix5REFBeUQsdURBQXVELDhEQUE4RCx5QkFBeUIsZUFBZSxHQUFHLGVBQWUsS0FBSyxHQUFHLGtDQUFrQyx5QkFBeUIsZUFBZSxHQUFHLGVBQWUsS0FBSyxHQUFHLGlDQUFpQyx5QkFBeUIsZUFBZSxHQUFHLGVBQWUsS0FBSyxHQUFHLHVDQUF1Qyx5QkFBeUIsZUFBZSxHQUFHLGVBQWUsS0FBSyxHQUFHLHlDQUF5QyxrQkFBa0IsdUJBQXVCLG1pQkFBbWlCLHlDQUF5QyxvR0FBb0csNkNBQTZDLEdBQUcsdUJBQXVCLHFDQUFxQyxnQ0FBZ0MsR0FBRyxnQ0FBZ0MsdUNBQXVDLHdDQUF3Qyx1Q0FBdUMscUNBQXFDLEdBQUcsb0NBQW9DLGdDQUFnQyw0QkFBNEIseUJBQXlCLFdBQVcsb0JBQW9CLG1CQUFtQixxQkFBcUIsc0JBQXNCLGdCQUFnQixlQUFlLG9CQUFvQixHQUFHLDBCQUEwQiw0QkFBNEIsc0JBQXNCLDJCQUEyQixvQkFBb0IsK0JBQStCLHdCQUF3QiwrQkFBK0IsK0JBQStCLDBCQUEwQiw4QkFBOEIsNkJBQTZCLDJCQUEyQixxQ0FBcUMseUJBQXlCLDBCQUEwQix5QkFBeUIsdUJBQXVCLDBCQUEwQix5QkFBeUIsR0FBRyxpREFBaUQsbURBQW1ELDRCQUE0QixxR0FBcUcsbURBQW1ELG1EQUFtRCw2RUFBNkUsd0hBQXdILG1KQUFtSixxTEFBcUwsbUJBQW1CLDhCQUE4QiwrQkFBK0IsS0FBSyxtQkFBbUIsOEJBQThCLCtCQUErQixLQUFLLG1CQUFtQiw4QkFBOEIsK0JBQStCLEtBQUssbUJBQW1CLDhCQUE4Qiw4QkFBOEIsS0FBSyxHQUFHLFFBQVEsK0JBQStCLEdBQUcsUUFBUSw4QkFBOEIsR0FBRyxRQUFRLDhCQUE4QixHQUFHLFFBQVEsOEJBQThCLEdBQUcsV0FBVyw4QkFBOEIsR0FBRywyQkFBMkIsVUFBVSxrQkFBa0Isc0JBQXNCLHdCQUF3Qix1Q0FBdUMscUNBQXFDLG9DQUFvQyxpQ0FBaUMsMkJBQTJCLEdBQUcsNkNBQTZDLDJDQUEyQyxZQUFZLHNCQUFzQixnQkFBZ0IscUJBQXFCLHNCQUFzQiw0RUFBNEUsK0JBQStCLDBDQUEwQyw0QkFBNEIsMkJBQTJCLFVBQVUsb0NBQW9DLE9BQU8sV0FBVyxzQ0FBc0MsT0FBTyxZQUFZLG9DQUFvQyxPQUFPLEtBQUssVUFBVSw0QkFBNEIseUJBQXlCLHdCQUF3QixrQ0FBa0MsS0FBSyxTQUFTLDRCQUE0Qiw4Q0FBOEMscUJBQXFCLG1CQUFtQixrQ0FBa0MseUJBQXlCLCtCQUErQix3QkFBd0Isd0JBQXdCLHdDQUF3Qyw0QkFBNEIscUhBQXFILG1CQUFtQixvQ0FBb0MsaUJBQWlCLG1CQUFtQixzQ0FBc0MsT0FBTyxxQkFBcUIsdUJBQXVCLE9BQU8scUJBQXFCLGtDQUFrQyw2QkFBNkIsNkJBQTZCLHVCQUF1QixPQUFPLFdBQVcsOEJBQThCLDBCQUEwQixpQkFBaUIscUNBQXFDLFNBQVMsT0FBTyxLQUFLLGNBQWMsNkJBQTZCLEtBQUssR0FBRywwQkFBMEIsb0NBQW9DLCtCQUErQixZQUFZLHNDQUFzQyxtQkFBbUIsT0FBTyxVQUFVLHVCQUF1QixtQkFBbUIsT0FBTyxLQUFLLEdBQUcseUJBQXlCLG9DQUFvQywrQkFBK0IsWUFBWSxtQkFBbUIsT0FBTyxVQUFVLG1CQUFtQixPQUFPLEtBQUssR0FBRywyQkFBMkIsZ0NBQWdDLHNCQUFzQix5Q0FBeUMsc0JBQXNCLHdCQUF3Qix3QkFBd0IseUJBQXlCLHdCQUF3QixtQkFBbUIsdUNBQXVDLHNCQUFzQixrQ0FBa0MsNkJBQTZCLGdCQUFnQixxQ0FBcUMsb0JBQW9CLHVCQUF1QixrQ0FBa0MscUNBQXFDLGdCQUFnQixrQkFBa0IsMENBQTBDLGdRQUFnUSwyQkFBMkIsZ0JBQWdCLGlCQUFpQiw0QkFBNEIsa0JBQWtCLHdCQUF3QiwrQkFBK0IsZ0NBQWdDLDZDQUE2QyxpQkFBaUIsMkNBQTJDLG9DQUFvQyxLQUFLLHdDQUF3QyxpQkFBaUIsMkJBQTJCLHVDQUF1QyxrQkFBa0IsbUJBQW1CLE9BQU8sS0FBSyxlQUFlLGtCQUFrQixrQkFBa0IseUJBQXlCLGtCQUFrQixtQkFBbUIsZ0NBQWdDLGNBQWMsYUFBYSxvQ0FBb0MsbURBQW1ELEtBQUssMEJBQTBCLFVBQVUsaUNBQWlDLE9BQU8sV0FBVyxvQ0FBb0MsT0FBTyxZQUFZLGlDQUFpQyxPQUFPLEtBQUssR0FBRyxrQkFBa0IsV0FBVyw0QkFBNEIsNkJBQTZCLHdCQUF3QiwrQkFBK0IseUNBQXlDLHlDQUF5Qyx1QkFBdUIscUJBQXFCLHdCQUF3Qiw4QkFBOEIsT0FBTyxLQUFLLGFBQWEsNEJBQTRCLDBCQUEwQiw2QkFBNkIsMkJBQTJCLDBCQUEwQix3QkFBd0Isd0RBQXdELHdCQUF3QixPQUFPLEtBQUssR0FBRyxrQkFBa0IsWUFBWSx1QkFBdUIsOEJBQThCLDZCQUE2QixpQ0FBaUMseUNBQXlDLHlDQUF5QywwQ0FBMEMsMkJBQTJCLDhCQUE4QixzQkFBc0IsOEJBQThCLDhCQUE4QixPQUFPLHFCQUFxQiwwQkFBMEIsT0FBTyxLQUFLLEdBQUcsa0JBQWtCLDBCQUEwQix5QkFBeUIscUJBQXFCLEtBQUssYUFBYSx5QkFBeUIsNEJBQTRCLHFCQUFxQixrQkFBa0IsNkJBQTZCLDBCQUEwQix3QkFBd0IsNEJBQTRCLG1IQUFtSCwyQ0FBMkMsNkJBQTZCLG1DQUFtQyx5Q0FBeUMsbUJBQW1CLHlCQUF5QixzQkFBc0IsOERBQThELGNBQWMsNkJBQTZCLHdCQUF3QixxQkFBcUIsNkNBQTZDLDJDQUEyQyxvQ0FBb0MsOEJBQThCLGtEQUFrRCx1Q0FBdUMsbUJBQW1CLG9EQUFvRCxTQUFTLE9BQU8sd0VBQXdFLDhCQUE4QixnQ0FBZ0Msd0JBQXdCLDJDQUEyQyx5QkFBeUIsMkJBQTJCLGVBQWUsZ0JBQWdCLG9CQUFvQiw2QkFBNkIscUJBQXFCLHVCQUF1QixxQkFBcUIsdUJBQXVCLFNBQVMsdUJBQXVCLHVCQUF1QixxQkFBcUIsU0FBUyxPQUFPLEtBQUssR0FBRyx5QkFBeUIsaUJBQWlCLGlCQUFpQixzQkFBc0IseUJBQXlCLGdCQUFnQix1QkFBdUIsNEJBQTRCLCtCQUErQixLQUFLLEdBQUcsNkNBQTZDLDJDQUEyQyx5Q0FBeUMsbUNBQW1DLHFDQUFxQywyQkFBMkIsaUJBQWlCLG1CQUFtQixlQUFlLHNCQUFzQix1QkFBdUIsdUJBQXVCLHNCQUFzQix3QkFBd0IsVUFBVSw0QkFBNEIsd0JBQXdCLEtBQUssZUFBZSxtQkFBbUIseUJBQXlCLHdCQUF3QiwyQkFBMkIsV0FBVyw4QkFBOEIsa0JBQWtCLDRCQUE0QixPQUFPLEtBQUssY0FBYyw2QkFBNkIsNEJBQTRCLEtBQUssR0FBRyxxQkFBcUIsbUJBQW1CLHFCQUFxQix1QkFBdUIsc0NBQXNDLGdDQUFnQyxlQUFlLHVCQUF1Qix3QkFBd0IsNkJBQTZCLCtFQUErRSxHQUFHLGNBQWMsdUJBQXVCLG1EQUFtRCx1Q0FBdUMsOElBQThJLGdCQUFnQixtQ0FBbUMsa0RBQWtELFlBQVksNEJBQTRCLDBDQUEwQyxnRUFBZ0UsV0FBVyxTQUFTLE9BQU8sS0FBSyxHQUFHLGNBQWMsa0JBQWtCLG1CQUFtQix3QkFBd0IsZ0VBQWdFLHVCQUF1QixpQkFBaUIsZ0JBQWdCLGtCQUFrQix3QkFBd0IsNEJBQTRCLHFCQUFxQixpQkFBaUIscUJBQXFCLGdCQUFnQixrQkFBa0IsY0FBYyxFQUFFLGtMQUFrTCxrQkFBa0IsK0JBQStCLDZCQUE2Qiw0QkFBNEIsV0FBVyxlQUFlLG9DQUFvQyxXQUFXLFNBQVMsT0FBTyxrQkFBa0Isb0NBQW9DLGdEQUFnRCxjQUFjLDRCQUE0QiwyQ0FBMkMsZ0NBQWdDLCtCQUErQixnQkFBZ0IsT0FBTyw0QkFBNEIsUUFBUSxFQUFFLGVBQWUsYUFBYSxXQUFXLFNBQVMsT0FBTyxLQUFLLGFBQWEsa0JBQWtCLHlCQUF5QixhQUFhLGNBQWMsb0JBQW9CLGtCQUFrQixtQkFBbUIsMkNBQTJDLG1HQUFtRyxrQkFBa0Isb0NBQW9DLGdCQUFnQix3Q0FBd0MsV0FBVyxTQUFTLE9BQU8sS0FBSyxHQUFHLHFCQUFxQjtBQUM3MGtDO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUdkM7QUFDNkc7QUFDakI7QUFDNUYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBLHVXQUF1Vyx1QkFBdUIsMkNBQTJDLFVBQVUsb0tBQW9LLGNBQWMsR0FBRyw0RUFBNEUsbUJBQW1CLEdBQUcsNEpBQTRKLG1CQUFtQixxQkFBcUIsR0FBRyw0TkFBNE4sNkJBQTZCLHNCQUFzQiw4QkFBOEIsVUFBVSw2SkFBNkosdUNBQXVDLDJCQUEyQixVQUFVLCtMQUErTCxrQ0FBa0MsR0FBRyxnS0FBZ0sseUJBQXlCLHVDQUF1Qyw4Q0FBOEMsVUFBVSw2RkFBNkYsd0JBQXdCLEdBQUcsMktBQTJLLHVDQUF1QywyQkFBMkIsVUFBVSwwRUFBMEUsbUJBQW1CLEdBQUcsMEhBQTBILG1CQUFtQixtQkFBbUIsdUJBQXVCLDZCQUE2QixHQUFHLFNBQVMsb0JBQW9CLEdBQUcsU0FBUyxnQkFBZ0IsR0FBRywyTEFBMkwsdUJBQXVCLEdBQUcsb1FBQW9RLDBCQUEwQiw0QkFBNEIsOEJBQThCLHNCQUFzQixVQUFVLHFHQUFxRyxpQ0FBaUMsR0FBRywwS0FBMEssb0NBQW9DLEdBQUcsdUpBQXVKLCtCQUErQixHQUFHLDZNQUE2TSx1QkFBdUIsZUFBZSxHQUFHLHNNQUFzTSxtQ0FBbUMsR0FBRyxrRUFBa0UsbUNBQW1DLEdBQUcsa1JBQWtSLDRCQUE0QiwyQkFBMkIsMkJBQTJCLDRCQUE0Qix1QkFBdUIsZ0NBQWdDLFVBQVUsb0dBQW9HLDZCQUE2QixHQUFHLG1GQUFtRixtQkFBbUIsR0FBRywwSUFBMEksNEJBQTRCLHVCQUF1QixVQUFVLHdMQUF3TCxpQkFBaUIsR0FBRywySUFBMkksbUNBQW1DLGlDQUFpQyxVQUFVLDRIQUE0SCw2QkFBNkIsR0FBRyxtTEFBbUwsZ0NBQWdDLDBCQUEwQixVQUFVLDRMQUE0TCxtQkFBbUIsR0FBRyx5RUFBeUUsdUJBQXVCLEdBQUcsb0tBQW9LLGtCQUFrQixHQUFHLG9FQUFvRSxrQkFBa0IsR0FBRyxTQUFTLCtGQUErRixNQUFNLFFBQVEsUUFBUSxNQUFNLEtBQUssc0JBQXNCLHVCQUF1QixPQUFPLEtBQUssUUFBUSxPQUFPLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxNQUFNLEtBQUssVUFBVSxPQUFPLE9BQU8sTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssUUFBUSxRQUFRLE1BQU0sS0FBSyxzQkFBc0IscUJBQXFCLHVCQUF1QixPQUFPLE9BQU8sTUFBTSxLQUFLLHNCQUFzQixxQkFBcUIsT0FBTyxLQUFLLFFBQVEsT0FBTyxNQUFNLEtBQUssWUFBWSxPQUFPLE9BQU8sTUFBTSxLQUFLLHNCQUFzQix1QkFBdUIsdUJBQXVCLE9BQU8sTUFBTSxNQUFNLE1BQU0sWUFBWSxPQUFPLE9BQU8sTUFBTSxPQUFPLHNCQUFzQixxQkFBcUIsT0FBTyxNQUFNLE1BQU0sS0FBSyxVQUFVLE9BQU8sT0FBTyxNQUFNLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssUUFBUSxPQUFPLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxRQUFRLFFBQVEsTUFBTSxTQUFTLHNCQUFzQixxQkFBcUIsdUJBQXVCLHFCQUFxQixPQUFPLE9BQU8sTUFBTSxNQUFNLFVBQVUsWUFBWSxPQUFPLE9BQU8sTUFBTSxNQUFNLFVBQVUsWUFBWSxPQUFPLE1BQU0sTUFBTSxRQUFRLFlBQVksT0FBTyxNQUFNLE1BQU0sUUFBUSxZQUFZLFdBQVcsTUFBTSxNQUFNLE1BQU0sUUFBUSxZQUFZLE9BQU8sTUFBTSxNQUFNLEtBQUssWUFBWSxPQUFPLFNBQVMsTUFBTSxLQUFLLHNCQUFzQixxQkFBcUIscUJBQXFCLHFCQUFxQixxQkFBcUIsdUJBQXVCLE9BQU8sTUFBTSxNQUFNLEtBQUssWUFBWSxPQUFPLE1BQU0sTUFBTSxLQUFLLFVBQVUsT0FBTyxPQUFPLE1BQU0sTUFBTSxzQkFBc0IscUJBQXFCLE9BQU8sTUFBTSxNQUFNLE1BQU0sVUFBVSxNQUFNLE9BQU8sTUFBTSxLQUFLLHNCQUFzQix1QkFBdUIsT0FBTyxNQUFNLE1BQU0sS0FBSyxZQUFZLE9BQU8sT0FBTyxNQUFNLEtBQUssc0JBQXNCLHFCQUFxQixPQUFPLEtBQUssUUFBUSxPQUFPLE1BQU0sS0FBSyxVQUFVLE9BQU8sTUFBTSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssUUFBUSxPQUFPLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxNQUFNLEtBQUssVUFBVSxzVkFBc1YsdUJBQXVCLDJDQUEyQyxVQUFVLG9LQUFvSyxjQUFjLEdBQUcsNEVBQTRFLG1CQUFtQixHQUFHLDRKQUE0SixtQkFBbUIscUJBQXFCLEdBQUcsNE5BQTROLDZCQUE2QixzQkFBc0IsOEJBQThCLFVBQVUsNkpBQTZKLHVDQUF1QywyQkFBMkIsVUFBVSwrTEFBK0wsa0NBQWtDLEdBQUcsZ0tBQWdLLHlCQUF5Qix1Q0FBdUMsOENBQThDLFVBQVUsNkZBQTZGLHdCQUF3QixHQUFHLDJLQUEySyx1Q0FBdUMsMkJBQTJCLFVBQVUsMEVBQTBFLG1CQUFtQixHQUFHLDBIQUEwSCxtQkFBbUIsbUJBQW1CLHVCQUF1Qiw2QkFBNkIsR0FBRyxTQUFTLG9CQUFvQixHQUFHLFNBQVMsZ0JBQWdCLEdBQUcsMkxBQTJMLHVCQUF1QixHQUFHLG9RQUFvUSwwQkFBMEIsNEJBQTRCLDhCQUE4QixzQkFBc0IsVUFBVSxxR0FBcUcsaUNBQWlDLEdBQUcsMEtBQTBLLG9DQUFvQyxHQUFHLHVKQUF1SiwrQkFBK0IsR0FBRyw2TUFBNk0sdUJBQXVCLGVBQWUsR0FBRyxzTUFBc00sbUNBQW1DLEdBQUcsa0VBQWtFLG1DQUFtQyxHQUFHLGtSQUFrUiw0QkFBNEIsMkJBQTJCLDJCQUEyQiw0QkFBNEIsdUJBQXVCLGdDQUFnQyxVQUFVLG9HQUFvRyw2QkFBNkIsR0FBRyxtRkFBbUYsbUJBQW1CLEdBQUcsMElBQTBJLDRCQUE0Qix1QkFBdUIsVUFBVSx3TEFBd0wsaUJBQWlCLEdBQUcsMklBQTJJLG1DQUFtQyxpQ0FBaUMsVUFBVSw0SEFBNEgsNkJBQTZCLEdBQUcsbUxBQW1MLGdDQUFnQywwQkFBMEIsVUFBVSw0TEFBNEwsbUJBQW1CLEdBQUcseUVBQXlFLHVCQUF1QixHQUFHLG9LQUFvSyxrQkFBa0IsR0FBRyxvRUFBb0Usa0JBQWtCLEdBQUcscUJBQXFCO0FBQ2xpZTtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ1AxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFEQUFxRDtBQUNyRDs7QUFFQTtBQUNBLGdEQUFnRDtBQUNoRDs7QUFFQTtBQUNBLHFGQUFxRjtBQUNyRjs7QUFFQTs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLEtBQUs7QUFDTCxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUIscUJBQXFCO0FBQzFDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQ3JHYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQTBJO0FBQzFJO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsMEhBQU87Ozs7QUFJb0Y7QUFDNUcsT0FBTyxpRUFBZSwwSEFBTyxJQUFJLGlJQUFjLEdBQUcsaUlBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxxQkFBcUIsNkJBQTZCO0FBQ2xEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3ZHYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzREFBc0Q7O0FBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUN0Q2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNWYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7O0FBRWpGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDWGE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0RBQWtEO0FBQ2xEOztBQUVBO0FBQ0EsMENBQTBDO0FBQzFDOztBQUVBOztBQUVBO0FBQ0EsaUZBQWlGO0FBQ2pGOztBQUVBOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELElBQUk7O0FBRUo7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmTyxTQUFTLFFBQVEsQ0FBQyxPQUFvQjtJQUMzQyxNQUFNLENBQUMsTUFBTSxDQUFDO1FBQ1osUUFBUSxFQUFFLFFBQVE7UUFDbEIsSUFBSSxFQUFFLENBQUM7UUFDUCxHQUFHLEVBQUUsT0FBTyxDQUFDLFNBQVM7S0FDdkIsQ0FBQztBQUNKLENBQUM7QUFFTSxTQUFTLFFBQVE7SUFDdEIsTUFBTSxRQUFRLEdBQUcsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxDQUFDLGdCQUFnQixDQUMxRSxhQUFhLENBQ2Q7SUFDRCxNQUFNLHNCQUFzQixHQUFHLFFBQVE7U0FDcEMsU0FBUyxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztTQUNqQyxPQUFPLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQztJQUN2QixPQUFPLHNCQUFzQjtBQUMvQixDQUFDO0FBRU0sU0FBUyxRQUFRLENBQUMsR0FBVztJQUNsQyxRQUFRLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLFFBQVEsR0FBRyxJQUFJLENBQUM7QUFDNUUsQ0FBQztBQUVNLFNBQVMsVUFBVTtJQUN4QixNQUFNLFFBQVEsR0FBRyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLENBQUMsZ0JBQWdCLENBQzFFLGdCQUFnQixDQUNqQjtJQUNELE9BQU8sUUFBUTtBQUNqQixDQUFDO0FBRU0sU0FBUyxVQUFVLENBQUMsSUFBWTtJQUNyQyxRQUFRLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzVFLENBQUM7QUFFTSxTQUFTLE9BQU87SUFDckIsTUFBTSxRQUFRLEdBQUcsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxDQUFDLGdCQUFnQixDQUMxRSxhQUFhLENBQ2Q7SUFDRCxPQUFPLFFBQVE7QUFDakIsQ0FBQztBQUVNLFNBQVMsT0FBTyxDQUFDLElBQVk7SUFDbEMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDekUsQ0FBQztBQUVNLFNBQVMsTUFBTTtJQUNwQixNQUFNLFFBQVEsR0FBRyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLENBQUMsZ0JBQWdCLENBQzFFLE9BQU8sQ0FDUjtJQUNELE9BQU8sUUFBUTtBQUNqQixDQUFDO0FBRU0sU0FBUyxNQUFNLENBQUMsSUFBWTtJQUNqQyxRQUFRLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNuRSxDQUFDO0FBRU0sU0FBUyxRQUFRO0lBQ3RCLE1BQU0sUUFBUSxHQUFHLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsQ0FBQyxnQkFBZ0IsQ0FDMUUsU0FBUyxDQUNWO0lBQ0QsT0FBTyxRQUFRO0FBQ2pCLENBQUM7QUFFTSxTQUFTLFFBQVEsQ0FBQyxJQUFZO0lBQ25DLFFBQVEsQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsSUFBSSxHQUFHLEdBQUcsQ0FBQztBQUNuRSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRW1EO0FBQ2hCO0FBQ1Q7QUFFWixNQUFNLElBQUk7SUFLdkI7UUFDRSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUk7UUFDdkIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJO1FBQ3hCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSw4Q0FBSyxFQUFFO0lBQzFCLENBQUM7SUFFTSxJQUFJLENBQUMsTUFBc0I7UUFDaEMsTUFBTSxVQUFVLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUM7UUFDckQsSUFBSSxVQUFVO1lBQUUsTUFBTSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUM7UUFDOUMsSUFBSSxJQUFJLENBQUMsV0FBVyxLQUFLLElBQUk7WUFBRSxZQUFZLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUM3RCxJQUFJLElBQUksQ0FBQyxZQUFZLEtBQUssSUFBSTtZQUFFLGFBQWEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQ2hFLGlEQUFRLENBQUMsQ0FBQyxDQUFDO0lBQ2IsQ0FBQztJQUVNLEtBQUssQ0FBQyxNQUFzQjtRQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUVqQiwrREFBWSxDQUFDLE1BQU0sQ0FBQztRQUVwQiwrQ0FBTSxDQUFDLENBQUMsQ0FBQztRQUNULGlEQUFRLENBQUMsQ0FBQyxDQUFDO1FBRVgsTUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUM7UUFDN0MsT0FBTyxDQUFDLEVBQUUsR0FBRyxTQUFTO1FBQ3RCLE1BQU0sQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDO1FBRTNCLElBQUksQ0FBQyxXQUFXLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7WUFDbEMsTUFBTSxVQUFVLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUM7WUFDckQsSUFBSSxVQUFVO2dCQUFFLE1BQU0sQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDO1lBRTlDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxZQUFZLEdBQUcsV0FBVyxDQUFDLEdBQUcsRUFBRTtnQkFDbkMsTUFBTSxHQUFHLEdBQUcsK0NBQU0sRUFBRSxLQUFLLEdBQUc7Z0JBRTVCLElBQUksR0FBRyxFQUFFO29CQUNQLGFBQWEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO29CQUNoQyxVQUFVLENBQUMsR0FBRyxFQUFFO3dCQUNkLEtBQUssQ0FBQyx1Q0FBdUMsQ0FBQztvQkFDaEQsQ0FBQyxFQUFFLEdBQUcsQ0FBQztvQkFDUCxPQUFNO2lCQUNQO2dCQUVELE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsR0FBRyxJQUFJLENBQUM7Z0JBQ3BELFFBQVEsQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsSUFBSSxJQUFJLElBQUksQ0FBQztnQkFDbkUsUUFBUSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUM7WUFDNUQsQ0FBQyxFQUFFLEdBQUcsQ0FBQztZQUNQLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSTtRQUN6QixDQUFDLEVBQUUsSUFBSSxDQUFDO0lBQ1YsQ0FBQztJQUVNLFFBQVE7UUFDYixJQUFJLEdBQUcsR0FBRyxJQUFJO1FBRWQsTUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQztRQUUvQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7WUFDckIsTUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUM7WUFDckQsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLO1lBQ3BDLElBQUksV0FBVyxLQUFLLGFBQWE7Z0JBQUUsR0FBRyxHQUFHLEtBQUs7UUFDaEQsQ0FBQyxDQUFDO1FBRUYsSUFBSSxHQUFHO1lBQUUsK0NBQU0sQ0FBQyxDQUFDLENBQUM7SUFDcEIsQ0FBQztDQUNGOzs7Ozs7Ozs7Ozs7Ozs7QUN6RWMsTUFBTSxLQUFLO0lBS3hCO1FBQ0UsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLO1FBQ3RCLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQztRQUNsQixJQUFJLENBQUMsV0FBVyxHQUFHLENBQUM7SUFDdEIsQ0FBQztJQUVNLDZCQUE2QjtRQUNsQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVM7WUFBRSxPQUFPLENBQUM7UUFDN0IsT0FBTyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLFNBQVM7SUFDcEMsQ0FBQztJQUVNLE9BQU87UUFDWixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVM7WUFBRSxPQUFPLENBQUM7UUFDN0IsSUFBSSxJQUFJLENBQUMsU0FBUztZQUNoQixPQUFPLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLDZCQUE2QixFQUFFO1FBQ2hFLE9BQU8sSUFBSSxDQUFDLFdBQVc7SUFDekIsQ0FBQztJQUVNLEtBQUs7UUFDVixJQUFJLENBQUMsV0FBVyxHQUFHLENBQUM7UUFFcEIsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUMzQixPQUFNO1NBQ1A7UUFFRCxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUM7SUFDcEIsQ0FBQztJQUVNLEtBQUs7UUFDVixJQUFJLElBQUksQ0FBQyxTQUFTO1lBQUUsT0FBTyxPQUFPLENBQUMsS0FBSyxDQUFDLDBCQUEwQixDQUFDO1FBQ3BFLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSTtRQUNyQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUU7SUFDN0IsQ0FBQztJQUVNLElBQUk7UUFDVCxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVM7WUFBRSxPQUFPLE9BQU8sQ0FBQyxLQUFLLENBQUMsMEJBQTBCLENBQUM7UUFDckUsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLO1FBQ3RCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsNkJBQTZCLEVBQUU7SUFDNUUsQ0FBQztDQUNGOzs7Ozs7Ozs7Ozs7Ozs7O0FDN0NtQztBQUVyQixNQUFNLE9BQU87SUFDMUIsWUFBMEIsUUFBZ0IsRUFBUyxNQUFjO1FBQXZDLGFBQVEsR0FBUixRQUFRLENBQVE7UUFBUyxXQUFNLEdBQU4sTUFBTSxDQUFRO0lBQUcsQ0FBQztJQUM5RCxLQUFLLENBQUMsU0FBc0I7UUFDakMsTUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUM7UUFDL0MsTUFBTSxFQUFFLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUM7UUFDdkMsRUFBRSxDQUFDLFdBQVcsR0FBRyxHQUFHLElBQUksQ0FBQyxRQUFRLEdBQUc7UUFFcEMsTUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUM7UUFDNUMsUUFBUSxDQUFDLFNBQVMsR0FBRywyRUFBMkUsSUFBSSxDQUFDLE1BQU0sV0FBVztRQUV0SCxNQUFNLFlBQVksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQztRQUNyRCxZQUFZLENBQUMsV0FBVyxHQUFHLE1BQU07UUFDakMsWUFBWSxDQUFDLElBQUksR0FBRyxRQUFRO1FBRTVCLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFO1lBQzFDLE1BQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQ25DLHVCQUF1QixDQUNUO1lBQ2hCLElBQUksTUFBTTtnQkFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsaURBQVEsQ0FBQyxNQUFNLENBQUMsRUFBRSxHQUFHLENBQUM7UUFDckQsQ0FBQyxDQUFDO1FBRUYsTUFBTSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUM7UUFDdEIsTUFBTSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUM7UUFDNUIsTUFBTSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUM7UUFDaEMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUM7UUFFN0IsWUFBWSxDQUFDLEtBQUssRUFBRTtJQUN0QixDQUFDO0NBQ0Y7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5Qm9EO0FBR3RDLE1BQU0sWUFBWTtJQUMvQixnQkFBc0IsQ0FBQztJQUVoQixLQUFLLENBQUMsU0FBc0IsRUFBRSxJQUFVO1FBQzdDLE1BQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDO1FBQzdDLEtBQUssQ0FBQyxXQUFXLEdBQUcsU0FBUztRQUM3QixLQUFLLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxjQUFjLENBQUM7UUFFekMsTUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUM7UUFDN0MsS0FBSyxDQUFDLEVBQUUsR0FBRyxjQUFjO1FBQ3pCLEtBQUssQ0FBQyxJQUFJLEdBQUcsUUFBUTtRQUNyQixLQUFLLENBQUMsR0FBRyxHQUFHLEdBQUc7UUFDZixLQUFLLENBQUMsR0FBRyxHQUFHLElBQUk7UUFDaEIsS0FBSyxDQUFDLEtBQUssR0FBRyxtREFBVSxFQUFFO1FBQzFCLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRTtZQUNyQyxtREFBVSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDL0IsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO1FBQ3ZCLENBQUMsQ0FBQztRQUVGLFNBQVMsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDO1FBQzVCLFNBQVMsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDO0lBQzlCLENBQUM7Q0FDRjs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCMkQ7QUFHN0MsTUFBTSxJQUFJO0lBQ3ZCLGdCQUFzQixDQUFDO0lBRWhCLEtBQUssQ0FBQyxJQUFVO1FBQ3JCLE1BQU0sT0FBTyxHQUFHLG1EQUFVLEVBQUU7UUFDNUIsTUFBTSxJQUFJLEdBQUcsZ0RBQU8sRUFBRTtRQUN0QixNQUFNLFFBQVEsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQztRQUUvQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDO1FBRTFCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxRQUFRLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDakMsTUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUM7WUFDM0MsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDNUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJO1lBRXJCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDOUQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM1RCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzlELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBRTlELE1BQU0sYUFBYSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztZQUNoRCxNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNuRSxNQUFNLGFBQWEsR0FBRyxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDO1lBRTNELHlGQUF5RjtZQUN6RixpRkFBaUY7WUFDakYsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXO1lBQ2xDLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWTtZQUVwQyxnRUFBZ0U7WUFDaEUsTUFBTSxTQUFTLEdBQUcsSUFBSSxLQUFLLEVBQUU7WUFDN0IsU0FBUyxDQUFDLEdBQUcsR0FBRyxpREFBUSxFQUFFO1lBQzFCLE1BQU0sV0FBVyxHQUFHLFNBQVMsQ0FBQyxNQUFNO1lBQ3BDLE1BQU0sVUFBVSxHQUFHLFNBQVMsQ0FBQyxLQUFLO1lBRWxDLDRFQUE0RTtZQUM1RSxNQUFNLFVBQVUsR0FBRyxVQUFVLEdBQUcsV0FBVztZQUMzQyxNQUFNLGNBQWMsR0FBRyxLQUFLLEdBQUcsTUFBTTtZQUVyQyxJQUFJLFNBQVM7WUFDYixJQUFJLFVBQVU7WUFFZCxJQUFJLGNBQWMsR0FBRyxVQUFVLEVBQUU7Z0JBQy9CLFNBQVMsR0FBRyxLQUFLO2dCQUNqQixVQUFVLEdBQUcsS0FBSyxHQUFHLFVBQVU7YUFDaEM7aUJBQU07Z0JBQ0wsU0FBUyxHQUFHLE1BQU0sR0FBRyxVQUFVO2dCQUMvQixVQUFVLEdBQUcsTUFBTTthQUNwQjtZQUVELHVDQUF1QztZQUN2QyxTQUFTLElBQUksQ0FBQztZQUNkLFVBQVUsSUFBSSxDQUFDO1lBRWYsTUFBTSxrQkFBa0IsR0FBRyxHQUFHLFNBQVMsTUFBTSxVQUFVLElBQUk7WUFFM0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLEdBQUcsa0JBQWtCO1lBRTlDLE1BQU0sYUFBYSxHQUFHLEtBQUssR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDO1lBQzdDLE1BQU0sYUFBYSxHQUFHLE1BQU0sR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQzNDLE1BQU0sV0FBVyxHQUFHLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUM7WUFDM0MsTUFBTSxZQUFZLEdBQUcsQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQztZQUU5QyxtRUFBbUU7WUFDbkUsNERBQTREO1lBQzVELElBQUksQ0FBQyxLQUFLLENBQUMsbUJBQW1CO2dCQUM1QixDQUFDLGFBQWEsR0FBRyxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUMsR0FBRyxXQUFXLEdBQUcsQ0FBQyxHQUFHLElBQUk7WUFDL0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxtQkFBbUI7Z0JBQzVCLENBQUMsYUFBYSxHQUFHLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQyxHQUFHLFlBQVksR0FBRyxDQUFDLEdBQUcsSUFBSTtZQUU3RCxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUM7U0FDM0I7SUFDSCxDQUFDO0lBRU8sTUFBTSxDQUFDLEtBQUssQ0FBQyxTQUFzQixFQUFFLElBQVU7UUFDckQsTUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQztRQUNsRCxLQUFLLE1BQU0sSUFBSSxJQUFJLFFBQVEsRUFBRTtZQUMzQixJQUFJLENBQUMsbUJBQW1CLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2pFLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDL0QsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNqRSxJQUFJLENBQUMsbUJBQW1CLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUNqRSxTQUFTLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQztTQUM1QjtJQUNILENBQUM7SUFFTSxNQUFNLENBQUMsT0FBTyxDQUFDLFNBQXNCO1FBQzFDLE1BQU0sSUFBSSxHQUFHLFNBQVMsQ0FBQyxpQkFBaUI7UUFFeEMsTUFBTSxLQUFLLEdBQUcsU0FBUyxDQUFDLFFBQXlDO1FBQ2pFLHFDQUFxQztRQUNyQywrRUFBK0U7UUFDL0UsK0JBQStCO1FBQy9CLE1BQU0sUUFBUSxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDckMsR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDO2FBQ2hELElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQzthQUMvQixHQUFHLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUM7UUFFNUIsK0JBQStCO1FBQy9CLE1BQU0sYUFBYSxHQUFHLEVBQUU7UUFDeEIsTUFBTSxhQUFhLEdBQUcsRUFBRTtRQUN4QixLQUFLLE1BQU0sSUFBSSxJQUFJLEtBQUssRUFBRTtZQUN4QixNQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQzVCLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7WUFDcEMsYUFBYSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDcEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQztZQUNuQyxRQUFRLENBQUMsS0FBSyxFQUFFO1NBQ2pCO1FBRUQsMkJBQTJCO1FBQzNCLElBQUksU0FBUyxHQUFHLGFBQWEsS0FBSyxhQUFhO1FBQy9DLElBQUksU0FBUztZQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDO0lBQ3hDLENBQUM7SUFFTyxNQUFNLENBQUMsVUFBVSxDQUFDLEtBQWdCLEVBQUUsSUFBVTs7UUFDcEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZO1lBQUUsT0FBTTtRQUUvQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBcUI7UUFDMUMsTUFBTSxXQUFXLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLO1FBQ3RDLE1BQU0sV0FBVyxHQUFHLFdBQUssQ0FBQyxZQUFZLDBDQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUM7UUFDdkQsTUFBTSxPQUFPLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FDeEIsUUFBUSxDQUFDLGdCQUFnQixDQUFjLGNBQWMsQ0FBQyxDQUN2RDtRQUVELE1BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxLQUFLLFdBQVcsQ0FBQztRQUNqRSxJQUFJLE1BQU0sRUFBRTtZQUNWLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLFdBQVc7WUFDaEMsTUFBTSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsa0JBQWtCLENBQUM7U0FDaEQ7UUFFRCxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxXQUFXO1FBQ2hDLE1BQU0sQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLGtCQUFrQixDQUFDO1FBRS9DLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO0lBQ3RCLENBQUM7SUFFTyxNQUFNLENBQUMsV0FBVyxDQUFDLEtBQWdCO1FBQ3pDLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUFxQjtRQUMxQyxNQUFNLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxrQkFBa0IsQ0FBQztJQUNqRCxDQUFDO0lBRU8sTUFBTSxDQUFDLFVBQVUsQ0FBQyxLQUFnQjtRQUN4QyxLQUFLLENBQUMsY0FBYyxFQUFFO1FBQ3RCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUFxQjtRQUMxQyxNQUFNLENBQUMsS0FBSyxDQUFDLGVBQWUsR0FBRyx5QkFBeUI7SUFDMUQsQ0FBQztJQUVPLE1BQU0sQ0FBQyxXQUFXLENBQUMsS0FBZ0I7O1FBQ3pDLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUFxQjtRQUMxQyxNQUFNLEtBQUssR0FBRyxhQUFNLENBQUMsS0FBSywwQ0FBRSxLQUFLLEtBQUksRUFBRTtRQUN2QyxXQUFLLENBQUMsWUFBWSwwQ0FBRSxPQUFPLENBQUMsWUFBWSxFQUFFLEtBQUssQ0FBQztJQUNsRCxDQUFDO0NBQ0Y7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzSjhDO0FBR2hDLE1BQU0sU0FBUztJQUM1QixnQkFBc0IsQ0FBQztJQUVoQixLQUFLLENBQUMsU0FBc0IsRUFBRSxJQUFVO1FBQzdDLE1BQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDO1FBQzdDLEtBQUssQ0FBQyxXQUFXLEdBQUcsTUFBTTtRQUMxQixLQUFLLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxXQUFXLENBQUM7UUFFdEMsTUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUM7UUFDN0MsS0FBSyxDQUFDLEVBQUUsR0FBRyxXQUFXO1FBQ3RCLEtBQUssQ0FBQyxJQUFJLEdBQUcsUUFBUTtRQUNyQixLQUFLLENBQUMsR0FBRyxHQUFHLEdBQUc7UUFDZixLQUFLLENBQUMsR0FBRyxHQUFHLElBQUk7UUFDaEIsS0FBSyxDQUFDLEtBQUssR0FBRyxnREFBTyxFQUFFO1FBQ3ZCLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRTtZQUNyQyxnREFBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDNUIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO1FBQ3ZCLENBQUMsQ0FBQztRQUVGLFNBQVMsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDO1FBQzVCLFNBQVMsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDO0lBQzlCLENBQUM7Q0FDRjs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCMEQ7QUFHNUMsTUFBTSxlQUFlO0lBQ2xDLGdCQUFzQixDQUFDO0lBRWhCLEtBQUssQ0FBQyxTQUFzQixFQUFFLElBQVU7UUFDN0MsTUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUM7UUFDL0MsTUFBTSxDQUFDLEVBQUUsR0FBRyxTQUFTO1FBQ3JCLE1BQU0sQ0FBQyxJQUFJLEdBQUcsUUFBUTtRQUN0QixNQUFNLENBQUMsV0FBVyxHQUFHLGNBQWM7UUFDbkMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUU7WUFDcEMsaURBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7WUFDckMsaURBQVEsQ0FBQyxDQUFDLENBQUM7WUFDWCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO1lBRXhCLE1BQU0sU0FBUyxHQUFHLElBQUksS0FBSyxFQUFFO1lBQzdCLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDL0QsU0FBUyxDQUFDLEdBQUcsR0FBRyxpREFBUSxFQUFFO1FBQzVCLENBQUMsQ0FBQztRQUVGLFNBQVMsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDO0lBQy9CLENBQUM7Q0FDRjs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCZ0Q7QUFHbEMsTUFBTSxpQkFBaUI7SUFDcEMsZ0JBQXNCLENBQUM7SUFFaEIsS0FBSyxDQUFDLFNBQXNCLEVBQUUsSUFBVTtRQUM3QyxNQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQztRQUMvQyxNQUFNLENBQUMsRUFBRSxHQUFHLFdBQVc7UUFDdkIsTUFBTSxDQUFDLElBQUksR0FBRyxRQUFRO1FBQ3RCLE1BQU0sQ0FBQyxXQUFXLEdBQUcsV0FBVztRQUVoQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRTtZQUNwQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO1lBRXhCLE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUc7WUFDMUQsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRztZQUV6RCxNQUFNLFFBQVEsR0FBRyxpREFBUSxFQUFFO1lBQzNCLE1BQU0sbUJBQW1CLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztZQUN0RSxNQUFNLE1BQU0sR0FBRyxHQUFHLG1CQUFtQixJQUFJLFdBQVcsSUFBSSxZQUFZLEVBQUU7WUFFdEUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLE1BQU07WUFDcEMsaURBQVEsQ0FBQyxNQUFNLENBQUM7WUFFaEIsTUFBTSxTQUFTLEdBQUcsSUFBSSxLQUFLLEVBQUU7WUFDN0IsU0FBUyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMvRCxTQUFTLENBQUMsR0FBRyxHQUFHLGlEQUFRLEVBQUU7UUFDNUIsQ0FBQyxDQUFDO1FBRUYsU0FBUyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUM7SUFDL0IsQ0FBQztDQUNGOzs7Ozs7Ozs7Ozs7Ozs7O0FDaENnRDtBQUVsQyxNQUFNLFFBQVE7SUFFM0I7UUFDRSxJQUFJLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDO0lBQzlDLENBQUM7SUFFTSxLQUFLLENBQUMsU0FBc0I7UUFDakMsTUFBTSxLQUFLLEdBQUcsaURBQVEsRUFBRTtRQUV4QixNQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQztRQUM3QyxLQUFLLENBQUMsV0FBVyxHQUFHLGlCQUFpQjtRQUNyQyxLQUFLLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxXQUFXLENBQUM7UUFDdEMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUM7UUFFNUIsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUs7UUFDeEIsS0FBSyxDQUFDLEVBQUUsR0FBRyxXQUFXO1FBQ3RCLEtBQUssQ0FBQyxJQUFJLEdBQUcsS0FBSztRQUNsQixLQUFLLENBQUMsWUFBWSxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUM7UUFDeEMsS0FBSyxDQUFDLEtBQUssR0FBRyxLQUFLO1FBQ25CLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRTtZQUN0QyxJQUFJLENBQUMsQ0FBQyxHQUFHLEtBQUssT0FBTztnQkFBRSxpREFBUSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFDOUMsQ0FBQyxDQUFDO1FBRUYsU0FBUyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUM7SUFDOUIsQ0FBQztDQUNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNCOEI7QUFDZ0I7QUFDakI7QUFDVztBQUNRO0FBQ0k7QUFDYjtBQUNBO0FBRXpCLE1BQU0sSUFBSTtJQVd2QjtRQUNFLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSx3REFBUSxFQUFFO1FBQ2hDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSwwREFBZSxFQUFFO1FBQzVDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLDREQUFpQixFQUFFO1FBQ2hELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSwyREFBWSxFQUFFO1FBQ3RDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSx3REFBUyxFQUFFO1FBQ2hDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxrREFBSSxFQUFFO1FBQ3RCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxrREFBSSxFQUFFO1FBQ3RCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxxREFBVyxFQUFFO1FBQ3BDLElBQUksQ0FBQyxHQUFHLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUM7SUFDMUMsQ0FBQztJQUVNLEtBQUssQ0FBQyxTQUFzQjtRQUNqQyxNQUFNLElBQUksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQztRQUUzQyxNQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQztRQUMxQyxLQUFLLENBQUMsV0FBVyxHQUFHLFVBQVU7UUFDOUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUM7UUFFdkIseUJBQXlCO1FBQ3pCLE1BQU0sWUFBWSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDO1FBRXRELElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQztRQUNuQyxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDO1FBQzlDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQztRQUVoRCxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQztRQUU5Qix3QkFBd0I7UUFDeEIsTUFBTSxXQUFXLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUM7UUFFckQsTUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUM7UUFDNUMsUUFBUSxDQUFDLFdBQVcsR0FBRyxnQkFBZ0I7UUFDdkMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUM7UUFFakMsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQztRQUMxQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDO1FBRXZDLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDO1FBRTdCLGNBQWM7UUFDZCxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxNQUFNO1FBRXBCLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFNUQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO1FBRTFCLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUM7UUFFbEMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUM7SUFDN0IsQ0FBQztDQUNGOzs7Ozs7Ozs7Ozs7Ozs7QUNyRWMsTUFBTSxXQUFXO0lBQzlCLGdCQUFlLENBQUM7SUFFVCxLQUFLLENBQUMsU0FBc0IsRUFBRSxJQUFVO1FBQzdDLE1BQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDO1FBQy9DLE1BQU0sQ0FBQyxXQUFXLEdBQUcsT0FBTztRQUM1QixNQUFNLENBQUMsSUFBSSxHQUFHLFFBQVE7UUFDdEIsTUFBTSxDQUFDLEVBQUUsR0FBRyxPQUFPO1FBQ25CLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUVsRSxTQUFTLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQztJQUMvQixDQUFDO0NBQ0Y7Ozs7Ozs7VUNkRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTm1CO0FBQ3FDO0FBQ2pCO0FBQ1Q7QUFFOUIsTUFBTSxPQUFPLEdBQVksSUFBSSx3REFBTyxDQUFDLGVBQWUsRUFBRSxTQUFTLENBQUM7QUFDaEUsTUFBTSxLQUFLLEdBQUcsbUNBQW1DO0FBQ2pELE1BQU0sSUFBSSxHQUFHLENBQUM7QUFDZCxNQUFNLE9BQU8sR0FBRyxDQUFDO0FBRWpCLGdEQUFPLENBQUMsSUFBSSxDQUFDO0FBQ2IsbURBQVUsQ0FBQyxPQUFPLENBQUM7QUFDbkIsaURBQVEsQ0FBQyxLQUFLLENBQUM7QUFFZixNQUFNLElBQUksR0FBUyxJQUFJLGtEQUFJLEVBQUU7QUFDN0IsTUFBTSxHQUFHLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUM7QUFFMUMsSUFBSSxHQUFHLEVBQUU7SUFDUCxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUNsQixJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztDQUNoQiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2FwcC5zY3NzIiwid2VicGFjazovLy8uL3N0eWxlcy9ub3JtYWxpemUuY3NzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAuc2Nzcz82OTFhIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vY29tbW9uLnRzIiwid2VicGFjazovLy8uL2dhbWUvZ2FtZS50cyIsIndlYnBhY2s6Ly8vLi9nYW1lL3RpbWVyLnRzIiwid2VicGFjazovLy8uL2dyZWV0ZXIvZ3JlZXRlci50cyIsIndlYnBhY2s6Ly8vLi9tYWluL2dyaWQvY29sdW1ucy1pbnB1dC50cyIsIndlYnBhY2s6Ly8vLi9tYWluL2dyaWQvZ3JpZC50cyIsIndlYnBhY2s6Ly8vLi9tYWluL2dyaWQvcm93cy1pbnB1dC50cyIsIndlYnBhY2s6Ly8vLi9tYWluL2ltYWdlL2xvYWQtYnV0dG9uLnRzIiwid2VicGFjazovLy8uL21haW4vaW1hZ2UvcmFuZG9tLWJ1dHRvbi50cyIsIndlYnBhY2s6Ly8vLi9tYWluL2ltYWdlL3VybC1pbnB1dC50cyIsIndlYnBhY2s6Ly8vLi9tYWluL21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vbWFpbi9zdGFydC1idXR0b24udHMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy8uL2FwcC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18gZnJvbSBcIi0hLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMvbm9ybWFsaXplLmNzc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogc2NyZWVuIHNpemVzICovXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQge1xcbiAgY29sb3I6IHZhcigtLWZvbnQtcHJpbWFyeS1jb2xvcik7XFxuICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xcbiAgdGV4dC1zaGFkb3c6IDAgMCAxcHggdHJhbnNwYXJlbnQ7IH1cXG5cXG46cm9vdCB7XFxuICAtLWZpcmUtZW5naW5lLXJlZDogI2NlMjAyOTtcXG4gIC0tYXRsYW50aXM6ICM5N2NkMmQ7XFxuICAtLWxpZ2h0LXBlYS1ncmVlbjogI2M0ZmU4MjtcXG4gIC0tdGl0YW5pdW0teWVsbG93OiAjZWVlNjAwO1xcbiAgLS1nb2xkZW4tcm9kOiAjZWRkYTc0O1xcbiAgLS1yZWJlY2NhLXB1cnBsZTogIzY2MzM5OTtcXG4gIC0tYmx1aXNoLXB1cnBsZTogIzc0M2FkNTtcXG4gIC0tZG9kZ2VyLWJsdWU6ICMxZTkwZmY7XFxuICAtLWRpbW9ycGhvdGhlY2EtbWFnZW50YTogI2Q1M2E5ZDtcXG4gIC0tbmVvbi1waW5rOiAjZjUzNWFhO1xcbiAgLS1saWdodC1wbHVtOiAjOWQ1NzgzO1xcbiAgLS1ib2JvLWdyYXk6ICNiMGIwYjA7XFxuICAtLWJvdWxkZXI6ICM3Nzc3Nzc7XFxuICAtLXN0b3JtLWR1c3Q6ICM2NDY0NjM7XFxuICAtLWJsYWNrLWVlbDogIzQ2M2UzZjtcXG4gIC0tZm9udC13ZWlnaHQ6IDMwMDtcXG4gIC0tZm9udC1wcmltYXJ5OiAnU2Vnb2UgVUkgV2ViZm9udCcsICctYXBwbGUgLSBzeXN0ZW0nLCAnSGVsdmV0aWNhIE5ldWUnLFxcbiAgICAnTHVjaWRhIEdyYW5kZScsIFJvYm90bywgRWJyaW1hLCAnTmlybWFsYSBVSScsIEdhZHVnaSwgJ1NlZ29lIFhib3ggU3ltYm9sJyxcXG4gICAgJ1NlZ29lIFVJIFN5bWJvbCcsICdNZWlyeW8gVUknLCAnS2htZXIgVUknLCBUdW5nYSwgJ0xhbyBVSScsIFJhYXZpLFxcbiAgICAnSXNrb29sYSBQb3RhJywgTGF0aGEsIExlZWxhd2FkZWUsICdNaWNyb3NvZnQgWWFIZWkgVUknLFxcbiAgICAnTWljcm9zb2Z0IEpoZW5nSGVpIFVJJywgJ01hbGd1biBHb3RoaWMnLCAnRXN0cmFuZ2VsbyBFZGVzc2EnLFxcbiAgICAnTWljcm9zb2Z0IEhpbWFsYXlhJywgJ01pY3Jvc29mdCBOZXcgVGFpIEx1ZScsICdNaWNyb3NvZnQgUGhhZ3NQYScsXFxuICAgICdNaWNyb3NvZnQgVGFpIExlJywgJ01pY3Jvc29mdCBZaSBCYWl0aScsICdNb25nb2xpYW4gQmFpdGknLCAnTVYgQm9saScsXFxuICAgICdNeWFubWFyIFRleHQnLCAnQ2FtYnJpYSBNYXRoJztcXG4gIC0tZm9udC1wcmltYXJ5LWNvbG9yOiB2YXIoLS1ib3VsZGVyKTtcXG4gIC0tZm9udC1zZWNvbmRhcnk6ICdTRk1vbm8tUmVndWxhcicsIENvbnNvbGFzLCAnTGliZXJhdGlvbiBNb25vJywgTWVubG8sXFxuICAgIENvdXJpZXIsIG1vbm9zcGFjZTtcXG4gIC0tZm9udC1zZWNvbmRhcnktY29sb3I6IHZhcigtLWJsYWNrLWVlbCk7XFxuICAtLWdyaWQtcm93czogMjtcXG4gIC0tZ3JpZC1jb2x1bW5zOiAyO1xcbiAgLS10aW1lcjogJyc7XFxuICAtLXdpbjogJzAnO1xcbiAgLS1pbWFnZS11cmw6ICcnOyB9XFxuXFxuaDEge1xcbiAgZm9udC1zaXplOiB2YXIoLS10ZXh0LXh4bCk7IH1cXG5cXG5oMiB7XFxuICBmb250LXNpemU6IHZhcigtLXRleHQteGwpOyB9XFxuXFxuaDMge1xcbiAgZm9udC1zaXplOiB2YXIoLS10ZXh0LWxnKTsgfVxcblxcbmg0IHtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tdGV4dC1tZCk7IH1cXG5cXG5zbWFsbCB7XFxuICBmb250LXNpemU6IHZhcigtLXRleHQtc20pOyB9XFxuXFxuYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1mbG93OiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiB2YXIoLS10ZXh0LWJhc2Utc2l6ZSk7XFxuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1wcmltYXJ5KTtcXG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodCk7XFxuICBjb2xvcjogdmFyKC0tZm9udC1zZWNvbmRhcnkpO1xcbiAgLyogc2V0IGJhc2UgdmFsdWVzICovXFxuICAtLXRleHQtYmFzZS1zaXplOiAxZW07XFxuICAtLXRleHQtc2NhbGUtcmF0aW86IDEuMjtcXG4gIC8qIHR5cGUgc2NhbGUgKi9cXG4gIC0tdGV4dC14czogY2FsYygxZW0gLyAodmFyKC0tdGV4dC1zY2FsZS1yYXRpbykgKiB2YXIoLS10ZXh0LXNjYWxlLXJhdGlvKSkpO1xcbiAgLS10ZXh0LXNtOiBjYWxjKDFlbSAvIHZhcigtLXRleHQtc2NhbGUtcmF0aW8pKTtcXG4gIC0tdGV4dC1tZDogY2FsYygxZW0gKiB2YXIoLS10ZXh0LXNjYWxlLXJhdGlvKSk7XFxuICAtLXRleHQtbGc6IGNhbGMoMWVtICogdmFyKC0tdGV4dC1zY2FsZS1yYXRpbykgKiB2YXIoLS10ZXh0LXNjYWxlLXJhdGlvKSk7XFxuICAtLXRleHQteGw6IGNhbGMoXFxuICAgIDFlbSAqIHZhcigtLXRleHQtc2NhbGUtcmF0aW8pICogdmFyKC0tdGV4dC1zY2FsZS1yYXRpbykgKlxcbiAgICAgIHZhcigtLXRleHQtc2NhbGUtcmF0aW8pXFxuICApO1xcbiAgLS10ZXh0LXh4bDogY2FsYyhcXG4gICAgMWVtICogdmFyKC0tdGV4dC1zY2FsZS1yYXRpbykgKiB2YXIoLS10ZXh0LXNjYWxlLXJhdGlvKSAqXFxuICAgICAgdmFyKC0tdGV4dC1zY2FsZS1yYXRpbykgKiB2YXIoLS10ZXh0LXNjYWxlLXJhdGlvKVxcbiAgKTtcXG4gIC0tdGV4dC14eHhsOiBjYWxjKFxcbiAgICAxZW0gKiB2YXIoLS10ZXh0LXNjYWxlLXJhdGlvKSAqIHZhcigtLXRleHQtc2NhbGUtcmF0aW8pICpcXG4gICAgICB2YXIoLS10ZXh0LXNjYWxlLXJhdGlvKSAqIHZhcigtLXRleHQtc2NhbGUtcmF0aW8pICpcXG4gICAgICB2YXIoLS10ZXh0LXNjYWxlLXJhdGlvKVxcbiAgKTsgfVxcbiAgQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XFxuICAgIGJvZHkge1xcbiAgICAgIC0tdGV4dC1iYXNlLXNpemU6IDEuMmVtO1xcbiAgICAgIC0tdGV4dC1zY2FsZS1yYXRpbzogMS4yNTsgfSB9XFxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gICAgYm9keSB7XFxuICAgICAgLS10ZXh0LWJhc2Utc2l6ZTogMS4zZW07XFxuICAgICAgLS10ZXh0LXNjYWxlLXJhdGlvOiAxLjI3OyB9IH1cXG4gIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xcbiAgICBib2R5IHtcXG4gICAgICAtLXRleHQtYmFzZS1zaXplOiAxLjVlbTtcXG4gICAgICAtLXRleHQtc2NhbGUtcmF0aW86IDEuMjg7IH0gfVxcbiAgQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xcbiAgICBib2R5IHtcXG4gICAgICAtLXRleHQtYmFzZS1zaXplOiAxLjhlbTtcXG4gICAgICAtLXRleHQtc2NhbGUtcmF0aW86IDEuMzsgfSB9XFxuXFxuaGVhZGVyIHtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW4tbGVmdDogMTAlO1xcbiAgbWFyZ2luLXJpZ2h0OiAxMCU7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCAjZWU3NzUyLCAjZTczYzdlLCAjMjNhNmQ1LCAjMjNkNWFiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogNDAwJSA0MDAlO1xcbiAgYW5pbWF0aW9uOiBncmFkaWVudCAxNXMgZWFzZSBpbmZpbml0ZTtcXG4gIG1peC1ibGVuZC1tb2RlOiBvdmVybGF5OyB9XFxuXFxuQGtleWZyYW1lcyBncmFkaWVudCB7XFxuICAwJSB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAlIDUwJTsgfVxcbiAgNTAlIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJSA1MCU7IH1cXG4gIDEwMCUge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSA1MCU7IH0gfVxcbiAgaGVhZGVyIGgxIHtcXG4gICAgYW5pbWF0aW9uOiBzbG93bHlBcHBlYXIgZWFzZSA1cztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nLXRvcDogNHJlbTtcXG4gICAgbWl4LWJsZW5kLW1vZGU6IGNvbG9yLWRvZGdlOyB9XFxuXFxuQGtleWZyYW1lcyBzbG93bHlBcHBlYXIge1xcbiAgZnJvbSB7XFxuICAgIG9wYWNpdHk6IDA7IH1cXG4gIHRvIHtcXG4gICAgb3BhY2l0eTogMTsgfSB9XFxuICBoZWFkZXIgcCB7XFxuICAgIGFuaW1hdGlvbjogc2xvd2x5QXBwZWFyIGVhc2UgNXM7XFxuICAgIG1heC13aWR0aDogODAlO1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIG1peC1ibGVuZC1tb2RlOiBjb2xvci1kb2RnZTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBjb2xvcjogdmFyKC0tc3Rvcm0tZHVzdCk7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xcbiAgICBib3JkZXItd2lkdGg6IDFweDtcXG4gICAgcGFkZGluZzogMC4zNzVyZW0gMC42NzVyZW0gMC41cmVtO1xcbiAgICBib3JkZXItaW1hZ2Utc2xpY2U6IDE7XFxuICAgIGJvcmRlci1pbWFnZS1zb3VyY2U6IGxpbmVhci1ncmFkaWVudCh2YXIoLS1kaW1vcnBob3RoZWNhLW1hZ2VudGEpLCB2YXIoLS1yZWJlY2NhLXB1cnBsZSkpO1xcbiAgICBvcGFjaXR5OiAwLjY7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlLWluOyB9XFxuXFxuQGtleWZyYW1lcyBzbG93bHlBcHBlYXIge1xcbiAgZnJvbSB7XFxuICAgIG9wYWNpdHk6IDA7IH1cXG4gIHRvIHtcXG4gICAgb3BhY2l0eTogMTsgfSB9XFxuICAgIGhlYWRlciBwOmhvdmVyIHtcXG4gICAgICBvcGFjaXR5OiAxO1xcbiAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlLWluOyB9XFxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xcbiAgICAgIGhlYWRlciBwIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogODAlOyB9IH1cXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XFxuICAgICAgaGVhZGVyIHAge1xcbiAgICAgICAgbWF4LXdpZHRoOiA1NzZweDtcXG4gICAgICAgIG1hcmdpbjogMWVtIGF1dG8gMmVtO1xcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMzc1ZW07XFxuICAgICAgICBmb250LXNpemU6IDc1JTsgfSB9XFxuICAgIGhlYWRlciBwIGEge1xcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgICBjb2xvcjogZG9kZ2VyYmx1ZTsgfVxcbiAgICAgIGhlYWRlciBwIGE6aG92ZXIge1xcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IH1cXG4gIGhlYWRlciBidXR0b24ge1xcbiAgICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXG4gICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcXG4gICAgdGV4dC1zaGFkb3c6IDAgMCAxcHggdHJhbnNwYXJlbnQ7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgaGVpZ2h0OiAzLjVlbTtcXG4gICAgd2lkdGg6IDMuNWVtO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtc2Vjb25kYXJ5KTtcXG4gICAgbWFyZ2luOiAycmVtIGF1dG87XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ibHVpc2gtcHVycGxlKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjVzIGVhc2U7IH1cXG4gICAgaGVhZGVyIGJ1dHRvbjpiZWZvcmUge1xcbiAgICAgIGNvbnRlbnQ6ICcnO1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LXBsdW0pO1xcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgdmFyKC0tZG9kZ2VyLWJsdWUpLCB2YXIoLS1yZWJlY2NhLXB1cnBsZSksIHZhcigtLWRvZGdlci1ibHVlKSwgdmFyKC0tZGltb3JwaG90aGVjYS1tYWdlbnRhKSwgdmFyKC0tcmViZWNjYS1wdXJwbGUpLCByZ2JhKDI1NSwgMCwgMCwgMC41KSwgdmFyKC0tZG9kZ2VyLWJsdWUpKTtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgdG9wOiAtNHB4O1xcbiAgICAgIGxlZnQ6IC00cHg7XFxuICAgICAgYmFja2dyb3VuZC1zaXplOiA0MDAlO1xcbiAgICAgIHotaW5kZXg6IC0xO1xcbiAgICAgIGZpbHRlcjogYmx1cig5cHgpO1xcbiAgICAgIHdpZHRoOiBjYWxjKDEwMCUgKyAxMXB4KTtcXG4gICAgICBoZWlnaHQ6IGNhbGMoMTAwJSArIDEzcHgpO1xcbiAgICAgIGFuaW1hdGlvbjogZ2xvd2luZyAyMHMgbGluZWFyIGluZmluaXRlO1xcbiAgICAgIG9wYWNpdHk6IDA7XFxuICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzIGVhc2UtaW4tb3V0O1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTsgfVxcbiAgICBoZWFkZXIgYnV0dG9uOmFjdGl2ZSwgaGVhZGVyIGJ1dHRvbjpmb2N1cywgaGVhZGVyIGJ1dHRvbjpob3ZlciB7XFxuICAgICAgb3V0bGluZTogMDtcXG4gICAgICBib3JkZXItc3R5bGU6IG91dHNldDtcXG4gICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuNXMgZWFzZTsgfVxcbiAgICAgIGhlYWRlciBidXR0b246YWN0aXZlOmJlZm9yZSwgaGVhZGVyIGJ1dHRvbjpmb2N1czpiZWZvcmUsIGhlYWRlciBidXR0b246aG92ZXI6YmVmb3JlIHtcXG4gICAgICAgIG9wYWNpdHk6IDE7IH1cXG4gICAgaGVhZGVyIGJ1dHRvbjphZnRlciB7XFxuICAgICAgei1pbmRleDogLTE7XFxuICAgICAgY29udGVudDogJyc7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1yZWJlY2NhLXB1cnBsZSk7XFxuICAgICAgbGVmdDogMDtcXG4gICAgICB0b3A6IDA7XFxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4zNSkgMHB4IDVweCAxNXB4OyB9XFxuXFxuQGtleWZyYW1lcyBnbG93aW5nIHtcXG4gIDAlIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwOyB9XFxuICA1MCUge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA0MDAlIDA7IH1cXG4gIDEwMCUge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDA7IH0gfVxcblxcbmJvZHkgPiBtYWluIGlucHV0IHtcXG4gIGFuaW1hdGlvbjogYmxhY2tSYWluYm93IGVhc2UgM3M7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgbGluZS1oZWlnaHQ6IDFyZW07XFxuICBwYWRkaW5nOiAwLjM3NXJlbSAwLjVyZW07XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib2JvLWdyYXkpO1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtc2Vjb25kYXJ5KTtcXG4gIGZvbnQtc2l6ZTogc21hbGw7IH1cXG5cXG5Aa2V5ZnJhbWVzIGJsYWNrUmFpbmJvdyB7XFxuICBmcm9tIHtcXG4gICAgY29sb3I6IHZhcigtLWZpcmUtZW5naW5lLXJlZCk7XFxuICAgIG9wYWNpdHk6IDA7IH1cXG4gIHRvIHtcXG4gICAgY29sb3I6IGluaGVyaXQ7XFxuICAgIG9wYWNpdHk6IDE7IH0gfVxcbiAgYm9keSA+IG1haW4gaW5wdXQjaW1hZ2UtdXJsIHtcXG4gICAgbWluLXdpZHRoOiA0MGNoO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDAuMjVyZW07IH1cXG5cXG5ib2R5ID4gbWFpbiBsYWJlbCB7XFxuICBhbmltYXRpb246IGJsYWNrUmFpbmJvdyBlYXNlIDNzO1xcbiAgZm9udC1zaXplOiAxLjEyNXJlbTtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICBsaW5lLWhlaWdodDogMnJlbTsgfVxcblxcbkBrZXlmcmFtZXMgYmxhY2tSYWluYm93IHtcXG4gIGZyb20ge1xcbiAgICBjb2xvcjogdmFyKC0tZmlyZS1lbmdpbmUtcmVkKTtcXG4gICAgb3BhY2l0eTogMDsgfVxcbiAgdG8ge1xcbiAgICBjb2xvcjogaW5oZXJpdDtcXG4gICAgb3BhY2l0eTogMTsgfSB9XFxuICBib2R5ID4gbWFpbiBsYWJlbFtmb3I9J2dyaWQtcm93cyddLCBib2R5ID4gbWFpbiBsYWJlbFtmb3I9J2dyaWQtY29sdW1ucyddIHtcXG4gICAgZm9udC1zaXplOiAxcmVtOyB9XFxuXFxuYm9keSA+IG1haW4gYnV0dG9uIHtcXG4gIGZvbnQtc2l6ZTogc21hbGw7XFxuICBhbmltYXRpb246IGJsYWNrUmFpbmJvdyBlYXNlIDNzO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gIHBhZGRpbmc6IDAuMzc1cmVtIDAuNXJlbTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvYm8tZ3JheSk7XFxuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1zZWNvbmRhcnkpO1xcbiAgY29sb3I6IHZhcigtLWRpbW9ycGhvdGhlY2EtbWFnZW50YSk7XFxuICBsaW5lLWhlaWdodDogMC43NXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgY3Vyc29yOiBwb2ludGVyOyB9XFxuXFxuQGtleWZyYW1lcyBibGFja1JhaW5ib3cge1xcbiAgZnJvbSB7XFxuICAgIGNvbG9yOiB2YXIoLS1maXJlLWVuZ2luZS1yZWQpO1xcbiAgICBvcGFjaXR5OiAwOyB9XFxuICB0byB7XFxuICAgIGNvbG9yOiBpbmhlcml0O1xcbiAgICBvcGFjaXR5OiAxOyB9IH1cXG4gIGJvZHkgPiBtYWluIGJ1dHRvbjpub3QoOmxhc3Qtb2YtdHlwZSkge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDAuMjVyZW07IH1cXG4gIEBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xcbiAgICBib2R5ID4gbWFpbiBidXR0b24ge1xcbiAgICAgIGxpbmUtaGVpZ2h0OiAxcmVtOyB9IH1cXG5cXG5ib2R5ID4gbWFpbiBpbnB1dFt0eXBlPSdudW1iZXInXSB7XFxuICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxuICBtYXgtd2lkdGg6IDVjaDsgfVxcblxcbmJvZHkgPiBtYWluICNncmlkIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGFuaW1hdGlvbjogYmxhY2tSYWluYm93IGVhc2UgM3M7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkO1xcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XFxuICBib3JkZXItaW1hZ2Utc2xpY2U6IDE7XFxuICBib3JkZXItaW1hZ2Utc291cmNlOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCBkb2RnZXJibHVlLCBkb2RnZXJibHVlKTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHZhcigtLWltYWdlLXVybCk7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XFxuICBoZWlnaHQ6IDgwdnc7XFxuICBtYXgtaGVpZ2h0OiA3NXZtaW47XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQodmFyKC0tZ3JpZC1jb2x1bW5zKSwgMWZyKTsgfVxcblxcbkBrZXlmcmFtZXMgYmxhY2tSYWluYm93IHtcXG4gIGZyb20ge1xcbiAgICBjb2xvcjogdmFyKC0tZmlyZS1lbmdpbmUtcmVkKTtcXG4gICAgb3BhY2l0eTogMDsgfVxcbiAgdG8ge1xcbiAgICBjb2xvcjogaW5oZXJpdDtcXG4gICAgb3BhY2l0eTogMTsgfSB9XFxuICBib2R5ID4gbWFpbiAjZ3JpZCBhcmVhIHtcXG4gICAgY3Vyc29yOiBtb3ZlO1xcbiAgICBjdXJzb3I6IGdyYWI7XFxuICAgIGN1cnNvcjogLW1vei1ncmFiO1xcbiAgICBjdXJzb3I6IC13ZWJraXQtZ3JhYjtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMzAsIDE0NCwgMjU1LCAwLjUpO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB2YXIoLS1pbWFnZS11cmwpO1xcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IGJvcmRlci1ib3g7XFxuICAgIGJvcmRlci1pbWFnZS1zbGljZTogMTtcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZENvbG9yIDAuMXMgZWFzZS1vdXQ7XFxuICAgIGJhY2tncm91bmQtYmxlbmQtbW9kZTogbGlnaHRlbjsgfVxcbiAgICBib2R5ID4gbWFpbiAjZ3JpZCBhcmVhOmFjdGl2ZSB7XFxuICAgICAgY3Vyc29yOiBncmFiYmluZztcXG4gICAgICBjdXJzb3I6IC1tb3otZ3JhYmJpbmc7XFxuICAgICAgY3Vyc29yOiAtd2Via2l0LWdyYWJiaW5nOyB9XFxuICAgIGJvZHkgPiBtYWluICNncmlkIGFyZWE6aG92ZXIge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzAsIDE0NCwgMjU1LCAwLjUpOyB9XFxuICBib2R5ID4gbWFpbiAjZ3JpZDphZnRlciB7XFxuICAgIGNvbnRlbnQ6IHZhcigtLXRpbWVyKTtcXG4gICAgY29sb3I6IHZhcigtLW5lb24tcGluayk7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtc2Vjb25kYXJ5KTtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgIG9wYWNpdHk6IDAuNzsgfVxcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gICAgICBib2R5ID4gbWFpbiAjZ3JpZDphZnRlciB7XFxuICAgICAgICB0b3A6IDF2bWluO1xcbiAgICAgICAgb3BhY2l0eTogMC44OyB9IH1cXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XFxuICAgICAgYm9keSA+IG1haW4gI2dyaWQ6YWZ0ZXIge1xcbiAgICAgICAgb3BhY2l0eTogMC45O1xcbiAgICAgICAgdG9wOiAydm1pbjsgfSB9XFxuXFxuYm9keSA+IG1haW4ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogODAlO1xcbiAgcGFkZGluZy1sZWZ0OiAxMCU7XFxuICBwYWRkaW5nLXJpZ2h0OiAxMCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIHBhZGRpbmctYm90dG9tOiA1ZW07IH1cXG4gIGJvZHkgPiBtYWluIGgyIHtcXG4gICAgYW5pbWF0aW9uOiBibGFja1JhaW5ib3cgZWFzZSAzcztcXG4gICAgcGFkZGluZy10b3A6IDNyZW07IH1cXG5cXG5Aa2V5ZnJhbWVzIGJsYWNrUmFpbmJvdyB7XFxuICBmcm9tIHtcXG4gICAgY29sb3I6IHZhcigtLWZpcmUtZW5naW5lLXJlZCk7XFxuICAgIG9wYWNpdHk6IDA7IH1cXG4gIHRvIHtcXG4gICAgY29sb3I6IGluaGVyaXQ7XFxuICAgIG9wYWNpdHk6IDE7IH0gfVxcbiAgYm9keSA+IG1haW4gc2VjdGlvbiB7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBsaW5lLWhlaWdodDogMnJlbTtcXG4gICAgcGFkZGluZy1ib3R0b206IDFyZW07IH1cXG4gICAgYm9keSA+IG1haW4gc2VjdGlvbiBwIHtcXG4gICAgICBhbmltYXRpb246IGJsYWNrUmFpbmJvdyBlYXNlIDNzO1xcbiAgICAgIG1hcmdpbjogMDtcXG4gICAgICBmb250LXNpemU6IDEuMTI1cmVtOyB9XFxuXFxuQGtleWZyYW1lcyBibGFja1JhaW5ib3cge1xcbiAgZnJvbSB7XFxuICAgIGNvbG9yOiB2YXIoLS1maXJlLWVuZ2luZS1yZWQpO1xcbiAgICBvcGFjaXR5OiAwOyB9XFxuICB0byB7XFxuICAgIGNvbG9yOiBpbmhlcml0O1xcbiAgICBvcGFjaXR5OiAxOyB9IH1cXG4gIGJvZHkgPiBtYWluICNzdGFydCB7XFxuICAgIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XFxuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcbiAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xcbiAgICB0ZXh0LXNoYWRvdzogMCAwIDFweCB0cmFuc3BhcmVudDtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBoZWlnaHQ6IDMuNWVtO1xcbiAgICB3aWR0aDogMy41ZW07XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1zZWNvbmRhcnkpO1xcbiAgICBtYXJnaW46IDJyZW0gYXV0bztcXG4gICAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWJsdWlzaC1wdXJwbGUpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuNXMgZWFzZTtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrOyB9XFxuICAgIGJvZHkgPiBtYWluICNzdGFydDpiZWZvcmUge1xcbiAgICAgIGNvbnRlbnQ6ICcnO1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LXBsdW0pO1xcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgdmFyKC0tZG9kZ2VyLWJsdWUpLCB2YXIoLS1yZWJlY2NhLXB1cnBsZSksIHZhcigtLWRvZGdlci1ibHVlKSwgdmFyKC0tZGltb3JwaG90aGVjYS1tYWdlbnRhKSwgdmFyKC0tcmViZWNjYS1wdXJwbGUpLCByZ2JhKDI1NSwgMCwgMCwgMC41KSwgdmFyKC0tZG9kZ2VyLWJsdWUpKTtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgdG9wOiAtNHB4O1xcbiAgICAgIGxlZnQ6IC00cHg7XFxuICAgICAgYmFja2dyb3VuZC1zaXplOiA0MDAlO1xcbiAgICAgIHotaW5kZXg6IC0xO1xcbiAgICAgIGZpbHRlcjogYmx1cig5cHgpO1xcbiAgICAgIHdpZHRoOiBjYWxjKDEwMCUgKyAxMXB4KTtcXG4gICAgICBoZWlnaHQ6IGNhbGMoMTAwJSArIDEzcHgpO1xcbiAgICAgIGFuaW1hdGlvbjogZ2xvd2luZyAyMHMgbGluZWFyIGluZmluaXRlO1xcbiAgICAgIG9wYWNpdHk6IDA7XFxuICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzIGVhc2UtaW4tb3V0O1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTsgfVxcbiAgICBib2R5ID4gbWFpbiAjc3RhcnQ6YWN0aXZlLCBib2R5ID4gbWFpbiAjc3RhcnQ6Zm9jdXMsIGJvZHkgPiBtYWluICNzdGFydDpob3ZlciB7XFxuICAgICAgb3V0bGluZTogMDtcXG4gICAgICBib3JkZXItc3R5bGU6IG91dHNldDtcXG4gICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuNXMgZWFzZTsgfVxcbiAgICAgIGJvZHkgPiBtYWluICNzdGFydDphY3RpdmU6YmVmb3JlLCBib2R5ID4gbWFpbiAjc3RhcnQ6Zm9jdXM6YmVmb3JlLCBib2R5ID4gbWFpbiAjc3RhcnQ6aG92ZXI6YmVmb3JlIHtcXG4gICAgICAgIG9wYWNpdHk6IDE7IH1cXG4gICAgYm9keSA+IG1haW4gI3N0YXJ0OmFmdGVyIHtcXG4gICAgICB6LWluZGV4OiAtMTtcXG4gICAgICBjb250ZW50OiAnJztcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLXJlYmVjY2EtcHVycGxlKTtcXG4gICAgICBsZWZ0OiAwO1xcbiAgICAgIHRvcDogMDtcXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjM1KSAwcHggNXB4IDE1cHg7IH1cXG5cXG5Aa2V5ZnJhbWVzIGdsb3dpbmcge1xcbiAgMCUge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDA7IH1cXG4gIDUwJSB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDQwMCUgMDsgfVxcbiAgMTAwJSB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgMDsgfSB9XFxuXFxuI292ZXJsYXkge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ3NDdlYjtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXNlY29uZGFyeSk7XFxuICBhbmltYXRpb246IDNzIDAuMzc1cyBjdWJpYy1iZXppZXIoMC45LCAwLCAwLjEsIDEpIGZvcndhcmRzIGJhY2tncm91bmRfY29sb3I7IH1cXG5cXG5Aa2V5ZnJhbWVzIGJhY2tncm91bmRfY29sb3Ige1xcbiAgMzMuMzMzMzMlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ViNDdiNDsgfVxcbiAgNjYuNjY2NjclIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ViYjQ0NzsgfVxcbiAgMTAwJSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0N2ViNDc7IH1cXG4gIDEzMy4zMzMzMyUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDdiNGViOyB9IH1cXG5cXG4jb3ZlcmxheSB7XFxuICB3aWR0aDogNTB2bWluO1xcbiAgaGVpZ2h0OiA1MHZtaW47XFxuICBmb250LXNpemU6IDI1dm1pbjtcXG4gIHRleHQtc2hhZG93OiAyLjV2bWluIDIuNXZtaW4gNXZtaW4gcmdiYSgwLCAwLCAwLCAwLjEyNSk7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDsgfVxcbiAgI292ZXJsYXk6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIjNcXFwiO1xcbiAgICBhbmltYXRpb246IDNzIDAuNXMgZm9yd2FyZHMgdGltZXJfY291bnRkb3duLCAxcyAwLjM3NXMgMyB0aW1lcl9iZWF0OyB9XFxuXFxuQGtleWZyYW1lcyB0aW1lcl9iZWF0IHtcXG4gIDQwJSwgODAlIHtcXG4gICAgdHJhbnNmb3JtOiBub25lOyB9XFxuICA1MCUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMTI1KTsgfSB9XFxuXFxuQGtleWZyYW1lcyB0aW1lcl9jb3VudGRvd24ge1xcbiAgMCUge1xcbiAgICBjb250ZW50OiBcXFwiM1xcXCI7IH1cXG4gIDMzLjMzMzMzJSB7XFxuICAgIGNvbnRlbnQ6IFxcXCIyXFxcIjsgfVxcbiAgNjYuNjY2NjclIHtcXG4gICAgY29udGVudDogXFxcIjFcXFwiOyB9XFxuICAxMDAlIHtcXG4gICAgY29udGVudDogJ2dvISc7IH0gfVxcbiAgI292ZXJsYXk6YWZ0ZXIge1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHotaW5kZXg6IC0xMDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xMjUpO1xcbiAgICBhbmltYXRpb246IDNzIDAuNXMgbGluZWFyIGZvcndhcmRzIHRpbWVyX2luZGljYXRvcjsgfVxcblxcbkBrZXlmcmFtZXMgdGltZXJfaW5kaWNhdG9yIHtcXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSk7IH0gfVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3N0eWxlcy9zY3JlZW4tc2l6ZXMuc2Nzc1wiLFwid2VicGFjazovLy4vc3R5bGVzL2ZvbnRzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3N0eWxlcy9taXhpbnMvaW1wcm92ZS1sZWdpYmlsaXR5LnNjc3NcIixcIndlYnBhY2s6Ly8uL2FwcC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zdHlsZXMvY29sb3JzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3N0eWxlcy90eXBlLXNjYWxlcy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zdHlsZXMvYm9keS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9ncmVldGVyL2dyZWV0ZXIuc2Nzc1wiLFwid2VicGFjazovLy4vc3R5bGVzL21peGlucy90ZXh0LWZhZGUtaW4uc2Nzc1wiLFwid2VicGFjazovLy4vc3R5bGVzL21peGlucy9zaGlubnktYnV0dG9uLnNjc3NcIixcIndlYnBhY2s6Ly8uL21haW4vaW1hZ2UvdXJsLWlucHV0LnNjc3NcIixcIndlYnBhY2s6Ly8uL21haW4vaW1hZ2UvaW1hZ2UtYnV0dG9ucy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9tYWluL2dyaWQvZ3JpZC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zdHlsZXMvbWl4aW5zL2dyYWItY3Vyc29yLnNjc3NcIixcIndlYnBhY2s6Ly8uL21haW4vbWFpbi5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9nYW1lL2NvdW50ZG93bi5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGlCQUFBO0FDa0JBOzs7O0VBSUUsZ0NBQWdDO0VDckJoQyxrQ0FBa0M7RUFDbEMsbUNBQW1DO0VBQ25DLGtDQUFrQztFQUNsQyxnQ0FBZ0MsRUFBQTs7QUNFbEM7RUNMRSwwQkFBa0I7RUFDbEIsbUJBQVc7RUFDWCwwQkFBa0I7RUFDbEIsMEJBQWtCO0VBQ2xCLHFCQUFhO0VBQ2IseUJBQWlCO0VBQ2pCLHdCQUFnQjtFQUNoQixzQkFBYztFQUNkLGdDQUF3QjtFQUN4QixvQkFBWTtFQUNaLHFCQUFhO0VBQ2Isb0JBQVk7RUFDWixrQkFBVTtFQUNWLHFCQUFhO0VBQ2Isb0JBQVk7RUhaWixrQkFBYztFQUNkOzs7Ozs7O2tDQUFlO0VBUWYsb0NBQXFCO0VBQ3JCO3NCQUFpQjtFQUVqQix3Q0FBdUI7RUVMdkIsY0FBWTtFQUNaLGlCQUFlO0VBQ2YsV0FBUTtFQUNSLFVBQU07RUFDTixlQUFZLEVBQUE7O0FFZ0NkO0VBQ0UsMEJBQTBCLEVBQUE7O0FBRzVCO0VBQ0UseUJBQXlCLEVBQUE7O0FBRzNCO0VBQ0UseUJBQXlCLEVBQUE7O0FB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RSxrQkFBa0I7RUFFbEIseUJBQTRDO0VBQzVDLGtDQUFrQztFQUNsQywyRUFDd0QsRUFBQTs7QUFHdEQ7RUFFSTtJQUVFLHlCQUFtRCxFQUFBO0VBRnJEO0lBRUUseUJBQW1ELEVBQUE7RUFGckQ7SUFFRSx5QkFBbUQsRUFBQTtFQUZyRDtJQUVFLHlCQUFtRCxFQUFBLEVBQUE7O0FBTzdEO0VBQ0UsYUFBYTtFQUNiLGNBQWM7RUFFZCxpQkFBaUI7RUFDakIsdURBQW1EO0VBQ25ELGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osV0FBVztFQUNYLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osZ0JBQWdCLEVBQUE7RUFkbEI7SUFpQkksWUFBMkI7SUFFM0IsbUVBRTJFLEVBQUE7O0FBR3pFO0VBQ0U7SUFFRSxlQUFlLEVBQUE7RUFFakI7SUFDRSx1QkFBdUIsRUFBQSxFQUFBOztBQU0zQjtFQUVJO0lBS0ksWUFBcUIsRUFBQTtFQUx6QjtJQUtJLFlBQXFCLEVBQUE7RUFMekI7SUFLSSxZQUFxQixFQUFBO0VBTHpCO0lBR0ksY0FBYyxFQUFBLEVBQUE7RUF6QzVCO0lBbURJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxhQUFhO0lBQ2IsV0FBVztJQUNYLFlBQVk7SUFDWixzQ0FBNEI7SUFDNUIsa0RBQ2lCLEVBQUE7O0FBR2Y7RUFDRTtJQUNFLDJCQUEyQixFQUFBLEVBQUFcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogc2NyZWVuIHNpemVzICovXFxuJHNjcmVlbi1zbS1taW46IDU3NnB4OyAvLyBTbWFsbCB0YWJsZXRzIGFuZCBsYXJnZSBzbWFydHBob25lcyAobGFuZHNjYXBlIHZpZXcpXFxuJHNjcmVlbi1tZC1taW46IDc2OHB4OyAvLyBTbWFsbCB0YWJsZXRzIChwb3J0cmFpdCB2aWV3KVxcbiRzY3JlZW4tbGctbWluOiA5OTJweDsgLy8gVGFibGV0cyBhbmQgc21hbGwgZGVza3RvcHNcXG4kc2NyZWVuLXhsLW1pbjogMTIwMHB4OyAvLyBMYXJnZSB0YWJsZXRzIGFuZCBkZXNrdG9wc1xcblxcbi8vIFNtYWxsIGRldmljZXNcXG5AbWl4aW4gc20ge1xcbiAgQG1lZGlhIChtaW4td2lkdGg6ICN7JHNjcmVlbi1zbS1taW59KSB7XFxuICAgIEBjb250ZW50O1xcbiAgfVxcbn1cXG5cXG4vLyBNZWRpdW0gZGV2aWNlc1xcbkBtaXhpbiBtZCB7XFxuICBAbWVkaWEgKG1pbi13aWR0aDogI3skc2NyZWVuLW1kLW1pbn0pIHtcXG4gICAgQGNvbnRlbnQ7XFxuICB9XFxufVxcblxcbi8vIExhcmdlIGRldmljZXNcXG5AbWl4aW4gbGcge1xcbiAgQG1lZGlhIChtaW4td2lkdGg6ICN7JHNjcmVlbi1sZy1taW59KSB7XFxuICAgIEBjb250ZW50O1xcbiAgfVxcbn1cXG5cXG4vLyBFeHRyYSBsYXJnZSBkZXZpY2VzXFxuQG1peGluIHhsIHtcXG4gIEBtZWRpYSAobWluLXdpZHRoOiAjeyRzY3JlZW4teGwtbWlufSkge1xcbiAgICBAY29udGVudDtcXG4gIH1cXG59XFxuXCIsXCJAaW1wb3J0ICdtaXhpbnMvaW1wcm92ZS1sZWdpYmlsaXR5JztcXG5cXG5AbWl4aW4gZm9udHMge1xcbiAgLS1mb250LXdlaWdodDogMzAwO1xcbiAgLS1mb250LXByaW1hcnk6ICdTZWdvZSBVSSBXZWJmb250JywgJy1hcHBsZSAtIHN5c3RlbScsICdIZWx2ZXRpY2EgTmV1ZScsXFxuICAgICdMdWNpZGEgR3JhbmRlJywgUm9ib3RvLCBFYnJpbWEsICdOaXJtYWxhIFVJJywgR2FkdWdpLCAnU2Vnb2UgWGJveCBTeW1ib2wnLFxcbiAgICAnU2Vnb2UgVUkgU3ltYm9sJywgJ01laXJ5byBVSScsICdLaG1lciBVSScsIFR1bmdhLCAnTGFvIFVJJywgUmFhdmksXFxuICAgICdJc2tvb2xhIFBvdGEnLCBMYXRoYSwgTGVlbGF3YWRlZSwgJ01pY3Jvc29mdCBZYUhlaSBVSScsXFxuICAgICdNaWNyb3NvZnQgSmhlbmdIZWkgVUknLCAnTWFsZ3VuIEdvdGhpYycsICdFc3RyYW5nZWxvIEVkZXNzYScsXFxuICAgICdNaWNyb3NvZnQgSGltYWxheWEnLCAnTWljcm9zb2Z0IE5ldyBUYWkgTHVlJywgJ01pY3Jvc29mdCBQaGFnc1BhJyxcXG4gICAgJ01pY3Jvc29mdCBUYWkgTGUnLCAnTWljcm9zb2Z0IFlpIEJhaXRpJywgJ01vbmdvbGlhbiBCYWl0aScsICdNViBCb2xpJyxcXG4gICAgJ015YW5tYXIgVGV4dCcsICdDYW1icmlhIE1hdGgnO1xcbiAgLS1mb250LXByaW1hcnktY29sb3I6IHZhcigtLWJvdWxkZXIpO1xcbiAgLS1mb250LXNlY29uZGFyeTogJ1NGTW9uby1SZWd1bGFyJywgQ29uc29sYXMsICdMaWJlcmF0aW9uIE1vbm8nLCBNZW5sbyxcXG4gICAgQ291cmllciwgbW9ub3NwYWNlO1xcbiAgLS1mb250LXNlY29uZGFyeS1jb2xvcjogdmFyKC0tYmxhY2stZWVsKTtcXG59XFxuXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQge1xcbiAgY29sb3I6IHZhcigtLWZvbnQtcHJpbWFyeS1jb2xvcik7XFxuICBAaW5jbHVkZSBpbXByb3ZlLWxlZ2liaWxpdHk7XFxufVxcblwiLFwiQG1peGluIGltcHJvdmUtbGVnaWJpbGl0eSB7XFxuICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xcbiAgdGV4dC1zaGFkb3c6IDAgMCAxcHggdHJhbnNwYXJlbnQ7XFxufVxcblwiLFwiQGltcG9ydCAnc3R5bGVzL25vcm1hbGl6ZS5jc3MnO1xcbkBpbXBvcnQgJ3N0eWxlcy9zY3JlZW4tc2l6ZXMnO1xcblxcbkBpbXBvcnQgJ3N0eWxlcy9jb2xvcnMnO1xcbkBpbXBvcnQgJ3N0eWxlcy9mb250cyc7XFxuXFxuOnJvb3Qge1xcbiAgQGluY2x1ZGUgY29sb3JzO1xcbiAgQGluY2x1ZGUgZm9udHM7XFxuXFxuICAtLWdyaWQtcm93czogMjtcXG4gIC0tZ3JpZC1jb2x1bW5zOiAyO1xcbiAgLS10aW1lcjogJyc7XFxuICAtLXdpbjogJzAnO1xcbiAgLS1pbWFnZS11cmw6ICcnO1xcbn1cXG5cXG5AaW1wb3J0ICdzdHlsZXMvYm9keSc7XFxuQGltcG9ydCAnZ3JlZXRlci9ncmVldGVyJztcXG5AaW1wb3J0ICdtYWluL21haW4nO1xcbkBpbXBvcnQgJ2dhbWUvY291bnRkb3duJztcXG5cIixcIkBtaXhpbiBjb2xvcnMge1xcbiAgLS1maXJlLWVuZ2luZS1yZWQ6ICNjZTIwMjk7XFxuICAtLWF0bGFudGlzOiAjOTdjZDJkO1xcbiAgLS1saWdodC1wZWEtZ3JlZW46ICNjNGZlODI7XFxuICAtLXRpdGFuaXVtLXllbGxvdzogI2VlZTYwMDtcXG4gIC0tZ29sZGVuLXJvZDogI2VkZGE3NDtcXG4gIC0tcmViZWNjYS1wdXJwbGU6ICM2NjMzOTk7XFxuICAtLWJsdWlzaC1wdXJwbGU6ICM3NDNhZDU7XFxuICAtLWRvZGdlci1ibHVlOiAjMWU5MGZmO1xcbiAgLS1kaW1vcnBob3RoZWNhLW1hZ2VudGE6ICNkNTNhOWQ7XFxuICAtLW5lb24tcGluazogI2Y1MzVhYTtcXG4gIC0tbGlnaHQtcGx1bTogIzlkNTc4MztcXG4gIC0tYm9iby1ncmF5OiAjYjBiMGIwO1xcbiAgLS1ib3VsZGVyOiAjNzc3Nzc3O1xcbiAgLS1zdG9ybS1kdXN0OiAjNjQ2NDYzO1xcbiAgLS1ibGFjay1lZWw6ICM0NjNlM2Y7XFxufVxcblwiLFwiLy8gRXh0cmEgbGFyZ2UgZGV2aWNlc1xcbkBtaXhpbiB0eXBlLXNjYWxlcyB7XFxuICAvKiBzZXQgYmFzZSB2YWx1ZXMgKi9cXG4gIC0tdGV4dC1iYXNlLXNpemU6IDFlbTtcXG4gIC0tdGV4dC1zY2FsZS1yYXRpbzogMS4yO1xcblxcbiAgLyogdHlwZSBzY2FsZSAqL1xcbiAgLS10ZXh0LXhzOiBjYWxjKDFlbSAvICh2YXIoLS10ZXh0LXNjYWxlLXJhdGlvKSAqIHZhcigtLXRleHQtc2NhbGUtcmF0aW8pKSk7XFxuICAtLXRleHQtc206IGNhbGMoMWVtIC8gdmFyKC0tdGV4dC1zY2FsZS1yYXRpbykpO1xcbiAgLS10ZXh0LW1kOiBjYWxjKDFlbSAqIHZhcigtLXRleHQtc2NhbGUtcmF0aW8pKTtcXG4gIC0tdGV4dC1sZzogY2FsYygxZW0gKiB2YXIoLS10ZXh0LXNjYWxlLXJhdGlvKSAqIHZhcigtLXRleHQtc2NhbGUtcmF0aW8pKTtcXG4gIC0tdGV4dC14bDogY2FsYyhcXG4gICAgMWVtICogdmFyKC0tdGV4dC1zY2FsZS1yYXRpbykgKiB2YXIoLS10ZXh0LXNjYWxlLXJhdGlvKSAqXFxuICAgICAgdmFyKC0tdGV4dC1zY2FsZS1yYXRpbylcXG4gICk7XFxuICAtLXRleHQteHhsOiBjYWxjKFxcbiAgICAxZW0gKiB2YXIoLS10ZXh0LXNjYWxlLXJhdGlvKSAqIHZhcigtLXRleHQtc2NhbGUtcmF0aW8pICpcXG4gICAgICB2YXIoLS10ZXh0LXNjYWxlLXJhdGlvKSAqIHZhcigtLXRleHQtc2NhbGUtcmF0aW8pXFxuICApO1xcbiAgLS10ZXh0LXh4eGw6IGNhbGMoXFxuICAgIDFlbSAqIHZhcigtLXRleHQtc2NhbGUtcmF0aW8pICogdmFyKC0tdGV4dC1zY2FsZS1yYXRpbykgKlxcbiAgICAgIHZhcigtLXRleHQtc2NhbGUtcmF0aW8pICogdmFyKC0tdGV4dC1zY2FsZS1yYXRpbykgKlxcbiAgICAgIHZhcigtLXRleHQtc2NhbGUtcmF0aW8pXFxuICApO1xcblxcbiAgQGluY2x1ZGUgc20ge1xcbiAgICAtLXRleHQtYmFzZS1zaXplOiAxLjJlbTtcXG4gICAgLS10ZXh0LXNjYWxlLXJhdGlvOiAxLjI1O1xcbiAgfVxcblxcbiAgQGluY2x1ZGUgbWQge1xcbiAgICAtLXRleHQtYmFzZS1zaXplOiAxLjNlbTtcXG4gICAgLS10ZXh0LXNjYWxlLXJhdGlvOiAxLjI3O1xcbiAgfVxcblxcbiAgQGluY2x1ZGUgbGcge1xcbiAgICAtLXRleHQtYmFzZS1zaXplOiAxLjVlbTtcXG4gICAgLS10ZXh0LXNjYWxlLXJhdGlvOiAxLjI4O1xcbiAgfVxcblxcbiAgQGluY2x1ZGUgeGwge1xcbiAgICAtLXRleHQtYmFzZS1zaXplOiAxLjhlbTtcXG4gICAgLS10ZXh0LXNjYWxlLXJhdGlvOiAxLjM7XFxuICB9XFxufVxcblxcbmgxIHtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tdGV4dC14eGwpO1xcbn1cXG5cXG5oMiB7XFxuICBmb250LXNpemU6IHZhcigtLXRleHQteGwpO1xcbn1cXG5cXG5oMyB7XFxuICBmb250LXNpemU6IHZhcigtLXRleHQtbGcpO1xcbn1cXG5cXG5oNCB7XFxuICBmb250LXNpemU6IHZhcigtLXRleHQtbWQpO1xcbn1cXG5cXG5zbWFsbCB7XFxuICBmb250LXNpemU6IHZhcigtLXRleHQtc20pO1xcbn1cXG5cIixcIkBpbXBvcnQgJ3R5cGUtc2NhbGVzJztcXG5cXG5ib2R5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWZsb3c6IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICBmb250LXNpemU6IHZhcigtLXRleHQtYmFzZS1zaXplKTtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXByaW1hcnkpO1xcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0KTtcXG4gIGNvbG9yOiB2YXIoLS1mb250LXNlY29uZGFyeSk7XFxuXFxuICBAaW5jbHVkZSB0eXBlLXNjYWxlcztcXG59XFxuXCIsXCJAaW1wb3J0ICcuLi9zdHlsZXMvbWl4aW5zL3RleHQtZmFkZS1pbic7XFxuQGltcG9ydCAnLi4vc3R5bGVzL21peGlucy9zaGlubnktYnV0dG9uJztcXG5cXG5oZWFkZXIge1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbi1sZWZ0OiAxMCU7XFxuICBtYXJnaW4tcmlnaHQ6IDEwJTtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgtNDVkZWcsICNlZTc3NTIsICNlNzNjN2UsICMyM2E2ZDUsICMyM2Q1YWIpO1xcbiAgYmFja2dyb3VuZC1zaXplOiA0MDAlIDQwMCU7XFxuICBhbmltYXRpb246IGdyYWRpZW50IDE1cyBlYXNlIGluZmluaXRlO1xcbiAgbWl4LWJsZW5kLW1vZGU6IG92ZXJsYXk7XFxuXFxuICBAa2V5ZnJhbWVzIGdyYWRpZW50IHtcXG4gICAgMCUge1xcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAlIDUwJTtcXG4gICAgfVxcbiAgICA1MCUge1xcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCUgNTAlO1xcbiAgICB9XFxuICAgIDEwMCUge1xcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAlIDUwJTtcXG4gICAgfVxcbiAgfVxcblxcbiAgaDEge1xcbiAgICBAaW5jbHVkZSBoZXJvLWZhZGUtaW47XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZy10b3A6IDRyZW07XFxuICAgIG1peC1ibGVuZC1tb2RlOiBjb2xvci1kb2RnZTtcXG4gIH1cXG5cXG4gIHAge1xcbiAgICBAaW5jbHVkZSBoZXJvLWZhZGUtaW47XFxuICAgICR0cmFuc2l0aW9uLWhvdmVyOiBvcGFjaXR5IDAuM3MgZWFzZS1pbjtcXG4gICAgbWF4LXdpZHRoOiA4MCU7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgbWl4LWJsZW5kLW1vZGU6IGNvbG9yLWRvZGdlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGNvbG9yOiB2YXIoLS1zdG9ybS1kdXN0KTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQ7XFxuICAgIGJvcmRlci13aWR0aDogMXB4O1xcbiAgICBwYWRkaW5nOiAwLjM3NXJlbSAwLjY3NXJlbSAwLjVyZW07XFxuICAgIGJvcmRlci1pbWFnZS1zbGljZTogMTtcXG4gICAgYm9yZGVyLWltYWdlLXNvdXJjZTogbGluZWFyLWdyYWRpZW50KFxcbiAgICAgIHZhcigtLWRpbW9ycGhvdGhlY2EtbWFnZW50YSksXFxuICAgICAgdmFyKC0tcmViZWNjYS1wdXJwbGUpXFxuICAgICk7XFxuICAgIG9wYWNpdHk6IDAuNjtcXG4gICAgdHJhbnNpdGlvbjogJHRyYW5zaXRpb24taG92ZXI7XFxuXFxuICAgICY6aG92ZXIge1xcbiAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgdHJhbnNpdGlvbjogJHRyYW5zaXRpb24taG92ZXI7XFxuICAgIH1cXG5cXG4gICAgQGluY2x1ZGUgc20ge1xcbiAgICAgIGZvbnQtc2l6ZTogODAlO1xcbiAgICB9XFxuXFxuICAgIEBpbmNsdWRlIGxnIHtcXG4gICAgICBtYXgtd2lkdGg6ICRzY3JlZW4tc20tbWluO1xcbiAgICAgIG1hcmdpbjogMWVtIGF1dG8gMmVtO1xcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjM3NWVtO1xcbiAgICAgIGZvbnQtc2l6ZTogNzUlO1xcbiAgICB9XFxuXFxuICAgIGEge1xcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgICBjb2xvcjogZG9kZ2VyYmx1ZTtcXG4gICAgICAmOmhvdmVyIHtcXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcblxcbiAgYnV0dG9uIHtcXG4gICAgQGluY2x1ZGUgc2hpbm55LWJ1dHRvbjtcXG4gIH1cXG59XFxuXCIsXCJAbWl4aW4gdGV4dC1mYWRlLWluIHtcXG4gIGFuaW1hdGlvbjogYmxhY2tSYWluYm93IGVhc2UgM3M7XFxuXFxuICBAa2V5ZnJhbWVzIGJsYWNrUmFpbmJvdyB7XFxuICAgIGZyb20ge1xcbiAgICAgIGNvbG9yOiB2YXIoLS1maXJlLWVuZ2luZS1yZWQpO1xcbiAgICAgIG9wYWNpdHk6IDA7XFxuICAgIH1cXG4gICAgdG8ge1xcbiAgICAgIGNvbG9yOiBpbmhlcml0O1xcbiAgICAgIG9wYWNpdHk6IDE7XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuQG1peGluIGhlcm8tZmFkZS1pbiB7XFxuICBhbmltYXRpb246IHNsb3dseUFwcGVhciBlYXNlIDVzO1xcblxcbiAgQGtleWZyYW1lcyBzbG93bHlBcHBlYXIge1xcbiAgICBmcm9tIHtcXG4gICAgICBvcGFjaXR5OiAwO1xcbiAgICB9XFxuICAgIHRvIHtcXG4gICAgICBvcGFjaXR5OiAxO1xcbiAgICB9XFxuICB9XFxufVxcblwiLFwiQG1peGluIHNoaW5ueS1idXR0b24ge1xcbiAgQGluY2x1ZGUgaW1wcm92ZS1sZWdpYmlsaXR5O1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAkYnV0dG9uLWNvbG9yOiB2YXIoLS1yZWJlY2NhLXB1cnBsZSk7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gICRidXR0b24tcmFkaXVzOiA1MCU7XFxuICAkYnV0dG9uLXNpemU6IDMuNWVtO1xcbiAgaGVpZ2h0OiAkYnV0dG9uLXNpemU7XFxuICB3aWR0aDogJGJ1dHRvbi1zaXplO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1zZWNvbmRhcnkpO1xcbiAgbWFyZ2luOiAycmVtIGF1dG87XFxuICBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tYmx1aXNoLXB1cnBsZSk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBib3JkZXItcmFkaXVzOiAkYnV0dG9uLXJhZGl1cztcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC41cyBlYXNlO1xcblxcbiAgJjpiZWZvcmUge1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtcGx1bSk7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcXG4gICAgICA0NWRlZyxcXG4gICAgICB2YXIoLS1kb2RnZXItYmx1ZSksXFxuICAgICAgdmFyKC0tcmViZWNjYS1wdXJwbGUpLFxcbiAgICAgIHZhcigtLWRvZGdlci1ibHVlKSxcXG4gICAgICB2YXIoLS1kaW1vcnBob3RoZWNhLW1hZ2VudGEpLFxcbiAgICAgIHZhcigtLXJlYmVjY2EtcHVycGxlKSxcXG4gICAgICByZ2JhKHJlZCwgMC41KSxcXG4gICAgICB2YXIoLS1kb2RnZXItYmx1ZSlcXG4gICAgKTtcXG5cXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IC00cHg7XFxuICAgIGxlZnQ6IC00cHg7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogNDAwJTtcXG4gICAgei1pbmRleDogLTE7XFxuICAgIGZpbHRlcjogYmx1cig5cHgpO1xcbiAgICB3aWR0aDogY2FsYygxMDAlICsgMTFweCk7XFxuICAgIGhlaWdodDogY2FsYygxMDAlICsgMTNweCk7XFxuICAgIGFuaW1hdGlvbjogZ2xvd2luZyAyMHMgbGluZWFyIGluZmluaXRlO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnMgZWFzZS1pbi1vdXQ7XFxuICAgIGJvcmRlci1yYWRpdXM6ICRidXR0b24tcmFkaXVzO1xcbiAgfVxcblxcbiAgJjphY3RpdmUsXFxuICAmOmZvY3VzLFxcbiAgJjpob3ZlciB7XFxuICAgIG91dGxpbmU6IDA7XFxuICAgIGJvcmRlci1zdHlsZTogb3V0c2V0O1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuNXMgZWFzZTtcXG5cXG4gICAgJjpiZWZvcmUge1xcbiAgICAgIG9wYWNpdHk6IDE7XFxuICAgIH1cXG4gIH1cXG5cXG4gICY6YWZ0ZXIge1xcbiAgICB6LWluZGV4OiAtMTtcXG4gICAgY29udGVudDogJyc7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZDogJGJ1dHRvbi1jb2xvcjtcXG4gICAgbGVmdDogMDtcXG4gICAgdG9wOiAwO1xcbiAgICBib3JkZXItcmFkaXVzOiAkYnV0dG9uLXJhZGl1cztcXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjM1KSAwcHggNXB4IDE1cHg7XFxuICB9XFxuXFxuICBAa2V5ZnJhbWVzIGdsb3dpbmcge1xcbiAgICAwJSB7XFxuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwO1xcbiAgICB9XFxuICAgIDUwJSB7XFxuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNDAwJSAwO1xcbiAgICB9XFxuICAgIDEwMCUge1xcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgMDtcXG4gICAgfVxcbiAgfVxcbn1cXG5cIixcImJvZHkgPiBtYWluIHtcXG4gIGlucHV0IHtcXG4gICAgQGluY2x1ZGUgdGV4dC1mYWRlLWluO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgICBsaW5lLWhlaWdodDogMXJlbTtcXG4gICAgcGFkZGluZzogMC4zNzVyZW0gMC41cmVtO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib2JvLWdyYXkpO1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1zZWNvbmRhcnkpO1xcbiAgICBmb250LXNpemU6IHNtYWxsO1xcblxcbiAgICAmI2ltYWdlLXVybCB7XFxuICAgICAgbWluLXdpZHRoOiA0MGNoO1xcbiAgICAgIG1hcmdpbi1yaWdodDogMC4yNXJlbTtcXG4gICAgfVxcbiAgfVxcblxcbiAgbGFiZWwge1xcbiAgICBAaW5jbHVkZSB0ZXh0LWZhZGUtaW47XFxuICAgIGZvbnQtc2l6ZTogMS4xMjVyZW07XFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgICBsaW5lLWhlaWdodDogMnJlbTtcXG5cXG4gICAgJltmb3I9J2dyaWQtcm93cyddLFxcbiAgICAmW2Zvcj0nZ3JpZC1jb2x1bW5zJ10ge1xcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgfVxcbiAgfVxcbn1cXG5cIixcImJvZHkgPiBtYWluIHtcXG4gIGJ1dHRvbiB7XFxuICAgIGZvbnQtc2l6ZTogc21hbGw7XFxuXFxuICAgIEBpbmNsdWRlIHRleHQtZmFkZS1pbjtcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG5cXG4gICAgcGFkZGluZzogMC4zNzVyZW0gMC41cmVtO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib2JvLWdyYXkpO1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1zZWNvbmRhcnkpO1xcbiAgICBjb2xvcjogdmFyKC0tZGltb3JwaG90aGVjYS1tYWdlbnRhKTtcXG4gICAgbGluZS1oZWlnaHQ6IDAuNzVyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuXFxuICAgICY6bm90KDpsYXN0LW9mLXR5cGUpIHtcXG4gICAgICBtYXJnaW4tcmlnaHQ6IDAuMjVyZW07XFxuICAgIH1cXG5cXG4gICAgQGluY2x1ZGUgc20ge1xcbiAgICAgIGxpbmUtaGVpZ2h0OiAxcmVtO1xcbiAgICB9XFxuICB9XFxufVxcblwiLFwiYm9keSA+IG1haW4ge1xcbiAgaW5wdXRbdHlwZT0nbnVtYmVyJ10ge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxuICAgIG1heC13aWR0aDogNWNoO1xcbiAgfVxcblxcbiAgI2dyaWQge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIEBpbmNsdWRlIHRleHQtZmFkZS1pbjtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcblxcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcXG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XFxuICAgIGJvcmRlci1pbWFnZS1zbGljZTogMTtcXG4gICAgYm9yZGVyLWltYWdlLXNvdXJjZTogbGluZWFyLWdyYWRpZW50KFxcbiAgICAgIDE4MGRlZyxcXG4gICAgICByZ2JhKCMxZTkwZmYsIDEpLFxcbiAgICAgIHJnYmEoIzFlOTBmZiwgMSlcXG4gICAgKTtcXG5cXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdmFyKC0taW1hZ2UtdXJsKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcXG4gICAgaGVpZ2h0OiA4MHZ3O1xcbiAgICBtYXgtaGVpZ2h0OiA3NXZtaW47XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KHZhcigtLWdyaWQtY29sdW1ucyksIDFmcik7XFxuXFxuICAgIGFyZWEge1xcbiAgICAgIEBpbmNsdWRlIGdyYWItY3Vyc29yO1xcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgICBjb2xvcjogd2hpdGU7XFxuICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgjMWU5MGZmLCAwLjUpO1xcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHZhcigtLWltYWdlLXVybCk7XFxuICAgICAgYmFja2dyb3VuZC1jbGlwOiBib3JkZXItYm94O1xcbiAgICAgIGJvcmRlci1pbWFnZS1zbGljZTogMTtcXG4gICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kQ29sb3IgMC4xcyBlYXNlLW91dDtcXG4gICAgICBiYWNrZ3JvdW5kLWJsZW5kLW1vZGU6IGxpZ2h0ZW47XFxuXFxuICAgICAgJjpob3ZlciB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDMwLCAxNDQsIDI1NSwgMC41KTtcXG4gICAgICB9XFxuICAgIH1cXG5cXG4gICAgLy8gVGhpcyBpcyB0aGUgYWN0dWFsIHRpbWVyIGFmdGVyIHRoZSBnYW1lIHN0YXJ0c1xcbiAgICAmOmFmdGVyIHtcXG4gICAgICBjb250ZW50OiB2YXIoLS10aW1lcik7XFxuICAgICAgY29sb3I6IHZhcigtLW5lb24tcGluayk7XFxuICAgICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXNlY29uZGFyeSk7XFxuXFxuICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIHRvcDogMDtcXG4gICAgICBsZWZ0OiAwO1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICAgIG9wYWNpdHk6IDAuNztcXG5cXG4gICAgICBAaW5jbHVkZSBtZCB7XFxuICAgICAgICB0b3A6IDF2bWluO1xcbiAgICAgICAgb3BhY2l0eTogMC44O1xcbiAgICAgIH1cXG5cXG4gICAgICBAaW5jbHVkZSBsZyB7XFxuICAgICAgICBvcGFjaXR5OiAwLjk7XFxuICAgICAgICB0b3A6IDJ2bWluO1xcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcbn1cXG5cIixcIkBtaXhpbiBncmFiLWN1cnNvciB7XFxuICBjdXJzb3I6IG1vdmU7XFxuICBjdXJzb3I6IGdyYWI7XFxuICBjdXJzb3I6IC1tb3otZ3JhYjtcXG4gIGN1cnNvcjogLXdlYmtpdC1ncmFiO1xcblxcbiAgJjphY3RpdmUge1xcbiAgICBjdXJzb3I6IGdyYWJiaW5nO1xcbiAgICBjdXJzb3I6IC1tb3otZ3JhYmJpbmc7XFxuICAgIGN1cnNvcjogLXdlYmtpdC1ncmFiYmluZztcXG4gIH1cXG59XFxuXCIsXCJAaW1wb3J0ICcuLi9zdHlsZXMvbWl4aW5zL3RleHQtZmFkZS1pbic7XFxuQGltcG9ydCAnLi4vc3R5bGVzL21peGlucy9zaGlubnktYnV0dG9uJztcXG5AaW1wb3J0ICcuLi9zdHlsZXMvbWl4aW5zL2dyYWItY3Vyc29yJztcXG5cXG5AaW1wb3J0ICdpbWFnZS91cmwtaW5wdXQuc2Nzcyc7XFxuQGltcG9ydCAnaW1hZ2UvaW1hZ2UtYnV0dG9ucy5zY3NzJztcXG5AaW1wb3J0ICdncmlkL2dyaWQuc2Nzcyc7XFxuXFxuYm9keSA+IG1haW4ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogODAlO1xcbiAgcGFkZGluZy1sZWZ0OiAxMCU7XFxuICBwYWRkaW5nLXJpZ2h0OiAxMCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIHBhZGRpbmctYm90dG9tOiA1ZW07XFxuXFxuICBoMiB7XFxuICAgIEBpbmNsdWRlIHRleHQtZmFkZS1pbjtcXG4gICAgcGFkZGluZy10b3A6IDNyZW07XFxuICB9XFxuXFxuICBzZWN0aW9uIHtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGxpbmUtaGVpZ2h0OiAycmVtO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcXG5cXG4gICAgcCB7XFxuICAgICAgQGluY2x1ZGUgdGV4dC1mYWRlLWluO1xcbiAgICAgIG1hcmdpbjogMDtcXG4gICAgICBmb250LXNpemU6IDEuMTI1cmVtO1xcbiAgICB9XFxuICB9XFxuXFxuICAjc3RhcnQge1xcbiAgICBAaW5jbHVkZSBzaGlubnktYnV0dG9uO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB9XFxufVxcblwiLFwiJHRpbWVyX3VuaXQ6IDFzO1xcbiR0aW1lcl9sZW5ndGg6IDM7XFxuJHRpbWVyX2RlbGF5OiAwLjVzO1xcblxcbiRzdGFydGluZ19odWU6IDI0MDtcXG4kaHVlX2luY3JlbWVudDogMTIwIC8gJHRpbWVyX2xlbmd0aDtcXG5cXG5AbWl4aW4gc2NhbGVfdGltZXIoJHNjYWxlKSB7XFxuICAkeDogJHNjYWxlO1xcbiAgd2lkdGg6IDUwdm1pbiAqICR4O1xcbiAgaGVpZ2h0OiA1MHZtaW4gKiAkeDtcXG5cXG4gIGZvbnQtc2l6ZTogMjV2bWluICogJHg7XFxuICB0ZXh0LXNoYWRvdzogKDIuNXZtaW4gKiAkeCkgKDIuNXZtaW4gKiAkeCkgKDV2bWluICogJHgpIHJnYmEoYmxhY2ssIDAuMTI1KTtcXG59XFxuXFxuI292ZXJsYXkge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKCRzdGFydGluZ19odWUsIDgwLCA2MCk7XFxuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1zZWNvbmRhcnkpO1xcbiAgYW5pbWF0aW9uOiAoJHRpbWVyX3VuaXQgKiAkdGltZXJfbGVuZ3RoKSAoJHRpbWVyX2RlbGF5IC0gJHRpbWVyX3VuaXQgKiAwLjEyNSlcXG4gICAgY3ViaWMtYmV6aWVyKDAuOSwgMCwgMC4xLCAxKSBmb3J3YXJkcyBiYWNrZ3JvdW5kX2NvbG9yO1xcblxcbiAgQGF0LXJvb3Qge1xcbiAgICBAa2V5ZnJhbWVzIGJhY2tncm91bmRfY29sb3Ige1xcbiAgICAgIEBmb3IgJGkgZnJvbSAxIHRocm91Z2ggJHRpbWVyX2xlbmd0aCArIDEge1xcbiAgICAgICAgI3sxMDAlIC8gJHRpbWVyX2xlbmd0aCAqICRpfSB7XFxuICAgICAgICAgICRodWU6ICRodWVfaW5jcmVtZW50ICogJGkgKiAyO1xcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woJHN0YXJ0aW5nX2h1ZSArICRodWUsIDgwLCA2MCk7XFxuICAgICAgICB9XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxufVxcblxcbiNvdmVybGF5IHtcXG4gIHdpZHRoOiA1MHZtaW47XFxuICBoZWlnaHQ6IDUwdm1pbjtcXG5cXG4gIGZvbnQtc2l6ZTogMjV2bWluO1xcbiAgdGV4dC1zaGFkb3c6ICgyLjV2bWluKSAoMi41dm1pbikgKDV2bWluKSByZ2JhKGJsYWNrLCAwLjEyNSk7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG5cXG4gICY6YmVmb3JlIHtcXG4gICAgY29udGVudDogJyN7JHRpbWVyX2xlbmd0aH0nO1xcblxcbiAgICBhbmltYXRpb246ICgkdGltZXJfdW5pdCAqICR0aW1lcl9sZW5ndGgpICR0aW1lcl9kZWxheSBmb3J3YXJkc1xcbiAgICAgICAgdGltZXJfY291bnRkb3duLFxcbiAgICAgICR0aW1lcl91bml0ICgkdGltZXJfZGVsYXkgLSAkdGltZXJfdW5pdCAqIDAuMTI1KSAkdGltZXJfbGVuZ3RoIHRpbWVyX2JlYXQ7XFxuXFxuICAgIEBhdC1yb290IHtcXG4gICAgICBAa2V5ZnJhbWVzIHRpbWVyX2JlYXQge1xcbiAgICAgICAgNDAlLFxcbiAgICAgICAgODAlIHtcXG4gICAgICAgICAgdHJhbnNmb3JtOiBub25lO1xcbiAgICAgICAgfVxcbiAgICAgICAgNTAlIHtcXG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEyNSk7XFxuICAgICAgICB9XFxuICAgICAgfVxcbiAgICB9XFxuXFxuICAgIEBhdC1yb290IHtcXG4gICAgICBAa2V5ZnJhbWVzIHRpbWVyX2NvdW50ZG93biB7XFxuICAgICAgICBAZm9yICRpIGZyb20gMCB0aHJvdWdoICR0aW1lcl9sZW5ndGgge1xcbiAgICAgICAgICAjezEwMCUgLyAkdGltZXJfbGVuZ3RoICogJGl9IHtcXG4gICAgICAgICAgICAkYWN0dWFsOiAtJGkgKyAkdGltZXJfbGVuZ3RoO1xcbiAgICAgICAgICAgIEBpZiAkYWN0dWFsID09IDAge1xcbiAgICAgICAgICAgICAgY29udGVudDogJ2dvISc7XFxuICAgICAgICAgICAgfSBAZWxzZSB7XFxuICAgICAgICAgICAgICBjb250ZW50OiAnI3skYWN0dWFsfSc7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxuICAmOmFmdGVyIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB6LWluZGV4OiAtMTAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKGJsYWNrLCAwLjEyNSk7XFxuICAgIGFuaW1hdGlvbjogKCR0aW1lcl91bml0ICogJHRpbWVyX2xlbmd0aCkgJHRpbWVyX2RlbGF5IGxpbmVhciBmb3J3YXJkc1xcbiAgICAgIHRpbWVyX2luZGljYXRvcjtcXG5cXG4gICAgQGF0LXJvb3Qge1xcbiAgICAgIEBrZXlmcmFtZXMgdGltZXJfaW5kaWNhdG9yIHtcXG4gICAgICAgIDEwMCUge1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSk7XFxuICAgICAgICB9XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qISBub3JtYWxpemUuY3NzIHY4LjAuMSB8IE1JVCBMaWNlbnNlIHwgZ2l0aHViLmNvbS9uZWNvbGFzL25vcm1hbGl6ZS5jc3MgKi9cXG5cXG4vKiBEb2N1bWVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgbGluZSBoZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIFByZXZlbnQgYWRqdXN0bWVudHMgb2YgZm9udCBzaXplIGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZXMgaW4gaU9TLlxcbiAqL1xcblxcbmh0bWwge1xcbiAgbGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLyogMiAqL1xcbn1cXG5cXG4vKiBTZWN0aW9uc1xcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gICAqIFJlbW92ZSB0aGUgbWFyZ2luIGluIGFsbCBicm93c2Vycy5cXG4gICAqL1xcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4vKipcXG4gICAqIFJlbmRlciB0aGUgYG1haW5gIGVsZW1lbnQgY29uc2lzdGVudGx5IGluIElFLlxcbiAgICovXFxuXFxubWFpbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLyoqXFxuICAgKiBDb3JyZWN0IHRoZSBmb250IHNpemUgYW5kIG1hcmdpbiBvbiBgaDFgIGVsZW1lbnRzIHdpdGhpbiBgc2VjdGlvbmAgYW5kXFxuICAgKiBgYXJ0aWNsZWAgY29udGV4dHMgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgU2FmYXJpLlxcbiAgICovXFxuXFxuaDEge1xcbiAgZm9udC1zaXplOiAyZW07XFxuICBtYXJnaW46IDAuNjdlbSAwO1xcbn1cXG5cXG4vKiBHcm91cGluZyBjb250ZW50XFxuICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAgICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gRmlyZWZveC5cXG4gICAqIDIuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UgYW5kIElFLlxcbiAgICovXFxuXFxuaHIge1xcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7IC8qIDEgKi9cXG4gIGhlaWdodDogMDsgLyogMSAqL1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICAgKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAgICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiAgICovXFxuXFxucHJlIHtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTsgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxZW07IC8qIDIgKi9cXG59XFxuXFxuLyogVGV4dC1sZXZlbCBzZW1hbnRpY3NcXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICAgKiBSZW1vdmUgdGhlIGdyYXkgYmFja2dyb3VuZCBvbiBhY3RpdmUgbGlua3MgaW4gSUUgMTAuXFxuICAgKi9cXG5cXG5hIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4vKipcXG4gICAqIDEuIFJlbW92ZSB0aGUgYm90dG9tIGJvcmRlciBpbiBDaHJvbWUgNTctXFxuICAgKiAyLiBBZGQgdGhlIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIENocm9tZSwgRWRnZSwgSUUsIE9wZXJhLCBhbmQgU2FmYXJpLlxcbiAgICovXFxuXFxuYWJiclt0aXRsZV0ge1xcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTsgLyogMSAqL1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IC8qIDIgKi9cXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gICAqIEFkZCB0aGUgY29ycmVjdCBmb250IHdlaWdodCBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBTYWZhcmkuXFxuICAgKi9cXG5cXG5iLFxcbnN0cm9uZyB7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG5cXG4vKipcXG4gICAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICAgKiAyLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxuICAgKi9cXG5cXG5jb2RlLFxcbmtiZCxcXG5zYW1wIHtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTsgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxZW07IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICAgKiBBZGQgdGhlIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gICAqL1xcblxcbnNtYWxsIHtcXG4gIGZvbnQtc2l6ZTogODAlO1xcbn1cXG5cXG4vKipcXG4gICAqIFByZXZlbnQgYHN1YmAgYW5kIGBzdXBgIGVsZW1lbnRzIGZyb20gYWZmZWN0aW5nIHRoZSBsaW5lIGhlaWdodCBpblxcbiAgICogYWxsIGJyb3dzZXJzLlxcbiAgICovXFxuXFxuc3ViLFxcbnN1cCB7XFxuICBmb250LXNpemU6IDc1JTtcXG4gIGxpbmUtaGVpZ2h0OiAwO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG5zdWIge1xcbiAgYm90dG9tOiAtMC4yNWVtO1xcbn1cXG5cXG5zdXAge1xcbiAgdG9wOiAtMC41ZW07XFxufVxcblxcbi8qIEVtYmVkZGVkIGNvbnRlbnRcXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICAgKiBSZW1vdmUgdGhlIGJvcmRlciBvbiBpbWFnZXMgaW5zaWRlIGxpbmtzIGluIElFIDEwLlxcbiAgICovXFxuXFxuaW1nIHtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG59XFxuXFxuLyogRm9ybXNcXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICAgKiAxLiBDaGFuZ2UgdGhlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2Vycy5cXG4gICAqIDIuIFJlbW92ZSB0aGUgbWFyZ2luIGluIEZpcmVmb3ggYW5kIFNhZmFyaS5cXG4gICAqL1xcblxcbmJ1dHRvbixcXG5pbnB1dCxcXG5vcHRncm91cCxcXG5zZWxlY3QsXFxudGV4dGFyZWEge1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7IC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMTAwJTsgLyogMSAqL1xcbiAgbGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cXG4gIG1hcmdpbjogMDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gICAqIFNob3cgdGhlIG92ZXJmbG93IGluIElFLlxcbiAgICogMS4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZS5cXG4gICAqL1xcblxcbmJ1dHRvbixcXG5pbnB1dCB7XFxuICAvKiAxICovXFxuICBvdmVyZmxvdzogdmlzaWJsZTtcXG59XFxuXFxuLyoqXFxuICAgKiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEVkZ2UsIEZpcmVmb3gsIGFuZCBJRS5cXG4gICAqIDEuIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRmlyZWZveC5cXG4gICAqL1xcblxcbmJ1dHRvbixcXG5zZWxlY3Qge1xcbiAgLyogMSAqL1xcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxufVxcblxcbi8qKlxcbiAgICogQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4gICAqL1xcblxcbmJ1dHRvbixcXG5bdHlwZT0nYnV0dG9uJ10sXFxuW3R5cGU9J3Jlc2V0J10sXFxuW3R5cGU9J3N1Ym1pdCddIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xcbn1cXG5cXG4vKipcXG4gICAqIFJlbW92ZSB0aGUgaW5uZXIgYm9yZGVyIGFuZCBwYWRkaW5nIGluIEZpcmVmb3guXFxuICAgKi9cXG5cXG5idXR0b246Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9J2J1dHRvbiddOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPSdyZXNldCddOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPSdzdWJtaXQnXTo6LW1vei1mb2N1cy1pbm5lciB7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4vKipcXG4gICAqIFJlc3RvcmUgdGhlIGZvY3VzIHN0eWxlcyB1bnNldCBieSB0aGUgcHJldmlvdXMgcnVsZS5cXG4gICAqL1xcblxcbmJ1dHRvbjotbW96LWZvY3VzcmluZyxcXG5bdHlwZT0nYnV0dG9uJ106LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9J3Jlc2V0J106LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9J3N1Ym1pdCddOi1tb3otZm9jdXNyaW5nIHtcXG4gIG91dGxpbmU6IDFweCBkb3R0ZWQgQnV0dG9uVGV4dDtcXG59XFxuXFxuLyoqXFxuICAgKiBDb3JyZWN0IHRoZSBwYWRkaW5nIGluIEZpcmVmb3guXFxuICAgKi9cXG5cXG5maWVsZHNldCB7XFxuICBwYWRkaW5nOiAwLjM1ZW0gMC43NWVtIDAuNjI1ZW07XFxufVxcblxcbi8qKlxcbiAgICogMS4gQ29ycmVjdCB0aGUgdGV4dCB3cmFwcGluZyBpbiBFZGdlIGFuZCBJRS5cXG4gICAqIDIuIENvcnJlY3QgdGhlIGNvbG9yIGluaGVyaXRhbmNlIGZyb20gYGZpZWxkc2V0YCBlbGVtZW50cyBpbiBJRS5cXG4gICAqIDMuIFJlbW92ZSB0aGUgcGFkZGluZyBzbyBkZXZlbG9wZXJzIGFyZSBub3QgY2F1Z2h0IG91dCB3aGVuIHRoZXkgemVybyBvdXRcXG4gICAqICAgIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gYWxsIGJyb3dzZXJzLlxcbiAgICovXFxuXFxubGVnZW5kIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cXG4gIGNvbG9yOiBpbmhlcml0OyAvKiAyICovXFxuICBkaXNwbGF5OiB0YWJsZTsgLyogMSAqL1xcbiAgbWF4LXdpZHRoOiAxMDAlOyAvKiAxICovXFxuICBwYWRkaW5nOiAwOyAvKiAzICovXFxuICB3aGl0ZS1zcGFjZTogbm9ybWFsOyAvKiAxICovXFxufVxcblxcbi8qKlxcbiAgICogQWRkIHRoZSBjb3JyZWN0IHZlcnRpY2FsIGFsaWdubWVudCBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBPcGVyYS5cXG4gICAqL1xcblxcbnByb2dyZXNzIHtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuLyoqXFxuICAgKiBSZW1vdmUgdGhlIGRlZmF1bHQgdmVydGljYWwgc2Nyb2xsYmFyIGluIElFIDEwKy5cXG4gICAqL1xcblxcbnRleHRhcmVhIHtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4vKipcXG4gICAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIElFIDEwLlxcbiAgICogMi4gUmVtb3ZlIHRoZSBwYWRkaW5nIGluIElFIDEwLlxcbiAgICovXFxuXFxuW3R5cGU9J2NoZWNrYm94J10sXFxuW3R5cGU9J3JhZGlvJ10ge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xcbiAgcGFkZGluZzogMDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gICAqIENvcnJlY3QgdGhlIGN1cnNvciBzdHlsZSBvZiBpbmNyZW1lbnQgYW5kIGRlY3JlbWVudCBidXR0b25zIGluIENocm9tZS5cXG4gICAqL1xcblxcblt0eXBlPSdudW1iZXInXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcXG5bdHlwZT0nbnVtYmVyJ106Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4vKipcXG4gICAqIDEuIENvcnJlY3QgdGhlIG9kZCBhcHBlYXJhbmNlIGluIENocm9tZSBhbmQgU2FmYXJpLlxcbiAgICogMi4gQ29ycmVjdCB0aGUgb3V0bGluZSBzdHlsZSBpbiBTYWZhcmkuXFxuICAgKi9cXG5cXG5bdHlwZT0nc2VhcmNoJ10ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7IC8qIDEgKi9cXG4gIG91dGxpbmUtb2Zmc2V0OiAtMnB4OyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAgICogUmVtb3ZlIHRoZSBpbm5lciBwYWRkaW5nIGluIENocm9tZSBhbmQgU2FmYXJpIG9uIG1hY09TLlxcbiAgICovXFxuXFxuW3R5cGU9J3NlYXJjaCddOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICAgKiAxLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbiAgICogMi4gQ2hhbmdlIGZvbnQgcHJvcGVydGllcyB0byBgaW5oZXJpdGAgaW4gU2FmYXJpLlxcbiAgICovXFxuXFxuOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMSAqL1xcbiAgZm9udDogaW5oZXJpdDsgLyogMiAqL1xcbn1cXG5cXG4vKiBJbnRlcmFjdGl2ZVxcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKlxcbiAgICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gRWRnZSwgSUUgMTArLCBhbmQgRmlyZWZveC5cXG4gICAqL1xcblxcbmRldGFpbHMge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi8qXFxuICAgKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBhbGwgYnJvd3NlcnMuXFxuICAgKi9cXG5cXG5zdW1tYXJ5IHtcXG4gIGRpc3BsYXk6IGxpc3QtaXRlbTtcXG59XFxuXFxuLyogTWlzY1xcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gICAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwKy5cXG4gICAqL1xcblxcbnRlbXBsYXRlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi8qKlxcbiAgICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTAuXFxuICAgKi9cXG5cXG5baGlkZGVuXSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zdHlsZXMvbm9ybWFsaXplLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSwyRUFBMkU7O0FBRTNFOytFQUMrRTs7QUFFL0U7OztFQUdFOztBQUVGO0VBQ0UsaUJBQWlCLEVBQUUsTUFBTTtFQUN6Qiw4QkFBOEIsRUFBRSxNQUFNO0FBQ3hDOztBQUVBO2lGQUNpRjs7QUFFakY7O0lBRUk7O0FBRUo7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7O0lBRUk7O0FBRUo7RUFDRSxjQUFjO0FBQ2hCOztBQUVBOzs7SUFHSTs7QUFFSjtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0FBRUE7aUZBQ2lGOztBQUVqRjs7O0lBR0k7O0FBRUo7RUFDRSx1QkFBdUIsRUFBRSxNQUFNO0VBQy9CLFNBQVMsRUFBRSxNQUFNO0VBQ2pCLGlCQUFpQixFQUFFLE1BQU07QUFDM0I7O0FBRUE7OztJQUdJOztBQUVKO0VBQ0UsaUNBQWlDLEVBQUUsTUFBTTtFQUN6QyxjQUFjLEVBQUUsTUFBTTtBQUN4Qjs7QUFFQTtpRkFDaUY7O0FBRWpGOztJQUVJOztBQUVKO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBOzs7SUFHSTs7QUFFSjtFQUNFLG1CQUFtQixFQUFFLE1BQU07RUFDM0IsMEJBQTBCLEVBQUUsTUFBTTtFQUNsQyxpQ0FBaUMsRUFBRSxNQUFNO0FBQzNDOztBQUVBOztJQUVJOztBQUVKOztFQUVFLG1CQUFtQjtBQUNyQjs7QUFFQTs7O0lBR0k7O0FBRUo7OztFQUdFLGlDQUFpQyxFQUFFLE1BQU07RUFDekMsY0FBYyxFQUFFLE1BQU07QUFDeEI7O0FBRUE7O0lBRUk7O0FBRUo7RUFDRSxjQUFjO0FBQ2hCOztBQUVBOzs7SUFHSTs7QUFFSjs7RUFFRSxjQUFjO0VBQ2QsY0FBYztFQUNkLGtCQUFrQjtFQUNsQix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO2lGQUNpRjs7QUFFakY7O0lBRUk7O0FBRUo7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7aUZBQ2lGOztBQUVqRjs7O0lBR0k7O0FBRUo7Ozs7O0VBS0Usb0JBQW9CLEVBQUUsTUFBTTtFQUM1QixlQUFlLEVBQUUsTUFBTTtFQUN2QixpQkFBaUIsRUFBRSxNQUFNO0VBQ3pCLFNBQVMsRUFBRSxNQUFNO0FBQ25COztBQUVBOzs7SUFHSTs7QUFFSjs7RUFFRSxNQUFNO0VBQ04saUJBQWlCO0FBQ25COztBQUVBOzs7SUFHSTs7QUFFSjs7RUFFRSxNQUFNO0VBQ04sb0JBQW9CO0FBQ3RCOztBQUVBOztJQUVJOztBQUVKOzs7O0VBSUUsMEJBQTBCO0FBQzVCOztBQUVBOztJQUVJOztBQUVKOzs7O0VBSUUsa0JBQWtCO0VBQ2xCLFVBQVU7QUFDWjs7QUFFQTs7SUFFSTs7QUFFSjs7OztFQUlFLDhCQUE4QjtBQUNoQzs7QUFFQTs7SUFFSTs7QUFFSjtFQUNFLDhCQUE4QjtBQUNoQzs7QUFFQTs7Ozs7SUFLSTs7QUFFSjtFQUNFLHNCQUFzQixFQUFFLE1BQU07RUFDOUIsY0FBYyxFQUFFLE1BQU07RUFDdEIsY0FBYyxFQUFFLE1BQU07RUFDdEIsZUFBZSxFQUFFLE1BQU07RUFDdkIsVUFBVSxFQUFFLE1BQU07RUFDbEIsbUJBQW1CLEVBQUUsTUFBTTtBQUM3Qjs7QUFFQTs7SUFFSTs7QUFFSjtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTs7SUFFSTs7QUFFSjtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7OztJQUdJOztBQUVKOztFQUVFLHNCQUFzQixFQUFFLE1BQU07RUFDOUIsVUFBVSxFQUFFLE1BQU07QUFDcEI7O0FBRUE7O0lBRUk7O0FBRUo7O0VBRUUsWUFBWTtBQUNkOztBQUVBOzs7SUFHSTs7QUFFSjtFQUNFLDZCQUE2QixFQUFFLE1BQU07RUFDckMsb0JBQW9CLEVBQUUsTUFBTTtBQUM5Qjs7QUFFQTs7SUFFSTs7QUFFSjtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTs7O0lBR0k7O0FBRUo7RUFDRSwwQkFBMEIsRUFBRSxNQUFNO0VBQ2xDLGFBQWEsRUFBRSxNQUFNO0FBQ3ZCOztBQUVBO2lGQUNpRjs7QUFFakY7O0lBRUk7O0FBRUo7RUFDRSxjQUFjO0FBQ2hCOztBQUVBOztJQUVJOztBQUVKO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO2lGQUNpRjs7QUFFakY7O0lBRUk7O0FBRUo7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7O0lBRUk7O0FBRUo7RUFDRSxhQUFhO0FBQ2ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyohIG5vcm1hbGl6ZS5jc3MgdjguMC4xIHwgTUlUIExpY2Vuc2UgfCBnaXRodWIuY29tL25lY29sYXMvbm9ybWFsaXplLmNzcyAqL1xcblxcbi8qIERvY3VtZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBsaW5lIGhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gUHJldmVudCBhZGp1c3RtZW50cyBvZiBmb250IHNpemUgYWZ0ZXIgb3JpZW50YXRpb24gY2hhbmdlcyBpbiBpT1MuXFxuICovXFxuXFxuaHRtbCB7XFxuICBsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xcbiAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyAvKiAyICovXFxufVxcblxcbi8qIFNlY3Rpb25zXFxuICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAgICogUmVtb3ZlIHRoZSBtYXJnaW4gaW4gYWxsIGJyb3dzZXJzLlxcbiAgICovXFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi8qKlxcbiAgICogUmVuZGVyIHRoZSBgbWFpbmAgZWxlbWVudCBjb25zaXN0ZW50bHkgaW4gSUUuXFxuICAgKi9cXG5cXG5tYWluIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKipcXG4gICAqIENvcnJlY3QgdGhlIGZvbnQgc2l6ZSBhbmQgbWFyZ2luIG9uIGBoMWAgZWxlbWVudHMgd2l0aGluIGBzZWN0aW9uYCBhbmRcXG4gICAqIGBhcnRpY2xlYCBjb250ZXh0cyBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBTYWZhcmkuXFxuICAgKi9cXG5cXG5oMSB7XFxuICBmb250LXNpemU6IDJlbTtcXG4gIG1hcmdpbjogMC42N2VtIDA7XFxufVxcblxcbi8qIEdyb3VwaW5nIGNvbnRlbnRcXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICAgKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBGaXJlZm94LlxcbiAgICogMi4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZSBhbmQgSUUuXFxuICAgKi9cXG5cXG5ociB7XFxuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDsgLyogMSAqL1xcbiAgaGVpZ2h0OiAwOyAvKiAxICovXFxuICBvdmVyZmxvdzogdmlzaWJsZTsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gICAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICAgKiAyLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxuICAgKi9cXG5cXG5wcmUge1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlOyAvKiAxICovXFxuICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xcbn1cXG5cXG4vKiBUZXh0LWxldmVsIHNlbWFudGljc1xcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gICAqIFJlbW92ZSB0aGUgZ3JheSBiYWNrZ3JvdW5kIG9uIGFjdGl2ZSBsaW5rcyBpbiBJRSAxMC5cXG4gICAqL1xcblxcbmEge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi8qKlxcbiAgICogMS4gUmVtb3ZlIHRoZSBib3R0b20gYm9yZGVyIGluIENocm9tZSA1Ny1cXG4gICAqIDIuIEFkZCB0aGUgY29ycmVjdCB0ZXh0IGRlY29yYXRpb24gaW4gQ2hyb21lLCBFZGdlLCBJRSwgT3BlcmEsIGFuZCBTYWZhcmkuXFxuICAgKi9cXG5cXG5hYmJyW3RpdGxlXSB7XFxuICBib3JkZXItYm90dG9tOiBub25lOyAvKiAxICovXFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgLyogMiAqL1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAgICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgd2VpZ2h0IGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cXG4gICAqL1xcblxcbmIsXFxuc3Ryb25nIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblxcbi8qKlxcbiAgICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gICAqIDIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXG4gICAqL1xcblxcbmNvZGUsXFxua2JkLFxcbnNhbXAge1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlOyAvKiAxICovXFxuICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gICAqIEFkZCB0aGUgY29ycmVjdCBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAgICovXFxuXFxuc21hbGwge1xcbiAgZm9udC1zaXplOiA4MCU7XFxufVxcblxcbi8qKlxcbiAgICogUHJldmVudCBgc3ViYCBhbmQgYHN1cGAgZWxlbWVudHMgZnJvbSBhZmZlY3RpbmcgdGhlIGxpbmUgaGVpZ2h0IGluXFxuICAgKiBhbGwgYnJvd3NlcnMuXFxuICAgKi9cXG5cXG5zdWIsXFxuc3VwIHtcXG4gIGZvbnQtc2l6ZTogNzUlO1xcbiAgbGluZS1oZWlnaHQ6IDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbnN1YiB7XFxuICBib3R0b206IC0wLjI1ZW07XFxufVxcblxcbnN1cCB7XFxuICB0b3A6IC0wLjVlbTtcXG59XFxuXFxuLyogRW1iZWRkZWQgY29udGVudFxcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gICAqIFJlbW92ZSB0aGUgYm9yZGVyIG9uIGltYWdlcyBpbnNpZGUgbGlua3MgaW4gSUUgMTAuXFxuICAgKi9cXG5cXG5pbWcge1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbn1cXG5cXG4vKiBGb3Jtc1xcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gICAqIDEuIENoYW5nZSB0aGUgZm9udCBzdHlsZXMgaW4gYWxsIGJyb3dzZXJzLlxcbiAgICogMi4gUmVtb3ZlIHRoZSBtYXJnaW4gaW4gRmlyZWZveCBhbmQgU2FmYXJpLlxcbiAgICovXFxuXFxuYnV0dG9uLFxcbmlucHV0LFxcbm9wdGdyb3VwLFxcbnNlbGVjdCxcXG50ZXh0YXJlYSB7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDsgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxMDAlOyAvKiAxICovXFxuICBsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xcbiAgbWFyZ2luOiAwOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAgICogU2hvdyB0aGUgb3ZlcmZsb3cgaW4gSUUuXFxuICAgKiAxLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlLlxcbiAgICovXFxuXFxuYnV0dG9uLFxcbmlucHV0IHtcXG4gIC8qIDEgKi9cXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xcbn1cXG5cXG4vKipcXG4gICAqIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSwgRmlyZWZveCwgYW5kIElFLlxcbiAgICogMS4gUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBGaXJlZm94LlxcbiAgICovXFxuXFxuYnV0dG9uLFxcbnNlbGVjdCB7XFxuICAvKiAxICovXFxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICAgKiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbiAgICovXFxuXFxuYnV0dG9uLFxcblt0eXBlPSdidXR0b24nXSxcXG5bdHlwZT0ncmVzZXQnXSxcXG5bdHlwZT0nc3VibWl0J10ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XFxufVxcblxcbi8qKlxcbiAgICogUmVtb3ZlIHRoZSBpbm5lciBib3JkZXIgYW5kIHBhZGRpbmcgaW4gRmlyZWZveC5cXG4gICAqL1xcblxcbmJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT0nYnV0dG9uJ106Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9J3Jlc2V0J106Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9J3N1Ym1pdCddOjotbW96LWZvY3VzLWlubmVyIHtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi8qKlxcbiAgICogUmVzdG9yZSB0aGUgZm9jdXMgc3R5bGVzIHVuc2V0IGJ5IHRoZSBwcmV2aW91cyBydWxlLlxcbiAgICovXFxuXFxuYnV0dG9uOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPSdidXR0b24nXTotbW96LWZvY3VzcmluZyxcXG5bdHlwZT0ncmVzZXQnXTotbW96LWZvY3VzcmluZyxcXG5bdHlwZT0nc3VibWl0J106LW1vei1mb2N1c3Jpbmcge1xcbiAgb3V0bGluZTogMXB4IGRvdHRlZCBCdXR0b25UZXh0O1xcbn1cXG5cXG4vKipcXG4gICAqIENvcnJlY3QgdGhlIHBhZGRpbmcgaW4gRmlyZWZveC5cXG4gICAqL1xcblxcbmZpZWxkc2V0IHtcXG4gIHBhZGRpbmc6IDAuMzVlbSAwLjc1ZW0gMC42MjVlbTtcXG59XFxuXFxuLyoqXFxuICAgKiAxLiBDb3JyZWN0IHRoZSB0ZXh0IHdyYXBwaW5nIGluIEVkZ2UgYW5kIElFLlxcbiAgICogMi4gQ29ycmVjdCB0aGUgY29sb3IgaW5oZXJpdGFuY2UgZnJvbSBgZmllbGRzZXRgIGVsZW1lbnRzIGluIElFLlxcbiAgICogMy4gUmVtb3ZlIHRoZSBwYWRkaW5nIHNvIGRldmVsb3BlcnMgYXJlIG5vdCBjYXVnaHQgb3V0IHdoZW4gdGhleSB6ZXJvIG91dFxcbiAgICogICAgYGZpZWxkc2V0YCBlbGVtZW50cyBpbiBhbGwgYnJvd3NlcnMuXFxuICAgKi9cXG5cXG5sZWdlbmQge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xcbiAgY29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cXG4gIGRpc3BsYXk6IHRhYmxlOyAvKiAxICovXFxuICBtYXgtd2lkdGg6IDEwMCU7IC8qIDEgKi9cXG4gIHBhZGRpbmc6IDA7IC8qIDMgKi9cXG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7IC8qIDEgKi9cXG59XFxuXFxuLyoqXFxuICAgKiBBZGQgdGhlIGNvcnJlY3QgdmVydGljYWwgYWxpZ25tZW50IGluIENocm9tZSwgRmlyZWZveCwgYW5kIE9wZXJhLlxcbiAgICovXFxuXFxucHJvZ3Jlc3Mge1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG4vKipcXG4gICAqIFJlbW92ZSB0aGUgZGVmYXVsdCB2ZXJ0aWNhbCBzY3JvbGxiYXIgaW4gSUUgMTArLlxcbiAgICovXFxuXFxudGV4dGFyZWEge1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi8qKlxcbiAgICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gSUUgMTAuXFxuICAgKiAyLiBSZW1vdmUgdGhlIHBhZGRpbmcgaW4gSUUgMTAuXFxuICAgKi9cXG5cXG5bdHlwZT0nY2hlY2tib3gnXSxcXG5bdHlwZT0ncmFkaW8nXSB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXFxuICBwYWRkaW5nOiAwOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAgICogQ29ycmVjdCB0aGUgY3Vyc29yIHN0eWxlIG9mIGluY3JlbWVudCBhbmQgZGVjcmVtZW50IGJ1dHRvbnMgaW4gQ2hyb21lLlxcbiAgICovXFxuXFxuW3R5cGU9J251bWJlciddOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxcblt0eXBlPSdudW1iZXInXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi8qKlxcbiAgICogMS4gQ29ycmVjdCB0aGUgb2RkIGFwcGVhcmFuY2UgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXFxuICAgKiAyLiBDb3JyZWN0IHRoZSBvdXRsaW5lIHN0eWxlIGluIFNhZmFyaS5cXG4gICAqL1xcblxcblt0eXBlPSdzZWFyY2gnXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDsgLyogMSAqL1xcbiAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICAgKiBSZW1vdmUgdGhlIGlubmVyIHBhZGRpbmcgaW4gQ2hyb21lIGFuZCBTYWZhcmkgb24gbWFjT1MuXFxuICAgKi9cXG5cXG5bdHlwZT0nc2VhcmNoJ106Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG4vKipcXG4gICAqIDEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuICAgKiAyLiBDaGFuZ2UgZm9udCBwcm9wZXJ0aWVzIHRvIGBpbmhlcml0YCBpbiBTYWZhcmkuXFxuICAgKi9cXG5cXG46Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyAvKiAxICovXFxuICBmb250OiBpbmhlcml0OyAvKiAyICovXFxufVxcblxcbi8qIEludGVyYWN0aXZlXFxuICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qXFxuICAgKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBFZGdlLCBJRSAxMCssIGFuZCBGaXJlZm94LlxcbiAgICovXFxuXFxuZGV0YWlscyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLypcXG4gICAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIGFsbCBicm93c2Vycy5cXG4gICAqL1xcblxcbnN1bW1hcnkge1xcbiAgZGlzcGxheTogbGlzdC1pdGVtO1xcbn1cXG5cXG4vKiBNaXNjXFxuICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAgICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTArLlxcbiAgICovXFxuXFxudGVtcGxhdGUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICAgKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMC5cXG4gICAqL1xcblxcbltoaWRkZW5dIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2FwcC5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYXBwLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGZ1bmN0aW9uIHNjcm9sbFRvKGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gIHdpbmRvdy5zY3JvbGwoe1xuICAgIGJlaGF2aW9yOiAnc21vb3RoJyxcbiAgICBsZWZ0OiAwLFxuICAgIHRvcDogZWxlbWVudC5vZmZzZXRUb3AsXG4gIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRJbWFnZSgpOiBzdHJpbmcge1xuICBjb25zdCBjc3NWYWx1ZSA9IGdldENvbXB1dGVkU3R5bGUoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KS5nZXRQcm9wZXJ0eVZhbHVlKFxuICAgICctLWltYWdlLXVybCdcbiAgKVxuICBjb25zdCByZW1vdmVVcmxFbmNhcHN1bGF0aW9uID0gY3NzVmFsdWVcbiAgICAuc3Vic3RyaW5nKDQsIGNzc1ZhbHVlLmxlbmd0aCAtIDEpXG4gICAgLnJlcGxhY2UoL1tcIl0rL2csICcnKVxuICByZXR1cm4gcmVtb3ZlVXJsRW5jYXBzdWxhdGlvblxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0SW1hZ2UodXJsOiBzdHJpbmcpIHtcbiAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLWltYWdlLXVybCcsIGB1cmwoXCIke3VybH1cIilgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29sdW1ucygpOiBzdHJpbmcge1xuICBjb25zdCBjc3NWYWx1ZSA9IGdldENvbXB1dGVkU3R5bGUoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KS5nZXRQcm9wZXJ0eVZhbHVlKFxuICAgICctLWdyaWQtY29sdW1ucydcbiAgKVxuICByZXR1cm4gY3NzVmFsdWVcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldENvbHVtbnMoc2l6ZTogbnVtYmVyKSB7XG4gIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1ncmlkLWNvbHVtbnMnLCBTdHJpbmcoc2l6ZSkpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3dzKCk6IHN0cmluZyB7XG4gIGNvbnN0IGNzc1ZhbHVlID0gZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpLmdldFByb3BlcnR5VmFsdWUoXG4gICAgJy0tZ3JpZC1yb3dzJ1xuICApXG4gIHJldHVybiBjc3NWYWx1ZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0Um93cyhzaXplOiBudW1iZXIpIHtcbiAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLWdyaWQtcm93cycsIFN0cmluZyhzaXplKSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFdpbigpOiBzdHJpbmcge1xuICBjb25zdCBjc3NWYWx1ZSA9IGdldENvbXB1dGVkU3R5bGUoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KS5nZXRQcm9wZXJ0eVZhbHVlKFxuICAgICctLXdpbidcbiAgKVxuICByZXR1cm4gY3NzVmFsdWVcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldFdpbihzaXplOiBudW1iZXIpIHtcbiAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLXdpbicsIFN0cmluZyhzaXplKSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFRpbWVyKCk6IHN0cmluZyB7XG4gIGNvbnN0IGNzc1ZhbHVlID0gZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpLmdldFByb3BlcnR5VmFsdWUoXG4gICAgJy0tdGltZXInXG4gIClcbiAgcmV0dXJuIGNzc1ZhbHVlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRUaW1lcihzaXplOiBudW1iZXIpIHtcbiAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLXRpbWVyJywgc2l6ZSArICdzJylcbn1cbiIsImltcG9ydCB7IGdldFdpbiwgc2V0VGltZXIsIHNldFdpbiB9IGZyb20gJy4uL2NvbW1vbidcbmltcG9ydCBHcmlkIGZyb20gJy4uL21haW4vZ3JpZC9ncmlkJ1xuaW1wb3J0IFRpbWVyIGZyb20gJy4vdGltZXInXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUge1xuICBsb2FkZWRUaW1lcjogYW55XG4gIGxvYWRlZFBpbmdlcjogYW55XG4gIHRpbWVyOiBUaW1lclxuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmxvYWRlZFRpbWVyID0gbnVsbFxuICAgIHRoaXMubG9hZGVkUGluZ2VyID0gbnVsbFxuICAgIHRoaXMudGltZXIgPSBuZXcgVGltZXIoKVxuICB9XG5cbiAgcHVibGljIHN0b3AoY2FudmFzOiBIVE1MTWFwRWxlbWVudCk6IHZvaWQge1xuICAgIGNvbnN0IG92ZXJsYXlEb20gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3ZlcmxheScpXG4gICAgaWYgKG92ZXJsYXlEb20pIGNhbnZhcy5yZW1vdmVDaGlsZChvdmVybGF5RG9tKVxuICAgIGlmICh0aGlzLmxvYWRlZFRpbWVyICE9PSBudWxsKSBjbGVhclRpbWVvdXQodGhpcy5sb2FkZWRUaW1lcilcbiAgICBpZiAodGhpcy5sb2FkZWRQaW5nZXIgIT09IG51bGwpIGNsZWFySW50ZXJ2YWwodGhpcy5sb2FkZWRQaW5nZXIpXG4gICAgc2V0VGltZXIoMClcbiAgfVxuXG4gIHB1YmxpYyBzdGFydChjYW52YXM6IEhUTUxNYXBFbGVtZW50KTogdm9pZCB7XG4gICAgdGhpcy5zdG9wKGNhbnZhcylcblxuICAgIEdyaWQuc2h1ZmZsZShjYW52YXMpXG5cbiAgICBzZXRXaW4oMClcbiAgICBzZXRUaW1lcigwKVxuXG4gICAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgb3ZlcmxheS5pZCA9ICdvdmVybGF5J1xuICAgIGNhbnZhcy5hcHBlbmRDaGlsZChvdmVybGF5KVxuXG4gICAgdGhpcy5sb2FkZWRUaW1lciA9IHNldFRpbWVvdXQoKHgpID0+IHtcbiAgICAgIGNvbnN0IG92ZXJsYXlEb20gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3ZlcmxheScpXG4gICAgICBpZiAob3ZlcmxheURvbSkgY2FudmFzLnJlbW92ZUNoaWxkKG92ZXJsYXlEb20pXG5cbiAgICAgIHRoaXMudGltZXIucmVzZXQoKVxuICAgICAgdGhpcy50aW1lci5zdGFydCgpXG4gICAgICB0aGlzLmxvYWRlZFBpbmdlciA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgY29uc3Qgd2luID0gZ2V0V2luKCkgPT09ICcxJ1xuXG4gICAgICAgIGlmICh3aW4pIHtcbiAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMubG9hZGVkUGluZ2VyKVxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgYWxlcnQoYHlvdSB3aW4hIFlvdSBjb21wbGV0ZWQgdGhlIGNoYWxsZW5nZSFgKVxuICAgICAgICAgIH0sIDMwMClcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHRpbWUgPSBNYXRoLnJvdW5kKHRoaXMudGltZXIuZ2V0VGltZSgpIC8gMTAwMClcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLXRpbWVyJywgYCcke3RpbWV9cydgKVxuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0td2luJywgYCcwJ2ApXG4gICAgICB9LCAxMDApXG4gICAgICB0aGlzLmxvYWRlZFRpbWVyID0gbnVsbFxuICAgIH0sIDQwMDApXG4gIH1cblxuICBwdWJsaWMgY2hlY2tXaW4oKTogdm9pZCB7XG4gICAgbGV0IHdpbiA9IHRydWVcblxuICAgIGNvbnN0IGFyZWFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYXJlYScpXG5cbiAgICBhcmVhcy5mb3JFYWNoKChhcmVhKSA9PiB7XG4gICAgICBjb25zdCBvcmlnaW5hbE9yZGVyID0gYXJlYS5nZXRBdHRyaWJ1dGUoJ2RhdGEtb3JkZXInKVxuICAgICAgY29uc3QgYWN0dWFsT3JkZXIgPSBhcmVhLnN0eWxlLm9yZGVyXG4gICAgICBpZiAoYWN0dWFsT3JkZXIgIT09IG9yaWdpbmFsT3JkZXIpIHdpbiA9IGZhbHNlXG4gICAgfSlcblxuICAgIGlmICh3aW4pIHNldFdpbigxKVxuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUaW1lciB7XG4gIHB1YmxpYyBpc1J1bm5pbmc6IGJvb2xlYW5cbiAgcHVibGljIG92ZXJhbGxUaW1lOiBudW1iZXJcbiAgcHVibGljIHN0YXJ0VGltZTogbnVtYmVyXG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuaXNSdW5uaW5nID0gZmFsc2VcbiAgICB0aGlzLnN0YXJ0VGltZSA9IDBcbiAgICB0aGlzLm92ZXJhbGxUaW1lID0gMFxuICB9XG5cbiAgcHVibGljIF9nZXRUaW1lRWxhcHNlZFNpbmNlTGFzdFN0YXJ0KCk6IG51bWJlciB7XG4gICAgaWYgKCF0aGlzLnN0YXJ0VGltZSkgcmV0dXJuIDBcbiAgICByZXR1cm4gRGF0ZS5ub3coKSAtIHRoaXMuc3RhcnRUaW1lXG4gIH1cblxuICBwdWJsaWMgZ2V0VGltZSgpOiBudW1iZXIge1xuICAgIGlmICghdGhpcy5zdGFydFRpbWUpIHJldHVybiAwXG4gICAgaWYgKHRoaXMuaXNSdW5uaW5nKVxuICAgICAgcmV0dXJuIHRoaXMub3ZlcmFsbFRpbWUgKyB0aGlzLl9nZXRUaW1lRWxhcHNlZFNpbmNlTGFzdFN0YXJ0KClcbiAgICByZXR1cm4gdGhpcy5vdmVyYWxsVGltZVxuICB9XG5cbiAgcHVibGljIHJlc2V0KCk6IHZvaWQge1xuICAgIHRoaXMub3ZlcmFsbFRpbWUgPSAwXG5cbiAgICBpZiAodGhpcy5pc1J1bm5pbmcpIHtcbiAgICAgIHRoaXMuc3RhcnRUaW1lID0gRGF0ZS5ub3coKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5zdGFydFRpbWUgPSAwXG4gIH1cblxuICBwdWJsaWMgc3RhcnQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNSdW5uaW5nKSByZXR1cm4gY29uc29sZS5lcnJvcignVGltZXIgaXMgYWxyZWFkeSBydW5uaW5nJylcbiAgICB0aGlzLmlzUnVubmluZyA9IHRydWVcbiAgICB0aGlzLnN0YXJ0VGltZSA9IERhdGUubm93KClcbiAgfVxuXG4gIHB1YmxpYyBzdG9wKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5pc1J1bm5pbmcpIHJldHVybiBjb25zb2xlLmVycm9yKCdUaW1lciBpcyBhbHJlYWR5IHN0b3BwZWQnKVxuICAgIHRoaXMuaXNSdW5uaW5nID0gZmFsc2VcbiAgICB0aGlzLm92ZXJhbGxUaW1lID0gdGhpcy5vdmVyYWxsVGltZSArIHRoaXMuX2dldFRpbWVFbGFwc2VkU2luY2VMYXN0U3RhcnQoKVxuICB9XG59XG4iLCJpbXBvcnQgeyBzY3JvbGxUbyB9IGZyb20gJy4uL2NvbW1vbidcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3JlZXRlciB7XG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihwdWJsaWMgZ3JlZXRpbmc6IHN0cmluZywgcHVibGljIGF1dGhvcjogc3RyaW5nKSB7fVxuICBwdWJsaWMgc3RhcnQoY29udGFpbmVyOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpXG4gICAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpXG4gICAgaDEudGV4dENvbnRlbnQgPSBgJHt0aGlzLmdyZWV0aW5nfSFgXG5cbiAgICBjb25zdCBzdWJ0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIHN1YnRpdGxlLmlubmVySFRNTCA9IGBtYWRlIHdpdGggbG92ZSBieSA8ZW0+PGEgaHJlZj1cImh0dHBzOi8vYWJvdXQubWUvYnBhbG1hXCIgdGFyZ2V0PVwiX2JsYW5rXCI+JHt0aGlzLmF1dGhvcn08L2E+PC9lbT5gXG5cbiAgICBjb25zdCBjYWxsVG9BY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIGNhbGxUb0FjdGlvbi50ZXh0Q29udGVudCA9IGBQbGF5YFxuICAgIGNhbGxUb0FjdGlvbi50eXBlID0gJ2J1dHRvbidcblxuICAgIGNhbGxUb0FjdGlvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGNvbnN0IGFuY2hvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICdtYWluPmgyOmZpcnN0LW9mLXR5cGUnXG4gICAgICApIGFzIEhUTUxFbGVtZW50XG4gICAgICBpZiAoYW5jaG9yKSBzZXRUaW1lb3V0KCgpID0+IHNjcm9sbFRvKGFuY2hvciksIDE1MClcbiAgICB9KVxuXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGgxKVxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChzdWJ0aXRsZSlcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoY2FsbFRvQWN0aW9uKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkZXIpXG5cbiAgICBjYWxsVG9BY3Rpb24uZm9jdXMoKVxuICB9XG59XG4iLCJpbXBvcnQgeyBnZXRDb2x1bW5zLCBzZXRDb2x1bW5zIH0gZnJvbSAnLi4vLi4vY29tbW9uJ1xuaW1wb3J0IE1haW4gZnJvbSAnLi4vbWFpbidcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29sdW1uc0lucHV0IHtcbiAgcHVibGljIGNvbnN0cnVjdG9yKCkge31cblxuICBwdWJsaWMgc3RhcnQoY29udGFpbmVyOiBIVE1MRWxlbWVudCwgbWFpbjogTWFpbikge1xuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGxhYmVsLnRleHRDb250ZW50ID0gYENvbHVtbnNgXG4gICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnZ3JpZC1jb2x1bW5zJylcblxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIGlucHV0LmlkID0gJ2dyaWQtY29sdW1ucydcbiAgICBpbnB1dC50eXBlID0gJ251bWJlcidcbiAgICBpbnB1dC5taW4gPSAnMidcbiAgICBpbnB1dC5tYXggPSAnMTInXG4gICAgaW5wdXQudmFsdWUgPSBnZXRDb2x1bW5zKClcbiAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZSkgPT4ge1xuICAgICAgc2V0Q29sdW1ucyhOdW1iZXIoaW5wdXQudmFsdWUpKVxuICAgICAgbWFpbi5ncmlkLnN0YXJ0KG1haW4pXG4gICAgfSlcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbClcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW5wdXQpXG4gIH1cbn1cbiIsImltcG9ydCB7IGdldENvbHVtbnMsIGdldEltYWdlLCBnZXRSb3dzIH0gZnJvbSAnLi4vLi4vY29tbW9uJ1xuaW1wb3J0IE1haW4gZnJvbSAnLi4vbWFpbidcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3JpZCB7XG4gIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgcHVibGljIHN0YXJ0KG1haW46IE1haW4pIHtcbiAgICBjb25zdCBjb2x1bW5zID0gZ2V0Q29sdW1ucygpXG4gICAgY29uc3Qgcm93cyA9IGdldFJvd3MoKVxuICAgIGNvbnN0IGdyaWRTaXplID0gTnVtYmVyKGNvbHVtbnMpICogTnVtYmVyKHJvd3MpXG5cbiAgICBHcmlkLmNsZWFuKG1haW4ubWFwLCBtYWluKVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBncmlkU2l6ZTsgaSsrKSB7XG4gICAgICBjb25zdCBhcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYXJlYScpXG4gICAgICBhcmVhLnNldEF0dHJpYnV0ZSgnZGF0YS1vcmRlcicsIFN0cmluZyhpKSlcbiAgICAgIGFyZWEuc3R5bGUub3JkZXIgPSBTdHJpbmcoaSlcbiAgICAgIGFyZWEuZHJhZ2dhYmxlID0gdHJ1ZVxuXG4gICAgICBhcmVhLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIChlKSA9PiBHcmlkLm9uRHJhZ1N0YXJ0KGUpKVxuICAgICAgYXJlYS5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIChlKSA9PiBHcmlkLm9uRHJhZ092ZXIoZSkpXG4gICAgICBhcmVhLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdsZWF2ZScsIChlKSA9PiBHcmlkLm9uRHJhZ0xlYXZlKGUpKVxuICAgICAgYXJlYS5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgKGUpID0+IEdyaWQub25EcmFnRHJvcChlLCBtYWluKSlcblxuICAgICAgY29uc3Qgb3JpZ2luYWxPcmRlciA9IE51bWJlcihhcmVhLmRhdGFzZXQub3JkZXIpXG4gICAgICBjb25zdCBpbml0aWFsUm93ID0gTWF0aC5jZWlsKChvcmlnaW5hbE9yZGVyICsgMSkgLyBOdW1iZXIoY29sdW1ucykpXG4gICAgICBjb25zdCBpbml0aWFsQ29sdW1uID0gKG9yaWdpbmFsT3JkZXIgJSBOdW1iZXIoY29sdW1ucykpICsgMVxuXG4gICAgICAvLyBHZXR0aW5nIHRoZSBoZWlnaHQgb2YgdGhlIGNvbnRhaW5lciBhcyB0aGUgaW1hZ2UgaXMgc2V0IHRvIGJhY2tncm91bmQtcG9zaXRpb246IGNvdmVyO1xuICAgICAgLy8gV2UgbmVlZCB0byBjYWxjdWxhdGUgdGhlIHBvc2l0aW9uIG9mIHRoZSBiYWNrZ3JvdW5kIG9mIGVhY2ggc3F1YXJlIGluIHRoZSBncmlkXG4gICAgICBjb25zdCB3aWR0aCA9IG1haW4ubWFwLmNsaWVudFdpZHRoXG4gICAgICBjb25zdCBoZWlnaHQgPSBtYWluLm1hcC5jbGllbnRIZWlnaHRcblxuICAgICAgLy8gTG9hZGluZyBhIHRlbXAgaW1hZ2UgdG8gZ2V0IHRoZSBzaXplIG9mIHRoZSBpbWFnZSBvbmNlIGxvYWRlZFxuICAgICAgY29uc3QgdGVtcEltYWdlID0gbmV3IEltYWdlKClcbiAgICAgIHRlbXBJbWFnZS5zcmMgPSBnZXRJbWFnZSgpXG4gICAgICBjb25zdCBpbWFnZUhlaWdodCA9IHRlbXBJbWFnZS5oZWlnaHRcbiAgICAgIGNvbnN0IGltYWdlV2lkdGggPSB0ZW1wSW1hZ2Uud2lkdGhcblxuICAgICAgLy8gQWRqdXN0aW5nIGlmIHRoZSBjb250YWluZXIgb3IgdGhlIGltYWdlIGFyZSBpbiBsYW5kc2NhcGUgb3IgcG9ydHJhaXQgbW9kZVxuICAgICAgY29uc3QgaW1hZ2VSYXRpbyA9IGltYWdlV2lkdGggLyBpbWFnZUhlaWdodFxuICAgICAgY29uc3QgY29udGFpbmVyUmF0aW8gPSB3aWR0aCAvIGhlaWdodFxuXG4gICAgICBsZXQgcmVhbFdpZHRoXG4gICAgICBsZXQgcmVhbEhlaWdodFxuXG4gICAgICBpZiAoY29udGFpbmVyUmF0aW8gPiBpbWFnZVJhdGlvKSB7XG4gICAgICAgIHJlYWxXaWR0aCA9IHdpZHRoXG4gICAgICAgIHJlYWxIZWlnaHQgPSB3aWR0aCAvIGltYWdlUmF0aW9cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlYWxXaWR0aCA9IGhlaWdodCAqIGltYWdlUmF0aW9cbiAgICAgICAgcmVhbEhlaWdodCA9IGhlaWdodFxuICAgICAgfVxuXG4gICAgICAvLyBBZGp1c3RpbmcgZm9yIG91dGVyIGJvcmRlcnMgMXB4IGVhY2hcbiAgICAgIHJlYWxXaWR0aCArPSAyXG4gICAgICByZWFsSGVpZ2h0ICs9IDJcblxuICAgICAgY29uc3QgcmVhbEJhY2tncm91bmRTaXplID0gYCR7cmVhbFdpZHRofXB4ICR7cmVhbEhlaWdodH1weGBcblxuICAgICAgYXJlYS5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9IHJlYWxCYWNrZ3JvdW5kU2l6ZVxuXG4gICAgICBjb25zdCBhcmVhUG9zaXRpb25YID0gd2lkdGggLyBOdW1iZXIoY29sdW1ucylcbiAgICAgIGNvbnN0IGFyZWFQb3NpdGlvblkgPSBoZWlnaHQgLyBOdW1iZXIocm93cylcbiAgICAgIGNvbnN0IHNocmlua1dpZHRoID0gKHJlYWxXaWR0aCAtIHdpZHRoKSAvIDJcbiAgICAgIGNvbnN0IHNocmlua0hlaWdodCA9IChyZWFsSGVpZ2h0IC0gaGVpZ2h0KSAvIDJcblxuICAgICAgLy8gQ2FsY3VsYXRpbmcgdGhlIGNvcnJlc3BvbmRlbnQgcG9zaXRpb24gWCBhbmQgWSBvZiB0aGUgYmFja2dyb3VuZFxuICAgICAgLy8gYmFzZWQgb24gdGhlIHNpemUgb2YgdGhlIHNxdWFyZSwgdGhlIGltYWdlIGFuZCB0aGUgY2FudmFzXG4gICAgICBhcmVhLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvblggPVxuICAgICAgICAtYXJlYVBvc2l0aW9uWCAqIChpbml0aWFsQ29sdW1uIC0gMSkgLSBzaHJpbmtXaWR0aCAtIDEgKyAncHgnXG4gICAgICBhcmVhLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvblkgPVxuICAgICAgICAtYXJlYVBvc2l0aW9uWSAqIChpbml0aWFsUm93IC0gMSkgLSBzaHJpbmtIZWlnaHQgLSAxICsgJ3B4J1xuXG4gICAgICBtYWluLm1hcC5hcHBlbmRDaGlsZChhcmVhKVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc3RhdGljIGNsZWFuKGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsIG1haW46IE1haW4pOiB2b2lkIHtcbiAgICBjb25zdCBvbGRBcmVhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2FyZWEnKVxuICAgIGZvciAoY29uc3QgYXJlYSBvZiBvbGRBcmVhcykge1xuICAgICAgYXJlYS5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCAoZSkgPT4gR3JpZC5vbkRyYWdTdGFydChlKSlcbiAgICAgIGFyZWEucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCAoZSkgPT4gR3JpZC5vbkRyYWdPdmVyKGUpKVxuICAgICAgYXJlYS5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnbGVhdmUnLCAoZSkgPT4gR3JpZC5vbkRyYWdMZWF2ZShlKSlcbiAgICAgIGFyZWEucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJvcCcsIChlKSA9PiBHcmlkLm9uRHJhZ0Ryb3AoZSwgbWFpbikpXG4gICAgICBjb250YWluZXIucmVtb3ZlQ2hpbGQoYXJlYSlcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIHNodWZmbGUoY29udGFpbmVyOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgIGNvbnN0IHNpemUgPSBjb250YWluZXIuY2hpbGRFbGVtZW50Q291bnRcblxuICAgIGNvbnN0IGFyZWFzID0gY29udGFpbmVyLmNoaWxkcmVuIGFzIEhUTUxDb2xsZWN0aW9uT2Y8SFRNTEVsZW1lbnQ+XG4gICAgLy8gV2UgY3JlYXRlIGFuIGFycmF5IGZyb20gMSB0byAkc2l6ZVxuICAgIC8vIFdlIHB1dCBlYWNoIGVsZW1lbnQgaW4gdGhlIGFycmF5IGluIGFuIG9iamVjdCwgYW5kIGdpdmUgaXQgYSByYW5kb20gc29ydCBrZXlcbiAgICAvLyBXZSBzb3J0IHVzaW5nIHRoZSByYW5kb20ga2V5XG4gICAgY29uc3Qgc2h1ZmZsZWQgPSBbLi4uQXJyYXkoc2l6ZSkua2V5cygpXVxuICAgICAgLm1hcCgodmFsdWUpID0+ICh7IHZhbHVlLCBzb3J0OiBNYXRoLnJhbmRvbSgpIH0pKVxuICAgICAgLnNvcnQoKGEsIGIpID0+IGEuc29ydCAtIGIuc29ydClcbiAgICAgIC5tYXAoKHsgdmFsdWUgfSkgPT4gdmFsdWUpXG5cbiAgICAvLyBjaGFuZ2UgdGhlIG9yZGVyIGluIHRoZSBncmlkXG4gICAgY29uc3Qgb2xkQXJlYXNPcmRlciA9IFtdXG4gICAgY29uc3QgbmV3QXJlYXNPcmRlciA9IFtdXG4gICAgZm9yIChjb25zdCBhcmVhIG9mIGFyZWFzKSB7XG4gICAgICBjb25zdCBuZXdPcmRlciA9IHNodWZmbGVkWzBdXG4gICAgICBvbGRBcmVhc09yZGVyLnB1c2goYXJlYS5zdHlsZS5vcmRlcilcbiAgICAgIG5ld0FyZWFzT3JkZXIucHVzaChTdHJpbmcobmV3T3JkZXIpKVxuICAgICAgYXJlYS5zdHlsZS5vcmRlciA9IFN0cmluZyhuZXdPcmRlcilcbiAgICAgIHNodWZmbGVkLnNoaWZ0KClcbiAgICB9XG5cbiAgICAvLyBobW0gbmFzdHksIHNodWZmbGUgYWdhaW5cbiAgICBsZXQgc2FtZU9yZGVyID0gb2xkQXJlYXNPcmRlciA9PT0gbmV3QXJlYXNPcmRlclxuICAgIGlmIChzYW1lT3JkZXIpIHRoaXMuc2h1ZmZsZShjb250YWluZXIpXG4gIH1cblxuICBwcml2YXRlIHN0YXRpYyBvbkRyYWdEcm9wKGV2ZW50OiBEcmFnRXZlbnQsIG1haW46IE1haW4pOiB2b2lkIHtcbiAgICBpZiAoIWV2ZW50LmRhdGFUcmFuc2ZlcikgcmV0dXJuXG5cbiAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnRcbiAgICBjb25zdCB0YXJnZXRPcmRlciA9IHRhcmdldC5zdHlsZS5vcmRlclxuICAgIGNvbnN0IHNvdXJjZU9yZGVyID0gZXZlbnQuZGF0YVRyYW5zZmVyPy5nZXREYXRhKCd0ZXh0JylcbiAgICBjb25zdCBzb3VyY2VzID0gQXJyYXkuZnJvbShcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KCdbZGF0YS1vcmRlcl0nKVxuICAgIClcblxuICAgIGNvbnN0IHNvdXJjZSA9IHNvdXJjZXMuZmluZCgoeCkgPT4geC5zdHlsZS5vcmRlciA9PT0gc291cmNlT3JkZXIpXG4gICAgaWYgKHNvdXJjZSkge1xuICAgICAgc291cmNlLnN0eWxlLm9yZGVyID0gdGFyZ2V0T3JkZXJcbiAgICAgIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnYmFja2dyb3VuZC1jb2xvcicpXG4gICAgfVxuXG4gICAgdGFyZ2V0LnN0eWxlLm9yZGVyID0gc291cmNlT3JkZXJcbiAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ2JhY2tncm91bmQtY29sb3InKVxuXG4gICAgbWFpbi5nYW1lLmNoZWNrV2luKClcbiAgfVxuXG4gIHByaXZhdGUgc3RhdGljIG9uRHJhZ0xlYXZlKGV2ZW50OiBEcmFnRXZlbnQpOiB2b2lkIHtcbiAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnRcbiAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ2JhY2tncm91bmQtY29sb3InKVxuICB9XG5cbiAgcHJpdmF0ZSBzdGF0aWMgb25EcmFnT3ZlcihldmVudDogRHJhZ0V2ZW50KTogdm9pZCB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudFxuICAgIHRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmdiYSgzMCwgMTQ0LCAyNTUsIDAuNSknXG4gIH1cblxuICBwcml2YXRlIHN0YXRpYyBvbkRyYWdTdGFydChldmVudDogRHJhZ0V2ZW50KTogdm9pZCB7XG4gICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50XG4gICAgY29uc3Qgb3JkZXIgPSB0YXJnZXQuc3R5bGU/Lm9yZGVyIHx8ICcnXG4gICAgZXZlbnQuZGF0YVRyYW5zZmVyPy5zZXREYXRhKCd0ZXh0L3BsYWluJywgb3JkZXIpXG4gIH1cbn1cbiIsImltcG9ydCB7IGdldFJvd3MsIHNldFJvd3MgfSBmcm9tICcuLi8uLi9jb21tb24nXG5pbXBvcnQgTWFpbiBmcm9tICcuLi9tYWluJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3dzSW5wdXQge1xuICBwdWJsaWMgY29uc3RydWN0b3IoKSB7fVxuXG4gIHB1YmxpYyBzdGFydChjb250YWluZXI6IEhUTUxFbGVtZW50LCBtYWluOiBNYWluKSB7XG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSBgUm93c2BcbiAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdncmlkLXJvd3MnKVxuXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgaW5wdXQuaWQgPSAnZ3JpZC1yb3dzJ1xuICAgIGlucHV0LnR5cGUgPSAnbnVtYmVyJ1xuICAgIGlucHV0Lm1pbiA9ICcyJ1xuICAgIGlucHV0Lm1heCA9ICcxMidcbiAgICBpbnB1dC52YWx1ZSA9IGdldFJvd3MoKVxuICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKSA9PiB7XG4gICAgICBzZXRSb3dzKE51bWJlcihpbnB1dC52YWx1ZSkpXG4gICAgICBtYWluLmdyaWQuc3RhcnQobWFpbilcbiAgICB9KVxuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbnB1dClcbiAgfVxufVxuIiwiaW1wb3J0IHsgZ2V0SW1hZ2UsIHNldEltYWdlLCBzZXRUaW1lciB9IGZyb20gJy4uLy4uL2NvbW1vbidcbmltcG9ydCBNYWluIGZyb20gJy4uL21haW4nXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEltYWdlTG9hZEJ1dHRvbiB7XG4gIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgcHVibGljIHN0YXJ0KGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsIG1haW46IE1haW4pIHtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIGJ1dHRvbi5pZCA9ICdzZXQtdXJsJ1xuICAgIGJ1dHRvbi50eXBlID0gJ2J1dHRvbidcbiAgICBidXR0b24udGV4dENvbnRlbnQgPSAn4oa1IGxvYWQgaW1hZ2UnXG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgc2V0SW1hZ2UobWFpbi5pbWFnZUlucHV0LmlucHV0LnZhbHVlKVxuICAgICAgc2V0VGltZXIoMClcbiAgICAgIG1haW4uZ2FtZS5zdG9wKG1haW4ubWFwKVxuXG4gICAgICBjb25zdCB0ZW1wSW1hZ2UgPSBuZXcgSW1hZ2UoKVxuICAgICAgdGVtcEltYWdlLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiBtYWluLmdyaWQuc3RhcnQobWFpbikpXG4gICAgICB0ZW1wSW1hZ2Uuc3JjID0gZ2V0SW1hZ2UoKVxuICAgIH0pXG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9uKVxuICB9XG59XG4iLCJpbXBvcnQgeyBnZXRJbWFnZSwgc2V0SW1hZ2UgfSBmcm9tICcuLi8uLi9jb21tb24nXG5pbXBvcnQgTWFpbiBmcm9tICcuLi9tYWluJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbWFnZVJhbmRvbUJ1dHRvbiB7XG4gIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgcHVibGljIHN0YXJ0KGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsIG1haW46IE1haW4pIHtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIGJ1dHRvbi5pZCA9ICdyZXNldC11cmwnXG4gICAgYnV0dG9uLnR5cGUgPSAnYnV0dG9uJ1xuICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9ICfwn5CxIHJhbmRvbSdcblxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIG1haW4uZ2FtZS5zdG9wKG1haW4ubWFwKVxuXG4gICAgICBjb25zdCByYW5kb21IZWlnaHQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA3OTkpICsgNDAxXG4gICAgICBjb25zdCByYW5kb21XaWR0aCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDc5OSkgKyA0MDFcblxuICAgICAgY29uc3QgaW1hZ2VVcmwgPSBnZXRJbWFnZSgpXG4gICAgICBjb25zdCByZW1vdmVEZWZhdWx0VmFsdWVzID0gaW1hZ2VVcmwuc3BsaXQoJy8nKS5zbGljZSgwLCAtMikuam9pbignLycpXG4gICAgICBjb25zdCBuZXdVcmwgPSBgJHtyZW1vdmVEZWZhdWx0VmFsdWVzfS8ke3JhbmRvbVdpZHRofS8ke3JhbmRvbUhlaWdodH1gXG5cbiAgICAgIG1haW4uaW1hZ2VJbnB1dC5pbnB1dC52YWx1ZSA9IG5ld1VybFxuICAgICAgc2V0SW1hZ2UobmV3VXJsKVxuXG4gICAgICBjb25zdCB0ZW1wSW1hZ2UgPSBuZXcgSW1hZ2UoKVxuICAgICAgdGVtcEltYWdlLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiBtYWluLmdyaWQuc3RhcnQobWFpbikpXG4gICAgICB0ZW1wSW1hZ2Uuc3JjID0gZ2V0SW1hZ2UoKVxuICAgIH0pXG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9uKVxuICB9XG59XG4iLCJpbXBvcnQgeyBnZXRJbWFnZSwgc2V0SW1hZ2UgfSBmcm9tICcuLi8uLi9jb21tb24nXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVybElucHV0IHtcbiAgaW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnRcbiAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gIH1cblxuICBwdWJsaWMgc3RhcnQoY29udGFpbmVyOiBIVE1MRWxlbWVudCkge1xuICAgIGNvbnN0IGltYWdlID0gZ2V0SW1hZ2UoKVxuXG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSBgQ2hvb3NlIGFuIGltYWdlYFxuICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2ltYWdlLXVybCcpXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKVxuXG4gICAgY29uc3QgaW5wdXQgPSB0aGlzLmlucHV0XG4gICAgaW5wdXQuaWQgPSAnaW1hZ2UtdXJsJ1xuICAgIGlucHV0LnR5cGUgPSAndXJsJ1xuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCBpbWFnZSlcbiAgICBpbnB1dC52YWx1ZSA9IGltYWdlXG4gICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKSA9PiB7XG4gICAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicpIHNldEltYWdlKGlucHV0LnZhbHVlKVxuICAgIH0pXG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW5wdXQpXG4gIH1cbn1cbiIsImltcG9ydCBHYW1lIGZyb20gJy4uL2dhbWUvZ2FtZSdcbmltcG9ydCBDb2x1bW5zSW5wdXQgZnJvbSAnLi9ncmlkL2NvbHVtbnMtaW5wdXQnXG5pbXBvcnQgR3JpZCBmcm9tICcuL2dyaWQvZ3JpZCdcbmltcG9ydCBSb3dzSW5wdXQgZnJvbSAnLi9ncmlkL3Jvd3MtaW5wdXQnXG5pbXBvcnQgSW1hZ2VMb2FkQnV0dG9uIGZyb20gJy4vaW1hZ2UvbG9hZC1idXR0b24nXG5pbXBvcnQgSW1hZ2VSYW5kb21CdXR0b24gZnJvbSAnLi9pbWFnZS9yYW5kb20tYnV0dG9uJ1xuaW1wb3J0IFVybElucHV0IGZyb20gJy4vaW1hZ2UvdXJsLWlucHV0J1xuaW1wb3J0IFN0YXJ0QnV0dG9uIGZyb20gJy4vc3RhcnQtYnV0dG9uJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWluIHtcbiAgZ3JpZDogR3JpZFxuICBzdGFydEJ1dHRvbjogU3RhcnRCdXR0b25cbiAgbWFwOiBIVE1MTWFwRWxlbWVudFxuICBnYW1lOiBHYW1lXG4gIGNvbHVtbnNJbnB1dDogQ29sdW1uc0lucHV0XG4gIHJvd3NJbnB1dDogUm93c0lucHV0XG4gIGltYWdlSW5wdXQ6IFVybElucHV0XG4gIGltYWdlTG9hZEJ1dHRvbjogSW1hZ2VMb2FkQnV0dG9uXG4gIGltYWdlUmFuZG9tQnV0dG9uOiBJbWFnZVJhbmRvbUJ1dHRvblxuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmltYWdlSW5wdXQgPSBuZXcgVXJsSW5wdXQoKVxuICAgIHRoaXMuaW1hZ2VMb2FkQnV0dG9uID0gbmV3IEltYWdlTG9hZEJ1dHRvbigpXG4gICAgdGhpcy5pbWFnZVJhbmRvbUJ1dHRvbiA9IG5ldyBJbWFnZVJhbmRvbUJ1dHRvbigpXG4gICAgdGhpcy5jb2x1bW5zSW5wdXQgPSBuZXcgQ29sdW1uc0lucHV0KClcbiAgICB0aGlzLnJvd3NJbnB1dCA9IG5ldyBSb3dzSW5wdXQoKVxuICAgIHRoaXMuZ3JpZCA9IG5ldyBHcmlkKClcbiAgICB0aGlzLmdhbWUgPSBuZXcgR2FtZSgpXG4gICAgdGhpcy5zdGFydEJ1dHRvbiA9IG5ldyBTdGFydEJ1dHRvbigpXG4gICAgdGhpcy5tYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYXAnKVxuICB9XG5cbiAgcHVibGljIHN0YXJ0KGNvbnRhaW5lcjogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpXG5cbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9ICdTZXR0aW5ncydcbiAgICBtYWluLmFwcGVuZENoaWxkKHRpdGxlKVxuXG4gICAgLy8gSW1hZ2UgU2V0dGluZ3Mgc2VjdGlvblxuICAgIGNvbnN0IGltYWdlU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKVxuXG4gICAgdGhpcy5pbWFnZUlucHV0LnN0YXJ0KGltYWdlU2VjdGlvbilcbiAgICB0aGlzLmltYWdlTG9hZEJ1dHRvbi5zdGFydChpbWFnZVNlY3Rpb24sIHRoaXMpXG4gICAgdGhpcy5pbWFnZVJhbmRvbUJ1dHRvbi5zdGFydChpbWFnZVNlY3Rpb24sIHRoaXMpXG5cbiAgICBtYWluLmFwcGVuZENoaWxkKGltYWdlU2VjdGlvbilcblxuICAgIC8vIEdyaWQgU2V0dGluZ3Mgc2VjdGlvblxuICAgIGNvbnN0IGdyaWRTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpXG5cbiAgICBjb25zdCBzdWJ0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIHN1YnRpdGxlLnRleHRDb250ZW50ID0gYFNldHVwIHRoZSBHcmlkYFxuICAgIGdyaWRTZWN0aW9uLmFwcGVuZENoaWxkKHN1YnRpdGxlKVxuXG4gICAgdGhpcy5jb2x1bW5zSW5wdXQuc3RhcnQoZ3JpZFNlY3Rpb24sIHRoaXMpXG4gICAgdGhpcy5yb3dzSW5wdXQuc3RhcnQoZ3JpZFNlY3Rpb24sIHRoaXMpXG5cbiAgICBtYWluLmFwcGVuZENoaWxkKGdyaWRTZWN0aW9uKVxuXG4gICAgLy8gT3RoZXIgc3R1ZmZcbiAgICB0aGlzLm1hcC5pZCA9ICdncmlkJ1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB0aGlzLmdyaWQuc3RhcnQodGhpcykpXG5cbiAgICBtYWluLmFwcGVuZENoaWxkKHRoaXMubWFwKVxuXG4gICAgdGhpcy5zdGFydEJ1dHRvbi5zdGFydChtYWluLCB0aGlzKVxuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1haW4pXG4gIH1cbn1cbiIsImltcG9ydCBNYWluIGZyb20gJy4vbWFpbidcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhcnRCdXR0b24ge1xuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgcHVibGljIHN0YXJ0KGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsIG1haW46IE1haW4pIHtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IGBTdGFydGBcbiAgICBidXR0b24udHlwZSA9ICdidXR0b24nXG4gICAgYnV0dG9uLmlkID0gJ3N0YXJ0J1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiBtYWluLmdhbWUuc3RhcnQobWFpbi5tYXApKVxuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbilcbiAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9hcHAuc2NzcydcbmltcG9ydCB7IHNldENvbHVtbnMsIHNldEltYWdlLCBzZXRSb3dzIH0gZnJvbSAnLi9jb21tb24nXG5pbXBvcnQgR3JlZXRlciBmcm9tICcuL2dyZWV0ZXIvZ3JlZXRlcidcbmltcG9ydCBNYWluIGZyb20gJy4vbWFpbi9tYWluJ1xuXG5jb25zdCBncmVldGVyOiBHcmVldGVyID0gbmV3IEdyZWV0ZXIoJ0ppZ3NhdyBwdXp6bGUnLCAnQGJwYWxtYScpXG5jb25zdCBpbWFnZSA9ICdodHRwczovL3BsYWNla2l0dGVuLmNvbS9nLzMwMC80MDAnXG5jb25zdCByb3dzID0gMlxuY29uc3QgY29sdW1ucyA9IDJcblxuc2V0Um93cyhyb3dzKVxuc2V0Q29sdW1ucyhjb2x1bW5zKVxuc2V0SW1hZ2UoaW1hZ2UpXG5cbmNvbnN0IG1haW46IE1haW4gPSBuZXcgTWFpbigpXG5jb25zdCBhcHAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJylcblxuaWYgKGFwcCkge1xuICBncmVldGVyLnN0YXJ0KGFwcClcbiAgbWFpbi5zdGFydChhcHApXG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=