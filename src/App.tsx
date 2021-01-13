import React from "react";
import MediaQuery from "react-responsive";
import { BrowserRouter } from "react-router-dom";
import BottomNav from "./components/common/mobile_nav/BottomNav";
import SideNav from "./components/common/mobile_nav/SideNav";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Layout from "./components/layout/Layout";
import Homepage from "./pages/homepage/Homepage";

function App() {
  return <Layout>{/* <Homepage /> */}</Layout>;
}

export default App;
