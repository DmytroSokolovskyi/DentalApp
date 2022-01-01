import {DELETE_CLIENT, DELETE_USER, SET_CLIENT, SET_CLIENTS, SET_USER, SET_VISITS, UPDATE_CLIENT} from "../actions";

const initialState = {
    // choseUser: {},
    clients: [],
    loginUser: {},
    visits: [],
};

export const mainReducer = (state = initialState, action) => {
    switch (action.type) {
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
        return {...state, clients: [...state.clients, action.payload]};
    }

    case DELETE_CLIENT: {
        const filter = state.clients.filter(client => client.id !== action.payload);

        return {...state, clients: [...filter]};
    }

    case UPDATE_CLIENT: {
        const newClients = state.clients.map(client => client._id === action.payload._id ? action.payload : client);

        return {...state, clients: [...newClients]};
    }

    case SET_VISITS: {
        return {...state, visits: [...action.payload]};
    }

    default:
        return state;
    }
};
