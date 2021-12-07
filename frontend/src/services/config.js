import axios from "axios";

export const apiUrl = "http://localhost:5001";
export const doctorUrl = "/doctor";
export const userUrl = "/users";

export const config = {
    baseURL: apiUrl,
};
export const axiosInstance = axios.create(config);
