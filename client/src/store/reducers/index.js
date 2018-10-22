import { combineReducers } from "redux";
import sidenavReducer from "./sidenav.reducer";
import contextReducer from "./context.reducer";

const reducer = combineReducers({
  sidenav: sidenavReducer
});

export default reducer;
