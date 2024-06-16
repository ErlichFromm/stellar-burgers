import { 
    TOrderActions,
    MAKE_ORDER_INGREDIENT,
    MAKE_ORDER_INGREDIENT_FAILED,
    MAKE_ORDER_INGREDIENT_SUCCESS,
    GET_ORDER_BY_NUMBER,
    GET_ORDER_BY_NUMBER_SUCCESS,
    GET_ORDER_BY_NUMBER_FAILED 
} from '../actions/order';
import { orderReducer, initialState } from '../reducers/order';

describe('orderReducer', () => {
    it('should return initial state', () => {
        expect(orderReducer(undefined, {} as TOrderActions)).toEqual(initialState);
    });

    it('should handle MAKE_ORDER_INGREDIENT action', () => {
        const action = {
            type: MAKE_ORDER_INGREDIENT,
        }
        const newState = orderReducer(initialState, action);
        const expectedState = {
            ...initialState,
            orderRequest: true,
            orderFailed:  false,
            selectedOrderSuccess: false,
        }
        expect(newState).toEqual(expectedState) 
    })

    it('should handle MAKE_ORDER_INGREDIENT_FAILED action', () => {
        const action = {
            type: MAKE_ORDER_INGREDIENT_FAILED,
        }
        const newState = orderReducer(initialState, action);
        const expectedState = {
            ...initialState,
            orderRequest: false,
            orderFailed:  true,
            selectedOrderSuccess: false,
        }
        expect(newState).toEqual(expectedState) 
    })

    it('should handle GET_ORDER_BY_NUMBER action', () => {
        const action = {type: GET_ORDER_BY_NUMBER}
        const newState = orderReducer(initialState, action);
        const expectedState = {
            ...initialState,
            selectedOrderRequest: true,
            selectedOrderSuccess: false,
            selectedOrderFailed: false,
        }
        expect(newState).toEqual(expectedState) 
    })

    it('should handle GET_ORDER_BY_NUMBER_FAILED action', () => {
        const action = {type: GET_ORDER_BY_NUMBER_FAILED}
        const newState = orderReducer(initialState, action);
        const expectedState = {
            ...initialState,
            selectedOrderRequest: false,
            selectedOrderSuccess: false,
            selectedOrderFailed: true,
        }
        expect(newState).toEqual(expectedState) 
    })
})