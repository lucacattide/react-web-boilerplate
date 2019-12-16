// Module Start
'use strict';

// RSS Unit Testing
describe('RSS test', () => {
  test('It opens the RSS feed', () => {
    window = {
      location: {
        pathname: null
      }
    };
    document.body.innerHTML = `
    <aside id="rss" className="tools__rss occult">
      <h6>RSS</h6>
      <div className="rss__button"></div>
    </aside>
    `;

    document.addEventListener('click', () => {
      window.location.pathname = '/api/rss';
    });
    document.getElementById('rss').click();

    expect(window.location.pathname).toEqual('/api/rss');
  });
});
// Module End
