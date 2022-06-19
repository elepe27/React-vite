
import { useState } from 'react';

export const InputAdd = ( {onHandleAdd}:any ) => {


    const [InputValue, setInputValue] = useState('');

    const onSubmit = (e:any)=> {
        e.preventDefault();
        onHandleAdd(InputValue);
        setInputValue('');
    }

    const onChange = ({target:{value}}:any)=>{
        setInputValue(value);
    }
    return (
        <form onSubmit={onSubmit}>


            <input
                className="input is-primary"
                type="text"
                placeholder="Country input"
                value={InputValue}
                onChange={onChange} />
                
        </form>
    )
}
