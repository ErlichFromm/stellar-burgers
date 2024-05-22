// Интерфейсы для тела запроса

export interface IUser{
    email: string,
    password: string,
    name: string,
}

export interface IIngredient{
    _id: string,
    name: string,
    type: 'bun' | 'sauce' | 'main',
    proteins: number,
    fat: number,
    carbohydrates: number,
    calories: number,
    price: number,
    image: string,
    image_mobile: string,
    image_large: string,
    __v: number
}