import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react'
import { UserContext } from '../../src/09-useContext/context/UserContext';
import { LoginPage } from '../../src/09-useContext/LoginPage';



describe('Pruebas en <LoginPage />', () => {

    const usuario = {
        id:123,
        name: 'Esteban',
        email:'Esteban@google.com'
    }
    test('debe de mostrar el componente sin el usuario', () => {


        render(
            <UserContext.Provider value={ { user: null } }>
                <LoginPage />
            </UserContext.Provider>
        );

        expect( screen.getByLabelText('pre').innerHTML ).toBe('null'); 


    });

    test('debe de mostrar el componente con el usuario', () => {


        

        render(
            <UserContext.Provider value={ { user: usuario } }>
                <LoginPage />
            </UserContext.Provider>
        );

        expect( screen.getByLabelText('pre').innerHTML ).toContain( usuario.name ); 
    })


    test('debe de llamar el setUser cuando se hace click en el boton', () => {

        const setUserMock = jest.fn();
        render(
            <UserContext.Provider value={ { user: null, setUser:setUserMock } }>
                <LoginPage />
            </UserContext.Provider>
        );

        expect( screen.getByLabelText('pre').innerHTML ).toContain('null'); 


        const button = screen.getByRole('button');

        fireEvent.click( button );

        expect( setUserMock ).toHaveBeenCalledWith( usuario ); 


        
    })
})