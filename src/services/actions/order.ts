import { BASE_URL } from '../api'
import { checkResponce } from '../../utils/check-responce';
import { IOrder, ISelectedOrder } from '../../types/index';
import { AppDispatch } from '../store';
import { getOrderByNumberRequest } from '../api';

export const MAKE_ORDER_INGREDIENT: "MAKE_ORDER_INGREDIENT" = "MAKE_ORDER_INGREDIENT";
export const MAKE_ORDER_INGREDIENT_FAILED: "MAKE_ORDER_INGREDIENT_FAILED" = "MAKE_ORDER_INGREDIENT_FAILED";
export const MAKE_ORDER_INGREDIENT_SUCCESS: "MAKE_ORDER_INGREDIENT_SUCCESS" = "MAKE_ORDER_INGREDIENT_SUCCESS";

export const GET_ORDER_BY_NUMBER: 'GET_ORDER_BY_NUMBER' = 'GET_ORDER_BY_NUMBER';
export const GET_ORDER_BY_NUMBER_SUCCESS: 'GET_ORDER_BY_NUMBER_SUCCESS' = 'GET_ORDER_BY_NUMBER_SUCCESS';
export const GET_ORDER_BY_NUMBER_FAILED: 'GET_ORDER_BY_NUMBER_FAILED' = 'GET_ORDER_BY_NUMBER_FAILED';



export interface IMakeOrderAction {
    readonly type: typeof MAKE_ORDER_INGREDIENT;
}

export interface IMakeOrderSuccessAction {
    readonly type: typeof MAKE_ORDER_INGREDIENT_SUCCESS;
    readonly payload: IOrder
}

export interface IMakeOrderFailedAction {
    readonly type: typeof MAKE_ORDER_INGREDIENT_FAILED;
}

export interface IGetOrderByNumberAction {
    readonly type: typeof GET_ORDER_BY_NUMBER;
}

export interface IGetOrderByNumberSuccessAction {
    readonly type: typeof GET_ORDER_BY_NUMBER_SUCCESS;
    readonly payload: ISelectedOrder;
}

export interface IGetOrderByNumberFailedAction {
    readonly type: typeof GET_ORDER_BY_NUMBER_FAILED;
}

export type TOrderActions = 
    | IMakeOrderAction
    | IMakeOrderSuccessAction
    | IMakeOrderFailedAction
    | IGetOrderByNumberAction
    | IGetOrderByNumberSuccessAction
    | IGetOrderByNumberFailedAction


export const makeOrder = (body: any) => (dispatch: AppDispatch) => {
    try {
        dispatch({ type: MAKE_ORDER_INGREDIENT });    
        fetch(`${BASE_URL}/orders`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({
                ingredients: body,
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

export const getOrderByNumber = (number: string) => (dispatch: AppDispatch) => {
    try{
        dispatch({type: GET_ORDER_BY_NUMBER})
        getOrderByNumberRequest(number)
            .then(res => checkResponce(res))
            .then(res => {
                dispatch({type: GET_ORDER_BY_NUMBER_SUCCESS, payload: res.orders[0]})
            })
            .catch(error => {
                dispatch({type: GET_ORDER_BY_NUMBER_FAILED})
            })
    }
    catch (error) {
        console.error(error)
    }
}