import * as React from 'react';
import { fireEvent, render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from '../../src/03-examples/MultipleCustomHooks';
import { useFetch } from '../../src/hooks/useFetch';
import { useCounter } from '../../src/hooks/useCounter';

jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');

describe('pruebas en MultipleCustomHooks', () => {

    const addListenerMock = useFetch as jest.MockedFunction<typeof useFetch>;
    const useCounterMock = useCounter as jest.MockedFunction<typeof useCounter>;

    addListenerMock.mockReturnValue({
        data: [{ author: 'Esteban', quote: 'Hola Mundo' }],
        isLoading: false,
        hasError: null
    });

    const mockIncrement = jest.fn();

    useCounterMock.mockReturnValue({
        counter: 1,
        onAddCounter: mockIncrement
    });

    beforeEach( ()=>{
        jest.clearAllMocks();
    } )

    test('should debe de mostrar el componente por defecto', () => {

        addListenerMock.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null
        });

        render(<MultipleCustomHooks />);


        expect(screen.getByText('Loading...'));
        expect(screen.getByText('Breaking Bad Quotes'));

        const nextButton: any = screen.getByRole('button', { name: 'Next quote' });


        // screen.debug();

        expect(nextButton.disabled).toBeTruthy();




    });

    test('debe de mostrar un Quote', () => {


        addListenerMock.mockReturnValue({
            data: [{ author: 'Esteban', quote: 'Hola Mundo' }],
            isLoading: false,
            hasError: null
        });



        render(<MultipleCustomHooks />);
        expect(screen.getByText('Hola Mundo')).toBeTruthy();
        expect(screen.getByText('Esteban')).toBeTruthy();

        const nextButton: any = screen.getByRole('button', { name: 'Next quote' });
        expect(nextButton.disabled).toBeFalsy();

    });

    test('debe de llamar la función de incrementar', () => {



        render(<MultipleCustomHooks />);
        const nextButton: any = screen.getByRole('button', { name: 'Next quote' });
        fireEvent.click(nextButton);

        expect(mockIncrement).toHaveBeenCalled();



    });
});