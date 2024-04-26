import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from 'react-router-dom';
import { getIngredients } from '../../services/actions/ingredients';
import { useLocation, useNavigate } from 'react-router-dom';

import Layout from "../layout/layout";
import { Home, SignIn } from '../../pages';

import IngredientDetails from '../ingredient-details/ingredient-details';
import Modal from "../modal/modal";

const App = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();
    const background = location.state && location.state.background;

    useEffect(() => {
        dispatch(getIngredients());
    }, []);

    const handleModalClose = () => {
        navigate(-1);
    }


    return (
        <>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home />}/>
                    <Route path="/ingredients/:ingredietId" 
                           element={<IngredientDetails/>}/>
                </Route>
            </Routes>
            {background && (
                <Routes>
                    <Route
                        path="/ingredients/:ingredietId"
                        element={
                            <Modal onClose={handleModalClose}>
                                <IngredientDetails/>
                            </Modal>
                        }
                    />
                </Routes>
            )}
        </>
    );
}

export default App;