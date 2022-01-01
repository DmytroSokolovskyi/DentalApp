import {axiosInstance, clientUrl, doctorUrl, visitUrl} from "./config";
import {deleteClient, setClient, setClients, setVisits, updateClient} from "../redux/actions";

export const getClientsAll = (value) => async (dispatch) => {
    const res = await axiosInstance.get(doctorUrl + clientUrl);
    dispatch(setClients(res.data));

    return res;
};

export const getClients = async (value) => {
    const res = await axiosInstance.get(doctorUrl + clientUrl, {
        params: {
            // name: value,
            surname: value,
        },
    });

    return res;
};

export const saveClient = (client) => async (dispatch) => {
    const res = await axiosInstance.post(doctorUrl + clientUrl, client);
    dispatch(setClient(res.data));

    return res;
};

export const saveEditClient = (id, client) => async (dispatch) => {
    const res = await axiosInstance.put(doctorUrl + clientUrl + "/" + id, client);
    dispatch(updateClient(res.data));

    return res;
};

export const deleteClientById = (id) => async (dispatch) => {
    const res = await axiosInstance.delete(doctorUrl + clientUrl + "/" + id);

    dispatch(deleteClient(id));

    return res;
};

export const getVisits = () => async (dispatch) => {
    const res = await axiosInstance.get(doctorUrl);

    dispatch(setVisits(res.data));
    return res;
};

export const saveVisit = (visit) => async (dispatch) => {
    try {
        console.log(visit);
        const res = await axiosInstance.post(doctorUrl + "/visit", visit);
        // dispatch(setClient(res.data));
        console.log("RESSSSSSSSSSSS", res);
        return res;
    } catch (e) {
        console.log(e);
    }
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
