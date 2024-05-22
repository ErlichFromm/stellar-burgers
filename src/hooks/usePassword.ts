import { useState } from 'react';

type TKeys = "text" | "password";

const usePassword = (initialValue: TKeys = "password"):[TKeys, typeof icon[TKeys], () => void] => {
    const [passType, setPassType] = useState(initialValue);

    const togglePass = () => {
        const pair = {
            password: 'text',
            text: 'password'
        } as const

        setPassType(pair[passType])
    }

    const icon = {
        password: 'ShowIcon',
        text: 'HideIcon'
    } as const

    return [
        passType,
        icon[passType as keyof typeof icon],
        togglePass
    ]

}

export default usePassword;