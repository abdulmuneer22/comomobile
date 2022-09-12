import { combineReducers } from "redux";
import appStateReducer from "./appStateReducer";
import scansReducer from "./scansReducer";

const rootReducer = combineReducers({
  appStateReducer,
  scansReducer,
});

export default rootReducer;
