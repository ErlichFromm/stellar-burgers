import React from "react";
import PropTypes from "prop-types";

import { Counter, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./ingredient-card.module.css"

const IngredientCard = ({ id, image, price, name, onChange}) => {
    return (
        <div id={id} className={styles.card} onClick={(e) => {onChange(e.currentTarget.id)}} >

            <div className="pl-4 pr-4">
                <img src={image} alt="" />
            </div>
            <div className={`text text_type_main-small mt-1 ${styles.price}`}>
                <span className="text_type_digits-default mr-2">{price}</span>
                <CurrencyIcon/>
            </div>
            <div className="ingredient-name text text_type_main-small mt-1"
                style={{textAlign: 'center'}}>
                {name}
            </div>
            <Counter count={1} extraClass={styles.counter}/>
        </div>
    );
}

IngredientCard.propTypes = {
    id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
}

export default IngredientCard;