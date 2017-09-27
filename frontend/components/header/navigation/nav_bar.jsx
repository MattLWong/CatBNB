import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props) {
    super(props)
  }

  renderListItems(){
    if (this.props.loggedIn) {
      return this.renderLoggedInItems()
    } else {
      return this.renderLoggedOutItems()
    }
  }

  renderLoggedOutItems() {
    return(
      <ul className="nav-ul">
        <li>
          <a>
            <div>
              <div>
                <span>Become a Host</span>
              </div>
            </div>
          </a>
        </li>
        <li>
          <a id="loginBtn">
            <div>
              <div>
                <span>Log In</span>
              </div>
            </div>
          </a>
        </li>
        <li>
          <a id="signupBtn">
            <div>
              <div>
                <span>Sign Up</span>
              </div>
            </div>
          </a>
        </li>
      </ul>
    )
  }

  renderLoggedInItems() {
    return(
      <ul className="nav-ul">
        <li>
          <a>
            <div>
              <div>
                <span>Host Your Spot</span>
              </div>
            </div>
          </a>
        </li>
        <li>
          <a>
            <div>
              <div>
                <span>Trips</span>
              </div>
            </div>
          </a>
        </li>
        <li>
          <a>
            <div>
              <div>
                <span>Visitors</span>
              </div>
            </div>
          </a>
        </li>
        <li>
          <a>
            <div>
              <div>
                <span>{this.props.first_name}</span>
              </div>
            </div>
          </a>
        </li>
        <li className="li-profile">
          <a id="profile-anchor">
            <div>
              <div>
                <div className="profile-pic-div">
                  <img id="profile-pic" src={this.props.profile_url}></img>
                </div>
              </div>
            </div>
          </a>
        </li>
      </ul>
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
