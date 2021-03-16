import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from '../layouts/Layout';
import DashboardRouter from './dashboard';
import AuthRouter from './auth';
import TaskRouter from './task';
import PrivateRoute from '../components/utils/PrivateRoute';

const combinedRouter = [...DashboardRouter, ...AuthRouter, ...TaskRouter];

const Router = () => (
  <>
    <BrowserRouter>
      <Switch>
        {combinedRouter.map(({ publicRoute, path, component }) =>
          publicRoute ? (
            <Route key={path} path={path} exact>
              {component}
            </Route>
          ) : (
            <PrivateRoute key={path} path={path} exact>
              {component}
            </PrivateRoute>
          ),
        )}
      </Switch>
    </BrowserRouter>
  </>
);

export default Router;
