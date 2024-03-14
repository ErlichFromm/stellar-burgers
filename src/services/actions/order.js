import {BASE_URL} from '../../utils/api';

export const MAKE_ORDER_INGREDIENT         = "MAKE_ORDER_INGREDIENT";
export const MAKE_ORDER_INGREDIENT_FAILED  = "MAKE_ORDER_INGREDIENT_FAILED";
export const MAKE_ORDER_INGREDIENT_SUCCESS = "MAKE_ORDER_INGREDIENT_SUCCESS";

export const makeOrder = (body) => (dispatch) => {
    dispatch({type: MAKE_ORDER_INGREDIENT});
    fetch(`${BASE_URL}/orders`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(body)

        })
        .then(res => {
            if(res.ok){
                return res.json();
            }
            return Promise.reject(`Ошибка получения данных ${res.status}`)
        })
        .then(res => {
            dispatch({type: MAKE_ORDER_INGREDIENT_SUCCESS, payload: res})
        })
        .catch(error => {
            dispatch({type: MAKE_ORDER_INGREDIENT_FAILED})
        })
}