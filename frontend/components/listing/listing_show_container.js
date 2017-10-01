import { connect } from 'react-redux';
import { fetchListing } from '../../actions/listing_actions';
import { createReview } from '../../actions/listings_actions';
import { asListing } from '../../reducers/selectors';
import ListingShow from './listing_show';
import { createBooking } from '../../actions/booking_actions'
import {withRouter} from 'react-router-dom'

const mapStateToProps = (state, {match}) => {
  return({
    listingId: match.params.listingId,
    listing: state.listing[parseInt(match.params.listingId)],
    guestId: state.session.currentUser.id,
  })
}

const mapDispatchToProps = dispatch => ({
  fetchListing: (id) => dispatch(fetchListing(id)),
  bookListing: (info) => {
    dispatch(createBooking(info))
  },
  createReview: (review) => dispatch(createReview(review))
})

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ListingShow))
