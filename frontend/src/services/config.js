import {destroyAuthToLocal, destroyTokens, getToken, saveTokens} from "./storage.service";
import axios from "axios";

export const apiUrl = "http://localhost:5000";
export const doctorUrl = "/doctor";
export const clientUrl = "/client";
export const visitUrl = "/visit";
export const authUrl = "/auth";

export const config = {
    baseURL: apiUrl,
    headers: {
        "Content-Type": "application/json",
    },
};

export const axiosInstance = axios.create(config);

let _retry = false;

axiosInstance.interceptors.response.use(
    (res) => res,
    async (error) => {
        const config = error.config;

        if (config.url !== "/auth/login" && error.response) {
            if (error.response.status === 401 && config.url === "/auth/refresh") {
                destroyAuthToLocal();
                destroyTokens();
            }

            if (error.response.status === 401 && !_retry) {
                _retry = true;
                try {
                    const res = await axiosInstance.get("/auth/refresh", {
                        headers: {
                            refresh_token: getToken("refresh_token"),
                        },
                    });

                    const {access_token, refresh_token} = res.data;
                    saveTokens(access_token, refresh_token);
                    _retry = false;

                    return axiosInstance(config);
                } catch (_error) {
                    return Promise.reject(_error);
                }
            }
        }
        return Promise.reject(error);
    },
);

axiosInstance.interceptors.request.use(config => {
    config.headers.Authorization = getToken("access_token") || "";
    return config;
});
