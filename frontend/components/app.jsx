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

import Header from './header/header';

const App = () => (
  <div>
    <Header/>
    <Switch>
    </Switch>
  </div>
)

export default App;


// <img src="/assets/profile-listings/1.jpg"></img>
