import {
  CLOSE_SIDE_NAV,
  OPEN_SIDE_NAV,
  SideNavActionType,
  SideNavState,
} from "./sideNavTypes";

const initialState: SideNavState = {
  isSideNavOpen: false,
};

export const sideNavReducer = (
  state = initialState,
  action: SideNavActionType
): SideNavState => {
  switch (action.type) {
    case OPEN_SIDE_NAV: {
      return {
        ...state,
        isSideNavOpen: action.payload,
      };
    }
    case CLOSE_SIDE_NAV: {
      return {
        ...state,
        isSideNavOpen: action.payload,
      };
    }
    default:
      return state;
  }
};
