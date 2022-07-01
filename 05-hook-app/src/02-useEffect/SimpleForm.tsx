import { useEffect, useState } from 'react';
import { Message } from './Message';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username:'esteban2',
        email: 'esteban@google.com'
    });

    const { username, email } = formState;

    const onInputChange = ({target}:any)=> {
        setFormState({
            ...formState,
            [target.name]: target.value
        });
    }


    useEffect(()=> {
        // console.log('useEffect called');
    },[ formState])

   
    
    return (
        <>
            <h1>Simple Form</h1>
            <hr />

            <input
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                value={ username }
                onChange= { onInputChange } />

            <input
                type="email"
                className="form-control mt-2"
                placeholder="esteban@google.com"
                name="email"
                value={ email }
                onChange= { onInputChange } />


           {
            ( username === 'esteban2') &&  <Message />
           }
        </>
    )
}
