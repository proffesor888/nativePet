import {
    LOG_IN,
    LOG_IN_SUCCESSFUL,
    LOG_IN_FAILED,
    SIGN_IN,
    SIGN_IN_SUCCESSFUL,
    SIGN_IN_FAILED,
} from './constants';

const initialState = {
    data: {},
    error: {}
}

const userReducer = (state=initialState, action) => {
    switch(action.type) {
        case LOG_IN: {
            return ({
                ...state, isFetching: true
            })
        }
        case LOG_IN_SUCCESSFUL: {
            return ({
                ...state, isFetching: false, data: action.payload
            })
        }
        case LOG_IN_FAILED: {
            return ({
                ...state, isFetching: false, error: action.payload
            })
        }
        case SIGN_IN: {
            return ({
                ...state, isFetching: true
            })
        }
        case SIGN_IN_SUCCESSFUL: {
            return ({
                ...state, isFetching: false, data: action.payload
            })
        }
        case SIGN_IN_FAILED: {
            return ({
                ...state, isFetching: false, error: action.payload
            })
        }
        default: {
            return state
        }
    }
}

export default userReducer;