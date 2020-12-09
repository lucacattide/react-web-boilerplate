// Module Start
// JS imports
import React, { FC, useEffect } from 'react';
import { CommonProps } from '../typings/props';
import PropTypes from 'prop-types';
import Header from './Header';
import refresh from '../src/refresh';

// Layout
const Layout: FC<CommonProps> = ({ children }) => {
  useEffect(() => {
    refresh();
  }, []);

  return (
    // TODO: Tailwind refactoring
    // Layout Start
    <div className="container">
      <Header />
      {/* Main Start */}
      <main className="container__wrapper">{children}</main>
      {/* Main End */}
    </div>
    // Layout End
  );
};

// Properties validation
Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

// Module export
export default Layout;
// Module End
