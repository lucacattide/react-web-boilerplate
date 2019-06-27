// Module Start
// SASS imports
import '../sass/index.scss'
// JS imports
import $ from 'jquery'

// Cookies
const Cookies = () => (
  <>
    {/* Cookies Start */}
		<section className="cookies">
			<h6>Cookie Policy</h6>
			<div className="cookies__container cookies--notification opened">
				<h6>notification</h6>
				<p className="container__body">
					stack utilizza i Cookies tecnici e di terze parti, per la gestione del sito web e l'analisi del traffico.<br />
					Accettando i <a className="body__link" href="privacy" title="Cookie Policy - Informativa" tabIndex="100" target="new">termini e le condizioni</a>
					previste, si esprime il proprio consenso al salvataggio dei cookies sul dispositivo in uso.
					<a className="body__close body__close--notification disable" href="#" title="hidden e continua la navigazione sul sito web"
						tabIndex="103">
						X
					</a>
				</p>
				<a className="container__cta container__cta--settings opened" href="#" title="Gestisci l'attivazione dei cookies di terze parti"
					tabIndex="101">Impostazioni</a>
				<a className="container__cta container__cta--accept opened" href="#" title="Approva la normativa sul trattamento dei dati personali"
					tabIndex="102">Accetto</a>
			</div>
			<div className="cookies__container cookies--settings opened hidden">
				<h6>notification</h6>
				<p className="container__body">
					I Cookies tecnici sono richiesti per fornire le funzionalità base del sito web.<br />
					Per visualizzare l'elenco aggiornato e la procedura per la loro disattivazione, <a className="body__link" href="privacy#cookies" title="Cookie Policy"
						tabIndex="300" target="new" tabIndex="103">consulta l'apposita pagina</a>.<br /><br />
					I Cookies di terze parti vengono utilizzati per le funzionalità accessorie del sito web, come l'analisi di traffico, la visualizzazione di elementi multimediali/interattivi o altro.<br />
					Modalità di elaborazione ed invio dei dati, così come le informazioni sui soggetti coinvolti, sono disponibili nel <a className="body__link " href="privacy#gdpr" title="Regolamentazione generale sulla protezione dei dati"
						tabIndex="104" target="new">paragrafo dedicato</a> e nei rispettivi links di seguito.<br />
					Puoi attivare o disattivare i Cookies di terze parti, selezionando la voce corrispondente dalla lista e salvando le tue preferenze cliccando su "Salva".<br />
					Per la disattivazione totale di questi Cookies, clicca su "Opt-Out"*.<br /><br />
					* Qualora le funzionalità descritte siano soggette a disattivazione – tutte od in parte, alcuni dei servizi forniti da stack potrebbero risultare inutilizzabili.
					<a className="body__close body__close--settings disable" href="#" title="hidden e continua la navigazione sul sito web"
						tabIndex="103">
						X
					</a>
				</p>
				<form className="cookies__form" encType="application/x-www-form-urlencoded" tabIndex="105">
					<legend className="form__legend">
						Modulo di disattivazione identificatori di terze parti
					</legend>
					<label className="form__label" htmlFor="google-cookie">
						<input id="google-cookie" className="label__field" type="checkbox" name="google-cookie" tabIndex="106" value="google_stack" />
						<span className="label__checkbox"></span>
						Google (Analisi/Misurazione, Ottimizzazione) -
						<a className="label__link" href="https://tinyurl.com/y96a7je2" title="Cookie Policy - Google" tabIndex="306" target="new">
							Informativa
						</a>
					</label>
				</form>
				<a className="container__cta container__cta--opt-out opened" href="#" title="Gestisci l'attivazione dei cookies di terze parti"
					tabIndex="108">Opt-Out</a>
				<a className="container__cta container__cta--save opened" href="#" title="Approva la normativa sul trattamento dei dati personali"
					tabIndex="109">Salva</a>
			</div>
		</section>
    {setCookies()}
    {/* Cookies End */}
  </>
)

// Module Start
/**
 * Cookies setting
 * Setter
 * @param {string} n Nome cookie
 * @param {string} v Valore cookie
 */
function ck(n, v) {
  const s = new Date();

  s.setDate(s.getDate() + 30);
  document.cookie = n + '=' + escape(v) + '; expires=' + s.toGMTString() +
    '; path=/;secure';
}

/**
 * Cookies check
 * setter
 * @param {string} n Cookie name
 * @return {string} Cookie value
 */
