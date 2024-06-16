import { ingredientsReducer, initialState, IInitialState } from '../reducers/ingredients';
import { TIngredientActions,
    GET_INGREDIENT,
    GET_INGREDIENT_FAILED,
    GET_INGREDIENT_SUCCESS,
    SET_SELECTED_INGREDIENT_ID,
    SWAP_INGREDIENTS,
    ADD_INGREDINT,
    DELETE_INGREDIENT,
    CALC_INGREDIENT_COST
 } from '../actions/ingredients';

 import { ingredients, ingredient1, ingredient2, ingredientsUUID } from '../../utils/mock';

describe('ingredientsReducer', () => {
    it('should return initial state', () => {
        expect(ingredientsReducer(undefined, {} as TIngredientActions)).toEqual(initialState);
    });

    it('should handle GET_INGREDIENT action', () => {
        const action = {type: GET_INGREDIENT}
        const newState = ingredientsReducer(initialState, action);
        const expectedState = {
            ...initialState,
            ingredientsRequest: true,
            ingredientsFailed: false,
        }
        expect(newState).toEqual(expectedState) ;
    });

    it('should handle GET_INGREDIENT_FAILED action', () => {
        const action = {type: GET_INGREDIENT_FAILED}
        const newState = ingredientsReducer(initialState, action);
        const expectedState = {
            ...initialState,
            ingredientsRequest: false,
            ingredientsFailed: true,
        }
        expect(newState).toEqual(expectedState) ;
    });

    it('should handle GET_INGREDIENT_SUCCESS action', () => {
        const action = {
            type: GET_INGREDIENT_SUCCESS,
            payload: ingredients
        }
        const newState = ingredientsReducer(initialState, action);
        const expectedState = {
            ...initialState,
            ingredients,
            ingredientsRequest: false,
            ingredientsFailed: false,
        }
        expect(newState).toEqual(expectedState) ;
    });

    it('should handle SET_SELECTED_INGREDIENT_ID action', () => {

        const ingredientNumber = 123;

        const action = {
            type: SET_SELECTED_INGREDIENT_ID,
            payload: ingredientNumber
        }
        const newState = ingredientsReducer(initialState, action);
        const expectedState = {
            ...initialState,
            selectedIngredientId: ingredientNumber
        }
        expect(newState).toEqual(expectedState) ;
    });

    it('should handle SWAP_INGREDIENTS action', () => {

        const initialStateWithIngredients: IInitialState = {
            ...initialState,
            selectedIngredients: [ingredient1, ingredient2]
        }

        const action = {
            type: SWAP_INGREDIENTS,
            payload: {
                fromIndex: 0,
                toIndex: 1
            }
        }
        const newState = ingredientsReducer(initialStateWithIngredients, action);
        const expectedState = {
            ...initialState,
            selectedIngredients: [ingredient2, ingredient1]
             
        }
        expect(newState).toEqual(expectedState) ;
    });

    it('should handle ADD_INGREDINT action', () => {

        const action = {
            type: ADD_INGREDINT,
            payload:{
                ingredient: ingredients[0],
                uuid: '3'
            }
   
        }
        const newState = ingredientsReducer(initialState, action);
        const expectedState = {
            ...initialState,
            selectedIngredients: [{...ingredients[0], uuid: '3'}]
             
        }
        expect(newState).toEqual(expectedState) ;
    });

    it('should handle DELETE_INGREDIENT action', () => {

        const initialStateWithSelectedIngredients = {
            ...initialState,
            selectedIngredients: ingredientsUUID
        }

        const action = {
            type: DELETE_INGREDIENT,
            payload: '1'
   
        }
        const newState = ingredientsReducer(initialStateWithSelectedIngredients, action);
        const expectedState = {
            ...initialState,
            selectedIngredients: []
             
        }
        expect(newState).toEqual(expectedState) ;
    });

    it('should handle CALC_INGREDIENT_COST action', () => {

        const initialStateWithSelectedIngredients = {
            ...initialState,
            selectedIngredients: ingredientsUUID
        }

        const action = {type: CALC_INGREDIENT_COST}

        const newState = ingredientsReducer(initialStateWithSelectedIngredients, action);
        const expectedState = {
            ...initialState,
            selectedIngredients: ingredientsUUID,
            totalPrice: 500
             
        }
        console.log(newState, expectedState);
        
        expect(newState).toEqual(expectedState) ;
    });

})