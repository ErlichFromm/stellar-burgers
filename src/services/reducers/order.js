import {MAKE_ORDER_INGREDIENT,
        MAKE_ORDER_INGREDIENT_FAILED,
        MAKE_ORDER_INGREDIENT_SUCCESS} from '../actions/order'

const initialState = {
    order: undefined,
    orderRequest: false,
    orderFailed:  false,
}

export const orderReducer = (state = initialState, action) => {
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