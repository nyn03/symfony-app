(self["webpackChunk"] = self["webpackChunk"] || []).push([["servers"],{

/***/ "./assets/js/servers.js":
/*!******************************!*\
  !*** ./assets/js/servers.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var vue_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-material */ "./node_modules/vue-material/dist/vue-material.js");
/* harmony import */ var vue_material__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_material__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_material_dist_vue_material_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-material/dist/vue-material.min.css */ "./node_modules/vue-material/dist/vue-material.min.css");
/* harmony import */ var vue_material_dist_theme_default_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-material/dist/theme/default.css */ "./node_modules/vue-material/dist/theme/default.css");
/* harmony import */ var _components_App_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/App.vue */ "./assets/js/components/App.vue");





vue__WEBPACK_IMPORTED_MODULE_4__.default.use((vue_material__WEBPACK_IMPORTED_MODULE_0___default()));
new vue__WEBPACK_IMPORTED_MODULE_4__.default({
  el: '#app',
  components: {
    App: _components_App_vue__WEBPACK_IMPORTED_MODULE_3__.default,
    VueMaterial: (vue_material__WEBPACK_IMPORTED_MODULE_0___default())
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/js/components/App.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/js/components/App.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vuejs_paginate2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuejs-paginate2 */ "./node_modules/vuejs-paginate2/dist/index.js");
/* harmony import */ var vuejs_paginate2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vuejs_paginate2__WEBPACK_IMPORTED_MODULE_2__);

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



vue__WEBPACK_IMPORTED_MODULE_3__.default.component('paginate', (vuejs_paginate2__WEBPACK_IMPORTED_MODULE_2___default()));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      serversList: [],
      location: "",
      hdd: "",
      ram: [],
      minRange: "",
      maxRange: "",
      lastPageNumber: 1
    };
  },
  methods: {
    getServersList: function getServersList() {
      var _this = this;

      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var url = "http://localhost:8080/api?location=" + this.location + "&hdd=" + this.hdd + "&ram=" + this.ram.join() + "&storage=";

      if (this.minRange != "" && this.maxRange != "") {
        url = url + String(this.minRange) + "," + String(this.maxRange);
      }

      url += "&page=" + page;
      axios__WEBPACK_IMPORTED_MODULE_1___default().get(url).then(function (response) {
        return _this.serversList = response.data.payload.result, _this.lastPageNumber = response.data.payload.lastPageNumber;
      });
    },
    clickCallback: function clickCallback(pageNum) {
      this.getServersList(pageNum);
    }
  },
  mounted: function mounted() {
    this.getServersList();
  }
});

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-4[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/js/components/App.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-4[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/js/components/App.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/js/components/App.vue":
/*!**************************************!*\
  !*** ./assets/js/components/App.vue ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _App_vue_vue_type_template_id_0dd47e10___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=0dd47e10& */ "./assets/js/components/App.vue?vue&type=template&id=0dd47e10&");
/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ "./assets/js/components/App.vue?vue&type=script&lang=js&");
/* harmony import */ var _App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css& */ "./assets/js/components/App.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _App_vue_vue_type_template_id_0dd47e10___WEBPACK_IMPORTED_MODULE_0__.render,
  _App_vue_vue_type_template_id_0dd47e10___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/js/components/App.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./assets/js/components/App.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./assets/js/components/App.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./App.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/js/components/App.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./assets/js/components/App.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************!*\
  !*** ./assets/js/components/App.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_clonedRuleSet_4_0_rules_0_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_4_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-4[0].rules[0].use[0]!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-4[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css& */ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-4[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/js/components/App.vue?vue&type=style&index=0&lang=css&");


/***/ }),

