import { connect } from 'react-redux';
import Trips from './trips';
import {fetchTrips} from '../../actions/booking_actions';
import {asArray} from '../../reducers/selectors';

const mapStateToProps = (state) => ({
  currentUserId: state.session.currentUser.id,
  trips: asArray(state.bookings.trips),
  loggedIn: Boolean(state.session.currentUser)
})

const mapDispatchToProps = dispatch => ({
  fetchTrips: (id) => dispatch(fetchTrips(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Trips);
