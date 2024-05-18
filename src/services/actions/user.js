import {checkResponce} from '../../utils/check-responce';
import { 
    getAccessToken,
    getRefreshToken,
    setAccessToken,
    setRefreshToken,
    deleteTokens
 } from '../../utils/localStorage';

import { 
    loginRequest,
    getUserRequest,
    updateUserRequest,
    logoutRequest,
    createUserRequest,
    resetPasswordRequest,
    forgotPasswordRequest,
    refreshTokenRequest
 } from '../api';

export const USER_DATA_REQUEST = 'USER_DATA_REQUEST';
export const USER_DATA_REQUEST_SUCCESS = 'USER_DATA_REQUEST_SUCCESS';
export const USER_DATA_REQUEST_FAILED = 'USER_DATA_REQUEST_FAILED';

export const REFRESH_ACCESS_TOKEN_REQUEST = 'REFRESH_ACCESS_TOKEN_REQUEST';
export const REFRESH_ACCESS_TOKEN_REQUEST_SUCCESS = 'REFRESH_ACCESS_TOKEN_REQUEST_SUCCESS';
export const REFRESH_ACCESS_TOKEN_REQUEST_FAILED = 'REFRESH_ACCESS_TOKEN_REQUEST_FAILED';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_REQUEST_SUCCESS = 'LOGIN_REQUEST_SUCCESS';
export const LOGIN_REQUEST_FAILED = 'LOGIN_REQUEST_FAILED';

export const USER_DATA_UPDATE = 'USER_DATA_UPDATE';
export const USER_DATA_UPDATE_SUCCESS = 'USER_DATA_UPDATE_SUCCESS';
export const USER_DATA_UPDATE_FAILED = 'USER_DATA_UPDATE_FAILED';

export const FORGOT_PASSWORD_REQUEST = 'FORGOT_PASSWORD_REQUEST';
export const FORGOT_PASSWORD_REQUEST_SUCCESS = 'FORGOT_PASSWORD_REQUEST_SUCCESS';
export const FORGOT_PASSWORD_REQUEST_FAILED = 'FORGOT_PASSWORD_REQUEST_FAILED';

export const USER_LOGOUT = 'USER_LOGOUT';

export const USER_REGISTRATION_REQUEST = 'USER_REGISTRATION_REQUEST';
export const USER_REGISTRATION_REQUEST_SUCCESS = 'USER_REGISTRATION_REQUEST_SUCCESS';
export const USER_REGISTRATION_REQUEST_FAILED = 'USER_REGISTRATION_REQUEST_FAILED';

export const USER_UPDATE_REQUEST = 'USER_UPDATE_REQUEST';
export const USER_UPDATE_REQUEST_SUCCESS = 'USER_UPDATE_REQUEST_SUCCESS';
export const USER_UPDATE_REQUEST_FAILED = 'USER_UPDATE_REQUEST_FAILED';

export const RESET_PASSWORD_REQUEST = 'RESET_PASSWORD_REQUEST';
export const RESET_PASSWORD_REQUEST_SUCCESS = 'RESET_PASSWORD_REQUEST_SUCCESS';
export const RESET_PASSWORD_REQUEST_FAILED = 'RESET_PASSWORD_REQUEST_FAILED';

export const login = (form) => (dispatch)=> {
    dispatch({type: LOGIN_REQUEST})
    loginRequest(form)
        .then(res => checkResponce(res))
        .then(res => {
            dispatch({type: LOGIN_REQUEST_SUCCESS, payload: res});
            setAccessToken(res.accessToken);
            setRefreshToken(res.refreshToken);

        })
        .catch(error => {
            dispatch({type: USER_DATA_UPDATE_FAILED})
        })
}

export const logout = (cb) => (dispatch) => {
    logoutRequest()
        .then(res => checkResponce(res))
        .then(res => {
            dispatch({type: USER_LOGOUT});
            deleteTokens();
            cb();
        })
}

export const getUser = () => (dispatch) => {
    dispatch({type: USER_DATA_REQUEST});
    getUserRequest()
        .then(res => checkResponce(res))
        .then(res => {
            dispatch({type: USER_DATA_REQUEST_SUCCESS, payload: res})
        })
        .catch(error => {
            dispatch({type: USER_DATA_REQUEST_FAILED});
            dispatch(refreshToken());
        })
}


export const refreshToken = () => (dispatch) => {
    dispatch({type: REFRESH_ACCESS_TOKEN_REQUEST});
    refreshTokenRequest()
        .then(res => checkResponce(res))
        .then(res => {
            dispatch({type: REFRESH_ACCESS_TOKEN_REQUEST_SUCCESS});
            setAccessToken(res.accessToken);
            setRefreshToken(res.refreshToken);
            dispatch(getUser());
        })
        .catch(error => {
            dispatch({type: REFRESH_ACCESS_TOKEN_REQUEST_FAILED});
        })
}

export const forgotPassword = (form, cb) => (dispatch) => {
    dispatch({type: FORGOT_PASSWORD_REQUEST})
    forgotPasswordRequest(form.email)
        .then(res => checkResponce(res))
        .then(res => {
            dispatch({type: FORGOT_PASSWORD_REQUEST_SUCCESS})
            localStorage.setItem('resetPassword', true);
            cb();
        })
        .catch(error => {
            dispatch({type: FORGOT_PASSWORD_REQUEST_FAILED})
        })
    
}

export const createUser = (form, cb) => (dispatch) => {
    dispatch({type: USER_REGISTRATION_REQUEST})
    createUserRequest(form)
        .then(res => checkResponce(res))
        .then(res => {
            dispatch({type: USER_REGISTRATION_REQUEST_SUCCESS, payload: res});
            setAccessToken(res.accessToken);
            setRefreshToken(res.refreshToken);
            cb();
        })
        .catch(error => {
            dispatch({type: USER_REGISTRATION_REQUEST_FAILED})

        })
}

export const updateUser = (form) => (dispatch) => {
    dispatch({type:USER_UPDATE_REQUEST});
    updateUserRequest(form)
        .then(res => checkResponce(res))
        .then(res => {
            dispatch({type:USER_UPDATE_REQUEST_SUCCESS, payload: res});
        })
        .catch(error => {
            dispatch({type:USER_UPDATE_REQUEST_FAILED});
        })
}

export const resetPassword = (data, cb) => (dispatch) => {
    dispatch({type: RESET_PASSWORD_REQUEST})
    resetPasswordRequest(data.password, data.token)
        .then(res => checkResponce(res))
        .then(res => {
            dispatch({type: RESET_PASSWORD_REQUEST_SUCCESS});
            localStorage.removeItem('resetPassword');
            cb();
        })
        .catch(error => {
            dispatch({type: RESET_PASSWORD_REQUEST_FAILED})
            console.log(error);
        })
}