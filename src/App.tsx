import React from 'react';
import { Switch, Route } from 'react-router-dom';

import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';

const App = () => (
  <Switch>
    <Route 
      exact
      path="/"
    >
      <MainLayout>
        <Home />
      </MainLayout>
    </Route>
    {/* <Route 
      exact
      path="/"
    >
      <MainLayout>
        <Works />
      </MainLayout>
    </Route> */}
    {/* <Route 
      exact
      path="/"
    >
      <MainLayout>
        <Contact />
      </MainLayout>
    </Route> */}
    {/* <Route 
      exact
      path="/"
    >
      <MainLayout>
        <Blog />
      </MainLayout>
    </Route> */}
  </Switch>
);

export default App;
