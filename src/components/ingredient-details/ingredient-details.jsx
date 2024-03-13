import React from "react";
import PropTypes from "prop-types";

import {ingredientType} from '../../utils/types'
import styles from './ingredient-details.module.css';

const IngredientDetails = ({ingredient}) => {

    return (
        <div className={styles.ingredientInfo}>
            <div>
                <img src={ingredient.image_large} alt={ingredient.name} />
            </div>
            <div className={`${styles.name} text text_type_main-default`}>
                {ingredient.name}
            </div>
            <div className={styles.compound}>
                <div className={`calories ${styles.compoundWrapper}`}>
                    <div className="measure text text_type_main-small">Калории, ккал</div>
                    <div className="value text text_type_digits-default">{ingredient.calories}</div>
                </div>
                {/* Калории  */}
                <div className={`squirrels ${styles.compoundWrapper}`}>
                    <div className="measure text text_type_main-small">Белки, г</div>
                    <div className="value text text_type_digits-default">{ingredient.proteins}</div>
                </div>
                {/* Жиры */}
                <div className={`fats ${styles.compoundWrapper}`}>
                    <div className="measure text text_type_main-small">Жиры, г</div>
                    <div className="value text text_type_digits-default">{ingredient.fat}</div>
                </div>
                {/* Углеводы */}
                <div className={`carbohydrates ${styles.compoundWrapper}`}>
                    <div className="measure text text_type_main-small">Углеводы, г</div>
                    <div className="value text text_type_digits-default">{ingredient.carbohydrates}</div>
                </div>
            </div>
        </div>
    )
}

IngredientDetails.propTypes = {
    ingredient: ingredientType.isRequired,
}

export default IngredientDetails;