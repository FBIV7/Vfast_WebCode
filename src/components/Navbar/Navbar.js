import React, { Component } from "react";
import { Link, BrowserRouter } from "react-router-dom";
import "../Style.css";

class Navbar extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <nav class="navbar navbar-expand-lg">
            <Link class="navbar-brand" to="/">
              <img className="img" alt="logo" src="../assets/VFast-white.png" />
            </Link>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarTogglerDemo02"
              aria-controls="navbarTogglerDemo02"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul class="navbar-nav ml-auto">
                <li class="nav-item active">
                  <Link class="nav-link" to="/">
                    Home <span class="sr-only">(current)</span>
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/about-us">
                    About Us
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/contact-us">
                    Contact Us
                  </Link>
                </li>
                <li class="nav-item dropdown">
                  <Link
                    class="nav-link dropdown-toggle"
                    to="/"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    My Account
                  </Link>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <Link class="dropdown-item" to="/login">
                      Login
                    </Link>
                    <Link class="dropdown-item" href="/signup">
                      Signup
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
        </BrowserRouter>
      </div>
    );
  }
}

export default Navbar;
