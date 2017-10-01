import React from 'react';

import Logo from './logo/logo';
import SearchBar from './search_bar/search_bar_container';
import NavContainer from './navigation/nav_bar_container';

import { AuthRoute } from '../../util/route_util.jsx';

const Header = () => (
  <header className="header">
    <div className="has-border-bottom-219">
      <div className="display-table">
        <Logo/>
        <SearchBar/>
        <NavContainer/>
      </div>
    </div>

  </header>
)

export default Header;
