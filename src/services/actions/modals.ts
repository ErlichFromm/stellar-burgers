export const OPEN_INGREDIENT_MODAL:'OPEN_INGREDIENT_MODAL' = 'OPEN_INGREDIENT_MODAL';
export const CLOSE_INGREDIENT_MODAL:'CLOSE_INGREDIENT_MODAL' = 'CLOSE_INGREDIENT_MODAL';

export const OPEN_ORDER_DETAILS_MODAL:'OPEN_ORDER_DETAILS_MODAL' = 'OPEN_ORDER_DETAILS_MODAL';
export const CLOSE_ORDER_DETAILS_MODAL:'CLOSE_ORDER_DETAILS_MODAL' = 'CLOSE_ORDER_DETAILS_MODAL';

export interface IOpenIngredientModalAction{
    readonly type: typeof OPEN_INGREDIENT_MODAL;
}

export interface ICloseIngredientModalAction{
    readonly type: typeof CLOSE_INGREDIENT_MODAL;
}

export interface IOpenOrderModalAction{
    readonly type: typeof OPEN_ORDER_DETAILS_MODAL;
}

export interface ICloseOpenModallAction{
    readonly type: typeof CLOSE_ORDER_DETAILS_MODAL;
}

export type TModalActions =
    | IOpenIngredientModalAction
    | ICloseIngredientModalAction
    | IOpenOrderModalAction
    | ICloseOpenModallAction
