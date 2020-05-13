import axios from "axios";

export const axiosWithAuth = () => {
  const token = window.localStorage.getItem("token");

  return axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
      authorization: token,
    },
  });
};
