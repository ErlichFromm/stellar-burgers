import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from 'react-router-dom';
import { getIngredients } from '../../services/actions/ingredients';
import { getUser } from '../../services/actions/user';
import { useLocation, useNavigate } from 'react-router-dom';
// import {OnlyAuth, OnlyUnAuth} from '../protected-rout';

import Layout from "../layout/layout";
import { Home, SignIn, Register, ForgotPassword, ResetPassword } from '../../pages';

import IngredientDetails from '../ingredient-details/ingredient-details';
import Modal from "../modal/modal";

const App = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();
    const background = location.state && location.state.background;

    useEffect(() => {
        dispatch(getIngredients());
        dispatch(getUser())
    }, []);

    const handleModalClose = () => {
        navigate(-1);
    }

    return (
        <>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home />}/>
                    <Route path="/sign-in" element={<SignIn/>}/>
                    <Route path="/register" element={<Register />}/>
                    <Route path="/forgot-password" element={<ForgotPassword />}/>
                    <Route path="/reset-password" element={<ResetPassword />}/>
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