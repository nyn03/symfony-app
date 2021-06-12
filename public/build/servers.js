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
      var url = apiUrl + "/api/v1/servers-list?location=" + this.location + "&hdd=" + this.hdd + "&ram=" + this.ram.join() + "&storage=";

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
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvc2VydmVycy5qcyIsIndlYnBhY2s6Ly8vYXNzZXRzL2pzL2NvbXBvbmVudHMvQXBwLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9BcHAudnVlIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0FwcC52dWU/MGFjMyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9BcHAudnVlP2IyY2UiXSwibmFtZXMiOlsiVnVlIiwiVnVlTWF0ZXJpYWwiLCJlbCIsImNvbXBvbmVudHMiLCJBcHAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLDRDQUFBLENBQVFDLHFEQUFSO0FBRUEsSUFBSUQsd0NBQUosQ0FBUTtBQUNKRSxJQUFFLEVBQUUsTUFEQTtBQUVKQyxZQUFVLEVBQUU7QUFBQ0MsT0FBRyxFQUFIQSx3REFBRDtBQUFNSCxlQUFXLEVBQVhBLHFEQUFXQTtBQUFqQjtBQUZSLENBQVIsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM0SUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBLE1BREEsa0JBQ0E7QUFDQTtBQUNBLHFCQURBO0FBRUEsa0JBRkE7QUFHQSxhQUhBO0FBSUEsYUFKQTtBQUtBLGtCQUxBO0FBTUEsa0JBTkE7QUFPQTtBQVBBO0FBU0EsR0FYQTtBQVlBO0FBQ0Esa0JBREEsNEJBQ0E7QUFBQTs7QUFBQTtBQUNBLGdCQUNBLDRDQUNBLGFBREEsR0FFQSxPQUZBLEdBR0EsUUFIQSxHQUlBLE9BSkEsR0FLQSxlQUxBLEdBS0Es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MkNBQTJDLFNBQVMsc0JBQXNCLEVBQUU7QUFDNUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyx5Q0FBeUM7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLDZEQUE2RDtBQUNwRSxpQkFBaUIsMEJBQTBCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InNlcnZlcnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcbmltcG9ydCBWdWVNYXRlcmlhbCBmcm9tICd2dWUtbWF0ZXJpYWwnXG5pbXBvcnQgJ3Z1ZS1tYXRlcmlhbC9kaXN0L3Z1ZS1tYXRlcmlhbC5taW4uY3NzJ1xuaW1wb3J0ICd2dWUtbWF0ZXJpYWwvZGlzdC90aGVtZS9kZWZhdWx0LmNzcydcbmltcG9ydCBBcHAgZnJvbSAnLi9jb21wb25lbnRzL0FwcC52dWUnXG5cblZ1ZS51c2UoVnVlTWF0ZXJpYWwpXG5cbm5ldyBWdWUoe1xuICAgIGVsOiAnI2FwcCcsXG4gICAgY29tcG9uZW50czoge0FwcCwgVnVlTWF0ZXJpYWx9XG59KSIsIjx0ZW1wbGF0ZT5cbiAgPGRpdj5cbiAgICA8ZGl2IGNsYXNzPVwibWQtbGF5b3V0IG1kLWd1dHRlciBtZC1hbGlnbm1lbnQtdG9wLWNlbnRlclwiPlxuICAgICAgPGgxIGNsYXNzPVwibWQtdGl0bGVcIj5TZXJ2ZXIgTGlzdDwvaDE+XG4gICAgPC9kaXY+XG5cbiAgICBcbiAgICAgIDxkaXYgY2xhc3M9XCJtZC1sYXlvdXQgbWQtZ3V0dGVyIG1kLWFsaWdubWVudC10b3AtY2VudGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtZC1sYXlvdXQtaXRlbSBtZC1zaXplLTYwXCI+XG4gICAgICAgICAgPG1kLWNoZWNrYm94IHYtbW9kZWw9XCJyYW1cIiB2YWx1ZT1cIjJcIj4yR0I8L21kLWNoZWNrYm94PlxuICAgICAgICAgIDxtZC1jaGVja2JveCB2LW1vZGVsPVwicmFtXCIgdmFsdWU9XCI0XCI+NEdCPC9tZC1jaGVja2JveD5cbiAgICAgICAgICA8bWQtY2hlY2tib3ggdi1tb2RlbD1cInJhbVwiIHZhbHVlPVwiOFwiPjhHQjwvbWQtY2hlY2tib3g+XG4gICAgICAgICAgPG1kLWNoZWNrYm94IHYtbW9kZWw9XCJyYW1cIiB2YWx1ZT1cIjEyXCI+MTJHQjwvbWQtY2hlY2tib3g+XG4gICAgICAgICAgPG1kLWNoZWNrYm94IHYtbW9kZWw9XCJyYW1cIiB2YWx1ZT1cIjE2XCI+MTZHQjwvbWQtY2hlY2tib3g+XG4gICAgICAgICAgPG1kLWNoZWNrYm94IHYtbW9kZWw9XCJyYW1cIiB2YWx1ZT1cIjI0XCI+MjRHQjwvbWQtY2hlY2tib3g+XG4gICAgICAgICAgPG1kLWNoZWNrYm94IHYtbW9kZWw9XCJyYW1cIiB2YWx1ZT1cIjMyXCI+MzJHQjwvbWQtY2hlY2tib3g+XG4gICAgICAgICAgPG1kLWNoZWNrYm94IHYtbW9kZWw9XCJyYW1cIiB2YWx1ZT1cIjQ4XCI+NDhHQjwvbWQtY2hlY2tib3g+XG4gICAgICAgICAgPG1kLWNoZWNrYm94IHYtbW9kZWw9XCJyYW1cIiB2YWx1ZT1cIjY0XCI+NjRHQjwvbWQtY2hlY2tib3g+XG4gICAgICAgICAgPG1kLWNoZWNrYm94IHYtbW9kZWw9XCJyYW1cIiB2YWx1ZT1cIjk2XCI+OTZHQjwvbWQtY2hlY2tib3g+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtZC1sYXlvdXQtaXRlbSBtZC1zaXplLTIwXCI+XG4gICAgICAgICAgPG1kLWZpZWxkPlxuICAgICAgICAgICAgPG1kLXNlbGVjdFxuICAgICAgICAgICAgICB2LW1vZGVsPVwiaGRkXCJcbiAgICAgICAgICAgICAgbmFtZT1cImhkZFwiXG4gICAgICAgICAgICAgIGlkPVwiaGRkXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJIYXJkIGRpc2sgdHlwZVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxtZC1vcHRpb24gdmFsdWU9XCJcIj5TZWxlY3QgaGFyZCBkaXNrIHR5cGU8L21kLW9wdGlvbj5cbiAgICAgICAgICAgICAgPG1kLW9wdGlvbiB2YWx1ZT1cIjFcIj5TQVM8L21kLW9wdGlvbj5cbiAgICAgICAgICAgICAgPG1kLW9wdGlvbiB2YWx1ZT1cIjJcIj5TQVRBPC9tZC1vcHRpb24+XG4gICAgICAgICAgICAgIDxtZC1vcHRpb24gdmFsdWU9XCIzXCI+U1NEPC9tZC1vcHRpb24+XG4gICAgICAgICAgICA8L21kLXNlbGVjdD5cbiAgICAgICAgICA8L21kLWZpZWxkPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwibWQtbGF5b3V0LWl0ZW0gbWQtc2l6ZS0yMFwiPlxuICAgICAgICAgIDxtZC1maWVsZD5cbiAgICAgICAgICAgIDxtZC1zZWxlY3RcbiAgICAgICAgICAgICAgdi1tb2RlbD1cImxvY2F0aW9uXCJcbiAgICAgICAgICAgICAgbmFtZT1cImxvY2F0aW9uXCJcbiAgICAgICAgICAgICAgaWQ9XCJsb2NhdGlvblwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTG9jYXRpb25cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8bWQtb3B0aW9uIHZhbHVlPVwiXCI+U2VsZWN0IGxvY2F0aW9uPC9tZC1vcHRpb24+XG4gICAgICAgICAgICAgIDxtZC1vcHRpb24gdmFsdWU9XCIxXCI+QW1zdGVyZGFtQU1TLTAxPC9tZC1vcHRpb24+XG4gICAgICAgICAgICAgIDxtZC1vcHRpb24gdmFsdWU9XCIyXCI+V2FzaGluZ3RvbiBELkMuV0RDLTAxPC9tZC1vcHRpb24+XG4gICAgICAgICAgICAgIDxtZC1vcHRpb24gdmFsdWU9XCIzXCI+U2FuIEZyYW5jaXNjb1NGTy0xMjwvbWQtb3B0aW9uPlxuICAgICAgICAgICAgICA8bWQtb3B0aW9uIHZhbHVlPVwiNFwiPlNpbmdhcG9yZVNJTi0xMTwvbWQtb3B0aW9uPlxuICAgICAgICAgICAgICA8bWQtb3B0aW9uIHZhbHVlPVwiNVwiPkRhbGxhc0RBTC0xMDwvbWQtb3B0aW9uPlxuICAgICAgICAgICAgICA8bWQtb3B0aW9uIHZhbHVlPVwiNlwiPkZyYW5rZnVydEZSQS0xMDwvbWQtb3B0aW9uPlxuICAgICAgICAgICAgICA8bWQtb3B0aW9uIHZhbHVlPVwiN1wiPkhvbmcgS29uZ0hLRy0xMDwvbWQtb3B0aW9uPlxuICAgICAgICAgICAgPC9tZC1zZWxlY3Q+XG4gICAgICAgICAgPC9tZC1maWVsZD5cbiAgICAgICAgPC9kaXY+XG5cbjxoMz5TZWxlY3QgUmFuZ2U8L2gzPlxuICAgICAgPGRpdiBjbGFzcz1cIm1kLWxheW91dC1pdGVtIG1kLXNpemUtMjBcIj5cbiAgICAgICAgICA8bWQtZmllbGQ+XG4gICAgICAgICAgICA8bWQtc2VsZWN0XG4gICAgICAgICAgICAgIHYtbW9kZWw9XCJtaW5SYW5nZVwiXG4gICAgICAgICAgICAgIG5hbWU9XCJtaW5fcmFuZ2VcIlxuICAgICAgICAgICAgICBpZD1cIm1pbl9yYW5nZVwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTWluIFN0b3JhZ2VcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgPG1kLW9wdGlvbiB2YWx1ZT1cIlwiPlNlbGVjdCBtaW4gc3RvcmFnZTwvbWQtb3B0aW9uPlxuICAgICAgICAgICAgICA8bWQtb3B0aW9uIHZhbHVlPVwiMFwiPjA8L21kLW9wdGlvbj5cbiAgICAgICAgICAgICAgPG1kLW9wdGlvbiB2YWx1ZT1cIjI1MFwiPjI1MEdCPC9tZC1vcHRpb24+XG4gICAgICAgICAgICAgIDxtZC1vcHRpb24gdmFsdWU9XCI1MDBcIj41MDBHQjwvbWQtb3B0aW9uPlxuICAgICAgICAgICAgICA8bWQtb3B0aW9uIHZhbHVlPVwiMTAwMFwiPjFUQjwvbWQtb3B0aW9uPlxuICAgICAgICAgICAgICA8bWQtb3B0aW9uIHZhbHVlPVwiMjAwMFwiPjJUQjwvbWQtb3B0aW9uPlxuICAgICAgICAgICAgICA8bWQtb3B0aW9uIHZhbHVlPVwiMzAwMFwiPjNUQjwvbWQtb3B0aW9uPlxuICAgICAgICAgICAgICA8bWQtb3B0aW9uIHZhbHVlPVwiNDAwMFwiPjRUQjwvbWQtb3B0aW9uPlxuICAgICAgICAgICAgICA8bWQtb3B0aW9uIHZhbHVlPVwiODAwMFwiPjhUQjwvbWQtb3B0aW9uPlxuICAgICAgICAgICAgICA8bWQtb3B0aW9uIHZhbHVlPVwiMTIwMDBcIj4xMlRCPC9tZC1vcHRpb24+XG4gICAgICAgICAgICAgIDxtZC1vcHRpb24gdmFsdWU9XCIyNDAwMFwiPjI0VEI8L21kLW9wdGlvbj5cbiAgICAgICAgICAgICAgPG1kLW9wdGlvbiB2YWx1ZT1cIjQ4MDAwXCI+NDhUQjwvbWQtb3B0aW9uPlxuICAgICAgICAgICAgICA8bWQtb3B0aW9uIHZhbHVlPVwiNzIwMDBcIj43MlRCPC9tZC1vcHRpb24+XG4gICAgICAgICAgICA8L21kLXNlbGVjdD5cbiAgICAgICAgICA8L21kLWZpZWxkPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwibWQtbGF5b3V0LWl0ZW0gbWQtc2l6ZS0yMFwiPlxuICAgICAgICAgIDxtZC1maWVsZD5cbiAgICAgICAgICAgIDxtZC1zZWxlY3RcbiAgICAgICAgICAgICAgdi1tb2RlbD1cIm1heFJhbmdlXCJcbiAgICAgICAgICAgICAgbmFtZT1cIm1heF9yYW5nZVwiXG4gICAgICAgICAgICAgIGlkPVwibWF4X3JhbmdlXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJNYXggU3RvcmFnZVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICA8bWQtb3B0aW9uIHZhbHVlPVwiXCI+U2VsZWN0IG1heCBzdG9yYWdlPC9tZC1vcHRpb24+XG4gICAgICAgICAgICAgIDxtZC1vcHRpb24gdmFsdWU9XCIyNTBcIj4yNTBHQjwvbWQtb3B0aW9uPlxuICAgICAgICAgICAgICA8bWQtb3B0aW9uIHZhbHVlPVwiNTAwXCI+NTAwR0I8L21kLW9wdGlvbj5cbiAgICAgICAgICAgICAgPG1kLW9wdGlvbiB2YWx1ZT1cIjEwMDBcIj4xVEI8L21kLW9wdGlvbj5cbiAgICAgICAgICAgICAgPG1kLW9wdGlvbiB2YWx1ZT1cIjIwMDBcIj4yVEI8L21kLW9wdGlvbj5cbiAgICAgICAgICAgICAgPG1kLW9wdGlvbiB2YWx1ZT1cIjMwMDBcIj4zVEI8L21kLW9wdGlvbj5cbiAgICAgICAgICAgICAgPG1kLW9wdGlvbiB2YWx1ZT1cIjQwMDBcIj40VEI8L21kLW9wdGlvbj5cbiAgICAgICAgICAgICAgPG1kLW9wdGlvbiB2YWx1ZT1cIjgwMDBcIj44VEI8L21kLW9wdGlvbj5cbiAgICAgICAgICAgICAgPG1kLW9wdGlvbiB2YWx1ZT1cIjEyMDAwXCI+MTJUQjwvbWQtb3B0aW9uPlxuICAgICAgICAgICAgICA8bWQtb3B0aW9uIHZhbHVlPVwiMjQwMDBcIj4yNFRCPC9tZC1vcHRpb24+XG4gICAgICAgICAgICAgIDxtZC1vcHRpb24gdmFsdWU9XCI0ODAwMFwiPjQ4VEI8L21kLW9wdGlvbj5cbiAgICAgICAgICAgICAgPG1kLW9wdGlvbiB2YWx1ZT1cIjcyMDAwXCI+NzJUQjwvbWQtb3B0aW9uPlxuICAgICAgICAgICAgPC9tZC1zZWxlY3Q+XG4gICAgICAgICAgPC9tZC1maWVsZD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtZC1sYXlvdXQtaXRlbSBtZC1zaXplLTIwXCI+XG4gICAgICAgICAgPG1kLWJ1dHRvbiBjbGFzcz1cIm1kLXJhaXNlZCBtZC1wcmltYXJ5XCIgdi1vbjpjbGljaz1cImdldFNlcnZlcnNMaXN0KClcIlxuICAgICAgICAgICAgPkZpbHRlcjwvbWQtYnV0dG9uXG4gICAgICAgICAgPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIFxuICAgIDxtZC1kaXZpZGVyPjwvbWQtZGl2aWRlcj5cblxuICAgIDxkaXY+XG4gICAgICA8bWQtdGFibGUgdi1tb2RlbD1cInNlcnZlcnNMaXN0XCIgbWQtY2FyZD5cbiAgICAgICAgPG1kLXRhYmxlLXJvdyBzbG90PVwibWQtdGFibGUtcm93XCIgc2xvdC1zY29wZT1cInsgaXRlbSB9XCI+XG4gICAgICAgICAgPG1kLXRhYmxlLWNlbGwgbWQtbGFiZWw9XCJTZXJ2ZXIgTmFtZVwiPnt7XG4gICAgICAgICAgICBpdGVtLnNlcnZlcl9uYW1lXG4gICAgICAgICAgfX08L21kLXRhYmxlLWNlbGw+XG4gICAgICAgICAgPG1kLXRhYmxlLWNlbGwgbWQtbGFiZWw9XCJSYW1cIj57eyBpdGVtLnJhbV9uYW1lIH19PC9tZC10YWJsZS1jZWxsPlxuICAgICAgICAgIDxtZC10YWJsZS1jZWxsIG1kLWxhYmVsPVwiSEREXCI+e3sgaXRlbS5oZGRfbmFtZSB9fTwvbWQtdGFibGUtY2VsbD5cbiAgICAgICAgICA8bWQtdGFibGUtY2VsbCBtZC1sYWJlbD1cIkxvY2F0aW9uXCI+e3tcbiAgICAgICAgICAgIGl0ZW0ubG9jYXRpb25fbmFtZVxuICAgICAgICAgIH19PC9tZC10YWJsZS1jZWxsPlxuICAgICAgICAgIDxtZC10YWJsZS1jZWxsIG1kLWxhYmVsPVwiUHJpY2VcIj57eyBpdGVtLnByaWNlIH19PC9tZC10YWJsZS1jZWxsPlxuICAgICAgICA8L21kLXRhYmxlLXJvdz5cbiAgICAgIDwvbWQtdGFibGU+XG4gICAgPC9kaXY+XG5cbiAgPGRpdiBjbGFzcz1cIm1kLWFsaWdubWVudC10b3AtY2VudGVyXCI+XG4gICAgPHBhZ2luYXRlXG4gICAgOnBhZ2UtY291bnQ9XCJsYXN0UGFnZU51bWJlclwiXG4gICAgOnBhZ2UtcmFuZ2U9XCIzXCJcbiAgICA6bWFyZ2luLXBhZ2VzPVwiMlwiXG4gICAgOmNsaWNrLWhhbmRsZXI9XCJjbGlja0NhbGxiYWNrXCJcbiAgICA6cHJldi10ZXh0PVwiJ1ByZXYnXCJcbiAgICA6bmV4dC10ZXh0PVwiJ05leHQnXCJcbiAgICA6Y29udGFpbmVyLWNsYXNzPVwiJ3BhZ2luYXRpb24nXCJcbiAgICA6cGFnZS1jbGFzcz1cIidwYWdlLWl0ZW0nXCI+XG4gIDwvcGFnaW5hdGU+XG48L2Rpdj5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgVnVlIGZyb20gXCJ2dWVcIlxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiXG5pbXBvcnQgUGFnaW5hdGUgZnJvbSBcInZ1ZWpzLXBhZ2luYXRlMlwiXG5WdWUuY29tcG9uZW50KCdwYWdpbmF0ZScsIFBhZ2luYXRlKVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNlcnZlcnNMaXN0OiBbXSxcbiAgICAgIGxvY2F0aW9uOiBcIlwiLFxuICAgICAgaGRkOiBcIlwiLFxuICAgICAgcmFtOiBbXSxcbiAgICAgIG1pblJhbmdlOlwiXCIsXG4gICAgICBtYXhSYW5nZTpcIlwiLFxuICAgICAgbGFzdFBhZ2VOdW1iZXI6MVxuICAgIH07XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBnZXRTZXJ2ZXJzTGlzdChwYWdlID0gMSkge1xuICAgICAgbGV0IHVybCA9XG4gICAgICAgIGFwaVVybCArIFwiL2FwaS92MS9zZXJ2ZXJzLWxpc3Q/bG9jYXRpb249XCIgK1xuICAgICAgICB0aGlzLmxvY2F0aW9uICtcbiAgICAgICAgXCImaGRkPVwiICtcbiAgICAgICAgdGhpcy5oZGQgK1xuICAgICAgICBcIiZyYW09XCIgK1xuICAgICAgICB0aGlzLnJhbS5qb2luKCkrXCImc3RvcmFnZT1cIjtcblxuICAgICAgICBpZih0aGlzLm1pblJhbmdlIT1cIlwiICYmIHRoaXMubWF4UmFuZ2UhPVwiXCIpIHtcbiAgICAgICAgICB1cmwgPSB1cmwgKyBTdHJpbmcodGhpcy5taW5SYW5nZSkgKyBcIixcIiArIFN0cmluZyh0aGlzLm1heFJhbmdlKTtcbiAgICAgICAgfVxuICAgICAgICB1cmwgKz0gXCImcGFnZT1cIiArIHBhZ2U7XG4gICAgICAgIFxuICAgICAgICBheGlvcy5nZXQodXJsKVxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiAoXG4gICAgICAgICAgdGhpcy5zZXJ2ZXJzTGlzdCA9IHJlc3BvbnNlLmRhdGEucGF5bG9hZC5yZXN1bHQsXG4gICAgICAgICAgdGhpcy5sYXN0UGFnZU51bWJlciA9IHJlc3BvbnNlLmRhdGEucGF5bG9hZC5sYXN0UGFnZU51bWJlclxuICAgICAgICApKTtcbiAgICB9LFxuICAgIGNsaWNrQ2FsbGJhY2sgKHBhZ2VOdW0pIHtcbiAgICAgIHRoaXMuZ2V0U2VydmVyc0xpc3QocGFnZU51bSk7XG4gICAgfVxuICB9LFxuICBtb3VudGVkKCkge1xuICAgIHRoaXMuZ2V0U2VydmVyc0xpc3QoKTtcbiAgfVxufTtcbjwvc2NyaXB0PlxuIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTBkZDQ3ZTEwJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi92YXIvd3d3L3Byb2plY3Qvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMGRkNDdlMTAnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMGRkNDdlMTAnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMGRkNDdlMTAnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0FwcC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MGRkNDdlMTAmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMGRkNDdlMTAnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImFzc2V0cy9qcy9jb21wb25lbnRzL0FwcC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTFbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xWzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgW1xuICAgICAgX3ZtLl9tKDApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm1kLWxheW91dCBtZC1ndXR0ZXIgbWQtYWxpZ25tZW50LXRvcC1jZW50ZXJcIiB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtZC1sYXlvdXQtaXRlbSBtZC1zaXplLTYwXCIgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJtZC1jaGVja2JveFwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHZhbHVlOiBcIjJcIiB9LFxuICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5yYW0sXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0ucmFtID0gJCR2XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwicmFtXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoXCIyR0JcIildXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwibWQtY2hlY2tib3hcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBhdHRyczogeyB2YWx1ZTogXCI0XCIgfSxcbiAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ucmFtLFxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLnJhbSA9ICQkdlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInJhbVwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KFwiNEdCXCIpXVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIm1kLWNoZWNrYm94XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdmFsdWU6IFwiOFwiIH0sXG4gICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnJhbSxcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5yYW0gPSAkJHZcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJyYW1cIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihcIjhHQlwiKV1cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJtZC1jaGVja2JveFwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHZhbHVlOiBcIjEyXCIgfSxcbiAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ucmFtLFxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLnJhbSA9ICQkdlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInJhbVwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KFwiMTJHQlwiKV1cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJtZC1jaGVja2JveFwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHZhbHVlOiBcIjE2XCIgfSxcbiAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ucmFtLFxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLnJhbSA9ICQkdlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInJhbVwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KFwiMTZHQlwiKV1cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJtZC1jaGVja2JveFwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHZhbHVlOiBcIjI0XCIgfSxcbiAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ucmFtLFxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLnJhbSA9ICQkdlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInJhbVwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KFwiMjRHQlwiKV1cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJtZC1jaGVja2JveFwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHZhbHVlOiBcIjMyXCIgfSxcbiAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ucmFtLFxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLnJhbSA9ICQkdlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInJhbVwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KFwiMzJHQlwiKV1cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJtZC1jaGVja2JveFwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHZhbHVlOiBcIjQ4XCIgfSxcbiAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ucmFtLFxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLnJhbSA9ICQkdlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInJhbVwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KFwiNDhHQlwiKV1cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJtZC1jaGVja2JveFwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHZhbHVlOiBcIjY0XCIgfSxcbiAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ucmFtLFxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLnJhbSA9ICQkdlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInJhbVwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KFwiNjRHQlwiKV1cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJtZC1jaGVja2JveFwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHZhbHVlOiBcIjk2XCIgfSxcbiAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ucmFtLFxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLnJhbSA9ICQkdlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInJhbVwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KFwiOTZHQlwiKV1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtZC1sYXlvdXQtaXRlbSBtZC1zaXplLTIwXCIgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJtZC1maWVsZFwiLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcIm1kLXNlbGVjdFwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiaGRkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogXCJoZGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIkhhcmQgZGlzayB0eXBlXCJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmhkZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmhkZCA9ICQkdlxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiaGRkXCJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIm1kLW9wdGlvblwiLCB7IGF0dHJzOiB7IHZhbHVlOiBcIlwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiU2VsZWN0IGhhcmQgZGlzayB0eXBlXCIpXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIm1kLW9wdGlvblwiLCB7IGF0dHJzOiB7IHZhbHVlOiBcIjFcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIlNBU1wiKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJtZC1vcHRpb25cIiwgeyBhdHRyczogeyB2YWx1ZTogXCIyXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJTQVRBXCIpXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIm1kLW9wdGlvblwiLCB7IGF0dHJzOiB7IHZhbHVlOiBcIjNcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIlNTRFwiKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtZC1sYXlvdXQtaXRlbSBtZC1zaXplLTIwXCIgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJtZC1maWVsZFwiLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcIm1kLXNlbGVjdFwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibG9jYXRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcImxvY2F0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJMb2NhdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5sb2NhdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmxvY2F0aW9uID0gJCR2XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJsb2NhdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJtZC1vcHRpb25cIiwgeyBhdHRyczogeyB2YWx1ZTogXCJcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIlNlbGVjdCBsb2NhdGlvblwiKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJtZC1vcHRpb25cIiwgeyBhdHRyczogeyB2YWx1ZTogXCIxXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJBbXN0ZXJkYW1BTVMtMDFcIilcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwibWQtb3B0aW9uXCIsIHsgYXR0cnM6IHsgdmFsdWU6IFwiMlwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiV2FzaGluZ3RvbiBELkMuV0RDLTAxXCIpXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIm1kLW9wdGlvblwiLCB7IGF0dHJzOiB7IHZhbHVlOiBcIjNcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIlNhbiBGcmFuY2lzY29TRk8tMTJcIilcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwibWQtb3B0aW9uXCIsIHsgYXR0cnM6IHsgdmFsdWU6IFwiNFwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiU2luZ2Fwb3JlU0lOLTExXCIpXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIm1kLW9wdGlvblwiLCB7IGF0dHJzOiB7IHZhbHVlOiBcIjVcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIkRhbGxhc0RBTC0xMFwiKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJtZC1vcHRpb25cIiwgeyBhdHRyczogeyB2YWx1ZTogXCI2XCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJGcmFua2Z1cnRGUkEtMTBcIilcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwibWQtb3B0aW9uXCIsIHsgYXR0cnM6IHsgdmFsdWU6IFwiN1wiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiSG9uZyBLb25nSEtHLTEwXCIpXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImgzXCIsIFtfdm0uX3YoXCJTZWxlY3QgUmFuZ2VcIildKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibWQtbGF5b3V0LWl0ZW0gbWQtc2l6ZS0yMFwiIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwibWQtZmllbGRcIixcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJtZC1zZWxlY3RcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1pbl9yYW5nZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwibWluX3JhbmdlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJNaW4gU3RvcmFnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5taW5SYW5nZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLm1pblJhbmdlID0gJCR2XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJtaW5SYW5nZVwiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJtZC1vcHRpb25cIiwgeyBhdHRyczogeyB2YWx1ZTogXCJcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIlNlbGVjdCBtaW4gc3RvcmFnZVwiKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJtZC1vcHRpb25cIiwgeyBhdHRyczogeyB2YWx1ZTogXCIwXCIgfSB9LCBbX3ZtLl92KFwiMFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJtZC1vcHRpb25cIiwgeyBhdHRyczogeyB2YWx1ZTogXCIyNTBcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIjI1MEdCXCIpXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIm1kLW9wdGlvblwiLCB7IGF0dHJzOiB7IHZhbHVlOiBcIjUwMFwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiNTAwR0JcIilcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwibWQtb3B0aW9uXCIsIHsgYXR0cnM6IHsgdmFsdWU6IFwiMTAwMFwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiMVRCXCIpXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIm1kLW9wdGlvblwiLCB7IGF0dHJzOiB7IHZhbHVlOiBcIjIwMDBcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIjJUQlwiKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJtZC1vcHRpb25cIiwgeyBhdHRyczogeyB2YWx1ZTogXCIzMDAwXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIzVEJcIilcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwibWQtb3B0aW9uXCIsIHsgYXR0cnM6IHsgdmFsdWU6IFwiNDAwMFwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiNFRCXCIpXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIm1kLW9wdGlvblwiLCB7IGF0dHJzOiB7IHZhbHVlOiBcIjgwMDBcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIjhUQlwiKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJtZC1vcHRpb25cIiwgeyBhdHRyczogeyB2YWx1ZTogXCIxMjAwMFwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiMTJUQlwiKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJtZC1vcHRpb25cIiwgeyBhdHRyczogeyB2YWx1ZTogXCIyNDAwMFwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiMjRUQlwiKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJtZC1vcHRpb25cIiwgeyBhdHRyczogeyB2YWx1ZTogXCI0ODAwMFwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiNDhUQlwiKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJtZC1vcHRpb25cIiwgeyBhdHRyczogeyB2YWx1ZTogXCI3MjAwMFwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiNzJUQlwiKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtZC1sYXlvdXQtaXRlbSBtZC1zaXplLTIwXCIgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJtZC1maWVsZFwiLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcIm1kLXNlbGVjdFwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibWF4X3JhbmdlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogXCJtYXhfcmFuZ2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIk1heCBTdG9yYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLm1heFJhbmdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ubWF4UmFuZ2UgPSAkJHZcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIm1heFJhbmdlXCJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIm1kLW9wdGlvblwiLCB7IGF0dHJzOiB7IHZhbHVlOiBcIlwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiU2VsZWN0IG1heCBzdG9yYWdlXCIpXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIm1kLW9wdGlvblwiLCB7IGF0dHJzOiB7IHZhbHVlOiBcIjI1MFwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiMjUwR0JcIilcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwibWQtb3B0aW9uXCIsIHsgYXR0cnM6IHsgdmFsdWU6IFwiNTAwXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCI1MDBHQlwiKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJtZC1vcHRpb25cIiwgeyBhdHRyczogeyB2YWx1ZTogXCIxMDAwXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIxVEJcIilcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwibWQtb3B0aW9uXCIsIHsgYXR0cnM6IHsgdmFsdWU6IFwiMjAwMFwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiMlRCXCIpXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIm1kLW9wdGlvblwiLCB7IGF0dHJzOiB7IHZhbHVlOiBcIjMwMDBcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIjNUQlwiKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJtZC1vcHRpb25cIiwgeyBhdHRyczogeyB2YWx1ZTogXCI0MDAwXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCI0VEJcIilcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwibWQtb3B0aW9uXCIsIHsgYXR0cnM6IHsgdmFsdWU6IFwiODAwMFwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiOFRCXCIpXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIm1kLW9wdGlvblwiLCB7IGF0dHJzOiB7IHZhbHVlOiBcIjEyMDAwXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIxMlRCXCIpXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIm1kLW9wdGlvblwiLCB7IGF0dHJzOiB7IHZhbHVlOiBcIjI0MDAwXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIyNFRCXCIpXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIm1kLW9wdGlvblwiLCB7IGF0dHJzOiB7IHZhbHVlOiBcIjQ4MDAwXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCI0OFRCXCIpXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIm1kLW9wdGlvblwiLCB7IGF0dHJzOiB7IHZhbHVlOiBcIjcyMDAwXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCI3MlRCXCIpXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm1kLWxheW91dC1pdGVtIG1kLXNpemUtMjBcIiB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIm1kLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1kLXJhaXNlZCBtZC1wcmltYXJ5XCIsXG4gICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5nZXRTZXJ2ZXJzTGlzdCgpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJGaWx0ZXJcIildXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwibWQtZGl2aWRlclwiKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwibWQtdGFibGVcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHsgXCJtZC1jYXJkXCI6IFwiXCIgfSxcbiAgICAgICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAga2V5OiBcIm1kLXRhYmxlLXJvd1wiLFxuICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbihyZWYpIHtcbiAgICAgICAgICAgICAgICAgIHZhciBpdGVtID0gcmVmLml0ZW1cbiAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJtZC10YWJsZS1yb3dcIixcbiAgICAgICAgICAgICAgICAgICAge30sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibWQtdGFibGUtY2VsbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBcIm1kLWxhYmVsXCI6IFwiU2VydmVyIE5hbWVcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhpdGVtLnNlcnZlcl9uYW1lKSldXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwibWQtdGFibGUtY2VsbFwiLCB7IGF0dHJzOiB7IFwibWQtbGFiZWxcIjogXCJSYW1cIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoaXRlbS5yYW1fbmFtZSkpXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIm1kLXRhYmxlLWNlbGxcIiwgeyBhdHRyczogeyBcIm1kLWxhYmVsXCI6IFwiSEREXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKGl0ZW0uaGRkX25hbWUpKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm1kLXRhYmxlLWNlbGxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgXCJtZC1sYWJlbFwiOiBcIkxvY2F0aW9uXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoaXRlbS5sb2NhdGlvbl9uYW1lKSldXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwibWQtdGFibGUtY2VsbFwiLCB7IGF0dHJzOiB7IFwibWQtbGFiZWxcIjogXCJQcmljZVwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhpdGVtLnByaWNlKSlcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2VydmVyc0xpc3QsXG4gICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICBfdm0uc2VydmVyc0xpc3QgPSAkJHZcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzZXJ2ZXJzTGlzdFwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtZC1hbGlnbm1lbnQtdG9wLWNlbnRlclwiIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcInBhZ2luYXRlXCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIFwicGFnZS1jb3VudFwiOiBfdm0ubGFzdFBhZ2VOdW1iZXIsXG4gICAgICAgICAgICAgIFwicGFnZS1yYW5nZVwiOiAzLFxuICAgICAgICAgICAgICBcIm1hcmdpbi1wYWdlc1wiOiAyLFxuICAgICAgICAgICAgICBcImNsaWNrLWhhbmRsZXJcIjogX3ZtLmNsaWNrQ2FsbGJhY2ssXG4gICAgICAgICAgICAgIFwicHJldi10ZXh0XCI6IFwiUHJldlwiLFxuICAgICAgICAgICAgICBcIm5leHQtdGV4dFwiOiBcIk5leHRcIixcbiAgICAgICAgICAgICAgXCJjb250YWluZXItY2xhc3NcIjogXCJwYWdpbmF0aW9uXCIsXG4gICAgICAgICAgICAgIFwicGFnZS1jbGFzc1wiOiBcInBhZ2UtaXRlbVwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7IHN0YXRpY0NsYXNzOiBcIm1kLWxheW91dCBtZC1ndXR0ZXIgbWQtYWxpZ25tZW50LXRvcC1jZW50ZXJcIiB9LFxuICAgICAgW19jKFwiaDFcIiwgeyBzdGF0aWNDbGFzczogXCJtZC10aXRsZVwiIH0sIFtfdm0uX3YoXCJTZXJ2ZXIgTGlzdFwiKV0pXVxuICAgIClcbiAgfVxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iXSwic291cmNlUm9vdCI6IiJ9