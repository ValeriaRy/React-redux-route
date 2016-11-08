import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { addUser } from "../actions/userActions";
import CreateAccount from './CreateAccount';

class Registration extends React.Component {
  render () {
    const { dispatch } = this.props;

    return (
      <div>
        <CreateAccount onConfirmClick={(login, email, password) =>
            dispatch(addUser(login, email, password))
        } />
      </div>
    );
  }
}

export default connect()(Registration);