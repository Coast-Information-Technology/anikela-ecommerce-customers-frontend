import React from "react";
import MediaQuery from "react-responsive";
import { Link } from "react-router-dom";
import logo from "../../assets/resources/logo.svg";
import Icon from "../common/icon/Icon";

const SideNavToggle: React.FC = () => {
  const openSideNav = () => {
    alert("Hello! Your Side Nav will soon finish rendering....");
  };

  return (
    <div
      className="btn px-0"
      aria-expanded="false"
      aria-label="Toggle navigation"
      onClick={openSideNav}
    >
      <svg viewBox="-5 0 10 8" width="40" className="navbar-toggler-icon">
        <line
          y2="8"
          stroke="rgb(1, 2, 12)"
          strokeWidth="30"
          strokeDasharray="1 2"
        />
      </svg>
    </div>
  );
};

const NavBar: React.FC = () => {
  const noOfItemsInCart: number = 12;
  return (
    <nav className="navbar">
      <div className="container-lg">
        <MediaQuery maxDeviceWidth={1023}>
          <SideNavToggle />
        </MediaQuery>
        <Link to="/" className="">
          <img src={logo} alt="Anikela logo" className="logo" />
        </Link>
        <MediaQuery minDeviceWidth={1024}>
          <div className="navbar-nav flex-row flex-grow-1 justify-content-evenly">
            <Link to="products/women" className="nav-link">
              women
            </Link>
            <Link to="products/men" className="nav-link">
              men
            </Link>
          </div>
        </MediaQuery>

        <MediaQuery minDeviceWidth={576}>
          <div className="nav-util">
            <Link to="dashboard">
              <Icon icon="user" title="your account" className="" size={24} />
            </Link>
          </div>

          <div className="nav-util">
            <Link to="wishlist" className="">
              <Icon
                icon="wishlist"
                title="Your wishlist"
                className="nav-util__img"
                size={24}
              />
            </Link>
          </div>
        </MediaQuery>

        <div className="nav-util position-relative">
          <Link to="shopping-cart">
            <Icon
              icon="shopping-bag"
              title="your shopping cart"
              className="nav-util__img"
              size={24}
            />
          </Link>
          <span className="position-absolute btn top-0 start-100 translate-middle badge rounded-pill text-primary bg-secondary">
            {noOfItemsInCart.toString()}
            <span className="visually-hidden">items in cart</span>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
