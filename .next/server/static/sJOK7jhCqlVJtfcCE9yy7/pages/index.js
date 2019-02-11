module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("jquery");

/***/ }),
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, exports) {



/***/ }),
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(15);


/***/ }),
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./sass/index.scss
var sass = __webpack_require__(4);

// CONCATENATED MODULE: ./components/Header.js

// Inizio Modulo
// Importazione Librerie
 // Header

var Header_Header = function Header() {
  return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement("footer", {
    className: "header"
  }));
}; // Esportazione Moduli


/* harmony default export */ var components_Header = (Header_Header); // Fine Modulo
// CONCATENATED MODULE: ./components/Footer.js

// Inizio Modulo
// Importazione Librerie
 // Footer

var Footer_Footer = function Footer() {
  return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement("footer", {
    className: "footer"
  }));
}; // Esportazione Moduli


/* harmony default export */ var components_Footer = (Footer_Footer); // Fine Modulo
// EXTERNAL MODULE: external "jquery"
var external_jquery_ = __webpack_require__(1);
var external_jquery_default = /*#__PURE__*/__webpack_require__.n(external_jquery_);

// CONCATENATED MODULE: ./components/TornaSu.js

// Inizio Modulo
// Importazione Librerie

 // Torna Su

var TornaSu_TornaSu = function TornaSu() {
  return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement("aside", {
    className: "torna-su occulta"
  }, external_react_default.a.createElement("h6", null, "Torna Su"), external_react_default.a.createElement("div", {
    className: "torna-su__corpo"
  }, "<")), inizializzaTornaSu());
};
/**
 * Funzione gestione UX Torna Su
 * Setter
 */


function inizializzaTornaSu() {
  external_jquery_default()(window).on('scroll', function () {
    if (external_jquery_default()(this).scrollTop() > 0) {
      external_jquery_default()('.torna-su').removeClass('occulta');
    } else {
      external_jquery_default()('.torna-su').addClass('occulta');
    }

    if (external_jquery_default()(this).scrollTop() + external_jquery_default()(this).height() == external_jquery_default()(document).height()) {
      external_jquery_default()('.torna-su').addClass('solleva');
    } else {
      external_jquery_default()('.torna-su').removeClass('solleva');
    }
  });
  external_jquery_default()('.torna-su').on('click tap', function () {
    external_jquery_default()('html, body').animate({
      scrollTop: 0
    }, 'fast');
  });
} // Esportazione Moduli


/* harmony default export */ var components_TornaSu = (TornaSu_TornaSu); // Fine Modulo
// CONCATENATED MODULE: ./components/Cookies.js


function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Inizio Modulo
// Importazione Librerie

 // Cookies

