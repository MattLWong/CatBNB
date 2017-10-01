import merge from 'lodash/merge';

import {
  RECEIVE_LISTING,
} from '../actions/listing_actions';

import { RECEIVE_REVIEW } from '../actions/listings_actions';

const ListingReducer = (state = {}, action) => {
  Object.freeze(state)
  let newState = merge({}, state);

  switch(action.type) {
    case RECEIVE_LISTING:
      const newListing = {[action.listing.id]: action.listing};
      return newListing;
    case RECEIVE_REVIEW:
      newState[action.review.listing_id].reviews.push(action.review)
      return newState;
    default:
      return state;
  }
}

export default ListingReducer;
