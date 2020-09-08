import axios from "axios";

export const axiosWithAuth = () => {
  return axios.create({
    baseURL: "https://api.themoviedb.org/3",
  });
};
