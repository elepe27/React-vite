
import { LoadingQuote, Quote } from '../03-examples';
import { useCounter, useFetch } from '../hooks';

export const Layout = () => {
    
    const { counter, onAddCounter, onDecrement }  =  useCounter(1);
    const { data, isLoading, hasError } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    const { author, quote }: any = !!data && data[0];

    return (
        <>
            <h1>Breaking Bad Quotes</h1>
            <hr />

            {
                isLoading
                    ? (
                        <LoadingQuote /> 
                    )
                    :
                    (
                        <Quote 
                            author={ author }
                            quote= { quote } />
                    )


            }

            <button 
                className='btn btn-primary'
                disabled= { isLoading }
                onClick={ ()=> onDecrement() }>
                Previous quote
            </button>
            <button 
                className='btn btn-danger m-2'
                disabled= { isLoading }
                onClick={ ()=> onAddCounter() }>
                Next quote
            </button>

        </>
    )
}
