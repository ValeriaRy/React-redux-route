export default function reducer(state = {
    user: "",
    fetching: false,
    fetched: false,
    error: null,
  }, action) {

    switch (action.type) {
      case "ADD_USER": {
        return {...state, fetching: true};
      }
      case "ADD_USER_REJECTED": {
        return {...state, fetching: false, error: action.payload};
      }
      case "ADD_USER_FULFILLED": {
        return {
          ...state,
          user: action.payload
        };
      }
    
      case "GET_USER": {
        return {...state, fetching: true};
      }
      case "GET_USER_REJECTED": {
        return {...state, fetching: false, error: action.payload};
      }
      case "GET_USER_FULFILLED": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          user: action.payload
        };
      }
      
      case "SIGN_OUT": {
        return {...state, user: ""};
      }
    }

    return state;
}