import React from "react";
import MediaQuery from "react-responsive";
import MiniNavBar from "./MiniNavBar";
import NavBar from "./NavBar";


const Header = () => {
  return (
    <header className="header">
      <MediaQuery minDeviceWidth={1024}>
        <MiniNavBar />
      </MediaQuery>
      <NavBar />
    </header>
  );
};

export default Header;
