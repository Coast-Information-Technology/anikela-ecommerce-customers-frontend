import React from "react";

const Header = () => {
  return (
    <header>
      <MiniNav />
    </header>
  );
};

const MiniNav = () => {
  return (
    <nav className="">
      <span className="">
        <span className="text-primary ">Location</span>
        {/* still requires a dropdown for site currency conversion */}
      </span>
      <span className="fs-1 text-primary ">Care-line +09074348485</span>
    </nav>
  );
};

export default Header;
