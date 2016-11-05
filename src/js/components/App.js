import React from "react";
import { connect } from "react-redux";
import { Router, Route, IndexRoute, hashHistory, IndexLink, Link } from "react-router";
import Home from "./Home";

@connect((store) => {
  return {
    articles: store.articles.articles,
  };
})

export default class App extends React.Component{
  
  render() {
    return (
      <div>
        <IndexLink to="/" activeClassName="active" />
        <Link to="/articleDetails" activeClassName="active" />
        <div className="content">
          {this.props.children}
        </div>
      </div>
      
    );
  }
}
