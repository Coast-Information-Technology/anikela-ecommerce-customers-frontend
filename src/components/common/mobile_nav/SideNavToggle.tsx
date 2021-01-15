import React from "react";
import { useDispatch } from "react-redux";
import { openSideNav } from "../../../state/sideNav/sideNavAction";

const SideNavToggle: React.FC = () => {
  const dispatch = useDispatch();

  const openNavigation = () => {
    dispatch(openSideNav());
  };

  return (
    <button
      className="btn p-0 px-2 side-nav__toggle"
      aria-expanded="false"
      aria-label="Toggle navigation"
      onClick={openNavigation}
    >
      <svg height="18" viewBox="0 -53 384 384" width="18">
        <path d="m368 154.667969h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0" />
        <path d="m368 32h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0" />
        <path d="m368 277.332031h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0" />
      </svg>
    </button>
  );
};

export default SideNavToggle;
