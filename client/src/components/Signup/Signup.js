import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import { signupUser } from '../../store/Authentication/authentication.actions';
import styles from './Signup.css';

class Signup extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit({ email, password }) {
    this.props.signupUser({ email, password });
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
      <fieldset style={styles} className="form-group">
        <label htmlFor={field.input.name}>{field.label}</label>
        <input
          type={field.type}
          className="form-control"
          {...field.input}
        />
        {field.meta.touched && <div className="error">{field.meta.error}</div>}
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
        <Field
          label="Password Confirmation"
          name="passwordConfirm"
          type="password"
          component={renderField}
        />
        {this.renderAlert()}
        <button type="submit" className="btn btn-primary">Sign up</button>
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

  if (!formProps.passwordConfirm) {
    errors.passwordConfirm = 'Enter a confirmation password';
  }

  if (formProps.password !== formProps.passwordConfirm) {
    errors.password = 'Passwords must match';
  }

  return errors;
};

Signup.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  signupUser: PropTypes.func.isRequired,
  errorMessage: PropTypes.string.isRequired,
};

export default reduxForm({
  validate,
  form: 'signin',
})(
  connect(mapStateToProps, { signupUser })(Signup),
);
