// Module Start
// Error
// JS imports
import { NextPage } from 'next';
import { CommonProps, ErrorType } from '../typings/props';
import CustomError from '../components/CustomError';

// Error - Override
const Error: NextPage<CommonProps> = ({ error }) => {
  return <CustomError error={error} />;
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
  };

  if (statusCode) {
    switch (statusCode) {
      case 400:
        error.title = 'Bad Request';
        error.message = ``;
        break;

      case 401:
        error.title = 'Unauthorized';
        error.message = '';
        break;

      case 403:
        error.title = 'Forbidden';
        error.message = ``;
        break;

      case 404:
        error.title = 'Not Found';
        error.message = '';
        break;

      case 409:
        error.title = 'Conflict';
        error.message = '';
        break;

      case 500:
        error.title = 'Internal Server Error';
        error.message = '';
        break;

      default:
        error.title = 'Error';
        error.message = '';
    }
  } else {
    error.title = 'Client Error';
    error.message = '';
  }

  return { error };
};

// Module export
export default Error;
// Module End
