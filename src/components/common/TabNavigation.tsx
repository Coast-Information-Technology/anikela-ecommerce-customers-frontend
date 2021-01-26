import React, { useState } from "react";
import { Modal } from "./CustomModal";

interface TabNavigationProps {
  className?: string;
  children: React.ReactNode;
  isOpen?: boolean;
}
export const TabNavigation: React.FC<TabNavigationProps> = ({
  children,
  className,
}) => {
  // to type infer to typescript to make children JSX.Elements
  // so we can get accces to props
  // items[0].props.label
  const elements = <>{children}</>;
  const items = elements.props.children;
  const [active, setActive] = useState(" ");
  const [open, setOpen] = useState(false);

  const onTabClick = (label: string) => {
    setActive(label);
    setOpen(true);
  };

  const closeTabNavigation = () => {
    setActive(" ");
    setOpen(false);
  };

  return (
    <nav className={className} onMouseLeave={closeTabNavigation}>
      <div className="tab-list">
        {items.map((child: React.ReactElement) => {
          const { label, tabTitle } = child.props;
          return (
            <Tab
              activeTab={active}
              title={tabTitle}
              label={label}
              key={label}
              onHover={onTabClick}
            />
          );
        })}
      </div>
      <nav className="tab-content__container">
        <Modal
          show={true}
          handleClose={closeTabNavigation}
          showCloseBtn={false}
          style={open ? { height: "100vh" } : { height: "0" }}
        />
        {items.map((child: React.ReactElement) => {
          let current = child.props.label === active;
          if (!current) return undefined;
          return (
            <div
              key={child.props.label}
              className={current ? "tab-content active" : "tab-content"}
              onMouseLeave={closeTabNavigation}
            >
              {child.props.children}
            </div>
          );
        })}
      </nav>
    </nav>
  );
};

interface TabItemProps {
  label: string;
  tabTitle: string;
  children?: React.ReactNode;
}
export const TabItem: React.FC<TabItemProps> = (props) => {
  return props.children ? <>{props.children}</> : <></>;
};

interface TabProps {
  title: string;
  activeTab?: string;
  label: string;
  onHover: (label: string) => void;
}

export const Tab: React.FC<TabProps> = (props) => {
  const { activeTab, label, title, onHover } = props;
  const onTabClick = () => {
    onHover(label);
  };
  let active: boolean = activeTab === label;
  return (
    <button
      aria-controls={label}
      aria-expanded={active}
      className={active ? "tab active" : "tab"}
      onMouseEnter={onTabClick}
    >
      <span className={active ? "tab-link active" : "tab-link"}>{title}</span>
    </button>
  );
};
