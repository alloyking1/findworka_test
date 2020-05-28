(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Landing.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Landing.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      books: {},
      comment: '',
      bookId: '',
      count: '',
      comments: {},
      character: {}
    };
  },
  mounted: function mounted() {
    this.listBooks();
  },
  methods: {
    listBooks: function listBooks() {
      var _this = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('/api/book/fetch').then(function (res) {
        _this.books = res.data; //fetch character list

        _this.fetchCharacterList(_this.books.id); // save book if not existing already


        axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('api/book/save', {
          name: _this.books.name,
          author: _this.books.authors
        }).then(function (res) {
          // fetch comments and count
          _this.bookId = res.data;

          _this.commentCount(_this.bookId.id); //save character listing


          _this.charaterList(_this.bookId.id, _this.books.characters);
        });
      })["catch"](function (err) {
        console.log(err);
      });
    },
    saveComment: function saveComment(bookId) {
      if (this.comment === "") {
        alert('Comment field cannot be empty');
      } else {
        axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("api/book/add/comment/".concat(bookId), {
          comment_body: this.comment,
          book_id: bookId
        }).then(function (res) {
          alert('comment saved');
        });
      }
    },
    commentCount: function commentCount(postId) {
      var _this2 = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("api/book/comment/fetch/count/".concat(postId)).then(function (res) {
        _this2.count = res.data[1];
        _this2.comments = res.data[0];
      });
    },
    charaterList: function charaterList(postId, listing) {
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("api/book/add/characterlist/".concat(postId), {
        character_url: listing,
        book_id: postId
      }).then(function (res) {
        console.log(res);
      });
    },
    fetchCharacterList: function fetchCharacterList(postId) {
      var _this3 = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("api/book/character/fetch/".concat(postId)).then(function (res) {
        _this3.character = res.data; // console.log(res.data)
      });
    }
  },
  components: {
    Comment: Comment
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Landing.vue?vue&type=template&id=15bf0008&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Landing.vue?vue&type=template&id=15bf0008& ***!
  \**********************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "container text-center mt-4" }, [
    _c("div", { staticClass: "card" }, [
      _c("div", { staticClass: "card-body" }, [
        _c("h1", [_vm._v("All books")]),
        _vm._v(" "),
        _c("hr"),
        _vm._v(" "),
        _c(
          "div",
          [
            _c("router-link", { attrs: { to: "/add/comment/" } }, [
              _c("h3", [_vm._v("Title: " + _vm._s(this.books.name))])
            ]),
            _vm._v(" "),
            _c("h3", [_vm._v("Comment count: " + _vm._s(this.count))]),
            _vm._v(" "),
            _c("h6", [_vm._v("Author: " + _vm._s(this.books.authors))])
          ],
          1
        ),
        _vm._v(" "),
        _c("hr"),
        _vm._v(" "),
        _c("div", { staticClass: "form-group" }, [
          _c(
            "div",
            { staticClass: "row " },
            [
              _vm._l(_vm.character, function(each) {
                return _c(
                  "div",
                  { key: _vm.character.index, staticClass: "col-md-12" },
                  [
                    _vm._v(
                      "\n                        " +
                        _vm._s(each) +
                        "\n                    "
                    )
                  ]
                )
              }),
              _vm._v(" "),
              _vm._m(0),
              _vm._v(" "),
              _vm._l(_vm.comments, function(comment) {
                return _c(
                  "div",
                  { key: _vm.comments.index, staticClass: "col-md-12" },
                  [
                    _c("div", { staticClass: "card" }, [
                      _c("p", [_vm._v(_vm._s(comment.comment_body))]),
                      _vm._v(" "),
                      _c("small", [_vm._v(_vm._s(comment.created_at))])
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
          _c("label", { attrs: { for: "exampleFormControlTextarea1 mt-5" } }, [
            _vm._v("Please comment")
          ]),
          _vm._v(" "),
          _c("textarea", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.comment,
                expression: "comment"
              }
            ],
            staticClass: "form-control",
            attrs: { id: "exampleFormControlTextarea1", rows: "3" },
            domProps: { value: _vm.comment },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.comment = $event.target.value
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
                return _vm.saveComment(_vm.bookId.id)
              }
            }
          },
          [_vm._v("Comment")]
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-12" }, [
      _c("h3", { staticClass: "text-center" }, [_vm._v("All Comments")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Landing.vue":
/*!*********************************************!*\
  !*** ./resources/js/components/Landing.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Landing_vue_vue_type_template_id_15bf0008___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Landing.vue?vue&type=template&id=15bf0008& */ "./resources/js/components/Landing.vue?vue&type=template&id=15bf0008&");
/* harmony import */ var _Landing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Landing.vue?vue&type=script&lang=js& */ "./resources/js/components/Landing.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Landing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Landing_vue_vue_type_template_id_15bf0008___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Landing_vue_vue_type_template_id_15bf0008___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Landing.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Landing.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/components/Landing.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Landing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Landing.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Landing.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Landing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Landing.vue?vue&type=template&id=15bf0008&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/Landing.vue?vue&type=template&id=15bf0008& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Landing_vue_vue_type_template_id_15bf0008___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Landing.vue?vue&type=template&id=15bf0008& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Landing.vue?vue&type=template&id=15bf0008&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Landing_vue_vue_type_template_id_15bf0008___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Landing_vue_vue_type_template_id_15bf0008___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);