import merge from 'lodash/merge';

import { RECEIVE_BOOKING, RECEIVE_TRIPS, RECEIVE_GUESTS } from '../actions/booking_actions';

const nullState = Object.freeze({
  trips: {},
  guests: {}
})

const BookingsReducer = (state = nullState, action) => {
  Object.freeze(state)
  switch(action.type) {
    case RECEIVE_TRIPS:
      const trips = action.trips;
      return merge({}, state, {trips})
    case RECEIVE_GUESTS:
      const guests = action.guests;
      return merge({}, state, {guests})
    case RECEIVE_BOOKING:
      const booking = {[action.booking.id]: action.booking}
      const newtrips = merge({}, state.trips, booking)
      return merge({}, state, trips: newtrips)
    default:
      return state;
  }
}

export default BookingsReducer;
