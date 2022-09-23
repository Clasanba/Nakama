import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/login.css";
import { saveToken } from "../auth";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import ModalRecoveryPass from "./modalRecoveryPass";
import { Context } from "../store/appContext";
import ModalRecoveryPass from "./modalRecoveryPass";
import { Context } from "../store/appContext";

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

  return (
    <>
      <div className="containerLogin  ">
        <h1 className="mb-3">Inicio sesión</h1>

        {showError && (
          <div className="alert alert-danger" role="alert">
            Email y/o contraseña incorrecta.
          </div>
        )}

        <form className="needs-validation" noValidate onSubmit={onFormSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label mt-3">
              Correo electrónico
            </label>
            <div className="input-group has-validation">
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <div className="invalid-feedback">
                Por favor,introduzca un email
              </div>
            </div>
          </div>

          <div className="mb-3 ">
            <label htmlFor="exampleInputPassword1" className="form-label mt-3">
              Contraseña
            </label>
            <div className="d-flex justify-content-end">
              <input
                type={values.showPassword ? "text" : "password"}
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
                className="form-control  "
                id="exampleInputPassword1"
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
          <button type="submit" className="btn btn-outline-success">
            Entrar
          </button>
        </form>
        <a href="#" data-bs-toggle="modal" data-bs-target="#modalRememberpass">
          <p>¿Olvidaste la contraseña?</p>
        </a>
        <ModalRecoveryPass />
      </div>
    </>
  );
};
