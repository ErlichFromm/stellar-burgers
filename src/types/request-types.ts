// Интерфейсы для тела запроса

export interface IUser{
    email: string,
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
    __v: number,
}

export interface IIngredientUUID extends IIngredient{
    uuid: string
}

export interface IOrder{
    success: boolean;
    name: string;
    order: {
        ingredients: Array<IIngredient>;
        _id: string;
        owner: {
            name: string;
            email: string;
            createdAt: string;
            updatedAt: string;
        }
        status: 'done' | 'pending' | 'created';
        name: string;
        createdAt: string;
        updatedAt: string;
        number: number;
        price: number;
    }
}