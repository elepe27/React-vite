import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";

describe('pruebas en 08-imp-export', () => {



    test('getHeroeByID debe de retornar un heroe por id', () => {

        const id = 1;
        const hero = getHeroeById(id);

        expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC' });
    });

    test('getHeroeByID debe de retornar undefined si no existe', () => {

        const id = 100;
        const hero = getHeroeById(id);

        expect(hero).toBeFalsy();
    });

    test('getHeroesByOwner debe de retornar heroes de DC', () => {

        const owner = 'DC';
        const hero = getHeroesByOwner(owner);
        expect(hero.length).toBe(3);
        expect(hero).toEqual(heroes.filter(heroe=> heroe.owner === owner ));




    });

    test('getHeroesByOwner debe de retornar heroes de marvel', () => {

        const owner = 'Marvel';
        const hero = getHeroesByOwner(owner);
        expect(hero.length).toBe(2);
        expect(hero).toEqual(heroes.filter(heroe => heroe.owner === owner));




    });
});