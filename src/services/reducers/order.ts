import {MAKE_ORDER_INGREDIENT,
        MAKE_ORDER_INGREDIENT_FAILED,
        MAKE_ORDER_INGREDIENT_SUCCESS,
        GET_ORDER_BY_NUMBER,
        GET_ORDER_BY_NUMBER_SUCCESS,
        GET_ORDER_BY_NUMBER_FAILED} from '../actions/order'

import { TOrderActions } from '../actions/order';
import { IOrder } from '../../types/index';
import { ISelectedOrder } from '../../types/index';

export interface IInitialState {
    order: IOrder | null;
    orderRequest: boolean;
    orderSuccess: boolean;
    orderFailed:  boolean;

    selectedOrder: ISelectedOrder | null;
    selectedOrderRequest: boolean;
    selectedOrderSuccess: boolean;
    selectedOrderFailed: boolean;
}

const initialState: IInitialState = {
    order: null,
    orderRequest: false,
    orderFailed:  false,
    orderSuccess: false,

    selectedOrder: null,
    selectedOrderRequest: false,
    selectedOrderSuccess: false,
    selectedOrderFailed: false,
}

export const orderReducer = (state = initialState, action: TOrderActions) => {
    switch(action.type){
        case MAKE_ORDER_INGREDIENT: {
            return {
                ...state,
                orderRequest: true,
                orderFailed:  false,
                selectedOrderSuccess: false,
            }
        }
        case MAKE_ORDER_INGREDIENT_FAILED: {
            return {
                ...state,
                orderRequest: false,
                orderFailed:  true,
                selectedOrderSuccess: false,
            }
        }
        case MAKE_ORDER_INGREDIENT_SUCCESS: {
            return {
                ...state,
                orderRequest: false,
                orderFailed:  false,
                selectedOrderSuccess: true,
                order: action.payload,
            }
        }
        case GET_ORDER_BY_NUMBER:{
            return {
                ...state,
                selectedOrderRequest: true,
                selectedOrderSuccess: false,
                selectedOrderFailed: false,
            }
        }
        case GET_ORDER_BY_NUMBER_SUCCESS:{
            
            return {
                ...state,
                selectedOrderRequest: false,
                selectedOrderSuccess: true,
                selectedOrderFailed: false,
                selectedOrder: action.payload,
                
            }
        }
        case GET_ORDER_BY_NUMBER_FAILED:{
            return {
                ...state,
                selectedOrderRequest: false,
                selectedOrderSuccess: false,
                selectedOrderFailed: true,
            }
        }
        default: {
            return state
        }
    }

}