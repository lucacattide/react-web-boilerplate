// Module Start
// Error
// SASS imports
import '../sass/index.scss'
// JS imports
import React from 'react'

/**
 * @description Error - Override
 * @author Luca Cattide
 * @date 2019-08-13
 * @class Error
 * @extends {React.Component}
 */
class Error extends React.Component {
  /**
   * @description Props initialization
   * @author Luca Cattide
   * @date 2019-08-13
   * @static
   * @param {object} { res, err } HTTP request/response
   * @returns
   * @memberof Error
   */
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    const error = {
      title: '',
      message: '',
      background: ''
    };

    if (statusCode) {
      switch(statusCode) {
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
  }

  /**
   * @description Rendering
   * @author Luca Cattide
   * @date 2019-08-13
   * @returns
   * @memberof Error
   */
  render() {
    return (
      // Error Start
      <section className={`error ${this.props.error.background}`}>
        <h6>Error</h6>
        <div className="error__container">
          {/* Summary Start */}
          <article className="container__article">
            <h1 className="article__title">
              {this.props.error.title}
            </h1>
            <p className="article__body">
              {this.props.error.message}
            </p>
          </article>
          {/* Summary End */}
        </div>
      </section>
      // Error End
    );
  }
}

// Module export
export default Error;
// Module End
