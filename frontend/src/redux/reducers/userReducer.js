import {DELETE_USER, SET_CHOSE_USER, SET_USER, SET_USERS, UPDATE_USER} from "../actions";

const initialState = {choseUser: {}, users: []};

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
    case SET_CHOSE_USER: {
        return {...state, choseUser: {...action.payload}};
    }

    case SET_USER: {
        return {...state, users: [...state.users, action.payload]};
    }

    case SET_USERS: {
        return {...state, users: [...action.payload]};
    }

    case DELETE_USER: {
        const filter = state.users.filter(user => user._id !== action.payload);

        return {...state, users: [...filter]};
    }

    case UPDATE_USER: {
        return {...state};
    }

    default:
        return state;
    }
};
