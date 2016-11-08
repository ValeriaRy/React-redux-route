import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { getArticle } from "../actions/articlesActions";

@connect((store) => {
  return {
    articles: store.articles.articles,
  };
})

class ArticleDetails extends React.Component {
  componentDidMount() {
    this.getArticleFromDB();
  }
  
  getArticleFromDB() {
    var hashStr = "#/articleDetails?id=".length;
    var articleID=window.location.hash.substring(hashStr);
    this.props.dispatch(getArticle(articleID));
  }
  
  render() {
    const { articles } = this.props;
    var article = articles[0]; 

    if (!articles.length) {
      this.getArticleFromDB();
      return (
        <div>
        </div>
      );
    } else {
      return (
        <div>
          <p>Author: {article.author}</p>
          <h2>{article.title}</h2>
          <img className="img-article" alt={article.title} src={"../" + article.imgPath} />
          <p>{article.text}</p>
        </div>
      );
    }
  }
}

export default connect()(ArticleDetails);