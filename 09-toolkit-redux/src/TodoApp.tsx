import { useState } from "react";
import { useGetTodoByIdQuery, useGetTodosQuery } from "./store/apis"


export const TodoApp = () => {

    const [todoId, setTodoId] = useState(1);
    // const { data: todos = [], isLoading }: any = useGetTodosQuery(0);
    const { data: todo, isLoading }: any = useGetTodoByIdQuery(todoId);


    const nextTodo = () => {
        setTodoId(todoId + 1)
    }
    const previusTodo = () => {
        if(todoId === 1) return;
        setTodoId(todoId - 1)
    }

    return (
        <>
            <h1>Todo- RTK Query</h1>
            <hr />
            <h4>isLoading: {isLoading ? 'True' : 'False'} </h4>

            <pre>{JSON.stringify(todo, null, 3)}</pre>


            <button
                onClick={ previusTodo }
            >
                Previus Todo
            </button>
            <button
                onClick={ nextTodo }
            >
                Next Todo
            </button>


            {/* <ul>
                {todos.map((todo: any) => (
                    <li key={todo.id}> 
                    <strong>{ todo.completed ? 'Done' : 'Pending' }</strong> - {todo.title}
                    </li>
                ))}
            </ul> */}



        </>
    )
}
