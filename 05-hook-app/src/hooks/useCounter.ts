import { useState } from 'react';


export const useCounter = ( initialValue = 10) => {

    const [counter, setCounter] = useState( initialValue );



    const onAddCounter = ( value = 1)=> setCounter( counter + value);
    const onDecrement = ( value = 1) => {
        if(counter === 0 ) return;
        setCounter ( counter - value)
    };
    const onReset = ( ) => setCounter (initialValue);

    

    
    
    return {
        counter,
        onAddCounter,
        onDecrement,
        onReset

    }
}
