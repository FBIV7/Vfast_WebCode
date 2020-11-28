import React from "react";
import "../Style.css";
const Footer =() => {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          <div className=" col-sm-4 col-md-3 ">
            <h4>
              <strong>Quick Links</strong>
            </h4>
            <h6 className="list-unstyled">
              <li className="footer-text">Rating & Review</li>
              <li className="footer-text">Career With Us</li>
              <li className="footer-text">Live Chat</li>
              <li className="footer-text">FAQ's</li>
              <li className="footer-text">FeedBack</li>
            </h6>
          </div>
          <div className=" col-sm-4 col-md-3">
            <h4>
              <strong>Terms & Policy</strong>
            </h4>
            <ul className="list-unstyled">
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className=" col-sm-4 col-md-3 ml-0">
            <h4>
              <strong>Social Links</strong>
            </h4>
            <ui className="list-unstyled ml-0 hover">
              <a
                className="text col ml-0"
                href="https://www.facebook.com/www.vfast.in/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <li>
                  <i class="fab fa-facebook-f "></i> &nbsp; FaceBook
                </li>
              </a>
              <a
                className="text col ml-0"
                href="https://www.instagram.com/vfast.in/?igshid=udh0i53a85ww"
                target="_blank"
                rel="noopener noreferrer"
              >
                <li>
                  <i class="fab fa-instagram"></i> &nbsp; Instagram
                </li>
              </a>

              <a
                className="text col ml-0"
                href="https://in.pinterest.com/pin/819444094682129972/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <li>
                  <i class="text fab fa-pinterest"></i> &nbsp; Pinterest
                </li>
              </a>
              <a
                className="text col ml-0"
                href="https://vfastverify.tumblr.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <li>
                  <i class="text fab fa-tumblr"></i> &nbsp; Tumblr
                </li>
              </a>
              <a
                className="text col ml-0"
                href="https://twitter.com/VFAST_IN"
                target="_blank"
                rel="noopener noreferrer"
              >
                <li>
                  <i class="text fab fa-twitter"></i> &nbsp; Twitter
                </li>
              </a>
              <a
                className="text col ml-0"
                href="https://www.linkedin.com/company/vfast"
                target="_blank"
                rel="noopener noreferrer"
              >
                <li>
                  <i class="text fab fa-linkedin"></i> &nbsp; Linkedin
                </li>
              </a>
            </ui>
          </div>
          <div className=" col-sm-4 col-md-3">
            <h4>
              <strong>Downloads</strong>
            </h4>
            <ui className="list-unstyled">
              <li>CF-V001</li>
              <li>Verfication Services</li>
            </ui>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col col-sm-3-sm">
            &copy;{new Date().getFullYear()} Vfast | All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
