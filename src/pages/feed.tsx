import React, { useMemo } from 'react';
import { useAppSelector } from '../hooks/redux';
import styles from './style.module.css';

import FeedCard from '../components/feed-card/feed-card';
import { IOrderDetails } from '../types/index';

const Feed: React.FC = () => {

    const {ingredients} = useAppSelector(store => store.ingredients)

    const mock = {
        success: true,
        orders: [
          {
            ingredients: [
              "643d69a5c3f7b9001cfa093c",
              "643d69a5c3f7b9001cfa0941",
              "643d69a5c3f7b9001cfa093d",
              "60d3463f7034a000269f45ea"
            ],
            _id: "",
            status: "done",
            number: 0,
            createdAt: "2024-06-12T14:43:22.587Z",
            updatedAt: "2021-06-23T14:43:22.603Z",
            name: 'Название'
          },
          {
            ingredients: [
              "643d69a5c3f7b9001cfa093c",
              "643d69a5c3f7b9001cfa0941",
              "643d69a5c3f7b9001cfa0943",
              "643d69a5c3f7b9001cfa093f",
              "643d69a5c3f7b9001cfa0940",
              "643d69a5c3f7b9001cfa093d",
              "643d69a5c3f7b9001cfa093f"
            ],
            _id: "",
            status: "done",
            number: 0,
            createdAt: "2024-06-12T14:43:22.587Z",
            updatedAt: "2021-06-23T14:43:22.603Z",
            name: 'Название'
          },
          {
            ingredients: [
              "643d69a5c3f7b9001cfa093c",
              "643d69a5c3f7b9001cfa0941",
              "643d69a5c3f7b9001cfa0943",
              "643d69a5c3f7b9001cfa093f",
              "643d69a5c3f7b9001cfa093c",
              "643d69a5c3f7b9001cfa0940",
              "643d69a5c3f7b9001cfa093d",
              "643d69a5c3f7b9001cfa093f"
            ],
            _id: "",
            status: "done",
            number: 0,
            createdAt: "2024-06-12T14:43:22.587Z",
            updatedAt: "2021-06-23T14:43:22.603Z",
            name: 'Название'
          },
        ],
        total: 1,
        totalToday: 1
    }

    let normalizedData: IOrderDetails[]= [];

    useMemo(() => {
        normalizedData = mock.orders.map(order => {

            let icons: any = [];
            let total: number = 0

            order.ingredients.forEach(orderIngredient => {
                
                ingredients.forEach(ingredient => {
                    
                    if(orderIngredient === ingredient._id){
                        total += ingredient.price;
                        
                        icons.push({
                            src: ingredient.image,
                            alt: ingredient.name,
                        })
                    }
                })
            })    

            return {
                number: order.number,
                date: new Date(order.createdAt).toLocaleString(),
                name: order.name,
                icons: icons,
                total: total
            }
        })     
        
    }, [ingredients]);

    return (
        <div className={styles.feedWrapper}>
            <div className={styles.feedLeftSide}>
                <h2 className='text text_type_main-medium'>Лента заказов</h2>
                <div className={styles.orderTape}>
                    {normalizedData.map((order: IOrderDetails) => (
                        <FeedCard order={order}/>
                    ))}
                </div>
            </div>
            <div className={styles.feedRightSide}>1</div>
        </div>
    );
}

export default Feed;
