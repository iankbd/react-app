import React from 'react';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
    this.handleEvent = this.handleEvent.bind(this);
  }

  handleEvent(e){
    switch (e.target.id){
      case "email":
      case "password":
        this.setState({
          [e.target.id]: e.target.value,
        });
        break;
      case "login":
        this.props.login(this.state.email, this.state.password);
        break;
      case "logout":
        this.props.logout();
      default:
        break;
    }
  }

  render(){
    let loginForm = null;
    if (!this.props["isLoggedIn"]){
      return(
          <div>
            <div>
              <label><b>Email:</b></label>
              <input id="email" type="text" placeholder="Enter Email" name = "uname" onChange={this.handleEvent} required />
            </div>
            <div>
              <label><b>Password: </b></label>
              <input id="password" type="password" placeholder="Enter Password" name = "psw" onChange={this.handleEvent} required />
            </div>
            <button id="login" onClick={this.handleEvent}>Submit</button>
          </div>
      );
    }
    else {
      return(
        <div>
          <button id="logout" onClick={this.handleEvent}>Logout</button>
        </div>
      );
    }
  }
}

export default Login
