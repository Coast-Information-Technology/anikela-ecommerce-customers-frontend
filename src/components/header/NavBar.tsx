import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/resources/logo.svg";
import Icon from "../common/icon/Icon";

const NavBar: React.FC = () => {
  return (
    <nav className="main-nav">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="Anikela logo" className="logo" />
        </Link>
        <div className="main-nav__link-group">
          <Link to="products/women" className="main-nav__link">
            women
          </Link>
          <Link to="products/men" className="main-nav__link">
            men
          </Link>
        </div>
        <div className="main-nav__utilities">
          <Link to="dashboard">
            <div className="nav-util d-flex ">
              <span className="nav-util__txt">Sign In</span>
              <span className="nav-util__img">
                <Icon
                  icon="user"
                  title="your account"
                  className="nav-util__img"
                  size={24}
                />
              </span>
            </div>
          </Link>
          <Link to="wishlist" className="">
            <div className="nav-util">
              <Icon
                icon="wishlist"
                title="Your wishlist"
                className="nav-util__img"
                size={24}
              />
            </div>
          </Link>
          <Link to="shopping-cart">
            <div className="nav-util">
              <div className="notification">3</div>
              <Icon
                icon="shopping-bag"
                title="your shopping cart"
                className="nav-util__img"
                size={24}
              />
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
