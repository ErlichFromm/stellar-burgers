export const checkResponce = (res: Response) => {

    if(!res.ok){
        return Promise.reject(res)
    }
    
    return res.json()

}