function l(n) {
  if (document.cookie.length > 0) {
    let i = document.cookie.indexOf(n + '=');

    if (i != -1) {
      i = i + n.length + 1;

      let f = document.cookie.indexOf(';', i);

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
 * Cookies deletion
 * Setter
 * @param {string} n Cookie name
 */
function dk(n) {
  document.cookie = n + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/;';
}

/**
 * Cookies acceptance check
 * Getter
 * @param {string} n Cookie name
 */
function ak(n) {
  const c = l(n);

  // Cookie check
  // If polocy hasn't been accepted
  if (c === '' && n === 'cookie_law_stack') {
    $('.label__field')
        .each(function() {
          $(this).attr('checked', 'checked');
        });
    $('.cookies').fadeIn();
  } else if (c === '') {
    // Else if not exists
    switch (n) {
      case 'google_stack':
        $('#google-cookie').removeAttr('checked');

        break;
      default:
    }
  } else if (c !== '') {
    // Else if exist
    switch (n) {
      case 'cookie_law_stack':
        $('.cookies__cta').removeClass('opened');
        $('.cookies__body, .cookies__form, .cookies__cta--accept, .body__close--notification')
            .addClass('hidden');
        $('.cookies, .cookies__container')
            .addClass('closed');
        $('.cookies__container, .cookies__cta--settings')
            .removeClass('opened');
        $('.cookies').addClass('mobile');
        $('.cookies__cta--settings')
            .html('Cookies');

        break;
      case 'google_stack':
        $('#google-cookie').attr('checked', 'checked');

        break;
      default:
    }
  }
}

/**
 * Cookies management
 * Setter
 */
function setCookies() {
  document.cookie = 'test_cookie';

  const t = (document.cookie.indexOf('test_cookie') != -1) ? true : false;
  const n = ['cookie_law_stack', 'google_stack'];

  if (t) {
    for (const i in n) {
      ak(n[i]);
    }

    // Settings
    $('.cookies__cta--settings')
        .on('click tap', function(e) {
          e.preventDefault();

          $('.cookies, .cookies__container')
              .removeClass('closed');
          $('.cookies, .cookies__container, .cookies__cta, .cookies__cta--settings')
              .addClass('opened');
          $('.cookies__body, .cookies__form, .cookies__cta--accept, .cookies__cta--opt-out, .cookies__cta--save, .body__close--notification')
              .removeClass('hidden');
          $('.cookies--notification').removeClass('animated slideInDown')
              .addClass('hidden');
          $('.cookies').removeClass('mobile');

          if ($('html').attr('lang') == 'it-IT') {
            $('.cookies__cta--settings')
                .html('settings');
          } else {
            $('.cookies__cta--settings')
                .html('Settings');
          }

          $('.cookies--settings').removeClass('hidden animated slideOutUp')
              .addClass('animated slideInDown');
        });
    // Acceptance
    $('.cookies__cta--accept')
        .on('click tap', function(e) {
          e.preventDefault();

          // Cookie Policy
          if (l('cookie_law_stack') === '') {
            ck('cookie_law_stack', 'accepted');

            // Notify sending
            $.post('/php/cookies-notify.php');
          }

          // Third-party cookies
          $('.label__field')
              .each(function() {
                if (l($(this).val()) === '') {
                  ck($(this).val(), 'accepted');
                  ak($(this).val());
                }
              });
        });
    // Save
    $('.cookies__cta--save')
        .on('click tap', (e) => {
          e.preventDefault();

          // Cookies update
          $('.label__field')
              .each((i, elemento) => {
                if ($(elemento).attr('checked')) {
                  ck($(elemento).val(), 'accepted');
                  ak($(elemento).val());
                } else {
                  dk($(elemento).val());
                  ak($(elemento).val());
                }
              });
        });
    // Opt-Out
    $('.cookies__cta--opt-out')
        .on('click tap', (e) => {
          e.preventDefault();

          // Cookies disabling
          $('.label__field')
              .each((i, elemento) => {
                $(elemento).removeAttr('checked');

                dk($(elemento).val());
                ak($(elemento).val());
              });
        });
    // Closing
    $('.body__close--notification').on('click tap', () => {
      $('.cookies').addClass('animated fadeOut');

      setTimeout(() => {
        $('.cookies').addClass('hidden');
      }, 500);
    });
    $('.body__close--settings')
        .on('click tap', () => {
          $('.cookies--settings').removeClass('animated slideInDown')
              .addClass('hidden');
          $('.cookies').removeClass('opened');
          $('.cookies__container').addClass('opened');
          $('.cookies--notification').removeClass('hidden animated slideOutUp')
              .addClass('animated slideInDown');
          $('.cookies__cta').addClass('opened');
        });
    // UX
    $('.label__field')
        .on('change', function() {
          if ($(this).attr('checked')) {
            $(this).removeAttr('checked');
          } else {
            $(this).attr('checked', 'checked');
          }
        });
    $('.cookies__cta--accept, .cookies__cta--save')
        .on('click tap', () => {
          $('.cookies__cta, .cookies__container').removeClass('opened');
          $('.cookies__body, .cookies__form, .cookies__cta--accept, .cookies__cta--opt-out, .cookies__cta--save, .body__close--notification')
              .addClass('hidden');
          $('.cookies--notification').removeClass('hidden');
          $('.cookies, .cookies__container')
              .addClass('closed');
          $('.cookies').addClass('mobile');
          $('.cookies__cta--settings')
              .html('Cookies');
        });
    $(window).on('scroll', function() {
      if ($(this).scrollTop() + $(this).outerHeight() >=
        $('.footer--bottom').offset().top) {
        $('.cookies.closed').removeClass('mobile');
      } else {
        $('.cookies.closed').addClass('mobile');
      }
    });
  }
}

// Module export
export default Cookies
// Module End
