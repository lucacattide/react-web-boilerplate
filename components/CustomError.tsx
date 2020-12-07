// Module Start
// JS imports
import React, { FC } from 'react';

// Error
type ErrorType = {
  title?: string;
  message: string;
};

/**
 * @description Page properties
 * @author Luca Cattide
 * @date 2020-12-04
 * @interface Props
 */
interface Props {
  error: ErrorType;
}

// Error - Override
const CustomError: FC<Props> = ({ error }) => {
  const { title, message } = error;

  return (
    // TODO: Tailwind refactoring
    // Error Start
    <section className="error">
      <h6>Error</h6>
      <div className="error__container">
        {/* Summary Start */}
        <article className="container__article">
          <h1 className="article__title">{title ? title : 'Error'}</h1>
          <p className="article__body">{message}</p>
        </article>
        {/* Summary End */}
      </div>
    </section>
    // Error End
  );
};

// Module export
export default CustomError;
// Module End
