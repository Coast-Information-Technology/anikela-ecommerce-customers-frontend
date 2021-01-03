import React from "react";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div style={{ height: "600px" }}></div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
