import axios from "axios";
import querystring from "querystring";

export function post(apiBaseURL, location, body) {
  return axios
    .post(`${apiBaseURL}${location}`, body)
    .then((response) => {
      console.log({ response });
      return { error: null, response };
    })

    .catch((error) => {
      if (error.response) {
        return { error: error.response };
      }
    });
}

export function put(apiBaseURL, location, body) {
  return axios
    .put(`${apiBaseURL}${location}`, body)
    .then((response) => {
      return { error: null, response };
    })
    .catch((error) => {
      if (error.response) {
        return { error: error.response };
      }
      return null;
    });
}

export function get(apiBaseURL, location, body) {
  let url = `${apiBaseURL}${location}`;
  if (body) {
    const qs = querystring.stringify(body);
    if (qs) {
      url += (url.indexOf("?") >= 0 ? "&" : "?") + qs;
    }
  }

  return axios
    .get(`${url}`)
    .then((response) => {
      return { error: null, response };
    })
    .catch((error) => {
      if (error.response) {
        return { error: error.response };
      }
      return error;
    });
}
