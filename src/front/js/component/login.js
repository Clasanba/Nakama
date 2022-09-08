import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/login.css";
import { saveToken } from "../auth";

export const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [showError, setShowError] = useState(false);
  const navigate = useNavigate();

  const onFormSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    e.target.classList.add("was-validated");
    if (!e.target.checkValidity()) {
      return;
    }
    fetch(
      "https://3001-clasanba-nakama-k43de7m1xg6.ws-eu64.gitpod.io/api/login",
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
        <h1 className="mb-3">Registro Usuario</h1>

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

          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label mt-3">
              Contraseña
            </label>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
              className="form-control  "
              id="exampleInputPassword1"
            />
          </div>
          <button type="submit" className="btn btn-outline-success">
            Entrar
          </button>
        </form>
        <a href="/">
          <p>¿Olvidaste la contraseña?</p>
        </a>
      </div>
    </>
  );
};
