import React, { useContext, useEffect, useState } from "react";
import "../../styles/index.css";
import { Context } from "../store/appContext";
import "../../styles/profileDate.css";
import ModalDeleteUser from "./modalUserDelete";
import { getToken } from "../auth";
import { Link } from "react-router-dom";
import { deleteToken } from "../auth";
const ProfileDate = () => {
  const [showModal, setShowModal] = useState(false);
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getDataProfile();
  }, []);

  const onDeleteButtonClick = () => {
    fetch(process.env.BACKEND_URL + "/api/profile", {
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + getToken(),
      },
    })
      .then((response) => {
        if (response.status !== 200) {
          throw new Error();
        }
        return response.json();
      })

      .then((data) => {
        console.log("data");
        deleteToken();
        actions.logout();
        setShowModal(true);
      })
      .catch(() => {
        setShowModal(false);
        console.log("catch");
      });
  };

  return (
    <>
      <div className="card profile-date mt-4">
        <img
          src={store.user.image}
          className="avatar rounded-circle img-thumbnail img-profile-date "
          alt="..."
        />
        <div className="card-body">
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
          <button
            className="btn btn-md btn btn-outline-danger "
            type="delete"
            onClick={onDeleteButtonClick}
          >
            Eliminar cuenta
          </button>
          <Link to="/profile/modificate">
            <button
              className="btn btn-md btn btn-outline-danger ms-4"
              type="button"
            >
              Modificar datos de usuario
            </button>
          </Link>
        </div>
      </div>
      {showModal && <ModalDeleteUser />}
    </>
  );
};

export default ProfileDate;
