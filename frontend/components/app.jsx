import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import {AuthRoute, ProtectedRoute} from '../util/route_util';

import GreetingContainer from './greeting/greeting_container';
import LoginContainer from './session_form/login_container';
import SignUpContainer from './session_form/sign_up_container';

const App = () => (
  <div>
    <header>
      <Link to="/" className="header-link">
        <h1>Catbnb</h1>
      </Link>
      <GreetingContainer/>
    </header>
    <Switch>
      <AuthRoute path="/login" component={LoginContainer} />
      <AuthRoute path="/signup" component={SignUpContainer} />
    </Switch>
  </div>
)

export default App;


// <img src="/assets/profile-listings/1.jpg"></img>
