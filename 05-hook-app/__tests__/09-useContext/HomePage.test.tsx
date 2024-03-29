import { render, screen } from '@testing-library/react';
import React from 'react'
import { UserContext } from '../../src/09-useContext/context/UserContext';
import { HomePage } from '../../src/09-useContext/HomePage';

describe('Pruebas en el componente <HomePage />', () => {

    const user = {
        id:1,
        name:'Esteban'
    }

    test('debe de mostrar el componente sin el usuario', () => {

        render(
            <UserContext.Provider value={{ user:null }}>
                <HomePage />
            </UserContext.Provider>);

        // screen.debug();

        const preTag = screen.getByLabelText('pre'); //aria-label
        expect( preTag.innerHTML ).toBe('null');


    });

    test('debe de mostrar el componente con el usuario', () => {

        render(
            <UserContext.Provider value={{ user }}>
                <HomePage />
            </UserContext.Provider>);

        // screen.debug();

        const preTag = screen.getByLabelText('pre'); //aria-label
        expect( preTag.innerHTML ).toContain( user.name );
        expect( preTag.innerHTML ).toContain( user.id.toString() );


    });

});