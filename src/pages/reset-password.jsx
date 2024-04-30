import React from 'react';
import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link } from 'react-router-dom';
import styles from './style.module.css';

const ResetPassword = () => {
    return (
        <div className={styles.wrapper}>
            <h2 className='text text_type_main-medium'>Восстановление пароля</h2>
            <Input
                type={'password'}
                placeholder={'Введите новый пароль'}
                extraClass='mt-6 mb-6'
                icon={'HideIcon'}
            />
            <Input
                type={'text'}
                placeholder={'Введите код из письма'}
                extraClass='mb-6'
            />

            <Button htmlType='submit' size='medium' extraClass='mb-20'>Сохранить</Button>

            <div className={styles.usefullLinks}>
                <span className='text text_type_main-default'>
                    Вспонили пароль?
                    <Link to={'/sign-in'} className={styles.link}>Войти</Link>
                </span>
            </div>
        </div>
    );
}

export default ResetPassword;