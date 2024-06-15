import React, { useEffect } from "react";
import { Routes, Route } from 'react-router-dom';
import { getIngredients } from '../../services/actions/ingredients';
import { getUser } from '../../services/actions/user';
import { useLocation, useNavigate } from 'react-router-dom';
import { OnlyAuth, OnlyUnAuth } from '../protected-rout';
import { useAppDispatch } from '../../hooks/redux';

import OrderCard from '../order-card/order-card';
import Layout from "../layout/layout";
import {
    Home,
    SignIn,
    Register,
    ForgotPassword,
    ResetPassword,
    Profile,
    PageNotFound,
    IndredientCard,
    Feed
} from '../../pages/index';
import Modal from "../modal/modal";

const App = () => {
    const dispatch = useAppDispatch();
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
                    <Route path='/feed' element={<Feed/>}/>
                    <Route path='/feed/:number' element={<OrderCard/>}/>
                    <Route path="/forgot-password" element={<OnlyUnAuth element={<ForgotPassword />} />} />
                    <Route path="/reset-password" element={<OnlyUnAuth element={<ResetPassword />} />} />
                    <Route path="/*" element={<PageNotFound />} />
                    <Route path="/ingredients/:id" element={<IndredientCard />} />
                    <Route path='/profile/orders/:number' element={<OrderCard/>} />
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