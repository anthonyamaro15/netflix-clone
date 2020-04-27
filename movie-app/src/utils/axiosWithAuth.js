import axios from "axios";

export const axiosWithAuth = () => {
  return axios.create({
    baseURL: "https://api.themoviedb.org/3",
  });
};

export const axiosWithAuthDB = () => {
  const token = JSON.parse(localStorage.getItem("token"));
  return axios.create({
    headers: {
      Authorization: token,
    },
    baseURL: "http://localhost:5000",
  });
};
