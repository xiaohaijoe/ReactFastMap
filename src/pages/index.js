import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import Loadable from 'react-loadable';

const LoadableDemo = Loadable({
  loader: () => import('@/pages/Demo'),
  loading: () => null,
});

export default function Index() {
  return (
    <Switch>
      <Route path="/" exact render={() => <Redirect to="/demo" />} />
      <Route path="/demo" component={LoadableDemo} />
    </Switch>
  );
}
