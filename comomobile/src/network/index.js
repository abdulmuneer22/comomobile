/* eslint-disable no-console */
import axios from "axios";
import querystring from "querystring";

export function post(apiBaseURL, location, body) {
  // eslint-disable-next-line no-console
  // console.log(`post ${apiBaseURL}${location}`);
  const result = JSON.stringify(body);
  return (
    axios
      .post(`${apiBaseURL}${location}`, body)
      .then((response) => {
        // eslint-disable-next-line no-console
        console.log({ response });
        const responseresult = JSON.stringify(response);
        return { error: null, response };
      })
      // eslint-disable-next-line consistent-return
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error);
        const errorresult = JSON.stringify(error);
        if (error.response) {
          return { error: error.response };
        }
      })
  );
}

export function put(apiBaseURL, location, body) {
  // eslint-disable-next-line no-console
  // console.log(`put ${apiBaseURL}${location}`);
  const result = JSON.stringify(body);

  return axios
    .put(`${apiBaseURL}${location}`, body)
    .then((response) => {
      // eslint-disable-next-line no-console
      console.log({ response });
      const responseresult = JSON.stringify(response);
      return { error: null, response };
    })
    .catch((error) => {
      // eslint-disable-next-line no-console
      console.log(error);
      const errorresult = JSON.stringify(error);
      if (error.response) {
        return { error: error.response };
      }
      return null;
    });
}

export function get(apiBaseURL, location, body) {
  // eslint-disable-next-line no-console
  // console.log(`get ${apiBaseURL}${location}`);
  let url = `${apiBaseURL}${location}`;
  if (body) {
    const qs = querystring.stringify(body);
    if (qs) {
      url += (url.indexOf("?") >= 0 ? "&" : "?") + qs;
    }
  }

  const result = JSON.stringify(body);

  return axios
    .get(`${url}`)
    .then((response) => {
      // eslint-disable-next-line no-console
      console.log({ response });
      const responseresult = JSON.stringify(response);
      return { error: null, response };
    })
    .catch((error) => {
      const errorresult = JSON.stringify(error);
      if (error.response) {
        return { error: error.response };
      }
      return error;
    });
}
