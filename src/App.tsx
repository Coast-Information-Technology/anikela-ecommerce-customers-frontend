import React from "react";
import { BrowserRouter } from "react-router-dom";
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
