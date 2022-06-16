
import { render, screen } from '@testing-library/react';
import { FirstApp } from '../../src/components/FirstApp';


describe('Pruebas en <First />', () => {

    const title = 'Hola Soy Esteban';
    const subtitle = 'soy un sub';

    test('debe hacer match con el snapshot', () => {

        
        const { container } = render(
            <FirstApp title={title}
                subtitle='Hola' />);

        expect(container).toMatchSnapshot();

    });

    test('debe de mostar el mensaje hola, soy goku', () => { 
        


        
        render(
            <FirstApp title={title}
            subtitle='Hola' />);
        
        expect(screen.getByText(title)).toBeTruthy();
        

        
    });

    test('debe de mostrar el titulo en un h1', () => {
        render(
            <FirstApp title={title}
            subtitle='Hola' />);
        expect( screen.getByRole('heading',{ level:1}).innerHTML).toContain(title);
        
    });

    test('debe de mostrar el subtitle enviado  por props',()=>{

        render(
            <FirstApp title={title}
            subtitle={subtitle} />);


            expect( screen.getAllByText(subtitle).length).toBe(1);
        
    });


});