import { createStore, applyMiddleware, Action } from "redux";
import thunk, { ThunkAction } from "redux-thunk";
import rootReducer, { RootState } from "./rootReducer";

const store = createStore(rootReducer, applyMiddleware(thunk));

// Re usable thunk type
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default store;
