import {
    DELETE_CLIENT,
    DELETE_USER,
    SET_CLIENT,
    SET_CLIENTS,
    SET_USER,
    SET_VISITS,
    UPDATE_CLIENT,
} from "./actionsType";

export const setUser = (value) => {
    return {type: SET_USER, payload: value};
};

export const setClients = (value) => {
    return {type: SET_CLIENTS, payload: value};
};

export const setClient = (value) => {
    return {type: SET_CLIENT, payload: value};
};

export const deleteUser = () => {
    return {type: DELETE_USER};
};

export const updateClient = (value) => {
    return {type: UPDATE_CLIENT, payload: value};
};

export const deleteClient = (value) => {
    return {type: DELETE_CLIENT, payload: value};
};

export const setVisits = (value) => {
    return {type: SET_VISITS, payload: value};
};
