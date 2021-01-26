import React, { useEffect, useRef } from "react";
import Icon from "../icon/Icon";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../state/rootReducer";
import { closeSideNav } from "../../../state/sideNav/sideNavAction";
import { Modal } from "../CustomModal";
import useOnClickOutside from "../../../hooks";

const SideNav: React.FC = () => {
  const isOpen = useSelector((state: RootState) => state.sidenav.isSideNavOpen);
  const dispatch = useDispatch();

  const closeNavigation = () => {
    dispatch(closeSideNav());
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  const componentRef = useRef<HTMLDivElement>(null);
  useOnClickOutside(componentRef, closeNavigation);

  return (
    <div>
      <Modal handleClose={closeNavigation} show={isOpen} />
      <nav
        role="dialog"
        aria-label="Navigation Menu"
        className={isOpen ? "side-nav open" : "side-nav"}
        ref={componentRef}
      >
        <div className="side-nav__content">
          <h6>Side Nav </h6>
          <button className="btn" onClick={closeNavigation}>
            <Icon icon="close" title="close" size={24} fill="rgb(0,0,0)" />
          </button>
        </div>
      </nav>
    </div>
  );
};

export default SideNav;
