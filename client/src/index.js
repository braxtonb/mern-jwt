import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import history from './router/history';

import App from './components/app';
import Header from './components/Header';
import Signin from './components/auth/Signin';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={history}>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/signin" component={Signin} />
          <Route render={() => <p>Route not found!</p>} />
        </Switch>
      </div>
    </Router>
  </Provider>
  , document.querySelector('.container'));
