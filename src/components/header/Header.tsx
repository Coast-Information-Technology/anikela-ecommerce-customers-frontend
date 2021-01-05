import React, { SyntheticEvent, useState } from "react";
import { Link } from "react-router-dom";
import Icon from "../common/icon/Icon";
import logo from "../../assets/resources/logo.svg";
import { log } from "console";

const Header = () => {
  return (
    <header className="header">
      <MiniNav />
      <MainNav />
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

const MainNav = () => {
  return <nav></nav>;
};

export default Header;
