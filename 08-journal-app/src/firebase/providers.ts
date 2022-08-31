
import { createUserWithEmailAndPassword, FacebookAuthProvider, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile } from 'firebase/auth'
import { FirebaseAuth } from './config';


const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

export const sigInWhitGoogle = async () => {

    try {

        const result = await signInWithPopup(FirebaseAuth, googleProvider);
        // const credentials = GoogleAuthProvider.credentialFromResult( result );
        const { displayName, email, photoURL, uid } = result.user;

        return {
            ok: true,
            //User info
            displayName, email, photoURL, uid
        }

    } catch (error:any) {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        
        return {
            ok: false,
            errorCode,
            errorMessage
        }
    }
}

export const sigInWithFacebook = async ()=> {

    try {

        const result = await signInWithPopup(FirebaseAuth, facebookProvider);
        const { displayName, email, photoURL, uid } = result.user;

        return {
            ok: true,
            //User info
            displayName, email, photoURL, uid
        }
        
        
    } catch (error:any) {
        const errorCode = error.code;
        const errorMessage = error.message;
        
        return {
            ok: false,
            errorCode,
            errorMessage
        }
    }
}

export const registerWithUserEmailPassword = async ( {email, password, displayName}:any )=> {

    try {

        const resp = await createUserWithEmailAndPassword( FirebaseAuth , email, password );
        const { uid, photoURL } = resp.user;
        
        await updateProfile( resp.user, { displayName } );
        

        return {
            ok: true,
            uid, photoURL, email, displayName
        }

        
    } catch (error:any) {
        
        return {
            ok:false, errorMessage: error.message
        }
    }
}

export const loginWithEmailPassword = async ( {email, password}:any )=> {

   
    try {

        const resp = await signInWithEmailAndPassword( FirebaseAuth, email, password);
        const { uid, displayName, photoURL } = resp.user

        return {
            ok: true,
            uid, photoURL, displayName
        }
        
    } catch (error:any) {
        return {
            ok: false, errorMessage: error.message
        }
    }
}

export const logOutFirebase = async ()=> {
    return await FirebaseAuth.signOut();
}


