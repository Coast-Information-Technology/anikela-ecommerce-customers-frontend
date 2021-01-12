import React from "react";
// import { Link } from "react-router-dom";
// import Icon from "../../components/common/icon/Icon";
import Discount from "../../assets/images/discount.png";
import Video from "../../assets/video/showcase_video.mp4";

const Homepage = () => {
  return (
    <div>
      {/* <Header/> */}
      <HomeSecImage />
      <HomeSlogan />
      <PickSecBtn />
      <BannerSection />
      <ShopDisp />
    </div>
  );
};

const DiscountSection = () => {
  return (
    <div className="">
      <img src={Discount} alt="banner" className="discount_img" />
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
    <div className="image-banner">
      {/* <img src={Banner} alt="banner" className="imgBanner" /> */}
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
