import { render, screen } from "@testing-library/react"
import { MainApp } from '../../src/09-useContext/MainApp';
import * as React from 'react';
import { MemoryRouter } from "react-router-dom";

describe('Pruebas en <MainApp />', () => {

    test('debe de mostrar el homePage', () => {

        render(
            <MemoryRouter >
                <MainApp />
            </MemoryRouter>
        );

        expect( screen.getByText('HomePage')).toBeTruthy();

    })

    test('debe de mostrar el LoginPage', () => {

        render(
            <MemoryRouter initialEntries={['/login']} >
                <MainApp />
            </MemoryRouter>
        );

        expect( screen.getByText('LoginPage')).toBeTruthy();

    })
})