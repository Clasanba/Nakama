import React, {useContext} from "react";
import { useNavigate } from "react-router-dom";
import GoogleButton from 'react-google-button';
import { auth, provider } from "./firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import firebase from "./firebase"
import { Context } from "../store/appContext";


const ButtonGoogle = () =>{
    const {store, actions} = useContext(Context)
    const navigate = useNavigate();

    const registerGoogleAsync = async ()=> {
        const result = await  signInWithPopup(auth,provider);
        const credential = GoogleAuthProvider.credentialFromResult(result);
        console.log(credential, "@@")
        const token = credential.accessToken;
         // The signed-in user info.
        const user = result.user; 
    
        await actions.loginGoogle(user);
        navigate("/profile");
    
      }

    return (<>
     <div className="form-group text-center d-flex justify-content-center">
                    <GoogleButton onClick={registerGoogleAsync}/>
                  </div>
    </>)
}

export default ButtonGoogle