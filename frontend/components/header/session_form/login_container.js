import { connect } from 'react-redux';
import { login } from '../../../actions/session_actions';
import Login from './login';

const mapStateToProps = (state) => ({
  errors: state.session.errors,
  loggedIn: state.session.currentUser
})

const mapDispatchToProps = (dispatch, { location }) => ({
  login: user => dispatch(login(user)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
