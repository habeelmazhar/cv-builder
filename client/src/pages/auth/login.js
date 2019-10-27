import React, { Component } from 'react';
import { connect } from 'react-redux';

import { selectUserEmail, selectUserPassword, selectUserLoggedIn } from '../../selectors';
import { login } from '../../actions';

import { API } from '../../services';

import AuthLayout from '../layouts/authLayout';
import InputField from '../../components/input-field';
import Button from '../../components/button';

import { toast } from "react-toastify";

import config from '../../config/config';

class Login extends Component {
    constructor(props) {
        super(props);

        this.loginUser = this.loginUser.bind(this);
    }

    loginUser() {
        let self = this;

        let email = this.email.input.value;
        let password = this.password.input.value;
        console.log('password: ', password);

        // let ip = window.location.hostname + ':' + window.location.port;
        let ip = config.IP;
        console.log(ip);

        API.loginUser(email, password).then(res => {
            let data = res.data;
            if (data.status === 'success') {
                console.log('data.data: ', data.data);
                let user = {
                    ...data.data.user,
                    token: data.data.token
                }
                this.props.login(user);

                window.localStorage.setItem('JWT', data.data.token);
                window.localStorage.setItem("email", data.data.user.email);
                window.localStorage.setItem("firstname", data.data.user.firstname);
                window.localStorage.setItem("lastname", data.data.user.lastname);

                self.props.history.push('/home');
            }
            else
                toast.error('Invalid username / password', { position: toast.POSITION.TOP_CENTER })

        }).catch(err => {
            console.log(err);
        });
    }

    componentDidMount() {
        if (this.props.isLoggedIn)
            this.props.history.push('/home');

    }

    render() {
        return (
            <AuthLayout title={'Login'}>
                <InputField
                    ref={(e) => { this.email = e; }}
                    label="Email"
                    type="email"
                    tabIndex="1"
                />
                <InputField
                    ref={(e) => { this.password = e; }}
                    label="Password"
                    type="password"
                    tabIndex="2"
                />
                <Button onClick={this.loginUser}>
                    Login
                </Button>
                <div className="mt-5 text-muted text-center">
                    Don't have an account? <a href="" onClick={() => this.props.history.push('/signup')}>Create One</a>
                </div>
            </AuthLayout>
        );
    }
}

const mapStateToProps = state => ({
    email: selectUserEmail(state),
    password: selectUserPassword(state),
    isLoggedIn: selectUserLoggedIn(state),
});

const mapDispatchToProps = dispatch => ({
    login: user => dispatch(login(user)),
});


export default connect(mapStateToProps, mapDispatchToProps)(Login)