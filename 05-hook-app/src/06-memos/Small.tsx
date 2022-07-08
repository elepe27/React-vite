import { memo } from 'react';

export const Small = memo(({ value }: props) => {

    console.log('Me volvi a dibujar :(')
    return (
        <small> {value}  </small>
    )
})


type props = {
    value: number
}
