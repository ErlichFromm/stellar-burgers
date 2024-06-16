import { userReducer, initialState } from '../reducers/user';
import { IUser } from '../../types/index';
import { 
    TUserActions,
    USER_DATA_REQUEST,
    USER_DATA_REQUEST_SUCCESS,
    USER_DATA_REQUEST_FAILED,
    REFRESH_ACCESS_TOKEN_REQUEST,
    REFRESH_ACCESS_TOKEN_REQUEST_SUCCESS,
    REFRESH_ACCESS_TOKEN_REQUEST_FAILED,
    LOGIN_REQUEST,
    LOGIN_REQUEST_SUCCESS,
    LOGIN_REQUEST_FAILED,
    FORGOT_PASSWORD_REQUEST,
    FORGOT_PASSWORD_REQUEST_SUCCESS,
    FORGOT_PASSWORD_REQUEST_FAILED,
    USER_LOGOUT,
    USER_REGISTRATION_REQUEST,
    USER_REGISTRATION_REQUEST_SUCCESS,
    USER_REGISTRATION_REQUEST_FAILED,
    USER_UPDATE_REQUEST,
    USER_UPDATE_REQUEST_SUCCESS,
    USER_UPDATE_REQUEST_FAILED,
    RESET_PASSWORD_REQUEST,
    RESET_PASSWORD_REQUEST_SUCCESS,
    RESET_PASSWORD_REQUEST_FAILED } from '../actions/user';

