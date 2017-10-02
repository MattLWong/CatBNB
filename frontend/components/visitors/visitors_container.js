import { connect } from 'react-redux';
import Visitors from './visitors';
import {fetchGuests} from '../../actions/booking_actions';
import {asArray} from '../../reducers/selectors';

const mapStateToProps = (state) => ({
  currentUserId: state.session.currentUser.id,
  guests: asArray(state.bookings.guests),
  loggedIn: Boolean(state.session.currentUser)
})

const mapDispatchToProps = dispatch => ({
  fetchGuests: (id) => dispatch(fetchGuests(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Visitors)
