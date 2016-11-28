import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware, compose} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import {Router, hashHistory} from "react-router";
import {syncHistoryWithStore, routerMiddleware} from "react-router-redux";
import reducer from "./modules/reducer";
import routes from "./routes";

import 'bootstrap/dist/css/bootstrap.min.css'


const mountPoint = document.createElement('div');
document.body.appendChild(mountPoint);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = composeEnhancers(applyMiddleware(thunk, routerMiddleware(hashHistory)));
const store = createStore(reducer, middleware);
const history = syncHistoryWithStore(hashHistory, store);

ReactDOM.render(
    <Provider store={store}>
        <Router routes={routes} history={history} />
    </Provider>,
    mountPoint
);
