import React from 'react';
import { Link } from 'react-router-dom';

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
      <ul>
        <li>
          <a>
            <div>
              <div>
                <span>Host</span>
              </div>
            </div>
          </a>
        </li>
        <li>
          <a>
            <div>
              <div>
                <span>About</span>
              </div>
            </div>
          </a>
        </li>
        <li>
          <Link to='/login'>
            <div>
              <div>
                <span>Log In</span>
              </div>
            </div>
          </Link>
        </li>
        <li>
          <Link to='/signup'>
            <div>
              <div>
                <span>Sign Up</span>
              </div>
            </div>
          </Link>
        </li>
      </ul>
    )
  }

  renderLoggedInItems() {
    return(
      <ul>
        <li>
          <a>
            <div>
              <div>
                <span>Host</span>
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
                <span>Messages</span>
              </div>
            </div>
          </a>
        </li>
        <li>
          <a>
            <div>
              <div>
                <span>About</span>
              </div>
            </div>
          </a>
        </li>
        <li>
          <a>
            <div>
              <div>
                <span>(Profile pic)</span>
                <img></img>
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

export default NavBar;
