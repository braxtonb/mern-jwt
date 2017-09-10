import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import { signinUser } from '../../store/Authentication/authentication.actions';

class Signin extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
    this.renderAlert = this.renderAlert.bind(this);
  }
  onSubmit({ email, password }) {
    this.props.signinUser({ email, password });
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

  renderField(field) {
    return (
      <fieldset className="form-group">
        <label htmlFor={field.input.name}>{field.label}</label>
        <input
          type={field.type}
          className="form-control"
          {...field.input}
        />
        {field.meta.touched && <div className="error">{field.meta.error}</div>}
      </fieldset>
    );
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <Field
          label="Email"
          name="email"
          type="text"
          component={this.renderField}
        />
        <Field
          label="Password"
          name="password"
          type="password"
          component={this.renderField}
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

const validate = (formProps) => {
  const errors = {};

  if (!formProps.email) {
    errors.email = 'Enter an email!';
  }

  if (!formProps.password) {
    errors.password = 'Enter a password!';
  }

  return errors;
};

Signin.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  signinUser: PropTypes.func.isRequired,
  errorMessage: PropTypes.string.isRequired,
};

export default reduxForm({
  validate,
  form: 'signin',
})(
  connect(mapStateToProps, { signinUser })(Signin),
);
