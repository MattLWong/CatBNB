import { connect } from 'react-redux';
import { login, signup, logout} from '../../../actions/session_actions';
import NavBar from './nav_bar';

const mapStateToProps = state => ({
  loggedIn: Boolean(state.session.currentUser),
  profile_url: state.session.currentUser.image_url
})

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(login(user)),
  logout: () => dispatch(logout()),
  signup: user => dispatch(signup(user))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar)
