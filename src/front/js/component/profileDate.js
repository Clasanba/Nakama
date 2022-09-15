import React from "react";
import "../../styles/index.css";

const ProfileDate = () => {
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
      <div
        className="card border-success  mt-3 d-flex justify-content-center"
        style={{ width: 30 + "rem", height: 17 + "rem" }}
      >
        <div className="card-header text-center ">Nombre de usuario</div>
        <div className="card-body">
          <p className="card-text">Nombre:</p>
          <p className="card-text">Primer apellido:</p>
          <p className="card-text">Segundo apellido:</p>
          <p className="card-text">Correo electrónico:</p>
          <form className="d-flex justify-content-end mb-2">
            <button
              className="btn btn-md btn btn-outline-danger "
              type="delete"
              onClick={() => onDeleteButtonClick(i)}
            >
              Eliminar cuenta
            </button>
          </form>
        </div>
      </div>

      {/*modal*/}

      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body">Usuario eliminado con exito</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Understood
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileDate;
