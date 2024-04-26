import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from 'react-router-dom';
import { getIngredients } from '../../services/actions/ingredients'

import Layout from "../layout/layout";
import { Home, SignIn } from '../../pages';



const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getIngredients());
    }, []);


    return (
        <>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home />}></Route>
                </Route>
            </Routes>
        </>
    );
}

export default App;