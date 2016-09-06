import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import HomeContainer from './pages/home';
import NoMatch from './pages/noMatch';

export default (App) => {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={HomeContainer} />
        <Route path="*" component={NoMatch}/>
      </Route>
    </Router>
  );
};
