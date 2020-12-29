import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/header/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div></div>
    </BrowserRouter>
  );
}

export default App;
