// Module Start
// JS imports
import {useEffect} from 'react'
import moment from 'moment'
import emailjs from 'emailjs-com'

// Cookies
const Cookies = (props) => (
  useEffect(() => {
    setCookies(props.labels, props.url, props.ip);
  }),

  // Cookies Start
  <section className="cookies hidden">
    <h6>Cookie Policy</h6>
    <div className="cookies__container cookies--notification opened">
      <h6>Notification</h6>
      <p className="container__body">
        stack {props.labels.cookies.label1}.<br />
        {props.labels.cookies.label2} <a className="body__link" href="privacy" title={props.labels.cookies.title1} tabIndex={100} target="new">{props.labels.cookies.link1} </a>
        {props.labels.cookies.label3}.
        <a className="body__close body__close--notification disable" href="#" title={props.labels.cookies.title2}
          tabIndex={103} rel="nofollow">
          X
        </a>
      </p>
      <a className="container__cta container__cta--settings opened" href="#" title={props.labels.cookies.title4}
        tabIndex={101} rel="nofollow">{props.labels.cookies.label4}</a>
      <a className="container__cta container__cta--accept opened" href="#" title={props.labels.cookies.title5}
        tabIndex={102} rel="nofollow">{props.labels.cookies.label5}</a>
    </div>
    <div className="cookies__container cookies--settings opened hidden">
      <h6>Notification</h6>
      <p className="container__body">
        {props.labels.cookies.label6}.<br />
        {props.labels.cookies.label7}, <a className="body__link" href={`/cookies/${props.lang}`} title="Cookie Policy"
          target="new" tabIndex={103}>{props.labels.cookies.link2}</a>.<br /><br />
        {props.labels.cookies.label8}.<br />
        {props.labels.cookies.label9} <a className="body__link " href={`/privacy/${props.lang}#gdpr`} title={props.labels.cookies.title6}
          tabIndex={104} target="new">{props.labels.cookies.link3}</a> {props.labels.cookies.label10}.<br />
        {props.labels.cookies.label11}.<br />
        {props.labels.cookies.label12} 'Opt-Out'<sup>*</sup>.<br /><br />
        <sup>*</sup> {props.labels.cookies.label13}.
        <a className="body__close body__close--settings disable" href="#" title={props.labels.cookies.title2}
          tabIndex={104} rel="nofollow">
          X
        </a>
      </p>
      <form className="cookies__form" encType="application/x-www-form-urlencoded" tabIndex={105}>
        <legend className="form__legend">{props.labels.cookies.legend}</legend>
        <label className="form__label" htmlFor="google-cookie">
          <input id="google-cookie" className="label__field" type="checkbox" name="google-cookie" tabIndex={106} value="google_stack" />
          <span className="label__checkbox"></span>
          Google ({props.labels.cookies.label14}) -
          <a className="label__link" href="https://tinyurl.com/y96a7je2" title="Cookie Policy - Google" tabIndex={306} target="new" rel="noopener">
            {props.labels.cookies.label15}
          </a>
        </label>
      </form>
      <a className="container__cta container__cta--opt-out opened" href="#" title={props.labels.cookies.title4}
        tabIndex={111} rel="nofollow">Opt-Out</a>
      <a className="container__cta container__cta--save opened" href="#" title={props.labels.cookies.title5}
        tabIndex={112} rel="nofollow">{props.labels.cookies.label18}</a>
    </div>
  </section>
  // Cookies End
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
  // TODO: set secure flag in production
  document.cookie = n + '=' + escape(v) + '; expires=' + s.toGMTString() +
    '; path=/;';
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
 * @param {object} labels Localized labels
 */
function ak(n, labels) {
  const c = l(n);
  let timeOutCookies = null;
  let timeOut = null;

  // Cookie check
  // If polocy hasn't been accepted
  if (c === '' && n === 'cookie_law_stack') {
    $('.cookies .label__field')
        .each(function() {
          $(this).attr('checked', 'checked');
        });
  } else if (c === '') {
    // Else if not exists
    switch (n) {
      case 'cookie_law_stack':
        $('.container__cta').addClass('opened');
        $('.container__body, .cookies__form, .container__cta--accept, .body__close--notification')
            .removeClass('hidden');
        $('.cookies, .cookies__container')
            .removeClass('closed');
        $('.cookies__container, .container__cta--settings')
            .addClass('opened');
        $('.cookies').removeClass('mobile');
        $('.container__cta--settings')
            .html(labels.cookies.label4);
        break;

      case 'google_stack':
        $('#google-cookie').removeAttr('checked');
        $('.newsletter .container__form input').attr('disabled', 'disabled');
        $('.banner').addClass('deactivate hidden');
        break;

      default:
    }
  } else if (c !== '') {
    // Else if exist
    switch (n) {
      case 'cookie_law_stack':
        $('.container__cta').removeClass('opened');
        $('.container__body, .cookies__form, .container__cta--accept, .body__close--notification')
            .addClass('hidden');
        $('.cookies, .cookies__container')
            .addClass('closed');
        $('.cookies__container, .container__cta--settings')
            .removeClass('opened');
        $('.cookies').addClass('mobile');
        $('.container__cta--settings')
            .html('Cookies');
        break;

      case 'google_stack':
        $('#google-cookie').attr('checked', 'checked');
        $('.newsletter .container__form input').removeAttr('disabled');
        $('.banner').removeClass('deactivate hidden');
        break;

      default:
    }
  }

  timeOutCookies = setTimeout(() => {
    $('.cookies').removeClass('hidden').addClass('animated slideInUp');

    clearTimeout(timeOutCookies);

    return false;
  }, 2500);
}

/**
 * Cookies management
 * Setter
 * @param {object} labels Localized labels
 * @param {string} url Request URL
 * @param {string} ip Client IP
 */
function setCookies(labels, url, ip) {
  document.cookie = 'test_cookie';

  const t = (document.cookie.indexOf('test_cookie') != -1) ? true : false;
  const n = ['cookie_law_stack', 'google_stack', 'linkedin_stack', 'github_stack', 'add-to-any_stack', 'disqus_stack'];
  let locale = null;
  let HelperOptionsCookies = null;

  if (t) {
    for (const i in n) {
      ak(n[i], labels);
    }

    // Settings
    $('.container__cta--settings')
        .on('click tap', function(e) {
          e.preventDefault();

          $('.cookies, .cookies__container')
              .removeClass('closed');
          $('.cookies, .cookies__container, .container__cta, .container__cta--settings')
              .addClass('opened');
           $('.container__body, .cookies__form, .container__cta--accept, .container__cta--opt-out, .container__cta--save, .body__close--notification')
              .removeClass('hidden');
          $('.cookies--notification').removeClass('animated slideInDown')
              .addClass('hidden');
          $('.cookies').removeClass('mobile');
          $('.container__cta--settings')
              .html(labels.cookies.label4);
          $('.cookies--settings').removeClass('hidden animated slideOutUp')
              .addClass('animated slideInDown');
        });
    // Acceptance
    $('.container__cta--accept')
        .on('click tap', function(e) {
          e.preventDefault();

          // Cookie Policy
          if (l('cookie_law_stack') === '') {
            ck('cookie_law_stack', 'accepted');

            // Notify sending
            HelperOptionsCookies = {
              subject: 'Cookie Policy <> Accettazione',
              url: url,
              date: locale.format('DD/MM/YYYY'),
              hour: locale.format('HH:mm:ss'),
              ip: ip
            };

            emailjs.send(process.env.EMAIL_SERVICE, process.env.EMAIL_TEMPLATE_COOKIES, HelperOptionsCookies, process.env.EMAIL_USER);
          }

          // Third-party cookies
          $('.label__field')
              .each(function() {
                if (l($(this).val()) === '') {
                  ck($(this).val(), 'accepted');
                  ak($(this).val(), labels);
                }
              });
        });
    // Save
    $('.container__cta--save')
        .on('click tap', (e) => {
          e.preventDefault();

          // Cookies update
          $('.label__field')
              .each((i, element) => {
                if ($(element).attr('checked')) {
                  ck($(element).val(), 'accepted');
                  ak($(element).val(), labels);
                } else {
                  dk($(element).val());
                  ak($(element).val(), labels);
                }
              });
        });
    // Opt-Out
    $('.container__cta--opt-out')
        .on('click tap', (e) => {
          e.preventDefault();

          // Cookies disabling
          $('.label__field')
              .each((i, element) => {
                $(element).removeAttr('checked');

                dk($(element).val());
                ak($(element).val(), labels);
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
          $('.container__cta').addClass('opened');
          $('.body__close--notification').addClass('fixed');
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
    $('.container__cta--accept, .container__cta--save')
        .on('click tap', () => {
          $('.container__cta, .cookies__container').removeClass('opened');
          $('.container__body, .cookies__form, .container__cta--accept, .container__cta--opt-out, .container__cta--save, .body__close--notification')
              .addClass('hidden');
          $('.cookies--notification').removeClass('hidden');
          $('.cookies, .cookies__container')
              .addClass('closed');
          $('.cookies').addClass('mobile');
          $('.container__cta--settings')
              .html('Cookies');
        });
  }
}

// Module export
export default Cookies
// Module End
