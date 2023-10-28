import React from "react";
import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        
        <div className="col">
          <div className="title">About</div>
          <div className="text">
          Welcome to TechMart - Your one-stop-shop for the latest tech products! Explore our curated collection of cutting-edge gadgets and accessories, backed by expert guidance and top-notch customer service. Embrace innovation and convenience, as you discover tomorrow's technology today, at TechMart!
          </div>
        </div>
        
        <div className="col">
          <div className="title">LOCATION</div>
          <div className="c-item">
          <FaLocationArrow/>
          <div className="text">Bangalore- 390032</div>
          </div>
          <br/>
          <div className="title">PHONE</div>
          <div className="c-item">
          <FaMobileAlt/>
          <div className="text">+91 7285066693</div>
          </div>
          <br/>
          <div className="title">Email</div>
          <div className="c-item">
          <aEnvelope/>
          <div className="text">vedantdhamecha9525@gmail.com</div>
          </div>
        </div>
        
        
        <div className="col">
            <div className="title">
            <div className="title">Categories</div>
            <span className="text">Headphones</span>
            <span className="text">Smart Watches</span>
            <span className="text">Blutooth Speaker</span>
            <span className="text">Wireless Earburds</span>
            <span className="text">HomeTheatre</span>
            <span className="text">Projectors</span>
            </div>
        </div>

        <div className="col">
            <div className="title">
            <div className="title">Pages</div>
            <span className="text">Home</span>
            <span className="text">Privacy Policy</span>
            <span className="text">Returns </span>
            <span className="text">Term & Conditions</span>
            <span className="text">Contact Us</span>
            </div>
        </div>
     </div>
        <div className="bottom-bar">
            <div className="bottom-bar-content">
                <div className="text">
                    JSDEVSTORE 2023 CREATED BY VEDANT DHAMECHA PREMIUM E-COMMERCE SOLUTION
                </div>
                <img src={Payment}/>
            </div>
        </div>
    </footer>
  );
};



export default Footer;
