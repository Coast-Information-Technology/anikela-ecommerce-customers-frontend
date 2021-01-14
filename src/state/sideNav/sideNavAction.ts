import {
  OPEN_SIDE_NAV,
  CLOSE_SIDE_NAV,
  SideNavActionTypes,
} from "./sideNavTypes";

export const openSideNav = (): SideNavActionTypes => {
  return {
    type: OPEN_SIDE_NAV,
    payload: true,
  };
};

export const closeSideNav = (): SideNavActionTypes => {
  return {
    type: CLOSE_SIDE_NAV,
    payload: false,
  };
};
