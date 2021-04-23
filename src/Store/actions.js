export const SET_AUTH_SESSION = 'SET_AUTH_SESSION';
export const SET_USER_DETAILS = 'SET_USER_DETAILS';

export const setAuthSession = (authSession) => {
    return {
        type: SET_AUTH_SESSION,
        payload: authSession
    }
}

export const setUserDetails = (userDetails) => {
    return {
        type: SET_USER_DETAILS,
        payload: userDetails
    }
}
