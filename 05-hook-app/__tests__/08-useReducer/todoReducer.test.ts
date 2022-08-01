import { initialState } from '../../src/08-useReducer/intro-reducer';
import { todoReducer } from '../../src/08-useReducer/todoReducer';
describe('pruebas en el todoReducer', () => {


    const initialState = [{
        id: 1,
        description: 'Demo TODO',
        done: false
    }];


    test('debe de regresar el estado inicial', () => {

        const newState = todoReducer(initialState, {});
        expect(newState).toBe(initialState);

    });

    test('debe de agregar un TODO', () => {

        const action = {
            type: '[TODO] Add Todo',
            payload: {
                id: 2,
                description: 'Nuevo TODO',
                done: false
            }
        }

        const newState = todoReducer(initialState, action);
        expect(newState.length).toBe(2);
        expect(newState).toContain(action.payload);



    });

    test('debe eliminar un TODO', () => {

        const action = {
            type: '[TODO] Add Todo',
            payload: {
                id: 2,
                description: 'Nuevo TODO',
                done: false
            }
        }

        const newState = todoReducer(initialState, action);

        const actionDelete = {
            type: '[TODO] Remove Todo',
            payload: 2
        }
        const finalState = todoReducer( newState , actionDelete)

        expect(finalState.length).toBe(1);




    });

    test('debe de realizar el togle del TODO', () => {

        const action = {
            type: '[TODO] Toggle',
            payload: 1
        }

        const newState = todoReducer(initialState, action);

        expect( newState[0].done ).toBeTruthy();


    });

})