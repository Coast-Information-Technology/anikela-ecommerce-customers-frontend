import React, { useState } from "react";
import Dropdown from "../common/Dropdown";

const MiniNavBar: React.FC = () => {
  const options = ["NGN N", "EU ", "UK P"];
  const [location, setLocation] = useState(options[0]);
  return (
    <nav className="mini-navbar bg-dark">
      <div className="container d-flex justify-content-between py-1">
        <span className="mini-navbar__location">
          <Dropdown
            placeholder={location}
            value={`location    ${location}`}
            onChange={(l) => setLocation(l)}
            options={options}
          />
        </span>
        <span className="text-primary ">Care-line +09074348485</span>
      </div>
    </nav>
  );
};

export default MiniNavBar;
