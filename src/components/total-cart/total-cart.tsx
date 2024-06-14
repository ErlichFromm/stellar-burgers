import React from "react";
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { Button, CurrencyIcon, } from "@ya.praktikum/react-developer-burger-ui-components";
import { OPEN_ORDER_DETAILS_MODAL } from "../../services/actions/modals";
import {makeOrder} from '../../services/actions/order';
import { useNavigate } from 'react-router-dom';

import styles from './total-cart.module.css';

export const TotalCart:React.FC = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate();

    const {isAuth} = useAppSelector((store) => store.user);
    const {totalPrice, selectedBun, selectedIngredients} = useAppSelector((store) => store.ingredients)

    const onConfirmBtnClickHandler = () => {

        if(!isAuth){
            navigate('/sign-in');
            return;
        }

        if(selectedBun !== undefined){
            const ingredientsId = [selectedBun, ...selectedIngredients, selectedBun].map((item) => item._id);
            
            dispatch({
                type: OPEN_ORDER_DETAILS_MODAL
            })
            
            dispatch(makeOrder(ingredientsId))
        }
    }

    return (
        <div className={`mt-10 ${styles.confirmation}`}>
            <span className={`mr-10 text_type_digits-default ${styles.totalPrice}`}>
                <span className="mr-2">{totalPrice}</span>
                <CurrencyIcon type="secondary"/>
            </span>
            <Button htmlType="button" 
                type="primary" 
                size="medium" 
                onClick={e => onConfirmBtnClickHandler()}>
                    Оформить заказ
             </Button>
        </div>
    )

}