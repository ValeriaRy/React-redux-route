import  React, { Component, PropTypes } from 'react';
import { hashHistory } from "react-router";

export default class Article extends Component {
  render() {
    if (this.props.user === this.props.author) {
      var deleteButton =  (
        <button className="btn btn-primary" onClick={(e) => this.handleClick(e)}>
          Delete
        </button> 
      );
    } else {
      var deleteButton = <div></div>;
    }
    
    return (
      <article className="well" id={this.props._id.toString()}>
        <h3 className="active-title" onClick={() => hashHistory.push('/articleDetails?id='+ this.props._id)}>
          {this.props.title}
        </h3>
        <p>{this.props.text}</p>
        {deleteButton}
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