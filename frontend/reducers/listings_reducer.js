import merge from 'lodash/merge';

import {
  RECEIVE_LISTINGS,
  RECEIVE_NEW_LISTING,
  RECEIVE_REVIEW
} from '../actions/listings_actions';

const ListingsReducer = (state = {}, action) => {
  Object.freeze(state)
  let newState = merge({}, state);
  switch(action.type) {
    case RECEIVE_LISTINGS:
      return action.listings;
    default:
      return state;
  }
}

export default ListingsReducer;
