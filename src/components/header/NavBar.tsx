import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/resources/logo.svg";
import Icon from "../common/icon/Icon";

const NavBar: React.FC = () => {
  const noOfItemsInCart: number = 12;
  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="Anikela logo" className="logo" />
        </Link>

        <div className="navbar-nav">
          <Link to="products/women" className="nav-link">
            women
          </Link>
          <Link to="products/men" className="nav-link">
            men
          </Link>
        </div>

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

        <div className="nav-util position-relative btn">
          <Link to="shopping-cart">
            <Icon
              icon="shopping-bag"
              title="your shopping cart"
              className="nav-util__img"
              size={24}
            />
          </Link>
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill text-primary bg-secondary">
            {noOfItemsInCart.toString()}
            <span className="visually-hidden">items in cart</span>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
