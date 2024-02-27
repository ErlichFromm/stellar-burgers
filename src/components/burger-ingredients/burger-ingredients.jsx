import React, {useState, useEffect} from "react";
import PropTypes from 'prop-types';

import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";

import IngredientSection from "../ingredient-section/ingeredient-section";
import IngredientDetails from "../ingredient-details/ingredient-details";
import Modal from "../modal/modal"

import styles from './burger-ingredients.module.css'

function sortIngridientsByType(arr){

    const sortedObj = {
        bun: [],
        sauce: [],
        main: []
    }
    
    arr.forEach(ingredient => {
        if(sortedObj[ingredient.type]){
            sortedObj[ingredient.type].push(ingredient);
        }
    });

    return sortedObj;
}

function findIgredientById(arr, id){
    let ingredient = null;

    arr.forEach((element) => {
        if(element['_id'] === id){
            ingredient = element;
            return;
        }
    })

    return ingredient;
}

const BurgerIngredients = ({ingredients}) => {

    // const {ingredients} = props;

    const [selectedTab, setSelectedTab] = useState('bun');
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedIngredientId, setSelectedIngredientId] = useState(null);

    const [groupedIngredients, setGroupedIngredients] = useState({});

    useEffect(() => {
        setGroupedIngredients(sortIngridientsByType(ingredients));
    }, [ingredients]);

    const changeIngredientId = (id) => {
        setSelectedIngredientId(id);
        setModalIsOpen(true);
    }

    return (
        <div className={`$ mr-4 ${styles.burgerWrapper}`}>
            <h2 className="text text_type_main-large mt-10">Соберите бургер</h2>
            <div className={`mt-2 ${styles.tabWrapper}`}>
                <Tab value="bun"   active={selectedTab === 'bun'} onClick={setSelectedTab}>Булки</Tab>
                <Tab value="sauce" active={selectedTab === 'sauce'} onClick={setSelectedTab}>Соусы</Tab>
                <Tab value="main"  active={selectedTab === 'main'} onClick={setSelectedTab}>Начинки</Tab>
            </div>

            
            <section className={`mt-10 ${styles.ingredientsSection}`}>
                <IngredientSection onChange={changeIngredientId} title="Булки" data={groupedIngredients['bun'] ? groupedIngredients['bun'] : []} />
                <IngredientSection onChange={changeIngredientId} title="Соусы" data={groupedIngredients['sauce'] ? groupedIngredients['sauce'] : []} />
                <IngredientSection onChange={changeIngredientId} title="Начинки" data={groupedIngredients['main'] ? groupedIngredients['main'] : []} />
            </section>

            {   modalIsOpen &&      
                <Modal title="Детали ингредиента" onClose={() => {setModalIsOpen(false)}}>
                    <IngredientDetails ingredient={findIgredientById(ingredients, selectedIngredientId)}/>
                </Modal>
            }
            
        </div>
    );
}

BurgerIngredients.propsTypes = {
    ingredients: PropTypes.array.isRequired,
}

export default BurgerIngredients;