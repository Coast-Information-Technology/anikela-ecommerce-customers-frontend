import React from "react";
import { Link } from "react-router-dom";
import Icon from "../icon/Icon";

const BottomNav: React.FC = () => {
  return (
    <nav className="bottom-nav">
      <Link to="/" className="bottom-nav__btn">
        <Icon icon="shop" title="shop" className="bottom-nav__icon" />
        <span className="bottom-nav__text">shop</span>
      </Link>
      <Link to="/" className="bottom-nav__btn">
        <Icon icon="search" title="search" className="bottom-nav__icon" />
        <span className="bottom-nav__text">search</span>
      </Link>
      <Link to="/" className="bottom-nav__btn">
        <Icon icon="wishlist" title="wishlist" className="bottom-nav__icon" />
        <span className="bottom-nav__text">wishlist</span>
      </Link>
      <Link to="/" className="bottom-nav__btn">
        <Icon icon="user" title="account" className="bottom-nav__icon" />
        <span className="bottom-nav__text">account</span>
      </Link>
    </nav>
  );
};

export default BottomNav;
