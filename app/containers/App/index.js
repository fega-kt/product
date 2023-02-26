/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

// import DashboardHome from 'containers/DashboardHome';
import Checkinternet from 'containers/Checkinternet';

import LoginPage from 'containers/LoginPage';
import NotFoundPage from 'containers/NotFoundPage';


import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <div>
      {/* <Switch>
        <Route exact path="/" component={HomePage} />
        <Route component={NotFoundPage} />
      </Switch> */}
      <Switch>

        <Checkinternet>
          {/* <Route path="/" exact component={DashboardHome} /> */}
          <Route path="/login" component={LoginPage} />
          {/* <Route path='*' component={NotFoundPage} /> */}
        </Checkinternet>
      </Switch>

      <GlobalStyle />
    </div>
  );
}
