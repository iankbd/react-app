import React from 'react';
import styles from './component.css';
import { DropdownButton, Navbar, NavItem, NavDropdown, Nav, MenuItem } from 'react-bootstrap';
/**
 * A counter button: tap the button to increase the count.
 */
class Nav_bar extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <div>
        <div className="navbar"> //top
          <div className="row-fluid">
            <div className="col-sm-4 col-md-2">
              <a href="http://localhost:3000/">
                <img className="img-circle"
                src = {"https://facebook.github.io/react/img/logo.svg"}/>
                React
              </a>
            </div>
            <div className="col-sm-3 col-md-2 col-centered"><a href="https://google.com">Docs</a></div>
            <div className="col-sm-3 col-md-2 col-centered"><a href="https://google.com">Tutorial</a></div>
            <div className="col-sm-3 col-md-2 col-centered"><a href="https://google.com">Community</a></div>
            <div className="col-sm-3 col-md-2 col-centered"><a href="https://google.com">Blog</a></div>
          </div>
        </div> //topend
        <div>
                <Navbar inverse collapseOnSelect>
                  <Navbar.Header>
                    <Navbar.Brand>
                      <a href="#">React-Bootstrap</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                  </Navbar.Header>
                  <Navbar.Collapse>
                    <Nav>
                      <NavItem eventKey={1} href="#">Link</NavItem>
                      <NavItem eventKey={2} href="#">Link</NavItem>
                      <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                        <MenuItem eventKey={3.1}>Action</MenuItem>
                        <MenuItem eventKey={3.2}>Another action</MenuItem>
                        <MenuItem eventKey={3.3}>Something else here</MenuItem>
                        <MenuItem divider />
                        <MenuItem eventKey={3.3}>Separated link</MenuItem>
                      </NavDropdown>
                    </Nav>
                    <Nav pullRight>
                      <NavItem eventKey={1} href="#">Link Right</NavItem>
                      <NavItem eventKey={2} href="#">Link Right</NavItem>
                    </Nav>
                  </Navbar.Collapse>
                </Navbar>
          </div>
      </div>




    );
  }
}
export default Nav_bar;
