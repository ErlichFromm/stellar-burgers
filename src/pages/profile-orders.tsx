import React, { useEffect } from 'react';
import { WSS_URL } from '../services/api';
import { 
    USER_ORDERS_CONNECTION_INIT, 
    USER_ORDERS_CONNECTION_CLOSE 
} from '../services/actions/user-orders';
import { useAppDispatch, useAppSelector } from '../hooks/redux';

const ProfileOrders: React.FC = () => {
    const accessToken = localStorage.getItem('accessToken');
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch({
            type: USER_ORDERS_CONNECTION_INIT,
            payload: `${WSS_URL}?token=${accessToken}`
        })
    }, [])

    return (
        <div>
            
        </div>
    );
}

export default ProfileOrders;
