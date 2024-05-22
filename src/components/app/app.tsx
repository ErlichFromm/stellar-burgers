import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from 'react-router-dom';
import { getIngredients } from '../../services/actions/ingredients';
import { getUser } from '../../services/actions/user';
import { useLocation, useNavigate } from 'react-router-dom';
import { OnlyAuth, OnlyUnAuth } from '../protected-rout';

import Layout from "../layout/layout";
import { Home, SignIn, Register, ForgotPassword, ResetPassword, Profile, PageNotFound, IndredientCard } from '../../pages/index';
import Modal from "../modal/modal";


const App = () => {
    const dispatch:any = useDispatch();
    const location:any = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getIngredients());
        dispatch(getUser());
    }, [dispatch]);

    const handleModalClose = () => {
        navigate(-1);
    }

    return (
        <>
            <Routes location={location.state === 'background' || location}>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/sign-in" element={<OnlyUnAuth element={<SignIn />} />} />
                    <Route path="/register" element={<OnlyUnAuth element={<Register />} />} />
                    <Route path='/profile/*' element={<OnlyAuth element={<Profile />} />} />
                    <Route path="/forgot-password" element={<OnlyUnAuth element={<ForgotPassword />} />} />
                    <Route path="/reset-password" element={<OnlyUnAuth element={<ResetPassword />} />} />
                    <Route path="/*" element={<PageNotFound />} />
                    <Route path="/ingredients/:id" element={<IndredientCard />} />
                </Route>
            </Routes>
            {location.state === 'background' && (
                <Routes>
                    <Route path="/ingredients/:id" element={
                        <Modal title='Детали ингредиента' onClose={handleModalClose}>
                            <IndredientCard />
                        </Modal>
                    } />
                </Routes>
            )}
        </>
    );
}

export default App;