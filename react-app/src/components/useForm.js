import React, { useState, useEffect } from 'react';

const useForm = (initalFieldValues) => {
    const { values, setValues } = useState(initalFieldValues)

    const handleInputChange = e => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
    }

    return {
        values,
        setValues,
        handleInputChange
    };
}

export default useForm;