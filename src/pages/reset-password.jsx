import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link } from 'react-router-dom';
import styles from './style.module.css';
import usePassword from '../hooks/usePassword';
import { resetPassword } from '../services/actions/user';
import { useNavigate } from 'react-router-dom';
import useForm from '../hooks/useForm';

const ResetPassword = () => {

    const navigation = useNavigate();
    const dispatch = useDispatch();
    const [passType, icon, togglePass] = usePassword();
    const [form, setValue] = useForm({
        password: '',
        token: '',
    });

    const onChange = (e) => {
        setValue({...form, [e.target.name]: e.target.value})
    }

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(resetPassword(form, function(){
            navigation('/sign-in');
        }))
    }

    return (
        <form className={styles.wrapper} onSubmit={onSubmit}>
            <h2 className='text text_type_main-medium'>Восстановление пароля</h2>
            <Input
                name='password'
                type={passType}
                placeholder={'Введите новый пароль'}
                extraClass='mt-6 mb-6'
                icon={icon}
                value={form.password}
                onIconClick={togglePass}
                onChange={onChange}
            />
            <Input
                name='token'
                type={'text'}
                placeholder={'Введите код из письма'}
                extraClass='mb-6'
                value={form.token}
                onChange={onChange}
            />

            <Button htmlType='submit' size='medium' extraClass='mb-20'>Сохранить</Button>

            <div className={styles.usefullLinks}>
                <span className='text text_type_main-default'>
                    Вспонили пароль?
                    <Link to={'/sign-in'} className={styles.link}>Войти</Link>
                </span>
            </div>
        </form>
    );
}

export default ResetPassword;
