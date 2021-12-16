import {axiosInstance, clientUrl, doctorUrl} from "./config";
import {setClients, updateClient} from "../redux/actions";

export const getVisits = async () => {
    try {
        const visits = (await axiosInstance.get(doctorUrl)).data;

        return visits;
    } catch (e) {
        console.log(e);
    }
};

export const getClients = () => async (dispatch) => {
    try {
        const res = await axiosInstance.get(doctorUrl + clientUrl);
        dispatch(setClients(res.data));

        return res;
    } catch (e) {
        console.log(e);
    }
};

export const setClient = (client) => async (dispatch) => {
    const res = await axiosInstance.post(doctorUrl + clientUrl, client);
    dispatch(setClient(res.data));

    return res;
};

export const saveEditClient = (id, client) => async (dispatch) => {
    const res = await axiosInstance.put(doctorUrl + clientUrl + "/" + id, client);

    dispatch(updateClient(res.data));

    return res;
};

export const deleteClient = (id) => async (dispatch) => {
    const res = await axiosInstance.delete(doctorUrl + clientUrl + "/" + id);

    console.log(res);
    // dispatch(updateClient(res.data));

    return res;
};

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
