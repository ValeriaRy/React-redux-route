import  React, { Component, PropTypes } from 'react';
import { browserHistory, hashHistory } from "react-router";

export default class Article extends Component {
  render() {
    return (
      <article className="well" id={this.props._id.toString()}>
        <h3 className="active-title" onClick={() => hashHistory.push('/articleDetails?id='+ this.props._id)}>
          {this.props.title}
        </h3>
        <p>{this.props.text}</p>
        <button className="btn btn-primary" onClick={(e) => this.handleClick(e)}>
          Delete
        </button>
      </article>
    );
  }
  
  handleClick(e) {
    this.props.onDeleteClick(e.target.parentNode.id);
  }
}

Article.propTypes = {
  onDeleteClick: PropTypes.func.isRequired
};
