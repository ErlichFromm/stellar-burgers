import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import {ingredientsReducer} from "./reducers/ingredients";
import {tabsReducer} from "./reducers/tabs";
import {modalReducer} from './reducers/modals';
import { orderReducer } from "./reducers/order";

const rootReducer = combineReducers({
    ingredients: ingredientsReducer,
    tabs: tabsReducer,
    modals: modalReducer,
    order: orderReducer,
})

export const store = configureStore({
    reducer: rootReducer
})