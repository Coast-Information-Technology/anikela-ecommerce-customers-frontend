import React from "react";
import { Link } from "react-router-dom";
import background from "../../assets/images/bg.png";


const Main = () => {
    return (
      <body>
   <MiniNav/>
      </body>
   
    );
  };


  const MiniNav = () => {
    return (
      <div className="main-nav__link-group">
        <Link to="products/women" className="main-nav__link">
          women
        </Link>
        <Link to="products/men" className="main-nav__link">
          men
        </Link>
        </div>
    );
  };

  export default Main;