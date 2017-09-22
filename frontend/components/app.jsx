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
import HomeContainer from './home/home_container';
import SearchContainer from './search/search_container';
import ListingShowContainer from './listing/listing_show_container';

const App = () => (
  <div>
    <Header/>
    <main id="site-content">
      <Route exact path="/" component={HomeContainer} />
      <Route path="/search" component={SearchContainer} />
      <Route path="/listings/:listingId" component={ListingShowContainer} />
    </main>
    <div className="footer">

    </div>
  </div>
)

export default App;


// <img src="/assets/profile-listings/1.jpg"></img>
