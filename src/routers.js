import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Home from './pages/home';
import Contact from './pages/contact';
import NoMatch from './pages/noMatch';

export default (App) => {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="/contact" component={Contact}/>
        <Route path="*" component={NoMatch} />
      </Route>
    </Router>
  );
};
