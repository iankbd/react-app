import React from 'react'
import Login from './Login'
import Navbar from '../../interface/nav';

class Login_Container extends React.Component{
  constructor(){
    super();
    // this.state = {
    //   // default_email: "user@kbdgroup.ca",
    //   // default_password: "password",
    //   // isLoggedIn: false,
    //   // errorMsg: false,
    // };
    this.handlelogin = this.handlelogin.bind(this);
    this.handlelogout = this.handlelogout.bind(this);
    this.handlefieldchange = this.handlefieldchange.bind(this);
  }

  // handlelogin(email,psw){
  //   if (email === this.state.default_email && psw === this.state.default_password){
  //     this.setState({
  //       isLoggedIn: true,
  //       errorMsg: false,
  //     });
  //     this.props.loginSuccess();
  //   }
  //   else {
  //     this.setState({
  //       errorMsg: true,
  //     });
  //   }
  // }
  //
  // handlelogout(){
  //   this.setState({
  //     isLoggedIn: false,
  //     errorMsg: false,
  //   });
  // }
  // render() {
  //   let errorMsg = null;
  //   if (this.state.errorMsg){
  //     errorMsg = <span>Wrong combination of email and password</span>;
  //   }
  //   else {
  //     errorMsg = null;
  //   }
  //
  //   return (
  //     <div className="center">
  //       <label>default email:password is user@kbdgroup.ca:password</label>
  //       <Login isLoggedIn={this.state.isLoggedIn} login={this.handlelogin} logout={this.handlelogout}/>
  //       {errorMsg}
  //     </div>
  //   );
  // }

  handlelogin(){
    if (this.props.user.email === this.props.user.default_email && this.props.user.password === this.props.user.default_password){
      this.props.loginSuccess(); //this should be done in server
    }
    else {
      this.props.loginFail();
    }
  }

  handlelogout(){
    this.props.logout();
  }

  handlefieldchange(field, value){
    this.props.authFieldChange(field, value);
  }

  render(){
    let errorMsg = null;
    if (this.props.errorMsg){
      errorMsg = <span>Wrong combination of email and password</span>;
    }
    return (
      <div>
        <Navbar/>
        <div className="center">
          <label>default email:password is user@kbdgroup.ca:password</label>
          <Login isLoggedIn={this.props.isLoggedIn} login={this.handlelogin} logout={this.handlelogout} fieldchange={this.handlefieldchange}/>
          {errorMsg}
        </div>
      </div>
    );
  }
}

export default Login_Container
