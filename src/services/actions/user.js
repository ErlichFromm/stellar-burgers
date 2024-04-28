import {checkResponce} from '../../utils/check-responce';
import { 
    getAccessToken,
    getRefreshToken,
    setAccessToken,
    setRefreshToken
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

export const USER_LOGOUT = 'USER_LOGOUT';

export const login = (form) => (dispatch)=> {
    dispatch({type: LOGIN_REQUEST})
    loginRequest(form)
        .then(res => checkResponce(res))
        .then(res => {
            dispatch({type: LOGIN_REQUEST_SUCCESS, payload: res})
        })
        .catch(error => {
            dispatch({type: USER_DATA_UPDATE_FAILED})
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
            setAccessToken(res.succesToken);
            setRefreshToken(res.refreshToken);
        })
        .catch(error => {
            dispatch({type: REFRESH_ACCESS_TOKEN_REQUEST_FAILED});
        })
}

// export const updateUser = () => {updateUserRequest}
// export const logout = () => {logoutRequest}
// export const createUser = () => {createUserRequest}
// export const resetPassword = () => {resetPasswordRequest}
// export const forgotPassword = () => {forgotPasswordRequest}

