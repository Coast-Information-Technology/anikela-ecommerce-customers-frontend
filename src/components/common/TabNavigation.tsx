import React from "react";

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
  onLeave: () => void;
}

export class Tab extends React.Component<TabProps> {
  // TODO Should be a prop that takes a boolean value
  isActiveTab: boolean = this.props.activeTab === this.props.label;
  onMouseEnter = () => {
    this.props.onHover(this.props.label);
  };
  onMouseLeave = () => {
    this.props.onLeave();
  };
  render() {
    const { onMouseEnter, isActiveTab, onMouseLeave } = this;
    const { label, title } = this.props;
    return (
      <button
        role="tab"
        aria-controls={label}
        aria-expanded={isActiveTab}
        className={isActiveTab ? "tab active" : "tab"}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <span className={isActiveTab ? "tab-link active" : "tab-link"}>
          {title}
        </span>
      </button>
    );
  }
}
