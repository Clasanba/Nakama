import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/login.css";
import { saveToken } from "../auth";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

export const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [values, setValues] = useState({ showPassword: false });
  const [showError, setShowError] = useState(false);
  const navigate = useNavigate();

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
    fetch(
      "https://3001-clasanba-nakama-6tel6trqglz.ws-eu64.gitpod.io/api/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      }
    )
      .then((response) => {
        if (response.status !== 200) {
          throw new Error();
        }
        return response.json();
      })
      .then((data) => {
        saveToken(data.access_token);
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
        <div className="modal fade" id="modalRememberpass" tabIndex="-1" aria-labelledby="modalRememberpass" aria-hidden="true">
        <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Recuperación contraseña</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <form>
          <div className="mb-3">
            <label htmlFor="recipient-name" className="col-form-label">Correo electrónico:</label>
            <input type="email" className="form-control" id="recipient-name"/>
          </div>
          
        </form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
        <button type="button" className="btn btn-success">Enviar</button>
      </div>
    </div>
  </div>
</div>
      </div>
      
    </>
  );
};
