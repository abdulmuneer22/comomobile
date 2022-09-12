import { combineReducers } from "redux";
import appStateReducer from "./appStateReducer";

const rootReducer = combineReducers({
  appStateReducer,
});

export default rootReducer;
