import { get } from "lodash";

export const getAppConfig = (state: any) => {
  return get(state, "appStateReducer.config");
};
