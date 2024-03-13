import React, { useEffect } from "react";
import { useDispatch, useSelector} from "react-redux";
import {getIngredients} from '../../services/actions/ingredients'

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';

import styles from './app.module.css';

const ingredientsAPI = 'https://norma.nomoreparties.space/api/ingredients';

const App = () => {
    const {ingredients} = useSelector(store => store.ingredients);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getIngredients());
    }, []);


    return (
        <>
            <AppHeader/>
            <main className={styles.mainWrapper}>
                <DndProvider backend={HTML5Backend}>
                    <BurgerIngredients ingredients={ingredients}/>
                    <BurgerConstructor/>
                </DndProvider>
            </main>
        </>
    );
}

export default App;