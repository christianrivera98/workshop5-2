import { loginWithEmailPassword, logoutFirebase, registerUserWithEmailPassword, signInWithGoogle } from "../../firebase/providers";
import { chekingCredentials, login, logout } from "./authslice"



export const checkingAuthentication = (email, password) =>{
    return async (dispatch) => {

        dispatch ( chekingCredentials());


    }
}

export const startGoogleSignIn = () => {
    return async (dispatch) => {

        dispatch ( chekingCredentials());

        const result = await signInWithGoogle();
        if (!result.ok) return dispatch(logout(result.errorMessage));

        dispatch (login(result));
    }
}

export const startCreatingUserWithEmailPassword = ({email, password, displayName, photoURL}) => {
return async (dispatch) => {

    dispatch( chekingCredentials());

    const {ok, uid, errorMessage} = await registerUserWithEmailPassword ({email, password, displayName, photoURL});

    if ( !ok ) return dispatch( logout({errorMessage}))

    dispatch (login( {uid, displayName, email, photoURL}));
 
}

}

export const startLoginWithEmailPassword = ({email, password}) => {

    return async (dispatch) => {

        dispatch ( chekingCredentials() );
        const result = await loginWithEmailPassword({email, password});

        if (!result.ok) return dispatch(logout(result. errorMessage));

        dispatch (login(result.errorMessage));

    }


}

export const startLogout = () => {
    return async ( dispatch ) => {
        
        await logoutFirebase();
        dispatch (logout({errorMessage: null }));
    }
}