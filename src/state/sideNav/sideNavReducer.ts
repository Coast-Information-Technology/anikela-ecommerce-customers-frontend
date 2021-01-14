import { OPEN, CLOSE, SideNavActionTypes, SideNavState } from "./sideNavTypes";

const initialState: SideNavState = {
  isOpen: false,
};

export const sideNavReducer = (
  state = initialState,
  action: SideNavActionTypes
): SideNavState => {
  switch (action.type) {
    case OPEN:
      return {
        isOpen: action.payload,
      };
    case CLOSE:
      return {
        isOpen: action.payload,
      };
    default:
      return state;
  }
};
