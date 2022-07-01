import { useCounter } from '../hooks/useCounter';


export const CounterWithCustomHook = () => {


    const { counter, onAddCounter, onDecrement, onReset } = useCounter(16);
   

    return (
        <>
            <h1>CounterWithCustomHook: { counter } </h1>
            <hr />

            <button 
                className="btn btn-outline-primary me-1"
                onClick={()=> onAddCounter()}>+1</button>
            <button 
                className="btn btn-outline-secondary me-1"
                onClick={onReset}>Reset</button>
            <button 
                className="btn btn-outline-danger"
                onClick={()=> onDecrement()}>-1</button>
        </>
    )
}
