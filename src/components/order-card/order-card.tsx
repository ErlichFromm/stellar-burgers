import React, { useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { getOrderByNumber } from '../../services/actions/order';
import { IIngredient } from '../../types/index';
import styles from './order-card.module.css';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';


const OrderCard: React.FC = () => {
    
    const {number} = useParams();
    const dispatch = useAppDispatch();

    const {selectedOrder} = useAppSelector(store => store.order);
    const {ingredients} = useAppSelector(store => store.ingredients);

    interface ICountOrderIngrediets extends IIngredient{
        count: number;
    }

    let total: number = 0;
    let orderIngredients: IIngredient[] = [];
    let countOrderIngredients:  ICountOrderIngrediets[] = [];

    useEffect(() => {
        if(number){
            dispatch(getOrderByNumber(number))    
        }
    },[number])


    useMemo(() => {
        
        if(selectedOrder){
            // Формирование массива ингредиентов заказа
            selectedOrder.ingredients.forEach(orderIngredientId => {
                ingredients.forEach(ingredient => {
                    if(orderIngredientId === ingredient._id) orderIngredients.push(ingredient)
                })               
            })
            // Подсчёт одинаковых компонентов
            orderIngredients.forEach((ingredient, index) => {
                total += ingredient.price;
                // Создаём первый элемент
                if(index === 0) {
                    countOrderIngredients.push({
                        ...ingredient,
                        count: 1,
                    })
                // для последующих проверка на повторение
                }else{
                    let isDiblicated = false;
                    countOrderIngredients.map(countIngredient => {
                        if(ingredient._id === countIngredient._id){
                            isDiblicated = true;
                            return {
                                ...countIngredient,
                                count: countIngredient.count += 1,
                            }
                        }
                    })  
                    
                    if(isDiblicated === false){
                        countOrderIngredients.push({
                            ...ingredient,
                            count: 1,
                        })
    
                    }
                }

            })
        }     
         
    }, [selectedOrder])


    return (
        <>
            { selectedOrder && ( 
                <div className={`${styles.orderCard}`}>
                    <div className={`text_type_digits-default ${styles.number}`}>#{selectedOrder.number}</div>
                    <div className='text_type_main-medium mt-10'>{selectedOrder.name}</div>
                    <div className='text_type_main-default mt-3'>
                        {selectedOrder.status === 'done' ? (
                            <div style={{color: '#00CCCC'}}>Выполнен</div>
                        ) : (
                            <div>В работе</div>
                        )}
                    </div>
                    <div className='text_type_main-medium mt-15'>Состав:</div>
                    <div className={`mt-4 ${styles.compound}`}>
                        {countOrderIngredients?.map(ingredient => {
                            return (
                                <div key={ingredient._id} className={styles.ingredientRow}>
                                    <div className={`mr-4 ${styles.ingredientImg}`}>
                                        <img src={ingredient.image} alt={ingredient.name} />
                                    </div>
                                    <div className='text_type_main-default'>{ingredient.name}</div>
                                    <div className={`text_type_digits-default ${styles.price}`}>
                                        {ingredient.count} x {ingredient.price}
                                        <CurrencyIcon type='primary'/>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className={styles.orderFooter}>
                        <div className='text_type_main-default text_color_inactive'>
                            {new Date(selectedOrder.createdAt).toLocaleString()}
                        </div>
                        <div className={`text_type_digits-default ${styles.price}`}>
                            {total}
                            <CurrencyIcon type='primary'/>
                        </div>
                    </div>
                </div>
            )}
        </>  
    );
}

export default OrderCard;
