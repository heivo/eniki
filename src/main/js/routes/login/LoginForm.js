import React, {Component, PropTypes} from "react";

export default class LoginForm extends Component {

    static propTypes = {
        onLogin: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.onLogin(this.usernameInput.value, this.passwordInput.value);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Benutzer:</label>
                <input type="text" ref={input => this.usernameInput = input} />
                <label>Passwort:</label>
                <input type="password" ref={input => this.passwordInput = input} />
                <button type="submit">Login</button>
            </form>
        );
    }
}