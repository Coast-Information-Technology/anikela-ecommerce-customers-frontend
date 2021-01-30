import React from "react";
import { Modal } from "./CustomModal";
import { Tab, TabNavigation } from "./TabNavigation";

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

export class MenuNavigation extends TabNavigation {
  elements = (<>{this.props.children}</>);
  items = this.elements.props.children;

  onTabClick = (label: string) => {
    this.setActiveTab(label);
    this.setOpen(true);
  };

  closeMenuNav = () => {
    this.setActiveTab(" ");
    this.setOpen(false);
  };
  render() {
    const { open, currentTabLabel } = this.state;
    return (
      <nav className={"mega-menu"} onMouseLeave={this.closeMenuNav}>
        <div role="tablist" className="tab-list">
          {this.items.map((child: React.ReactElement) => {
            const { label, tabTitle } = child.props;
            return (
              <Tab
                activeTab={currentTabLabel}
                title={tabTitle}
                label={label}
                key={label}
                onHover={this.onTabClick}
              />
            );
          })}
        </div>
        <div className="tab-content__container">
          <Modal
            show={true}
            handleClose={this.closeMenuNav}
            showCloseBtn={false}
            style={open ? { height: "100vh" } : { height: "0" }}
          />
          {this.items.map((child: React.ReactElement) => {
            let current = child.props.label === currentTabLabel;
            return (
              <div
                role="tabpanel"
                id={child.props.label}
                key={child.props.label}
                className={current ? "tab-content active" : "tab-content"}
                onMouseLeave={this.closeMenuNav}
              >
                {child.props.children}
              </div>
            );
          })}
        </div>
      </nav>
    );
  }
}
