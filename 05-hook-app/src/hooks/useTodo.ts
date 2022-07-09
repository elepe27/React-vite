import { useReducer, useEffect } from 'react';
import { todoReducer } from '../08-useReducer/todoReducer';


const init = ()=>JSON.parse(localStorage.getItem('todo')|| '[]') || [];

export const useTodo = () => {

    const [todos, dispatchTodo]:any = useReducer(todoReducer, [], init);

    useEffect(()=> localStorage.setItem('todo',JSON.stringify(todos)),[ todos ])


    const onNewTodo = ( todo :any)=> {
        
        const action = {
            type:'[TODO] Add Todo',
            payload: todo
        }

        dispatchTodo( action );
    }

    const onDelete = ( id:any )=> {
        const action ={
            type: '[TODO] Remove Todo',
            payload: id
        }

        dispatchTodo( action );
    }

    const onToggleTodo = ( id:any )=> {
        const action ={
            type: '[TODO] Toggle',
            payload: id
        }

        dispatchTodo( action );
    }

    return {
        todos,
        onNewTodo,
        onDelete,
        onToggleTodo
        
    }


}
