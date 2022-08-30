import React from "react";
import { Link } from "react-router-dom";
import "../../styles/login.css";

export const Login = () => {
  return (
    <>
      <div className="containerLogin">
        <h1 className="mb-3">Registro Usuario</h1>
        <form>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label mt-3">
              Correo electrónico
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              Nunca compartiremos su correo electrónico con nadie más.
            </div>
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label mt-3">
              Contraseña
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
            <a href="#" class="stretched-link">
              ¿Olvidaste la contraseña?
            </a>
          </div>
          <button type="submit" className="btn btn-outline-success">
            Entrar
          </button>
        </form>
      </div>
    </>
  );
};
