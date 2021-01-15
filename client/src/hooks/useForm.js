// write your custom hook here to control your checkout form
import React from 'react';
import { useState } from 'react';


const useForm = (initialValues) => {
    const [values, setValues] = useState('form', initialValues);

    const handleChanges = event => {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        });
    };

    return ([values, handleChanges])
}
export default useForm;