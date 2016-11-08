import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { fetchArticles, deleteArticle, addArticle } from "../actions/articlesActions";
import AddArticle from './AddArticle';
import Article from './Article';

@connect((store) => {
  return {
    articles: store.articles.articles,
    user: store.user.user
  };
})

class Home extends React.Component {
  componentWillMount() {
    this.props.dispatch(fetchArticles());
  }
  
  render () {
    const { dispatch, articles, user } = this.props;
    const mappedArticles = articles.map((article, index) => 
      <Article {...article} 
      key={index}
      user={user}
      onDeleteClick={(id) => dispatch(deleteArticle(id))}
    />);
    
    if (!articles.length) {
      this.props.dispatch(fetchArticles());
    }
    
    if (user) {
      var addArticleNode = <AddArticle onAddClick={(title, text, img) =>
        dispatch(addArticle(title, text, img, user))
      } />;
    } else {
      var addArticleNode = <div></div>;
    }

    return (
      <div>
        {addArticleNode}
        <div>{mappedArticles}</div>
      </div>
    );
  }
}

export default connect()(Home);