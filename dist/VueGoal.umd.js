(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["VueGoal"] = factory();
	else
		root["VueGoal"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "71bd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ThermometerStatistic_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("9e12");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ThermometerStatistic_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ThermometerStatistic_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ThermometerStatistic_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "90a4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Thermometer_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("92eb");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Thermometer_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Thermometer_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Thermometer_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "92eb":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "9e12":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "a86b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ThermometerStatistics_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("f309");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ThermometerStatistics_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ThermometerStatistics_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ThermometerStatistics_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "d181":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "f098":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ThermometerTicks_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("d181");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ThermometerTicks_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ThermometerTicks_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ThermometerTicks_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "f309":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "f6fd":
/***/ (function(module, exports) {

// document.currentScript polyfill by Adam Miller

// MIT license

(function(document){
  var currentScript = "currentScript",
      scripts = document.getElementsByTagName('script'); // Live NodeList collection

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function(){

        // IE 6-10 supports script readyState
        // IE 10+ support stack trace
        try { throw new Error(); }
        catch (err) {

          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
          for(i in scripts){
            if(scripts[i].src == res || scripts[i].readyState == "interactive"){
              return scripts[i];
            }
          }

          // If no match, return null
          return null;
        }
      }
    });
  }
})(document);


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __webpack_require__("f6fd")
  }

  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7baf49a7-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Thermometer/Thermometer.vue?vue&type=template&id=cf427d08&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"thermometer",class:_vm.classes},[_c('thermometer-statistics',{staticClass:"justify-content-between thermometer-statistics-left"},[_c('thermometer-statistic',{attrs:{"value":_vm.value,"format":_vm.format,"label":"Raised"}}),_c('thermometer-statistic',{attrs:{"value":_vm.completed,"label":"of goal reached"}})],1),_c('div',{staticClass:"thermometer-container"},[_c('div',{staticClass:"thermometer-tube"},[_c('div',{staticClass:"thermometer-inner-tube"},[_c('div',{staticClass:"thermometer-value",style:({height: ((_vm.percentage(_vm.height)) + "%")})})])]),_vm._m(0)]),_c('thermometer-ticks',{attrs:{"min":_vm.min,"max":_vm.max,"value":_vm.value,"ticks":_vm.ticks,"values":_vm.values,"format":_vm.format,"intervals":_vm.intervals,"percentages":_vm.percentages}}),_c('thermometer-statistics',{staticClass:"justify-content-center thermometer-statistics-right"},[_c('thermometer-statistic',{attrs:{"value":_vm.goal,"format":_vm.format,"label":"Goal"}})],1)],1)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"thermometer-reservoir"},[_c('div',{staticClass:"thermometer-reservoir-reflection"})])}]


// CONCATENATED MODULE: ./src/Thermometer/Thermometer.vue?vue&type=template&id=cf427d08&

// CONCATENATED MODULE: ./src/Thermometer/PercentageMixin.js
/* harmony default export */ var PercentageMixin = ({
  methods: {
    percentage(value) {
      return !value ? 0 : Math.round(value / ((this.goal || this.max) - this.min) * 100);
    }

  }
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7baf49a7-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Thermometer/ThermometerTicks.vue?vue&type=template&id=7c6d0595&
var ThermometerTicksvue_type_template_id_7c6d0595_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"thermometer-ticks"},[_vm._l((_vm.currentTicks),function(tick,i){return [_c('div',{key:tick,staticClass:"thermometer-tick"},[_c('span',{key:tick,staticClass:"thermometer-tick-label"},[_vm._v("\n                "+_vm._s(_vm.format(tick, _vm.percentage(tick)))+"\n            ")])]),(_vm.intervals && i + 1 < _vm.currentTicks.length)?_vm._l((9),function(i){return _c('div',{key:(tick + "-" + i),staticClass:"thermometer-interval-tick",class:{'thermometer-half-tick': 5 === i}})}):_vm._e()]})],2)}
var ThermometerTicksvue_type_template_id_7c6d0595_staticRenderFns = []


// CONCATENATED MODULE: ./src/Thermometer/ThermometerTicks.vue?vue&type=template&id=7c6d0595&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Thermometer/ThermometerTicks.vue?vue&type=script&lang=js&
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

