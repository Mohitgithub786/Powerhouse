import axios from "axios";

// Using the local IP so it works on both Laptop and Mobile
const API = axios.create({
  baseURL: "http://10.21.13.6:5000/api",
  withCredentials: true,
});

export default API;
