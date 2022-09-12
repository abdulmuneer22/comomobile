import {
  GET_MY_SCANS_FAILED,
  GET_MY_SCANS_REQUEST,
  GET_MY_SCANS_SUCCESS,
} from "./actions.const";

const initialState = {
  data: null,
  error: null,
  isLoading: false,
};

export default (state = initialState, { type, payload }: any) => {
  switch (type) {
    case GET_MY_SCANS_REQUEST:
      return { ...state, isLoading: true };

    case GET_MY_SCANS_SUCCESS: {
      return { ...state, isLoading: false, data: payload };
    }

    case GET_MY_SCANS_FAILED:
      return { ...state, isLoading: false, data: null, error: payload };

    default:
      return state;
  }
};
