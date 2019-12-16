// Module Start
// JS imports
import {useEffect} from 'react'

// Back to Top
const BackToTop = () => (
  useEffect(() => {
    setBackToTop();
  }),

  // Back To Top Start
  <aside className="back-to-top disable hidden">
    <h6>Back to top</h6>
    <span className="back-to-top__arrow">&lt;</span>
  </aside>
  // Back To Top End
);

/**
 * @description Back to top UX setter
 * @author Luca Cattide
 * @date 2019-07-15
 */
function setBackToTop() {
  const backToTop = $('.back-to-top');

  backToTop.on('click tap', () => {
    $('html, body').animate({
      scrollTop: 0,
    }, 'fast');
  });
}

// Module export
export default BackToTop;
// Module End
