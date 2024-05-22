import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './style.module.css';

const PageNotFound:React.FC = () => {

    const navigate = useNavigate()

    const buttonClick = () => {
        navigate('/', {replace: true})
    }

    return (
        <div className={styles.pageNotFound}>
            <div className='text text_type_main-large mb-4'>
                Страница не найдена
            </div>
            <Button htmlType="button" 
                type="primary" 
                size="medium"
                onClick={buttonClick}
            >
                Вернуться назад
            </Button>
        </div>
        
    );
}

export default PageNotFound;
