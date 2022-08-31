
import { loginWithEmailPassword, logOutFirebase, registerWithUserEmailPassword, sigInWhitGoogle, sigInWithFacebook } from "../../firebase/providers";
import { chekingCredentials, logout, login } from "./"


export const chekingAuthentication = ( email:string = '', password :string= '' )=> {

    return async ( dispatch:any )=> {

        dispatch( chekingCredentials() );
    }

}

export const startGoogleSignIn = ()=> {

    return async ( dispatch:any )=> {

        dispatch( chekingCredentials() );

        const result = await sigInWhitGoogle();

        if ( !result.ok ) return dispatch( logout(result.errorMessage) );

        dispatch( login( result ) )
        

    }

}

export const startCreatingUserWithEmailAndPassword = ({ email, password, displayName}:any)=> {

    return async ( dispatch:any )=>{

        dispatch( chekingCredentials() );

        const { ok, uid, photoURL, errorMessage} = await registerWithUserEmailPassword({ email, password, displayName }); 
        
        if( !ok ) return dispatch( logout({ errorMessage }) );

        dispatch( login( { uid, displayName, email, photoURL} ) );


    }
}

export const startLoginWithEmailPassowrd = ({ email, password }:any) =>{

    return async ( dispatch:any ) => {

        dispatch( chekingCredentials() );

        const { ok, uid, photoURL, errorMessage , displayName }:any= await loginWithEmailPassword({ email, password });

        if(!ok) return dispatch( logout({ errorMessage}));

        dispatch( login({ uid, displayName, email, photoURL }))

    }
}

export const startLogout = ()=> {

    return async ( dispatch:any ) => {
        await logOutFirebase();

        dispatch( logout({}) );
        
    }
}

export const startLoginWithFacebook = ()=> {


    return async ( dispatch:any)=> {

        dispatch( chekingCredentials() );

        const result = await sigInWithFacebook();

        if ( !result.ok ) return dispatch( logout(result.errorMessage) );

        dispatch( login( result ) )

    }
}