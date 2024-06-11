import {OPEN_INGREDIENT_MODAL,
        CLOSE_INGREDIENT_MODAL,
        OPEN_ORDER_DETAILS_MODAL,
        CLOSE_ORDER_DETAILS_MODAL} from '../actions/modals';

import { TModalActions } from '../actions/modals';

export interface IInitialState {
    ingredientModalIsOpened: boolean;
    orderModalIsOpened: boolean;
}

const initialState: IInitialState = {
    ingredientModalIsOpened: false,
    orderModalIsOpened:      false,
}

export const modalReducer = (state = initialState, action: TModalActions) => {
    switch(action.type){
        case OPEN_INGREDIENT_MODAL: {
            return {
                ...state,
                ingredientModalIsOpened: true,
            }
        }
        case CLOSE_INGREDIENT_MODAL: {
            return {
                ...state,
                ingredientModalIsOpened: false,
            }
        }
        case OPEN_ORDER_DETAILS_MODAL: {
            return {
                ...state,
                orderModalIsOpened: true,
            }
        }
        case CLOSE_ORDER_DETAILS_MODAL: {
            return {
                ...state,
                orderModalIsOpened: false,
            }
        }
        default: {
            return state;
        }
    }
}