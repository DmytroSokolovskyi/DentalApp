import {DELETE_USER, SET_CLIENT, SET_CLIENTS, SET_USER, UPDATE_CLIENT} from "../actions";

const initialState = {
    // choseUser: {},
    clients: [],
    loginUser: {},
};

export const mainReducer = (state = initialState, action) => {
    switch (action.type) {
    // case SET_CHOSE_USER: {
    //     return {...state, choseUser: {...action.payload}};
    // }

    // case SET_USER: {
    //     return {...state, users: [...state.users, action.payload]};
    // }
    //
    case SET_USER: {
        return {...state, loginUser: {...action.payload}};
    }

    case DELETE_USER: {
        return {...state, loginUser: {}};
    }

    case SET_CLIENTS: {
        return {...state, clients: [...action.payload]};
    }
    case SET_CLIENT: {
        return {...state, clients: [...state.clients, ...action.payload]};
    }
    //
    // case DELETE_USER: {
    //     const filter = state.users.filter(user => user._id !== action.payload);
    //
    //     return {...state, users: [...filter]};
    // }
    //
    case UPDATE_CLIENT: {
        const newClients = state.clients.map(client => client._id === action.payload._id ? action.payload : client);

        return {...state, clients: [...newClients]};
    }

    default:
        return state;
    }
};
