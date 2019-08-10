import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import configureStore, { history } from "./config/store";

const store = configureStore();

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Router>
          <App/>
        </Router>
      </ConnectedRouter>
    </Provider>
    , document.getElementById('root'));
})


serviceWorker.unregister();
