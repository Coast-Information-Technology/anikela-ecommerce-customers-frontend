import React, { useState } from "react";
import { Modal } from "./CustomModal";
import { Tab } from "./TabNavigation";

/*
TODO Revise Tab Component
*/
/*
TODO Remove the need for a tab item 
we should only be able to call <Foo>Navigation for
navigations with tablike functionality
*/
/*
TODO This should be fecthed from state 
an array of categories with their corresponding content
*/

interface MenuNavigationProps {}
export const MenuNavigation: React.FC<MenuNavigationProps> = (props) => {
  const [activelabel, setActiveLabel] = useState(" ");
  const [open, setOpen] = useState(false);
  const elements = <>{props.children}</>;
  const items = elements.props.children;
  let menuTimer: any;

  const onTabHover = (label: string) => {
    menuTimer = setTimeout(() => {
      setActiveLabel(label);
      setOpen(true);
    }, 500);
  };

  const closeMenuNav = () => {
    setActiveLabel(" ");
    setOpen(false);
  };

  const stopNavOpen = () => {
    clearTimeout(menuTimer);
  };

  return (
    <nav className={"mega-menu"} onMouseLeave={closeMenuNav}>
      <div role="tablist" className="tab-list">
        {items.map((child: React.ReactElement) => {
          const { label, tabTitle } = child.props;
          return (
            <Tab
              activeTab={activelabel}
              title={tabTitle}
              label={label}
              key={label}
              onHover={onTabHover}
              onLeave={stopNavOpen}
            />
          );
        })}
      </div>
      <div className="tab-content__container">
        <Modal
          show={true}
          handleClose={closeMenuNav}
          showCloseBtn={false}
          style={open ? { height: "100vh" } : { height: "0" }}
        />
        {items.map((child: React.ReactElement) => {
          let current = child.props.label === activelabel;
          return (
            <div
              role="tabpanel"
              id={child.props.label}
              key={child.props.label}
              className={current ? "tab-content active" : "tab-content"}
              onMouseLeave={closeMenuNav}
            >
              {child.props.children}
            </div>
          );
        })}
      </div>
    </nav>
  );
};
