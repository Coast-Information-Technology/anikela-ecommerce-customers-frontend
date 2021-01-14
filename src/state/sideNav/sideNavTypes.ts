export const OPEN = "OPEN";
export const CLOSE = "CLOSE";

export interface SideNavState {
  isOpen: boolean;
}
interface OpenSideNavAction {
  type: typeof OPEN;
  payload: true;
}

interface CloseSideNavAction {
  type: typeof CLOSE;
  payload: false;
}

export type SideNavActionTypes = OpenSideNavAction | CloseSideNavAction;