/* harmony default export */ var ThermometerTicksvue_type_script_lang_js_ = ({
  name: 'ThermometerTicks',
  mixins: [PercentageMixin],
  props: {
    min: Number,
    max: Number,
    percentages: Boolean,
    ticks: [Boolean, Number, Array],
    intervals: {
      type: Boolean,
      default: false
    },
    values: {
      type: Boolean,
      default: function () {
        return this.percentages ? false : true;
      }
    },
    format: {
      type: Function,
      default: value => value
    }
  },
  computed: {
    currentTicks() {
      if (this.ticks instanceof Array) {
        return this.ticks;
      } else if (!isNaN(this.ticks) || this.ticks === true) {
        const ticks = [this.min],
              total = this.ticks === true && 8 || this.ticks,
              interval = (this.max - this.min) / total;

        for (let x = 1; x <= total; x++) {
          ticks.push(interval * x);
        }

        return ticks.reverse();
      }
    },

    classes() {
      return {};
    }

  },

  data() {
    return {};
  }

});
// CONCATENATED MODULE: ./src/Thermometer/ThermometerTicks.vue?vue&type=script&lang=js&
 /* harmony default export */ var Thermometer_ThermometerTicksvue_type_script_lang_js_ = (ThermometerTicksvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/Thermometer/ThermometerTicks.vue?vue&type=style&index=0&lang=scss&
var ThermometerTicksvue_type_style_index_0_lang_scss_ = __webpack_require__("f098");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
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
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
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

// CONCATENATED MODULE: ./src/Thermometer/ThermometerTicks.vue






/* normalize component */

var component = normalizeComponent(
  Thermometer_ThermometerTicksvue_type_script_lang_js_,
  ThermometerTicksvue_type_template_id_7c6d0595_render,
  ThermometerTicksvue_type_template_id_7c6d0595_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var ThermometerTicks = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7baf49a7-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Thermometer/ThermometerStatistic.vue?vue&type=template&id=b56ba8b2&
var ThermometerStatisticvue_type_template_id_b56ba8b2_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"thermometer-statistic"},[_c('div',{staticClass:"thermometer-statistic-value"},[_vm._v(_vm._s(_vm.format(_vm.value)))]),_c('div',{staticClass:"thermometer-statistic-label"},[_vm._v(_vm._s(_vm.label))])])}
var ThermometerStatisticvue_type_template_id_b56ba8b2_staticRenderFns = []


// CONCATENATED MODULE: ./src/Thermometer/ThermometerStatistic.vue?vue&type=template&id=b56ba8b2&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Thermometer/ThermometerStatistic.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
/* harmony default export */ var ThermometerStatisticvue_type_script_lang_js_ = ({
  name: 'ThermometerStatistic',
  props: {
    value: [String, Number],
    label: String,
    format: {
      type: Function,
      default: value => value
    }
  }
});
// CONCATENATED MODULE: ./src/Thermometer/ThermometerStatistic.vue?vue&type=script&lang=js&
 /* harmony default export */ var Thermometer_ThermometerStatisticvue_type_script_lang_js_ = (ThermometerStatisticvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/Thermometer/ThermometerStatistic.vue?vue&type=style&index=0&lang=scss&
var ThermometerStatisticvue_type_style_index_0_lang_scss_ = __webpack_require__("71bd");

// CONCATENATED MODULE: ./src/Thermometer/ThermometerStatistic.vue






/* normalize component */

var ThermometerStatistic_component = normalizeComponent(
  Thermometer_ThermometerStatisticvue_type_script_lang_js_,
  ThermometerStatisticvue_type_template_id_b56ba8b2_render,
  ThermometerStatisticvue_type_template_id_b56ba8b2_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var ThermometerStatistic = (ThermometerStatistic_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7baf49a7-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Thermometer/ThermometerStatistics.vue?vue&type=template&id=84f01fbe&
var ThermometerStatisticsvue_type_template_id_84f01fbe_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"thermometer-statistics"},[_vm._t("default")],2)}
var ThermometerStatisticsvue_type_template_id_84f01fbe_staticRenderFns = []


