import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import LoginPage from './LoginPage';
import {requestToken} from '../../modules/user';

const mapStateToProps = state => ({
    error: state.user.error
});

const mapDispatchToProps = dispatch => ({
    handleLogin: (username, password) => dispatch(requestToken(username, password))
});

@connect(mapStateToProps, mapDispatchToProps)
export default class LoginPageContainer extends Component {
    render() {
        const {handleLogin, error} = this.props;
        return (
            <LoginPage onLogin={handleLogin} error={error} />
        );
    }
}