var Cookies_Cookies = function Cookies() {
  return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement("section", {
    className: "cookies"
  }, external_react_default.a.createElement("h6", null, "Cookie Policy"), external_react_default.a.createElement("div", {
    className: "cookies__container cookies--avviso aperto"
  }, external_react_default.a.createElement("h6", null, "Avviso"), external_react_default.a.createElement("p", {
    className: "cookies__corpo"
  }, "stack utilizza i Cookies tecnici e di terze parti, per la gestione del sito web e l'analisi del traffico.", external_react_default.a.createElement("br", null), "Accettando i ", external_react_default.a.createElement("a", {
    className: "cookies__corpo__link",
    href: "privacy",
    title: "Cookie Policy - Informativa",
    tabIndex: "100",
    target: "new"
  }, "termini e le condizioni"), "previste, si esprime il proprio consenso al salvataggio dei cookies sul dispositivo in uso.", external_react_default.a.createElement("a", {
    className: "cookies__corpo__chiudi cookies__corpo__chiudi--avviso disabilita",
    href: "#",
    title: "Nascondi e continua la navigazione sul sito web",
    tabIndex: "103"
  }, "X")), external_react_default.a.createElement("a", {
    className: "cookies__cta cookies__cta--impostazioni disabilita aperto",
    href: "#",
    title: "Gestisci l'attivazione dei cookies di terze parti",
    tabIndex: "101"
  }, "Impostazioni"), external_react_default.a.createElement("a", {
    className: "cookies__cta cookies__cta--accetta disabilita aperto",
    href: "#",
    title: "Approva la normativa sul trattamento dei dati personali",
    tabIndex: "102"
  }, "Accetto")), external_react_default.a.createElement("div", {
    className: "cookies__container cookies--impostazioni aperto nascondi"
  }, external_react_default.a.createElement("h6", null, "Avviso"), external_react_default.a.createElement("p", {
    className: "cookies__corpo"
  }, "I Cookies tecnici sono richiesti per fornire le funzionalit\xE0 base del sito web.", external_react_default.a.createElement("br", null), "Per visualizzare l'elenco aggiornato e la procedura per la loro disattivazione, ", external_react_default.a.createElement("a", _defineProperty({
    className: "cookies__corpo__link",
    href: "privacy#cookies",
    title: "Cookie Policy",
    tabIndex: "300",
    target: "new"
  }, "tabIndex", "103"), "consulta l'apposita pagina"), ".", external_react_default.a.createElement("br", null), external_react_default.a.createElement("br", null), "I Cookies di terze parti vengono utilizzati per le funzionalit\xE0 accessorie del sito web, come l'analisi di traffico, la visualizzazione di elementi multimediali/interattivi o altro.", external_react_default.a.createElement("br", null), "Modalit\xE0 di elaborazione ed invio dei dati, cos\xEC come le informazioni sui soggetti coinvolti, sono disponibili nel ", external_react_default.a.createElement("a", {
    className: "cookies__corpo__link",
    href: "privacy#gdpr",
    title: "Regolamentazione generale sulla protezione dei dati",
    tabIndex: "104",
    target: "new"
  }, "paragrafo dedicato"), " e nei rispettivi links di seguito.", external_react_default.a.createElement("br", null), "Puoi attivare o disattivare i Cookies di terze parti, selezionando la voce corrispondente dalla lista e salvando le tue preferenze cliccando su \"Salva\".", external_react_default.a.createElement("br", null), "Per la disattivazione totale di questi Cookies, clicca su \"Opt-Out\"*.", external_react_default.a.createElement("br", null), external_react_default.a.createElement("br", null), "* Qualora le funzionalit\xE0 descritte siano soggette a disattivazione \u2013 tutte od in parte, alcuni dei servizi forniti da stack potrebbero risultare inutilizzabili.", external_react_default.a.createElement("a", {
    className: "cookies__corpo__chiudi cookies__corpo__chiudi--impostazioni disabilita",
    href: "#",
    title: "Nascondi e continua la navigazione sul sito web",
    tabIndex: "103"
  }, "X")), external_react_default.a.createElement("form", {
    className: "cookies__form",
    encType: "application/x-www-form-urlencoded",
    tabIndex: "105"
  }, external_react_default.a.createElement("legend", {
    className: "cookies__form__legenda"
  }, "Modulo di disattivazione identificatori di terze parti"), external_react_default.a.createElement("label", {
    className: "cookies__form__etichetta",
    htmlFor: "google-cookie"
  }, external_react_default.a.createElement("input", {
    id: "google-cookie",
    className: "cookies__form__etichetta__campo",
    type: "checkbox",
    name: "google-cookie",
    tabIndex: "106",
    value: "google_stack"
  }), external_react_default.a.createElement("span", {
    className: "cookies__form__etichetta__checkbox"
  }), "Google (Analisi/Misurazione, Ottimizzazione) -", external_react_default.a.createElement("a", {
    className: "cookies__form__etichetta__link",
    href: "https://tinyurl.com/y96a7je2",
    title: "Cookie Policy - Google",
    tabIndex: "306",
    target: "new"
  }, "Informativa"))), external_react_default.a.createElement("a", {
    className: "cookies__cta cookies__cta--opt-out disabilita aperto",
    href: "#",
    title: "Gestisci l'attivazione dei cookies di terze parti",
    tabIndex: "108"
  }, "Opt-Out"), external_react_default.a.createElement("a", {
    className: "cookies__cta cookies__cta--salva disabilita aperto",
    href: "#",
    title: "Approva la normativa sul trattamento dei dati personali",
    tabIndex: "109"
  }, "Salva"))), gestisciCookies());
};
/**
 * Metodo gestione impostazione cookies
 * Setter
 * @param {string} n Nome cookie
 * @param {string} v Valore cookie
 */


function ck(n, v) {
  var s = new Date();
  s.setDate(s.getDate() + 30);
  document.cookie = n + '=' + escape(v) + '; expires=' + s.toGMTString() + '; path=/;secure';
}
/**
 * Metodo gestione controllo cookies
 * setter
 * @param {string} n Nome cookie
 * @return {string} Valore cookie
 */


