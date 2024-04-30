import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import usePassword from '../hooks/usePassword';
import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './style.module.css';
import { updateUser } from '../services/actions/user';

const UpdateUser = () => {

    const dispatch = useDispatch();
    const [passType, icon, togglePass] = usePassword();

    const { user } = useSelector(state => state.user);
    const [isModified, setModified] = useState(false);
    const [form, setValue] = useState({
        name: user.name,
        email: user.email,
        password: ''
    })

    const initialState = {
        name: user.name,
        email: user.email,
        password: ''
    }

    useEffect(() => {
        setModified(JSON.stringify(form) === JSON.stringify(initialState));
    }, [form])
    
    const handleInputChange = (e) => {
        setValue({ ...form, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateUser(form))
    }

    const resetForm = () => {
        setValue({
            name: user.name,
            email: user.email,
            password: ''
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Input
                    type={'text'}
                    name='name'
                    placeholder={'Имя'}
                    extraClass='mb-6'
                    icon={'EditIcon'}
                    value={form.name}
                    onChange={handleInputChange}
                />
                <Input
                    type={'email'}
                    name='email'
                    placeholder={'Email'}
                    extraClass='mt-6 mb-6'
                    icon={'EditIcon'}
                    value={form.email}
                    onChange={handleInputChange}
                />
                <Input
                    type={passType}
                    name='password'
                    placeholder={'Пароль'}
                    extraClass='mt-6 mb-6'
                    icon={icon}
                    value={form.password}
                    onChange={handleInputChange}
                    onIconClick={togglePass}
                />
            </div>
            {!isModified &&
                <div className={styles.formBtns}>
                    <Button htmlType="button" type="secondary" size="medium" onClick={resetForm}>Отменить</Button>
                    <Button htmlType="submit" type="primary" size="medium">Сохранить</Button>
                </div>
            }
        </form>
    );
}

export default UpdateUser;