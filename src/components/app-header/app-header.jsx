import React from "react";
import { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { BurgerIcon, ListIcon, ProfileIcon, Logo } from "@ya.praktikum/react-developer-burger-ui-components";

import styles from './app-header.module.css';

const setActive = ({ isActive }) => isActive ? styles.active : styles.link;

const AppHeader = () => {

    const {user, isAuth} = useSelector(state => state.user);

    return (
        <header className={styles.header}>
            <div className={styles.wrapper}>
                <nav className={styles.navigation}>
                    <NavLink 
                        to="/" 
                        className={setActive}
                    >
                        <BurgerIcon type="secondary"/>
                        <span className="text text_type_main-small ml-2">Конструктор</span>
                    </NavLink>
                    <NavLink 
                        to='/order-feed'
                        className={setActive}
                    >
                        <ListIcon type="secondary" />
                        <span className="text  text_type_main-small ml-2">Лента заказов</span>
                    </NavLink>
                </nav>

                <Link 
                    to="/"
                    className={styles.logo} 
                >
                    <Logo />
                </Link>

                <NavLink 
                    to="/profile" 
                    className={setActive}
                >
                    <ProfileIcon type="secondary" />
                    <span className="text  text_type_main-small ml-2">
                        {isAuth ? (
                            <span>{user.name}</span>
                        ) : (
                            <span>Личный кабинет</span>
                        )}
                    </span>
                </NavLink>
            </div>
        </header>
    );
}

export default AppHeader;