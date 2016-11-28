import React from "react";
import {Route, IndexRoute} from "react-router";
import AppRoot from "./AppRoot";
import MainContainer from "./MainContainer";
import LoginPageContainer from "./login/LoginPageContainer";
import EntryListContainer from "./entries/list/EntryListContainer";
import EntryDetailsContainer from "./entries/details/EntryDetailsContainer";

export default (
    <Route path="/" component={AppRoot}>
        <Route path="login" component={LoginPageContainer} />
        <Route component={MainContainer}>
            <Route path="entries">
                <IndexRoute component={EntryListContainer} />
                <Route path=":entryId" component={EntryDetailsContainer} />
            </Route>
        </Route>
    </Route>
);