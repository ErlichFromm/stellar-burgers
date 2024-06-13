import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import { socketMiddleware } from '../middleware/socket-middleware';
import { feedWsActions } from '../services/actions/feed';

import { ingredientsReducer } from "./reducers/ingredients";
import { tabsReducer } from "./reducers/tabs";
import { modalReducer } from './reducers/modals';
import { orderReducer } from "./reducers/order";
import { userReducer } from "./reducers/user";
import { feedReducer } from './reducers/feed';


const rootReducer = combineReducers({
    ingredients: ingredientsReducer,
    tabs: tabsReducer,
    modals: modalReducer,
    order: orderReducer,
    user: userReducer,
    feed: feedReducer
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaulMiddleware) => {
        return getDefaulMiddleware().concat(
            socketMiddleware(feedWsActions)
        )
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;