// Module Start
// SASS imports
import '../sass/index.scss'
// JS imports
import $ from 'jquery'

// Back to top
const BackToTop = () => (
  <>
    {/* Back to top Start */}
    <aside className="back-to-top occult">
      <h6>Back to top</h6>
      <div className="back-to-top__body">
        &lt;
      </div>
    </aside>
    {setBackToTop()}
    {/* Back to top End */}
  </>
)

/**
 * Back to top management
 * Setter
 */
function setBackToTop() {
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

// Module export
export default BackToTop
// Module End
