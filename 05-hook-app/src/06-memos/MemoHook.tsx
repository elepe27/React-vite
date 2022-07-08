import { useCounter } from '../hooks';
import { useMemo, useState } from 'react';

const heavyStuff = ( iterationNumber:number = 100 )=> {

    for(let i=0; i< iterationNumber; i++){
        console.log('Ahí vamos...')
    }

    return `${ iterationNumber } done`;
}

export const MemoHook = () => {


    const { counter, onAddCounter } = useCounter(10);
    const [ show, setShow ] = useState(true);

    const memorizedValue = useMemo(() =>  heavyStuff( counter ), [ counter ])

    return (
        <>

            <h1> Counter: <small> { counter }  </small></h1>
            <hr />

            <h4> { memorizedValue }  </h4>

            <button
                className="btn btn-primary"
                onClick={() => onAddCounter()}>
                +1
            </button>

            <button
                className="btn btn-secondary m-2"
                onClick={()=> setShow( !show )}>
                    Show/Hide { JSON.stringify( show ) }
            </button>

        </>
    )
}