function l(n) {
  if (document.cookie.length > 0) {
    var i = document.cookie.indexOf(n + '=');

    if (i != -1) {
      i = i + n.length + 1;
      var f = document.cookie.indexOf(';', i);

      if (f == -1) {
        f = document.cookie.length;
      }

      return unescape(document.cookie.substring(i, f));
    } else {
      return '';
    }
  }

  return '';
}
/**
 * Metodo gestione eliminazione cookies
 * Setter
 * @param {string} n Nome cookie
 */


function dk(n) {
  document.cookie = n + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/;';
}
/**
 * Metodo gestione controllo accettazione cookies
 * Getter
 * @param {string} n Nome cookie
 */


function ak(n) {
  var c = l(n); // Controllo Cookie
  // Se non è stata accettata la policy

  if (c === '' && n === 'cookie_law_stack') {
    external_jquery_default()('.cookies__form__etichetta__campo').each(function () {
      external_jquery_default()(this).attr('checked', 'checked');
    });
    external_jquery_default()('.cookies').fadeIn();
  } else if (c === '') {
    // Altrimenti se non esiste
    switch (n) {
      case 'google_stack':
        external_jquery_default()('#google-cookie').removeAttr('checked');
        break;

      default:
    }
  } else if (c !== '') {
    // Altrimenti se esiste
    switch (n) {
      case 'cookie_law_stack':
        external_jquery_default()('.cookies__cta').removeClass('aperto');
        external_jquery_default()('.cookies__corpo, .cookies__form, .cookies__cta--accetta, .cookies__corpo__chiudi--avviso').addClass('nascondi');
        external_jquery_default()('.cookies, .cookies__container').addClass('chiuso');
        external_jquery_default()('.cookies__container, .cookies__cta--impostazioni').removeClass('aperto');
        external_jquery_default()('.cookies').addClass('mobile');
        external_jquery_default()('.cookies__cta--impostazioni').html('Cookies');
        break;

      case 'google_stack':
        external_jquery_default()('#google-cookie').attr('checked', 'checked');
        break;

      default:
    }
  }
}
/**
 * Metodo gestione cookies
 * Setter
 */


