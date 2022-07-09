import { useForm } from "../hooks"


export const TodoAdd = ({onNewTodo}:any) => {

    const { formState , onInputChange, onReset, description}:any = useForm( {
        description:''
    });

    const onFormSubmit = ( event:any )=> {

        event.preventDefault();
        
        if(description.length <=1 ) return;
        
        const newTodo = {
            id: new Date().getTime(),
            description,
            done:false,

        };

        onNewTodo(newTodo);
        onReset();
    }

   

    return (
        <form onSubmit={ onFormSubmit }>
            <input
                type='text'
                placeholder="¿Qué hay que hacer?"
                className="form-control"
                name="description"
                value={ description }
                onChange={ onInputChange }
                autoComplete='off'
                
            />

            <button
                type="submit"
                className="btn btn-primary mt-2"
                >
                Agregar
            </button>

        </form>
    )
}
