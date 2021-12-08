import {
    DELETE_USER,
    // SET_CHOSE_USER,
    SET_USER,
    // SET_USERS,
    // UPDATE_USER,
} from "./actionsType";

export const setUser = (value) => {
    return {type: SET_USER, payload: value};
};

// export const setUsers = (value) => {
//     return {type: SET_USERS, payload: value};
// };
//
// export const setChoseUser = (value) => {
//     return {type: SET_CHOSE_USER, payload: value};
// };
//
export const deleteUser = () => {
    return {type: DELETE_USER};
};
//
// export const updateUser = (value) => {
//     return {type: UPDATE_USER, payload: value};
// };
