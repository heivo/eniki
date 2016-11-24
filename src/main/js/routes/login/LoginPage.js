import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import LoginForm from './LoginForm';
import {requestToken} from '../../modules/user';

const mapStateToProps = state => ({
    loginError: state.user.error
});

const mapDispatchToProps = dispatch => ({
    dispatchRequestToken: (username, password) => dispatch(requestToken(username, password))
});

@connect(mapStateToProps, mapDispatchToProps)
export default class LoginPage extends Component {

    static propTypes = {
        dispatchRequestToken: PropTypes.func.isRequired
    };

    render() {
        const {loginError, dispatchRequestToken} = this.props;
        return (
            <div>
                <h1>Login</h1>
                <LoginForm onSubmit={dispatchRequestToken}/>
                {loginError}
            </div>
        );
    }
}