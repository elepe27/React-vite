import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'not-authenticate', //'checking', 'not-authenticate', 'authenticated'
        uid: null,
        email: null,
        displayName: null,
        photoURL: null,
        errorMessage: null,
    },
    reducers: {
        login: (state, {payload} ) => {
            state.status = 'authenticated'; //'checking', 'not-authenticate', 'authenticated'
            state.uid = payload.uid;
            state.email = payload.email;
            state.displayName = payload.email;
            state.photoURL = payload.photoURL;
            state.errorMessage = null;
        },
        logout: (state, { payload }) => {

            state.status = 'not-authenticate'; //'checking', 'not-authenticate', 'authenticated'
            state.uid = null;
            state.email = null;
            state.displayName = null;
            state.photoURL = null;
            state.errorMessage = payload.errorMessage;


        },
        chekingCredentials: (state) => {
            state.status = 'checking';

        }
    }
});
// Action creators are generated for each case reducer function
export const { login, logout, chekingCredentials } = authSlice.actions;