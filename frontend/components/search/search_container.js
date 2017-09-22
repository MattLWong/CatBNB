import { connect } from 'react-redux';
import Search from './search';
import {updateFilter} from '../../actions/filter_actions';

import {asArray} from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  let queryString = ownProps.location.search;
  let arr = ownProps.location.search.split('&')
  let lat = arr[0].slice(5);
  let lng = arr[1].slice(4);
  return({
    listings: asArray(state.listings),
    filter: state.filters,
    lat,
    lng,
    minPrice: state.filters.minPrice,
    maxPrice: state.filters.maxPrice,
    minBeds: state.filters.minBeds
  })
};

const mapDispatchToProps = dispatch => ({
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
