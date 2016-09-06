import React from 'react';

// import HeaderContainer from 'components/header/headerContainer';
// import Footer from 'components/footer';

import './default.scss';

class DefaultLayout extends React.Component {
  render() {
    return (
        <div className="app-default-layout">
          <div className="app-content">
            {this.props.children}
          </div>
        </div>
    );
  }
}

export default DefaultLayout;
