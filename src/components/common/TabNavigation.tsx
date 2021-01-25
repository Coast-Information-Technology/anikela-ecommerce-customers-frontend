import React, { useState } from "react";

interface TabNavigationProps {
  className?: string;
  children: React.ReactNode;
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

  // const closeTabNavigation = () => {
  //   setActive(" ");
  // };
  const onTabClick = (label: string) => {
    if (label === active) {
      setActive(" ");
    } else {
      setActive(label);
    }
  };

  return (
    <nav className={className}>
      <ul className="tab-list">
        {items.map((child: React.ReactElement) => {
          const { label, tabTitle } = child.props;
          return (
            <Tab
              activeTab={active}
              title={tabTitle}
              label={label}
              key={label}
              onClick={onTabClick}
            />
          );
        })}
      </ul>
      <div className="tab-content">
        {items.map((child: React.ReactElement) => {
          if (child.props.label !== active) return undefined;
          return child.props.children;
        })}
      </div>
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
  onClick: (label: string) => void;
}

export const Tab: React.FC<TabProps> = (props) => {
  const { activeTab, label, title, onClick } = props;
  const onTabClick = () => {
    onClick(label);
    console.log(activeTab);
  };
  let className = "tab";

  if (activeTab === label) {
    className += " tab active";
  }
  return (
    <li className={className} onClick={onTabClick}>
      <span className={activeTab === label ? "tab-link" : "tab-link active"}>
        {title}
      </span>
    </li>
  );
};
