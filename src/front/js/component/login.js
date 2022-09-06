import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/login.css";

export const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const onFormSubmit = (e) => {
    if (!e.target.checkValidity()) {
      e.preventDefault();
      e.stopPropagation();
    }

    e.target.classList.add("was-validated");
  };

  return (
    <>
      <div className="containerLogin">
        <h1 className="mb-3">Inicio sesión</h1>
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label mt-3">
              Correo electrónico
            </label>
            <div class="input-group has-validation">
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                placeholder="email"
                required
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <div class="invalid-feedback">Por favor,introduzca un email</div>
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
              placeholder="password"
              required
              className="form-control"
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
