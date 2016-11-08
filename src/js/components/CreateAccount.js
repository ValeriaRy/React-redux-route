import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import ReactDOM from "react-dom";

class CreateAccount extends React.Component {
    render() {
        return (
            <form className="form-horizontal">
                <div className="form-group">
                    <label for="inputEmail3" className="col-sm-2 control-label">Login</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" ref="inputLogin" placeholder="Login" />
                    </div>
                </div>
                <div className="form-group">
                    <label for="inputEmail3" className="col-sm-2 control-label">Email</label>
                    <div className="col-sm-10">
                        <input type="email" className="form-control" ref="inputEmail" placeholder="Email" />
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
                        <button type="submit" className="btn btn-default" onClick={() => this.handleClick()}>
                            Confirm
                        </button>
                    </div>
                </div>
            </form>
        );
    }
    
    handleClick() {
        var loginNode = ReactDOM.findDOMNode(this.refs.inputLogin); 
        var emailNode = ReactDOM.findDOMNode(this.refs.inputEmail); 
        var passwordNode = ReactDOM.findDOMNode(this.refs.inputPassword); 
        const login = loginNode.value.trim();
        const email = emailNode.value.trim();
        const password = passwordNode.value.trim();
        
        if ((login) && (email) && (password)) {
            this.props.onConfirmClick(login, email, password);
        } 
    }
}

export default connect()(CreateAccount);