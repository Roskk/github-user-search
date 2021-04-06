import axios from "axios";

const httpClientWrapper = ({ data, method, url }) => {
  return axios({
    data,
    method,
    url,
  }).catch((err) => {
    console.log("Something went wrong", err);
  });
};

export default httpClientWrapper;
