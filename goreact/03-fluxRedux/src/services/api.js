import axios from "axios";

const api = axios.create({
  baseUrl: "https://api.github.com",
  headers: { authorization: process.env.REACT_APP_GITHUB_TOKEN },
});

export default api;
