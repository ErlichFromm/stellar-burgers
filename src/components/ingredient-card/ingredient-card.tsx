import React, { useEffect, useState } from "react";
import { useDrag } from "react-dnd";
import { Link, useLocation } from 'react-router-dom';

import { useAppSelector } from '../../hooks/redux';

import { Counter, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import { IIngredient } from '../../types/index';

import styles from "./ingredient-card.module.css"

interface IIngredientCardProps{
    ingredient: IIngredient;
}

const IngredientCard:React.FC<IIngredientCardProps> = (props) => {

    const location = useLocation();
    const {ingredient} = props;

    const {selectedIngredients, selectedBun} = useAppSelector((store) => store.ingredients);
    const [ingredienCount, setIngredientCount] = useState(0);
 

    const [ ,dragRef] = useDrag({
        type: ingredient.type,
        item: ingredient
    });

    useEffect(() => {
        if(ingredient.type === 'bun'){
            if(!selectedBun) return;

            if(ingredient._id === selectedBun._id){
                setIngredientCount(2);
            }else{
                setIngredientCount(0);
            }
        }else{
            setIngredientCount(selectedIngredients.filter((selectedIngredient) => selectedIngredient._id === ingredient._id).length);
        } 
        
    }, [selectedBun, selectedIngredients])
    
    return (
        <Link id={ingredient._id} 
             to={`/ingredients/${ingredient._id}`}
             state={{background: location}}
             className={styles.card} 
             ref={dragRef}>

            <div className="pl-4 pr-4">
                <img src={ingredient.image} alt={ingredient.name} />
            </div>
            <div className={`text text_type_main-small mt-1 ${styles.price}`}>
                <span className="text_type_digits-default mr-2">{ingredient.price}</span>
                <CurrencyIcon type="secondary"/>
            </div>
            <div className={`${styles.ingredientName} text text_type_main-small mt-1`}>
                {ingredient.name}
            </div>
            { ingredienCount !== 0 ? (
                <Counter count={ingredienCount} extraClass={styles.counter}/>
            ):(
                <></>
            )}
        </Link>
    );
}

export default IngredientCard;