import { createSlice, PayloadAction } from '@reduxjs/toolkit';


export const authSlice = createSlice({
   name: 'auth',
   initialState: {
       status: 'checking', //'checking', 'not-authenticated', 'authenticated'
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
           state.displayName = payload.displayName;
           state.photoURL = payload.photoURL;
           state.errorMessage = null;
       }
   }
});
// Action creators are generated for each case reducer function
export const { login } = authSlice.actions;