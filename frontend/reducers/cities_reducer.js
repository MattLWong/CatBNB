import merge from 'lodash/merge';

import {
  RECEIVE_CITIES,
  RECEIVE_CITIES_ERRORS
} from '../actions/cities_search_actions';

const nullState = Object.freeze({
  cities: null,
  errors: []
})

const CitiesReducer = (state = nullState, action) => {
  Object.freeze(state)
  switch(action.type) {
    case RECEIVE_CITIES:
      const cities = action.cities;
      return merge({}, nullState, {cities});
    case RECEIVE_CITIES_ERRORS:
      const errors = action.errors;
      return merge({}, nullState, {errors});
    default:
      return state;
  }
};

export default CitiesReducer;
