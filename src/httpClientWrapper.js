import axios from "axios";

export default ({ method, url, data }) => {
  return axios({
    data,
    method,
    url
  }).catch((err) => {
    console.log("Something went wrong", err);
  });
};
