import React, { Component } from 'react';
import { connect } from 'react-redux';

import { selectUserEmail, selectUserPassword, selectUserLoggedIn } from '../../selectors';
import { login } from '../../actions';

import { API } from '../../services';

import AuthLayout from '../layouts/authLayout';
import InputField from '../../components/input-field';
import Button from '../../components/button';

import config from '../../config/config';

class Signup extends Component {
    constructor(props) {
        super(props);

        this.signupUser = this.signupUser.bind(this);
    }

    signupUser() {
        let self = this;

        let email = this.email.value;
        let firstname = this.firstname.value;
        let lastname = this.lastname.value;
        let password = this.password.value;

        // let ip = window.location.hostname + ':' + window.location.port;
        let ip = config.IP;
        console.log(ip);

        API.signupUser(email, firstname, lastname, password).then(res => {
            let data = res.data;
            if (data.status === 'success') {
                this.props.login(data.data.token);

                window.localStorage.setItem('JWT', data.data.token);
                window.localStorage.setItem("email", data.data.user.email);

                self.props.history.push('/home');
            }
            else
                alert('Invalid username / password')

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
            <AuthLayout title={'Signup'}>
                <InputField
                    ref={(e) => { this.email = e; }}
                    label="Email"
                    type="email"
                    tabIndex="1"
                />
                <InputField
                    ref={(e) => { this.firstname = e; }}
                    label="First name"
                    tabIndex="2"
                />
                <InputField
                    ref={(e) => { this.lastname = e; }}
                    label="Last name"
                    tabIndex="3"
                />
                <InputField
                    ref={(e) => { this.password = e; }}
                    label="Password"
                    type="password"
                    tabIndex="4"
                />
                <Button onClick={this.signupUser}>
                    Sign up
                </Button>
                <div className="mt-5 text-muted text-center">
                    Already have an account? <a href="" onClick={() => this.props.history.push('/login')}>Login</a>
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
    login: userId => dispatch(login(userId)),
});


export default connect(mapStateToProps, mapDispatchToProps)(Signup)