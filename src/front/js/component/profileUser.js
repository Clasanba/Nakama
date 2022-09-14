import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getToken, saveToken } from "../auth";

const ProfileUser = () => {
  const [name, setName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const image = "imagen por defecto";
  const [showError, setShowError] = useState(false);
  const navigate = useNavigate();

  const onFormSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    e.target.classList.add("was-validated");
    if (!e.target.checkValidity()) {
      return;
    }
    fetch(process.env.BACKEND_URL + "/api/profile", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + getToken(),
      },
      body: JSON.stringify({
        name,
        firstName,
        lastName,
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
        navigate("/profile");
      })
      .catch(() => setShowError(true));
  };

  return (
    <div className="container-fluid justify">
      
      <div className="row d-flex justify-content-center mt-2">
        <div className="col-12">
          <div className="text-center">
            <img
              src="http://ssl.gstatic.com/accounts/ui/avatar_2x.png"
              className="avatar  img-thumbnail"
              alt="avatar"
            />
            <div className="d-flex justify-content-center mt-1">
            <input
              type="file" 
              className="text-center row "
            />
            </div>
          </div>

          <form
            className="form"
            action="##"
            method="post"
            id="registrationForm"
            onSubmit={onFormSubmit}
          >
            {showError && (
              <div className="alert alert-danger" role="alert">
                No se ha podido actualizar los datos de usuario
              </div>
            )}
            <div className="form-group d-flex justify-content-center">
              <div className="col-md-6">
                <label htmlFor="name">
                  <h4 className="text-success mt-2">Nombre</h4>
                </label>
                <input
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  className="form-control"
                  name="name"
                  id="name"
                />
              </div>
            </div>
            <div className="form-group d-flex justify-content-center">
              <div className="col-md-6">
                <label htmlFor="first_name">
                  <h4 className="text-success">Primer apellido</h4>
                </label>
                <input
                  type="text"
                  onChange={(e) => setFirstName(e.target.value)}
                  value={firstName}
                  className="form-control"
                  name="firstName"
                />
              </div>
            </div>
            <div className="form-group d-flex justify-content-center">
              <div className="col-md-6">
                <label htmlFor="last_name">
                  <h4 className="text-success">Segundo apellido</h4>
                </label>
                <input
                  type="text"
                  onChange={(e) => setLastName(e.target.value)}
                  value={lastName}
                  className="form-control"
                  name="firstName"
                />
              </div>
            </div>

            <div className="form-group d-flex justify-content-center">
              <div className="col-md-6">
                <label htmlFor="email">
                  <h4 className="text-success">Correo electrónico </h4>
                </label>
                <input
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  className="form-control"
                  name="email"
                />
              </div>
            </div>

            <div className="form-group d-flex justify-content-center">
              <div className="col-lg-6">
                <label htmlFor="password">
                  <h4 className="text-success">Contraseña</h4>
                </label>
                <input
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  className="form-control mb-3"
                  name="password"
                />
              </div>
            </div>

            <div className="form-group ">
              <div className=" d-flex justify-content-evenly mb-3">
                <button
                  className="btn btn-lg btn btn-outline-success mx-5"
                  type="submit"
                >
                  {" "}
                  Guardar
                </button>

              
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default ProfileUser;
