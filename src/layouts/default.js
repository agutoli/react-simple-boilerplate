import React from 'react';

import Navbar from 'components/navbar';

import './default.scss';

const DefaultLayout = ({ children }) => (
  <div className="default-layout">
    <Navbar />
    <div className="default-layout__content">
      { children }
    </div>
  </div>
);

DefaultLayout.propTypes = {
  children: React.PropTypes.any
};

export default DefaultLayout;
