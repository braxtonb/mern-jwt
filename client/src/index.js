import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import history from './router/history';

import App from './components/App/App';
import Header from './components/Header/Header';
import Signin from './components/Signin/Signin';
import Signup from './components/Signup/Signup';
import Signout from './components/Signout/Signout';
import Feature from './components/Feature/Feature';
import RequireAuth from './hoc/RequireAuth/RequireAuth';
import reducers from './store/reducers';
import { AUTH_USER } from './store/Authentication/authentication.types';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

// Update application state with user's authentication status
// before the application is rendered
const token = localStorage.getItem('token');

if (token) {
  store.dispatch({ type: AUTH_USER });
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <div>
        <Header />
        <div className="container">
          <Switch>
            <Route exact path="/" component={App} />
            <Route path="/signin" component={Signin} />
            <Route path="/signup" component={Signup} />
            <Route path="/signout" component={Signout} />
            <Route path="/feature" component={RequireAuth(Feature)} />
            <Route render={() => <p>Route not found!</p>} />
          </Switch>
        </div>
      </div>
    </Router>
  </Provider>
  , document.querySelector('.container-fluid'));
