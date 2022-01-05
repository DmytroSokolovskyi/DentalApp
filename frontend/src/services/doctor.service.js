import {axiosInstance, clientUrl, doctorUrl, visitUrl} from "./config";
import {deleteClient, setClient, setClients, setVisit, setVisits, updateClient} from "../redux/actions";

export const getClientsAll = () => async (dispatch) => {
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
        const res = await axiosInstance.post(doctorUrl + "/visit", visit);
        dispatch(setVisit(res.data));

        return res;
    } catch (e) {
        console.log(e);
    }
};
