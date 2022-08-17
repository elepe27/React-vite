import { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux';
import { getPokemons } from "./store/slices/pokemon";
import { RootState } from './store/store';


export const PokemonApp = () => {



    const { isLoading, pokemons, page } = useSelector((state: RootState) => state.pokemons);


    const dispatch: any = useDispatch();

    useEffect(() => {

        dispatch(getPokemons());

    }, [])
    return (
        <>

            <h1>PokemonApp</h1>
            <hr />

            <span>Loading: {isLoading ? 'true' : 'false'} </span>

            <ul>

                {pokemons.map((poke: any) => (
                    <li key={ poke.name }> { poke.name }</li>
                ))}

            </ul>

            <button
                onClick={() => dispatch(getPokemons(page -2))}
                disabled={isLoading}>Previus</button>

            <button
                onClick={() => dispatch(getPokemons(page))}
                disabled={isLoading}>Next</button>
            
        </>
    )
}
