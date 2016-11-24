import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware, compose} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import {Router, browserHistory, hashHistory} from "react-router";
import { syncHistoryWithStore } from 'react-router-redux'
import reducer from "./modules/reducer";
import routes from "./routes";

const mountPoint = document.createElement('div');
document.body.appendChild(mountPoint);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = composeEnhancers(applyMiddleware(thunk));
const store = createStore(reducer, middleware);
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <Provider store={store}>
        <Router routes={routes} history={history} />
    </Provider>,
    mountPoint
);
