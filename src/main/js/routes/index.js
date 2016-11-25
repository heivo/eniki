import React from "react";
import {Route, IndexRoute} from "react-router";
import AppRoot from "./AppRoot";
import LoginPageContainer from "./login/LoginPageContainer";
import EntriesContainer from "./entries/EntriesContainer";
import EntryListContainer from "./entries/list/EntryListContainer";
import EntryDetailsContainer from "./entries/details/EntryDetailsContainer";

export default (
    <Route path="/" component={AppRoot}>
        <Route path="login" component={LoginPageContainer} />
        <Route path="entries" component={EntriesContainer}>
            <IndexRoute component={EntryListContainer} />
            <Route path=":entryId" component={EntryDetailsContainer} />
        </Route>
    </Route>
);