import { IOrder } from '../types/index';
import { IIngredient } from '../types/request-types';

let done: Array<number> = [];
let pending: Array<number> = [];

const normalizeOrders = (orders: IOrder[], ingredients: IIngredient[]) => {
    return orders.map(order => {

        if (order.status === 'done') done.push(order.number);
        if (order.status === 'pending') pending.push(order.number);

        let icons: any = [];
        let total: number = 0;


        order.ingredients.forEach(orderIngredient => {


            ingredients.forEach(ingredient => {

                if (orderIngredient === ingredient._id) {
                    total += ingredient.price;

                    icons.push({
                        src: ingredient.image,
                        alt: ingredient.name,
                    })
                }
            })
        })

        return [{
            number: order.number,
            date: new Date(order.createdAt).toLocaleString(),
            name: order.name,
            icons: icons,
            total: total,
            status: order.status,
        }, done, pending]
    })
}


export default normalizeOrders;