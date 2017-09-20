import * as APIUtil from '../util/city_api_util'

export const RECEIVE_CITIES = 'RECEIVE_CITIES';
export const RECEIVE_CITIES_ERRORS = 'RECEIVE_CITIES_ERRORS';

export const receiveCities = cities => ({
  type: RECEIVE_CITIES,
  cities
});

export const receiveCitiesErrors = errors => ({
  type: RECEIVE_CITIES_ERRORS,
  errors
})

export const fetchCities = searchString => dispatch => (
  APIUtil.fetchCities(searchString).then(cities => (
    dispatch(receiveCities(cities))
  ), err => (
    dispatch(receiveCitiesErrors(err.responseJSON))
  ))
);
