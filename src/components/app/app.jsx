import React, { useState, useEffect } from "react";

import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';

import styles from './app.module.css';

const ingredientsAPI = 'https://norma.nomoreparties.space/api/ingredients';

const App = () => {
    const [ingredients, setIngredients] = useState([]);

    useEffect(() => {
        fetch(ingredientsAPI)
            .then(res => {
                if(res.ok){
                    return res.json();
                }
                return Promise.reject(`Ошибка получения данных ${res.status}`)
            })
            .then(payload => {
                setIngredients(payload.data);
            })
            .catch(error => {
                console.error(error);
            })
            
    }, []);

    return (
        <>
            <AppHeader/>
            <main className={styles.mainWrapper}>
                <BurgerIngredients ingredients={ingredients}/>
                <BurgerConstructor/>
            </main>
        </>
    );
}

export default App;