import React from "react";
import { useSelector, useDispatch} from "react-redux";
import { Button, CurrencyIcon, } from "@ya.praktikum/react-developer-burger-ui-components";
import { OPEN_ORDER_DETAILS_MODAL } from "../../services/actions/modals";
import {makeOrder} from '../../services/actions/order';
import { useNavigate } from 'react-router-dom';

import styles from './total-cart.module.css';
import { IIngredient } from '../../types/request-types';

export const TotalCart:React.FC = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const {isAuth} = useSelector((store:any) => store.user);
    const {totalPrice, selectedBun, selectedIngredients} = useSelector((store:any) => store.ingredients)

    const makeRequestBody = () => {

        const ingredienstId = selectedIngredients.map((ingredient:IIngredient) => {
            return ingredient._id;
        })

        return {
            ingredients: [selectedBun._id, ...ingredienstId, selectedBun._id]
        }
    }

    const onConfirmBtnClickHandler = () => {

        if(!isAuth){
            navigate('/sign-in');
            return;
        }

        if(selectedBun !== undefined){
            dispatch({
                type: OPEN_ORDER_DETAILS_MODAL
            })
            
            // @ts-ignore
            dispatch(makeOrder(makeRequestBody()))
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