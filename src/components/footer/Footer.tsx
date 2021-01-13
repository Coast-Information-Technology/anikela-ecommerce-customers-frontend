import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <>
      <FooterCtaSection />
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
            <ul className="footer-group">
              <li className="footer-group__header">
                sign up to our newsletter
              </li>
              <p className="footer-group__lead">
                get the first looks at new drops,events,sales & offers
              </p>
              <label htmlFor={"subscribe"} className="visually-hidden">
                Enter your email address
              </label>
              <input
                id="subscribe"
                type="text"
                className="footer-group__input"
              />
              <button type="submit" className="footer-group__submit">
                subscribe
              </button>
            </ul>
          </div>
          <div className="footer-icons"></div>
          <FooterFootNote />
        </div>
      </footer>
    </>
  );
};

const FooterCtaSection: React.FC = () => {
  return (
    <div className="footer-cta">
      <div className="footer-cta-section container">
        <div role="button" className="footer-cta-section__btn">
          Shop the collection now
        </div>
        <div className="footer-cta-section__lead">
          Discounted prices you can trust. and some text for testing
        </div>
        <div role="button" className="footer-cta-section__btn">
          Shop the collection now
        </div>
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
        <span className="footnote__item">privacy</span>
        <span className="footnote__item">cookies</span>
        <span className="footnote__item">accessibilty</span>
      </div>
    </div>
  );
};

export default Footer;
