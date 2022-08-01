import { renderHook } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { useCounter } from '../../src/hooks/useCounter';



describe('Pruebas en hook useCounter', () => {

    test('debe de retornar los valores por defecto', () => {

        const { result } = renderHook(() => useCounter(10));
        const { counter, onAddCounter, onDecrement, onReset } = result.current;

        expect(counter).toBe(10);
        expect(onAddCounter).toEqual(expect.any(Function));
        expect(onDecrement).toEqual(expect.any(Function));
        expect(onReset).toEqual(expect.any(Function));


    });

    test('debe de generar el valor del counter 100', () => {
        const { result } = renderHook(() => useCounter(100));
        expect(result.current.counter).toBe(100);

    });

    test('debe de incrementar el contador', () => {
        const { result } = renderHook(() => useCounter(10));
        const { onAddCounter } = result.current;

        act( ()=> {
            onAddCounter();
            onAddCounter();
            onAddCounter();
            onAddCounter();
            onAddCounter();
        } )

        expect( result.current.counter ).toBe(15);

    });

    test('debe de decrementar el contador', () => {
        const { result } = renderHook(() => useCounter(10));
        const { onDecrement } = result.current;

        act( ()=> {
            onDecrement();
            onDecrement();
            onDecrement();
            
        } )

        expect( result.current.counter ).toBe(7);

    });

    test('debe de resetear el contador', () => {
        const { result } = renderHook(() => useCounter(10));
        const { onReset, onDecrement } = result.current;

        act( ()=> {
            onDecrement();
            onReset();
            
            
        } )

        expect( result.current.counter ).toBe(10);

    });

});