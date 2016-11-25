import {combineReducers} from "redux";
import userReducer from "./user";
import entriesReducer from "./entries";
import {routerReducer} from "react-router-redux";

export default combineReducers({
    user: userReducer,
    entries: entriesReducer,
    routing: routerReducer
});