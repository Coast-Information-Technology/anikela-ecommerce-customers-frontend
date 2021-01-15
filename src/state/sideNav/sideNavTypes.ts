export const OPEN_SIDE_NAV = "OPEN_SIDE_NAV";
export const CLOSE_SIDE_NAV = "CLOSE_SIDE_NAV";
export interface SideNavState {
  isSideNavOpen: boolean;
}
interface OpenSideNavAction {
  type: typeof OPEN_SIDE_NAV;
  payload: boolean;
}

interface CloseSideNavAction {
  type: typeof CLOSE_SIDE_NAV;
  payload: boolean;
}

export type SideNavActionType = OpenSideNavAction | CloseSideNavAction;
