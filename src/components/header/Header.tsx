import React from "react";
import "./header.scss";

const Header = () => {
  return (
    <header className="header">
      <MiniNav />
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

export default Header;
