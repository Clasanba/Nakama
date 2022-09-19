import React, { useContext, useEffect } from "react";
import "../../styles/index.css";
import { Context } from "../store/appContext";
import "../../styles/profileDate.css";

const ProfileDate = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getDataProfile();
  }, []);

  const onDeleteButtonClick = () => {
    fetch(process.env.BACKEND_URL + "/profile", {
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + getToken(),
      },
    })
      .then((resp) => resp.json())
      .then((data) => console.log("Usuario borrado", data))
      .catch((error) => console.error("ERRORRRRRR!!!", error));
  };
  const showModals = () => {};

  return (
    <>
      <div className="card profile-date mt-4">
        <img
          src={store.user.image}
          className="avatar rounded-circle img-thumbnail img-profile-date "
          alt="..."
        />
        <div className="card-body ">
          <h5 className="card-title fs-1 text-capitalize mb-4">
            {store.user.user_name}
          </h5>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item text-capitalize">
            Nombre: {store.user.name}
          </li>
          <li className="list-group-item text-capitalize">
            Primer apellido: {store.user.first_name}
          </li>
          <li className="list-group-item text-capitalize">
            Segundo apellido: {store.user.last_name}
          </li>
          <li className="list-group-item">
            Correo electrónico: {store.user.email}
          </li>
        </ul>
        <div className="card-body">
          <button className="btn btn-md btn btn-outline-danger " type="delete">
            Eliminar cuenta
          </button>
          <button
            className="btn btn-md btn btn-outline-danger ms-4 "
            type="button"
          >
            Modificar datos de usuario
          </button>
        </div>
      </div>
    </>
  );
};

export default ProfileDate;
