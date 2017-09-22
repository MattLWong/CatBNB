import { connect } from 'react-redux';
import { fetchCities } from '../../../actions/cities_search_actions';
import { asArray } from '../../../reducers/selectors';
import SearchBar from './search_bar';

const mapStateToProps = state => {
  if (state.cities) {
    return {cities: asArray(state.cities)}
  } else {
    return {cities: []}
  }
};

const mapDispatchToProps = dispatch => ({
  search: (string) => dispatch(fetchCities(string))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar)
