import React from "react";
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import App from "./components/app";
import ApiAdapter from "./services/ApiAdapter";
import ErrorBoundry from "./components/error-boundry";
import { FilmsServiceProvider } from "./components/films-service-context";

import store from "./store";
import './index.css';

const apiAdapter = new ApiAdapter();

ReactDom.render(
  <Provider store={store}>
    <ErrorBoundry>
      <FilmsServiceProvider value={apiAdapter}>
        <Router>
          <App />
        </Router>
      </FilmsServiceProvider>
    </ErrorBoundry>
  </Provider>,
  document.getElementById('root')
);
