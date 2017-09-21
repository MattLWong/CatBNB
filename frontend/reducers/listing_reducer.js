import merge from 'lodash/merge';

import {
  RECEIVE_LISTING
} from '../actions/listings_actions';

const ListingReducer = (state = {}, action) => {
  Object.freeze(state)

  switch(action.type) {
    case RECEIVE_LISTING:
      const newListing = {[action.listing.id]: action.listing};
      return merge({}, newListing)
    default:
      return state;
  }
}

export default ListingReducer;
