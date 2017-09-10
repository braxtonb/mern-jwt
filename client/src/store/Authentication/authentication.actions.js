import axios from 'axios';
import history from '../../router/history';

import {
  AUTH_USER,
  AUTH_ERROR,
  UNAUTH_USER,
  FETCH_MESSAGE,
} from './authentication.types';

const ROOT_URL = 'http://localhost:3090';

// Dispatch helper function to dispatch error action
export const authError = error => ({
  type: AUTH_ERROR,
  payload: error,
});

// Sign in user
export const signinUser = ({ email, password }) => (
  (dispatch) => {
    // Submit email/password to the server
    axios.post(`${ROOT_URL}/signin`, { email, password })
      .then((response) => {
        // If request is good...
        // - Update state to indicate user is authenticated
        dispatch({ type: AUTH_USER });
        // - Save the JWT token
        localStorage.setItem('token', response.data.token);
        // - redirect to the route '/feature'
        history.push('/feature');
      })
      .catch(() => {
        // If request is bad...
        // - Show an error to the user
        dispatch(authError('Bad Login Info'));
      });
  }
);

// Sign up user
export const signupUser = ({ email, password }) => (
  (dispatch) => {
    // Submit email/password to the server
    axios.post(`${ROOT_URL}/signup`, { email, password })
      .then((response) => {
        // If request is good...
        // - Update state to indicate user is authenticated
        dispatch({ type: AUTH_USER });
        // - Save the JWT token
        localStorage.setItem('token', response.data.token);
        // - redirect to the route '/feature'
        history.push('/feature');
      })
      .catch(({ response }) => {
        // If request is bad...
        // - Show an error to the user
        dispatch(authError(response.data.error));
      });
  }
);

// Sign out user
export const signoutUser = () => {
  localStorage.removeItem('token');

  return {
    type: UNAUTH_USER,
  };
};

// Fetch message from authenticated server route
export const fetchMessage = () => (
  (dispatch) => {
    axios.get(ROOT_URL, {
      headers: { authorization: localStorage.getItem('token') },
    })
      .then((response) => {
        dispatch({
          type: FETCH_MESSAGE,
          payload: response.data.message,
        });
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  }
);
