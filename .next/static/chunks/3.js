(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./components/TornaSu.js":
/*!*******************************!*\
  !*** ./components/TornaSu.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sass_index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sass/index.scss */ "./sass/index.scss");
/* harmony import */ var _sass_index_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sass_index_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);

// Inizio Modulo
// Importazione Librerie

 // Torna Su

var TornaSu = function TornaSu() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("aside", {
    className: "torna-su occulta"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, "Torna Su"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "torna-su__corpo"
  }, "<")), inizializzaTornaSu());
};
/**
 * Funzione gestione UX Torna Su
 * Setter
 */


function inizializzaTornaSu() {
  jquery__WEBPACK_IMPORTED_MODULE_2___default()(window).on('scroll', function () {
    if (jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).scrollTop() > 0) {
      jquery__WEBPACK_IMPORTED_MODULE_2___default()('.torna-su').removeClass('occulta');
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_2___default()('.torna-su').addClass('occulta');
    }

    if (jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).scrollTop() + jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).height() == jquery__WEBPACK_IMPORTED_MODULE_2___default()(document).height()) {
      jquery__WEBPACK_IMPORTED_MODULE_2___default()('.torna-su').addClass('solleva');
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_2___default()('.torna-su').removeClass('solleva');
    }
  });
  jquery__WEBPACK_IMPORTED_MODULE_2___default()('.torna-su').on('click tap', function () {
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('html, body').animate({
      scrollTop: 0
    }, 'fast');
  });
} // Esportazione Moduli


/* harmony default export */ __webpack_exports__["default"] = (TornaSu); // Fine Modulo

/***/ })

}]);
//# sourceMappingURL=3.js.map