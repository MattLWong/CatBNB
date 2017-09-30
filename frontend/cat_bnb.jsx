import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import Root from './components/root';


document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser, errors: [] } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  window.store = store;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});

import {fetchCities} from './actions/cities_search_actions';
window.fetchCities = fetchCities;
import { fetchListing } from './actions/listing_actions';
window.fetchListing = fetchListing;
import {fetchTopPicks} from './util/top_picks_util';
window.fetchTopPicks = fetchTopPicks;

// import { fetchGuests, fetchTrips, createBooking }
import {createBooking} from './util/booking_api_util'

window.createBooking = createBooking
