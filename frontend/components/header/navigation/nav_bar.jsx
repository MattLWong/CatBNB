import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import LoginContainer from './login_container';
import SignupContainer from './signup_container';
import HostContainer from '../../host/host_container';

class HostRequiresLoggedIn extends React.Component {
  render() {
    return(
      <div className="host-requires-logged-in">
        <span className="host-requires-logged-in-span">
          You must be logged in to become a host
        </span>
      </div>
    )
  }
}
class Dropdown extends React.Component {
  doBoth() {
    this.props.toggleDropdown();
    this.props.logout();
  }
  render() {
    return(
      <div className='d-d-1'>
        <ul className="d-d-2">
          <li className='d-d-3'>
            <a className='d-d-4'>
              <div className='d-d-5'>
                <div className='d-d-6'>
                  <span>
                    {this.props.first_name}
                  </span>
                </div>
              </div>
            </a>
          </li>
          <li className='d-d-3'>
            <a className='d-d-4' onClick={() => this.doBoth()}>
              <div className='d-d-5'>
                <div className='d-d-6'>
                  <span>Log out</span>
                </div>
              </div>
            </a>
          </li>
        </ul>
      </div>
    )
  }
}

class NavBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      childVisible: false,
      loginVisible: false,
      signupVisible: false,
      hostVisible: false
    }
    this.toggleLogin = this.toggleLogin.bind(this);
    this.toggleSignup = this.toggleSignup.bind(this);
    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.toggleHost = this.toggleHost.bind(this);
  }

  toggleDropdown() {
    this.setState({childVisible: !this.state.childVisible});
  }

  renderListItems(){
    if (this.props.loggedIn) {
      return this.renderLoggedInItems()
    } else {
      return this.renderLoggedOutItems()
    }
  }

  toggleLogin(e) {
    if (e) {
      e.preventDefault();
    }
    this.setState({hostVisible: false});
    this.setState({loginVisible: !this.state.loginVisible});
  }

  toggleSignup(e) {
    if (e) {
      e.preventDefault();
    }
    this.setState({hostVisible: false});
    this.setState({signupVisible: !this.state.signupVisible});
  }

  toggleHost(e) {
    if (e) {
      e.preventDefault();
    }
    this.setState({hostVisible: !this.state.hostVisible});
  }

  renderLoggedOutItems() {
    return(
      <div className='logged-out-nav-3'>
        { this.state.loginVisible
          ? (<LoginContainer
              toggleLogin={this.toggleLogin}
              toggleSignup={this.toggleSignup}
              />)
          : null
        }
        { this.state.signupVisible
          ? (<SignupContainer
              toggleLogin={this.toggleLogin}
              toggleSignup={this.toggleSignup}/>)
          : null
        }
        { this.state.hostVisible
          ? <HostRequiresLoggedIn/>
          : null
        }
        <ul className="nav-ul">
          <li onClick={this.toggleHost}>
            <a>
              <div className="vertical-align-me">
                <div className='hover-me-grey'>
                  <span>Become a Host</span>
                </div>
              </div>
            </a>
          </li>
          <li onClick={this.toggleLogin}>
            <a id="loginBtn">
              <div className="vertical-align-me">
                <div className='hover-me-grey'>
                  <span>Log In</span>
                </div>
              </div>
            </a>
          </li>
          <li onClick={this.toggleSignup}>
            <a id="signupBtn">
              <div className="vertical-align-me">
                <div className='hover-me-grey'>
                  <span>Sign Up</span>
                </div>
              </div>
            </a>
          </li>
        </ul>
      </div>
    )
  }

  renderLoggedInItems() {
    return(
      <div className='nav-container-div'>
        { this.state.childVisible
          ? (<Dropdown
            toggleDropdown={this.toggleDropdown}
              first_name={this.props.first_name}
              logout={this.props.logout}/>)
          : null
        }
        { this.state.hostVisible
          ? <HostContainer
            toggleHost={this.toggleHost}/>
          : null
        }
        <ul className="nav-ul">
          <li onClick={this.toggleHost}>
            <a>
              <div className="vertical-align-me">
                <div className='hover-me-grey'>
                  <span>Host Your Spot</span>
                </div>
              </div>
            </a>
          </li>
          <li>
            <Link to='/trips'>
              <div className="vertical-align-me">
                <div className='hover-me-grey'>
                  <span>Trips</span>
                </div>
              </div>
            </Link>
          </li>
          <li>
            <Link to='/visitors'>
              <div className="vertical-align-me">
                <div className='hover-me-grey'>
                  <span>Visitors</span>
                </div>
              </div>
            </Link>
          </li>
          <li className="li-profile" onClick={() => this.toggleDropdown()}>
            <a id="profile-anchor">
              <div>
                <div className="vertical-align-me">
                  <div className="profile-pic-div">
                    <img id="profile-pic" src={this.props.profile_url}></img>
                  </div>
                </div>
              </div>
            </a>
          </li>
        </ul>
      </div>
    )
  }

  render() {
    return(
      <div className="nav-div-1">
        <nav className="nav-navigation">
          {this.renderListItems()}
        </nav>
      </div>
    )
  }
}

export default withRouter(NavBar);
