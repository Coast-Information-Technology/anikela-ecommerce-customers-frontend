import React from "react";
import MediaQuery from "react-responsive";
import MiniNavBar from "./MiniNavBar";
import NavBar from "./NavBar";
import { SubNavBar } from "./subnav/SubNavBar";

const Header = () => {
  return (
    <header className="header">
      <MediaQuery minDeviceWidth={1024}>
        <MiniNavBar />
      </MediaQuery>
      <NavBar />
      {/* <MediaQuery minDeviceWidth={1024}>
        <SubNavBar />
      </MediaQuery> */}
    </header>
  );
};

export default Header;
