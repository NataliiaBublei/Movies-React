import React from 'react';

import { withFilmsService } from '../hoc';
import { Route, Switch } from 'react-router-dom';
import FilmsPage from '../pages';
import Header from '../header';
import Footer from '../footer';

import './App.css';

const App = () => {
  return (
    <>
      <Header />
      <main role="main" className="container">
        <Switch>
          <Route
            path="/"
            component={FilmsPage} exact />
          <Route render={() => <h2>Page not found!</h2>} />
        </Switch>
      </main>
      <Footer />
    </>
  );
};

export default withFilmsService()(App);
