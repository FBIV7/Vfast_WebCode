import React from "react";
import * as ReactBootStrap from "react-bootstrap";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "../Style.css";
const NavBar = () => {
  return (
    <Router>
      <div className="App">
        <ReactBootStrap.Navbar
          collapseOnSelect
          expand="xl"
          bg="#2c3b4c"
          variant="dark"
          fixed="top"
        >
          <ReactBootStrap.Navbar.Brand href="./">
            <img className="img" alt="logo" src="../assets/VFast-white.png" />
          </ReactBootStrap.Navbar.Brand>
          <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
            <ReactBootStrap.Nav className="mr-auto"></ReactBootStrap.Nav>
            <ReactBootStrap.Nav>
              <Link to="/">
                <ReactBootStrap.Nav.Link href="#features">
                  Home
                </ReactBootStrap.Nav.Link>
              </Link>

              <Link to="/about-us">
                <ReactBootStrap.Nav.Link href="#features">
                  About-Us
                </ReactBootStrap.Nav.Link>
              </Link>
              <Link to="/contact-us">
                <ReactBootStrap.Nav.Link href="#pricing">
                  Contact Us
                </ReactBootStrap.Nav.Link>
              </Link>

              <ReactBootStrap.NavDropdown
                title="My Account"
                id="collasible-nav-dropdown"
              >
                <ReactBootStrap.NavDropdown.Item href="./login">
                  Login
                </ReactBootStrap.NavDropdown.Item>

                <ReactBootStrap.NavDropdown.Item href="./signup">
                  Signup
                </ReactBootStrap.NavDropdown.Item>
              </ReactBootStrap.NavDropdown>
            </ReactBootStrap.Nav>
            <ReactBootStrap.Nav></ReactBootStrap.Nav>
          </ReactBootStrap.Navbar.Collapse>
        </ReactBootStrap.Navbar>
      </div>
    </Router>
  );
};

export default NavBar;
