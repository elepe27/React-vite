import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';

describe('Pruebas en <AddCategory />', () => {

    test('debe hacer match con el snapshot', () => {

        const { container } = render(<AddCategory onNewCategory={jest.fn()} />);
        expect(container).toMatchSnapshot();



    });

    test('debe de cambiar el valor de la caja de texto', () => {



        render(<AddCategory onNewCategory={jest.fn()} />);
        const input: any = screen.getByRole('textbox');

        fireEvent.input(input, { target: { value: 'Goku' } });

        expect(input.value).toBe('Goku');



    });

    test('debe de llamar onNewCategory si el input tiene un valor', () => {

        const inputValue: string = 'Luffy';

        const onNewCategory = jest.fn();
        // TODO: ????
        render(<AddCategory onNewCategory={ onNewCategory } />);

        const input:any = screen.getByRole('textbox');
        const form:any = screen.getByRole('form');

        fireEvent.input( input, { target: { value: inputValue } });
        fireEvent.submit( form );

        expect( input.value ).toBe( '' );
        expect( onNewCategory ).toHaveBeenCalled();
        expect( onNewCategory ).toHaveBeenCalledTimes(1);
        expect( onNewCategory ).toHaveBeenCalledWith( inputValue );
        
    });

    test('No debe de ser llamada, si el input esta vacio', () => { 

        const onNewCategory = jest.fn();
        render(<AddCategory onNewCategory={ onNewCategory } />);
        const input:any = screen.getByRole('textbox');
        const form:any = screen.getByRole('form');
        fireEvent.input( input, { target: { value: '' } });
        fireEvent.submit( form );
        expect( onNewCategory ).not.toHaveBeenCalled();
        expect( onNewCategory ).toHaveBeenCalledTimes(0);

     });



});