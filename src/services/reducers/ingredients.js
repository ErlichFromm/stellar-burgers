import {v4 as uuid} from 'uuid'

import {GET_INGREDIENT,
        GET_INGREDIENT_FAILED,
        GET_INGREDIENT_SUCCESS,
        SET_SELECTED_INGREDIENT_ID,
        ADD_INGREDINT,
        DELETE_INGREDIENT,
        GROUPE_INGREDIENTS_BY_TYPE,
        CALC_INGREDIENT_COST,
        SWAP_INGREDIENTS} from '../actions/ingredients'

const initialState = {
    ingredients: [],
    ingredientsGroupes: {},
    ingredientsRequest: false,
    ingredientsFailed: false,

    selectedIngredientId: null,
    selectedBun: undefined,
    selectedIngredients: [],

    totalPrice: 0,
}

export const ingredientsReducer = (state = initialState, action) => {
    switch (action.type){
        case GET_INGREDIENT: {
            return {
                ...state,
                ingredientsRequest: true,
                ingredientsFailed: false,
            }
        };
        case GET_INGREDIENT_SUCCESS:{
            return {
                ...state,
                ingredients: action.payload,
                ingredientsRequest: false,
                ingredientsFailed: false,
            }
        };
        case GET_INGREDIENT_FAILED:{
            return {
                ...state,
                ingredientsRequest: false,
                ingredientsFailed: true,
            }
        };
        case SET_SELECTED_INGREDIENT_ID: {
            return {
                ...state,
                selectedIngredientId: action.payload,
            }
        };
        case GROUPE_INGREDIENTS_BY_TYPE: {
            const ingredientsGroupes = {
                bun: [],
                sauce: [],
                main: []
            }
            
            action.payload.forEach(ingredient => {
                if(ingredientsGroupes[ingredient.type]){
                    ingredientsGroupes[ingredient.type].push(ingredient);
                }
            });

            return {
                ...state,
                ingredientsGroupes,
            }
        };
        case ADD_INGREDINT: {

            if(action.payload.type === 'bun'){
                return {
                    ...state,
                    selectedBun: action.payload,
                }
            }

            if(state.selectedIngredients.length == 0){
                return {
                    ...state,
                    selectedIngredients: [{...action.payload, uuid: uuid()}],
                }
            }

            return {
                ...state,
                selectedIngredients: [...state.selectedIngredients, {...action.payload, uuid: uuid()}],
            }
        };
        case DELETE_INGREDIENT: {
            return{
                ...state,
                selectedIngredients: [...state.selectedIngredients].filter(ingredient => ingredient.uuid !== action.payload),

            }
        };
        case CALC_INGREDIENT_COST:{
            const bunPrice = state.selectedBun ? state.selectedBun.price * 2 : 0;
            const ingredientsPrice = state.selectedIngredients.reduce((acc, ingredient) => {
                return acc + ingredient.price;
            }, 0)

            return {
                ...state,
                totalPrice: bunPrice + ingredientsPrice,
            }
        };
        case SWAP_INGREDIENTS: {
            const {fromIndex,  toIndex} = action.payload;
            const ingredients= [...state.selectedIngredients];

            ingredients.splice(toIndex, 0, ingredients.splice(fromIndex, 1)[0])
            return {
                ...state,
                selectedIngredients: ingredients,
            }
        }
        default: {
            return state;
        }
    }
}