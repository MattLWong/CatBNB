import  {DID_NOT_RECEIVE_LISTINGS, DID_RECEIVE_LISTINGS} from '../actions/listings_actions';

import merge from 'lodash/merge';

const ListingsBooleanReducer = (state = false, action) => {
  Object.freeze(state);
  switch(action.type) {
    case DID_NOT_RECEIVE_LISTINGS:
    console.log("BOOLEAN:: return false");
      debugger;
     return false;
    case DID_RECEIVE_LISTINGS:
    console.log("BOOLEAN:: return true");
      debugger;
      return true;
    default:
      return true;
  }
}

export default ListingsBooleanReducer;
