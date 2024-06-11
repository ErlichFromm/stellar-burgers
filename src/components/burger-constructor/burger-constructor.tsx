import React from "react";
import { useDrop } from "react-dnd";
import { ConstructorElement} from "@ya.praktikum/react-developer-burger-ui-components";
import BurgerConstructorIngredient from '../burder-constructor-ingredient/burder-constructor-ingredient'
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { useSelector, useDispatch } from "react-redux";
import {CALC_INGREDIENT_COST, addIngredient} from '../../services/actions/ingredients';
import {CLOSE_ORDER_DETAILS_MODAL} from '../../services/actions/modals';

import Modal from '../modal/modal'
import OrderDetail from "../orderDetails/order-details";
import { TotalCart } from "../total-cart/total-cart";

import styles from './burger-constructor.module.css';
import { IIngredientUUID } from '../../types/request-types';

const BurgerConstructor:React.FC = () => {

    const dispatch = useAppDispatch();
    const {selectedBun} = useAppSelector((store) => store.ingredients);
    const {selectedIngredients} = useAppSelector((store) => store.ingredients);
    const {orderModalIsOpened} = useAppSelector((store) => store.modals);

    const [, dropRef] = useDrop({
        accept: ['bun', 'sauce', 'main'],
        drop(ingredient: IIngredientUUID){
            dispatch(addIngredient(ingredient))
            dispatch({type: CALC_INGREDIENT_COST})
        },
    });

    const closeModalHandler = ()  => {
        dispatch({type: CLOSE_ORDER_DETAILS_MODAL})
    }

    return (

        <section ref={dropRef} className={`${styles.wrapper} pl-10`}>
            <div className={`mt-25 ${styles.burgerContent}`}>
                <div className='pl-8 mb-4'>
                    {selectedBun ?
                            <ConstructorElement 
                                type='top' 
                                isLocked={true} 
                                price={selectedBun.price} 
                                thumbnail={selectedBun.image} 
                                text={`${selectedBun.name} (верх)`}
                            />
                        :
                        <div className={`${styles.ingredientPlaceholder} ${styles.bunPlaceholder_top }`}
                            >Выберите булку</div>
                    }
                </div>
                
                <div className={`${styles.interlayer} ${selectedIngredients.length === 0 ? 'pl-8' : ''}`}>
                    {selectedIngredients.length === 0 ? (
                        <div className={`${styles.ingredientPlaceholder}`}>Выберите начинку</div>
                    ):(
                        selectedIngredients.map((ingredient , index) => (
                            <BurgerConstructorIngredient 
                                key={ingredient.uuid}
                                index={index}
                                ingredient={ingredient}
                                />
                        ))
                    )
                    }
                </div>
                    
                <div className='pl-8 mt-4'>
                    {selectedBun ?
                        <ConstructorElement 
                            type='bottom' 
                            isLocked={true} 
                            price={selectedBun.price} 
                            thumbnail={selectedBun.image} 
                            text={`${selectedBun.name} (низ)`}
                                            
                        />
                        :
                        <div className={`${styles.ingredientPlaceholder} ${styles.bunPlaceholder_bottom }`}
                            >Выберите булку</div>
                    }
                </div>
                
            </div>
            <TotalCart/>

            {orderModalIsOpened && 
                <Modal onClose={closeModalHandler}>
                    <OrderDetail/>
                </Modal>
            }
        </section>


    )
}  

export default BurgerConstructor;