import axios from "axios";

const api = axios.create({
  baseURL: "https://encontro-api.herokuapp.com/",
});

export default api;
