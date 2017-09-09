import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import { signinUser } from '../../actions';

class Signin extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit({ email, password }) {
    console.log('email:', email, 'password:', password);
    // Need to do something to log user in
    this.props.signinUser({ email, password });
  }

  renderField(field) {
    console.log('field:', field);

    return (
      <fieldset className="form-group">
        <label htmlFor={field.input.name}>{field.label}</label>
        <input
          type="text"
          className="form-control"
          {...field.input}
        />
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
          component={this.renderField}
        />
        <Field
          label="Password"
          name="password"
          component={this.renderField}
        />
        <button type="submit" className="btn btn-primary">Sign in</button>
      </form>
    );
  }
}

Signin.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  signinUser: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'signin',
})(
  connect(null, { signinUser })(Signin),
);
