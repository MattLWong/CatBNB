import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      first_name: '',
      last_name: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
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
    this.props.signup({user});

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
      <div className="modal" id="signupModal">
        <div className="modal-content">
          <span id="close-btn-2">&times;</span>
          <form onSubmit={this.handleSubmit} className="login-form-box">
            Welcome to CatBNB!
            <br/>
            {this.renderErrors()}
            <div className="login-form">
              <br/>
                <label>First name
                  <input type="text"
                    value={this.state.first_name}
                    onChange={this.update('first_name')}
                    className="login-input"
                  />
                </label>
                <br/>
                  <label>Last name
                    <input type="text"
                      value={this.state.last_name}
                      onChange={this.update('last_name')}
                      className="login-input"
                    />
                  </label>
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
            </div>
          </form>
          <span id='login-2'>Already have an account?</span>
        </div>
      </div>
    );
  }
}

export default withRouter(Signup);
