
//  Librarys
import React, { PropTypes } from 'react';

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
