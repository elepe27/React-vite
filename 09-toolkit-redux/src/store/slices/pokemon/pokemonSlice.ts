import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: {
        page: 0,
        pokemons: [],
        isLoading: false
    },
    reducers: {
        startLoadingPokemons: (state, /* action */) => {
            state.isLoading = true;
            console.log(state.isLoading)
        },
        setPokemons: (state, action: any) => {

            state.isLoading = false;
            state.page = action.payload.page;
            state.pokemons = action.payload.pokemons;

        }
    }
});


// Action creators are generated for each case reducer function
export const { startLoadingPokemons, setPokemons } = pokemonSlice.actions;