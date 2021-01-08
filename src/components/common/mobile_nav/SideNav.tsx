import React from "react";
import Icon from "../icon/Icon";

const SideNav: React.FC = () => {
  return (
    <div className="contain">
      <aside className="side-nav">
        <h6>Side Nav</h6>
        <Icon icon="close" title="close" size={24} fill="rgb(0,0,0)" />
      </aside>
    </div>
  );
};

export default SideNav;
