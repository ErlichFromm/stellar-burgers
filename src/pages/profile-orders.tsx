import React, { useEffect, useMemo } from 'react';
import { WSS_URL } from '../services/api';
import { 
    USER_ORDERS_CONNECTION_INIT, 
    USER_ORDERS_CONNECTION_CLOSE 
} from '../services/actions/user-orders';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { IOrderDetails } from '../types/index';
import FeedCard from '../components/feed-card/feed-card';
import styles from './style.module.css';

const ProfileOrders: React.FC = () => {
    const accessToken = localStorage.getItem('accessToken');

    const dispatch = useAppDispatch();
    const {orders} = useAppSelector(store => store.userOrders);
    const { ingredients } = useAppSelector(store => store.ingredients);

    useEffect(() => {
        dispatch({
            type: USER_ORDERS_CONNECTION_INIT,
            payload: `${WSS_URL}?token=${accessToken}`
        })

        return () => {
            dispatch({type: USER_ORDERS_CONNECTION_CLOSE });
        }
    }, [])

    let normalizedData: IOrderDetails[] = [];

    useMemo(() => {
        normalizedData = orders.map(order => {

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
                total: total,
                status: order.status,
            }
        })
    }, [orders, ingredients])

    return (
        <div className={styles.userOrder}>
            {normalizedData.map((order, index) => (
                <Link
                    to={`/profile/orders/${order.number}`}
                    key={order.number}
                    className={styles.feedLink}
                >
                    <FeedCard order={order} key={index}/>
                </Link>
            ))}
        </div>
    );
}

export default ProfileOrders;
