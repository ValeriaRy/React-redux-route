import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { hashHistory } from "react-router";
import { fetchArticles, deleteArticle, addArticle } from "../actions/articlesActions";
import AddArticle from './AddArticle';
import Article from './Article';

@connect((store) => {
  return {
    articles: store.articles.articles,
  };
})

class Home extends React.Component {

  componentDidMount(articleID) {
    this.props.dispatch(fetchArticles());
  }
  
  render () {
    const { dispatch, articles } = this.props;
    
    if (!articles.length) {
      this.props.dispatch(fetchArticles());
    }
    
    const mappedArticles = articles.map((article, index) => 
      <Article {...article}
      key={index}
      onDeleteClick={(id) => dispatch(deleteArticle(id))}
       />);
    
    return (
      <div>
        <AddArticle onAddClick={(title, text) =>
            dispatch(addArticle(title, text))
        } />
        <div>{mappedArticles}</div>
      </div>
    );
  }
}

export default connect()(Home);
