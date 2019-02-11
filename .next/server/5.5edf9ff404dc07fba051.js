exports.ids = [5];
exports.modules = {

/***/ 17:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sass_index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _sass_index_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sass_index_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);


function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Inizio Modulo
// Importazione Librerie

 // Cookies

var Cookies = function Cookies() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "cookies"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, "Cookie Policy"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "cookies__container cookies--avviso aperto"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, "Avviso"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "cookies__corpo"
  }, "stack utilizza i Cookies tecnici e di terze parti, per la gestione del sito web e l'analisi del traffico.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Accettando i ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "cookies__corpo__link",
    href: "privacy",
    title: "Cookie Policy - Informativa",
    tabIndex: "100",
    target: "new"
  }, "termini e le condizioni"), "previste, si esprime il proprio consenso al salvataggio dei cookies sul dispositivo in uso.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "cookies__corpo__chiudi cookies__corpo__chiudi--avviso disabilita",
    href: "#",
    title: "Nascondi e continua la navigazione sul sito web",
    tabIndex: "103"
  }, "X")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "cookies__cta cookies__cta--impostazioni disabilita aperto",
    href: "#",
    title: "Gestisci l'attivazione dei cookies di terze parti",
    tabIndex: "101"
  }, "Impostazioni"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "cookies__cta cookies__cta--accetta disabilita aperto",
    href: "#",
    title: "Approva la normativa sul trattamento dei dati personali",
    tabIndex: "102"
  }, "Accetto")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "cookies__container cookies--impostazioni aperto nascondi"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, "Avviso"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "cookies__corpo"
  }, "I Cookies tecnici sono richiesti per fornire le funzionalit\xE0 base del sito web.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Per visualizzare l'elenco aggiornato e la procedura per la loro disattivazione, ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", _defineProperty({
    className: "cookies__corpo__link",
    href: "privacy#cookies",
    title: "Cookie Policy",
    tabIndex: "300",
    target: "new"
  }, "tabIndex", "103"), "consulta l'apposita pagina"), ".", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "I Cookies di terze parti vengono utilizzati per le funzionalit\xE0 accessorie del sito web, come l'analisi di traffico, la visualizzazione di elementi multimediali/interattivi o altro.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Modalit\xE0 di elaborazione ed invio dei dati, cos\xEC come le informazioni sui soggetti coinvolti, sono disponibili nel ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "cookies__corpo__link",
    href: "privacy#gdpr",
    title: "Regolamentazione generale sulla protezione dei dati",
    tabIndex: "104",
    target: "new"
  }, "paragrafo dedicato"), " e nei rispettivi links di seguito.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Puoi attivare o disattivare i Cookies di terze parti, selezionando la voce corrispondente dalla lista e salvando le tue preferenze cliccando su \"Salva\".", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Per la disattivazione totale di questi Cookies, clicca su \"Opt-Out\"*.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "* Qualora le funzionalit\xE0 descritte siano soggette a disattivazione \u2013 tutte od in parte, alcuni dei servizi forniti da stack potrebbero risultare inutilizzabili.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "cookies__corpo__chiudi cookies__corpo__chiudi--impostazioni disabilita",
    href: "#",
    title: "Nascondi e continua la navigazione sul sito web",
    tabIndex: "103"
  }, "X")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    className: "cookies__form",
    encType: "application/x-www-form-urlencoded",
    tabIndex: "105"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("legend", {
    className: "cookies__form__legenda"
  }, "Modulo di disattivazione identificatori di terze parti"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "cookies__form__etichetta",
    htmlFor: "google-cookie"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    id: "google-cookie",
    className: "cookies__form__etichetta__campo",
    type: "checkbox",
    name: "google-cookie",
    tabIndex: "106",
    value: "google_stack"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "cookies__form__etichetta__checkbox"
  }), "Google (Analisi/Misurazione, Ottimizzazione) -", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "cookies__form__etichetta__link",
    href: "https://tinyurl.com/y96a7je2",
    title: "Cookie Policy - Google",
    tabIndex: "306",
    target: "new"
  }, "Informativa"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "cookies__cta cookies__cta--opt-out disabilita aperto",
    href: "#",
    title: "Gestisci l'attivazione dei cookies di terze parti",
    tabIndex: "108"
  }, "Opt-Out"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
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
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('.cookies__form__etichetta__campo').each(function () {
      jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).attr('checked', 'checked');
    });
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('.cookies').fadeIn();
  } else if (c === '') {
    // Altrimenti se non esiste
    switch (n) {
      case 'google_stack':
        jquery__WEBPACK_IMPORTED_MODULE_2___default()('#google-cookie').removeAttr('checked');
        break;

      default:
    }
  } else if (c !== '') {
    // Altrimenti se esiste
    switch (n) {
      case 'cookie_law_stack':
        jquery__WEBPACK_IMPORTED_MODULE_2___default()('.cookies__cta').removeClass('aperto');
        jquery__WEBPACK_IMPORTED_MODULE_2___default()('.cookies__corpo, .cookies__form, .cookies__cta--accetta, .cookies__corpo__chiudi--avviso').addClass('nascondi');
        jquery__WEBPACK_IMPORTED_MODULE_2___default()('.cookies, .cookies__container').addClass('chiuso');
        jquery__WEBPACK_IMPORTED_MODULE_2___default()('.cookies__container, .cookies__cta--impostazioni').removeClass('aperto');
        jquery__WEBPACK_IMPORTED_MODULE_2___default()('.cookies').addClass('mobile');
        jquery__WEBPACK_IMPORTED_MODULE_2___default()('.cookies__cta--impostazioni').html('Cookies');
        break;

      case 'google_stack':
        jquery__WEBPACK_IMPORTED_MODULE_2___default()('#google-cookie').attr('checked', 'checked');
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


    jquery__WEBPACK_IMPORTED_MODULE_2___default()('.cookies__cta--impostazioni').on('click tap', function (e) {
      e.preventDefault();
      jquery__WEBPACK_IMPORTED_MODULE_2___default()('.cookies, .cookies__container').removeClass('chiuso');
      jquery__WEBPACK_IMPORTED_MODULE_2___default()('.cookies, .cookies__container, .cookies__cta, .cookies__cta--impostazioni').addClass('aperto');
      jquery__WEBPACK_IMPORTED_MODULE_2___default()('.cookies__corpo, .cookies__form, .cookies__cta--accetta, .cookies__cta--opt-out, .cookies__cta--salva, .cookies__corpo__chiudi--avviso').removeClass('nascondi');
      jquery__WEBPACK_IMPORTED_MODULE_2___default()('.cookies--avviso').removeClass('animated slideInDown').addClass('nascondi');
      jquery__WEBPACK_IMPORTED_MODULE_2___default()('.cookies').removeClass('mobile');

      if (jquery__WEBPACK_IMPORTED_MODULE_2___default()('html').attr('lang') == 'it-IT') {
        jquery__WEBPACK_IMPORTED_MODULE_2___default()('.cookies__cta--impostazioni').html('Impostazioni');
      } else {
        jquery__WEBPACK_IMPORTED_MODULE_2___default()('.cookies__cta--impostazioni').html('Settings');
      }

      jquery__WEBPACK_IMPORTED_MODULE_2___default()('.cookies--impostazioni').removeClass('nascondi animated slideOutUp').addClass('animated slideInDown');
    }); // Accettazione

    jquery__WEBPACK_IMPORTED_MODULE_2___default()('.cookies__cta--accetta').on('click tap', function (e) {
      e.preventDefault(); // Cookie Policy

      if (l('cookie_law_stack') === '') {
        ck('cookie_law_stack', 'accettata'); // Invio notifica

        jquery__WEBPACK_IMPORTED_MODULE_2___default.a.post('/php/cookies-notifica.php');
      } // Cookies terze parti


      jquery__WEBPACK_IMPORTED_MODULE_2___default()('.cookies__form__etichetta__campo').each(function () {
        if (l(jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).val()) === '') {
          ck(jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).val(), 'accettata');
          ak(jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).val());
        }
      });
    }); // Salvataggio

    jquery__WEBPACK_IMPORTED_MODULE_2___default()('.cookies__cta--salva').on('click tap', function (e) {
      e.preventDefault(); // Aggiornamento Cookies

      jquery__WEBPACK_IMPORTED_MODULE_2___default()('.cookies__form__etichetta__campo').each(function (i, elemento) {
        if (jquery__WEBPACK_IMPORTED_MODULE_2___default()(elemento).attr('checked')) {
          ck(jquery__WEBPACK_IMPORTED_MODULE_2___default()(elemento).val(), 'accettata');
          ak(jquery__WEBPACK_IMPORTED_MODULE_2___default()(elemento).val());
        } else {
          dk(jquery__WEBPACK_IMPORTED_MODULE_2___default()(elemento).val());
          ak(jquery__WEBPACK_IMPORTED_MODULE_2___default()(elemento).val());
        }
      });
    }); // Opt-Out

    jquery__WEBPACK_IMPORTED_MODULE_2___default()('.cookies__cta--opt-out').on('click tap', function (e) {
      e.preventDefault(); // Disattivazione Cookies

      jquery__WEBPACK_IMPORTED_MODULE_2___default()('.cookies__form__etichetta__campo').each(function (i, elemento) {
        jquery__WEBPACK_IMPORTED_MODULE_2___default()(elemento).removeAttr('checked');
        dk(jquery__WEBPACK_IMPORTED_MODULE_2___default()(elemento).val());
        ak(jquery__WEBPACK_IMPORTED_MODULE_2___default()(elemento).val());
      });
    }); // Chiusura

    jquery__WEBPACK_IMPORTED_MODULE_2___default()('.cookies__corpo__chiudi--avviso').on('click tap', function () {
      jquery__WEBPACK_IMPORTED_MODULE_2___default()('.cookies').addClass('animated fadeOut');
      setTimeout(function () {
        jquery__WEBPACK_IMPORTED_MODULE_2___default()('.cookies').addClass('nascondi');
      }, 500);
    });
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('.cookies__corpo__chiudi--impostazioni').on('click tap', function () {
      jquery__WEBPACK_IMPORTED_MODULE_2___default()('.cookies--impostazioni').removeClass('animated slideInDown').addClass('nascondi');
      jquery__WEBPACK_IMPORTED_MODULE_2___default()('.cookies').removeClass('aperto');
      jquery__WEBPACK_IMPORTED_MODULE_2___default()('.cookies__container').addClass('aperto');
      jquery__WEBPACK_IMPORTED_MODULE_2___default()('.cookies--avviso').removeClass('nascondi animated slideOutUp').addClass('animated slideInDown');
      jquery__WEBPACK_IMPORTED_MODULE_2___default()('.cookies__cta').addClass('aperto');
    }); // UX

    jquery__WEBPACK_IMPORTED_MODULE_2___default()('.cookies__form__etichetta__campo').on('change', function () {
      if (jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).attr('checked')) {
        jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).removeAttr('checked');
      } else {
        jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).attr('checked', 'checked');
      }
    });
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('.cookies__cta--accetta, .cookies__cta--salva').on('click tap', function () {
      jquery__WEBPACK_IMPORTED_MODULE_2___default()('.cookies__cta, .cookies__container').removeClass('aperto');
      jquery__WEBPACK_IMPORTED_MODULE_2___default()('.cookies__corpo, .cookies__form, .cookies__cta--accetta, .cookies__cta--opt-out, .cookies__cta--salva, .cookies__corpo__chiudi--avviso').addClass('nascondi');
      jquery__WEBPACK_IMPORTED_MODULE_2___default()('.cookies--avviso').removeClass('nascondi');
      jquery__WEBPACK_IMPORTED_MODULE_2___default()('.cookies, .cookies__container').addClass('chiuso');
      jquery__WEBPACK_IMPORTED_MODULE_2___default()('.cookies').addClass('mobile');
      jquery__WEBPACK_IMPORTED_MODULE_2___default()('.cookies__cta--impostazioni').html('Cookies');
    });
    jquery__WEBPACK_IMPORTED_MODULE_2___default()(window).on('scroll', function () {
      if (jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).scrollTop() + jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).outerHeight() >= jquery__WEBPACK_IMPORTED_MODULE_2___default()('.footer--bottom').offset().top) {
        jquery__WEBPACK_IMPORTED_MODULE_2___default()('.cookies.chiuso').removeClass('mobile');
      } else {
        jquery__WEBPACK_IMPORTED_MODULE_2___default()('.cookies.chiuso').addClass('mobile');
      }
    });
  }
} // Esportazione Moduli


/* harmony default export */ __webpack_exports__["default"] = (Cookies); // Fine Modulo

/***/ })

};;