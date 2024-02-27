import React, { useState, useEffect } from "react";

import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';

const mainStyle = {
    display: 'flex',
    justifyContent: 'center',
    maxWidth: '1920px',
    margin: '0 auto',
    maxHeight: 'calc(100vh - 90px)',
}

const ingredientsAPI = 'https://norma.nomoreparties.space/api/ingredients';

const App = () => {
    const [ingredients, setIngredients] = useState([]);

    useEffect(() => {
        fetch(ingredientsAPI)
            .then(res => res.json())
            .then(payload => {
                setIngredients(payload.data);
            })
            .catch(error => {
                console.warn(error);
            })
    }, []);

    return (
        <>
            <AppHeader/>
            <main style={mainStyle}>
                <BurgerIngredients ingredients={ingredients}/>
                <BurgerConstructor/>
            </main>
        </>
    );
}

export default App;