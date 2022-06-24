import { render, screen } from "@testing-library/react";
import { GifGridItem } from '../../src/components/GifGridItem';

describe('Pruebas en <GifGridItem />', () => {

    
    const title:string = 'Goku';
    const url:string='https://localhost.com/goku.jpg';
    
    test('El componente debe renderizar', () => {


        const { container } =  render( <GifGridItem title={ title } url={ url } />);

        expect( container ).toMatchSnapshot();

    });

    test('debe de mostrar la imagen con el url y con el alt indicado', () => { 
        
        render( <GifGridItem title={title} url={url} />);
        const {src, alt}:any = screen.getByRole('img');
        
        // screen.debug();
        expect( src ).toBe( url );
        expect( alt ).toBe( title );

        
    });

    test('debe mostrar el titulo en el componente', () => { 
        
        render( <GifGridItem title={title} url={url} />);
        expect(screen.getByText( title )).toBeTruthy();
        
        // screen.debug();
        

        
    });


});