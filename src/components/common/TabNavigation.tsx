import React from "react";

interface TabNavigationProps {
  isOpen?: boolean;
}
interface TabNavigationState {
  currentTabLabel: string;
  open: boolean;
}

export class TabNavigation extends React.Component<
  TabNavigationProps,
  TabNavigationState
> {
  state = {
    currentTabLabel: " ",
    open: false,
  };

  setActiveTab(value: string) {
    this.setState({
      currentTabLabel: value,
    });
  }

  setOpen(value: boolean) {
    this.setState({
      open: value,
    });
  }
}

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

export class Tab extends React.Component<TabProps> {
  // TODO Should be a prop that takes a boolean value
  isActiveTab: boolean = this.props.activeTab === this.props.label;
  onMouseEnter = () => {
    this.props.onHover(this.props.label);
  };
  render() {
    const { onMouseEnter, isActiveTab } = this;
    const { label, title } = this.props;
    return (
      <button
        role="tab"
        aria-controls={label}
        aria-expanded={isActiveTab}
        className={isActiveTab ? "tab active" : "tab"}
        onMouseEnter={onMouseEnter}
      >
        <span className={isActiveTab ? "tab-link active" : "tab-link"}>
          {title}
        </span>
      </button>
    );
  }
}
