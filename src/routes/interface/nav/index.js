import React from 'react';
import {Link} from 'react-router';

/**
 * A counter button: tap the button to increase the count.
 */
class Navbar extends React.Component {
  render() {
    return (
      <div>
        <div className="navbar01">
          <div className="row-fluid">
            <div className="col-sm-4 col-md-2">
              <a href="http://localhost:3000/">
                <img className="img-circle"
                src = {"https://facebook.github.io/react/img/logo.svg"}/>
                React
              </a>
            </div>
            <div className="col-sm-3 col-md-2 col-centered"><Link to="docs">Docs</Link></div>
            <div className="col-sm-3 col-md-2 col-centered"><Link to="/tutorial">Tutorial</Link></div>
            <div className="col-sm-3 col-md-2 col-centered"><a href="http://localhost:3000/">Community</a></div>
            <div className="col-sm-3 col-md-2 col-centered"><a href="http://localhost:3000/">Blog</a></div>
          </div>
        </div>
      </div>
    );
  }
}
export default Navbar;
