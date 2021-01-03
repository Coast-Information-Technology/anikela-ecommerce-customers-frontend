import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/header/Header";
import Main from "./pages/signin_signup/signin"
import Homepage from "./pages/homepage/Homepage"

function App() {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      {/* <Main /> */}
      <Homepage />
      <div></div>
    </BrowserRouter>
  );
}

export default App;
