import React from "react";
import { useSelector } from "react-redux";

import styles from './order-details.module.css';
import doneImgPath from '../../images/done.png';


const OrderDetail = () => {
    const {order} = useSelector(store => store.order);

    return (
        <div className={styles.order}>
            {order ? (
            <>
                <div className={`text text_type_main-large ${styles.number}`}>{order.order.number}</div>
                <div className="text text_type_main-medium mb-15">идентификатор заказа</div>
                <div className={styles.orderImg}>
                    <img src={doneImgPath} alt="Принят" />
                </div>
                <div className={styles.orderMessage}>
                    <span className="text text_type_main-small">Ваш заказ начали готовить</span>
                    <span className="text text_type_main-small text_color_inactive">Дождитесь готовности на орбитальной станции</span>
                </div>
            </>
            ): (
                <div className={`text text_type_main-large`}>Формируем заказ</div>
            )}   
        </div>
    );
}

export default OrderDetail;