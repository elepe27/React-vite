import { useLayoutEffect, useRef, useState } from 'react';

export const Quote: React.FC<props> = ({ quote, author }) => {

    const [boxSize, setBoxSize] = useState({
        width: 0,
        height: 0
    })

    const pRef: any = useRef();

    useLayoutEffect(() => {

        const { height, width }: any = pRef.current.getBoundingClientRect();
        
        setBoxSize({
            ...boxSize,
            height,
            width
        })
    }, [quote])



    return (
        <>
            <blockquote
                className='blockquote text-end'
                style={{ display: 'flex' }}>

                <p ref={pRef}
                    className='mb-2'>{quote}</p>
                <footer className='blockquote-footer'> {author} </footer>

            </blockquote>

            <code>{JSON.stringify(boxSize)} </code>
        </>
    )
}



type props = {
    quote: string,
    author: string
}