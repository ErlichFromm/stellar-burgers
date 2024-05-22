import React from 'react';

import AppHeader from '../app-header/app-header';
import { Outlet } from 'react-router-dom';

import styles from './layout.module.css';

const Layout:React.FC = () => {
    return (
        <>
            <AppHeader/>
            <main className={styles.wrapper}>
                <Outlet />
            </main>
        </>

    );
}

export default Layout;
