import { props } from "../Interfaces/propsCounterApp";
import PropTypes from 'prop-types'
import { useState } from 'react';




export const CounterApp = ({value} :props) => {
    const [counter, setcounter] = useState(value);

    const handleAdd = ()=> setcounter(counter+1);
    const hanldeSubstract = ()=> setcounter(counter -1);
    const handleReset = ()=> setcounter(value);

    return (
        <>
            <h1>CounterApp</h1>
            <h2>{ counter }</h2>
            <hr/>
            <button 
                onClick={ handleAdd } > +1</button>

            <button 
                aria-label="btn-reset"
                onClick={ handleReset } >Reset</button>
            <button 
                onClick={ hanldeSubstract } > -1</button>
        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}



