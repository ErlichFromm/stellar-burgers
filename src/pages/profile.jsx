import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Routes, Route, NavLink, useLocation } from 'react-router-dom';
import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { logout } from '../services/actions/user';
import { useNavigate } from 'react-router-dom';
import usePassword from '../hooks/usePassword';

import styles from './style.module.css';

const setActive = ({ isActive }) => isActive ? styles.activeLink : styles.menuLink;

const Profile = () => {

    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();

    const { user } = useSelector(state => state.user)
    const [form, setValue] = useState({
        name: user.name,
        email: user.email,
        password: ''
    })


    const [passType, icon, togglePass] = usePassword();

    const handleInputChange = (e) => {
        setValue({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const logOutHandler = () => {
        dispatch(logout(() => {
            navigate('/sign-in');
        }))
    }

    const profile = (
        <form onSubmit={handleSubmit}>
            <div>
                <Input
                    type={'text'}
                    name='name'
                    placeholder={'Имя'}
                    extraClass='mb-6'
                    icon={'EditIcon'}
                    value={form.name}
                    onChange={handleInputChange}
                />
                <Input
                    type={'email'}
                    name='email'
                    placeholder={'Email'}
                    extraClass='mt-6 mb-6'
                    icon={'EditIcon'}
                    value={form.email}
                    onChange={handleInputChange}
                />
                <Input
                    type={passType}
                    name='password'
                    placeholder={'Пароль'}
                    extraClass='mt-6 mb-6'
                    icon={icon}
                    value={form.password}
                    onChange={handleInputChange}
                    onIconClick={togglePass}
                />
            </div>
            <div className={styles.formBtns}>
                <Button htmlType="button" type="secondary" size="medium">Отменить</Button>
                <Button htmlType="submit" type="primary" size="medium">Сохранить</Button>
            </div>
        </form>
    );

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
                    <Route index element={profile} />
                    <Route path='history' element={history} />
                </Routes>
            </div>
        </div>
    );
}

export default Profile;
