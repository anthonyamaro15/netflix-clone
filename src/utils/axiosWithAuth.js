import axios from "axios";

export const axiosWithAuth = () => {
  return axios.create({
   //  baseURL: "https://netflix-clone00.herokuapp.com",
    baseURL: 'https://api.themoviedb.org/3/movie/'
  });
};
