import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { getUser } from "../actions/userActions";
import LoginForm from './LoginForm';

class Login extends React.Component {
  render () {
    const { dispatch } = this.props;

    return (
      <div>
        <LoginForm onConfirmClick={(login, password) =>
            dispatch(getUser(login, password))
        } />
      </div>
    );
  }
}

export default connect()(Login);