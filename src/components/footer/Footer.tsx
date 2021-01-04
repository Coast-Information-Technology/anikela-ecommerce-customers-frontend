import React from "react";
import { Link } from "react-router-dom";
import Icon from "../common/icon/Icon";

// assets
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
          <a
            href="https://www.instagram.com/"
            className="footer-icon instagram"
          >
            <Icon
              icon="instagram"
              title="heart us on instagram"
              fill="rgb(221, 42, 123)"
              viewBox="0 0 169 169"
              size={26}
            />
          </a>
          <a href="https://www.twitter.com/" className="footer-icon twitter">
            <Icon
              icon="twitter"
              title="follow us on twitter"
              fill="rgb(0,170,236)"
              viewBox="0 0 32 26.777"
              size={26}
            />
          </a>
          <a
            href="https://www.pinterest.com/"
            className="footer-icon pinterest"
          >
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
          <img
            src={paypalImage}
            alt="paypal"
            className="footer-icon--img paypal"
          />
          <img
            src={aeImage}
            alt="american-express"
            className="footer-icon--img american-express"
          />
          <img src={visaImage} alt="visa" className="footer-icon--img visa" />
          <img
            src={mcImage}
            alt="master-card"
            className="footer-icon--img mastercard"
          />
        </div>
      </div>
      <div className="footnote">
        <p className="col footnote-copyright">
          &copy;Copyright Anikela {new Date().getFullYear()}
        </p>

        <ul className="col footnote-links">
          <li className="footnote-item">
            <Link to="" className="footnote-link">
              privacy
            </Link>
          </li>
          <li className="footnote-item">
            <Link to="" className="footnote-link">
              cookies policy
            </Link>
          </li>
          <li className="footnote-item">
            <Link to="" className="footnote-link">
              accessibility
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
