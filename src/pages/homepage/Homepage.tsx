import React from "react";
// import { Link } from "react-router-dom";
// import Icon from "../../components/common/icon/Icon";
// import logo from "../../assets/resources/logo.svg";
import Image from "../../assets/images/home.png"
import Banner from "../../assets/images/bannerimg.png"
import Video from "../../assets/video/video.mp4"


const Homepage = () => {
    return(
        <body>
        {/* <Header/> */}
        <HomeSecImage/>
         <PickSecBtn />
         <BannerSection/>
         <ShopDisp/>
        </body>

    );
}

// const Header = () => {
//     return (
//       <header className="header">
//         <MiniNav />
//         <MainNav />
//       </header>
//     );
//   };
  
//   const MiniNav = () => {
//     return (
//       <nav className="mini-nav">
//         <span className="">
//           <span className="text-primary">Location</span>
//           {/* still requires a dropdown for site currency conversion */}
//         </span>
//         <span className="text-primary ">Care-line +09074348485</span>
//       </nav>
//     );
//   };
  
//   const MainNav = () => {
//     return (
//       <nav className="main-nav">
//         <Link to="/" className="navbar-brand">
//           <img src={logo} alt="Anikela logo" className="logo" />
//         </Link>
//         <div className="main-nav__link-group">
//           <Link to="products/women" className="main-nav__link">
//             women
//           </Link>
//           <Link to="products/men" className="main-nav__link">
//             men
//           </Link>
//         </div>
//         <form className="main-nav__search">
//           <input
//             id="search"
//             name="query"
//             role="combobox"
//             autoComplete="off"
//             className="form-control search-box rounded-pill py-2"
//             type="search"
//             placeholder="Search for clothes, cosmetics or styles"
//             aria-label="Search"
//             aria-controls="search-results"
//             aria-expanded="false"
//             maxLength={150}
//           />
//           <button type="submit" className="search-btn">
//             <Icon icon="search" title="Search" className="me-4" size={18} />
//           </button>
//         </form>
//         <div className="main-nav__utilities">
//           <Link to="dashboard">
//             <div className="nav-util d-flex ">
//               <span className="nav-util__txt">Sign In</span>
//               <span className="nav-util__img">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="24"
//                   height="24"
//                   fill="currentColor"
//                   className="icon icon-user-circle"
//                   viewBox="0 0 16 16"
//                 >
//                   <path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z" />
//                   <path
//                     fillRule="evenodd"
//                     d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
//                   />
//                   <path
//                     fillRule="evenodd"
//                     d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"
//                   />
//                 </svg>
//               </span>
//             </div>
//           </Link>
//           <Link to="wishlist">
//             <div className="nav-util">
//               <Icon
//                 icon="wishlist"
//                 title="Your wishlist"
//                 className="nav-util__img"
//                 size={24}
//               />
//             </div>
//           </Link>
//           <Link to="shopping-cart">
//             <div className="nav-util">
//               <div className="notification">3</div>
//               <Icon
//                 icon="shopping-bag"
//                 title="your shopping cart"
//                 className="nav-util__img"
//                 size={24}
//               />
//             </div>
//           </Link>
//         </div>
//       </nav>
//     );
//   };
  
  const HomeSecImage = () => {
    return (
      <div className="imagewrapper">
      <div className="clip clip1"></div>
      <div className="clip clip2"></div>
  </div>
    );
  };

  const PickSecBtn = () => {
    return (
        <div className="sectionBtn d-flex justify-content-between  px-5 py-1">
            <button className="shop_womenbtn"><span>SHOP WOMEN</span></button>
            <button className="shop_menbtn"><span>SHOP MEN</span></button>
        </div>
    );
  };

  const BannerSection = () => {
    return (
        <div className="">
               <img src={Banner} alt="img" className="imgBanner" />
        </div>
    );
  };

  const ShopDisp = () => {
    return (
      <div className="boxwrapper">

      <div className="videobox">
            <video src={Video} muted loop autoPlay>
           </video>
           </div>
           <div className="videobox overlaybox">
             <div className="container video-content d-flex justify-content-between px-5 py-3">
           <span className="">
                <span className="txt_quickhass text-white">Quick and hassle-free <br />shopping</span>
              </span>
              <button className="btn-shopnow">SHOP NOW</button>
           </div>
           </div>
           </div>
  );
  };
  export default Homepage;
  
  