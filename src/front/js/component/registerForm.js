import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import  "../../styles/register.css";
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
              <div className="form-group mb-2 ">
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
              <div className="form-group mb-2">
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
              <div className="form-group mb-2">
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
              <div className="form-group mb-2">
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
              <div className="form-group mb-2">
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
                    className=" btn btn-block send-button tx-tfm  button-create  bg-gradient mt-2"
                  >
                    Crear Cuenta
                  </button>
                </div>
                <div className="col-md-12 ">
                  <div className="login-or text-center">
                    <span className="span-or">o</span>
                  </div>
                </div>
                <div className="form-group text-center">
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
