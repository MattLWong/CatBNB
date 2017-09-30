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
      let prevGuests = merge({}, state.guests);
      return {
        trips: action.trips,
        guests: prevGuests
      }
    case RECEIVE_GUESTS:
    let prevTrips = merge({}, state.trips)
      return {
        trips: prevTrips,
        guests: action.guests
      }
    case RECEIVE_BOOKING:
      const booking = {[action.booking.id]: action.booking};
      const newtrips = merge({}, state.trips, booking);
      const prevGuests2 = merge({}, state.guests);
      return {
        guests: prevGuests2,
        trips: newtrips
      }
    default:
      return state;
  }
}

export default BookingsReducer;
