import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/login.css";
import { saveToken } from "../auth";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import ModalRecoveryPass from "./modalRecoveryPass";
import { Context } from "../store/appContext";
import { auth, provider } from "./firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [values, setValues] = useState({ showPassword: false });
  const [showError, setShowError] = useState(false);
  const navigate = useNavigate();
  const { actions } = useContext(Context);

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    e.target.classList.add("was-validated");
    if (!e.target.checkValidity()) {
      return;
    }
    fetch(process.env.BACKEND_URL + "/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((response) => {
        if (response.status !== 200) {
          throw new Error();
        }
        return response.json();
      })
      .then((data) => {
        saveToken(data.access_token);
        actions.login();
        navigate("/");
      })
      .catch(() => setShowError(true));
  };
  const loginGoogleAsync = async () => {
    const result = await signInWithPopup(auth, provider);
    const credential = GoogleAuthProvider.credentialFromResult(result);
    
    const token = credential.accessToken;
    const user = result._tokenResponse;
    
    await actions.login(user);
    navigate("/");
  };
  return (
    <>
      <div className="container text-center">
        <div className=" row row-cols-md-2 row-cols-sm-3 row-cols-lg-3 justify-content-md-center">
          <div className=" col containerLogin mt-4 ">
            <h1 className="fw-bold mb-5 fs-1 title-register">Inicio sesión</h1>

            {showError && (
              <div
                className="alert alert-danger bg-danger bg-opacity-75 border-danger rounded p-2 text-white"
                role="alert"
              >
                Email y/o contraseña incorrecta.
              </div>
            )}

            <form
              className="needs-validation "
              noValidate
              onSubmit={onFormSubmit}
            >
              <div className=" mb-3">
                <div className="input-group has-validation ">
                  <input
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    required
                    placeholder="Correo electrónico"
                    className="form-control input-login"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                  <div className="invalid-feedback bg-danger bg-opacity-75 border-danger rounded p-2 text-white">
                    Por favor,introduzca un email
                  </div>
                </div>
              </div>

              <div className="mb-3 ">
                <div className="d-flex justify-content-end">
                  <input
                    type={values.showPassword ? "text" : "password"}
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    required
                    className="form-control input-login "
                    id="exampleInputPassword1"
                    placeholder="Contraseña"
                    htmlFor="exampleInputPassword1"
                  />
                  <span
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                    className="show-pass"
                  >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                  </span>
                </div>
              </div>
              <button
                type="submit"
                className="btn button-login mb-3 bg-gradient"
              >
                Entrar
              </button>
            </form>
            <button
              className="btn button-login-google mb-3 bg-gradient"
              onClick={loginGoogleAsync}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-google"
                viewBox="0 0 16 16"
              >
                <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
              </svg>{" "}
              Entrar con Google
            </button>
            <a
              href="#"
              className="password"
              data-bs-toggle="modal"
              data-bs-target="#modalRememberpass"
            >
              <p>¿Olvidaste la contraseña?</p>
            </a>
            <ModalRecoveryPass />
          </div>
        </div>
      </div>
    </>
  );
};
