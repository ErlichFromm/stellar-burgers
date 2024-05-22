
import { getAccessToken, getRefreshToken } from '../utils/localStorage';
import {IForm} from '../types/form-types'
import { IIngredient } from '../types/request-types';

export const BASE_URL:string = 'https://norma.nomoreparties.space/api';


// user
export const loginRequest = async (form: IForm): Promise<any> => {
    return await fetch(`${BASE_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
    })
}

export const getUserRequest = async (): Promise<any> => {
    return await fetch(`${BASE_URL}/auth/user`, {
        method: 'GET',
        headers: { 
            'Content-Type': 'application/json' ,
            'Authorization': `Bearer ${getAccessToken()}`
        },
    })
}


export const updateUserRequest = async (userInfo: IForm): Promise<any> => {
    return await fetch(`${BASE_URL}/auth/user`, {
        method: 'PATCH',
        headers: { 
            'Content-Type': 'application/json' ,
            'Authorization': `Bearer ${getAccessToken()}`
        },
        body: JSON.stringify(userInfo)
    })
};

export const logoutRequest = async (): Promise<any> => {
    return await fetch(`${BASE_URL}/auth/logout`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({'token': getRefreshToken()})
    })
};

export const createUserRequest = async (user: IForm): Promise<any> => {
    return await fetch(`${BASE_URL}/auth/register`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            'email': `${user.email}`,
            'password': `${user.password}`,
            'name': `${user.name}`
        })
    })
};

export const resetPasswordRequest = async (form: IForm): Promise<any> => {
    return await fetch(`${BASE_URL}/password-reset/reset`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            'password': `${form.password}`,
            'token': `${form.token}`
        })
    })
};

export const forgotPasswordRequest = async (email: IForm): Promise<any> => {
    return await fetch(`${BASE_URL}/password-reset`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            'email': `${email}`
        })
    })
};

// token

export const refreshTokenRequest = async (): Promise<any> => {
    return await fetch(`${BASE_URL}/auth/token`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            'token': `${getRefreshToken()}`
        })
    })
};

// ingredients

export const getIngredientRequest = async (): Promise<any> => {
    return await fetch(`${BASE_URL}/ingredients`)
}

// order

export const sendIngredientsRequest = async (ingredients: IIngredient[]): Promise<any> => {
    return await fetch(`${BASE_URL}/orders`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            ingredients
        })
    })
};