<<<<<<< HEAD
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
        actions.logout(false);
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
=======
import React from "react";
import "../../styles/index.css"

const ProfileDate = () => {
  return (
    <div className="card border-success  mt-3 d-flex justify-content-center" style={{ width: 30 + "rem", height: 17 + "rem" }}>
      <div className="card-header text-center ">Nombre de usuario</div>
      <div className="card-body">
        <p className="card-text">Nombre:</p>
        <p className="card-text">Primer apellido:</p>
        <p className="card-text">Segundo apellido:</p>
        <p className="card-text">Correo electrónico:</p>
        <form className="d-flex justify-content-end mb-2">
        <button className="btn btn-md btn btn-outline-danger " type="delete">Eliminar cuenta</button>
        </form>          
                
      </div>
    </div>
>>>>>>> 6f8473a (component profile completed)
  );
};

export default ProfileDate;
