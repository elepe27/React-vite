import { sigInWhitGoogle } from "../../firebase/providers";
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