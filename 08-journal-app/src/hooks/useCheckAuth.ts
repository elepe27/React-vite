import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { onAuthStateChanged } from "firebase/auth";
import { FirebaseAuth } from "../firebase/config";

import { RootState } from "../store";
import { login, logout } from "../store/auth";
import { startLoadingNotes } from '../store/journal/thunks';


export const useCheckAuth = () => {
  

    const { status } = useSelector((state: RootState) => state.auth);

    const dispatch:any = useDispatch();
  
  
  
    useEffect(() => {
  
        onAuthStateChanged( FirebaseAuth, async (user)=> {
            if( !user ) return dispatch( logout('') );
            const { uid, email, displayName, photoURL } = user;

            dispatch( login({ uid, email, displayName, photoURL}));
            dispatch( startLoadingNotes());
        } )    
  
    }, []);


    return status;




}
