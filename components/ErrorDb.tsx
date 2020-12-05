// Module Start
// JS imports
import React, { FC } from 'react';
import PropTypes from 'prop-types';

type ErrorMessage = {
  error: string;
};

// Error - Database
const ErrorDb: FC<ErrorMessage> = ({ error }) => (
  // TODO: Tailwind refactoring
  // ErrorDb Start
  <section className="error error--500">
    <h6>ErrorDb</h6>
    <div className="error__container">
      {/* Summary Start */}
      <article className="container__article">
        <h1 className="article__title">Internal Server Error</h1>
        <p className="article__body">{error}</p>
      </article>
      {/* Summary End */}
    </div>
  </section>
  // ErrorDb End
);

// Properties validation
ErrorDb.propTypes = {
  error: PropTypes.string.isRequired,
};

// Module export
export default ErrorDb;
// Module End
