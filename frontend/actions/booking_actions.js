import * as APIUtil from '../util/booking_api_util';

export const RECEIVE_BOOKING = "RECEIVE_BOOKING";
export const RECEIVE_TRIPS = "RECEIVE_TRIPS";
export const RECEIVE_GUESTS = "RECEIVE_GUESTS";

export const createBooking = info => dispatch => {
  APIUtil.createBooking(info).then(
    res => dispatch(receiveBooking(res))
  )
}

export const fetchGuests = (host_id) => dispatch => {
  APIUtil.fetchBookings(host_id).then(
    res => dispatch(receiveGuests(res))
  )
}

export const fetchTrips = (guest_id) => dispatch => {
  APIUtil.fetchBookings(guest_id).then(
    res => dispatch(receiveTrips(res))
  )
}

export const receiveBooking = booking => ({
  type: RECEIVE_BOOKING,
  booking
})

export const receiveGuests = guests => ({
  type: RECEIVE_GUESTS,
  guests
})

export const receiveTrips = trips => ({
  type: RECEIVE_TRIPS,
  trips
})
