import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import IngredientDetails from '../components/ingredient-details/ingredient-details'
import { IIngredient } from '../types/request-types';

const IndredientCard:React.FC = () => {

    const {id} = useParams();
    const {ingredients} = useSelector((state:any) => state.ingredients);
    const ingredient = ingredients.find((item: IIngredient) => item._id === id);

    return (
        <div>
            {ingredient ? (
               <IngredientDetails ingredient={ingredient} />
            ) : (
                <div className='text text_type_main-large'></div>
            )}
        </div>
    );
}

export default IndredientCard;
