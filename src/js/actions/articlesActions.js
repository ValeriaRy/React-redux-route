import axios from "axios";

export function fetchArticles() {
  return function(dispatch) {
    axios.get("https://ghjhj-valeriary.c9users.io/article")
      .then((response) => {
        dispatch({type: "FETCH_ARTICLES_FULFILLED", payload: response.data});
      })
      .catch((err) => {
        dispatch({type: "FETCH_ARTICLES_REJECTED", payload: err});
      });
  };
}

export function addArticle(title, text) {
  return function(dispatch) {
    axios.post('https://ghjhj-valeriary.c9users.io/article', {
      title: title,
      text: text
    })
      .then((response) => {
        dispatch({type: "ADD_ARTICLE_FULFILLED", payload: response.data});
      })
      .catch((err) => {
        dispatch({type: "ADD_ARTICLE_REJECTED", payload: err});
      });
  };
}

export function deleteArticle(id) {
  var idURL = encodeURIComponent(id);
  return function(dispatch) {
    axios({
        method: 'delete',
        url: `https://ghjhj-valeriary.c9users.io/article/${idURL}`
      })
      .then((response) => {
        dispatch({type: "DELETE_ARTICLE_FULFILLED", payload: id});
      })
      .catch((err) => {
        dispatch({type: "DELETE_ARTICLE_REJECTED", payload: err});
      });
  };
}

export function getArticle(id) {
  var idURL = encodeURIComponent(id);
  return function(dispatch) {
    axios({
      method: 'get',
      url: `https://ghjhj-valeriary.c9users.io/article/${idURL}` 
      })
      .then((response) => {
        dispatch({type: "GET_ARTICLE_FULFILLED", payload: response.data});
      })
      .catch((err) => {
        dispatch({type: "GET_ARTICLE_REJECTED", payload: err});
      });
  };
}