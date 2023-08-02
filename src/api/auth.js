import axios from "./axios";
const organisationUrl = `/organisation`;
export default {
  signinUser(data) {
    return axios({
      url: `/signin`,
      data,
      method: "POST",
    });
  },
};
