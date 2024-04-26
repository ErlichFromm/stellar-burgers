import {BASE_URL} from '../../utils/api';
import { checkResponce } from '../../utils/check-responce';

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
        .then(res => checkResponce(res))
        .then(res => {
            dispatch({type: MAKE_ORDER_INGREDIENT_SUCCESS, payload: res})
        })
        .catch(error => {
            dispatch({type: MAKE_ORDER_INGREDIENT_FAILED})
        })
}