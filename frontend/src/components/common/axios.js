import axios from "axios";
import { apiUrl, token } from "./http";

const api = axios.create({
    baseURL: apiUrl,
    headers: {
        Accept: "application/json",
    },
});

api.interceptors.request.use(
    (config) => {
        const authToken = token();
        if (authToken) {
            config.headers.Authorization = `Bearer ${authToken}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

export default api;
