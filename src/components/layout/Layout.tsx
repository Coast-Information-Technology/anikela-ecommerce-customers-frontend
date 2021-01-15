import React, { Component } from "react";
import MediaQuery from "react-responsive";
import { BrowserRouter } from "react-router-dom";
import BottomNav from "../common/mobile_nav/BottomNav";
import SideNav from "../common/mobile_nav/SideNav";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import { FooterCtaSection } from "./Sections";

class Layout extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <MediaQuery maxDeviceWidth={1024}>
          <SideNav />
        </MediaQuery>
        {this.props.children}
        <MediaQuery maxDeviceWidth={375}>
          <BottomNav />
        </MediaQuery>
        <FooterCtaSection />
        <Footer />
      </BrowserRouter>
    );
  }
}

export default Layout;
