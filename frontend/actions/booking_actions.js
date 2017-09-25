import * as APIUtil from '../util/booking_api_util';

export const RECEIVE_BOOKING = "RECEIVE_BOOKING";
export const RECEIVE_BOOKINGS = "RECEIVE_BOOKINGS";

export const createBooking = info => dispatch => {
  APIUtil.createBooking(info).then(
    res => dispatch(receiveBooking(res))
  )
}

export const fetchBookings = (user_id) => dispatch => {
  APIUtil.fetchBookings(user_id).then(
    res => dispatch(receiveBookings(res))
  )
}

export const receiveBooking = booking => ({
  type: RECEIVE_BOOKING,
  booking
})

export const receiveBookings = bookings => ({
  type: RECEIVE_BOOKINGS,
  bookings
})
