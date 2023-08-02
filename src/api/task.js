import axios from "./axios";
const allTaskUrl = `/tasks`;
export default {
  getAllTask() {
    return axios({
      url: `${allTaskUrl}`,
      method: "GET",
    });
  },
};
