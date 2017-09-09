import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import { signinUser } from '../../store/Authentication/authentication.actions';

class Signin extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit({ email, password }) {
    if (email.length > 0 && password.length > 0) {
      this.props.signinUser({ email, password });
    }
  }

  renderAlert() {
    if (this.props.errorMessage) {
      return (
        <div className="alert alert-danger">
          <strong>Oops!</strong> {this.props.errorMessage}
        </div>
      );
    }

    return '';
  }

  render() {
    const { handleSubmit } = this.props;

    const renderField = field => (
      <fieldset className="form-group">
        <label htmlFor={field.input.name}>{field.label}</label>
        <input
          type={field.type}
          className="form-control"
          {...field.input}
        />
      </fieldset>
    );

    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <Field
          label="Email"
          name="email"
          type="text"
          component={renderField}
        />
        <Field
          label="Password"
          name="password"
          type="password"
          component={renderField}
        />
        {this.renderAlert()}
        <button type="submit" className="btn btn-primary">Sign in</button>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  errorMessage: state.auth.error,
});

Signin.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  signinUser: PropTypes.func.isRequired,
  errorMessage: PropTypes.string.isRequired,
};

export default reduxForm({
  form: 'signin',
})(
  connect(mapStateToProps, { signinUser })(Signin),
);