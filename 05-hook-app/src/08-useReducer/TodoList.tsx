import { TodoItem } from "./TodoItem"

type props = {
   todo: Array<any>,
   onDelete: Function,
   onToggleTodo: Function
}

export const TodoList = ( { todo , onDelete, onToggleTodo }:props) => {
    return (
        <ul className="list-group">
            {
                todo.map((value:any)=> <TodoItem key={value.id} todo={ value } onDelete= { onDelete } onToggleTodo= { onToggleTodo }  />)
            }
        </ul>
    )
}
