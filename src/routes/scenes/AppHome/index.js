import React from 'react';
import Navbar from '../../interface/nav';
/**
 * A counter button: tap the button to increase the count.
 */
class AppHome extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        {this.props.children}
      </div>
    );
  }
}

export default AppHome;
