import axios from "axios";
// import { userState } from "../store/userState";
import https from "https";

const BASEURL = process.env.NEXT_PUBLIC_API_HOST;


const axiosDefaultInstance = axios.create({
  baseURL: BASEURL,
  timeout: 30000,
  mode: "no-cors",
  //   headers: { "Access-Control-Allow-Origin": "*/*" },
});

// Add a request interceptor
axiosDefaultInstance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return Promise.resolve(config);
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosDefaultInstance.interceptors.response.use(
  function (response) {
    // Do something with response data
    return Promise.resolve(response);
  },
  function (error) {
    // Do something with response error
    return Promise.reject(error);
  }
);

export const getRequest = ({
  url,
  auth,
  params = "",
  Cookie,
}) => {
  //   // const token = userState.getState().token;

  return axiosDefaultInstance.get(`${url + params}`, {
    headers: {
      Cookie,
    },
  });
};
export const postRequest = ({
  url,
  body,
  auth,
  params = "",
  Cookie,
  withoutLogin,
}) => {
  //   // const token = userState.getState().token;

  return axiosDefaultInstance.post(`${url + params}`, body, {
    headers: {
      Cookie,
    },
  });
};

export const patchRequest = ({ url, body, auth, params = "" }) => {
  //   // const token = userState.getState().token;

  return axiosDefaultInstance.patch(`${url + params}`, body, {
    timeout: timeout,
    headers: {
      Authorization: auth ? `Basic ${btoa(`${USERNAME}:${PASS}`)}` : "",
    },
  });
};

export const deleteRequest = ({ url, body, auth, params = "" }) => {
  //   // const token = userState.getState().token;

  return axiosDefaultInstance.delete(`${url + params}`, body, {
    timeout: timeout,
    headers: {
      Authorization: auth ? `Basic ${btoa(`${USERNAME}:${PASS}`)}` : "",
    },
  });
};

export const elasticSearchRequest = ({ url, body }) => {
  //   // const token = userState.getState().token;
  return axiosDefaultInstance.post(`${ELASTIC_URL}${url}`, body, {
    timeout: timeout,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": "true",
      "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",
      "Access-Control-Allow-Headers":
        "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers",
      "x-app-id": ELASTIC_APP_ID,
      "x-app-key": ELASTIC_APP_KEY,
    },
  });
};

export const getRequestDGMR = ({ url, params = "" }) => {
  //   // const token = userState.getState().token;
  return axiosDefaultInstance.get(`${DGMR_BASE_URL}${url + params}`, {
    timeout: timeout,
    headers: {
      Authorization: DGMR_TOKEN,
    },
  });
};

export const postRequestDGMR = ({ url, params = "", body }) => {
  //   // const token = userState.getState().token;
  return axiosDefaultInstance.post(`${DGMR_BASE_URL}${url + params}`, body, {
    timeout: timeout,
    headers: {
      Authorization: DGMR_TOKEN,
    },
  });
};

export const getRequestCME = ({ url, auth, params = "" }) => {
  //   // const token = userState.getState().token;
  return axiosDefaultInstance.get(`${CME_BASE_URL}${url + params}`, {
    timeout: timeout,
    headers: {
      Authorization: auth ? `Basic ${btoa(`${USERNAME}:${PASS}`)}` : "",
    },
  });
};

export const postRequestCME = ({ url, auth, params = "", body }) => {
  //   // const token = userState.getState().token;
  return axiosDefaultInstance.post(`${CME_BASE_URL}${url + params}`, body, {
    timeout: timeout,
    headers: {
      Authorization: auth ? `Basic ${btoa(`${USERNAME}:${PASS}`)}` : "",
    },
  });
};

export const getRequestMEDI = ({ url, auth, params = "" }) => {
  //   // const token = userState.getState().token;
  return axiosDefaultInstance.get(`${MEDI_API}${url + params}`, {
    timeout: timeout,
    headers: {
      Authorization: auth ? `Basic ${btoa(`${USERNAME}:${PASS}`)}` : "",
    },
  });
};

export const postRequestMEDI = ({ url, auth, params = "", body }) => {
  //   // const token = userState.getState().token;
  return axiosDefaultInstance.post(`${MEDI_API}${url + params}`, body, {
    timeout: timeout,
    headers: {
      Authorization: auth ? `Basic ${btoa(`${USERNAME}:${PASS}`)}` : "",
    },
  });
};
