// Inizio Modulo
// Importazione Librerie
import '../sass/index.scss'
import $ from 'jquery'

// Torna Su
const TornaSu = () => (
  <>
    {/* Inizio Torna Su */}
    <aside className="torna-su occulta">
      <h6>Torna Su</h6>
      <div className="torna-su__corpo">
        &lt;
      </div>
    </aside>
    {inizializzaTornaSu()}
    {/* Fine Torna Su */}
  </>
)

/**
 * Funzione gestione UX Torna Su
 * Setter
 */
function inizializzaTornaSu() {
  $(window).on('scroll', function() {
    if ($(this).scrollTop() > 0) {
      $('.torna-su').removeClass('occulta');
    } else {
      $('.torna-su').addClass('occulta');
    }
    if (($(this).scrollTop() + $(this).height()) ==
      $(document).height()) {
      $('.torna-su').addClass('solleva');
    } else {
      $('.torna-su').removeClass('solleva');
    }
  });
  $('.torna-su').on('click tap', () => {
    $('html, body').animate({
      scrollTop: 0,
    }, 'fast');
  });
}

// Esportazione Moduli
export default TornaSu
// Fine Modulo