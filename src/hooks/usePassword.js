import { ShowIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useState } from 'react';

const usePassword = (initialValue = 'password') => {
    const [passType, setPassType] = useState(initialValue);

    const togglePass = () => {
        const pair = {
            password: 'text',
            text: 'password'
        }

        setPassType(pair[passType])
    }

    const icon = {
        password: 'ShowIcon',
        text: 'HideIcon'
    }

    return [
        passType,
        icon[passType],
        togglePass
    ]

}

export default usePassword;