function gestisciCookies() {
  document.cookie = 'test_cookie';
  var t = document.cookie.indexOf('test_cookie') != -1 ? true : false;
  var n = ['cookie_law_stack', 'google_stack'];

  if (t) {
    for (var i in n) {
      ak(n[i]);
    } // Impostazioni


    external_jquery_default()('.cookies__cta--impostazioni').on('click tap', function (e) {
      e.preventDefault();
      external_jquery_default()('.cookies, .cookies__container').removeClass('chiuso');
      external_jquery_default()('.cookies, .cookies__container, .cookies__cta, .cookies__cta--impostazioni').addClass('aperto');
      external_jquery_default()('.cookies__corpo, .cookies__form, .cookies__cta--accetta, .cookies__cta--opt-out, .cookies__cta--salva, .cookies__corpo__chiudi--avviso').removeClass('nascondi');
      external_jquery_default()('.cookies--avviso').removeClass('animated slideInDown').addClass('nascondi');
      external_jquery_default()('.cookies').removeClass('mobile');

      if (external_jquery_default()('html').attr('lang') == 'it-IT') {
        external_jquery_default()('.cookies__cta--impostazioni').html('Impostazioni');
      } else {
        external_jquery_default()('.cookies__cta--impostazioni').html('Settings');
      }

      external_jquery_default()('.cookies--impostazioni').removeClass('nascondi animated slideOutUp').addClass('animated slideInDown');
    }); // Accettazione

    external_jquery_default()('.cookies__cta--accetta').on('click tap', function (e) {
      e.preventDefault(); // Cookie Policy

      if (l('cookie_law_stack') === '') {
        ck('cookie_law_stack', 'accettata'); // Invio notifica

        external_jquery_default.a.post('/php/cookies-notifica.php');
      } // Cookies terze parti


      external_jquery_default()('.cookies__form__etichetta__campo').each(function () {
        if (l(external_jquery_default()(this).val()) === '') {
          ck(external_jquery_default()(this).val(), 'accettata');
          ak(external_jquery_default()(this).val());
        }
      });
    }); // Salvataggio

    external_jquery_default()('.cookies__cta--salva').on('click tap', function (e) {
      e.preventDefault(); // Aggiornamento Cookies

      external_jquery_default()('.cookies__form__etichetta__campo').each(function (i, elemento) {
        if (external_jquery_default()(elemento).attr('checked')) {
          ck(external_jquery_default()(elemento).val(), 'accettata');
          ak(external_jquery_default()(elemento).val());
        } else {
          dk(external_jquery_default()(elemento).val());
          ak(external_jquery_default()(elemento).val());
        }
      });
    }); // Opt-Out

    external_jquery_default()('.cookies__cta--opt-out').on('click tap', function (e) {
      e.preventDefault(); // Disattivazione Cookies

      external_jquery_default()('.cookies__form__etichetta__campo').each(function (i, elemento) {
        external_jquery_default()(elemento).removeAttr('checked');
        dk(external_jquery_default()(elemento).val());
        ak(external_jquery_default()(elemento).val());
      });
    }); // Chiusura

    external_jquery_default()('.cookies__corpo__chiudi--avviso').on('click tap', function () {
      external_jquery_default()('.cookies').addClass('animated fadeOut');
      setTimeout(function () {
        external_jquery_default()('.cookies').addClass('nascondi');
      }, 500);
    });
    external_jquery_default()('.cookies__corpo__chiudi--impostazioni').on('click tap', function () {
      external_jquery_default()('.cookies--impostazioni').removeClass('animated slideInDown').addClass('nascondi');
      external_jquery_default()('.cookies').removeClass('aperto');
      external_jquery_default()('.cookies__container').addClass('aperto');
      external_jquery_default()('.cookies--avviso').removeClass('nascondi animated slideOutUp').addClass('animated slideInDown');
      external_jquery_default()('.cookies__cta').addClass('aperto');
    }); // UX

    external_jquery_default()('.cookies__form__etichetta__campo').on('change', function () {
      if (external_jquery_default()(this).attr('checked')) {
        external_jquery_default()(this).removeAttr('checked');
      } else {
        external_jquery_default()(this).attr('checked', 'checked');
      }
    });
    external_jquery_default()('.cookies__cta--accetta, .cookies__cta--salva').on('click tap', function () {
      external_jquery_default()('.cookies__cta, .cookies__container').removeClass('aperto');
      external_jquery_default()('.cookies__corpo, .cookies__form, .cookies__cta--accetta, .cookies__cta--opt-out, .cookies__cta--salva, .cookies__corpo__chiudi--avviso').addClass('nascondi');
      external_jquery_default()('.cookies--avviso').removeClass('nascondi');
      external_jquery_default()('.cookies, .cookies__container').addClass('chiuso');
      external_jquery_default()('.cookies').addClass('mobile');
      external_jquery_default()('.cookies__cta--impostazioni').html('Cookies');
    });
    external_jquery_default()(window).on('scroll', function () {
      if (external_jquery_default()(this).scrollTop() + external_jquery_default()(this).outerHeight() >= external_jquery_default()('.footer--bottom').offset().top) {
        external_jquery_default()('.cookies.chiuso').removeClass('mobile');
      } else {
        external_jquery_default()('.cookies.chiuso').addClass('mobile');
      }
    });
  }
} // Esportazione Moduli


/* harmony default export */ var components_Cookies = (Cookies_Cookies); // Fine Modulo
// CONCATENATED MODULE: ./components/Layout.js

// Inizio Modulo
// Importazione Librerie




 // Layout

var Layout_Layout = function Layout(props) {
  return external_react_default.a.createElement("div", {
    className: "container"
  }, external_react_default.a.createElement(components_Header, null), external_react_default.a.createElement("main", {
    className: "container__wrapper"
  }, props.children), external_react_default.a.createElement(components_Footer, null), external_react_default.a.createElement(components_TornaSu, null), external_react_default.a.createElement(components_Cookies, null));
}; // Esportazione Moduli


/* harmony default export */ var components_Layout = (Layout_Layout); // Fine Modulo
// CONCATENATED MODULE: ./pages/index.js

// Inizio Modulo
// Importazione Librerie
 // Main

var pages_Index = function Index() {
  return external_react_default.a.createElement(components_Layout, null);
}; // Esportazione Moduli


/* harmony default export */ var pages = __webpack_exports__["default"] = (pages_Index); // Fine Modulo

/***/ })
/******/ ]);