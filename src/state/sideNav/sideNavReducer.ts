import { OPEN, CLOSE, SideNavActionTypes, SideNavState } from "./sideNavTypes";

const initialState: SideNavState = {
  isSideNavOpen: false,
};

export const sideNavReducer = (
  state = initialState,
  action: SideNavActionTypes
): SideNavState => {
  switch (action.type) {
    case OPEN:
      return {
        isSideNavOpen: action.payload,
      };
    case CLOSE:
      return {
        isSideNavOpen: action.payload,
      };
    default:
      return state;
  }
};
