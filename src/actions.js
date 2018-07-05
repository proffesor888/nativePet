import { 
    LOG_IN,
    LOG_IN_SUCCESSFUL,
    LOG_IN_FAILED,
    SIGN_IN,
    SIGN_IN_SUCCESSFUL,
    SIGN_IN_FAILED,
} from "./constants";

export const logIn = (payload) => {
    return {
        type: LOG_IN,
        payload
    };
};

export const logInSuccessful = (payload) => {
    return {
        type: LOG_IN_SUCCESSFUL,
        payload
    };
};

export const logInFailed = (payload) => {
    return {
        type: LOG_IN_FAILED,
        payload
    };
};

export const signIn = (payload) => {
    return {
        type: SIGN_IN,
        payload
    };
};

export const signInSuccessful = (payload) => {
    return {
        type: SIGN_IN_SUCCESSFUL,
        payload
    };
};

export const signInFailed = (payload) => {
    return {
        type: SIGN_IN_FAILED,
        payload
    };
};