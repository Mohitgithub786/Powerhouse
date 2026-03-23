import axios from "axios";

// Using the local IP so it works on both Laptop and Mobile
const API = axios.create({
  baseURL: "https://powerhouse-1.onrender.com/api",
  withCredentials: true,
});

export default API;
