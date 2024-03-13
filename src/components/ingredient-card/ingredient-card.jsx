import React from "react";
import PropTypes from "prop-types";

import { Counter, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {ingredientType} from '../../utils/types';
import styles from "./ingredient-card.module.css"

const IngredientCard = ({ingredient, onChange}) => {
    
    return (
        <div id={ingredient._id} className={styles.card} onClick={(e) => {onChange(e.currentTarget.id)}} >

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
            <Counter count={1} extraClass={styles.counter}/>
        </div>
    );
}

IngredientCard.propTypes = {
    ingredient: ingredientType.isRequired,
    onChange: PropTypes.func.isRequired,
}

export default IngredientCard;