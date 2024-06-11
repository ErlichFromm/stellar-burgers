import { v4 as uuid } from 'uuid'
import { checkResponce } from '../../utils/check-responce';
import { IIngredient } from '../../types/request-types';
import {  } from '../../types/request-types';
import { getIngredientRequest } from '../api';

export const GET_INGREDIENT: "GET_INGREDIENT" = "GET_INGREDIENT";
export const GET_INGREDIENT_FAILED: "GET_INGREDIENT_FAILED" = "GET_INGREDIENT_FAILED";
export const GET_INGREDIENT_SUCCESS: "GET_INGREDIENT_SUCCESS" = "GET_INGREDIENT_SUCCESS";

export const SET_SELECTED_INGREDIENT_ID: "SET_SELECTED_INGREDIENT_ID" = "SET_SELECTED_INGREDIENT_ID";
export const SWAP_INGREDIENTS: "SWAP_INGREDIENTS" = "SWAP_INGREDIENTS"

export const ADD_INGREDINT: 'ADD_INGREDINT' = 'ADD_INGREDINT';
export const DELETE_INGREDIENT: 'DELETE_INGREDIENT' = 'DELETE_INGREDIENT';

export const GROUPE_INGREDIENTS_BY_TYPE: "GROUPE_INGREDIENTS_BY_TYPE" = "GROUPE_INGREDIENTS_BY_TYPE";

export const CALC_INGREDIENT_COST: "CALC_INGREDIENT_COST" = "CALC_INGREDIENT_COST";

export interface IGetIngredientAction{
    readonly type: typeof GET_INGREDIENT;
}

export interface IGetIngredientSuccessAction{
    readonly type: typeof GET_INGREDIENT_SUCCESS;
    readonly payload: Array<IIngredient>
}

export interface IGetIngredientFailedAction{
    readonly type: typeof GET_INGREDIENT_FAILED;
}

export interface ISetSelectedIngredientAction{
    readonly type: typeof SET_SELECTED_INGREDIENT_ID;
    readonly payload: number;
}

export interface ISwapIngredientAction{
    readonly type: typeof SWAP_INGREDIENTS;
    readonly payload: {
        fromIndex: number;
        toIndex: number;
    }
}

export interface IAddIngredientAction{
    readonly type: typeof ADD_INGREDINT;
    readonly payload: {
        ingredient: IIngredient;
        uuid: string;
    };
}

export interface IDeleteIngredientAction{
    readonly type: typeof DELETE_INGREDIENT;
    readonly payload: number;
}

export interface IGroupeIngredientByTypeAction{
    readonly type: typeof GROUPE_INGREDIENTS_BY_TYPE;
    readonly payload: Array<IIngredient>
}

export interface ICalcIngredientCostAction{
    readonly type: typeof CALC_INGREDIENT_COST;
}

export type TIngredientActions = 
| IGetIngredientAction
| IGetIngredientSuccessAction
| IGetIngredientFailedAction
| ISetSelectedIngredientAction
| ISwapIngredientAction
| IAddIngredientAction
| IDeleteIngredientAction
| IGroupeIngredientByTypeAction
| ICalcIngredientCostAction;



export const getIngredients = () => (dispatch: any) => {
    try {
        dispatch({ type: GET_INGREDIENT });
        getIngredientRequest()
            .then(res => checkResponce(res))
            .then(res => {
                dispatch({ type: GET_INGREDIENT_SUCCESS, payload: res.data })
            })
            .catch(error => {
                dispatch({ type: GET_INGREDIENT_FAILED })
            })
    } catch (error) {
        console.error(error)
    }
}

export const addIngredient = (ingredient: IIngredient) => {
    return {
        type: ADD_INGREDINT,
        payload: {
            ingredient,
            uuid: uuid(),
        }
    }
};