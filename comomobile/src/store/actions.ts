import { createAction } from "redux-actions";
import { AppConfigType, RecordScanPyalod } from "../@types";
import { get, post } from "../network";
import {
  GET_MY_SCANS_FAILED,
  GET_MY_SCANS_REQUEST,
  GET_MY_SCANS_SUCCESS,
  RECORD_SCAN_FAILED,
  RECORD_SCAN_REQUEST,
  RECORD_SCAN_SUCCESS,
} from "./actions.const";

const recordScanRequest = createAction(RECORD_SCAN_REQUEST);
const recordScanSuccess = createAction(RECORD_SCAN_SUCCESS);
const recordScanFailed = createAction(RECORD_SCAN_FAILED);

export function recordScan(config: AppConfigType, payload: RecordScanPyalod) {
  return async (dispatch: any) => {
    dispatch(recordScanRequest());
    let response;
    let error;

    try {
      const res: any = await post(
        `${config.baseURL}`,
        `${"/scan/add-scan-data"}`,
        payload
      );
      response = res?.response?.data;
      if (response) {
        dispatch(recordScanSuccess(response));
      } else {
        error = (res || {}).error;
        dispatch(recordScanFailed(error));
      }
    } catch (ex) {
      error = ex;
      dispatch(recordScanFailed(error));
    }

    return { response, error };
  };
}

const getMyScansRequest = createAction(GET_MY_SCANS_REQUEST);
const getMyScansSuccess = createAction(GET_MY_SCANS_SUCCESS);
const getMyScansFailed = createAction(GET_MY_SCANS_FAILED);

export function getMyScans(config: AppConfigType, userName: string) {
  return async (dispatch: any) => {
    dispatch(getMyScansRequest());
    let response;
    let error;

    try {
      const res = await get(
        `${config.baseURL}`,
        `${`/scan/scans/${userName}`}`
      );
      response = res?.response.data;
      if (response) {
        dispatch(getMyScansSuccess(response));
      } else {
        error = (res || {}).error;
        dispatch(getMyScansFailed(error));
      }
    } catch (ex) {
      error = ex;
      dispatch(getMyScansFailed(error));
    }

    return { response, error };
  };
}
