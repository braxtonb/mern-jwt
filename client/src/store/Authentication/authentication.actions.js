import axios from 'axios';
import history from '../../router/history';

import { AUTH_USER } from './authentication.types';

const ROOT_URL = 'http://localhost:3090';

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
      });
  }
);
