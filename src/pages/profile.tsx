import React from 'react';
import { useAppDispatch } from '../hooks/redux';
import { Routes, Route, NavLink, useLocation } from 'react-router-dom';
import { logout } from '../services/actions/user';
import UpdateUser from './update-user';


import styles from './style.module.css';

const setActive = ({ isActive }: {isActive:boolean}): string => isActive ? styles.activeLink : styles.menuLink;

const Profile:React.FC = () => {

    const dispatch = useAppDispatch();
    const location = useLocation();

    const logOutHandler = () => {
        dispatch(logout())
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
                <NavLink to='/sign-in' className={styles.menuLink} onClick={logOutHandler}>
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
