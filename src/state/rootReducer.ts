import { combineReducers } from "redux";
import { sideNavReducer } from "./sideNav/sideNavReducer";
const rootReducer = combineReducers({
  sidenav: sideNavReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
