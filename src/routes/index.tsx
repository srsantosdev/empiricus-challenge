import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { routes } from './routes';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        {routes.map(route => (
          <Route
            exact={route.exact}
            key={route.id}
            path={route.path}
            component={route.component}
          />
        ))}
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
