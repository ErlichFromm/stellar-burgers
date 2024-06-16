import { IOrder } from '../../types/index';

import {
    USER_ORDERS_CONNECTION_SUCCESS,
    USER_ORDERS_GET_MESSAGE,
    USER_ORDERS_CONNECTION_CLOSED,
    USER_ORDERS_CONNECTION_ERROR,
    TUserOrdersActions,
} from "../actions/user-orders";

export interface IInitialState{
    orders: Array<IOrder>;
    total: number;
    totalToday: number;
    isOpen: boolean;
    error: string | null;
}

export const initialState = {
    orders: [],
    total: 0,
    totalToday: 0,
    isOpen: false,
    error: null,
}

export const userOrdersReducer = (state = initialState, action: TUserOrdersActions) => {
    switch (action.type) {
        case USER_ORDERS_CONNECTION_SUCCESS: {
            return {
                ...state,
                isOpen: true,
                error: null
            };
        }
        case USER_ORDERS_CONNECTION_ERROR: {
            return {
                ...state,
                error: action.payload,
            };
        }
        case USER_ORDERS_CONNECTION_CLOSED: {
            return {
                ...state,
                isOpen: false,
            };
        }
        case USER_ORDERS_GET_MESSAGE: {
            return {
                ...state,
                orders: action.payload.data.orders,
                total: action.payload.data.total,
                totalToday: action.payload.data.totalToday,
            };
        }
        default: {
            return state;
        }
    }
};