
export interface IOrder{
    ingredients: Array<string>;
    _id: string;
    status: string;
    number: number;
    name: string;
    createdAt: string;
    updatedAt: string;
}

export interface IOrderDetails{
    number: number;
    date: string;
    name: string;
    icons: {
        src: string;
        alt: string;
    }[];
    total: number;
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