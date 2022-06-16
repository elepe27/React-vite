import { fireEvent, render, screen } from '@testing-library/react';
import { CounterApp } from '../../src/components/CounterApp';
describe('Pruebas en <CounterApp />', () => { 
   

    const valor_inicial = 100;
    test('Debe hacer match con el snapshot', () => {
        
       const {container} =  render( <CounterApp value={valor_inicial} />);
       
       expect( container ).toMatchSnapshot();
    
    
    });

    test('debe mostrar el valor inicial de 100', () => {
        
        render( <CounterApp value={valor_inicial} />);

        expect(screen.getByText(valor_inicial)).toBeTruthy();
        expect(Number(screen.getByText(valor_inicial).innerHTML)).toBe(valor_inicial);
    });

    test('debe de incrementar con el botón +1', () => {
        
        render( <CounterApp value={ 10 } />);
        fireEvent.click( screen.getByText('+1') );
        expect( screen.getByText('11')).toBeTruthy();
        
    });

    test('debe de decrementar con el botón -1', () => {
        
        render( <CounterApp value={ 10 } />);
        fireEvent.click( screen.getByText('-1') );
        expect( screen.getByText('9')).toBeTruthy();
        
    });

    test('debe de funcionar el boton de reset', () => {
        
        render( <CounterApp value={ 355 } />);
        fireEvent.click( screen.getByText('+1') );
        fireEvent.click( screen.getByText('+1') );
        fireEvent.click( screen.getByText('+1') );
        // fireEvent.click( screen.getByText('Reset') );

        fireEvent.click(screen.getByRole('button',{ name: 'btn-reset' }));
        
        expect( screen.getByText('355')).toBeTruthy();

        

        
    });
    
    
    
});