(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{0:function(e,o){e.exports=jQuery},224:function(e,o,a){__NEXT_REGISTER_PAGE("/",function(){return e.exports=a(231),{page:e.exports.default}})},231:function(e,o,a){"use strict";a.r(o);var t=a(1),i=a.n(t),c=(a(38),function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("footer",{className:"header"}))}),s=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("footer",{className:"footer"}))},n=a(0),l=a.n(n);var r=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("aside",{className:"torna-su occulta"},i.a.createElement("h6",null,"Torna Su"),i.a.createElement("div",{className:"torna-su__corpo"},"<")),(l()(window).on("scroll",function(){l()(this).scrollTop()>0?l()(".torna-su").removeClass("occulta"):l()(".torna-su").addClass("occulta"),l()(this).scrollTop()+l()(this).height()==l()(document).height()?l()(".torna-su").addClass("solleva"):l()(".torna-su").removeClass("solleva")}),void l()(".torna-su").on("click tap",function(){l()("html, body").animate({scrollTop:0},"fast")})))};function _(e,o){var a=new Date;a.setDate(a.getDate()+30),document.cookie=e+"="+escape(o)+"; expires="+a.toGMTString()+"; path=/;secure"}function d(e){if(document.cookie.length>0){var o=document.cookie.indexOf(e+"=");if(-1!=o){o=o+e.length+1;var a=document.cookie.indexOf(";",o);return-1==a&&(a=document.cookie.length),unescape(document.cookie.substring(o,a))}return""}return""}function m(e){document.cookie=e+"=;expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/;"}function k(e){var o=d(e);if(""===o&&"cookie_law_stack"===e)l()(".cookies__form__etichetta__campo").each(function(){l()(this).attr("checked","checked")}),l()(".cookies").fadeIn();else if(""===o)switch(e){case"google_stack":l()("#google-cookie").removeAttr("checked")}else if(""!==o)switch(e){case"cookie_law_stack":l()(".cookies__cta").removeClass("aperto"),l()(".cookies__corpo, .cookies__form, .cookies__cta--accetta, .cookies__corpo__chiudi--avviso").addClass("nascondi"),l()(".cookies, .cookies__container").addClass("chiuso"),l()(".cookies__container, .cookies__cta--impostazioni").removeClass("aperto"),l()(".cookies").addClass("mobile"),l()(".cookies__cta--impostazioni").html("Cookies");break;case"google_stack":l()("#google-cookie").attr("checked","checked")}}var u=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("section",{className:"cookies"},i.a.createElement("h6",null,"Cookie Policy"),i.a.createElement("div",{className:"cookies__container cookies--avviso aperto"},i.a.createElement("h6",null,"Avviso"),i.a.createElement("p",{className:"cookies__corpo"},"stack utilizza i Cookies tecnici e di terze parti, per la gestione del sito web e l'analisi del traffico.",i.a.createElement("br",null),"Accettando i ",i.a.createElement("a",{className:"cookies__corpo__link",href:"privacy",title:"Cookie Policy - Informativa",tabIndex:"100",target:"new"},"termini e le condizioni"),"previste, si esprime il proprio consenso al salvataggio dei cookies sul dispositivo in uso.",i.a.createElement("a",{className:"cookies__corpo__chiudi cookies__corpo__chiudi--avviso disabilita",href:"#",title:"Nascondi e continua la navigazione sul sito web",tabIndex:"103"},"X")),i.a.createElement("a",{className:"cookies__cta cookies__cta--impostazioni disabilita aperto",href:"#",title:"Gestisci l'attivazione dei cookies di terze parti",tabIndex:"101"},"Impostazioni"),i.a.createElement("a",{className:"cookies__cta cookies__cta--accetta disabilita aperto",href:"#",title:"Approva la normativa sul trattamento dei dati personali",tabIndex:"102"},"Accetto")),i.a.createElement("div",{className:"cookies__container cookies--impostazioni aperto nascondi"},i.a.createElement("h6",null,"Avviso"),i.a.createElement("p",{className:"cookies__corpo"},"I Cookies tecnici sono richiesti per fornire le funzionalità base del sito web.",i.a.createElement("br",null),"Per visualizzare l'elenco aggiornato e la procedura per la loro disattivazione, ",i.a.createElement("a",(a="103",(o="tabIndex")in(e={className:"cookies__corpo__link",href:"privacy#cookies",title:"Cookie Policy",tabIndex:"300",target:"new"})?Object.defineProperty(e,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[o]=a,e),"consulta l'apposita pagina"),".",i.a.createElement("br",null),i.a.createElement("br",null),"I Cookies di terze parti vengono utilizzati per le funzionalità accessorie del sito web, come l'analisi di traffico, la visualizzazione di elementi multimediali/interattivi o altro.",i.a.createElement("br",null),"Modalità di elaborazione ed invio dei dati, così come le informazioni sui soggetti coinvolti, sono disponibili nel ",i.a.createElement("a",{className:"cookies__corpo__link",href:"privacy#gdpr",title:"Regolamentazione generale sulla protezione dei dati",tabIndex:"104",target:"new"},"paragrafo dedicato")," e nei rispettivi links di seguito.",i.a.createElement("br",null),'Puoi attivare o disattivare i Cookies di terze parti, selezionando la voce corrispondente dalla lista e salvando le tue preferenze cliccando su "Salva".',i.a.createElement("br",null),'Per la disattivazione totale di questi Cookies, clicca su "Opt-Out"*.',i.a.createElement("br",null),i.a.createElement("br",null),"* Qualora le funzionalità descritte siano soggette a disattivazione – tutte od in parte, alcuni dei servizi forniti da stack potrebbero risultare inutilizzabili.",i.a.createElement("a",{className:"cookies__corpo__chiudi cookies__corpo__chiudi--impostazioni disabilita",href:"#",title:"Nascondi e continua la navigazione sul sito web",tabIndex:"103"},"X")),i.a.createElement("form",{className:"cookies__form",encType:"application/x-www-form-urlencoded",tabIndex:"105"},i.a.createElement("legend",{className:"cookies__form__legenda"},"Modulo di disattivazione identificatori di terze parti"),i.a.createElement("label",{className:"cookies__form__etichetta",htmlFor:"google-cookie"},i.a.createElement("input",{id:"google-cookie",className:"cookies__form__etichetta__campo",type:"checkbox",name:"google-cookie",tabIndex:"106",value:"google_stack"}),i.a.createElement("span",{className:"cookies__form__etichetta__checkbox"}),"Google (Analisi/Misurazione, Ottimizzazione) -",i.a.createElement("a",{className:"cookies__form__etichetta__link",href:"https://tinyurl.com/y96a7je2",title:"Cookie Policy - Google",tabIndex:"306",target:"new"},"Informativa"))),i.a.createElement("a",{className:"cookies__cta cookies__cta--opt-out disabilita aperto",href:"#",title:"Gestisci l'attivazione dei cookies di terze parti",tabIndex:"108"},"Opt-Out"),i.a.createElement("a",{className:"cookies__cta cookies__cta--salva disabilita aperto",href:"#",title:"Approva la normativa sul trattamento dei dati personali",tabIndex:"109"},"Salva"))),function(){document.cookie="test_cookie";var e=-1!=document.cookie.indexOf("test_cookie"),o=["cookie_law_stack","google_stack"];if(e){for(var a in o)k(o[a]);l()(".cookies__cta--impostazioni").on("click tap",function(e){e.preventDefault(),l()(".cookies, .cookies__container").removeClass("chiuso"),l()(".cookies, .cookies__container, .cookies__cta, .cookies__cta--impostazioni").addClass("aperto"),l()(".cookies__corpo, .cookies__form, .cookies__cta--accetta, .cookies__cta--opt-out, .cookies__cta--salva, .cookies__corpo__chiudi--avviso").removeClass("nascondi"),l()(".cookies--avviso").removeClass("animated slideInDown").addClass("nascondi"),l()(".cookies").removeClass("mobile"),"it-IT"==l()("html").attr("lang")?l()(".cookies__cta--impostazioni").html("Impostazioni"):l()(".cookies__cta--impostazioni").html("Settings"),l()(".cookies--impostazioni").removeClass("nascondi animated slideOutUp").addClass("animated slideInDown")}),l()(".cookies__cta--accetta").on("click tap",function(e){e.preventDefault(),""===d("cookie_law_stack")&&(_("cookie_law_stack","accettata"),l.a.post("/php/cookies-notifica.php")),l()(".cookies__form__etichetta__campo").each(function(){""===d(l()(this).val())&&(_(l()(this).val(),"accettata"),k(l()(this).val()))})}),l()(".cookies__cta--salva").on("click tap",function(e){e.preventDefault(),l()(".cookies__form__etichetta__campo").each(function(e,o){l()(o).attr("checked")?(_(l()(o).val(),"accettata"),k(l()(o).val())):(m(l()(o).val()),k(l()(o).val()))})}),l()(".cookies__cta--opt-out").on("click tap",function(e){e.preventDefault(),l()(".cookies__form__etichetta__campo").each(function(e,o){l()(o).removeAttr("checked"),m(l()(o).val()),k(l()(o).val())})}),l()(".cookies__corpo__chiudi--avviso").on("click tap",function(){l()(".cookies").addClass("animated fadeOut"),setTimeout(function(){l()(".cookies").addClass("nascondi")},500)}),l()(".cookies__corpo__chiudi--impostazioni").on("click tap",function(){l()(".cookies--impostazioni").removeClass("animated slideInDown").addClass("nascondi"),l()(".cookies").removeClass("aperto"),l()(".cookies__container").addClass("aperto"),l()(".cookies--avviso").removeClass("nascondi animated slideOutUp").addClass("animated slideInDown"),l()(".cookies__cta").addClass("aperto")}),l()(".cookies__form__etichetta__campo").on("change",function(){l()(this).attr("checked")?l()(this).removeAttr("checked"):l()(this).attr("checked","checked")}),l()(".cookies__cta--accetta, .cookies__cta--salva").on("click tap",function(){l()(".cookies__cta, .cookies__container").removeClass("aperto"),l()(".cookies__corpo, .cookies__form, .cookies__cta--accetta, .cookies__cta--opt-out, .cookies__cta--salva, .cookies__corpo__chiudi--avviso").addClass("nascondi"),l()(".cookies--avviso").removeClass("nascondi"),l()(".cookies, .cookies__container").addClass("chiuso"),l()(".cookies").addClass("mobile"),l()(".cookies__cta--impostazioni").html("Cookies")}),l()(window).on("scroll",function(){l()(this).scrollTop()+l()(this).outerHeight()>=l()(".footer--bottom").offset().top?l()(".cookies.chiuso").removeClass("mobile"):l()(".cookies.chiuso").addClass("mobile")})}}());var e,o,a},p=function(e){return i.a.createElement("div",{className:"container"},i.a.createElement(c,null),i.a.createElement("main",{className:"container__wrapper"},e.children),i.a.createElement(s,null),i.a.createElement(r,null),i.a.createElement(u,null))};o.default=function(){return i.a.createElement(p,null)}}},[[224,1,0,6]]]);