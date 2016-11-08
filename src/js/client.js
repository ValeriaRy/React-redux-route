import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import store from "./store";
import ArticleDetails from './components/ArticleDetails';
import App from './components/App';
import Home from './components/Home';
import Login from './components/Login';
import Registration from './components/Registration';

const app = document.getElementById('app');

ReactDOM.render((
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Home} />
                <Route path="articleDetails" component={ArticleDetails} />
                <Route path="login" component={Login} />
                <Route path="registration" component={Registration} />
            </Route>
        </Router>
    </Provider>
), app);