
import { render } from '@testing-library/react';
import { FirstApp } from '../../src/components/FirstApp';


describe('Pruebas en <First />', () => {

    test('debe hacer match con el snapshot', () => { 
        
        let title = 'Hola soy goku'
        const {container} = render( <FirstApp title={title} subtitle='Goku'/>);


        expect( container ).toMatchSnapshot();

    });

    test('debe de mostrar el titulo en un h1', () => { 
        
        let title = 'Hola soy goku'
        let subtitle = 'soy un subtitulos'
        const { container, getByText, getByTestId, getAllByText } = render( 
            <FirstApp title={title} 
                      subtitle={subtitle}
                      />);
        expect ( getByText(title) ).toBeTruthy();
        
        // const h1 = container.querySelector('h1');
        // expect(h1?.innerHTML).toContain( title );
        
        expect ( getByTestId('test-title').innerHTML ).toBe(title);

    });

   
    
    
 });