import { checkResponce } from '../../utils/check-responce';
import {
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

import { IUser } from '../../types/index';
import { AppDispatch } from '../store';

export const USER_DATA_REQUEST:'USER_DATA_REQUEST' = 'USER_DATA_REQUEST';
export const USER_DATA_REQUEST_SUCCESS:'USER_DATA_REQUEST_SUCCESS' = 'USER_DATA_REQUEST_SUCCESS';
export const USER_DATA_REQUEST_FAILED:'USER_DATA_REQUEST_FAILED' = 'USER_DATA_REQUEST_FAILED';

export const REFRESH_ACCESS_TOKEN_REQUEST:'REFRESH_ACCESS_TOKEN_REQUEST' = 'REFRESH_ACCESS_TOKEN_REQUEST';
export const REFRESH_ACCESS_TOKEN_REQUEST_SUCCESS:'REFRESH_ACCESS_TOKEN_REQUEST_SUCCESS' = 'REFRESH_ACCESS_TOKEN_REQUEST_SUCCESS';
export const REFRESH_ACCESS_TOKEN_REQUEST_FAILED:'REFRESH_ACCESS_TOKEN_REQUEST_FAILED' = 'REFRESH_ACCESS_TOKEN_REQUEST_FAILED';

export const LOGIN_REQUEST:'LOGIN_REQUEST' = 'LOGIN_REQUEST';
export const LOGIN_REQUEST_SUCCESS:'LOGIN_REQUEST_SUCCESS' = 'LOGIN_REQUEST_SUCCESS';
export const LOGIN_REQUEST_FAILED:'LOGIN_REQUEST_FAILED' = 'LOGIN_REQUEST_FAILED';

export const USER_DATA_UPDATE:'USER_DATA_UPDATE' = 'USER_DATA_UPDATE';
export const USER_DATA_UPDATE_SUCCESS:'USER_DATA_UPDATE_SUCCESS' = 'USER_DATA_UPDATE_SUCCESS';
export const USER_DATA_UPDATE_FAILED:'USER_DATA_UPDATE_FAILED' = 'USER_DATA_UPDATE_FAILED';

export const FORGOT_PASSWORD_REQUEST:'FORGOT_PASSWORD_REQUEST' = 'FORGOT_PASSWORD_REQUEST';
export const FORGOT_PASSWORD_REQUEST_SUCCESS:'FORGOT_PASSWORD_REQUEST_SUCCESS' = 'FORGOT_PASSWORD_REQUEST_SUCCESS';
export const FORGOT_PASSWORD_REQUEST_FAILED:'FORGOT_PASSWORD_REQUEST_FAILED' = 'FORGOT_PASSWORD_REQUEST_FAILED';

export const USER_LOGOUT:'USER_LOGOUT' = 'USER_LOGOUT';

export const USER_REGISTRATION_REQUEST:'USER_REGISTRATION_REQUEST' = 'USER_REGISTRATION_REQUEST';
export const USER_REGISTRATION_REQUEST_SUCCESS:'USER_REGISTRATION_REQUEST_SUCCESS' = 'USER_REGISTRATION_REQUEST_SUCCESS';
export const USER_REGISTRATION_REQUEST_FAILED:'USER_REGISTRATION_REQUEST_FAILED' = 'USER_REGISTRATION_REQUEST_FAILED';

export const USER_UPDATE_REQUEST:'USER_UPDATE_REQUEST' = 'USER_UPDATE_REQUEST';
export const USER_UPDATE_REQUEST_SUCCESS:'USER_UPDATE_REQUEST_SUCCESS' = 'USER_UPDATE_REQUEST_SUCCESS';
export const USER_UPDATE_REQUEST_FAILED:'USER_UPDATE_REQUEST_FAILED' = 'USER_UPDATE_REQUEST_FAILED';

export const RESET_PASSWORD_REQUEST:'RESET_PASSWORD_REQUEST' = 'RESET_PASSWORD_REQUEST';
export const RESET_PASSWORD_REQUEST_SUCCESS:'RESET_PASSWORD_REQUEST_SUCCESS' = 'RESET_PASSWORD_REQUEST_SUCCESS';
export const RESET_PASSWORD_REQUEST_FAILED:'RESET_PASSWORD_REQUEST_FAILED' = 'RESET_PASSWORD_REQUEST_FAILED';

export interface IUserDataAction {
    readonly type: typeof USER_DATA_REQUEST
}

export interface IUserDataSuccessAction {
    readonly type: typeof USER_DATA_REQUEST_SUCCESS;
    readonly payload: {user: IUser}
}

export interface IUserDataFailedAction {
    readonly type: typeof USER_DATA_REQUEST_FAILED
}

export interface IRefreshTokenAction {
    readonly type: typeof REFRESH_ACCESS_TOKEN_REQUEST
}

export interface IRefreshTokenSuccessAction {
    readonly type: typeof REFRESH_ACCESS_TOKEN_REQUEST_SUCCESS
}

export interface IRefreshTokenFailedAction {
    readonly type: typeof REFRESH_ACCESS_TOKEN_REQUEST_FAILED
}

export interface ILoginAction {
    readonly type: typeof LOGIN_REQUEST
}

export interface ILoginSuccessAction {
    readonly type: typeof LOGIN_REQUEST_SUCCESS
    readonly payload: {user: IUser}
}

export interface ILoginFailedAction {
    readonly type: typeof LOGIN_REQUEST_FAILED
}

export interface IUserLogoutAction {
    readonly type: typeof USER_LOGOUT
}

export interface IForgotPassAction {
    readonly type: typeof FORGOT_PASSWORD_REQUEST
}

export interface IForgotPassSuccessAction {
    readonly type: typeof FORGOT_PASSWORD_REQUEST_SUCCESS
}

export interface IForgotPassFailedAction {
    readonly type: typeof FORGOT_PASSWORD_REQUEST_FAILED
}

export interface IRegistrationAction {
    readonly type: typeof USER_REGISTRATION_REQUEST
}

export interface IRegistrationSuccessAction {
    readonly type: typeof USER_REGISTRATION_REQUEST_SUCCESS
    readonly payload: {user: IUser}
}

export interface IRegistrationFailedAction {
    readonly type: typeof USER_REGISTRATION_REQUEST_FAILED
}

export interface IUserUpdateAction {
    readonly type: typeof USER_UPDATE_REQUEST
}

export interface IUserUpdateSuccessAction {
    readonly type: typeof USER_UPDATE_REQUEST_SUCCESS
    readonly payload: {user: IUser}
}

export interface IUserUpdateFailedAction {
    readonly type: typeof USER_UPDATE_REQUEST_FAILED
}

export interface IResetPassAction {
    readonly type: typeof RESET_PASSWORD_REQUEST
}

export interface IResetPassSuccessAction {
    readonly type: typeof RESET_PASSWORD_REQUEST_SUCCESS
}

export interface IResetPassFailedAction {
    readonly type: typeof RESET_PASSWORD_REQUEST_FAILED
}

export type TUserActions = 
    | IUserDataAction
    | IUserDataSuccessAction
    | IUserDataFailedAction
    | IRefreshTokenAction
    | IRefreshTokenSuccessAction
    | IRefreshTokenFailedAction
    | ILoginAction
    | ILoginSuccessAction
    | ILoginFailedAction
    | IUserLogoutAction
    | IForgotPassAction
    | IForgotPassSuccessAction
    | IForgotPassFailedAction
    | IRegistrationAction
    | IRegistrationSuccessAction
    | IRegistrationFailedAction
    | IUserUpdateAction
    | IUserUpdateSuccessAction
    | IUserUpdateFailedAction
    | IResetPassAction
    | IResetPassSuccessAction
    | IResetPassFailedAction


export const login = 
    (form: {email: string; password: string}) => (dispatch: AppDispatch) => {
    try {
        dispatch({ type: LOGIN_REQUEST })
        loginRequest(form)
            .then(res => checkResponce(res))
            .then(res => {
                dispatch({ type: LOGIN_REQUEST_SUCCESS, payload: res });
                setAccessToken(res.accessToken);
                setRefreshToken(res.refreshToken);

            })
            .catch(error => {
                dispatch({ type: USER_DATA_UPDATE_FAILED })
            })
    } catch (error) {
        console.error(error);
    }
}

export const logout = () => (dispatch: AppDispatch) => {
    try {
        logoutRequest()
            .then(res => checkResponce(res))
            .then(res => {
                dispatch({ type: USER_LOGOUT });
                deleteTokens();
            }).catch()
    } catch (error) {
        console.error(error);
    }

}

export const getUser = () => (dispatch: AppDispatch) => {
    try {
        dispatch({ type: USER_DATA_REQUEST });
        getUserRequest()
            .then(res => checkResponce(res))
            .then(res => {
                dispatch({ type: USER_DATA_REQUEST_SUCCESS, payload: res })
            })
            .catch(error => {
                dispatch({ type: USER_DATA_REQUEST_FAILED });
                dispatch(refreshToken());
            })
    } catch (error) {
        console.error(error)
    }
}


export const refreshToken = () => (dispatch: AppDispatch) => {
    try {
        dispatch({ type: REFRESH_ACCESS_TOKEN_REQUEST });
        refreshTokenRequest()
            .then(res => checkResponce(res))
            .then(res => {
                dispatch({ type: REFRESH_ACCESS_TOKEN_REQUEST_SUCCESS });
                setAccessToken(res.accessToken);
                setRefreshToken(res.refreshToken);
                dispatch(getUser());
            })
            .catch(error => {
                dispatch({ type: REFRESH_ACCESS_TOKEN_REQUEST_FAILED });
            })
    } catch (error) {
        console.error(error)
    }
}

export const forgotPassword = 
    (form: {email: string}, cb: () => void) => (dispatch: AppDispatch) => {
    try {
        dispatch({ type: FORGOT_PASSWORD_REQUEST })
        forgotPasswordRequest(form.email)
            .then(res => checkResponce(res))
            .then(res => {
                dispatch({ type: FORGOT_PASSWORD_REQUEST_SUCCESS })
                localStorage.setItem('resetPassword', 'true');
                cb();
            })
            .catch(error => {
                dispatch({ type: FORGOT_PASSWORD_REQUEST_FAILED })
            })
    } catch (error) {
        console.error(error)
    }

}

export const createUser = 
    (form: {email: string; name: string; password: string}, cb: () => void) => (dispatch: AppDispatch) => {
    dispatch({ type: USER_REGISTRATION_REQUEST })
    createUserRequest(form)
        .then(res => checkResponce(res))
        .then(res => {
            dispatch({ type: USER_REGISTRATION_REQUEST_SUCCESS, payload: res });
            setAccessToken(res.accessToken);
            setRefreshToken(res.refreshToken);
            cb();
        })
        .catch(error => {
            dispatch({ type: USER_REGISTRATION_REQUEST_FAILED })

        })
}

export const updateUser = 
    (form: {name: string; email: string; password: string}) => (dispatch: AppDispatch) => {
    try {
        dispatch({ type: USER_UPDATE_REQUEST });
        updateUserRequest(form)
            .then(res => checkResponce(res))
            .then(res => {
                dispatch({ type: USER_UPDATE_REQUEST_SUCCESS, payload: res });
            })
            .catch(error => {
                dispatch({ type: USER_UPDATE_REQUEST_FAILED });
            })
    } catch (error) {
        console.error(error);
    }
}

export const resetPassword 
    = (form: {password: string; code: string; token: string}, cb: () => void) => (dispatch: AppDispatch) => {
    try{
    dispatch({ type: RESET_PASSWORD_REQUEST })
    resetPasswordRequest(form)
        .then(res => checkResponce(res))
        .then(res => {
            dispatch({ type: RESET_PASSWORD_REQUEST_SUCCESS });
            localStorage.removeItem('resetPassword');
            cb();
        })
        .catch(error => {
            dispatch({ type: RESET_PASSWORD_REQUEST_FAILED })
            console.log(error);
        })
    }catch(error){
        console.error(error);
    }
}