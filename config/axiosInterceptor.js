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
  headers,
  token
}) => {
  return axiosDefaultInstance.get(`${url + params}`, {
    headers: {
      Cookie,
      Authorization: auth ? `Basic ${btoa(`${USERNAME}:${PASS}`)}` : token,
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

  return axiosDefaultInstance.patch(`${url + params}`, body, {
    timeout: timeout,
    headers: {
      Authorization: auth ? `Basic ${btoa(`${USERNAME}:${PASS}`)}` : "",
    },
  });
};


export const deleteRequest = ({ url, body, auth, params = "" }) => {
  return axiosDefaultInstance.delete(`${url + params}`, body, {
    timeout: timeout,
    headers: {
      Authorization: auth ? `Basic ${btoa(`${USERNAME}:${PASS}`)}` : "",
    },
  });
};

