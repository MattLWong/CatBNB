import * as APIUtil from '../util/listings_api_util'

export const RECEIVE_LISTINGS = 'RECEIVE_LISTINGS';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';


export const receiveListings = listings => ({
  type: RECEIVE_LISTINGS,
  listings
});

export const receiveNewListing = listing => ({
  type: RECEIVE_NEW_LISTING,
  listing
});

export const receiveReview = review => ({
  type: RECEIVE_REVIEW,
  review
});

// We want to populating Listings with new listings
export const fetchListings = filters => dispatch => (
  APIUtil.fetchListings(filters).then(listings => (
    dispatch(receiveListings(listings))
  ))
)

export const createReview = review => dispatch => (
  APIUtil.createReview(review).then(review => (
    dispatch(receiveReview(review))
  ))
);
