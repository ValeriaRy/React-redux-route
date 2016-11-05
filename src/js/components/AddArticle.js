import React, { findDOMNode, Component, PropTypes } from 'react';
import ReactDOM from "react-dom";

export default class AddArticle extends Component {
  
  render() {
    return (
      <div>
        <div>
          <input className="form-control" type='text' ref='title' />
          <div className="form-group">
            <p><textarea className="form-control" rows="10" cols="45" name="text" ref='text'></textarea></p>
          </div>
        </div>
        <button className="btn btn-default" onClick={(e) => this.handleClick(e)}>
          Add
        </button>
      </div>
    );
  }
  
  handleClick(e) {
    var titleNode = ReactDOM.findDOMNode(this.refs.title); 
    var textNode = ReactDOM.findDOMNode(this.refs.text); 
    const title = titleNode.value.trim();
    const text = textNode.value;
    
    if ((title) && (text)) {
      this.props.onAddClick(title, text);
      titleNode.value = '';
      textNode.value = "";
    } 
  }
}
