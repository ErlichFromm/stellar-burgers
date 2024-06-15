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
    USER_REGISTRATION_REQUEST_FAILED,

    USER_UPDATE_REQUEST,
    USER_UPDATE_REQUEST_SUCCESS,
    USER_UPDATE_REQUEST_FAILED,

    RESET_PASSWORD_REQUEST,
    RESET_PASSWORD_REQUEST_SUCCESS,
    RESET_PASSWORD_REQUEST_FAILED
} from '../actions/user';

import { TUserActions } from '../actions/user';
import { IUser } from '../../types/index';

export interface IInitialState {
    user: IUser
    isAuth: boolean,
    isAuthChecked: boolean,
    userDataRequest: boolean,
    userDataRequestSuccess: boolean,
    userDataRequestFailed: boolean,

    tokensRequest: boolean,
    tokensRequestSuccess: boolean,
    tokensRequestFailed: boolean,

    loginRequest: boolean,
    loginRequestSuccess: boolean,
    loginRequestFailed: boolean,

    forgotPassword: boolean,
    forgotPasswordSuccess: boolean,
    forgotPasswordFailed: boolean,

    registerUser: boolean,
    registerUserSuccess: boolean,
    registerUserFailed: false,

    updateUser: boolean,
    updateUserSuccess: boolean,
    updateUserFailed: boolean,

    resetPassword: boolean,
    resetPasswordSuccess: boolean,
    resetPasswordFailed: boolean,
}

const initialState: IInitialState = {
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

    updateUser: false,
    updateUserSuccess: false,
    updateUserFailed: false,

    resetPassword: false,
    resetPasswordSuccess: false,
    resetPasswordFailed: false,

}

export const userReducer = (state = initialState, action: TUserActions) => {
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
        case USER_UPDATE_REQUEST: {
            return {
                ...state,
                updateUser: false,
                updateUserSuccess: false,
                updateUserFailed: false,
            }
        }
        case USER_UPDATE_REQUEST_SUCCESS: {
            return {
                ...state,
                updateUser: false,
                updateUserSuccess: true,
                updateUserFailed: false,
                user: {
                    name: action.payload.user.name,
                    email: action.payload.user.email
                }
            }
        }
        case USER_UPDATE_REQUEST_FAILED: {
            return {
                ...state,
                updateUser: false,
                updateUserSuccess: false,
                updateUserFailed: true,
            }
        }
        case RESET_PASSWORD_REQUEST: {
            return {
                ...state,
                resetPassword: true,
                resetPasswordSuccess: false,
                resetPasswordFailed: false
            }
        }
        case RESET_PASSWORD_REQUEST_SUCCESS: {
            return {
                ...state,
                resetPassword: false,
                resetPasswordSuccess: true,
                resetPasswordFailed: false
            }
        }
        case RESET_PASSWORD_REQUEST_FAILED: {
            return {
                ...state,
                resetPassword: false,
                resetPasswordSuccess: false,
                resetPasswordFailed: true
            }
        }
        default: {
            return state;
        }
    }
}

