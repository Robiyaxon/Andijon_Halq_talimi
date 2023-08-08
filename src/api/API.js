import axios from "axios";
export const instance = axios.create({
  baseURL: "https://otfiv-andijon-admin.uz/api/",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});
export const URL_FOR_IMG = "https://otfiv-andijon-admin.uz/api/";
