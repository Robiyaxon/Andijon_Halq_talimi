import axios from "axios";
export const instance = axios.create({
  baseURL: "https://oliytalim.pythonanywhere.com/api/",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});
export const URL_FOR_IMG = "https://oliytalim.pythonanywhere.com/api/";
