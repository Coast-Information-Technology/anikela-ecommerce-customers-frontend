import React from "react";
import { Link } from "react-router-dom";
import "./header.scss";
import logo from "../../assets/resources/logo.svg";

const Header = () => {
  return (
    <header className="header">
      <MiniNav />
      <MainNav />
    </header>
  );
};

const MiniNav = () => {
  return (
    <nav className="mini-nav d-flex justify-content-between bg-dark px-5 py-1">
      <span className="">
        <span className="text-primary">Location</span>
        {/* still requires a dropdown for site currency conversion */}
      </span>
      <span className="text-primary ">Care-line +09074348485</span>
    </nav>
  );
};

const MainNav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="navbar-brand">
        <img src={logo} alt="Anikela logo" />
      </div>
      <div className="navbar-nav main-nav__link-group">
        <Link to="products/women" className="nav-link active">
          women
        </Link>
        <Link to="products/men" className="nav-link">
          men
        </Link>
      </div>
    </nav>
  );
};

export default Header;
