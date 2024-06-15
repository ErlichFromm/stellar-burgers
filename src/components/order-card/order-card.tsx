import React, { useMemo } from 'react';
import { useAppSelector } from '../../hooks/redux';
import { useLocation, useParams } from 'react-router-dom';
import styles from './order-card.module.css';
import { IOrder, IIngredient } from '../../types/index';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

const OrderCard: React.FC = () => {
    
    // 'background || null'
    const {state} = useLocation();
    console.log(state);
    
    const {number} = useParams();
    const {orders} = useAppSelector(store => store.feed);
    const {ingredients} = useAppSelector(store => store.ingredients);

    interface ICountOrderIngrediets extends IIngredient{
        count: number;
    }

    let order: IOrder | undefined;
    let orderIngredients: IIngredient[] = [];
    let countOrderIngredients:  ICountOrderIngrediets[] = [];
    let total: number = 0;

    useMemo(() => {
        // Поиск нужного заказа из имеющихся
        order = orders.find((order) => order.number === Number(number));     

        // Поиск ингредиентов заказа
        order?.ingredients.forEach(orderIngredient => {
            ingredients.forEach(ingredient => {
                if(orderIngredient === ingredient._id) orderIngredients.push(ingredient)
            })
        })      

        // Подсчёт одинаковых ингредиентов
        orderIngredients.forEach((orderIngredient, index) => {
            // Расчёт общей стоимости
            total += orderIngredient.price;


            // Создаём первый элемент
            if(index === 0) {
                countOrderIngredients.push({
                    ...orderIngredient,
                    count: 1,
                })
            // для последующих проверка на повторение
            }else{
                let isDiblicated = false;
                countOrderIngredients.map(countIngredient => {
                    if(orderIngredient._id === countIngredient._id){
                        isDiblicated = true;
                        return {
                            ...countIngredient,
                            count: countIngredient.count += 1,
                        }
                    }
                })  
                
                if(isDiblicated === false){
                    countOrderIngredients.push({
                        ...orderIngredient,
                        count: 1,
                    })

                }
            }
        })     
       
    }, [orders, ingredients])


    return (
        <>
            { order && ( 
                <div className={`${styles.orderCard}`}>
                    <div className={`text_type_digits-default ${styles.number}`}>#{order.number}</div>
                    <div className='text_type_main-medium mt-10'>{order.name}</div>
                    <div className='text_type_main-default mt-3'>
                        {order.status === 'done' ? (
                            <div style={{color: '#00CCCC'}}>Выполнен</div>
                        ) : (
                            <div>В работе</div>
                        )}
                    </div>
                    <div className='text_type_main-medium mt-15'>Состав:</div>
                    <div className={`mt-4 ${styles.compound}`}>
                        {countOrderIngredients.map(ingredient => {
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
                            {new Date(order.createdAt).toLocaleString()}
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
