import React from "react";
import Icon from "../icon/Icon";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../state/rootReducer";
import { closeSideNav } from "../../../state/sideNav/sideNavAction";

const SideNav: React.FC = () => {
  const isOpen = useSelector((state: RootState) => state.sidenav.isSideNavOpen);
  const dispatch = useDispatch();

  const closeNavigation = () => {
    dispatch(closeSideNav());
  };

  return (
    <div className="contain">
      <aside className={isOpen ? "side-nav open" : "side-nav"}>
        <h6>Side Nav </h6>
        <button className="btn" onClick={closeNavigation}>
          <Icon icon="close" title="close" size={24} fill="rgb(0,0,0)" />
        </button>
      </aside>
    </div>
  );
};

export default SideNav;
