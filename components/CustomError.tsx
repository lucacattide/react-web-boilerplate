// Module Start
// JS imports
import React, { FC } from 'react';
import { CommonProps, ErrorType } from '../typings/props';

// Error - Override
const CustomError: FC<CommonProps> = ({ error }) => {
  const { title, message }: ErrorType = error!;

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
