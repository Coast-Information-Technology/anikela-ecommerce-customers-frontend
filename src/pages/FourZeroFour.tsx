import React from "react";
import { Link } from "react-router-dom";

const FourZeroFour: React.FC = () => {
  return (
    <section className="f04">
      <div className="f04-container">
        <span className="f04-exclamation">Oopps!</span>
        <div className="f04-error-num">
          <span>4</span>
          <span>0</span>
          <span>4</span>
        </div>

        <div className="f04-content">
          <h4 className="f04-content__heading">This page does not exist</h4>
          <p className="f04-content__lead">
            it's okay don't fret you can either go to the{" "}
            <Link to="/" className="f04-content__link">
              homepage
            </Link>{" "}
            or{" "}
            <Link to="/" className="f04-content__link">
              {" "}
              send us a message{" "}
            </Link>{" "}
            about the broken link
          </p>
        </div>
      </div>
    </section>
  );
};

export default FourZeroFour;
