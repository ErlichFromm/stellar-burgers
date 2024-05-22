import React, {useState} from 'react';


const useForm = (inputValues = {}): [any, (e: React.ChangeEvent<HTMLInputElement>) => void, any] => {
    const [values, setValues] = useState(inputValues);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {value, name} = e.target;
        setValues({...values, [name]: value})
    }

    return [
        values,
        handleInputChange,
        setValues
    ]
}

export default useForm;