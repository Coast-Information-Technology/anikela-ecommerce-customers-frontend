import React from "react";

const SideNavToggle: React.FC = () => {
  const openSideNav = () => {
    alert("Hello! Your Side Nav will soon finish rendering....");
  };

  return (
    <div
      className="btn ps-0 pe-3 side-nav__toggle"
      aria-expanded="false"
      aria-label="Toggle navigation"
      onClick={openSideNav}
    >
      <svg height="18" viewBox="0 -53 384 384" width="18">
        <path d="m368 154.667969h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0" />
        <path d="m368 32h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0" />
        <path d="m368 277.332031h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0" />
      </svg>
    </div>
  );
};

export default SideNavToggle;
