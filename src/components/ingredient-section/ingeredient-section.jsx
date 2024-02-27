import React from "react";
import PropTypes from 'prop-types'

import IngredientCard from '../ingredient-card/ingredient-card'
import styles from './ingredient-section.module.css'

const IngredientSection = ({title, data, onChange}) => {
    return (
        <>
            <section className={styles.wrapper}>
                <h3 className="text text_type_main-medium">{title}</h3>
                <div style={{display: 'flex', flexWrap: 'wrap'}}>
                    {data?.map(ingredient => (
                        <IngredientCard key={ingredient._id} 
                            image={ingredient.image} 
                            price={ingredient.price} 
                            name={ingredient.name}
                            onChange={onChange}
                            id={ingredient._id}
                        />
                    ))}
                </div>
            </section>
        </>
    )
}

IngredientSection.propTypes = {
    title: PropTypes.string.isRequired,
    data: PropTypes.arrayOf(PropTypes.shape({
        _id: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
    })).isRequired,
    onChange: PropTypes.func.isRequired,
}

export default IngredientSection;