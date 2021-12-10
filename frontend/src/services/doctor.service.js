import {axiosInstance, doctorUrl} from "./config";

export const getVisits = async () => {
    const data = (await axiosInstance.get(doctorUrl)).data;

    return data;
};

// export const logOut = (accessToken) => {
//     const res = axiosInstance
//         .get(authUrl + "/logout", accessToken)
//         .then(value => value.status)
//         .catch(e => console.log(e));
//
//     return res;
// };
//
// export const getRefresh = (refreshToken) => {
//     const res = axiosInstance
//         .get(authUrl + "/refresh", {
//             headers: {
//                 Authorization: `${refreshToken}`,
//             },
//         })
//         .then(value => value.status)
//         .catch(e => console.log(e));
//
//     return res;
// };
