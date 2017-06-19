import React from 'react';
import Navbar from './Navbar'
import Counter from './Counter'
import Login from './Login'
import Login_Container from '../containers/Login_Container.js'

class App extends React.Component{
  render(){
    return(
      <div>
        <Navbar />
        <Login_Container />
      </div>
    );
  }
}

export default App
