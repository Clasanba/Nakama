import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import "../../styles/register.css";
import ButtonGoogle from "./buttonGoogle";
import avatar from "../../img/avatar_Nakama.png";

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [values, setValues] = useState({ showPassword: false });
  const [error, setError] = useState("");
  const image = avatar;
  const navigate = useNavigate();

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const onFormSubmit = async (e) => {
    if (!e.target.checkValidity()) {
      e.preventDefault();
      e.stopPropagation();
    }
    e.preventDefault();
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,16}$/gm;
    const regexName = "^[a-zA-ZñÑáéíóúÁÉÍÓÚ]+$";

    if (!name.match(regexName)) {
      setError("Nombre inválido");
    }
    if (!firstName.match(regexName)) {
      setError("Apellido incorrecto");
    }
    if (!password.match(regex)) {
      setError(
        "La contraseña debe contener entre 8-16 caracteres (mayúsculas,minúsculas y dígito) "
      );
      e.target.classList.add("was-validated");
    } else {
      const res = await fetch(process.env.BACKEND_URL + "/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          first_name: firstName,
          last_name: lastName,
          user_name: userName,
          email,
          password,
          image,
        }),
      });
      if (res.ok) {
        const data = await res.json();
        navigate("/login");
      } else {
        const error = await res.json();
        setError(error.msg);
      }
    }
  };
  const handleResetForm = () => {
    setName(""),
      setLastName(""),
      setFirstName(""),
      setEmail(""),
      setUserName(""),
      setPassword("");
  };

  return (
    <div className="container mt-4">
      <div className="col-md-6 mx-auto text-center">
        <div className="header-title">
          <h1 className="fw-bold mb-5 fs-1 title-register">
            Registro de Usuario
          </h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 mx-auto">
          <div className="myform form">
            <form
              onSubmit={onFormSubmit}
              name="register"
              className="needs-validation"
              noValidate
            >
              <div className="form-group mb-3 ">
                <input
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  name="name"
                  className="form-control my-input input-register "
                  id="validationCustom01"
                  placeholder="Nombre"
                  required
                />
                <div className="invalid-feedback bg-danger bg-opacity-75 border-danger rounded p-2 text-white">
                  Nombre incorrecto
                </div>
              </div>
              <div className="form-group mb-3">
                <input
                  type="text"
                  onChange={(e) => setFirstName(e.target.value)}
                  value={firstName}
                  name="first_name"
                  className="form-control my-input input-register"
                  id="apellido1"
                  placeholder="Primer apellido"
                  required
                />
                <div className="invalid-feedback bg-danger bg-opacity-75 border-danger rounded p-2 text-white">
                  Apellido incorrecto
                </div>
              </div>
              <div className="form-group mb-3">
                <input
                  type="text"
                  onChange={(e) => setLastName(e.target.value)}
                  value={lastName}
                  name="last_name"
                  className="form-control my-input input-register"
                  id="apellido2"
                  placeholder="Segundo apellido"
                />
              </div>
              <div className="form-group mb-3">
                <input
                  type="text"
                  onChange={(e) => setUserName(e.target.value)}
                  value={userName}
                  name="user_name"
                  className="form-control my-input input-register"
                  id="username"
                  placeholder="Nombre usuario"
                  required
                />
                <div className="invalid-feedback bg-danger bg-opacity-75 border-danger rounded p-2 text-white">
                  Introduzca nombre de usuario
                </div>
              </div>
              <div className="form-group mb-3">
                <input
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  name="email"
                  className="form-control my-input input-register"
                  id="email"
                  placeholder="Correo electrónico"
                  required
                />
                <div className="invalid-feedback bg-danger bg-opacity-75 border-danger rounded p-2 text-white">
                  Email incorrecto
                </div>
              </div>
              <div className="form-group mb-2 d-flex justify-content-end">
                <input
                  type={values.showPassword ? "text" : "password"}
                  minLength="8"
                  maxLength="16"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  name="password"
                  id="password"
                  className="form-control my-input input-register "
                  placeholder="Contraseña"
                  required
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
              {error && (
                <p className="text-danger bg-danger bg-opacity-75 border-danger rounded p-2 text-white">
                  {error}
                </p>
              )}

              <div className="container-btn ">
                <div className="text-center ">
                  <button
                    type="submit"
                    className=" btn btn-block send-button  button-create  bg-gradient mt-2 mb-2"
                  >
                    Crear Cuenta
                  </button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    className="bi bi-arrow-repeat ms-4 mt-2 reset-btn "
                    viewBox="0 0 16 16"
                    onClick={handleResetForm}
                  >
                    <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z" />
                    <path
                      fillRule="evenodd"
                      d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"
                    />
                  </svg>
                </div>

                <div className="form-group text-center mb-2 mt-2">
                  <ButtonGoogle />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
