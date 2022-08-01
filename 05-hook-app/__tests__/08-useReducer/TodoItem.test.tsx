import { render, screen, fireEvent } from '@testing-library/react';
import { TodoItem } from '../../src/08-useReducer/TodoItem';
import * as React from 'react';



describe('Pruebas en <TodoItem/>', () => {

    const todo = {
        id: 1,
        description: 'TODO NUEVO',
        done: false
    }

    const onToggleTodo = jest.fn();
    const onDeleteTodo = jest.fn();

    beforeEach(() => jest.clearAllMocks());


    test('se debe renderizar todoitem', () => {


        const { container } = render(<TodoItem
            todo={todo}
            onToggleTodo={onToggleTodo}
            onDelete={onDeleteTodo} />);



        const liElement = screen.getByRole('listitem');


        expect(container).toMatchSnapshot();
        expect(liElement.className).toBe('list-group-item d-flex justify-content-between');

        const spanElement = screen.getByLabelText('span');
        expect(spanElement.className.trim()).toBe('align-self-center')


    });

    test('Debe de mostrar el Todo Completado', () => {

        todo.done = true;

        render(<TodoItem
            todo={todo}
            onToggleTodo={onToggleTodo}
            onDelete={onDeleteTodo} />);




        const spanElement = screen.getByLabelText('span');
        expect(spanElement.className.trim()).toContain('text-decoration-line-through');


    });

    test('el Span debe llamar el ToggleTodo cuando se hace click', () => {


        render(<TodoItem
            todo={todo}
            onToggleTodo={ onToggleTodo }
            onDelete={ onDeleteTodo } />);

        const spanElement = screen.getByLabelText('span');
        fireEvent.click( spanElement );

        expect( onToggleTodo ).toHaveBeenCalledWith( todo.id )


    });

    test('el boton debe llamar el onDeleteTodo cuando se hace click', () => {


        render(<TodoItem
            todo={todo}
            onToggleTodo={ onToggleTodo }
            onDelete={ onDeleteTodo } />);

        const buttonElement = screen.getByRole('button');
        fireEvent.click( buttonElement );

        expect( onDeleteTodo ).toHaveBeenCalledWith( todo.id );


    });


});