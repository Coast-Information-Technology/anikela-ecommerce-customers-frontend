import React from "react";
import { Link } from "react-router-dom";
import MediaQuery from "react-responsive";
import MegaMenu from "../../components/header/MegaMenu";
// import { SubNavBar } from "../../components/header/";

const CTApage = () => {
  return (
    <div>
         <MediaQuery minDeviceWidth={1024}>
        <MegaMenu />
      </MediaQuery>
      <MainSection />
      <ContentSection />
      <AccessoriesSection />
      <QuickAccess />
      <SignUp_Newsletter />
    </div>
  );
};

const MainSection = () => {
  return (
    <div className="hero_section">
      <h1>Shop By Designer</h1>
      <p>a passion for fashion. say it with style</p>
      <button className="hero_discover-btn">Discover Now</button>
    </div>
  );
};
const ContentSection = () => {
  return (
    <div className="section-content">
      <div className="one">
        <div className="clothing-content">
          <p>Clothing</p>
          <span>Dress & coat collection</span>
        </div>
      </div>
      <div className="two makeup_container">
        <div className="makeup_dets">
          <p>Recommended for you</p>
          <span>Women's Make Up</span>
          <br />
          <button className="hero_discover-btn">Shop Now</button>
        </div>
        <div className="makeup-img"></div>
      </div>
      <div className="three">
        <div className="shoes-content">
          <p>shop by</p>
          <span>Shoes and heels</span>
        </div>
      </div>
      <div className="four">
        <div className="purse-content">
          <p>shop by</p>
          <span>Purse</span>
        </div>
        <div className="purse-section"></div>
      </div>
    </div>
  );
};
const AccessoriesSection = () => {
  return (
    <div className="accessories-container">
      <div className="accessories-content">
        <span className="content-lead">hat-handbag-shoes-cosmetics</span>
        <br />
        <span className="lead">Accessories for Her</span>
        <p>
          Spice up your specialone style with accessories from brands that don't
          fail <br />
          to accentuate beauty
        </p>
        <button className="hero_discover-btn">Shop Now</button>
      </div>
    </div>
  );
};

const QuickAccess = () => {
  return (
    <div className="access-container">
      <p>Step Inside our world</p>
      <div className="accContent-container">
        <div className="edit-pack">
          <p>AW20 Editor's Pack</p>
        </div>
        <div className="modern-looks">
          <p>Modern Looks</p>
        </div>
        <div className="shop-sale">
          <span>SALE</span>
          <p>Shop Sale</p>
        </div>
        <div className="social-access">
          <p>Follow us on Instagram</p>
        </div>
      </div>
    </div>
  );
};

const SignUp_Newsletter = () => {
  return (
    <div className="newsletter-container">
      <div className="newsletter-content">
        <p className="hero_lead">
          Sign up and get <span className="percentage_lead">30%</span> discount on <br/>next order
        </p>
        <div className="inputbox_container">
        <label htmlFor={"subscribe"} className="visually-hidden">
          Enter your email address
        </label>
        <input
          id="subscribe"
          type="email"
          className="search_inputbox"
          placeholder="Enter your email......"
        />
        <button type="submit" className="">
          subscribe
        </button>
        </div>
      </div>
    </div>
  );
};

export default CTApage;
