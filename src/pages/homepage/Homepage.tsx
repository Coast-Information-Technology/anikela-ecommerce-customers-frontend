import React from "react";
// import { Link } from "react-router-dom";
// import Icon from "../../components/common/icon/Icon";
import Video from "../../assets/video/showcase_video.mp4";
import deliverytruckImage from "../../assets/resources/shipped.svg";
import favoriteImage from "../../assets/resources/star.svg";
import Welcome from "../../assets/images/welcomeimg.jpeg";
import Discount from "../../assets/images/discount_img.jpg";

const Homepage = () => {
  return (
    <div>
      <TopBanner />
      <HomeSecImage />
      <HomeSlogan />
      <PickSecBtn />
      <BannerSection />
      <ShopDisp />
    </div>
  );
};

const TopBanner = () => {
  return (
    <div className="homebanner">
      {/* <img src={Welcome} alt="favorite" className="welcomeImg" /> */}
      {/* <div className="welcome-txt_container">
      <p>Welcome to ANIKELA</p>
      </div> */}
      <div className="discount-container">
        <img src={Discount} alt="discount" className="discount_img" />
      </div>
    </div>
  );
};

const HomeSecImage = () => {
  return (
    <div className="imagewrapper">
      <div className="clip clip-image-left"></div>
      <div className="clip clip-image-right"></div>
    </div>
  );
};

const HomeSlogan = () => {
  return (
    <div className="slogan-container">
      <div className="slogan-wrapper">
        <span className="slogan-title">
          A<span className="text-color">N</span>IKELA
        </span>
        <br />
        <span className="slogan-description">
          unique style for fashion lovers
        </span>
      </div>
    </div>
  );
};

const PickSecBtn = () => {
  return (
    <div className="btn-selectcat">
      <button className="btn-woman">SHOP WOMEN</button>
      <button className="btn-man">SHOP MEN</button>
    </div>
  );
};

const BannerSection = () => {
  return (
    <div className="banner-section">
      <div className="sec sec_easydelivery">
        <div className="sec1">
          <img src={deliverytruckImage} alt="delivery" className="" />
          <div className="banner_txtcontainer">
            <p>Easy Door To Door Delivery</p>
          </div>
        </div>
      </div>
      <div className="sec sec_uniquedesigns">
        <div className="sec2">
          <img src={favoriteImage} alt="favorite" className="" />
          <div className="banner_txtcontainer">
            <p>Discover Unique Designs From Over 50 Brands</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const ShopDisp = () => {
  return (
    <div className="boxwrapper">
      <div className="videobox">
        <video src={Video} muted loop autoPlay></video>
      </div>
      <div className="videobox overlaybox">
        <div className="container video-content d-flex justify-content-between px-5">
          <div className="overlay-content-container">
            <span className="txt_quickhass text-white">
              Quick and hassle-free <br />
              shopping
            </span>
          </div>
          <button className="btn-shopnow">SHOP NOW</button>
        </div>
      </div>
    </div>
  );
};
export default Homepage;
