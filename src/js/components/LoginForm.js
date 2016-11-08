import React, { Component, PropTypes } from 'react';
import ReactDOM from "react-dom";
import { connect } from 'react-redux';
import { hashHistory } from "react-router";

@connect((store) => {
  return {
    user: store.user.user
  };
})

class LoginForm extends React.Component {
    redirectToHome() {
        hashHistory.push('/');     
    }

    render() {
        const { user } = this.props;
        
        if (user) {
            if (user == "login") {
                var message = "Wrong login";
            } else if (user == "password") {
                var message = "Wrong password";
            } else {
                this.redirectToHome();       
            }
        }

        return (
            <form className="form-horizontal">
                <div className="form-group">
                    <label for="inputEmail3" className="col-sm-2 control-label">Login</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" ref="inputLogin" placeholder="Login" />
                    </div>
                </div>
                <div className="form-group">
                    <label for="inputPassword3" className="col-sm-2 control-label">Password</label>
                    <div className="col-sm-10">
                        <input type="password" className="form-control" ref="inputPassword" placeholder="Password" />
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-offset-2 col-sm-10">
                        <button type="submit" className="btn btn-default" onClick={() => this.handleClick()}>Sign in</button>
                        <span className="login-message">{message}</span>
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-offset-2 col-sm-10">
                        <a className="registration-ref" onClick={() => hashHistory.push('/registration')}>
                            Registration
                        </a>
                    </div>
                </div>
            </form>
        );
    }
    
    handleClick() {
        var loginNode = ReactDOM.findDOMNode(this.refs.inputLogin); 
        var passwordNode = ReactDOM.findDOMNode(this.refs.inputPassword); 
        const login = loginNode.value.trim();
        const password = passwordNode.value.trim();
        
        if ((login) && (password)) {
            this.props.onConfirmClick(login, password);
        } 
    }
}

export default connect()(LoginForm);