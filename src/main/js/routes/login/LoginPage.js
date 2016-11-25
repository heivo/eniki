import React, {Component, PropTypes} from 'react';
import LoginForm from './LoginForm';

export default class LoginPage extends Component {

    static propTypes = {
        onLogin: PropTypes.func.isRequired,
        error: PropTypes.string
    };

    render() {
        const {onLogin, error} = this.props;
        return (
            <div>
                <h1>Login</h1>
                <LoginForm onLogin={onLogin}/>
                {error}
            </div>
        );
    }
}