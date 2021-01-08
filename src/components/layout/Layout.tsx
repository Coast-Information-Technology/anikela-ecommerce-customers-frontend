import React, { Component } from "react";
import MediaQuery from "react-responsive";
import { BrowserRouter } from "react-router-dom";
import BottomNav from "../common/mobile_nav/BottomNav";
import SideNav from "../common/mobile_nav/SideNav";
import Footer from "../footer/Footer";
import Header from "../header/Header";

class Layout extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Header />
          <MediaQuery maxDeviceWidth={1024}>
            <SideNav />
          </MediaQuery>
          <MediaQuery maxDeviceWidth={375}>
            <BottomNav />
          </MediaQuery>
          <Footer />
        </BrowserRouter>
      </>
    );
  }
}

export default Layout;
