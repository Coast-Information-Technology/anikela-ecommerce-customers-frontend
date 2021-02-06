import React, { Component } from "react";
import MediaQuery from "react-responsive";
import BottomNav from "../common/mobile_nav/BottomNav";
import SideNav from "../common/mobile_nav/SideNav";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import { FooterCtaSection } from "./Sections";

class Layout extends Component {
  render() {
    return (
      <React.Fragment>
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
      </React.Fragment>
    );
  }
}

export default Layout;
