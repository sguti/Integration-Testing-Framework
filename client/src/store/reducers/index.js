import { combineReducers } from "redux";
import sidenavReducer from "./sidenav.reducer";
import contextReducer from "./context.reducer";
import folderReducer from "./folder.reducer";
import testCaseReducer from "./testcase.reducer";

const reducer = combineReducers({
  folders: folderReducer,
  testCases: testCaseReducer,
  sidenav: sidenavReducer,
  features: contextReducer
});

export default reducer;
