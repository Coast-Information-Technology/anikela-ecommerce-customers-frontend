import React, { CSSProperties } from "react";
import { Link } from "react-router-dom";

const FourZeroFour: React.FC = () => {
  return (
    <section className="404">
      <span className="404-exclamation">Oopps!</span>

      <div className="404-content">
        <h4 className="404-content__heading">This page dose not exist</h4>
        <p className="404-content__lead">
          it's okay don't fret you can either go to the
          <Link to="/" className="404-content__link">
            homepage
          </Link>
          or
          <Link to="/" className="404-content__link">
            send us a message
          </Link>
          about the broken link
        </p>
      </div>
    </section>
  );
};

export default FourZeroFour;
