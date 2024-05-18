import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { forgotPassword } from '../services/actions/user';
import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link, useNavigate} from 'react-router-dom';
import styles from './style.module.css';
import useForm from '../hooks/useForm';

const ForgotPassword = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch();

    const [form, handleInputChange] = useForm({
        email: '',
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(forgotPassword(form, function(){
            navigate('/reset-password');
        }));
    }


    return (
        <form className={styles.wrapper} onSubmit={handleSubmit}>
            <h2 className='text text_type_main-medium'>Восстановление пароля</h2>
            <Input
                name='email'
                type={'email'}
                placeholder={'Укажите e-mail'}
                extraClass='mt-6 mb-6'
                value={form.email}
                onChange={handleInputChange}
            />

            <Button htmlType='submit' size='medium' extraClass='mb-20'>Восстановить</Button>

            <div className={styles.usefullLinks}>
                <span className='text text_type_main-default'>
                    Вспонили пароль?
                    <Link to={'/sign-in'} className={styles.link}>Войти</Link>
                </span>
            </div>
        </form>
    );
}

export default ForgotPassword;
