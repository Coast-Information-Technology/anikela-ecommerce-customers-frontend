import {
  CLOSE_SIDE_NAV,
  OPEN_SIDE_NAV,
  SideNavActionType,
} from "./sideNavTypes";

export const openSideNav = (): SideNavActionType => {
  return {
    type: OPEN_SIDE_NAV,
    payload: true,
  };
};

export const closeSideNav = (): SideNavActionType => {
  return {
    type: CLOSE_SIDE_NAV,
    payload: false,
  };
};
