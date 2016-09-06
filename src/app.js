import React, { PropTypes } from 'react';
import { render } from 'react-dom';
import routers from 'routers';
import DefaultLayout from 'layouts/default';

import 'styles/app.scss';

class App extends React.Component {
  static propTypes = {
    children: PropTypes.element
  };

  render() {
    return (
      <div className="app-main">
        <DefaultLayout>
          {this.props.children}
        </DefaultLayout>
      </div>
    );
  }
}

render(routers(App), document.getElementById('app'));
