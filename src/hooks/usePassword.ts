import { useState } from 'react';


const usePassword = (initialValue = 'password'):[any ,any,any] => {
    const [passType, setPassType] = useState(initialValue);

    const togglePass = () => {
        const pair = {
            password: 'text',
            text: 'password'
        }

        setPassType(pair[passType as keyof typeof pair])
    }

    const icon = {
        password: 'ShowIcon',
        text: 'HideIcon'
    }

    return [
        passType,
        icon[passType as keyof typeof icon],
        togglePass
    ]

}

export default usePassword;