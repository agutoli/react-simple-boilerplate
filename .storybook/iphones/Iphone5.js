import React from 'react';

import './Iphone.less';

class Iphone extends React.Component {
  render() {
    return (
      <div className="iphone iphone-5">
        <div className="iphone-screen">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Iphone;
