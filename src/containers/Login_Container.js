import React from 'react'
import Login from '../components/Login'

class Login_Container extends React.Component{
  constructor(){
    super();
    this.state = {
      default_email: "user@kbdgroup.ca",
      default_password: "password",
      isLoggedIn: false,
      errorMsg: false,
    };
    this.handlelogin = this.handlelogin.bind(this);
    this.handlelogout = this.handlelogout.bind(this);
  }

  handlelogin(email,psw){
    if (email === this.state.default_email && psw === this.state.default_password){
      this.setState({
        isLoggedIn: true,
        errorMsg: false,
      });
    }
    else {
      this.setState({
        errorMsg: true,
      });
    }
  }

  handlelogout(){
    this.setState({
      isLoggedIn: false,
      errorMsg: false,
    });
  }

  render() {
    let errorMsg = null;
    if (this.state.errorMsg){
      errorMsg = <span>Wrong combination of email and password</span>;
    }
    else {
      errorMsg = null;
    }

    return (
      <div className="center">
        <label>default email:password is user@kbdgroup.ca:password</label>
        <Login isLoggedIn={this.state.isLoggedIn} login={this.handlelogin} logout={this.handlelogout}/>
        {errorMsg}
      </div>
    );
  }

}

export default Login_Container
