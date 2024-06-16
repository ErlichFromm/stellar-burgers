import { IOrder } from '../../types/index';

export const USER_ORDERS_CONNECTION_INIT: 'USER_ORDERS_CONNECTION_INIT' = 'USER_ORDERS_CONNECTION_INIT';
export const USER_ORDERS_CONNECTION_CLOSE: 'USER_ORDERS_CONNECTION_CLOSE' = 'USER_ORDERS_CONNECTION_CLOSE';
export const USER_ORDERS_CONNECTION_SUCCESS: 'USER_ORDERS_CONNECTION_SUCCESS' = 'USER_ORDERS_CONNECTION_SUCCESS';
export const USER_ORDERS_CONNECTION_CLOSED: 'USER_ORDERS_CONNECTION_CLOSED' = 'USER_ORDERS_CONNECTION_CLOSED';
export const USER_ORDERS_CONNECTION_ERROR: 'USER_ORDERS_CONNECTION_ERROR' = 'USER_ORDERS_CONNECTION_ERROR';
export const USER_ORDERS_GET_MESSAGE: 'USER_ORDERS_GET_MESSAGE' = 'USER_ORDERS_GET_MESSAGE';

export const userOrdersWSActions = {
    wsInit: USER_ORDERS_CONNECTION_INIT,
    wsClose: USER_ORDERS_CONNECTION_CLOSE,
    onOpen: USER_ORDERS_CONNECTION_SUCCESS,
    onClose: USER_ORDERS_CONNECTION_CLOSED,
    onError: USER_ORDERS_CONNECTION_ERROR,
    onMessage: USER_ORDERS_GET_MESSAGE,
};

export interface IUserOrdersConnectionInitAction {
    readonly type: typeof USER_ORDERS_CONNECTION_INIT;
}

export interface IUserOrdersConnectionCloseAction {
    readonly type: typeof USER_ORDERS_CONNECTION_CLOSE;
}

export interface IUserOrdersConnectionSuccessAction {
    readonly type: typeof USER_ORDERS_CONNECTION_SUCCESS;
}

export interface IUserOrdersConnectionClosedAction {
    readonly type: typeof USER_ORDERS_CONNECTION_CLOSED;
}

export interface IUserOrdersConnectionErrorAction {
    readonly type: typeof USER_ORDERS_CONNECTION_ERROR;
    payload: string;
}

export interface IUserOrdersGetMessageAction {
    readonly type: typeof USER_ORDERS_GET_MESSAGE;
    payload: {
        data: {
            orders: IOrder[];
            total: number;
            totalToday: number;
        };
    };
}

export type TUserOrdersActions =
    | IUserOrdersConnectionInitAction
    | IUserOrdersConnectionCloseAction
    | IUserOrdersConnectionSuccessAction
    | IUserOrdersConnectionClosedAction
    | IUserOrdersConnectionErrorAction
    | IUserOrdersGetMessageAction;