import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');


describe('Pruebas en nuestro componente <GifGrid/>', () => {

    const category: string = 'Goku';

    test('el componente se debe renderizar', () => {
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading:true

        });

        const { container } = render(<GifGrid category={category} />);

        expect(container).toMatchSnapshot();



    });

    test('debe de mostrar el loading', () => {

        


        render(<GifGrid category={category} />);
        expect(screen.getByText('Loading'));


    });

    // test('debe de mostrar items, cuando se cargan las imagenes', () => {

    //     const gifs = [{
    //         id:'ABC',
    //         title:'Goku',
    //         url:'https://asdf.jpg'
    //     },
    //     {
    //         id:'123',
    //         title:'Luffy',
    //         url:'https://gomugomugo.jpg'
    //     }];

    //     useFetchGifs.mockReturnValue({
    //         images: gifs,
    //         isLoading:false

    //     });

    //     screen.debug();
    //     expect( screen.getAllByRole('img').length).toBe(2);


    // });


});