export default function reducer(state = {
    articles: [],
    fetching: false,
    fetched: false,
    error: null,
  }, action) {

    switch (action.type) {
      case "FETCH_ARTICLES": {
        return {...state, fetching: true};
      }
      case "FETCH_ARTICLES_REJECTED": {
        return {...state, fetching: false, error: action.payload};
      }
      case "FETCH_ARTICLES_FULFILLED": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          articles: action.payload,
        };
      }
      
      case "DELETE_ARTICLE": {
        return {...state, fetching: true};
      }
      case "DELETE_ARTICLE_REJECTED": {
        return {...state, fetching: false, error: action.payload};
      }
      case "DELETE_ARTICLE_FULFILLED": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          articles: state.articles.filter(function(article){ 
            article._id !== action.payload;
          }) 
        };
      }
      
      case "ADD_ARTICLE": {
        return {...state, fetching: true};
      }
      case "ADD_ARTICLE_REJECTED": {
        return {...state, fetching: false, error: action.payload};
      }
      case "ADD_ARTICLE_FULFILLED": {
        return {
          ...state,
          articles: ([action.payload]).concat(state.articles)
        };
      }
    
      case "GET_ARTICLE": {
        return {...state, fetching: true};
      }
      case "GET_ARTICLE_REJECTED": {
        return {...state, fetching: false, error: action.payload};
      }
      case "GET_ARTICLE_FULFILLED": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          articles: action.payload,
        };
      }
    }

    return state;
}
