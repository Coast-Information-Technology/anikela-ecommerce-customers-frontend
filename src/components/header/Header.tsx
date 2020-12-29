import React from "react";

const Header = () => {
  return <header></header>;
};

const MiniNav = () => {
  return (
    <nav className="">
      <span className="">
        <span className="text-primary">Location</span>
        {/* still requires a dropdown for site currency conversion */}
      </span>
      <span className="text-primary">Care-line +09074348485</span>
    </nav>
  );
};
