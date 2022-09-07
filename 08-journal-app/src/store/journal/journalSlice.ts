
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { startAfter } from 'firebase/firestore/lite';
import { initialState } from './types/journalState';



export const journalSlice = createSlice({
    name: 'journal',
    initialState,
    reducers: {
        savingNewNote : ( state, { payload }:PayloadAction<boolean>)=> {
            state.isSaving = payload;
        },
        addNewEmptyNote: (state, { payload = [] }:PayloadAction<object>) => {

            state.notes.push( payload );
            state.isSaving = false;

        },
        setActiveNote: (state, action:PayloadAction<any>) => {

            state.active = action.payload;
            state.messageSave= '';
        },
        setNotes: (state, action:PayloadAction<any>) => {

            state.notes =  action.payload ;

        },
        setSaving: (state, action) => {
            state.isSaving = true;
            state.messageSave= '';
        },
        updateNote: (state, action:PayloadAction<any>) => {
            state.isSaving = false;
            state.notes = state.notes.map((note:any) => {
               
                if(note.id === action.payload.id){
                    
                    return action.payload;
                }

                return note;
            });

            state.messageSave = `${ action.payload.title }, actualizada correctamente`;

            
            
        },
        setPhotoToActiveNote: (state, action:PayloadAction<any[]>)=> {

            state.active.imageUrls = [...state.active.imageUrls, ...action.payload ];
            state.isSaving = false;

        },
        clearNotesLogout : (state)=> {
            state.isSaving = false;
            state.messageSave='';
            state.notes =[];
            state.active = initialState.active;
        },
        deleteNoteById: (state, action:PayloadAction<string>) => {

            state.active = initialState.active;
            state.notes = state.notes.filter((note)=> note.id !== action.payload);
            
            
            
        },
    }
});
// Action creators are generated for each case reducer function
export const { 
    addNewEmptyNote,
    clearNotesLogout,
    deleteNoteById,
    savingNewNote,
    setActiveNote,
    setNotes,
    setPhotoToActiveNote,
    setSaving,
    updateNote,
 } = journalSlice.actions;