import React from "react";
import IngredientCard from '../ingredient-card/ingredient-card'
import styles from './ingredient-section.module.css';

import { IIngredient } from '../../types/index';

interface IIngredientSectionProps{
    title: string;
    data: IIngredient[];
}

const IngredientSection:React.FC<IIngredientSectionProps> = (props) => {

    const {title, data} = props;

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

export default IngredientSection;