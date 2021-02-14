import '../index.scss';
import React from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';

import thunk from 'redux-thunk';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';

import urlConstants from '../constants/constants';
import routes from '../constants/routes';

import HomePage from '../pages/home/home';
import ManagerPage from '../pages/manager/manager';
import LoginPage from '../pages/login/login';
import AdminPage from '../pages/admin/admin';
import NotFoundPage from '../pages/not_found/not_found';

import root from './reducers/index';
import header from '../reusable/page_header/store/reducer';
import contactUs from '../reusable/contact_us/store/reducer';
import home from '../pages/home/store/reducer';
import admin from '../pages/admin/store/reducer';

const initialAppState = {};

const middleware = [thunk];

const store = createStore(
  combineReducers({
    root,
    header,
    contactUs,
    home,
    admin
  }),
  initialAppState,
  applyMiddleware(...middleware)
);

const App = () => {
  return (
    <BrowserRouter basename={urlConstants.CTXT}>
      <Provider store={store}>
        <Switch>
          <Redirect exact from={routes.INITIAL} to={routes.HOME} />
          <Route
            exact
            path={routes.HOME}
            component={HomePage}
          />
          <Route
            exact
            path={routes.MANAGER}
            component={ManagerPage}
          />
          <Route
            exact
            path={routes.ADMIN}
            component={AdminPage}
          />
          <Route
            exact
            path={routes.LOGIN}
            component={LoginPage}
          />
          <Route
            exact
            path={routes.NOT_FOUND}
            component={NotFoundPage}
          />
          <Redirect from={routes.ANY} to={routes.NOT_FOUND} />
        </Switch>
      </Provider>
    </BrowserRouter>
  );
};

export default App;