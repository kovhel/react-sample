import React from 'react';
import { Route, IndexRedirect } from 'react-router';
import { Layout, Home, NotFound } from './pages';

const routes = (
  <Route path="/" component={Layout} >
    <IndexRedirect to="/home" />
    <Route path="/home" component={Home} />
    <Route path="*" component={NotFound} />
  </Route>
);

export default routes;
