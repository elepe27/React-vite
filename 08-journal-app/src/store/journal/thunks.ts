import { collection, deleteDoc, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { fileUpload, loadNotes } from "../../helpers";
import { addNewEmptyNote, deleteNoteById, savingNewNote, setActiveNote, setNotes, setPhotoToActiveNote, setSaving, updateNote } from "./journalSlice";
import { AppDispatch } from '../store';


export const startNewNote = ()=> {
    return async ( dispatch: any, getState:any ) => {
        
        // uid

        dispatch( savingNewNote(true) );

       const { uid } = getState().auth;

        const newNote = {
            id: '',
            title:'',
            body:'',
            date: new Date().getTime(),
            imageUrls: []
        }
        
        const newDoc:any = doc( collection( FirebaseDB, `${uid}/journal/notes` ) );
        newNote.id = newDoc.id;

        const setDocResp = await setDoc( newDoc, newNote );


        dispatch( addNewEmptyNote( newNote ) );
        dispatch( setActiveNote( newNote ) );
        dispatch( savingNewNote( false ) );


        //! dispatch
        // dispatch( newNote )
        // dispatch( activarNote )
    }
}

export const startLoadingNotes = ( )=> {
    return async ( dispatch: any, getState:any )=> {

        const { uid } = getState().auth;
        const notes = await loadNotes( uid );
        
        dispatch( setNotes(notes) );

        
    }
}

export const startSavingNote = ( )=> {
    return async ( dispatch:AppDispatch, getState:any)=>{

        dispatch( setSaving('') );

        const { uid } = getState().auth;
        const { active:note } = getState().journal;

        const noteToFireStore = {...note};
        delete noteToFireStore.id;

        const docRef = doc( FirebaseDB, `${ uid }/journal/notes/${ note.id }`);
        await setDoc( docRef, noteToFireStore, { merge:true } );

        dispatch( updateNote( note ) );


    }
}

export const startUploadingFiles = ( files =[] ) => {
    return async ( dispatch:AppDispatch )=> {

        dispatch( setSaving('') );

        const resp = await fileUpload( files[0] );

        const fileUpdloadPromises = [];

        for (const file of files) {
            fileUpdloadPromises.push( fileUpload( file ) );
        }

        const photoUrls:any[] = await Promise.all( fileUpdloadPromises );

        
        dispatch( setPhotoToActiveNote( photoUrls ) );
    }
}

export const startDeletingNote = ()=> {
    return async ( dispatch:AppDispatch, getState:any )=> {

        const { uid } = getState().auth;
        const { active:note } = getState().journal;

        const docRef = doc( FirebaseDB, `${ uid }/journal/notes/${ note.id }`);
        await deleteDoc( docRef );

        dispatch( deleteNoteById( note.id ) );
        

        
    }
}