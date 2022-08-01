import { render, screen } from '@testing-library/react';
import React from 'react'
import { TodoApp } from '../../src/08-useReducer/TodoApp';
import { useTodo } from '../../src/hooks/useTodo';

jest.mock( '../../src/hooks/useTodo' );

describe('Pruebas en <TodoApp/>', () => {



    const useTodoMock = useTodo as jest.MockedFunction<typeof useTodo>;


    useTodoMock.mockReturnValue( {
        todos: [
            { id:1, description:'Todo #1', done:false },
            { id:2, description:'Todo #2', done:true },
        ],
        onNewTodo: ()=>{},
        onDelete:()=>{},
        onToggleTodo:()=>{}

    } );

    test('Debe renderizar <TodoApp/>', () => {



        const container = render( <TodoApp /> );
        

        expect( container ).toMatchSnapshot();

    });

    test('Debe renderizar <TodoApp/> 2', () => {



        const container = render( <TodoApp /> );
        

        expect ( screen.getByText('Todo #1') ).toBeTruthy();
        expect ( screen.getByText('Todo #2') ).toBeTruthy();
        expect ( screen.getByRole('textbox') ).toBeTruthy();

    });

});