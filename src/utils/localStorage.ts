export function getAccessToken() : string | null{
    return localStorage.getItem('accessToken');
}

export function getRefreshToken(): string | null{
    return localStorage.getItem('refreshToken');
}

export function setAccessToken(accessToken:string): void{
    localStorage.setItem('accessToken', `${accessToken.split('Bearer ')[1]}`)
}

export function setRefreshToken(refreshToken:string): void{
    localStorage.setItem('refreshToken', refreshToken);
}


export function deleteTokens(): void{
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
}