import React, { useContext, useEffect, useRef, useState } from "react";
import { Context } from "../store/appContext"
import { useNavigate } from "react-router-dom";
import { getToken} from "../auth";
import "../../styles/profileUser.css";

const ProfileUser = () => {
  const [name, setName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [files, setFiles] = useState(null);
  const [imageContent, setImageContent] = useState(null);
  const navigate = useNavigate();
  const [saveImage, setSaveImage] = useState(false);
  const fileInputRef = useRef();
  const {store, actions} = useContext(Context);
  const [error, setError] = useState("")

  useEffect(() => {
    actions.getDataProfile();
  }, []);
  useEffect(() => {
    setName(store.user.name);
    setFirstName(store.user.first_name)
    setLastName(store.user.last_name)
    setEmail(store.user.email)
  }, [store, actions]);

  useEffect(() => {
    if (files) {
      const file = files[0];
      const filereader = new FileReader();
      filereader.readAsDataURL(file);
      filereader.onload = function (evt) {
        setImageContent(evt.target.result);
      };
    }
  }, [files]);

  const uploadImage = (evt) => {
    evt.preventDefault();

    let body = new FormData();
    body.append("profile_image", files[0]);
    const options = {
      body,
      method: "POST",
      headers: {
        Authorization: "Bearer " + getToken(),
      },
    };

    fetch(process.env.BACKEND_URL + "/api/profile/image", options)
      .then((resp) => resp.json())
      .then((data) => {
        setSaveImage(true);
      })

      .catch((error) => console.error("ERRORRRRRR!!!", error));
  };
  const onFormSubmit = async (e) => {
    if (!e.target.checkValidity()) {
      e.preventDefault();
      e.stopPropagation();
    }
    e.preventDefault();
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,16}$/gm;
    if (!password.match(regex)) {
      setError(
        "La contraseña debe contener entre 8-16 caracteres (mayúsculas,minúsculas y dígito) "
      );
      e.target.classList.add("was-validated");
    } else {
      const res = await fetch(process.env.BACKEND_URL + "/api/profile", {
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
    if (res.ok) {
      const data = await res.json();
        navigate("/profile");
      } else {
        const error = await res.json();
        setError(error.msg);
      }
  }
};

  return (
    <div className="container-fluid justify">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <form onSubmit={uploadImage}>
            <div className="image-position">
              <img
                src={
                  imageContent ||
                  "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                }
                className="avatar rounded-circle image img-thumbnail"
                alt="avatar"
              />
            </div>
            <div className="position-buttons ">
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="  mb-2 text-center center-block file-upload bg-gradient button-save-img p-3"
              >
                Selecciona imagen
              </button>
              <input
                ref={fileInputRef}
                type="file"
                onChange={(e) => setFiles(e.target.files)}
                className="d-none"
              />

              <button
                type="submit"
                className=" text-center center-block file-upload button-save-img bg-gradient p-3"
              >
                Guardar imagen
              </button>
            </div>
            {saveImage && (
              <div className="alert alert-success mt-1" role="alert">
                Imagen guardada con éxito
              </div>
            )}
          </form>

          <form
            className="form needs-validation"
            action="##"
            method="post"
            id="registrationForm"
            onSubmit={onFormSubmit}
            noValidate
          >
            {error && (
              <div className="alert alert-danger" role="alert">
                No se han podido actualizar los datos
              </div>
            )}

            <div className="form-group d-flex justify-content-center">
              <div className="col-md-6">
                <input
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                  defaultValue={store.user.name}
                  className="form-control input-profileUser mb-2"
                  name="name"
                  id="name"
                  placeholder="Nombre"
                  required
                />
                <div className="invalid-feedback bg-danger bg-opacity-75 border-danger rounded p-2 text-white mb-2">
                  Nombre incorrecto
                </div>
              </div>
            </div>
            <div className="form-group d-flex justify-content-center">
              <div className="col-md-6">
                <input
                  type="text"
                  onChange={(e) => setFirstName(e.target.value)}
                  defaultValue={store.user.first_name}
                  className="form-control input-profileUser mb-2"
                  name="firstName"
                  placeholder="Primer apellido"
                  required
                />
                <div className="invalid-feedback bg-danger bg-opacity-75 border-danger rounded p-2 text-white mb-2">
                  Apellido incorrecto
                </div>
              </div>
            </div>
            <div className="form-group d-flex justify-content-center">
              <div className="col-md-6">
                <input
                  type="text"
                  onChange={(e) => setLastName(e.target.value)}
                  defaultValue={store.user.last_name}
                  className="form-control input-profileUser mb-2"
                  name="firstName"
                  placeholder="Segundo apellido"
                />
              </div>
            </div>

            <div className="form-group d-flex justify-content-center">
              <div className="col-md-6">
                <input
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  defaultValue={store.user.email}
                  className="form-control input-profileUser mb-2"
                  name="email"
                  placeholder="Correo electrónico"
                  required
                />
                <div className="invalid-feedback bg-danger bg-opacity-75 border-danger rounded p-2 text-white mb-2">
                  Email incorrecto
                </div>
              </div>
            </div>

            <div className="form-group d-flex justify-content-center">
              <div className="col-lg-6">
                <input
                  type="password"
                  minLength="8"
                  maxLength="16"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  className="form-control mb-3 input-profileUser mb-2"
                  name="password"
                  placeholder="Contraseña"
                  required
                />
                
              </div>
            </div>
            {error && (
                <p className="text-danger bg-danger bg-opacity-75 border-danger rounded p-2 text-white">
                  {error}
                </p>
              )}
            <div className="form-group ">
              <div className=" d-flex justify-content-evenly mb-3">
                <button
                  className="btn mx-5 p-2 bg-gradient button-save"
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
