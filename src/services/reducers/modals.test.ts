import {
    OPEN_INGREDIENT_MODAL,
    CLOSE_INGREDIENT_MODAL,
    OPEN_ORDER_DETAILS_MODAL,
    CLOSE_ORDER_DETAILS_MODAL,
    TModalActions
} from '../actions/modals';
import { modalReducer, initialState} from './modals';

describe('modalsReducer', () => {
    it('should return initial state', () => {
        expect(modalReducer(undefined, {} as TModalActions)).toEqual(initialState);
    });

    it('should handle OPEN_INGREDIETN_MODAL action', () => {
        const action = {type: OPEN_INGREDIENT_MODAL}
        const newState = modalReducer(undefined, action);
        const expectedState = {
            ...initialState,
            ingredientModalIsOpened: true
        }
        expect(newState).toEqual(expectedState) ;
    });

    it('should handle CLOSE_INGREDIENT_MODAL action', () => {
        const action = {type: CLOSE_INGREDIENT_MODAL}
        const newState = modalReducer(undefined, action);
        const expectedState = {
            ...initialState,
            ingredientModalIsOpened: false
        }
        expect(newState).toEqual(expectedState);
    });

    it('should handle OPEN_ORDER_DETAILS_MODAL action', () => {
        const action = {type: OPEN_ORDER_DETAILS_MODAL}
        const newState = modalReducer(undefined, action);
        const expectedState = {
            ...initialState,
            orderModalIsOpened: true
        }
        expect(newState).toEqual(expectedState) ;
    });

    it('should handle CLOSE_ORDER_DETAILS_MODAL action', () => {
        const action = {type: CLOSE_ORDER_DETAILS_MODAL}
        const newState = modalReducer(undefined, action);
        const expectedState = {
            ...initialState,
            orderModalIsOpened: false
        }
        expect(newState).toEqual(expectedState) ;
    });
})