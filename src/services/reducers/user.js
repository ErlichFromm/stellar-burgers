import {
    USER_DATA_REQUEST,
    USER_DATA_REQUEST_SUCCESS,
    USER_DATA_REQUEST_FAILED,

    REFRESH_ACCESS_TOKEN_REQUEST,
    REFRESH_ACCESS_TOKEN_REQUEST_SUCCESS,
    REFRESH_ACCESS_TOKEN_REQUEST_FAILED,

    LOGIN_REQUEST,
    LOGIN_REQUEST_SUCCESS,
    LOGIN_REQUEST_FAILED

} from '../actions/user';

import { setAccessToken, setRefreshToken } from '../../utils/localStorage';

const initialState = {
    user: {
        email: '',
        name: ''
    },
    isAuth: false,
    userDataRequest: false,
    userDataRequestSuccess: false,
    userDataRequestFailed: false,

    accessToken: '',
    refreshToken: '',
    tokensRequest: false,
    tokensRequestSuccess: false,
    tokensRequestFailed: false,

    loginRequest: false,
    loginRequestSuccess: false,
    loginRequestFailed: false,
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

                accessToken: setAccessToken(action.payload.accessToken),
                refreshToken: setRefreshToken(action.payload.refreshToken),

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
                accessToken: setAccessToken(action.payload.accessToken),
                refreshToken: setRefreshToken(action.payload.refreshToken),
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
        default: {
            return state;
        }
    }
}