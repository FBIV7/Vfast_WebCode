import React from "react";
import "../Style.css";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* col col-sm-3umn1 */}
          <div className=" col-sm-4 col-md-3 ">
            <h5>
              <strong>Quick Links</strong>
            </h5>
            <h6 className="list-unstyled">
              <li>Rating & Review</li>
              <li>Career With Us</li>
              <li>Live Chat</li>
              <li>FAQ's</li>
              <li>FeedBack</li>
            </h6>
          </div>
          {/* col col-sm-3umn2 */}
          <div className=" col-sm-4 col-md-3">
            <h5>
              <strong>Terms & Policy</strong>
            </h5>
            <ul className="list-unstyled">
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          {/* col col-sm-3umn3 */}
          <div className=" col-sm-4 col-md-3">
            <h4>
              <strong>Social Links</strong>
            </h4>
            <ui className="list-unstyled">
              <li>
                <i class="fab fa-facebook-f "></i> &nbsp; FaceBook
              </li>
              <li>
                {" "}
                <i class="fab fa-instagram"></i> &nbsp; Instagram
              </li>
              <li>
                {" "}
                <i class="fab fa-pinterest"></i> &nbsp; Pinterest
              </li>
              <li>
                <i class="fab fa-tumblr"></i> &nbsp; Tumblr
              </li>
              <li>
                <i class="fab fa-twitter"></i> &nbsp; Twitter
              </li>
              <li>
                <i class="fab fa-linkedin"></i> &nbsp; Linkedin
              </li>
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
