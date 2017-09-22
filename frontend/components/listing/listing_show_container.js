import { connect } from 'react-redux';
import {fetchListing} from '../../actions/listing_actions';
import ListingShow from './listing_show';

const mapStateToProps = (state, {match}) => {
  return({
    listingId: match.params.listingId,
    listing: state.listing
  })
}

const mapDispatchToProps = dispatch => ({
  fetchListing: (id) => dispatch(fetchListing(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListingShow)
