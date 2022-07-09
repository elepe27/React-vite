import { useState } from 'react';


export const useForm = ( initialForm: object) => {


  const [ formState, setFormState] = useState( initialForm );



  const onInputChange = ({ target }: any) => {
    
    setFormState({
      ...formState,
      [target.name]: target.value
    });
  }

  const onReset = ()=> setFormState( initialForm );


  return {
    ...formState,
    formState ,
    onInputChange,
    onReset
  }

}
