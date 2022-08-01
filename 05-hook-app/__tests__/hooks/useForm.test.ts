import { renderHook } from '@testing-library/react';
import { useForm } from '../../src/hooks/useForm';
import { act } from 'react-dom/test-utils';
describe('pruebas en useForm', () => {


    const initialForm = {
        name: 'Esteban',
        email: 'Esteban@google.com'
    }

    test('debe de regresar la información por defecto', () => {



        const { result }: any = renderHook(() => useForm(initialForm))
        expect(result.current).toEqual({
            name: initialForm.name,
            email: initialForm.email,
            formState: initialForm,
            onInputChange: expect.any(Function),
            onReset: expect.any(Function)
        })



    });

    test('debe de cambiar el nombre del formulario', () => {

        const { result }:any = renderHook(() => useForm(initialForm));
 
        const { onInputChange } = result.current;


        act(()=>{
            onInputChange({ target: {name: 'name', value:'Pedro'}});
        })

        expect( result.current.name ).toBe('Pedro')


    });

    test('debe de cambiar el nombre al presionar reset', () => {

        const { result }:any = renderHook(() => useForm(initialForm));
 
        const { onInputChange, onReset } = result.current;


        act(()=>{
            onInputChange({ target: {name: 'name', value:'Pedro'}});
            onReset();
        })

        expect( result.current.name ).toBe('Esteban')


    });



});