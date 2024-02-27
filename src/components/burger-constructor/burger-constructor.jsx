import React, { useState } from "react";

import Modal from "../modal/modal";
import OrderDetail from "../orderDetails/order-details";
import { ConstructorElement, Button, CurrencyIcon, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './burger-constructor.module.css';

const BurgerConstructor = () => {
    const [framingElement, setFraminElement] = useState({
        "_id": "643d69a5c3f7b9001cfa093c",
        "name": "Краторная булка N-200i",
        "type": "bun",
        "proteins": 80,
        "fat": 24,
        "carbohydrates": 53,
        "calories": 420,
        "price": 1255,
        "image": "https://code.s3.yandex.net/react/code/bun-02.png",
        "image_mobile": "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
        "image_large": "https://code.s3.yandex.net/react/code/bun-02-large.png",
        "__v": 0    
    });
    const [elementsList, setElementsList] = useState([
        {
            "_id": "643d69a5c3f7b9001cfa0944",
            "name": "Соус традиционный галактический",
            "type": "sauce",
            "proteins": 42,
            "fat": 24,
            "carbohydrates": 42,
            "calories": 99,
            "price": 15,
            "image": "https://code.s3.yandex.net/react/code/sauce-03.png",
            "image_mobile": "https://code.s3.yandex.net/react/code/sauce-03-mobile.png",
            "image_large": "https://code.s3.yandex.net/react/code/sauce-03-large.png",
            "__v": 0
        },
        {
            "_id": "643d69a5c3f7b9001cfa093f",
            "name": "Мясо бессмертных моллюсков Protostomia",
            "type": "main",
            "proteins": 433,
            "fat": 244,
            "carbohydrates": 33,
            "calories": 420,
            "price": 1337,
            "image": "https://code.s3.yandex.net/react/code/meat-02.png",
            "image_mobile": "https://code.s3.yandex.net/react/code/meat-02-mobile.png",
            "image_large": "https://code.s3.yandex.net/react/code/meat-02-large.png",
            "__v": 0
        },{
            "_id": "643d69a5c3f7b9001cfa0947",
            "name": "Плоды Фалленианского дерева",
            "type": "main",
            "proteins": 20,
            "fat": 5,
            "carbohydrates": 55,
            "calories": 77,
            "price": 874,
            "image": "https://code.s3.yandex.net/react/code/sp_1.png",
            "image_mobile": "https://code.s3.yandex.net/react/code/sp_1-mobile.png",
            "image_large": "https://code.s3.yandex.net/react/code/sp_1-large.png",
            "__v": 0
        },
        {
            "_id": "643d69a5c3f7b9001cfa0946",
            "name": "Хрустящие минеральные кольца",
            "type": "main",
            "proteins": 808,
            "fat": 689,
            "carbohydrates": 609,
            "calories": 986,
            "price": 300,
            "image": "https://code.s3.yandex.net/react/code/mineral_rings.png",
            "image_mobile": "https://code.s3.yandex.net/react/code/mineral_rings-mobile.png",
            "image_large": "https://code.s3.yandex.net/react/code/mineral_rings-large.png",
            "__v": 0
        },
        {
            "_id": "643d69a5c3f7b9001cfa0946",
            "name": "Хрустящие минеральные кольца",
            "type": "main",
            "proteins": 808,
            "fat": 689,
            "carbohydrates": 609,
            "calories": 986,
            "price": 300,
            "image": "https://code.s3.yandex.net/react/code/mineral_rings.png",
            "image_mobile": "https://code.s3.yandex.net/react/code/mineral_rings-mobile.png",
            "image_large": "https://code.s3.yandex.net/react/code/mineral_rings-large.png",
            "__v": 0
        },
        {
            "_id": "643d69a5c3f7b9001cfa0944",
            "name": "Соус традиционный галактический",
            "type": "sauce",
            "proteins": 42,
            "fat": 24,
            "carbohydrates": 42,
            "calories": 99,
            "price": 15,
            "image": "https://code.s3.yandex.net/react/code/sauce-03.png",
            "image_mobile": "https://code.s3.yandex.net/react/code/sauce-03-mobile.png",
            "image_large": "https://code.s3.yandex.net/react/code/sauce-03-large.png",
            "__v": 0
        },
        {
            "_id": "643d69a5c3f7b9001cfa093f",
            "name": "Мясо бессмертных моллюсков Protostomia",
            "type": "main",
            "proteins": 433,
            "fat": 244,
            "carbohydrates": 33,
            "calories": 420,
            "price": 1337,
            "image": "https://code.s3.yandex.net/react/code/meat-02.png",
            "image_mobile": "https://code.s3.yandex.net/react/code/meat-02-mobile.png",
            "image_large": "https://code.s3.yandex.net/react/code/meat-02-large.png",
            "__v": 0
        },{
            "_id": "643d69a5c3f7b9001cfa0947",
            "name": "Плоды Фалленианского дерева",
            "type": "main",
            "proteins": 20,
            "fat": 5,
            "carbohydrates": 55,
            "calories": 77,
            "price": 874,
            "image": "https://code.s3.yandex.net/react/code/sp_1.png",
            "image_mobile": "https://code.s3.yandex.net/react/code/sp_1-mobile.png",
            "image_large": "https://code.s3.yandex.net/react/code/sp_1-large.png",
            "__v": 0
        },
        {
            "_id": "643d69a5c3f7b9001cfa0946",
            "name": "Хрустящие минеральные кольца",
            "type": "main",
            "proteins": 808,
            "fat": 689,
            "carbohydrates": 609,
            "calories": 986,
            "price": 300,
            "image": "https://code.s3.yandex.net/react/code/mineral_rings.png",
            "image_mobile": "https://code.s3.yandex.net/react/code/mineral_rings-mobile.png",
            "image_large": "https://code.s3.yandex.net/react/code/mineral_rings-large.png",
            "__v": 0
        },
        {
            "_id": "643d69a5c3f7b9001cfa0946",
            "name": "Хрустящие минеральные кольца",
            "type": "main",
            "proteins": 808,
            "fat": 689,
            "carbohydrates": 609,
            "calories": 986,
            "price": 300,
            "image": "https://code.s3.yandex.net/react/code/mineral_rings.png",
            "image_mobile": "https://code.s3.yandex.net/react/code/mineral_rings-mobile.png",
            "image_large": "https://code.s3.yandex.net/react/code/mineral_rings-large.png",
            "__v": 0
        }
    ]);
    const [modalIsOpened, setModalIsOpened] = useState(false);

    return (
        <section className={`mt-25 ml-10 ${styles.wrapper}`}>
            <div style={{display: 'flex', flexDirection: 'column', gap: 10}}>
                <ConstructorElement  type="top" isLocked={true} price={framingElement.price} 
                                     thumbnail={framingElement.image} text={framingElement.name}
                                     extraClass={styles.framingElement}/>
                
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
                        thumbnail={framingElement.image} text={framingElement.name}
                        extraClass={styles.framingElement}/>
            </div>

            <div className={`mt-10 ${styles.confirmation}`}>
                <span className={`mr-10 text_type_digits-default ${styles.totalPrice}`}>
                    <span className="mr-2">610</span>
                    <CurrencyIcon/>
                </span>
                <Button htmlType="button" type="primary" size="medium" onClick={() => {setModalIsOpened(true)}}>Оформить заказ</Button>
            </div>

            <Modal open={modalIsOpened} onClose={() => {setModalIsOpened(false)}}>
                <OrderDetail/>
            </Modal>
        </section>
    )
}  

export default BurgerConstructor;