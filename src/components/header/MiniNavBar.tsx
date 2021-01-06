import React from "react";

const MiniNavBar: React.FC = () => {
  return (
    <nav className="mini-navbar bg-dark">
      <div className="container d-flex justify-content-between py-1">
        <span className="mini-navbar__location">
          <span className="text-primary">Location</span>
        </span>
        <span className="text-primary ">Care-line +09074348485</span>
      </div>
    </nav>
  );
};

export default MiniNavBar;
