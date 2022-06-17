import { useState } from 'react';
import { IMyProps } from '../Interface/AddCategory/IAddCategoryProps';

export const AddCategory:React.FC<IMyProps> = ( { onNewCategory }:IMyProps ) => {

    /**Estado inicial de nuestro componente */
    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({ target: { value } }: any) => setInputValue(value);

    const onSubmit = ( e :any )=>{
        e.preventDefault();

        if (inputValue.trim().length <= 1) return;
            
        onNewCategory(inputValue);
        setInputValue('');
       
    }

    return (
        <form onSubmit={ onSubmit }>
            <input
                type='text'
                placeholder='Buscar gifs'
                value={ inputValue }
                onChange={ onInputChange }
                
            />
        </form>
    )
}