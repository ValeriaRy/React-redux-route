import axios from "axios";

export function addUser(login, email, password) {
  return function(dispatch) {
    axios.post('https://ghjhj-valeriary.c9users.io/user/registration', {
        login: login,
        email: email,
        password: password
    })
    .then((response) => {
        dispatch({type: "ADD_USER_FULFILLED", payload: response.data});
    })
    .catch((err) => {
        dispatch({type: "ADD_USER_REJECTED", payload: err});
    });
  };
}

export function getUser(login, password) {
  return function(dispatch) {
    axios.post('https://ghjhj-valeriary.c9users.io/user/login', {
        login: login,
        password: password
    })
    .then((response) => {
        dispatch({type: "GET_USER_FULFILLED", payload: response.data});
    })
    .catch((err) => {
        dispatch({type: "GET_USER_REJECTED", payload: err});
    });
  };
}

export function signOut() {
    return { type: 'SIGN_OUT' };
}