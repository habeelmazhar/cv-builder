import React, { Component } from 'react';
import { Redirect } from 'react-router'
import { connect } from 'react-redux';

import { selectUserLoggedIn } from '../../selectors';
import { login } from '../../actions';

export default function (ComposedComponent) {

    class RequireAuth extends Component {
        render() {
            if (this.props.isLoggedIn) {
                return <ComposedComponent {...this.props} />
            } else {
                return <Redirect to='/login' />;
            }
        }

    }

    const mapStateToProps = state => ({
        isLoggedIn: selectUserLoggedIn(state),
    });

    const mapDispatchToProps = dispatch => ({
        login: userId => dispatch(login(userId))
    })

    return connect(mapStateToProps, mapDispatchToProps)(RequireAuth)
}



