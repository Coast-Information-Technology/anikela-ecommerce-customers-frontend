import React from "react";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <header className="header">
      <MiniNav />
      <NavBar />
    </header>
  );
};

const MiniNav: React.FC = () => {
  return (
    <nav className="mini-nav">
      <span className="mini-nav__location">
        <span className="location-dropdown__text">Location</span>
      </span>
      <span className="text-primary ">Care-line +09074348485</span>
    </nav>
  );
};

export default Header;
