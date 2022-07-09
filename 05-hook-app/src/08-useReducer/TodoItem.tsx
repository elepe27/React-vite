type props = {
    todo: {
        description:string,
        done: boolean,
        id: number
    },
    onDelete: Function,
    onToggleTodo: Function
}

export const TodoItem = ({ todo, onDelete, onToggleTodo }:props) => {
    return (
        <li className="list-group-item d-flex justify-content-between">
            <span 
                
                className={`align-self-center ${ (todo.done) ? 'text-decoration-line-through' :''}`}
                onClick={ () => onToggleTodo( todo.id )}>
                     { todo.description } 
            </span>
            <button  className="btn btn-sm btn-danger" onClick={()=> onDelete(todo.id)}> Borrar </button>
        </li>
    )
}
