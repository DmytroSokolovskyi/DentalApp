import {authUrl, axiosInstance} from "./config";

export const login = (mailPass) => {
    const res = axiosInstance
        .post(authUrl + "/login", mailPass)
        .then(value => value.data)
        .catch(e => console.log(e));

    return res;
};

export const logOut = (accessToken) => {
    const res = axiosInstance
        .get(authUrl + "/logout", accessToken)
        .then(value => value.status)
        .catch(e => console.log(e));

    return res;
};

export const getRefresh = (refreshToken) => {
    const res = axiosInstance
        .get(authUrl + "/refresh", {
            headers: {
                Authorization: `${refreshToken}`,
            },
        })
        .then(value => value.status)
        .catch(e => console.log(e));

    return res;
};
