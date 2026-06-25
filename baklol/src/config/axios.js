import axios from "axios";

const api = axios.create({
  baseURL: "https://generativelanguage.googleapis.com/v1beta",
  timeout: 5000,
});

export default api;