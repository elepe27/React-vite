

export const todoReducer = ( initialState:Array<any> = [], action:any = {} )=> {


    switch ( action.type ) {
        case '[TODO] Add Todo':
                return [  ...initialState, action.payload];
        case '[TODO] Remove Todo':
                return initialState.filter((todo:any) => todo.id !== action.payload );
        case '[TODO] Toggle':
                return initialState.map((todo:any)=> {
                    if (todo.id=== action.payload) {

                        return {
                            ...todo,
                            done: !todo.done
                        }
                    }
                    return todo;
                })


    
        default:
            return initialState;
    }

}