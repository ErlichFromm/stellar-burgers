import React from 'react';
import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link } from 'react-router-dom';
import styles from './style.module.css';
import { useAppDispatch } from '../hooks/redux';
import { useDispatch } from 'react-redux';
import { login } from '../services/actions/user';
import usePassword from '../hooks/usePassword';
import useForm from '../hooks/useForm';


const SignIn:React.FC = () => {

    const dispatch = useAppDispatch();
    const [form, handleInputChange] = useForm({
        email: '',
        password: ''
    });
    
    const [passType, icon, tooglePass] = usePassword()

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(login(form));
    }

    return (
        <form onSubmit={handleSubmit} className={styles.wrapper}>
            <h2 className='text text_type_main-medium'>Вход</h2>
            <Input
                type={'email'}
                placeholder={'E-mail'}
                onChange={handleInputChange}
                name={'email'}
                extraClass='mt-6 mb-6'
                value={form.email}
            />
            <Input
                type={passType}
                placeholder={'Пароль'}
                icon={icon}
                onChange={handleInputChange}
                name={'password'}
                extraClass='mb-6'
                value={form.password}
                onIconClick={tooglePass}
            />
            <Button htmlType='submit' size='medium' extraClass='mb-20'>Войти</Button>
            <div className={styles.usefullLinks}>
                <span className='text text_type_main-default'>
                    Вы - новый пользователь? 
                    <Link to={'/register'} className={styles.link}>Зарегистрироваться</Link>
                </span>
                <span className='text text_type_main-default'>
                    Забыли пароль? 
                    <Link to={'/forgot-password'} className={styles.link}>Восстановить пароль</Link>
                </span>
            </div>
        </form>
    );
}

export default SignIn;
