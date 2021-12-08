// import {axiosInstance, userUrl} from "./config";
// import {deleteUser, setUser, setUsers, updateUser} from "../redux/actions";

// export const createNewUser = (user) => (dispatch) => {
//     axiosInstance
//         .post(userUrl, user)
//         .then(value => dispatch(setUser(value.data)))
//         .catch(e => console.log(e));
// };

// export const getUsers = () => (dispatch) => {
//     axiosInstance
//         .get(userUrl)
//         .then(value => dispatch(setUsers(value.data)))
//         .catch(e => console.log(e));
// };

// export const deleteUserById = (id) => (dispatch) => {
//     axiosInstance.delete(userUrl + "/" + id)
//         .then(value => {
//             if (value.status === 204) {
//                 dispatch(deleteUser(id));
//             }
//         })
//         .catch(e => console.log(e));
// };

// export const updateUserById = (user, id) => (dispatch) => {
//     axiosInstance.put(userUrl + "/" + id, user)
//         .then(value => dispatch(updateUser(value.data)))
//         .catch(e => console.log(e));
// };
