import React from 'react';
import Navbar from './Navbar'
import Counter from './Counter'
//import Login from '../containers/Login/Login_Container.js'
import Login from '../containers/Login';

class App extends React.Component{
  render(){

    return(
      <div>
        <Navbar />
        <Login />
      </div>
    );
  }
}

export default App
