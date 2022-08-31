import { useEffect, useState, useMemo } from 'react';

export const useForm = ( initialForm = {}, formValidations:any = {} ) => {
  
    const [ formState, setFormState ]:any = useState( initialForm );
    const [ formValidation, setFormValidation ]:any = useState({});

    useEffect(() => {
        
        createValidators();
    
    }, [ formState ]);

    const isFormValid = useMemo(()=> {
        
        for (const formValue of Object.keys( formValidation )) {
            if( formValidation[formValue] !== null) return false;
        }
        return true;
    }, [ formValidation ])
    

    const onInputChange = ({ target }:any) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    const onResetForm = () => {
        setFormState( initialForm );
    }

    const createValidators = ()=> {

        const formCheckedValues:any = {};

        for (const formField of Object.keys( formValidations )) {

            const [ fn, errorMessage ] = formValidations[formField];

            formCheckedValues[`${ formField }Valid`] = fn( formState[formField] ) ? null : errorMessage;
            setFormValidation( formCheckedValues );
            
        }


    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
        ...formValidation,
        isFormValid
    }
}