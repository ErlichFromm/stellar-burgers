import {BASE_URL} from '../../utils/api'
import {v4 as uuid} from 'uuid'
import { checkResponce } from '../../utils/check-responce';

export const GET_INGREDIENT         = "GET_INGREDIENT";
export const GET_INGREDIENT_FAILED  = "GET_INGREDIENT_FAILED";
export const GET_INGREDIENT_SUCCESS = "GET_INGREDIENT_SUCCESS";

export const SET_SELECTED_INGREDIENT_ID  = "SET_SELECTED_INGREDIENT_ID";
export const SWAP_INGREDIENTS = "SWAP_INGREDIENTS"

export const ADD_INGREDINT = 'ADD_INGREDINT';
export const DELETE_INGREDIENT = 'DELETE_INGREDIENT';

export const GROUPE_INGREDIENTS_BY_TYPE = "GROUPE_INGREDIENTS_BY_TYPE";

export const CALC_INGREDIENT_COST = "CALC_INGREDIENT_COST";

export const getIngredients = () => (dispatch) => {
    dispatch({type: GET_INGREDIENT});
    fetch(`${BASE_URL}/ingredients`)
        .then(res => checkResponce(res))
        .then(res => {
            dispatch({type: GET_INGREDIENT_SUCCESS, payload: res.data})
        })
        .catch(error => {
            dispatch({type: GET_INGREDIENT_FAILED})
        })
}

export const addIngredient = (ingredient) => {
    return {
        type: ADD_INGREDINT,
        payload: {
            ingredient,
            uuid : uuid(),
        } 
    }
};