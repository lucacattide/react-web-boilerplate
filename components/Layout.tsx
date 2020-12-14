// Module Start
// JS imports
import React, { FC, useEffect } from 'react';
import { CommonProps } from '../typings/props';
import PropTypes from 'prop-types';
import Header from './Header';
import Footer from './Footer';
import { refresh } from '../src/utils';

// Layout
const Layout: FC<CommonProps> = ({ children }) => {
  useEffect(() => {
    refresh();
  }, []);

  return (
    <>
      {/* Layout Start */}
      <div className="container-main grid min-h-screen w-full">
        <Header />
        {/* Main Start */}
        <main className="container-main__wrapper">{children}</main>
        {/* Main End */}
        <Footer />
      </div>
      {/* Layout End */}
    </>
  );
};

// Properties validation
Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

// Module export
export default Layout;
// Module End
