import React from 'react'
type props = {
    increment: Function
}

export const ShowIncrement = React.memo(({ increment }: props) => {

    console.log('Me volvi a generar :(');
    return (

        <button
            className="btn btn-primary"
            onClick={() => {
                increment( 5 );
            }}>
            Incrementar
        </button>
    )
})
