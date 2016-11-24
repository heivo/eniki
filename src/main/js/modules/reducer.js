import {combineReducers} from "redux";
import userReducer from "./user";
import {routerReducer} from "react-router-redux";

export default combineReducers({
    user: userReducer,
    routing: routerReducer
});