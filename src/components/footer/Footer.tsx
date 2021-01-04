import React from "react";
import { Link } from "react-router-dom";
import Icon from "../common/icon/Icon";

// asset
import paypalImage from "../../assets/images/paypa-mini.png";
import aeImage from "../../assets/images/american-express-mini.png";
import visaImage from "../../assets/images/visa-mini.png";
import mcImage from "../../assets/images/mastercard-dark-mini.png";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-group-container">
        <div className="footer-group">
          <h4 className="footer-group-header">Need some Help</h4>
          <ul className="footer-group-links">
            <li className="footer-item">
              <Link className="footer-link" to="">
                Help
              </Link>
            </li>
            <li className="footer-item">
              <Link to="" className="footer-link">
                Track order
              </Link>
            </li>
            <li className="footer-item">
              <Link to="" className="footer-link">
                Delivery & Returns policies
              </Link>
            </li>
            <li className="footer-item">
              <Link to="" className="footer-link">
                Customer Service
              </Link>
            </li>
            <li className="footer-item">
              <Link to="" className="footer-link">
                FAQ
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer-group">
          <h4 className="footer-group-header">About Anikela</h4>
          <ul className="footer-group-links">
            <li className="footer-item">
              <Link to="" className="footer-link">
                About us
              </Link>
            </li>
            <li className="footer-item">
              <Link to="" className="footer-link">
                Careers at Anikela
              </Link>
            </li>
            <li className="footer-item">
              <Link to="" className="footer-link">
                Investors
              </Link>
            </li>
            <li className="footer-item">
              <Link to="" className="footer-link">
                Terms and Conditions
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer-group">
          <h4 className="footer-group-header">More to know</h4>
          <ul className="footer-group-links">
            <li className="footer-item">
              <Link to="" className="footer-link">
                Contact Us
              </Link>
            </li>
            <li className="footer-item">
              <Link to="" className="footer-link">
                Gift Vouchers
              </Link>
            </li>
            <li className="footer-item">
              <Link to="" className="footer-link">
                Anikela brands
              </Link>
            </li>
            <li className="footer-item">
              <Link to="" className="footer-link">
                Coupons
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer-group subscribe">
          <h4 className="footer-group-header">Sign up to our newsletter</h4>
          <p className="">
            get the first looks at new drops, events, sales & offers
          </p>
          <form className="footer-group__form" action="#">
            <input type="text" className="footer-input" />
            <button type="submit" className="footer-btn" value="subscribe">
              subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="footer-icons">
        <div className="footer-icons__social">
          <a href="https://www.facebook.com/" className="footer-icon facebook">
            <Icon
              icon="facebook"
              title="like us on facebook"
              fill="rgb(68,96,160)"
              viewBox="0 0 32 32"
              size={26}
            />
          </a>
          {/* <a className="social-icon instagram">
            <Icon
              icon="pinterest"
              title="like us on facebook"
              fill="rgb(68,96,160)"
              viewBox="0 0 32 32"
              size={26}
            />
          </a> */}
          <a className="footer-icon twitter">
            <Icon
              icon="twitter"
              title="follow us on twitter"
              fill="rgb(0,170,236)"
              viewBox="0 0 32 26.777"
              size={26}
            />
          </a>
          <a className="footer-icon pinterest">
            <Icon
              icon="pinterest"
              title="follow us on pinterest"
              fill="rgb(204,33,39)"
              viewBox="0 0 32 32"
              size={26}
            />
          </a>
        </div>
        <div className="footer-icons__payment">
          <img src={paypalImage} className="footer-icon--img paypal" />
          <img src={aeImage} className="footer-icon--img american-express" />
          <img src={visaImage} className="footer-icon--img visa" />
          <img src={mcImage} className="footer-icon--img mastercard" />
        </div>
      </div>
      <div className="legal">
        <p className="col copyright txt-primary">&copy;Copyright Anikela {}</p>

        <ul className="col legalities">
          <li className="links">
            <a href="">privacy</a>
          </li>
          <li className="links">
            <a href="">cookies policy</a>
          </li>
          <li className="links">
            <a href="">accessibility</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
