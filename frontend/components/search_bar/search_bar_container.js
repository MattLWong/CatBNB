import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import { asArray } from '../reducers/selectors';
import SearchBar from './search_bar';

const mapStateToProps = state => ({
  cities: asArray(state)
})
