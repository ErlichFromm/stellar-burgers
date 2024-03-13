import React, { useState } from "react";

import Modal from "../modal/modal";
import OrderDetail from "../orderDetails/order-details";
import { ConstructorElement, Button, CurrencyIcon, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import {mockFramingElement, mockElementsList} from '../../utils/mock'
import styles from './burger-constructor.module.css';

const BurgerConstructor = () => {
    const [framingElement, setFraminElement] = useState(mockFramingElement);
    const [elementsList, setElementsList] = useState(mockElementsList);
    const [modalIsOpened, setModalIsOpened] = useState(false);

    return (
        <section className={`mt-25 ml-10 ${styles.wrapper}`}>
            <div className={styles.burgerContent}>
                <ConstructorElement  type="top" isLocked={true} price={framingElement.price} 
                                     thumbnail={framingElement.image} text={`${framingElement.name} (верх)`}
                                     extraClass={styles.framingElement} />
                
                <div className={styles.ingredientList}>
                    {elementsList?.map((element, index) => (
                        <div className={styles.ingredientListItem} key={index}>
                            <DragIcon type="primary" />
                            <ConstructorElement  type="undefined" isLocked={false} 
                                                 price={element.price}  text={element.name} thumbnail={element.image}/>
                        </div>
                    ))}
                </div>
                                
                <ConstructorElement  type="bottom" isLocked={true} price={framingElement.price} 
                        thumbnail={framingElement.image} text={`${framingElement.name} (низ)`}
                        extraClass={styles.framingElement}/>
            </div>

            <div className={`mt-10 ${styles.confirmation}`}>
                <span className={`mr-10 text_type_digits-default ${styles.totalPrice}`}>
                    <span className="mr-2">610</span>
                    <CurrencyIcon/>
                </span>
                <Button htmlType="button" type="primary" size="medium" onClick={() => {setModalIsOpened(true)}}>Оформить заказ</Button>
            </div>


            { modalIsOpened &&
            <Modal onClose={() => {setModalIsOpened(false)}}>
                <OrderDetail/>
            </Modal>
            }
        </section>
    )
}  

export default BurgerConstructor;