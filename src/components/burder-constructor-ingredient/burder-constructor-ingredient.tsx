import React, {useRef} from "react";
import { useAppDispatch } from '../../hooks/redux';
import {DELETE_INGREDIENT, CALC_INGREDIENT_COST, SWAP_INGREDIENTS} from '../../services/actions/ingredients';

import { ConstructorElement, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";

import styles from './burder-constructor-ingredient.module.css';
import { useDrag, useDrop } from "react-dnd";

import { IIngredientUUID } from '../../types/request-types';

interface IBurgerConstructorIngredientProps{
    index: number,
    ingredient:IIngredientUUID
}

const BurgerConstructorIngredient: React.FC<IBurgerConstructorIngredientProps> = (props) => {

    const {index, ingredient} = props;

    const dispatch = useAppDispatch();

    const onBasketClickHandler = (ingredientUuid: string) => {
        dispatch({
            type: DELETE_INGREDIENT,
            payload: ingredientUuid
        })
        dispatch({
            type: CALC_INGREDIENT_COST,
        })
    }

    const swapItem = (fromIndex:number, toIndex:number) => {
        dispatch({
            type: SWAP_INGREDIENTS,
            payload: {
                fromIndex, toIndex
            }
        })
    }

    const ref = useRef<HTMLDivElement>(null);

    const [, dropRef] = useDrop<{itemCurrentIndex: number}>({
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

            if (!clientOffset) {
                return;
            }
            
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
        <div ref={ref} className={styles.constructorIngredient}>
            <div className='mr-2'>
                <DragIcon type="primary" />
            </div>
            <ConstructorElement   
                isLocked={false} 
                price={ingredient.price} 
                thumbnail={ingredient.image} 
                text={ingredient.name}
                handleClose={ () => onBasketClickHandler(ingredient.uuid)}/>
        </div>
    );
}

export default BurgerConstructorIngredient;

