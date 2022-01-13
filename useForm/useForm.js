import { useState } from "react";

const useForm = (initialState = {}) => {
    const [values, setValues] = useState(initialState)

    const reset = () => {
        setValues(initialState);
    }

    const handleInputChange = ({ target }) => {
        setValues({
            ...values,
            //es importante que el valor del target.name coincida con el nombre de nuestro state
            [target.name]: target.value //target se desetructurta dependiendo del target que recibe
        });
    }

    return [values, handleInputChange, reset];

}

export default useForm;
