// Module Start
// SASS imports
import '../sass/index.scss'
// JS imports
import React from 'react'

// Error - Database
const ErrorDb = (props) => (
  // ErrorDb Start
  <section className="error error--500">
    <h6>ErrorDb</h6>
    <div className="error__container">
      {/* Summary Start */}
      <article className="container__article">
        <h1 className="article__title">Internal Server Error</h1>
        <p className="article__body">{props.error}</p>
      </article>
      {/* Summary End */}
    </div>
  </section>
  // ErrorDb End
)

// Module export
export default ErrorDb;
// Module End
