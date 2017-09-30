import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import CitiesReducer from './cities_reducer';
import FiltersReducer from './filters_reducer';
import ListingsReducer from './listings_reducer';
import ListingReducer from './listing_reducer';
import BookingsReducer from './bookings_reducer';
// import ListingsBooleanReducer from './listings_boolean_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  cities: CitiesReducer,
  filters: FiltersReducer,
  listing: ListingReducer,
  listings: ListingsReducer,
  bookings: BookingsReducer
  // listings_boolean: ListingsBooleanReducer
});

export default RootReducer;