describe('userReducer', () => {
    it('should return initial state', () => {
        expect(userReducer(undefined, {} as TUserActions)).toEqual(initialState);
    });

    it('should handle USER_DATA_REQUEST action', () => {
        const action = {type: USER_DATA_REQUEST}
        const newState = userReducer(undefined, action);
        const expectedState = {
            ...initialState,
            userDataRequest: true,
            userDataRequestSuccess: false,
            userDataRequestFailed: false,
        }
        expect(newState).toEqual(expectedState) ;
    });

    it('should handle USER_DATA_REQUEST_SUCCESS action', () => {

        const user: IUser = {
            email: 'Denis@yandex.ru',
            name: 'Denis'
        }

        const action = {
            type: USER_DATA_REQUEST_SUCCESS,
            payload: {
                user
            }
        }
        const newState = userReducer(undefined, action);
        const expectedState = {
            ...initialState,
            user,
            isAuth: true,
            isAuthChecked: true,

            userDataRequest: false,
            userDataRequestSuccess: true,
            userDataRequestFailed: false,
        }
        expect(newState).toEqual(expectedState) ;
    });

    it('should handle USER_DATA_REQUEST_FAILED action', () => {
        const action = {type: USER_DATA_REQUEST_FAILED }
        const newState = userReducer(undefined, action);
        const expectedState = {
            ...initialState,
            userDataRequest: false,
            userDataRequestSuccess: false,
            userDataRequestFailed: true,
        }
        expect(newState).toEqual(expectedState) ;
    });

    it('should handle REFRESH_ACCESS_TOKEN_REQUEST action', () => {
        const action = {type: REFRESH_ACCESS_TOKEN_REQUEST }
        const newState = userReducer(undefined, action);
        const expectedState = {
            ...initialState,
            tokensRequest: true,
            tokensRequestSuccess: false,
            tokensRequestFailed: false,
        }
        expect(newState).toEqual(expectedState) ;
    });

    it('should handle REFRESH_ACCESS_TOKEN_REQUEST_SUCCESS action', () => {
        const action = {type: REFRESH_ACCESS_TOKEN_REQUEST_SUCCESS }
        const newState = userReducer(undefined, action);
        const expectedState = {
            ...initialState,
            tokensRequest: false,
            tokensRequestSuccess: true,
            tokensRequestFailed: false,
        }
        expect(newState).toEqual(expectedState) ;
    });

    it('should handle REFRESH_ACCESS_TOKEN_REQUEST_FAILED action', () => {
        const action = {type: REFRESH_ACCESS_TOKEN_REQUEST_FAILED }
        const newState = userReducer(undefined, action);
        const expectedState = {
            ...initialState,
            tokensRequest: false,
            tokensRequestSuccess: false,
            tokensRequestFailed: true,
            isAuthChecked: true,
        }
        expect(newState).toEqual(expectedState) ;
    });

    it('should handle LOGIN_REQUEST action', () => {
        const action = {type: LOGIN_REQUEST }
        const newState = userReducer(undefined, action);
        const expectedState = {
            ...initialState,
            loginRequest: true,
            loginRequestSuccess: false,
            loginRequestFailed: false,
        }
        expect(newState).toEqual(expectedState) ;
    });

    it('should handle LOGIN_REQUEST_SUCCESS action', () => {

        const user: IUser = {
            email: 'Denis@yandex.ru',
            name: 'Denis'
        }

        const action = {
            type: LOGIN_REQUEST_SUCCESS,
            payload: {
                user
            }
        }

        const newState = userReducer(undefined, action);
        const expectedState = {
            ...initialState,
            loginRequest: false,
            loginRequestSuccess: true,
            loginRequestFailed: false,
            isAuth: true,
            user,
        }
        expect(newState).toEqual(expectedState) ;
    });

    it('should handle LOGIN_REQUEST_FAILED action', () => {
        const action = {type: LOGIN_REQUEST_FAILED }
        const newState = userReducer(undefined, action);
        const expectedState = {
            ...initialState,
            loginRequest: false,
            loginRequestSuccess: false,
            loginRequestFailed: true,
        }
        expect(newState).toEqual(expectedState) ;
    });

    it('should handle RESET_PASSWORD_REQUEST action', () => {
        const action = {type: RESET_PASSWORD_REQUEST }
        const newState = userReducer(undefined, action);
        const expectedState = {
            ...initialState,
            resetPassword: true,
            resetPasswordSuccess: false,
            resetPasswordFailed: false
        }
        expect(newState).toEqual(expectedState) ;
    });

    it('should handle RESET_PASSWORD_REQUEST_SUCCESS action', () => {
        const action = {type: RESET_PASSWORD_REQUEST_SUCCESS }
        const newState = userReducer(undefined, action);
        const expectedState = {
            ...initialState,
            resetPassword: false,
            resetPasswordSuccess: true,
            resetPasswordFailed: false
        }
        expect(newState).toEqual(expectedState) ;
    });

    it('should handle RESET_PASSWORD_REQUEST_FAILED action', () => {
        const action = {type: RESET_PASSWORD_REQUEST_FAILED }
        const newState = userReducer(undefined, action);
        const expectedState = {
            ...initialState,
            resetPassword: false,
            resetPasswordSuccess: false,
            resetPasswordFailed: true
        }
        expect(newState).toEqual(expectedState) ;
    });

    it('should handle USER_REGISTRATION_REQUEST action', () => {
        const action = {type: USER_REGISTRATION_REQUEST }
        const newState = userReducer(undefined, action);
        const expectedState = {
            ...initialState,
            registerUser: true,
            registerUserSuccess: false,
            registerUserFailed: false,

        }
        expect(newState).toEqual(expectedState) ;
    });

    it('should handle USER_REGISTRATION_REQUEST_SUCCESS action', () => {

        const user: IUser = {
            email: 'Denis@yandex.ru',
            name: 'Denis'
        }

        const action = {
            type: USER_REGISTRATION_REQUEST_SUCCESS,
            payload: {
                user,
            }
        }
        const newState = userReducer(undefined, action);
        const expectedState = {
            ...initialState,
            registerUser: false,
            registerUserSuccess: true,
            registerUserFailed: false,
            isAuthChecked: true,
            isAuth: true,
            user
        }
        expect(newState).toEqual(expectedState) ;
    });

    it('should handle USER_REGISTRATION_REQUEST_FAILED action', () => {
        const action = {type: USER_REGISTRATION_REQUEST_FAILED }
        const newState = userReducer(undefined, action);
        const expectedState = {
            ...initialState,
            registerUser: false,
            registerUserSuccess: false,
            registerUserFailed: true,

        }
        expect(newState).toEqual(expectedState) ;
    });

    it('should handle FORGOT_PASSWORD_REQUEST action', () => {
        const action = {type: FORGOT_PASSWORD_REQUEST }
        const newState = userReducer(undefined, action);
        const expectedState = {
            ...initialState,
            forgotPassword: true,
            forgotPasswordSuccess: false,
            forgotPasswordFailed: false,

        }
        expect(newState).toEqual(expectedState) ;
    });

    it('should handle FORGOT_PASSWORD_REQUEST_SUCCESS action', () => {
        const action = {type: FORGOT_PASSWORD_REQUEST_SUCCESS }
        const newState = userReducer(undefined, action);
        const expectedState = {
            ...initialState,
            forgotPassword: false,
            forgotPasswordSuccess: true,
            forgotPasswordFailed: false,

        }
        expect(newState).toEqual(expectedState) ;
    });

    it('should handle FORGOT_PASSWORD_REQUEST_FAILED action', () => {
        const action = {type: FORGOT_PASSWORD_REQUEST_FAILED }
        const newState = userReducer(undefined, action);
        const expectedState = {
            ...initialState,
            forgotPassword: false,
            forgotPasswordSuccess: false,
            forgotPasswordFailed: true,

        }
        expect(newState).toEqual(expectedState) ;
    });

    it('should handle USER_UPDATE_REQUEST action', () => {
        const action = {type: USER_UPDATE_REQUEST }
        const newState = userReducer(undefined, action);
        const expectedState = {
            ...initialState,
            updateUser: false,
            updateUserSuccess: false,
            updateUserFailed: false,

        }
        expect(newState).toEqual(expectedState) ;
    });

    it('should handle USER_UPDATE_REQUEST_SUCCESS action', () => {

        const user: IUser = {
            email: 'Denis@yandex.ru',
            name: 'Denis'
        }

        const action = {
            type: USER_UPDATE_REQUEST_SUCCESS,
            payload: {
                user
            }
        }
        const newState = userReducer(undefined, action);
        const expectedState = {
            ...initialState,
            updateUser: false,
            updateUserSuccess: true,
            updateUserFailed: false,
            user,

        }
        expect(newState).toEqual(expectedState) ;
    });

    it('should handle USER_UPDATE_REQUEST_FAILED action', () => {
        const action = {type: USER_UPDATE_REQUEST_FAILED }
        const newState = userReducer(undefined, action);
        const expectedState = {
            ...initialState,
            updateUser: false,
            updateUserSuccess: false,
            updateUserFailed: true,

        }
        expect(newState).toEqual(expectedState) ;
    });

    it('should handle USER_LOGOUT action', () => {
        const action = {type: USER_LOGOUT }
        const newState = userReducer(undefined, action);
        const expectedState = {
            ...initialState,
            updateUser: false,
            name: {
                user: '',
                email: '',
            },
            isAuth: false

        }
        expect(newState).toEqual(expectedState) ;
    });
    
});