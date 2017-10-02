import { connect } from 'react-redux';
import Host from './host'
import {createListing} from '../../actions/listing_actions';

const mapStateToProps = (state, ownProps) => ({
})

const mapDispatchToProps = dispatch => ({
  createListing: (info) => dispatch(createListing(info))
})

export default connect(
  null,
  mapDispatchToProps
)(Host)
