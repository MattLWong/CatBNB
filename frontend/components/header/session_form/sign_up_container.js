import { connect } from 'react-redux';

import { signup } from '../../../actions/session_actions';
import Signup from './sign_up';

const mapStateToProps = (state) => ({
  errors: state.session.errors,
  loggedIn: state.session.currentUser
})

const mapDispatchToProps = (dispatch, { location }) => ({
  signup: user => dispatch(signup(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup);
