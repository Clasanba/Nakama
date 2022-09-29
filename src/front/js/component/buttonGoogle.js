import React, { useContext} from "react";
import { useNavigate } from "react-router-dom";
import GoogleButton from "react-google-button";
import { auth, provider } from "./firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import firebase from "./firebase";
import { Context } from "../store/appContext";

const ButtonGoogle = () => {
  const { actions } = useContext(Context);
  const navigate = useNavigate();
  
 

  const registerGoogleAsync = async () => {
    const result = await signInWithPopup(auth, provider);
    const credential = GoogleAuthProvider.credentialFromResult(result);
    console.log(credential, "@@", result);
    const token = credential.accessToken;
    const user = result._tokenResponse;    
    console.log(user)
    await actions.loginGoogle(user);
    actions.login()
    navigate("/login");
    
    
  };


  return (
    <div className="form-group text-center d-flex justify-content-center">
      <GoogleButton onClick={registerGoogleAsync} />
    </div>
  );
};

export default ButtonGoogle;
