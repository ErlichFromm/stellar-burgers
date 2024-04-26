import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { useSelector } from "react-redux";
import styles from './ingredient-details.module.css';

const IngredientDetails = () => {

    const {ingredietId} = useParams();
    const {ingredients} = useSelector(state => state.ingredients);
    const [selectedIngredient, setSelectedIngredient] = useState({});
    
    useEffect(() => {
        if(ingredients.length !== 0){
            let result = ingredients.filter((ingredient) => {
                return ingredient._id === ingredietId;
            })
            console.log(result[0]);
            setSelectedIngredient(result[0]);
        }
    }, [ingredients])

    return Object.keys(selectedIngredient).length === 0 ? 
        (
            <p>Загрузка</p>
        ):
        (
            <div className={styles.ingredientInfo}>
                <div>
                    <img src={selectedIngredient.image_large} alt={selectedIngredient.name} />
                </div>
                <div className={`${styles.name} text text_type_main-default`}>
                    {selectedIngredient.name}
                </div>
                <div className={styles.compound}>
                    <div className={`calories ${styles.compoundWrapper}`}>
                        <div className="measure text text_type_main-small">Калории, ккал</div>
                        <div className="value text text_type_digits-default">{selectedIngredient.calories}</div>
                    </div>
                    {/* Калории  */}
                    <div className={`squirrels ${styles.compoundWrapper}`}>
                        <div className="measure text text_type_main-small">Белки, г</div>
                        <div className="value text text_type_digits-default">{selectedIngredient.proteins}</div>
                    </div>
                    {/* Жиры */}
                    <div className={`fats ${styles.compoundWrapper}`}>
                        <div className="measure text text_type_main-small">Жиры, г</div>
                        <div className="value text text_type_digits-default">{selectedIngredient.fat}</div>
                    </div>
                    {/* Углеводы */}
                    <div className={`carbohydrates ${styles.compoundWrapper}`}>
                        <div className="measure text text_type_main-small">Углеводы, г</div>
                        <div className="value text text_type_digits-default">{selectedIngredient.carbohydrates}</div>
                    </div>
                </div>
            </div>
        )
}

export default IngredientDetails;