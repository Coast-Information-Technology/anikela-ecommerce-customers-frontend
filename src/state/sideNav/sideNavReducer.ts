import {
  OPEN_SIDE_NAV,
  CLOSE_SIDE_NAV,
  SideNavActionTypes,
  SideNavState,
} from "./sideNavTypes";

const initialState: SideNavState = {
  isSideNavOpen: false,
};

export const sideNavReducer = (
  state = initialState,
  action: SideNavActionTypes
): SideNavState => {
  switch (action.type) {
    case OPEN_SIDE_NAV:
      return {
        isSideNavOpen: action.payload,
      };
    case CLOSE_SIDE_NAV:
      return {
        isSideNavOpen: action.payload,
      };
    default:
      return state;
  }
};
