import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, AllKegs } from './containers';

export default function Routes {
  return (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/all-kegs" component={AllKegs} />
  </Switch>
  )
}

export default Routes;
