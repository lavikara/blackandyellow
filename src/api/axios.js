import axios from "axios";
const baseURL = `${process.env.VUE_APP_BASE_URL}`;
import { getItem } from "@/utils/storage.js";
import store from "../store/Index";

const instance = axios.create({
  baseURL,
  validateStatus: function (status) {
    return status >= 200 && status < 400;
  },
});

instance.interceptors.request.use(
  (config) => {
    // Do something before request is sent
    const token = getItem("user");
    config.headers.Authorization = token ? `Bearer ${token}` : "";
    return config;
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    if (response.status === 401) {
      console.log("You are not authorized");
    }
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      if (!window.location.pathname.includes("/onboarding")) {
        return logoutUser();
      }
    }
    return Promise.reject(error);
  }
);

function logoutUser() {
  store.dispatch("logout");
}

export default instance;
