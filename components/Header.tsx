// Module Start
// JS imports
import React, { FC, useEffect } from 'react';
import PropTypes from 'prop-types';
import initInstall from '../src/install';
import refresh from '../src/refresh';

// Header
const Header: FC = () => {
  useEffect(() => {
    initInstall;
    refresh;
  }, []);

  return (
    // TODO: Tailwind refactoring
    // Header Start
    <section className="header">
      <h6>Header</h6>
    </section>
    // Header End
  );
};

// Properties validation
Header.propTypes = {};

// Module export
export default Header;
// Module End
