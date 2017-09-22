import { connect } from 'react-redux';
import Search from './search';
import {updateFilter} from '../../actions/filter_actions';

import {asArray} from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  debugger;
  let queryString = ownProps.location.search;
  let lat = queryString
  return({
    listings: asArray(state.listings),
    filter: state.filters
  })
};

const mapDispatchToProps = dispatch => ({
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
