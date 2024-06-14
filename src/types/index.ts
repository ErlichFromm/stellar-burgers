
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