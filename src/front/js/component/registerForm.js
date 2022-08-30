import React from "react";

const RegisterForm = () => {
    return (
        
        <div className="container">
            <div className="col-md-6 mx-auto text-center mb-3">
                <div className="header-title">
                    <h1 className="wv-heading--title fw-bold">
                        Formulario de Registro
                    </h1>
                    
                </div>
            </div>
            <div className="row">
                <div className="col-md-4 mx-auto">
                    <div className="myform form ">
                        <form action="" method="post" name="login">
                            <div className="form-group mb-2">
                                <input type="text" name="name" className="form-control my-input" id="name" placeholder="Nombre" required/>
                            </div>
                            <div className="form-group mb-2">
                                <input type="text" name="apellido1" className="form-control my-input" id="apellido1" placeholder=" Primer apellido" required/>
                            </div>
                            <div className="form-group mb-2">
                                <input type="text" name="apellido2" className="form-control my-input" id="apellido2" placeholder=" Segundo apellido"/>
                            </div>
                            <div className="form-group mb-2">
                                <input type="email" name="email" className="form-control my-input" id="email" placeholder="Email" required/>
                            </div>
                            <div className="form-group mb-2">
                                <input type="password" min="0" name="password" id="password" className="form-control my-input" placeholder="Contraseña" required/>
                            </div>
                            <div className="container-btn ">
                            <div className="text-center ">
                                <button type="submit" className=" btn btn-block send-button tx-tfm btn-info">Crear Cuenta</button>
                            </div>
                            
                            <div className="col-md-12 ">
                                <div className="login-or text-center">
                                    
                                        <span className="span-or">o</span>
                                </div>
                            </div>
                            <div className="form-group text-center">
                                <button className="btn btn-block g-button btn-danger" href="#">
                                    <i className="fa fa-google"></i> Crear con Google
                                </button>
                            </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default RegisterForm