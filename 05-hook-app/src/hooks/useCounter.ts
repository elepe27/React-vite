import { useState } from 'react';


type prop = {
    counter: number,
    onAddCounter: Function,
    onDecrement: Function,
    onReset: Function,

}

export const useCounter = ( initialValue = 10) :any =>  { 

    const [counter, setCounter] = useState( initialValue );

    const onAddCounter = ( value = 1)=> setCounter( current => current + value);
    const onDecrement = ( value = 1) => {
        if(counter === 1 ) return;
        setCounter ( c => c - value)
    };
    const onReset = ( ) => setCounter (initialValue);

    return {
        counter,
        onAddCounter,
        onDecrement,
        onReset

    }
}
