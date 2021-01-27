import React from "react";
import MediaQuery, { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import logo from "../../assets/resources/logo.svg";
import Icon from "../common/icon/Icon";
import SideNavToggle from "../common/mobile_nav/SideNavToggle";
import SearchBar, { SearchBarUtil } from "../common/search_bar/SearchBar";

const NavBar: React.FC = () => {
  const isTabletScreen = useMediaQuery({ query: "(max-width: 767px)" });
  const innerSpaceClass = isTabletScreen ? "flex-grow-1" : "";
  const noOfItemsInCart: number = 0;
  return (
    <nav className="navbar">
      <div className="container-lg">
        <MediaQuery maxDeviceWidth={1023}>
          <SideNavToggle />
        </MediaQuery>
        <Link to="/" className={innerSpaceClass}>
          <img src={logo} alt="Anikela logo" className="logo" />
        </Link>
        <MediaQuery minDeviceWidth={1024}>
          <div className="navbar-nav">
            <Link to="/products/women" className="navbar__link">
              women
            </Link>
            <Link to="/products/men" className="navbar__link">
              men
            </Link>
          </div>
        </MediaQuery>
        {isTabletScreen ? (
          <MediaQuery minDeviceWidth={375}>
            <SearchBarUtil />
          </MediaQuery>
        ) : (
          <SearchBar />
        )}

        <MediaQuery minDeviceWidth={375}>
          <div className="nav-util">
            <Link to="dashboard">
              <Icon icon="user" title="your account" className="" size={24} />
            </Link>
          </div>
        </MediaQuery>

        <MediaQuery minDeviceWidth={576}>
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
          <Link to="shopping-cart" className="position-relative">
            <Icon
              icon="shopping-bag"
              title="shopping cart"
              className="nav-util__img"
              size={24}
            />
            {noOfItemsInCart !== 0 ? (
              <span className="cart-notification-badge">
                {noOfItemsInCart.toString()}
                <span className="visually-hidden">items in cart</span>
              </span>
            ) : (
              <span className="visually-hidden">you have no items in cart</span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
