import React from "react";
import { hashHistory, IndexLink, Link } from "react-router";
import { connect } from 'react-redux';
import { signOut } from "../actions/userActions";

@connect((store) => {
  return {
    user: store.user.user
  };
})

export default class App extends React.Component{
  render() {
    const { dispatch, user } = this.props;
    
    if ((user) && (user!="login") && (user!="password")){
      var userLogin = user;
      var sign = <span className="sign" onClick={() => dispatch(signOut())}>Sign out</span>;
    } else {
      var sign = <span className="sign" onClick={() => hashHistory.push('/login')}>Sign in</span>;
    }

    return (
      <div>
        <header className="header">
          <span className="label" onClick={() => hashHistory.push('/')}>Home</span>
          <div className="login">
            <span className="user">{userLogin}</span>
            {sign}
          </div>
        </header>
        <IndexLink to="/" activeClassName="active" />
        <Link to="/articleDetails" activeClassName="active" />
        <Link to="/login" activeClassName="active" />
        <Link to="/registration" activeClassName="active" />
        <div className="content">
          {this.props.children}
        </div>
      </div>
    );
  }
}