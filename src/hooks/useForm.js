import {useState} from 'react';

const useForm = (inputValues = {}) => {
    const [values, setValues] = useState(inputValues);

    const handleInputChange = e => {
        const {value, name} = e.target;
        setValues({...values, [name]: value})
    }

    return [
        values,
        handleInputChange
    ]
}

export default useForm;