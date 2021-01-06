import React from "react";

const SideNavToggle: React.FC = () => {
  const openSideNav = () => {
    alert("Hello! Your Side Nav will soon finish rendering....");
  };

  return (
    <div
      className="btn px-0"
      aria-expanded="false"
      aria-label="Toggle navigation"
      onClick={openSideNav}
    >
      <svg viewBox="-5 0 10 8" width="40" className="navbar-toggler-icon">
        <line
          y2="8"
          stroke="rgb(1, 2, 12)"
          strokeWidth="30"
          strokeDasharray="1 2"
        />
      </svg>
    </div>
  );
};

export default SideNavToggle;
