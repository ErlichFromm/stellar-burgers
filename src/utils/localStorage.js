export function getAccessToken(){
    return localStorage.getItem('accessToken');
}

export function getRefreshToken(){
    return localStorage.getItem('refreshToken');
}

export function setAccessToken(accessToken){
    localStorage.setItem('accessToken', `${accessToken.split('Bearer ')[1]}`)
}

export function setRefreshToken(refreshToken){
    localStorage.setItem('refreshToken', refreshToken);
}