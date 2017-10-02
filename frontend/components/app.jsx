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
import TripsContainer from './trips/trips_container';
import VisitorsContainer from './visitors/visitors_container';
import Footer from './home/footer';

const App = () => (
  <div>
    <Header/>
    <main id="site-content">
      <Route exact path="/" component={HomeContainer} />
      <Route path="/search" component={SearchContainer} />
      <Route path="/listings/:listingId" component={ListingShowContainer} />
      <ProtectedRoute path="/trips" component={TripsContainer} />
      <ProtectedRoute path='/visitors' component={VisitorsContainer} />
    </main>
    <Footer/>
  </div>
)

export default App;
