import React from 'react';

import Logo from './logo/logo';
import SearchBar from './search_bar/search_bar_container';
import NavBar from './navigation/nav_bar_container';
import Login from './session_form/login_container';
import Signup from './session_form/sign_up_container';

import { AuthRoute } from '../../util/route_util.jsx';

const Header = () => (
  <header className="header">
    <div className="has-border-bottom-219">
      <div className="display-table">
        <Logo/>
        <SearchBar/>
        <NavBar/>
        <AuthRoute path="/login" component={Login} />
        <AuthRoute path="/signup" component={Signup} />
      </div>
    </div>
  </header>
)

export default Header;
