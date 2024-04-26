import React, { useEffect } from "react";
import PropTypes from 'prop-types'

import IngredientCard from '../ingredient-card/ingredient-card'
import {ingredientType} from '../../utils/types'
import styles from './ingredient-section.module.css'

const IngredientSection = ({title, data}) => {

    return (
        <>
            <section className={styles.wrapper}>
                <h3 className="text text_type_main-medium">{title}</h3>
                <div className={styles.ingredientCardList}>
                    {data?.map(ingredient => (
                        <IngredientCard key={ingredient._id} 
                            ingredient={ingredient}
                        />
                    ))}
                </div>
            </section>
        </>
    )
}

IngredientSection.propTypes = {
    title: PropTypes.string.isRequired,
    data: PropTypes.arrayOf(ingredientType).isRequired,
}

export default IngredientSection;