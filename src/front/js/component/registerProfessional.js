import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import avatar from "../../img/avatar_Nakama.png";
import register from "../../styles/register.css";

const RegisterProfessional = () => {
  const [name, setName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [colegiado, setColegiado] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [values, setValues] = useState({ showPassword: false });
  const [error, setError] = useState("");
  const image = avatar;
  const navigate = useNavigate();
  const { store, actions } = useContext(Context);

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className="container mt-4">
      <div className="col-md-6 mx-auto text-center ">
        <div className="header-title">
          <h1 className="fw-bold mb-5 fs-1 title-register">
            Registro de Profesional
          </h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 mx-auto">
          <div className="myform form ">
            {error && <p className="text-danger">{error}</p>}
            <form
              
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
                  className="form-control my-input input-register"
                  id="validationCustom01"
                  placeholder="Nombre"
                  required
                />
                <div className="invalid-feedback">Nombre incorrecto</div>
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
                <div className="invalid-feedback">Apellido incorrecto</div>
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
                  onChange={(e) => setSpecialization(e.target.value)}
                  value={specialization}
                  name="specialization"
                  className="form-control my-input input-register"
                  id="specialization"
                  placeholder="Especialización (Psicología, Fisioterapia...)"
                  required
                />
              </div>
              <div className="invalid-feedback">Introduzca Especialización</div>
              <div className="form-group mb-2">
                <input
                  type="text"
                  onChange={(e) => setColegiado(e.target.value)}
                  value={colegiado}
                  name="colegiado"
                  className="form-control my-input input-register"
                  id="colegiado"
                  placeholder="Num. colegiado"
                  required
                />
                <div className="invalid-feedback">
                  Introduzca Num. colegiado
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
                <div className="invalid-feedback">Email incorrecto</div>
              </div>
              <div className="form-group mb-2 d-flex justify-content-end">
                <input
                  type={values ? "text" : "password"}
                  minLength="8"
                  maxLength="16"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  name="password"
                  id="password"
                  className="form-control my-input input-register"
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

              <div className="container-btn ">
                <div className="text-center ">
                  <button
                    type="submit"
                    className=" btn btn-block send-button bg-gradient tx-tfm button-create mt-2"
                  >
                    Crear Cuenta
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterProfessional;
