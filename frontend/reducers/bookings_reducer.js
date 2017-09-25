import merge from 'lodash/merge';

import { RECEIVE_BOOKINGS, RECEIVE_BOOKING} from '../actions/booking_actions';

const nullState = Object.freeze({
  bookings: {},
  errors: []
})

const BookingsReducer = (state = nullState, action) => {
  Object.freeze(state)
  switch(action.type) {
    case RECEIVE_BOOKING:
      const booking = {[action.booking.id]: action.booking};
      const newBookings = merge({}, state.bookings, booking)
      return merge({}, state, {bookgs: newBookings});
    case RECEIVE_BOOKINGS:
      return merge({}, action.bookings);
    default:
      return state;
  }
}

export default BookingsReducer;
