
import { getAccessToken, getRefreshToken } from '../utils/localStorage';

export const BASE_URL = 'https://norma.nomoreparties.space/api';


// user
export const loginRequest = async form => {
    return await fetch(`${BASE_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
    })
}

export const getUserRequest = async () => {
    return await fetch(`${BASE_URL}/auth/user`, {
        method: 'GET',
        headers: { 
            'Content-Type': 'application/json' ,
            'Authorization': `Bearer ${getAccessToken()}`
        },
    })
}


export const updateUserRequest = async userInfo => {
    return await fetch(`${BASE_URL}/auth/user`, {
        method: 'PATCH',
        headers: { 
            'Content-Type': 'application/json' ,
            'Authorization': `Bearer ${getAccessToken()}`
        },
        body: JSON.stringify(userInfo)
    })
};

export const logoutRequest = async () => {
    return await fetch(`${BASE_URL}/auth/logout`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({'token': getRefreshToken()})
    })
};

export const createUserRequest = async user => {
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

export const resetPasswordRequest = async (newPassword, token) => {
    return await fetch(`${BASE_URL}/password-reset/reset`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            'password': `${newPassword}`,
            'token': `${token}`
        })
    })
};

export const forgotPasswordRequest = async email => {
    return await fetch(`${BASE_URL}/password-reset`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            'email': `${email}`
        })
    })
};

// token

export const refreshTokenRequest = async () => {
    return await fetch(`${BASE_URL}/auth/token`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            'token': `${getRefreshToken()}`
        })
    })
};

// ingredients

export const getIngredientRequest = async () => {
    return await fetch(`${BASE_URL}/ingredients`)
}

// order

export const sendIngredientsRequest = async ingredients => {
    return await fetch(`${BASE_URL}/orders`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            ingredients
        })
    })
};