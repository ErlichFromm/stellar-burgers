import React from 'react';
import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link } from 'react-router-dom';
import styles from './style.module.css';

const Register = () => {
    return (
        <div className={styles.wrapper}>
            <h2 className='text text_type_main-medium'>Регистрация</h2>
            <Input
                type={'text'}
                placeholder={'Имя'}
                extraClass='mt-6 mb-6'
            />
            <Input
                type={'email'}
                placeholder={'E-mail'}
                extraClass=' mb-6'
            />
            <Input
                type={'password'}
                placeholder={'Пароль'}
                extraClass=' mb-6'
                icon={'HideIcon'}
            />
            <Button htmlType='submit' size='medium' extraClass='mb-20'>Зарегистироваться</Button>

            <div className={styles.usefullLinks}>
                <span className='text text_type_main-default'>
                    Уже зарегистрированы? 
                    <Link to={'/sign-in'} className={styles.link}>Войти</Link>
                </span>
            </div>
        </div>
    );
}

export default Register;
