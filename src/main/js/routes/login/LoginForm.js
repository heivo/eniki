import React, {Component, PropTypes} from 'react';
import {Route, Link} from "react-router";

export default class LoginForm extends Component {

    static propTypes = {
        onSubmit: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.onSubmit(this.usernameElem.value, this.passwordElem.value);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Benutzer:</label>
                <input type="text" ref={input => this.usernameElem = input} />
                <label>Passwort:</label>
                <input type="password" ref={input => this.passwordElem = input} />
                <button type="submit">Login</button>
            </form>
        );
    }
}