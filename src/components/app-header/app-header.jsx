import React from "react";
import { Link, NavLink } from 'react-router-dom';
import { BurgerIcon, ListIcon, ProfileIcon, Logo } from "@ya.praktikum/react-developer-burger-ui-components";

import styles from './app-header.module.css';

const setActive = ({ isActive }) => isActive ? styles.active : styles.link;

const AppHeader = () => {
    return (
        <header className={styles.header}>
            <div className={styles.wrapper}>
                <nav className={styles.navigation}>
                    <NavLink 
                        to="/" 
                        className={setActive}
                    >
                        <BurgerIcon />
                        <span className="text text_type_main-small ml-2">Конструктор</span>
                    </NavLink>
                    <NavLink 
                        to='/order-feed'
                        className={setActive}
                    >
                        <ListIcon type="secondary" />
                        <span className="text  text_type_main-small text_color_inactive ml-2">Лента заказов</span>
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
                    <span className="text  text_type_main-small text_color_inactive ml-2">Личный кабинет</span>
                </NavLink>
            </div>
        </header>
    );
}

export default AppHeader;