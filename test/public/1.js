(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Single.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Single.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      singleBook: {},
      comments: {},
      commentText: ''
    };
  },
  mounted: function mounted() {
    var id = this.$route.params.id;
    this.singBook(id);
  },
  methods: {
    /**
     * Fetch a single book from database. 
     * @param URL
     * @return $response
     */
    singBook: function singBook(id) {
      var _this = this;

      axios.get("api/book/get/single/".concat(id)).then(function (res) {
        _this.singleBook = res.data[1];
        _this.comments = res.data[0];
      });
    },

    /**
     * Save comment. 
     * @param URL
     * @return $response
     */
    saveComment: function saveComment(bookId) {
      if (this.commentText === "") {
        alert('Comment field cannot be empty');
      } else {
        axios.post("api/book/add/comment/".concat(bookId), {
          comment_body: this.commentText,
          book_id: bookId
        }).then(function (res) {
          alert('comment saved');
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Single.vue?vue&type=template&id=9e16631a&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Single.vue?vue&type=template&id=9e16631a& ***!
  \*********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "container" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-md-12 p-5" }, [
          _c("div", { staticClass: "card p-5" }, [
            _c("div", { staticClass: "p-5 text-center" }, [
              _c("h3", [_vm._v("Title: " + _vm._s(this.singleBook.name))]),
              _vm._v(" "),
              _c("h6", [_vm._v("Author: " + _vm._s(this.singleBook.author))])
            ]),
            _vm._v(" "),
            _c("hr"),
            _vm._v(" "),
            _c("div", { staticClass: "form-group" }, [
              _c(
                "div",
                { staticClass: "row text-center p-7" },
                [
                  _c("div", { staticClass: "col-md-12" }, [
                    _c("h3", { staticClass: "text-center" }, [
                      _vm._v("All Comments")
                    ]),
                    _vm._v(" "),
                    _c("h5", [
                      _vm._v("Comments count: " + _vm._s(_vm.comments.length))
                    ])
                  ]),
                  _vm._v(" "),
                  _vm._l(_vm.comments, function(comment) {
                    return _c(
                      "div",
                      { key: _vm.comments.index, staticClass: "col-md-12" },
                      [
                        _c("div", { staticClass: "card" }, [
                          _c("p", [_vm._v(_vm._s(comment.comment_body))]),
                          _vm._v(" "),
                          _c("small", [
                            _vm._v("Created at:" + _vm._s(comment.created_at))
                          ]),
                          _vm._v(" "),
                          _c("small", [
                            _vm._v("poster Ip:" + _vm._s(comment.client_ip))
                          ])
                        ]),
                        _vm._v(" "),
                        _c("br")
                      ]
                    )
                  })
                ],
                2
              ),
              _vm._v(" "),
              _c(
                "label",
                { attrs: { for: "exampleFormControlTextarea1 mt-5" } },
                [_vm._v("Please comment")]
              ),
              _vm._v(" "),
              _c("textarea", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.commentText,
                    expression: "commentText"
                  }
                ],
                staticClass: "form-control",
                attrs: { id: "exampleFormControlTextarea1", rows: "3" },
                domProps: { value: _vm.commentText },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.commentText = $event.target.value
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "btn btn-primary btn-lg btn-block",
                attrs: { type: "button" },
                on: {
                  click: function($event) {
                    return _vm.saveComment(_vm.$route.params.id)
                  }
                }
              },
              [_vm._v("Comment")]
            )
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Single.vue":
/*!********************************************!*\
  !*** ./resources/js/components/Single.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Single_vue_vue_type_template_id_9e16631a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Single.vue?vue&type=template&id=9e16631a& */ "./resources/js/components/Single.vue?vue&type=template&id=9e16631a&");
/* harmony import */ var _Single_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Single.vue?vue&type=script&lang=js& */ "./resources/js/components/Single.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Single_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Single_vue_vue_type_template_id_9e16631a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Single_vue_vue_type_template_id_9e16631a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Single.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Single.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/components/Single.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Single_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Single.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Single.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Single_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Single.vue?vue&type=template&id=9e16631a&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/Single.vue?vue&type=template&id=9e16631a& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Single_vue_vue_type_template_id_9e16631a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Single.vue?vue&type=template&id=9e16631a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Single.vue?vue&type=template&id=9e16631a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Single_vue_vue_type_template_id_9e16631a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Single_vue_vue_type_template_id_9e16631a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);