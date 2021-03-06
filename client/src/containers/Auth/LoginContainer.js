import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import LoginForm from "../../components/Auth/LoginForm";

import * as authService from "../../services/authService";

const LoginContainer = props => {
    /**
     * Login
     *
     * @param {object} formData
     *
     * @return response
     */
    const login = (formData) => {
        props.actions.loginService(formData)
    };

    return (
        <LoginForm
            login={login}
            {...props}
        />
    )
};

/**
 * Map the state to props.
 */
const mapStateToProps = state => ({
    auth: state.auth.payload,
    authError: state.auth.errors,
    authLoading: state.auth.loading
});

/**
 * Map the actions to props.
 */
const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators(
            Object.assign(
                {},
                authService,
            ),
            dispatch
        ),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
