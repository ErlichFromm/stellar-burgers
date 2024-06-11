import { BASE_URL } from '../api'
import { checkResponce } from '../../utils/check-responce';

export const MAKE_ORDER_INGREDIENT: "MAKE_ORDER_INGREDIENT" = "MAKE_ORDER_INGREDIENT";
export const MAKE_ORDER_INGREDIENT_FAILED: "MAKE_ORDER_INGREDIENT_FAILED" = "MAKE_ORDER_INGREDIENT_FAILED";
export const MAKE_ORDER_INGREDIENT_SUCCESS: "MAKE_ORDER_INGREDIENT_SUCCESS" = "MAKE_ORDER_INGREDIENT_SUCCESS";

export interface IMakeOrderAction {
    readonly type: typeof MAKE_ORDER_INGREDIENT;
}

export interface IMakeOrderSuccessAction {
    readonly type: typeof MAKE_ORDER_INGREDIENT_SUCCESS;
    readonly payload: number
}

export interface IMakeOrderFailedAction {
    readonly type: typeof MAKE_ORDER_INGREDIENT_FAILED;
}

export type TOrderActions = 
    | IMakeOrderAction
    | IMakeOrderSuccessAction
    | IMakeOrderFailedAction


export const makeOrder = (body: any) => (dispatch: any) => {
    try {
        dispatch({ type: MAKE_ORDER_INGREDIENT });    
        fetch(`${BASE_URL}/orders`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({
                ingredients: body
            })

        })
            .then(res => checkResponce(res))
            .then(res => {
                dispatch({ type: MAKE_ORDER_INGREDIENT_SUCCESS, payload: res })
            })
            .catch(error => {
                dispatch({ type: MAKE_ORDER_INGREDIENT_FAILED })
            })
    }
    catch (error) {
        console.error(error)
    }
}