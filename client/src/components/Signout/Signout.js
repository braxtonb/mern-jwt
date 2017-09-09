import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { signoutUser } from '../../store/Authentication/authentication.actions';

class Signout extends Component {
  componentWillMount() {
    this.props.signoutUser();
  }

  render() {
    return (
      <div>No... Come back!</div>
    );
  }
}

Signout.propTypes = {
  signoutUser: PropTypes.func.isRequired,
};

export default connect(null, { signoutUser })(Signout);
