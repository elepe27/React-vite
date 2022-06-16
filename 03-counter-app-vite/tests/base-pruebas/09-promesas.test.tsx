import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";
import heroes from '../../src/data/heroes';

describe('Pruebas en 09-promesas', () => {
   
    test('getHeroeByIdAsync debe de retornar un heroe ', ( done ) => { 


        const id = 1;
        
        getHeroeByIdAsync ( id ).then(
            hero => {
                expect(hero).toEqual(heroes.find(heros =>heros.id === id ));
                done();
            }
        );

        

     });

     test('getHeroeByIdAsync debe obtener un error si heroe no existe', ( done ) => { 


        const id = 100;
        
        getHeroeByIdAsync ( id )
        .then( hero => {
            expect( hero ).toBeFalsy();
            done();
        } )
        .catch(
            error => {
               
                expect(error).toBe('No se pudo encontrar el héroe '+id)

                done();
            }
        );

        

     });

     test('getHeroeByIdAsync debe de retornar un heroe con aysnc y await ', async() => { 


        const id = 1;
        
        const heroe = await getHeroeByIdAsync ( id );

        expect( heroe ).toEqual(heroes.find(hero => hero.id === id)) ;
        

     });
    
    
});