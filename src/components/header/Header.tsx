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
    <nav className="main-nav navbar navbar-expand-lg navbar-light bg-light px-5">
      <div className="navbar-brand">
        <img src={logo} alt="Anikela logo" className="logo" />
      </div>
      <div className="navbar-nav main-nav__link-group ">
        <Link to="products/women" className="main-nav__link nav-link active">
          women
        </Link>
        <Link to="products/men" className="main-nav__link nav-link">
          men
        </Link>
      </div>
      <form className="main-nav__search">
        <input
          className="form-control search-box rounded-pill"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="main-nav__search icon search-icon me-3"
          viewBox="0 0 16 16"
        >
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
        </svg>
      </form>
    </nav>
  );
};

export default Header;
