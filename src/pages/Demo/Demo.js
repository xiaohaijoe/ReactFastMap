import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import Loadable from 'react-loadable';
import styles from './Demo.module.less';

const LoadableDataV1 = Loadable({
  loader: () => import('@/pages/Demo/DataV1'),
  loading: () => null,
});

const LoadableDataV2 = Loadable({
  loader: () => import('@/pages/Demo/DataV2'),
  loading: () => null,
});

const DemoDataV = props => {
  return (
    <Switch>
      <Route
        path="/demo"
        exact
        render={() => <Redirect to="/demo/data-v1" />}
      />
      <Route path="/demo/data-v1" component={LoadableDataV1} />
      <Route path="/demo/data-v2" component={LoadableDataV2} />
    </Switch>
  );
};

export default DemoDataV;
