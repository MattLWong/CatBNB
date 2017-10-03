import { connect } from 'react-redux';
import Host from './host'
import {createListing} from '../../actions/listing_actions';

const mapStateToProps = (state, ownProps) => ({
  host_id: state.session.currentUser.id,
  listing_id: Object.keys(state.listing)[0]
})

const mapDispatchToProps = dispatch => ({
  createListing: (info) => dispatch(createListing(info))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Host)
