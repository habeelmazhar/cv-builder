import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { Redirect } from 'react-router';
import { connect } from 'react-redux';

import Login from './pages/auth/login';
import Signup from './pages/auth/signup';
import Logout from './pages/auth/logout';

import RequireAuth from './pages/auth/auth';
import Main from './pages/main/main';
import CreateCV from './pages/create/create';


import { login } from './actions'
import { selectUserLoggedIn } from "./selectors";

import { createInstance } from './services';

import config from './config/config';

class App extends Component {
  constructor(props) {
    super(props);

    let jwt = window.localStorage.getItem("JWT");
    
    if (jwt)
      this.props.login(jwt)
    
  }
  
  componentDidMount() {
    const headers = { 'Content-Type': 'application/json' };
    createInstance({ baseURL: config.IP, headers });
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
  login: userId => dispatch(login(userId))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
