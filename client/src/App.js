import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { Redirect } from 'react-router';
import { connect } from 'react-redux';

import Login from './pages/auth/login';
import Signup from './pages/auth/signup';
import Logout from './pages/auth/logout';

import { API } from './services';

import RequireAuth from './pages/auth/auth';
import Main from './pages/main/main';
import CreateCV from './pages/create/create';


import { login, updateAllResume } from './actions'
import { selectUserLoggedIn } from "./selectors";

import { createInstance } from './services';

import config from './config/config';

class App extends Component {
  constructor(props) {
    super(props);

    let token = window.localStorage.getItem("JWT");
    let email = window.localStorage.getItem("email");
    let firstname = window.localStorage.getItem("firstname");
    let lastname = window.localStorage.getItem("lastname");

    let user = {
      token,
      email,
      firstname,
      lastname
    }
    if (token)
      this.props.login(user)

  }

  componentDidMount() {
    let token = window.localStorage.getItem("JWT");

    let Authorization = {};
    if (token)
      Authorization = { Authorization: 'Bearer ' + token };
    const headers = { 'Content-Type': 'application/json', ...Authorization };
    createInstance({ baseURL: config.IP, headers });

    if(token){
      API.getAllResume().then((res)=>{
        let data = res.data;
        if(data.status === 'success') {
          console.log(data.data)
          this.props.updateAllResume(data.data);
        }
      })
    }
  }

  render() {
    return (
      <Router>
        <div className="App">
          {
            window.location.pathname === "/" && <Redirect from='/' to='/home' />
          }
          <Route exact path="/login" component={Login} />
          <Route exact path="/logout" component={Logout} />
          <Route exact path="/signup" component={Signup} />

          <Route path='/home' component={RequireAuth(Main)} />
          <Route path='/create' component={RequireAuth(CreateCV)} />
          <Route path='/select-theme' component={RequireAuth(Main)} />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  isLoggedIn: selectUserLoggedIn(state),
});

const mapDispatchToProps = dispatch => ({
  login: userId => dispatch(login(userId)),
  updateAllResume: data => dispatch(updateAllResume(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
