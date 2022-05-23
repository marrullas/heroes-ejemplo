import React,{ useState,FormEvent, ChangeEvent  } from 'react';


export const useForm = <T extends Object> ( initialState: T) => {
    
    const [values, setValues] = useState(initialState);

    const reset = () => {
        setValues( initialState );
    }


    const handleInputChange = ({ target }:ChangeEvent<HTMLInputElement>) => {

        setValues({
            ...values,
            [ target.name ]: target.value
        });

    }

    return { values, handleInputChange, reset };

}