import React, { useEffect, useMemo, useState } from "react";
import { useDrag } from "react-dnd";
import { Link, useLocation} from 'react-router-dom';

import { useDispatch, useSelector } from "react-redux";
import {SET_SELECTED_INGREDIENT_ID} from "../../services/actions/ingredients"
import {OPEN_INGREDIENT_MODAL} from "../../services/actions/modals"

import { Counter, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";

import {ingredientType} from '../../utils/types';
import PropTypes from "prop-types";
import styles from "./ingredient-card.module.css"

const IngredientCard = ({ingredient}) => {

    const dispatch = useDispatch();
    const location = useLocation();
    const {selectedIngredients, selectedBun} = useSelector(store => store.ingredients);
    
    const [ingredienCount, setIngredientCount] = useState(0);
 
    const onIngredientCardClickHandler = (id) => {
        dispatch({type: SET_SELECTED_INGREDIENT_ID, payload: id})
        dispatch({type: OPEN_INGREDIENT_MODAL})
    }

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
             state={{backgound: location}}
             className={styles.card} 
             ref={dragRef}>

            <div className="pl-4 pr-4">
                <img src={ingredient.image} alt={ingredient.name} />
            </div>
            <div className={`text text_type_main-small mt-1 ${styles.price}`}>
                <span className="text_type_digits-default mr-2">{ingredient.price}</span>
                <CurrencyIcon/>
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

IngredientCard.propTypes = {
    ingredient: ingredientType.isRequired,
}

export default IngredientCard;