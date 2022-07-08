import { useCounter } from '../hooks';
import { Small } from './Small';
import { useState } from 'react';

export const Memorize = () => {


    const { counter, onAddCounter } = useCounter(10);
    const [show, setShow] = useState(true);

    return (
        <>

            <h1> Counter: <Small value={counter} /></h1>
            <hr />

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
