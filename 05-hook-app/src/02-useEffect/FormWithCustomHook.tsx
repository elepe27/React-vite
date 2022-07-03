import { useForm } from "../hooks"
import { useEffect } from 'react';



export const FormWithCustomHook = () => {

    const { formState  
            , onInputChange
            , username
            , email
            , password
            , onReset }:any = useForm({
        username: '',
        email: '',
        password:''
    })

    useEffect(() => {
        // console.log('useEffect called');
    }, [formState])


    return (
        <>
            <h1>Simple Form With Custom Hook</h1>
            <hr />

            <input
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                value={username}
                onChange={onInputChange} />

            <input
                type="email"
                className="form-control mt-2"
                placeholder="esteban@google.com"
                name="email"
                value={email}
                onChange={onInputChange} />

            <input
                type="password"
                className="form-control mt-2"
                placeholder="contraseña"
                name="password"
                value={password}
                onChange={onInputChange} />


            <button 
                className='btn btn-warning mt-2'
                onClick={ onReset }>
                Reset
            </button>


          
        </>
    )
}
