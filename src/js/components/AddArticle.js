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
          <input type="file" ref="image" name="articleImg" accept="image/*" capture />
        </div>
        <button className="btn btn-default" onClick={() => this.handleClick()}>
          Add
        </button>
      </div>
    );
  }
  
  handleClick() {
    var titleNode = ReactDOM.findDOMNode(this.refs.title); 
    var textNode = ReactDOM.findDOMNode(this.refs.text); 
    var imgNode = ReactDOM.findDOMNode(this.refs.image); 
    const title = titleNode.value.trim();
    const text = textNode.value;
    const img = imgNode.files[0];
    
    if ((title) && (text)) {
      this.props.onAddClick(title, text, img);
      titleNode.value = '';
      textNode.value = "";
    } 
  }
}