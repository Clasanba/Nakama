import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/index.css";

const ModalDeleteUser = () => {
  const navigate = useNavigate();
  const goHome = () => navigate("/");
  return (
    <div className="modal d-block" tabindex="-1">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Usuario eliminado con éxito</h5>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
              onClick={goHome}
            >
              Cerrar
            </button>
            <button type="button" className="btn btn-primary">
              Volver página de inicio
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalDeleteUser;
