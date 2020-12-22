import axios from "axios";

export const axiosWithAuth = () => {
  return axios.create({
    baseURL: "https://netflix-clone00.herokuapp.com",
  });
};
