import {MAKE_ORDER_INGREDIENT,
        MAKE_ORDER_INGREDIENT_FAILED,
        MAKE_ORDER_INGREDIENT_SUCCESS} from '../actions/order'

import { TOrderActions } from '../actions/order';
import { IIngredient } from '../../types/index';
import { IOrder } from '../../types/request-types';


export interface IInitialState {
    order: IOrder | null,
    orderRequest: boolean,
    orderFailed:  boolean,
}

const initialState: IInitialState = {
    order: null,
    orderRequest: false,
    orderFailed:  false,
}

export const orderReducer = (state = initialState, action: TOrderActions) => {
    switch(action.type){
        case MAKE_ORDER_INGREDIENT: {
            return {
                ...state,
                orderRequest: true,
                orderFailed:  false,
            }
        }
        case MAKE_ORDER_INGREDIENT_FAILED: {
            return {
                ...state,
                orderRequest: false,
                orderFailed:  true,
            }
        }
        case MAKE_ORDER_INGREDIENT_SUCCESS: {
            return {
                ...state,
                orderRequest: false,
                orderFailed:  false,
                order: action.payload,
            }
        }
        default: {
            return state
        }
    }

}