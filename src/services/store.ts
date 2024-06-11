import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import { ingredientsReducer } from "./reducers/ingredients";
import { tabsReducer } from "./reducers/tabs";
import { modalReducer } from './reducers/modals';
import { orderReducer } from "./reducers/order";
import { userReducer } from "./reducers/user";


const rootReducer = combineReducers({
    ingredients: ingredientsReducer,
    tabs: tabsReducer,
    modals: modalReducer,
    order: orderReducer,
    user: userReducer
})

export const store = configureStore({
    reducer: rootReducer
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;