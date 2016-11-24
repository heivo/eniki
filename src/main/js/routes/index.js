import React from 'react';
import {Route, Link} from "react-router";
import LoginPage from './login/LoginPage';

class App extends React.Component {
    render() {
        return (
            <div>
                App
                <Link to="login" onlyActiveOnIndex={true}>
                    To Login
                </Link>
                {this.props.children}
            </div>
        )
    }
};

export default (
    <Route path="/" component={App}>
        <Route path="login" component={LoginPage} />
    </Route>
);