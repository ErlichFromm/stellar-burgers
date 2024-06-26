import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import { socketMiddleware } from '../middleware/socket-middleware';
import { feedWsActions } from '../services/actions/feed';
import { userOrdersWSActions } from '../services/actions/user-orders';

import { ingredientsReducer } from "./reducers/ingredients";
import { tabsReducer } from "./reducers/tabs";
import { modalReducer } from './reducers/modals';
import { orderReducer } from "./reducers/order";
import { userReducer } from "./reducers/user";
import { feedReducer } from './reducers/feed';
import { userOrdersReducer } from './reducers/user-orders';


const rootReducer = combineReducers({
    ingredients: ingredientsReducer,
    tabs: tabsReducer,
    modals: modalReducer,
    order: orderReducer,
    user: userReducer,
    feed: feedReducer,
    userOrders: userOrdersReducer,
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaulMiddleware) => {
        return getDefaulMiddleware({serializableCheck: false}).concat(
            socketMiddleware(feedWsActions),
            socketMiddleware(userOrdersWSActions)
        )
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;