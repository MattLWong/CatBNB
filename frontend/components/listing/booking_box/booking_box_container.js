import { connect } from 'react-redux';
import BookingBox from './booking_box';
import { createBooking } from '../../../actions/booking_actions';

const mapDispatchToProps = dispatch => ({
  book: (info) => dispatch(createBooking(info))
})

export default connect(
  null,
  mapDispatchToProps
)(BookingBox)
