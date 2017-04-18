
//  Librarys
import React from 'react';
import PropTypes from 'prop-types';

//  Includes
import Header from './includes/Header';


/**
 * Layout
 * @prop {Object}
 */
const Layout = ({ children }) => (
  <div>
    <Header />

    <main>
      {children}
    </main>
  </div>
);


Layout.propTypes = {
  children: PropTypes.object.isRequired,
};


export default Layout;
