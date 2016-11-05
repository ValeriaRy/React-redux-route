import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { getArticle } from "../actions/articlesActions";

@connect((store) => {
  return {
    articles: store.articles.articles,
  };
})

class ArticleDetails extends React.Component {
  componentDidMount(articleID) {
    var hashStr = "#/articleDetails?id=".length;
    var articleID=window.location.hash.substring(hashStr);
    this.props.dispatch(getArticle(articleID));
  }
  
  render () {
    
    const { dispatch, articles } = this.props;
    
    var article = articles[0]; 
    console.log(articles);

    return (
      <div>
        <h2>{article.title}</h2>
        <p>{article.text}</p>
      </div>
    );
  }
}

export default connect()(ArticleDetails);