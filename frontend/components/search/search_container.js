import { connect } from 'react-redux';

const mapStateToProps = state => ({
  listings: state.listings,
  filter: state.filters
});

const mapDispatchToProps = dispatch => ({
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
