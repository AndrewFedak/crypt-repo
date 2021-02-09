import '../index.scss';
import React from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';

import thunk from 'redux-thunk';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';

import urlConstants from '../constants/constants';
import routes from '../constants/routes';

import Home from '../pages/home/home';

import root from './reducers/index';
import header from '../reusable/page_header/store/reducer';
import contactUs from '../reusable/contact_us/store/reducer';
import home from '../pages/home/store/reducer';

const initialAppState = {};

const middleware = [thunk];

const store = createStore(
  combineReducers({
    root,
    header,
    contactUs,
    home
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
            component={Home}
          />
        </Switch>
      </Provider>
    </BrowserRouter>
  );
};

export default App;