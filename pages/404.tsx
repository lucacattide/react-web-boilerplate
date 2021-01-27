// Module Start
// JS imports
import { NextPage } from 'next';
import CustomError from './components/CustomError';

// 404
const Custom404: NextPage = () => {
  const error = {
    title: '404',
    message: 'Page not found',
  };

  return <CustomError error={error} />;
};

// Module export
export default Custom404;
// Module End
