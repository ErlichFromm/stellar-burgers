import React from 'react';
import { useAppDispatch } from '../hooks/redux';
import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link, useNavigate} from 'react-router-dom';
import { createUser } from '../services/actions/user';
import styles from './style.module.css';
import usePassword  from '../hooks/usePassword'
import useForm from '../hooks/useForm';

const Register:React.FC = () => {

    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [passType, icon, tooglePass] = usePassword();

    const [form, handleInputChange] = useForm({
        name: '',
        email: '',
        password: ''
    })

    const onSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(createUser(form, function(){
            navigate('/');
        }))
    }

    return (
        <form className={styles.wrapper} onSubmit={onSubmit}>
            <h2 className='text text_type_main-medium'>Регистрация</h2>
            <Input
                name={'name'}
                type={'text'}
                placeholder={'Имя'}
                extraClass='mt-6 mb-6'
                value={form.name}
                onChange={handleInputChange}
            />
            <Input
                name={'email'}
                type={'email'}
                placeholder={'E-mail'}
                extraClass=' mb-6'
                value={form.email}
                onChange={handleInputChange}
            />
            <Input
                name={'password'}
                type={passType}
                placeholder={'Пароль'}
                extraClass=' mb-6'
                icon={icon}
                onIconClick={tooglePass}
                onChange={handleInputChange}
                value={form.password}
            />
            <Button htmlType='submit' size='medium' extraClass='mb-20'>Зарегистироваться</Button>

            <div className={styles.usefullLinks}>
                <span className='text text_type_main-default'>
                    Уже зарегистрированы? 
                    <Link to={'/sign-in'} className={styles.link}>Войти</Link>
                </span>
            </div>
        </form>
    );
}

export default Register;
