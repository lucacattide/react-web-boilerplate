// Module Start
// Error
// JS imports
import { NextPage } from 'next';

type ErrorType = {
  title: string;
  message: string;
  background: string;
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
const Error: NextPage<Props> = ({ error }) => {
  return (
    // TODO: Tailwind refactoring
    // Error Start
    <section className={`error ${error.background}`}>
      <h6>Error</h6>
      <div className="error__container">
        {/* Summary Start */}
        <article className="container__article">
          <h1 className="article__title">{error.title}</h1>
          <p className="article__body">{error.message}</p>
        </article>
        {/* Summary End */}
      </div>
    </section>
    // Error End
  );
};

// Properties initialization
Error.getInitialProps = ({ res, err }) => {
  const statusCode: number | null | undefined = res
    ? res.statusCode
    : err
    ? err.statusCode
    : null;
  const error: ErrorType = {
    title: '',
    message: '',
    background: '',
  };

  if (statusCode) {
    switch (statusCode) {
      case 400:
        error.title = 'Bad Request';
        error.message = ``;
        error.background = 'error--400';
        break;

      case 401:
        error.title = 'Unauthorized';
        error.message = '';
        error.background = 'error--401';
        break;

      case 403:
        error.title = 'Forbidden';
        error.message = ``;
        error.background = 'error--403';
        break;

      case 404:
        error.title = 'Not Found';
        error.message = '';
        error.background = 'error--404';
        break;

      case 409:
        error.title = 'Conflict';
        error.message = '';
        error.background = 'error--409';
        break;

      case 500:
        error.title = 'Internal Server Error';
        error.message = '';
        error.background = 'error--500';
        break;

      default:
        error.title = 'Error';
        error.message = '';
        error.background = 'error--500';
    }
  } else {
    error.title = 'Client Error';
    error.message = '';
    error.background = 'error--500';
  }

  return { error };
};

// Module export
export default Error;
// Module End
