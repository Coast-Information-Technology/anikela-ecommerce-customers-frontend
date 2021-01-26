import React from "react";
import MediaQuery from "react-responsive";
import MiniNavBar from "./MiniNavBar";
import NavBar from "./NavBar";
import MegaMenu from "./MegaMenu";

const Header = () => {
  return (
    <header className="header">
      <MediaQuery minDeviceWidth={1024}>
        <MiniNavBar />
      </MediaQuery>
      <NavBar />
      <MediaQuery minDeviceWidth={1024}>
        <MegaMenu />
      </MediaQuery>
    </header>
  );
};

export default Header;
