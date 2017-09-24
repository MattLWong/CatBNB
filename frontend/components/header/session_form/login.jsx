import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.login_default = this.login_default.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    var modal = document.getElementById('loginModal');
    modal.style.display = "none";
    this.props.login({user});
  }

  login_default(e) {
    e.preventDefault();
    var modal = document.getElementById('loginModal');
    modal.style.display = "none";
    this.props.login({user: {email: "guest@gmail.com", password: "password"}});
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="modal" id="loginModal">
        <div className="modal-content" id="modal-box">
          <span id="close-btn-1" className="close">&times;</span>
          <form onSubmit={this.handleSubmit} className="login-form-box">
            {this.renderErrors()}
            <div className="login-form">
              <br/>
              <label>Email:
                <input type="text"
                  value={this.state.email}
                  onChange={this.update('email')}
                  className="login-input"
                />
              </label>
              <br/>
              <label>Password:
                <input type="password"
                  value={this.state.password}
                  onChange={this.update('password')}
                  className="login-input"
                />
              </label>
              <br/>
              <input type="submit" value="Submit" />
              <button onClick={this.login_default}>Guest log in</button>
            </div>
          </form>
          <span id='signup-2'>Already have an account?</span>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
