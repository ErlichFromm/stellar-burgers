import React, {useRef} from "react";
import PropTypes from 'prop-types'
import {ingredientType} from '../../utils/types'
import { useDispatch } from "react-redux";
import {DELETE_INGREDIENT, CALC_INGREDIENT_COST, SWAP_INGREDIENTS} from '../../services/actions/ingredients';

import { ConstructorElement, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";

import styles from './burder-constructor-ingredient.module.css';
import { useDrag, useDrop } from "react-dnd";

const BurgerConstructorIngredient = ({ index, ingredient}) => {

    const dispatch = useDispatch();

    const onBasketClickHandler = (ingredientUuid) => {
        dispatch({
            type: DELETE_INGREDIENT,
            payload: ingredientUuid
        })
        dispatch({
            type: CALC_INGREDIENT_COST,
        })
    }

    const swapItem = (fromIndex, toIndex) => {
        dispatch({
            type: SWAP_INGREDIENTS,
            payload: {
                fromIndex, toIndex
            }
        })
    }

    const ref = useRef(null);

    const [{handlerId}, dropRef] = useDrop({
        accept: 'constructorIngredient',
        collect: (monitor) => ({
            handlerId:monitor.getHandlerId(),
        }),
        hover(item, monitor){
            if(!ref.current) return;

            const dragIndex = item.itemCurrentIndex;
            const hoverIndex = index;

            if(dragIndex === hoverIndex) return;
            
            const hoverBoundingRect = ref.current?.getBoundingClientRect();
            const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
            const clientOffset = monitor.getClientOffset();
            const hoverClientY = clientOffset.y - hoverBoundingRect.top
            
            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) return;
            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) return;
            
            swapItem(dragIndex, hoverIndex)
            
            item.itemCurrentIndex = hoverIndex
        }
    })

    const [{isDragging}, dragRef] = useDrag({
        type: 'constructorIngredient',
        item: () => {
            return {itemCurrentIndex: index}
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        })
    })

    dragRef(dropRef(ref));

    return (
        <div ref={ref} className={`${styles.constructorIngredient} ${isDragging ? styles.isDragged : ''}`} data-handler-id={handlerId}>
            <div className='mr-2'>
                <DragIcon type="primary" />
            </div>
            <ConstructorElement   
                isLocked={false} 
                price={ingredient.price} 
                thumbnail={ingredient.image} 
                text={ingredient.name}
                handleClose={ e => onBasketClickHandler(ingredient.uuid)}/>
        </div>
    );
}

BurgerConstructorIngredient.propTypes = {
    index: PropTypes.number.isRequired,
    ingredient: ingredientType.isRequired,
}


export default BurgerConstructorIngredient;




