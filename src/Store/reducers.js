import { combineReducers } from "redux";
import { SET_AUTH_SESSION, SET_USER_DETAILS } from "./actions";

function authSession(state = null, action) {
    switch (action.type) {
        case SET_AUTH_SESSION:
            return state = action.payload;
        default:
            return state;
    }
};


function userDetails(state = null, action) {
    switch (action.type) {
        case SET_USER_DETAILS:
            return state = action.payload;
        default:
            return state;
    }
};

export default combineReducers({
    authSession: authSession,
    userDetails: userDetails
})