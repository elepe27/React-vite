import { TodoAdd, TodoList  } from "./";
import { useTodo } from '../hooks/useTodo';


export const TodoApp = () => {


   const { todos, onNewTodo, onDelete, onToggleTodo }:any = useTodo();

   const pendientes = todos.filter((todo:any)=> !todo.done);

    return (
        <>
            <h1>TodoApp { todos.length }, <small>Pendientes: { pendientes.length }</small></h1>
            <hr />
            <div className="row">
                <div className="col-7">
                    { /**TodoList */}
                    <TodoList 
                        todo = { todos }
                        onDelete= { onDelete }
                        onToggleTodo={ onToggleTodo }/>
                </div>
                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />
                    <TodoAdd 
                        onNewTodo = { onNewTodo} />
                </div>
            </div>


        </>
    )
}
