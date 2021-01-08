import React from "react";
import MediaQuery from "react-responsive";
import { BrowserRouter } from "react-router-dom";
import BottomNav from "./components/common/mobile_nav/BottomNav";
import SideNav from "./components/common/mobile_nav/SideNav";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Homepage from "./pages/homepage/Homepage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <MediaQuery maxDeviceWidth={1024}>
        <SideNav />
      </MediaQuery>
      <Homepage />
      <MediaQuery maxDeviceWidth={375}>
        <BottomNav />
      </MediaQuery>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