// CONCATENATED MODULE: ./src/Thermometer/ThermometerStatistics.vue?vue&type=template&id=84f01fbe&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Thermometer/ThermometerStatistics.vue?vue&type=script&lang=js&
//
//
//
//
//
//
/* harmony default export */ var ThermometerStatisticsvue_type_script_lang_js_ = ({
  name: 'ThermometerStatistics'
});
// CONCATENATED MODULE: ./src/Thermometer/ThermometerStatistics.vue?vue&type=script&lang=js&
 /* harmony default export */ var Thermometer_ThermometerStatisticsvue_type_script_lang_js_ = (ThermometerStatisticsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/Thermometer/ThermometerStatistics.vue?vue&type=style&index=0&lang=scss&
var ThermometerStatisticsvue_type_style_index_0_lang_scss_ = __webpack_require__("a86b");

// CONCATENATED MODULE: ./src/Thermometer/ThermometerStatistics.vue






/* normalize component */

var ThermometerStatistics_component = normalizeComponent(
  Thermometer_ThermometerStatisticsvue_type_script_lang_js_,
  ThermometerStatisticsvue_type_template_id_84f01fbe_render,
  ThermometerStatisticsvue_type_template_id_84f01fbe_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var ThermometerStatistics = (ThermometerStatistics_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Thermometer/Thermometer.vue?vue&type=script&lang=js&
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




/* harmony default export */ var Thermometervue_type_script_lang_js_ = ({
  name: 'Thermometer',
  components: {
    ThermometerTicks: ThermometerTicks,
    ThermometerStatistic: ThermometerStatistic,
    ThermometerStatistics: ThermometerStatistics
  },
  mixins: [PercentageMixin],
  props: {
    value: Number,
    vertical: Boolean,
    horizontal: Boolean,
    format: Function,
    min: {
      type: Number,
      required: true
    },
    max: {
      type: Number,
      required: true
    },
    goal: {
      type: Number,

      default() {
        return this.max;
      }

    },
    ticks: {
      type: [Boolean, Number, Array],
      default: undefined
    },
    intervals: {
      type: Boolean,
      default: undefined
    },
    values: {
      type: Boolean,
      default: undefined
    },
    percentages: {
      type: Boolean,
      default: undefined
    },
    statistics: {
      type: Boolean,
      default: false
    },
    orientation: {
      type: String,
      validate: value => ['vertical', 'horizontal'].indexOf(value) !== -1,

      default() {
        return this.horizontal && 'horizontal' || 'vertical';
      }

    }
  },
  computed: {
    currentTicks() {
      const ticks = this.ticks instanceof Array ? this.ticks : [];

      if (!isNaN(this.ticks)) {
        for (let x = 1; x <= this.ticks; x++) {
          ticks.push(x);
        }
      } else if (this.ticks === true) {}
    },

    completed() {
      return `${(this.value / (this.goal - this.min) * 100).toFixed(2).replace(/\.00$/, '')}%`;
    },

    classes() {
      return {
        'thermometer-vertical': this.orientation === 'vertical',
        'thermometer-horizontal': this.orientation === 'horizontal'
      };
    }

  },
  watch: {
    value() {
      this.height = value;
    }

  },

  data() {
    return {
      height: 0
    };
  },

  mounted() {
    setTimeout(() => {
      this.height = this.value;
    });
  }

});
// CONCATENATED MODULE: ./src/Thermometer/Thermometer.vue?vue&type=script&lang=js&
 /* harmony default export */ var Thermometer_Thermometervue_type_script_lang_js_ = (Thermometervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/Thermometer/Thermometer.vue?vue&type=style&index=0&lang=scss&
var Thermometervue_type_style_index_0_lang_scss_ = __webpack_require__("90a4");

// CONCATENATED MODULE: ./src/Thermometer/Thermometer.vue






/* normalize component */

var Thermometer_component = normalizeComponent(
  Thermometer_Thermometervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Thermometer = (Thermometer_component.exports);
// CONCATENATED MODULE: ./src/index.js

/* harmony default export */ var src = ({
  Thermometer: Thermometer
});
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (src);



/***/ })

/******/ })["default"];
});
//# sourceMappingURL=VueGoal.umd.js.map