import React from "react";
import {BurgerIcon, ListIcon, ProfileIcon, Logo} from "@ya.praktikum/react-developer-burger-ui-components";

import styles from './app-header.module.css';

const AppHeader = () => {
    return (
        <header className={styles.header}>
            <div className={styles.wrapper}>
            <nav className={styles.navigation}>
                <button className={styles.button}>
                    <BurgerIcon/>
                    <span className="text text_type_main-small ml-2">Конструктор</span>
                </button>
                <button className={styles.button}>
                    <ListIcon type="secondary"/>
                    <span className="text  text_type_main-small text_color_inactive ml-2">Лента заказов</span>
                </button>
            </nav>
            <a className={styles.logo} href="#">
                <Logo/>
            </a>
            <button className={styles.button}>
                <ProfileIcon type="secondary"/>
                <span className="text  text_type_main-small text_color_inactive ml-2">Личный кабинет</span>
            </button>
            </div>
        </header>
    );
}

export default AppHeader;