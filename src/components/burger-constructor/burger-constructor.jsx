import React from "react";
import { useDrop } from "react-dnd";
import { ConstructorElement} from "@ya.praktikum/react-developer-burger-ui-components";
import BurgerConstructorIngredient from '../burder-constructor-ingredient/burder-constructor-ingredient'

import { useSelector, useDispatch } from "react-redux";
import {CALC_INGREDIENT_COST,
        ADD_INGREDINT, 
        } from '../../services/actions/ingredients';

import Modal from '../modal/modal'
import OrderDetail from "../orderDetails/order-details";
import { TotalCart } from "../total-cart/total-cart";

import styles from './burger-constructor.module.css';

const BurgerConstructor = () => {

    const dispatch = useDispatch();
    const {selectedBun} = useSelector(store => store.ingredients);
    const {selectedIngredients} = useSelector(store => store.ingredients);
    const {orderModalIsOpened} = useSelector(store => store.modals);

    const [, dropRef] = useDrop({
        accept: ['bun', 'sauce', 'main'],
        drop(ingredient){
            dispatch({type: ADD_INGREDINT, payload: ingredient})
            dispatch({type: CALC_INGREDIENT_COST})
        },
    });

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
                        selectedIngredients.map((ingredient, index) => (
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
                <Modal>
                    <OrderDetail/>
                </Modal>
            }
        </section>


    )
}  

export default BurgerConstructor;