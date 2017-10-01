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
    this.doBoth = this.doBoth.bind(this);
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
    this.props.toggleSignup();
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

  doBoth() {
    this.props.toggleSignup();
    this.props.toggleLogin();
  }

  render() {

    return (
      <div className="modal" id="signupModal">
        <div className="modal-content" id="modal-box">
          <span className='modal-title'>Sign Up</span>
          <span
            id="close-btn-2"
            className="close"
            onClick={this.props.toggleSignup}>&times;</span>
          <form onSubmit={this.handleSubmit} className="form-box">
            {this.renderErrors()}
            <div className="login-form">
                  <input type="text"
                    value={this.state.first_name}
                    onChange={this.update('first_name')}
                    className="user-input-1"
                    placeholder="First name"
                  />
                <br/>

                    <input type="text"
                      value={this.state.last_name}
                      onChange={this.update('last_name')}
                      className="user-input-1"
                      placeholder="Last name"
                    />
                  <br/>
                      <input type="text"
                        value={this.state.email}
                        onChange={this.update('email')}
                        className="user-input-1"
                        placeholder="Email address"
                      />
                    <br/>
                <input type="password"
                  value={this.state.password}
                  onChange={this.update('password')}
                  className="user-input-1"
                  placeholder="Password"
                />
              <br/>
              <button onClick={this.handleSubmit}>Sign up!</button>
            </div>
          </form>
          <span
            className="cursor"
            onClick={this.doBoth}>Already have an account? <span className='bold'>Log in!</span></span>
        </div>
      </div>
    );
  }
}

export default withRouter(Signup);
