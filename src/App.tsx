import React from "react";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Main from "./pages/signin_signup/signin"
import Homepage from "./pages/homepage/Homepage"

function App() {
  return (
    <BrowserRouter>

      <Header />
      <Homepage />
      <div></div>
      <div style={{ height: "600px" }}></div>
      <Footer />

    </BrowserRouter>
  );
}

export default App;
