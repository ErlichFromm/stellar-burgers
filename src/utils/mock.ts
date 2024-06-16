import { IOrder, IIngredient, IIngredientUUID } from '../types/index';


export const wsOrder: IOrder[] = [
    {
        _id: "666f64e3856777001bb1b66f",
        ingredients: ["666f64e3856777001bb1b66f", "643d69a5c3f7b9001cfa0947"],
        status: "done",
        name: "Флюоресцентный фалленианский бургер",
        createdAt: "2024-06-16T22:19:15.547Z",
        updatedAt: "2024-06-16T22:19:15.547Z",
        number: 42973,
    },
];

export const ingredients: IIngredient[] = [
    {
        _id: '1',
        name: 'name',
        type: 'sauce',
        proteins: 25,
        fat: 3,
        carbohydrates: 21,
        calories: 124,
        price: 500,
        image: 'http://...',
        image_mobile: 'http://...',
        image_large: 'http://...',
        __v: 0,
    }
]
//  Ингредиенты с UUID

export const ingredient1: IIngredientUUID = {
    uuid: '1',
    _id: '1',
    name: 'name',
    type: 'bun',
    proteins: 25,
    fat: 3,
    carbohydrates: 21,
    calories: 124,
    price: 500,
    image: 'http://...',
    image_mobile: 'http://...',
    image_large: 'http://...',
    __v: 0,
}

export const ingredient2: IIngredientUUID = {
    uuid: '2',
    _id: '2',
    name: 'name',
    type: 'bun',
    proteins: 25,
    fat: 3,
    carbohydrates: 21,
    calories: 124,
    price: 500,
    image: 'http://...',
    image_mobile: 'http://...',
    image_large: 'http://...',
    __v: 0,
}

export const ingredientsUUID: IIngredientUUID[] = [
    {    uuid: '1',
        _id: '1',
        name: 'name',
        type: 'sauce',
        proteins: 25,
        fat: 3,
        carbohydrates: 21,
        calories: 124,
        price: 500,
        image: 'http://...',
        image_mobile: 'http://...',
        image_large: 'http://...',
        __v: 0,
    },
]

