import React, { useEffect, useMemo } from 'react';
import { useAppSelector, useAppDispatch } from '../hooks/redux';
import styles from './style.module.css';
import { FEED_CONNECTION_INIT, FEED_CONNECTION_CLOSE } from '../services/actions/feed';
import { WSS_URL } from '../services/api';

import FeedCard from '../components/feed-card/feed-card';
import { IOrderDetails } from '../types/index';

const Feed: React.FC = () => {

    const dispatch = useAppDispatch();

    const { total, totalToday, orders} = useAppSelector(store => store.feed);
    const { ingredients } = useAppSelector(store => store.ingredients);

    useEffect(() => {
        dispatch({
            type: FEED_CONNECTION_INIT,
            payload: `${WSS_URL}/all`
        })

        return () => {
            dispatch({type: FEED_CONNECTION_CLOSE}) 
        }
    }, [])

    // created | pending | done
    let done: Array<number> = [];
    let pending: Array<number> = [];
    let normalizedData: IOrderDetails[] = [];

    useMemo(() => {
        normalizedData = orders.map(order => {

            if(order.status === 'done') done.push(order.number);
            if(order.status === 'pending') pending.push(order.number);
            
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

            return {
                number: order.number,
                date: new Date(order.createdAt).toLocaleString(),
                name: order.name,
                icons: icons,
                total: total
            }
        })

    }, [ingredients, orders]);

    return (
        <div className={`text ${styles.feedWrapper}`}>
            <div className={styles.feedLeftSide}>
                <h2 className='text_type_main-medium'>Лента заказов</h2>
                <div className={styles.orderTape}>
                    {normalizedData.map((order, index) => (
                        <FeedCard order={order} key={index} />
                    ))}
                </div>
            </div>
            <div className={styles.feedRightSide}>
                <div className={styles.orderState}>
                    <div className={styles.ready}>
                        <div className='text_type_main-medium'>Готовы:</div>
                        <ul className={styles.orderList}>
                            {done.map(item => {
                                return <li key={item} className='text text_type_digits-default'>{item}</li>
                            })}
                        </ul>
                    </div>
                    <div className='inProgress'>
                        <div className='text_type_main-medium'>В работе:</div>
                        <ul className={styles.orderList}>
                            {pending.map(item => {
                                return <li key={item} className='text text_type_digits-default'>{item}</li>
                            })}
                        </ul>
                    </div>
                </div>

                <h3 className='text_type_main-medium mt-15'>Выполнено за всё время</h3>
                <div className='text_type_digits-large'>{total}</div>

                <h3 className='text_type_main-medium mt-15'>Выполнено за сегодня</h3>
                <div className='text_type_digits-large'>{totalToday}</div>
            </div>
        </div>
    );
}

export default Feed;
