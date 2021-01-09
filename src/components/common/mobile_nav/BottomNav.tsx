import React from "react";
import { Link } from "react-router-dom";
import Icon from "../icon/Icon";

const BottomNav: React.FC = () => {
  return (
    <nav className="bottom-nav">
      <Link to="/" className="bottom-nav__btn">
        <Icon icon="shop" title="shop" size={18} className="bottom-nav__icon" />
        <span className="bottom-nav__text">shop</span>
      </Link>
      <Link to="/" className="bottom-nav__btn">
        <Icon
          icon="search"
          title="search"
          size={18}
          className="bottom-nav__icon"
        />
        <span className="bottom-nav__text">search</span>
      </Link>
      <Link to="/" className="bottom-nav__btn">
        <Icon
          icon="wishlist"
          title="wishlist"
          size={18}
          className="bottom-nav__icon"
        />
        <span className="bottom-nav__text">wishlist</span>
      </Link>
      <Link to="/" className="bottom-nav__btn">
        <Icon
          icon="user"
          title="account"
          size={18}
          className="bottom-nav__icon"
        />
        <span className="bottom-nav__text">account</span>
      </Link>
    </nav>
  );
};

export default BottomNav;
