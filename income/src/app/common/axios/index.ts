import axios from "axios";

export const api = axios.create({
  baseURL: "https://geld-api.onrender.com/",
  headers: {
    "Content-Type": "application/json",
  },
});