/***/ "./assets/js/components/App.vue?vue&type=template&id=0dd47e10&":
/*!*********************************************************************!*\
  !*** ./assets/js/components/App.vue?vue&type=template&id=0dd47e10& ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_0dd47e10___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_0dd47e10___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_0dd47e10___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./App.vue?vue&type=template&id=0dd47e10& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/js/components/App.vue?vue&type=template&id=0dd47e10&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/js/components/App.vue?vue&type=template&id=0dd47e10&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/js/components/App.vue?vue&type=template&id=0dd47e10& ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _vm._m(0),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "md-layout md-gutter md-alignment-top-center" },
        [
          _c(
            "div",
            { staticClass: "md-layout-item md-size-60" },
            [
              _c(
                "md-checkbox",
                {
                  attrs: { value: "2" },
                  model: {
                    value: _vm.ram,
                    callback: function($$v) {
                      _vm.ram = $$v
                    },
                    expression: "ram"
                  }
                },
                [_vm._v("2GB")]
              ),
              _vm._v(" "),
              _c(
                "md-checkbox",
                {
                  attrs: { value: "4" },
                  model: {
                    value: _vm.ram,
                    callback: function($$v) {
                      _vm.ram = $$v
                    },
                    expression: "ram"
                  }
                },
                [_vm._v("4GB")]
              ),
              _vm._v(" "),
              _c(
                "md-checkbox",
                {
                  attrs: { value: "8" },
                  model: {
                    value: _vm.ram,
                    callback: function($$v) {
                      _vm.ram = $$v
                    },
                    expression: "ram"
                  }
                },
                [_vm._v("8GB")]
              ),
              _vm._v(" "),
              _c(
                "md-checkbox",
                {
                  attrs: { value: "12" },
                  model: {
                    value: _vm.ram,
                    callback: function($$v) {
                      _vm.ram = $$v
                    },
                    expression: "ram"
                  }
                },
                [_vm._v("12GB")]
              ),
              _vm._v(" "),
              _c(
                "md-checkbox",
                {
                  attrs: { value: "16" },
                  model: {
                    value: _vm.ram,
                    callback: function($$v) {
                      _vm.ram = $$v
                    },
                    expression: "ram"
                  }
                },
                [_vm._v("16GB")]
              ),
              _vm._v(" "),
              _c(
                "md-checkbox",
                {
                  attrs: { value: "24" },
                  model: {
                    value: _vm.ram,
                    callback: function($$v) {
                      _vm.ram = $$v
                    },
                    expression: "ram"
                  }
                },
                [_vm._v("24GB")]
              ),
              _vm._v(" "),
              _c(
                "md-checkbox",
                {
                  attrs: { value: "32" },
                  model: {
                    value: _vm.ram,
                    callback: function($$v) {
                      _vm.ram = $$v
                    },
                    expression: "ram"
                  }
                },
                [_vm._v("32GB")]
              ),
              _vm._v(" "),
              _c(
                "md-checkbox",
                {
                  attrs: { value: "48" },
                  model: {
                    value: _vm.ram,
                    callback: function($$v) {
                      _vm.ram = $$v
                    },
                    expression: "ram"
                  }
                },
                [_vm._v("48GB")]
              ),
              _vm._v(" "),
              _c(
                "md-checkbox",
                {
                  attrs: { value: "64" },
                  model: {
                    value: _vm.ram,
                    callback: function($$v) {
                      _vm.ram = $$v
                    },
                    expression: "ram"
                  }
                },
                [_vm._v("64GB")]
              ),
              _vm._v(" "),
              _c(
                "md-checkbox",
                {
                  attrs: { value: "96" },
                  model: {
                    value: _vm.ram,
                    callback: function($$v) {
                      _vm.ram = $$v
                    },
                    expression: "ram"
                  }
                },
                [_vm._v("96GB")]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "md-layout-item md-size-20" },
            [
              _c(
                "md-field",
                [
                  _c(
                    "md-select",
                    {
                      attrs: {
                        name: "hdd",
                        id: "hdd",
                        placeholder: "Hard disk type"
                      },
                      model: {
                        value: _vm.hdd,
                        callback: function($$v) {
                          _vm.hdd = $$v
                        },
                        expression: "hdd"
                      }
                    },
                    [
                      _c("md-option", { attrs: { value: "" } }, [
                        _vm._v("Select hard disk type")
                      ]),
                      _vm._v(" "),
                      _c("md-option", { attrs: { value: "1" } }, [
                        _vm._v("SAS")
                      ]),
                      _vm._v(" "),
                      _c("md-option", { attrs: { value: "2" } }, [
                        _vm._v("SATA")
                      ]),
                      _vm._v(" "),
                      _c("md-option", { attrs: { value: "3" } }, [
                        _vm._v("SSD")
                      ])
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "md-layout-item md-size-20" },
            [
              _c(
                "md-field",
                [
                  _c(
                    "md-select",
                    {
                      attrs: {
                        name: "location",
                        id: "location",
                        placeholder: "Location"
                      },
                      model: {
                        value: _vm.location,
                        callback: function($$v) {
                          _vm.location = $$v
                        },
                        expression: "location"
                      }
                    },
                    [
                      _c("md-option", { attrs: { value: "" } }, [
                        _vm._v("Select location")
                      ]),
                      _vm._v(" "),
                      _c("md-option", { attrs: { value: "1" } }, [
                        _vm._v("AmsterdamAMS-01")
                      ]),
                      _vm._v(" "),
                      _c("md-option", { attrs: { value: "2" } }, [
                        _vm._v("Washington D.C.WDC-01")
                      ]),
                      _vm._v(" "),
                      _c("md-option", { attrs: { value: "3" } }, [
                        _vm._v("San FranciscoSFO-12")
                      ]),
                      _vm._v(" "),
                      _c("md-option", { attrs: { value: "4" } }, [
                        _vm._v("SingaporeSIN-11")
                      ]),
                      _vm._v(" "),
                      _c("md-option", { attrs: { value: "5" } }, [
                        _vm._v("DallasDAL-10")
                      ]),
                      _vm._v(" "),
                      _c("md-option", { attrs: { value: "6" } }, [
                        _vm._v("FrankfurtFRA-10")
                      ]),
                      _vm._v(" "),
                      _c("md-option", { attrs: { value: "7" } }, [
                        _vm._v("Hong KongHKG-10")
                      ])
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("h3", [_vm._v("Select Range")]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "md-layout-item md-size-20" },
            [
              _c(
                "md-field",
                [
                  _c(
                    "md-select",
                    {
                      attrs: {
                        name: "min_range",
                        id: "min_range",
                        placeholder: "Min Storage"
                      },
                      model: {
                        value: _vm.minRange,
                        callback: function($$v) {
                          _vm.minRange = $$v
                        },
                        expression: "minRange"
                      }
                    },
                    [
                      _c("md-option", { attrs: { value: "" } }, [
                        _vm._v("Select min storage")
                      ]),
                      _vm._v(" "),
                      _c("md-option", { attrs: { value: "0" } }, [_vm._v("0")]),
                      _vm._v(" "),
                      _c("md-option", { attrs: { value: "250" } }, [
                        _vm._v("250GB")
                      ]),
                      _vm._v(" "),
                      _c("md-option", { attrs: { value: "500" } }, [
                        _vm._v("500GB")
                      ]),
                      _vm._v(" "),
                      _c("md-option", { attrs: { value: "1000" } }, [
                        _vm._v("1TB")
                      ]),
                      _vm._v(" "),
                      _c("md-option", { attrs: { value: "2000" } }, [
                        _vm._v("2TB")
                      ]),
                      _vm._v(" "),
                      _c("md-option", { attrs: { value: "3000" } }, [
                        _vm._v("3TB")
                      ]),
                      _vm._v(" "),
                      _c("md-option", { attrs: { value: "4000" } }, [
                        _vm._v("4TB")
                      ]),
                      _vm._v(" "),
                      _c("md-option", { attrs: { value: "8000" } }, [
                        _vm._v("8TB")
                      ]),
                      _vm._v(" "),
                      _c("md-option", { attrs: { value: "12000" } }, [
                        _vm._v("12TB")
                      ]),
                      _vm._v(" "),
                      _c("md-option", { attrs: { value: "24000" } }, [
                        _vm._v("24TB")
                      ]),
                      _vm._v(" "),
                      _c("md-option", { attrs: { value: "48000" } }, [
                        _vm._v("48TB")
                      ]),
                      _vm._v(" "),
                      _c("md-option", { attrs: { value: "72000" } }, [
                        _vm._v("72TB")
                      ])
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "md-layout-item md-size-20" },
            [
              _c(
                "md-field",
                [
                  _c(
                    "md-select",
                    {
                      attrs: {
                        name: "max_range",
                        id: "max_range",
                        placeholder: "Max Storage"
                      },
                      model: {
                        value: _vm.maxRange,
                        callback: function($$v) {
                          _vm.maxRange = $$v
                        },
                        expression: "maxRange"
                      }
                    },
                    [
                      _c("md-option", { attrs: { value: "" } }, [
                        _vm._v("Select max storage")
                      ]),
                      _vm._v(" "),
                      _c("md-option", { attrs: { value: "250" } }, [
                        _vm._v("250GB")
                      ]),
                      _vm._v(" "),
                      _c("md-option", { attrs: { value: "500" } }, [
                        _vm._v("500GB")
                      ]),
                      _vm._v(" "),
                      _c("md-option", { attrs: { value: "1000" } }, [
                        _vm._v("1TB")
                      ]),
                      _vm._v(" "),
                      _c("md-option", { attrs: { value: "2000" } }, [
                        _vm._v("2TB")
                      ]),
                      _vm._v(" "),
                      _c("md-option", { attrs: { value: "3000" } }, [
                        _vm._v("3TB")
                      ]),
                      _vm._v(" "),
                      _c("md-option", { attrs: { value: "4000" } }, [
                        _vm._v("4TB")
                      ]),
                      _vm._v(" "),
                      _c("md-option", { attrs: { value: "8000" } }, [
                        _vm._v("8TB")
                      ]),
                      _vm._v(" "),
                      _c("md-option", { attrs: { value: "12000" } }, [
                        _vm._v("12TB")
                      ]),
                      _vm._v(" "),
                      _c("md-option", { attrs: { value: "24000" } }, [
                        _vm._v("24TB")
                      ]),
                      _vm._v(" "),
                      _c("md-option", { attrs: { value: "48000" } }, [
                        _vm._v("48TB")
                      ]),
                      _vm._v(" "),
                      _c("md-option", { attrs: { value: "72000" } }, [
                        _vm._v("72TB")
                      ])
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "md-layout-item md-size-20" },
            [
              _c(
                "md-button",
                {
                  staticClass: "md-raised md-primary",
                  on: {
                    click: function($event) {
                      return _vm.getServersList()
                    }
                  }
                },
                [_vm._v("Filter")]
              )
            ],
            1
          )
        ]
      ),
      _vm._v(" "),
      _c("md-divider"),
      _vm._v(" "),
      _c(
        "div",
        [
          _c("md-table", {
            attrs: { "md-card": "" },
            scopedSlots: _vm._u([
              {
                key: "md-table-row",
                fn: function(ref) {
                  var item = ref.item
                  return _c(
                    "md-table-row",
                    {},
                    [
                      _c(
                        "md-table-cell",
                        { attrs: { "md-label": "Server Name" } },
                        [_vm._v(_vm._s(item.server_name))]
                      ),
                      _vm._v(" "),
                      _c("md-table-cell", { attrs: { "md-label": "Ram" } }, [
                        _vm._v(_vm._s(item.ram_name))
                      ]),
                      _vm._v(" "),
                      _c("md-table-cell", { attrs: { "md-label": "HDD" } }, [
                        _vm._v(_vm._s(item.hdd_name))
                      ]),
                      _vm._v(" "),
                      _c(
                        "md-table-cell",
                        { attrs: { "md-label": "Location" } },
                        [_vm._v(_vm._s(item.location_name))]
                      ),
                      _vm._v(" "),
                      _c("md-table-cell", { attrs: { "md-label": "Price" } }, [
                        _vm._v(_vm._s(item.price))
                      ])
                    ],
                    1
                  )
                }
              }
            ]),
            model: {
              value: _vm.serversList,
              callback: function($$v) {
                _vm.serversList = $$v
              },
              expression: "serversList"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "md-alignment-top-center" },
        [
          _c("paginate", {
            attrs: {
              "page-count": _vm.lastPageNumber,
              "page-range": 3,
              "margin-pages": 2,
              "click-handler": _vm.clickCallback,
              "prev-text": "Prev",
              "next-text": "Next",
              "container-class": "pagination",
              "page-class": "page-item"
            }
          })
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "md-layout md-gutter md-alignment-top-center" },
      [_c("h1", { staticClass: "md-title" }, [_vm._v("Server List")])]
    )
  }
]
render._withStripped = true



/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_internals_export_js","vendors-node_modules_axios_index_js-node_modules_core-js_modules_es_array_join_js-node_module-504a02"], () => (__webpack_exec__("./assets/js/servers.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvc2VydmVycy5qcyIsIndlYnBhY2s6Ly8vYXNzZXRzL2pzL2NvbXBvbmVudHMvQXBwLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9BcHAudnVlP2VhODgiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvQXBwLnZ1ZT81MWJkIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0FwcC52dWU/MGFjMyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9BcHAudnVlP2IyY2UiXSwibmFtZXMiOlsiVnVlIiwiVnVlTWF0ZXJpYWwiLCJlbCIsImNvbXBvbmVudHMiLCJBcHAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLDRDQUFBLENBQVFDLHFEQUFSO0FBRUEsSUFBSUQsd0NBQUosQ0FBUTtBQUNKRSxJQUFFLEVBQUUsTUFEQTtBQUVKQyxZQUFVLEVBQUU7QUFBQ0MsT0FBRyxFQUFIQSx3REFBRDtBQUFNSCxlQUFXLEVBQVhBLHFEQUFXQTtBQUFqQjtBQUZSLENBQVIsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM0SUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBLE1BREEsa0JBQ0E7QUFDQTtBQUNBLHFCQURBO0FBRUEsa0JBRkE7QUFHQSxhQUhBO0FBSUEsYUFKQTtBQUtBLGtCQUxBO0FBTUEsa0JBTkE7QUFPQTtBQVBBO0FBU0EsR0FYQTtBQVlBO0FBQ0Esa0JBREEsNEJBQ0E7QUFBQTs7QUFBQTtBQUNBLGdCQUNBLHdD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QUFTLG9CQUFvQixFQUFFO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsU0FBUyx5QkFBeUIsRUFBRTtBQUM3RDtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsU0FBUyxzQkFBc0IsRUFBRTtBQUM1RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLHlDQUF5QztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sNkRBQTZEO0FBQ3BFLGlCQUFpQiwwQkFBMEI7QUFDM0M7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic2VydmVycy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBWdWUgZnJvbSAndnVlJ1xuaW1wb3J0IFZ1ZU1hdGVyaWFsIGZyb20gJ3Z1ZS1tYXRlcmlhbCdcbmltcG9ydCAndnVlLW1hdGVyaWFsL2Rpc3QvdnVlLW1hdGVyaWFsLm1pbi5jc3MnXG5pbXBvcnQgJ3Z1ZS1tYXRlcmlhbC9kaXN0L3RoZW1lL2RlZmF1bHQuY3NzJ1xuaW1wb3J0IEFwcCBmcm9tICcuL2NvbXBvbmVudHMvQXBwLnZ1ZSdcblxuVnVlLnVzZShWdWVNYXRlcmlhbClcblxubmV3IFZ1ZSh7XG4gICAgZWw6ICcjYXBwJyxcbiAgICBjb21wb25lbnRzOiB7QXBwLCBWdWVNYXRlcmlhbH1cbn0pIiwiPHRlbXBsYXRlPlxuICA8ZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJtZC1sYXlvdXQgbWQtZ3V0dGVyIG1kLWFsaWdubWVudC10b3AtY2VudGVyXCI+XG4gICAgICA8aDEgY2xhc3M9XCJtZC10aXRsZVwiPlNlcnZlciBMaXN0PC9oMT5cbiAgICA8L2Rpdj5cblxuICAgIFxuICAgICAgPGRpdiBjbGFzcz1cIm1kLWxheW91dCBtZC1ndXR0ZXIgbWQtYWxpZ25tZW50LXRvcC1jZW50ZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1kLWxheW91dC1pdGVtIG1kLXNpemUtNjBcIj5cbiAgICAgICAgICA8bWQtY2hlY2tib3ggdi1tb2RlbD1cInJhbVwiIHZhbHVlPVwiMlwiPjJHQjwvbWQtY2hlY2tib3g+XG4gICAgICAgICAgPG1kLWNoZWNrYm94IHYtbW9kZWw9XCJyYW1cIiB2YWx1ZT1cIjRcIj40R0I8L21kLWNoZWNrYm94PlxuICAgICAgICAgIDxtZC1jaGVja2JveCB2LW1vZGVsPVwicmFtXCIgdmFsdWU9XCI4XCI+OEdCPC9tZC1jaGVja2JveD5cbiAgICAgICAgICA8bWQtY2hlY2tib3ggdi1tb2RlbD1cInJhbVwiIHZhbHVlPVwiMTJcIj4xMkdCPC9tZC1jaGVja2JveD5cbiAgICAgICAgICA8bWQtY2hlY2tib3ggdi1tb2RlbD1cInJhbVwiIHZhbHVlPVwiMTZcIj4xNkdCPC9tZC1jaGVja2JveD5cbiAgICAgICAgICA8bWQtY2hlY2tib3ggdi1tb2RlbD1cInJhbVwiIHZhbHVlPVwiMjRcIj4yNEdCPC9tZC1jaGVja2JveD5cbiAgICAgICAgICA8bWQtY2hlY2tib3ggdi1tb2RlbD1cInJhbVwiIHZhbHVlPVwiMzJcIj4zMkdCPC9tZC1jaGVja2JveD5cbiAgICAgICAgICA8bWQtY2hlY2tib3ggdi1tb2RlbD1cInJhbVwiIHZhbHVlPVwiNDhcIj40OEdCPC9tZC1jaGVja2JveD5cbiAgICAgICAgICA8bWQtY2hlY2tib3ggdi1tb2RlbD1cInJhbVwiIHZhbHVlPVwiNjRcIj42NEdCPC9tZC1jaGVja2JveD5cbiAgICAgICAgICA8bWQtY2hlY2tib3ggdi1tb2RlbD1cInJhbVwiIHZhbHVlPVwiOTZcIj45NkdCPC9tZC1jaGVja2JveD5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1kLWxheW91dC1pdGVtIG1kLXNpemUtMjBcIj5cbiAgICAgICAgICA8bWQtZmllbGQ+XG4gICAgICAgICAgICA8bWQtc2VsZWN0XG4gICAgICAgICAgICAgIHYtbW9kZWw9XCJoZGRcIlxuICAgICAgICAgICAgICBuYW1lPVwiaGRkXCJcbiAgICAgICAgICAgICAgaWQ9XCJoZGRcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkhhcmQgZGlzayB0eXBlXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPG1kLW9wdGlvbiB2YWx1ZT1cIlwiPlNlbGVjdCBoYXJkIGRpc2sgdHlwZTwvbWQtb3B0aW9uPlxuICAgICAgICAgICAgICA8bWQtb3B0aW9uIHZhbHVlPVwiMVwiPlNBUzwvbWQtb3B0aW9uPlxuICAgICAgICAgICAgICA8bWQtb3B0aW9uIHZhbHVlPVwiMlwiPlNBVEE8L21kLW9wdGlvbj5cbiAgICAgICAgICAgICAgPG1kLW9wdGlvbiB2YWx1ZT1cIjNcIj5TU0Q8L21kLW9wdGlvbj5cbiAgICAgICAgICAgIDwvbWQtc2VsZWN0PlxuICAgICAgICAgIDwvbWQtZmllbGQ+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtZC1sYXlvdXQtaXRlbSBtZC1zaXplLTIwXCI+XG4gICAgICAgICAgPG1kLWZpZWxkPlxuICAgICAgICAgICAgPG1kLXNlbGVjdFxuICAgICAgICAgICAgICB2LW1vZGVsPVwibG9jYXRpb25cIlxuICAgICAgICAgICAgICBuYW1lPVwibG9jYXRpb25cIlxuICAgICAgICAgICAgICBpZD1cImxvY2F0aW9uXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJMb2NhdGlvblwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxtZC1vcHRpb24gdmFsdWU9XCJcIj5TZWxlY3QgbG9jYXRpb248L21kLW9wdGlvbj5cbiAgICAgICAgICAgICAgPG1kLW9wdGlvbiB2YWx1ZT1cIjFcIj5BbXN0ZXJkYW1BTVMtMDE8L21kLW9wdGlvbj5cbiAgICAgICAgICAgICAgPG1kLW9wdGlvbiB2YWx1ZT1cIjJcIj5XYXNoaW5ndG9uIEQuQy5XREMtMDE8L21kLW9wdGlvbj5cbiAgICAgICAgICAgICAgPG1kLW9wdGlvbiB2YWx1ZT1cIjNcIj5TYW4gRnJhbmNpc2NvU0ZPLTEyPC9tZC1vcHRpb24+XG4gICAgICAgICAgICAgIDxtZC1vcHRpb24gdmFsdWU9XCI0XCI+U2luZ2Fwb3JlU0lOLTExPC9tZC1vcHRpb24+XG4gICAgICAgICAgICAgIDxtZC1vcHRpb24gdmFsdWU9XCI1XCI+RGFsbGFzREFMLTEwPC9tZC1vcHRpb24+XG4gICAgICAgICAgICAgIDxtZC1vcHRpb24gdmFsdWU9XCI2XCI+RnJhbmtmdXJ0RlJBLTEwPC9tZC1vcHRpb24+XG4gICAgICAgICAgICAgIDxtZC1vcHRpb24gdmFsdWU9XCI3XCI+SG9uZyBLb25nSEtHLTEwPC9tZC1vcHRpb24+XG4gICAgICAgICAgICA8L21kLXNlbGVjdD5cbiAgICAgICAgICA8L21kLWZpZWxkPlxuICAgICAgICA8L2Rpdj5cblxuPGgzPlNlbGVjdCBSYW5nZTwvaDM+XG4gICAgICA8ZGl2IGNsYXNzPVwibWQtbGF5b3V0LWl0ZW0gbWQtc2l6ZS0yMFwiPlxuICAgICAgICAgIDxtZC1maWVsZD5cbiAgICAgICAgICAgIDxtZC1zZWxlY3RcbiAgICAgICAgICAgICAgdi1tb2RlbD1cIm1pblJhbmdlXCJcbiAgICAgICAgICAgICAgbmFtZT1cIm1pbl9yYW5nZVwiXG4gICAgICAgICAgICAgIGlkPVwibWluX3JhbmdlXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJNaW4gU3RvcmFnZVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICA8bWQtb3B0aW9uIHZhbHVlPVwiXCI+U2VsZWN0IG1pbiBzdG9yYWdlPC9tZC1vcHRpb24+XG4gICAgICAgICAgICAgIDxtZC1vcHRpb24gdmFsdWU9XCIwXCI+MDwvbWQtb3B0aW9uPlxuICAgICAgICAgICAgICA8bWQtb3B0aW9uIHZhbHVlPVwiMjUwXCI+MjUwR0I8L21kLW9wdGlvbj5cbiAgICAgICAgICAgICAgPG1kLW9wdGlvbiB2YWx1ZT1cIjUwMFwiPjUwMEdCPC9tZC1vcHRpb24+XG4gICAgICAgICAgICAgIDxtZC1vcHRpb24gdmFsdWU9XCIxMDAwXCI+MVRCPC9tZC1vcHRpb24+XG4gICAgICAgICAgICAgIDxtZC1vcHRpb24gdmFsdWU9XCIyMDAwXCI+MlRCPC9tZC1vcHRpb24+XG4gICAgICAgICAgICAgIDxtZC1vcHRpb24gdmFsdWU9XCIzMDAwXCI+M1RCPC9tZC1vcHRpb24+XG4gICAgICAgICAgICAgIDxtZC1vcHRpb24gdmFsdWU9XCI0MDAwXCI+NFRCPC9tZC1vcHRpb24+XG4gICAgICAgICAgICAgIDxtZC1vcHRpb24gdmFsdWU9XCI4MDAwXCI+OFRCPC9tZC1vcHRpb24+XG4gICAgICAgICAgICAgIDxtZC1vcHRpb24gdmFsdWU9XCIxMjAwMFwiPjEyVEI8L21kLW9wdGlvbj5cbiAgICAgICAgICAgICAgPG1kLW9wdGlvbiB2YWx1ZT1cIjI0MDAwXCI+MjRUQjwvbWQtb3B0aW9uPlxuICAgICAgICAgICAgICA8bWQtb3B0aW9uIHZhbHVlPVwiNDgwMDBcIj40OFRCPC9tZC1vcHRpb24+XG4gICAgICAgICAgICAgIDxtZC1vcHRpb24gdmFsdWU9XCI3MjAwMFwiPjcyVEI8L21kLW9wdGlvbj5cbiAgICAgICAgICAgIDwvbWQtc2VsZWN0PlxuICAgICAgICAgIDwvbWQtZmllbGQ+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJtZC1sYXlvdXQtaXRlbSBtZC1zaXplLTIwXCI+XG4gICAgICAgICAgPG1kLWZpZWxkPlxuICAgICAgICAgICAgPG1kLXNlbGVjdFxuICAgICAgICAgICAgICB2LW1vZGVsPVwibWF4UmFuZ2VcIlxuICAgICAgICAgICAgICBuYW1lPVwibWF4X3JhbmdlXCJcbiAgICAgICAgICAgICAgaWQ9XCJtYXhfcmFuZ2VcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk1heCBTdG9yYWdlXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgIDxtZC1vcHRpb24gdmFsdWU9XCJcIj5TZWxlY3QgbWF4IHN0b3JhZ2U8L21kLW9wdGlvbj5cbiAgICAgICAgICAgICAgPG1kLW9wdGlvbiB2YWx1ZT1cIjI1MFwiPjI1MEdCPC9tZC1vcHRpb24+XG4gICAgICAgICAgICAgIDxtZC1vcHRpb24gdmFsdWU9XCI1MDBcIj41MDBHQjwvbWQtb3B0aW9uPlxuICAgICAgICAgICAgICA8bWQtb3B0aW9uIHZhbHVlPVwiMTAwMFwiPjFUQjwvbWQtb3B0aW9uPlxuICAgICAgICAgICAgICA8bWQtb3B0aW9uIHZhbHVlPVwiMjAwMFwiPjJUQjwvbWQtb3B0aW9uPlxuICAgICAgICAgICAgICA8bWQtb3B0aW9uIHZhbHVlPVwiMzAwMFwiPjNUQjwvbWQtb3B0aW9uPlxuICAgICAgICAgICAgICA8bWQtb3B0aW9uIHZhbHVlPVwiNDAwMFwiPjRUQjwvbWQtb3B0aW9uPlxuICAgICAgICAgICAgICA8bWQtb3B0aW9uIHZhbHVlPVwiODAwMFwiPjhUQjwvbWQtb3B0aW9uPlxuICAgICAgICAgICAgICA8bWQtb3B0aW9uIHZhbHVlPVwiMTIwMDBcIj4xMlRCPC9tZC1vcHRpb24+XG4gICAgICAgICAgICAgIDxtZC1vcHRpb24gdmFsdWU9XCIyNDAwMFwiPjI0VEI8L21kLW9wdGlvbj5cbiAgICAgICAgICAgICAgPG1kLW9wdGlvbiB2YWx1ZT1cIjQ4MDAwXCI+NDhUQjwvbWQtb3B0aW9uPlxuICAgICAgICAgICAgICA8bWQtb3B0aW9uIHZhbHVlPVwiNzIwMDBcIj43MlRCPC9tZC1vcHRpb24+XG4gICAgICAgICAgICA8L21kLXNlbGVjdD5cbiAgICAgICAgICA8L21kLWZpZWxkPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1kLWxheW91dC1pdGVtIG1kLXNpemUtMjBcIj5cbiAgICAgICAgICA8bWQtYnV0dG9uIGNsYXNzPVwibWQtcmFpc2VkIG1kLXByaW1hcnlcIiB2LW9uOmNsaWNrPVwiZ2V0U2VydmVyc0xpc3QoKVwiXG4gICAgICAgICAgICA+RmlsdGVyPC9tZC1idXR0b25cbiAgICAgICAgICA+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgXG4gICAgPG1kLWRpdmlkZXI+PC9tZC1kaXZpZGVyPlxuXG4gICAgPGRpdj5cbiAgICAgIDxtZC10YWJsZSB2LW1vZGVsPVwic2VydmVyc0xpc3RcIiBtZC1jYXJkPlxuICAgICAgICA8bWQtdGFibGUtcm93IHNsb3Q9XCJtZC10YWJsZS1yb3dcIiBzbG90LXNjb3BlPVwieyBpdGVtIH1cIj5cbiAgICAgICAgICA8bWQtdGFibGUtY2VsbCBtZC1sYWJlbD1cIlNlcnZlciBOYW1lXCI+e3tcbiAgICAgICAgICAgIGl0ZW0uc2VydmVyX25hbWVcbiAgICAgICAgICB9fTwvbWQtdGFibGUtY2VsbD5cbiAgICAgICAgICA8bWQtdGFibGUtY2VsbCBtZC1sYWJlbD1cIlJhbVwiPnt7IGl0ZW0ucmFtX25hbWUgfX08L21kLXRhYmxlLWNlbGw+XG4gICAgICAgICAgPG1kLXRhYmxlLWNlbGwgbWQtbGFiZWw9XCJIRERcIj57eyBpdGVtLmhkZF9uYW1lIH19PC9tZC10YWJsZS1jZWxsPlxuICAgICAgICAgIDxtZC10YWJsZS1jZWxsIG1kLWxhYmVsPVwiTG9jYXRpb25cIj57e1xuICAgICAgICAgICAgaXRlbS5sb2NhdGlvbl9uYW1lXG4gICAgICAgICAgfX08L21kLXRhYmxlLWNlbGw+XG4gICAgICAgICAgPG1kLXRhYmxlLWNlbGwgbWQtbGFiZWw9XCJQcmljZVwiPnt7IGl0ZW0ucHJpY2UgfX08L21kLXRhYmxlLWNlbGw+XG4gICAgICAgIDwvbWQtdGFibGUtcm93PlxuICAgICAgPC9tZC10YWJsZT5cbiAgICA8L2Rpdj5cblxuICA8ZGl2IGNsYXNzPVwibWQtYWxpZ25tZW50LXRvcC1jZW50ZXJcIj5cbiAgICA8cGFnaW5hdGVcbiAgICA6cGFnZS1jb3VudD1cImxhc3RQYWdlTnVtYmVyXCJcbiAgICA6cGFnZS1yYW5nZT1cIjNcIlxuICAgIDptYXJnaW4tcGFnZXM9XCIyXCJcbiAgICA6Y2xpY2staGFuZGxlcj1cImNsaWNrQ2FsbGJhY2tcIlxuICAgIDpwcmV2LXRleHQ9XCInUHJldidcIlxuICAgIDpuZXh0LXRleHQ9XCInTmV4dCdcIlxuICAgIDpjb250YWluZXItY2xhc3M9XCIncGFnaW5hdGlvbidcIlxuICAgIDpwYWdlLWNsYXNzPVwiJ3BhZ2UtaXRlbSdcIj5cbiAgPC9wYWdpbmF0ZT5cbjwvZGl2PlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBWdWUgZnJvbSBcInZ1ZVwiXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCJcbmltcG9ydCBQYWdpbmF0ZSBmcm9tIFwidnVlanMtcGFnaW5hdGUyXCJcblZ1ZS5jb21wb25lbnQoJ3BhZ2luYXRlJywgUGFnaW5hdGUpXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc2VydmVyc0xpc3Q6IFtdLFxuICAgICAgbG9jYXRpb246IFwiXCIsXG4gICAgICBoZGQ6IFwiXCIsXG4gICAgICByYW06IFtdLFxuICAgICAgbWluUmFuZ2U6XCJcIixcbiAgICAgIG1heFJhbmdlOlwiXCIsXG4gICAgICBsYXN0UGFnZU51bWJlcjoxXG4gICAgfTtcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGdldFNlcnZlcnNMaXN0KHBhZ2UgPSAxKSB7XG4gICAgICBsZXQgdXJsID1cbiAgICAgICAgXCJodHRwOi8vbG9jYWxob3N0OjgwODAvYXBpP2xvY2F0aW9uPVwiICtcbiAgICAgICAgdGhpcy5sb2NhdGlvbiArXG4gICAgICAgIFwiJmhkZD1cIiArXG4gICAgICAgIHRoaXMuaGRkICtcbiAgICAgICAgXCImcmFtPVwiICtcbiAgICAgICAgdGhpcy5yYW0uam9pbigpK1wiJnN0b3JhZ2U9XCI7XG5cbiAgICAgICAgaWYodGhpcy5taW5SYW5nZSE9XCJcIiAmJiB0aGlzLm1heFJhbmdlIT1cIlwiKSB7XG4gICAgICAgICAgdXJsID0gdXJsICsgU3RyaW5nKHRoaXMubWluUmFuZ2UpICsgXCIsXCIgKyBTdHJpbmcodGhpcy5tYXhSYW5nZSk7XG4gICAgICAgIH1cbiAgICAgICAgdXJsICs9IFwiJnBhZ2U9XCIgKyBwYWdlO1xuICAgICAgICBcbiAgICAgICAgYXhpb3MuZ2V0KHVybClcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gKFxuICAgICAgICAgIHRoaXMuc2VydmVyc0xpc3QgPSByZXNwb25zZS5kYXRhLnBheWxvYWQucmVzdWx0LFxuICAgICAgICAgIHRoaXMubGFzdFBhZ2VOdW1iZXIgPSByZXNwb25zZS5kYXRhLnBheWxvYWQubGFzdFBhZ2VOdW1iZXJcbiAgICAgICAgKSk7XG4gICAgfSxcbiAgICBjbGlja0NhbGxiYWNrIChwYWdlTnVtKSB7XG4gICAgICB0aGlzLmdldFNlcnZlcnNMaXN0KHBhZ2VOdW0pO1xuICAgIH1cbiAgfSxcbiAgbW91bnRlZCgpIHtcbiAgICB0aGlzLmdldFNlcnZlcnNMaXN0KCk7XG4gIH1cbn07XG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJjc3NcIj5cbiAgLyogLnBhZ2luYXRpb24ge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgfVxuICBcbiAgLnBhZ2UtaXRlbSB7XG5cbiAgfSAqL1xuPC9zdHlsZT5cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wZGQ0N2UxMCZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL0FwcC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL3Zhci93d3cvcHJvamVjdC9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcwZGQ0N2UxMCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcwZGQ0N2UxMCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcwZGQ0N2UxMCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vQXBwLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wZGQ0N2UxMCZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcwZGQ0N2UxMCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYXNzZXRzL2pzL2NvbXBvbmVudHMvQXBwLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTFbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICBbXG4gICAgICBfdm0uX20oMCksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibWQtbGF5b3V0IG1kLWd1dHRlciBtZC1hbGlnbm1lbnQtdG9wLWNlbnRlclwiIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm1kLWxheW91dC1pdGVtIG1kLXNpemUtNjBcIiB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIm1kLWNoZWNrYm94XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdmFsdWU6IFwiMlwiIH0sXG4gICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnJhbSxcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5yYW0gPSAkJHZcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJyYW1cIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihcIjJHQlwiKV1cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJtZC1jaGVja2JveFwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHZhbHVlOiBcIjRcIiB9LFxuICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5yYW0sXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0ucmFtID0gJCR2XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwicmFtXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoXCI0R0JcIildXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwibWQtY2hlY2tib3hcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBhdHRyczogeyB2YWx1ZTogXCI4XCIgfSxcbiAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ucmFtLFxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLnJhbSA9ICQkdlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInJhbVwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KFwiOEdCXCIpXVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIm1kLWNoZWNrYm94XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdmFsdWU6IFwiMTJcIiB9LFxuICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5yYW0sXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0ucmFtID0gJCR2XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwicmFtXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoXCIxMkdCXCIpXVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIm1kLWNoZWNrYm94XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdmFsdWU6IFwiMTZcIiB9LFxuICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5yYW0sXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0ucmFtID0gJCR2XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwicmFtXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoXCIxNkdCXCIpXVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIm1kLWNoZWNrYm94XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdmFsdWU6IFwiMjRcIiB9LFxuICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5yYW0sXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0ucmFtID0gJCR2XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwicmFtXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoXCIyNEdCXCIpXVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIm1kLWNoZWNrYm94XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdmFsdWU6IFwiMzJcIiB9LFxuICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5yYW0sXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0ucmFtID0gJCR2XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwicmFtXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoXCIzMkdCXCIpXVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIm1kLWNoZWNrYm94XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdmFsdWU6IFwiNDhcIiB9LFxuICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5yYW0sXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0ucmFtID0gJCR2XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwicmFtXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoXCI0OEdCXCIpXVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIm1kLWNoZWNrYm94XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdmFsdWU6IFwiNjRcIiB9LFxuICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5yYW0sXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0ucmFtID0gJCR2XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwicmFtXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoXCI2NEdCXCIpXVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIm1kLWNoZWNrYm94XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdmFsdWU6IFwiOTZcIiB9LFxuICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5yYW0sXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0ucmFtID0gJCR2XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwicmFtXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoXCI5NkdCXCIpXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm1kLWxheW91dC1pdGVtIG1kLXNpemUtMjBcIiB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIm1kLWZpZWxkXCIsXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwibWQtc2VsZWN0XCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJoZGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcImhkZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiSGFyZCBkaXNrIHR5cGVcIlxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uaGRkLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uaGRkID0gJCR2XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJoZGRcIlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwibWQtb3B0aW9uXCIsIHsgYXR0cnM6IHsgdmFsdWU6IFwiXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJTZWxlY3QgaGFyZCBkaXNrIHR5cGVcIilcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwibWQtb3B0aW9uXCIsIHsgYXR0cnM6IHsgdmFsdWU6IFwiMVwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiU0FTXCIpXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIm1kLW9wdGlvblwiLCB7IGF0dHJzOiB7IHZhbHVlOiBcIjJcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIlNBVEFcIilcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwibWQtb3B0aW9uXCIsIHsgYXR0cnM6IHsgdmFsdWU6IFwiM1wiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiU1NEXCIpXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm1kLWxheW91dC1pdGVtIG1kLXNpemUtMjBcIiB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIm1kLWZpZWxkXCIsXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwibWQtc2VsZWN0XCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJsb2NhdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwibG9jYXRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIkxvY2F0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmxvY2F0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ubG9jYXRpb24gPSAkJHZcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImxvY2F0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIm1kLW9wdGlvblwiLCB7IGF0dHJzOiB7IHZhbHVlOiBcIlwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiU2VsZWN0IGxvY2F0aW9uXCIpXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIm1kLW9wdGlvblwiLCB7IGF0dHJzOiB7IHZhbHVlOiBcIjFcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIkFtc3RlcmRhbUFNUy0wMVwiKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJtZC1vcHRpb25cIiwgeyBhdHRyczogeyB2YWx1ZTogXCIyXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJXYXNoaW5ndG9uIEQuQy5XREMtMDFcIilcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwibWQtb3B0aW9uXCIsIHsgYXR0cnM6IHsgdmFsdWU6IFwiM1wiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiU2FuIEZyYW5jaXNjb1NGTy0xMlwiKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJtZC1vcHRpb25cIiwgeyBhdHRyczogeyB2YWx1ZTogXCI0XCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJTaW5nYXBvcmVTSU4tMTFcIilcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwibWQtb3B0aW9uXCIsIHsgYXR0cnM6IHsgdmFsdWU6IFwiNVwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiRGFsbGFzREFMLTEwXCIpXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIm1kLW9wdGlvblwiLCB7IGF0dHJzOiB7IHZhbHVlOiBcIjZcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIkZyYW5rZnVydEZSQS0xMFwiKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJtZC1vcHRpb25cIiwgeyBhdHRyczogeyB2YWx1ZTogXCI3XCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJIb25nIEtvbmdIS0ctMTBcIilcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiaDNcIiwgW192bS5fdihcIlNlbGVjdCBSYW5nZVwiKV0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtZC1sYXlvdXQtaXRlbSBtZC1zaXplLTIwXCIgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJtZC1maWVsZFwiLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcIm1kLXNlbGVjdFwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibWluX3JhbmdlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogXCJtaW5fcmFuZ2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIk1pbiBTdG9yYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLm1pblJhbmdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ubWluUmFuZ2UgPSAkJHZcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIm1pblJhbmdlXCJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIm1kLW9wdGlvblwiLCB7IGF0dHJzOiB7IHZhbHVlOiBcIlwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiU2VsZWN0IG1pbiBzdG9yYWdlXCIpXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIm1kLW9wdGlvblwiLCB7IGF0dHJzOiB7IHZhbHVlOiBcIjBcIiB9IH0sIFtfdm0uX3YoXCIwXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIm1kLW9wdGlvblwiLCB7IGF0dHJzOiB7IHZhbHVlOiBcIjI1MFwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiMjUwR0JcIilcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwibWQtb3B0aW9uXCIsIHsgYXR0cnM6IHsgdmFsdWU6IFwiNTAwXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCI1MDBHQlwiKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJtZC1vcHRpb25cIiwgeyBhdHRyczogeyB2YWx1ZTogXCIxMDAwXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIxVEJcIilcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwibWQtb3B0aW9uXCIsIHsgYXR0cnM6IHsgdmFsdWU6IFwiMjAwMFwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiMlRCXCIpXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIm1kLW9wdGlvblwiLCB7IGF0dHJzOiB7IHZhbHVlOiBcIjMwMDBcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIjNUQlwiKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJtZC1vcHRpb25cIiwgeyBhdHRyczogeyB2YWx1ZTogXCI0MDAwXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCI0VEJcIilcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwibWQtb3B0aW9uXCIsIHsgYXR0cnM6IHsgdmFsdWU6IFwiODAwMFwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiOFRCXCIpXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIm1kLW9wdGlvblwiLCB7IGF0dHJzOiB7IHZhbHVlOiBcIjEyMDAwXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIxMlRCXCIpXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIm1kLW9wdGlvblwiLCB7IGF0dHJzOiB7IHZhbHVlOiBcIjI0MDAwXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIyNFRCXCIpXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIm1kLW9wdGlvblwiLCB7IGF0dHJzOiB7IHZhbHVlOiBcIjQ4MDAwXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCI0OFRCXCIpXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIm1kLW9wdGlvblwiLCB7IGF0dHJzOiB7IHZhbHVlOiBcIjcyMDAwXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCI3MlRCXCIpXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm1kLWxheW91dC1pdGVtIG1kLXNpemUtMjBcIiB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIm1kLWZpZWxkXCIsXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwibWQtc2VsZWN0XCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtYXhfcmFuZ2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcIm1heF9yYW5nZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiTWF4IFN0b3JhZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ubWF4UmFuZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5tYXhSYW5nZSA9ICQkdlxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwibWF4UmFuZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwibWQtb3B0aW9uXCIsIHsgYXR0cnM6IHsgdmFsdWU6IFwiXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJTZWxlY3QgbWF4IHN0b3JhZ2VcIilcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwibWQtb3B0aW9uXCIsIHsgYXR0cnM6IHsgdmFsdWU6IFwiMjUwXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIyNTBHQlwiKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJtZC1vcHRpb25cIiwgeyBhdHRyczogeyB2YWx1ZTogXCI1MDBcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIjUwMEdCXCIpXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIm1kLW9wdGlvblwiLCB7IGF0dHJzOiB7IHZhbHVlOiBcIjEwMDBcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIjFUQlwiKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJtZC1vcHRpb25cIiwgeyBhdHRyczogeyB2YWx1ZTogXCIyMDAwXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIyVEJcIilcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwibWQtb3B0aW9uXCIsIHsgYXR0cnM6IHsgdmFsdWU6IFwiMzAwMFwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiM1RCXCIpXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIm1kLW9wdGlvblwiLCB7IGF0dHJzOiB7IHZhbHVlOiBcIjQwMDBcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIjRUQlwiKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJtZC1vcHRpb25cIiwgeyBhdHRyczogeyB2YWx1ZTogXCI4MDAwXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCI4VEJcIilcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwibWQtb3B0aW9uXCIsIHsgYXR0cnM6IHsgdmFsdWU6IFwiMTIwMDBcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIjEyVEJcIilcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwibWQtb3B0aW9uXCIsIHsgYXR0cnM6IHsgdmFsdWU6IFwiMjQwMDBcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIjI0VEJcIilcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwibWQtb3B0aW9uXCIsIHsgYXR0cnM6IHsgdmFsdWU6IFwiNDgwMDBcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIjQ4VEJcIilcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwibWQtb3B0aW9uXCIsIHsgYXR0cnM6IHsgdmFsdWU6IFwiNzIwMDBcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIjcyVEJcIilcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibWQtbGF5b3V0LWl0ZW0gbWQtc2l6ZS0yMFwiIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwibWQtYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibWQtcmFpc2VkIG1kLXByaW1hcnlcIixcbiAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmdldFNlcnZlcnNMaXN0KClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihcIkZpbHRlclwiKV1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF1cbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJtZC1kaXZpZGVyXCIpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJtZC10YWJsZVwiLCB7XG4gICAgICAgICAgICBhdHRyczogeyBcIm1kLWNhcmRcIjogXCJcIiB9LFxuICAgICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwibWQtdGFibGUtcm93XCIsXG4gICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uKHJlZikge1xuICAgICAgICAgICAgICAgICAgdmFyIGl0ZW0gPSByZWYuaXRlbVxuICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICBcIm1kLXRhYmxlLXJvd1wiLFxuICAgICAgICAgICAgICAgICAgICB7fSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJtZC10YWJsZS1jZWxsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IFwibWQtbGFiZWxcIjogXCJTZXJ2ZXIgTmFtZVwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKGl0ZW0uc2VydmVyX25hbWUpKV1cbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJtZC10YWJsZS1jZWxsXCIsIHsgYXR0cnM6IHsgXCJtZC1sYWJlbFwiOiBcIlJhbVwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhpdGVtLnJhbV9uYW1lKSlcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwibWQtdGFibGUtY2VsbFwiLCB7IGF0dHJzOiB7IFwibWQtbGFiZWxcIjogXCJIRERcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoaXRlbS5oZGRfbmFtZSkpXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibWQtdGFibGUtY2VsbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBcIm1kLWxhYmVsXCI6IFwiTG9jYXRpb25cIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhpdGVtLmxvY2F0aW9uX25hbWUpKV1cbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJtZC10YWJsZS1jZWxsXCIsIHsgYXR0cnM6IHsgXCJtZC1sYWJlbFwiOiBcIlByaWNlXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKGl0ZW0ucHJpY2UpKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZXJ2ZXJzTGlzdCxcbiAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgIF92bS5zZXJ2ZXJzTGlzdCA9ICQkdlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNlcnZlcnNMaXN0XCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm1kLWFsaWdubWVudC10b3AtY2VudGVyXCIgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwicGFnaW5hdGVcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgXCJwYWdlLWNvdW50XCI6IF92bS5sYXN0UGFnZU51bWJlcixcbiAgICAgICAgICAgICAgXCJwYWdlLXJhbmdlXCI6IDMsXG4gICAgICAgICAgICAgIFwibWFyZ2luLXBhZ2VzXCI6IDIsXG4gICAgICAgICAgICAgIFwiY2xpY2staGFuZGxlclwiOiBfdm0uY2xpY2tDYWxsYmFjayxcbiAgICAgICAgICAgICAgXCJwcmV2LXRleHRcIjogXCJQcmV2XCIsXG4gICAgICAgICAgICAgIFwibmV4dC10ZXh0XCI6IFwiTmV4dFwiLFxuICAgICAgICAgICAgICBcImNvbnRhaW5lci1jbGFzc1wiOiBcInBhZ2luYXRpb25cIixcbiAgICAgICAgICAgICAgXCJwYWdlLWNsYXNzXCI6IFwicGFnZS1pdGVtXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHsgc3RhdGljQ2xhc3M6IFwibWQtbGF5b3V0IG1kLWd1dHRlciBtZC1hbGlnbm1lbnQtdG9wLWNlbnRlclwiIH0sXG4gICAgICBbX2MoXCJoMVwiLCB7IHN0YXRpY0NsYXNzOiBcIm1kLXRpdGxlXCIgfSwgW192bS5fdihcIlNlcnZlciBMaXN0XCIpXSldXG4gICAgKVxuICB9XG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSJdLCJzb3VyY2VSb290IjoiIn0=