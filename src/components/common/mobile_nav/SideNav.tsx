import React from "react";
import Icon from "../icon/Icon";
import { connect, ConnectedProps } from "react-redux";
import { SideNavState } from "../../../state/sideNav/sideNavTypes";

const mapStateToProps = (state: SideNavState) => ({
  isOpen: state.isSideNavOpen,
});

const mapDispatchToProps = {
  toggleSideNavState: () => ({ type: "OPEN_SIDE_NAV" }),
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

interface SideNavProps extends PropsFromRedux {}

const SideNav = (props: SideNavProps) => {
  return (
    <div className="contain">
      <aside className="side-nav">
        <h6>Side Nav {props.isOpen}</h6>
        <button onClick={props.toggleSideNavState}>
          <Icon icon="close" title="close" size={24} fill="rgb(0,0,0)" />
        </button>
      </aside>
    </div>
  );
};

export default connector(SideNav);
