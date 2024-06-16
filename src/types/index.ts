
// Данные о заказе
export interface IOrder{
    ingredients: Array<string>;
    _id: string;
    status: string;
    number: number;
    name: string;
    createdAt: string;
    updatedAt: string;
}

// Нормализованные данные о заказе
export interface IOrderDetails{
    number: number;
    date: string;
    name: string;
    icons: {
        src: string;
        alt: string;
    }[];
    total: number;
    status: string;
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

export interface IUser{
    email: string,
    name: string,
}

export interface IIngredientUUID extends IIngredient{
    uuid: string
}

export interface IOrder{
    success?: boolean;
    name: string;
    order?: {
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

export interface ISelectedOrder {
    _id: string;
    ingredients: Array<string>;
    owner: string;
    status: 'done' | 'pending' | 'created';
    name: string;
    createdAt: string;
    updatedAt: string;
    number: number;
    __v: number; 
}