import { OPEN, CLOSE, SideNavActionTypes } from "./sideNavTypes";

export const openSideNav = (): SideNavActionTypes => {
  return {
    type: OPEN,
    payload: true,
  };
};

export const closeSideNav = (): SideNavActionTypes => {
  return {
    type: CLOSE,
    payload: false,
  };
};
