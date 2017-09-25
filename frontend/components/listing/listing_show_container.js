import { connect } from 'react-redux';
import {fetchListing} from '../../actions/listing_actions';
import { asListing } from '../../reducers/selectors';
import ListingShow from './listing_show';

const mapStateToProps = (state, {match}) => {
  return({
    listingId: match.params.listingId,
    listing: state.listing[parseInt(match.params.listingId)]
  })
}

const mapDispatchToProps = dispatch => ({
  fetchListing: (id) => dispatch(fetchListing(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListingShow)
