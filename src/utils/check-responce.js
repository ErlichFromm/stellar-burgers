export const checkResponce = (res) => {

    if(res.ok){
        return res.json();
    }
    return Promise.reject(`Ошибка получения данных ${res.status}`)

}