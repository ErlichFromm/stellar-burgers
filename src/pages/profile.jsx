import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route, NavLink, useLocation } from 'react-router-dom';
import { logout } from '../services/actions/user';
import { useNavigate } from 'react-router-dom';
import UpdateUser from './update-user';


import styles from './style.module.css';

const setActive = ({ isActive }) => isActive ? styles.activeLink : styles.menuLink;

const Profile = () => {

    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();


    const logOutHandler = () => {
        dispatch(logout(() => {
            navigate('/sign-in');
        }))
    }

    const history = (
        <p>История</p>
    );

    return (
        <div className={styles.profile}>
            <div className={styles.leftMenu}>
                <NavLink to='/profile' className={setActive} end>
                    <div className={`text text_type_main-medium ${styles.menuItem}`}>Профиль</div>
                </NavLink>
                <NavLink to='/profile/history' className={setActive}>
                    <div className={`text text_type_main-medium ${styles.menuItem}`}>История заказов</div>
                </NavLink>
                <NavLink className={styles.menuLink} onClick={logOutHandler}>
                    <div className={`text text_type_main-medium ${styles.menuItem}`}>Выход</div>
                </NavLink>
                {
                    location.pathname === '/profile' && (
                        <div className={`text text_type_main-default ${styles.promt}`}>
                            В этом разделе вы можете изменить свои персональные данные
                        </div>
                    )
                }
            </div>
            <div className={styles.content}>
                <Routes>
                    <Route index element={<UpdateUser/>} />
                    <Route path='history' element={history} />
                </Routes>
            </div>
        </div>
    );
}

export default Profile;
