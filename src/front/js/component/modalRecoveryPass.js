import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";


const ModalRecoveryPass = () =>{
    const [email, setEmail] = useState("");
    const {store, actions} = useContext(Context)
    const [message, setMessage] = useState("")
    

    const handleRecovery = (e) =>{
        e.preventDefault();
        
        if(email !== ""){
          actions.RecoveryPassword(email)
          setMessage("Correo electrónico enviado")
        }else{
            setMessage("Intoduzca un correo electrónico")
        }
    
      };

    return (
       
        <div className="modal fade" id="modalRememberpass" tabIndex="-1" aria-labelledby="modalRememberpass" aria-hidden="true">
        <div className="modal-dialog">
        <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Recuperación contraseña</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <form onSubmit={handleRecovery}>
          <div className="mb-3">
            <label htmlFor="recipient-name" className="col-form-label">Correo electrónico:</label>
            <input type="email" className="form-control recovery" onChange={(e) => setEmail(e.target.value)}
                value={email} id="recipient-name"/>
                
          </div>
          {message && <p className="text-succes">{message}</p>}
          <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
        <button type="submit" className="btn btn-success">Enviar</button>
       
        </div>
        </form>
      </div>

    </div>
    </div>
    </div>
    
    )
}
export default ModalRecoveryPass