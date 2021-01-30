import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../state/rootReducer";
import { closeSideNav } from "../../../state/sideNav/sideNavAction";
import { Modal } from "../CustomModal";
import useOnClickOutside from "../../../hooks";
import { Link } from "react-router-dom";
import Icon from "../icon/Icon";

const menuCategory = [
  "New In",
  "Clothing",
  "Shoes",
  "Accesories",
  "Gifts",
  "Active wear",
  "Cosmetics",
  "Brands ",
  "Collections ",
];

const SideNavigationBar: React.FC = () => {
  const isNavigationOpen = useSelector(
    (state: RootState) => state.sidenav.isSideNavOpen
  );
  const dispatch = useDispatch();

  const closeNavigationBar = () => {
    dispatch(closeSideNav());
  };

  useEffect(() => {
    if (isNavigationOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isNavigationOpen]);

  const componentRef = useRef<HTMLDivElement>(null);
  useOnClickOutside(componentRef, closeNavigationBar);

  return (
    <>
      <Modal handleClose={closeNavigationBar} show={isNavigationOpen} />
      <div
        role="dialog"
        className={isNavigationOpen ? "side-nav open" : "side-nav"}
        ref={componentRef}
      >
        <SideNavigationMenu />
      </div>
    </>
  );
};

export const SideNavigationMenu: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentMenuId, setcurrentMenuId] = useState(" ");
  const dispatch = useDispatch();

  return (
    <nav className="sideNav-menu" aria-label="Navigation Menu">
      {menuCategory.map((title: string, index) => {
        return (
          <div
            key={index}
            className="side-nav__item hasMenu"
            onClick={() => {
              setcurrentMenuId(title);
              setMenuOpen(true);
            }}
          >
            <span>{title}</span>
          </div>
        );
      })}
      <div style={{ margin: "0.8rem 0" }}></div>
      <Link to="/" className="side-nav__item">
        location
      </Link>
      <Link to="/" className="side-nav__item">
        Contact
      </Link>
      <Link to="/" className="side-nav__item">
        Sign In
      </Link>
      <div style={{ margin: "0.8rem 0" }}></div>
      <div
        className={
          menuOpen ? "sideNav-menu__aside open" : "sideNav-menu__aside"
        }
      >
        <div className="top">
          <span
            onClick={() => {
              setMenuOpen(false);
            }}
          >
            <Icon
              icon="arrow-right"
              title="Back"
              size={22}
              fill="currentColor"
            />
          </span>
        </div>
        {menuCategory.map((title: string, index) => {
          let isActive = title === currentMenuId;
          return isActive ? (
            <ul
              key={index}
              onClick={() => {
                dispatch(closeSideNav());
              }}
              className={isActive ? "item-menu active" : "item-menu"}
            >
              {title}
            </ul>
          ) : undefined;
        })}
      </div>
    </nav>
  );
};

export default SideNavigationBar;
