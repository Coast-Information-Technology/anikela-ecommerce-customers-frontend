import React from "react";
import { Link } from "react-router-dom";
import Icon from "../common/icon/Icon";

// assets
import paypalImage from "../../assets/resources/paypal.svg";
import aeImage from "../../assets/resources/american express.svg";
import visaImage from "../../assets/resources/visa.svg";
import mcImage from "../../assets/resources/mastercard.svg";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content container">
        <div className="footer-group__container">
          <ul className="footer-group">
            <li className="footer-group__header">Need some help</li>
            <li className="footer-group__item">
              <Link to="" className="footer-group__link">
                help
              </Link>
            </li>
            <li className="footer-group__item">
              <Link to="" className="footer-group__link">
                track order
              </Link>
            </li>
            <li className="footer-group__item">
              <Link to="" className="footer-group__link">
                delivery and return policies
              </Link>
            </li>
            <li className="footer-group__item">
              <Link to="" className="footer-group__link">
                customer service
              </Link>
            </li>
            <li className="footer-group__item">
              <Link to="" className="footer-group__link">
                FAQ
              </Link>
            </li>
          </ul>
          <ul className="footer-group">
            <li className="footer-group__header">About Anikela</li>
            <li className="footer-group__item">
              <Link to="" className="footer-group__link">
                about us
              </Link>
            </li>
            <li className="footer-group__item">
              <Link to="" className="footer-group__link">
                careers at anikela
              </Link>
            </li>
            <li className="footer-group__item">
              <Link to="" className="footer-group__link">
                investors
              </Link>
            </li>
            <li className="footer-group__item">
              <Link to="" className="footer-group__link">
                terms and condition
              </Link>
            </li>
          </ul>
          <ul className="footer-group">
            <li className="footer-group__header">more to know</li>
            <li className="footer-group__item">
              <Link to="" className="footer-group__link">
                contact us
              </Link>
            </li>
            <li className="footer-group__item">
              <Link to="" className="footer-group__link">
                gift vouchers
              </Link>
            </li>
            <li className="footer-group__item">
              <Link to="" className="footer-group__link">
                anikela brands
              </Link>
            </li>
            <li className="footer-group__item">
              <Link to="" className="footer-group__link">
                coupons
              </Link>
            </li>
          </ul>
          <div className="footer-group">
            <div className="footer-group__header">
              sign up to our newsletter
            </div>
            <p className="footer-group__lead">
              get the first looks at new drops, events, sales & offers
            </p>
            <label htmlFor={"subscribe"} className="visually-hidden">
              Enter your email address
            </label>
            <input
              id="subscribe"
              type="email"
              className="footer-group__input"
            />
            <button type="submit" className="footer-group__submit">
              subscribe
            </button>
          </div>
        </div>
        <FooterIconSection />
        <FooterFootNote />
      </div>
    </footer>
  );
};

const FooterIconSection: React.FC = () => {
  return (
    <div className="footer-icons">
      <div className="footer-icons__social">
        <a href="https://www.facebook.com/" className="footer-icon facebook">
          <Icon
            icon="facebook"
            title="facebook"
            fill="rgb(68,96,160)"
            viewBox="0 0 32 32"
            size={18}
          />
        </a>
        <a href="https://www.instagram.com/" className="footer-icon instagram">
          <Icon
            icon="instagram"
            title="instagram"
            fill="rgb(221, 42, 123)"
            viewBox="0 0 169 169"
            size={18}
          />
        </a>
        <a href="https://www.twitter.com/" className="footer-icon twitter">
          <Icon
            icon="twitter"
            title="twitter"
            fill="rgb(0,170,236)"
            viewBox="0 0 32 26.777"
            size={18}
          />
        </a>
        <a href="https://www.pinterest.com/" className="footer-icon pinterest">
          <Icon
            icon="pinterest"
            title="pinterest"
            fill="rgb(204,33,39)"
            viewBox="0 0 32 32"
            size={18}
          />
        </a>
      </div>
      <div className="footer-icons__payment">
        <img
          src={paypalImage}
          alt="paypal"
          className="footer-icon__img paypal"
        />
        <img
          src={aeImage}
          alt="american-express"
          className="footer-icon__img american-express"
        />
        <img src={visaImage} alt="visa" className="footer-icon__img visa" />
        <img
          src={mcImage}
          alt="master-card"
          className="footer-icon__img mastercard"
        />
      </div>
    </div>
  );
};

const FooterFootNote: React.FC = () => {
  return (
    <div className="footer-footnote">
      <div className="footnote__copyright">
        &copy; Copyright Anikela {new Date().getFullYear()}
      </div>
      <div className="footnote__items">
        <Link to="/" className="footnote__item">
          privacy
        </Link>
        <Link to="/" className="footnote__item">
          cookies
        </Link>
        <Link to="/" className="footnote__item">
          accessibilty
        </Link>
      </div>
    </div>
  );
};

export default Footer;
