import { connect } from 'react-redux';
import Home from './home';
import {justUpdateFilter} from '../../actions/filter_actions';

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
  updateFilter: (filter, value) => dispatch(justUpdateFilter(filter, value))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
