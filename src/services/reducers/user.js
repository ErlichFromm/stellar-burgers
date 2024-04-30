import {
    USER_DATA_REQUEST,
    USER_DATA_REQUEST_SUCCESS,
    USER_DATA_REQUEST_FAILED,

    REFRESH_ACCESS_TOKEN_REQUEST,
    REFRESH_ACCESS_TOKEN_REQUEST_SUCCESS,
    REFRESH_ACCESS_TOKEN_REQUEST_FAILED,

    LOGIN_REQUEST,
    LOGIN_REQUEST_SUCCESS,
    LOGIN_REQUEST_FAILED,

    USER_LOGOUT,

    FORGOT_PASSWORD_REQUEST,
    FORGOT_PASSWORD_REQUEST_SUCCESS,
    FORGOT_PASSWORD_REQUEST_FAILED,

    USER_REGISTRATION_REQUEST,
    USER_REGISTRATION_REQUEST_SUCCESS,
    USER_REGISTRATION_REQUEST_FAILED
} from '../actions/user';


const initialState = {
    user: {
        email: '',
        name: ''
    },
    isAuth: false,
    isAuthChecked: false,
    userDataRequest: false,
    userDataRequestSuccess: false,
    userDataRequestFailed: false,

    tokensRequest: false,
    tokensRequestSuccess: false,
    tokensRequestFailed: false,

    loginRequest: false,
    loginRequestSuccess: false,
    loginRequestFailed: false,

    forgotPassword: false,
    forgotPasswordSuccess: false,
    forgotPasswordFailed: false,

    registerUser: false,
    registerUserSuccess: false,
    registerUserFailed: false,  

}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_DATA_REQUEST: {
            return {
                ...state,
                userDataRequest: true,
                userDataRequestSuccess: false,
                userDataRequestFailed: false,
            }
        }
        case USER_DATA_REQUEST_SUCCESS: {
            return {
                ...state,
                user: action.payload.user,
                isAuth: true,
                isAuthChecked: true,

                userDataRequest: false,
                userDataRequestSuccess: true,
                userDataRequestFailed: false,
            }
        }
        case USER_DATA_REQUEST_FAILED: {
            return {
                ...state,
                userDataRequest: false,
                userDataRequestSuccess: false,
                userDataRequestFailed: true,
            }
        }
        case REFRESH_ACCESS_TOKEN_REQUEST: {
            return {
                ...state,
                tokensRequest: true,
                tokensRequestSuccess: false,
                tokensRequestFailed: false,
            }
        }
        case REFRESH_ACCESS_TOKEN_REQUEST_SUCCESS: {
            return {
                ...state,
                tokensRequest: false,
                tokensRequestSuccess: true,
                tokensRequestFailed: false,
            }
        }
        case REFRESH_ACCESS_TOKEN_REQUEST_FAILED: {
            return {
                ...state,
                tokensRequest: false,
                tokensRequestSuccess: false,
                tokensRequestFailed: true,
                isAuthChecked: true,
            }
        }
        case LOGIN_REQUEST: {
            return {
                ...state,
                loginRequest: true,
                loginRequestSuccess: false,
                loginRequestFailed: false,
            }
        }
        case LOGIN_REQUEST_SUCCESS: {
            return {
                ...state,
                loginRequest: false,
                loginRequestSuccess: true,
                loginRequestFailed: false,
                isAuth: true,
                user: {
                    email: action.payload.user.email,
                    name: action.payload.user.name,
                }
            }
        }
        case LOGIN_REQUEST_FAILED: {
            return {
                ...state,
                loginRequest: false,
                loginRequestSuccess: false,
                loginRequestFailed: true,
            }
        }
        case USER_LOGOUT: {
            return {
                ...state,
                name: {
                    user: '',
                    email: '',
                },
                isAuth: false
            }
        }
        case FORGOT_PASSWORD_REQUEST: {
            return {
                ...state,
                forgotPassword: true,
                forgotPasswordSuccess: false,
                forgotPasswordFailed: false,
            }
        }
        case FORGOT_PASSWORD_REQUEST_SUCCESS: {
            return {
                ...state,
                forgotPassword: false,
                forgotPasswordSuccess: true,
                forgotPasswordFailed: false,
            }
        }
        case FORGOT_PASSWORD_REQUEST_FAILED: {
            return {
                ...state,
                forgotPassword: false,
                forgotPasswordSuccess: false,
                forgotPasswordFailed: true,
            }
        }
        case USER_REGISTRATION_REQUEST: {
            return {
                ...state,
                registerUser: true,
                registerUserSuccess: false,
                registerUserFailed: false,  
            }
        }
        case USER_REGISTRATION_REQUEST_SUCCESS: {
            return {
                ...state,
                registerUser: false,
                registerUserSuccess: true,
                registerUserFailed: false,  
                isAuthChecked: true,
                isAuth: true,
                user: {
                    email: action.payload.user.email,
                    name: action.payload.user.name,
                }
            }
        }
        case USER_REGISTRATION_REQUEST_FAILED: {
            return {
                ...state,
                registerUser: false,
                registerUserSuccess: false,
                registerUserFailed: true,  
            }
        }
        default: {
            return state;
        }
    }
}