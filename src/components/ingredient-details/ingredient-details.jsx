import React, { useEffect } from "react";
import PropTypes from "prop-types";

import styles from './ingredient-details.module.css';

const IngredientDetails = ({ingredient}) => {

    return (
        <div className={styles.ingredientInfo}>
            <div>
                <img src={ingredient.image_large} alt="" />
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
    ingredient: PropTypes.shape({
        name: PropTypes.string.isRequired,
        calories: PropTypes.number.isRequired,
        proteins: PropTypes.number.isRequired,
        fat: PropTypes.number.isRequired,
        carbohydrates: PropTypes.number.isRequired,
    }).isRequired
}

export default IngredientDetails;


// return (
//     <section className={styles.background} onClick={onClose}>
//             <div className={styles.wrapper}>
//                 <header className={styles.header}>
//                     <h3 className={`text text_type_main-medium ${styles.title}`}>Детали ингредиента</h3>
//                     <CloseIcon onClick={onClose} type="primary"/>
//                 </header>
//                 <div className={styles.ingredientInfo}>
//                     <div>
//                         <img src={ingredient.image_large} alt="" />
//                     </div>
//                     <div className={`${styles.name} text text_type_main-default`}>
//                         {ingredient.name}
//                     </div>
//                     <div className={styles.compound}>
//                         <div className={`calories ${styles.compoundWrapper}`}>
//                             <div className="measure text text_type_main-small">Калории, ккал</div>
//                             <div className="value text text_type_digits-default">{ingredient.calories}</div>
//                         </div>
//                         {/* Калории  */}
//                         <div className={`squirrels ${styles.compoundWrapper}`}>
//                             <div className="measure text text_type_main-small">Белки, г</div>
//                             <div className="value text text_type_digits-default">{ingredient.proteins}</div>
//                         </div>
//                         {/* Жиры */}
//                         <div className={`fats ${styles.compoundWrapper}`}>
//                             <div className="measure text text_type_main-small">Жиры, г</div>
//                             <div className="value text text_type_digits-default">{ingredient.fat}</div>
//                         </div>
//                         {/* Углеводы */}
//                         <div className={`carbohydrates ${styles.compoundWrapper}`}>
//                             <div className="measure text text_type_main-small">Углеводы, г</div>
//                             <div className="value text text_type_digits-default">{ingredient.carbohydrates}</div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
// )