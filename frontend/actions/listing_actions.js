import * as APIUtil from '../util/listing_api_util'

export const RECEIVE_LISTING = 'RECEIVE_LISTING';

export const fetchListing = id => dispatch => (
  APIUtil.fetchListing(id).then(listing => (
    dispatch(receiveListing(listing))
  ))
)

export const createListing = listing => dispatch => (
  APIUtil.createListing(listing).then(listing => (
    dispatch(receiveListing(listing))
  ))
)
