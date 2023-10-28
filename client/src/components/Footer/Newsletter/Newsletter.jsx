import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

import "./Newsletter.scss";
const Newsletter = () => {
  return (
    <div className="newsletter-section">
      <div className="newsletter-content">
        <span className="small-text">Newsletter</span>
        <span className="big-text">Sign up for latest updates & offers</span>
        <div className="form">
          <input type="text" placeholder="Email Address" />
          <button>Subscribe</button>
        </div>
        <div className="text">
          Will be used in Accordance with our privacy policy
        </div>
        <div className="social-icons">
          <a href="https://www.facebook.com/vedant.dhamecha.9/">
            <div className="icon">
              <FaFacebookF size={14} />
            </div>
          </a>
          <a href="https://twitter.com/vedant_9525">
            <div className="icon">
              <FaTwitter size={14} />
            </div>
          </a>
          <a href="https://www.instagram.com/vedant_dhamecha/">
            <div className="icon">
              <FaInstagram size={14} />
            </div>
          </a>
          <a href="https://www.linkedin.com/in/vedantdhamecha/">
            <div className="icon">
              <FaLinkedinIn size={14} />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
