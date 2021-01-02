import React from "react";
import { Link } from "react-router-dom";
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
    <nav className="main-nav navbar navbar-expand-lg navbar-light bg-light px-5 py-4">
      <Link to="/" className="navbar-brand">
        <img src={logo} alt="Anikela logo" className="logo" />
      </Link>
      <div className="navbar-nav main-nav__link-group me-3">
        <Link to="products/women" className="main-nav__link nav-link">
          women
        </Link>
        <Link to="products/men" className="main-nav__link nav-link">
          men
        </Link>
      </div>
      <form className="main-nav__search nav-item align-items-center">
        <input
          id="search"
          name="query"
          role="combobox"
          autoComplete="off"
          className="form-control search-box rounded-pill py-2"
          type="search"
          placeholder="Search for clothes, cosmetics or styles"
          aria-label="Search"
          aria-controls="search-results"
          aria-expanded="false"
          maxLength={150}
        />
        <button type="submit" className="search-btn rounded-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="currentColor"
            className="icon icon-search me-4"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
        </button>
      </form>
      <div className="nav-item main-nav__utilities d-flex justify-content-between align-items-center">
        <Link to="dashboard">
          <div className="nav-util d-flex ">
            <span className="nav-util__txt me-2 fs-6">Sign In</span>
            <span className="nav-util__img">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="icon icon-user-circle"
                viewBox="0 0 16 16"
              >
                <path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z" />
                <path
                  fill-rule="evenodd"
                  d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
                />
                <path
                  fill-rule="evenodd"
                  d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"
                />
              </svg>
            </span>
          </div>
        </Link>
        <Link to="wishlist">
          <div className="nav-item nav-util wishlist">
            <span className="nav-util__img">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="icon icon-wishlist"
                viewBox="0 0 16 16"
              >
                <path d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
              </svg>
            </span>
          </div>
        </Link>
        <Link to="shopping-cart">
          <div className="nav-item nav-util position-relative">
            <div className="notification position-absolute top-0 end-0 text-center bg-dark text-primary shadow rounded-circle">
              3
            </div>
            <span className="nav-util__img">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="icon icon-shopping-bag"
                viewBox="0 0 16 16"
              >
                <path d="M8 1a2 2 0 0 1 2 2v2H6V3a2 2 0 0 1 2-2zm3 4V3a3 3 0 1 0-6 0v2H3.361a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.356a2.5 2.5 0 0 0 2.472-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11zm-1 1v1.5a.5.5 0 0 0 1 0V6h1.639a.5.5 0 0 1 .494.426l1.028 6.851A1.5 1.5 0 0 1 12.678 15H3.322a1.5 1.5 0 0 1-1.483-1.723l1.028-6.851A.5.5 0 0 1 3.36 6H5v1.5a.5.5 0 0 0 1 0V6h4z" />
              </svg>
            </span>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
