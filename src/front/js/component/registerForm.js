import React from "react";

const RegisterForm = () => {
    return (
        
        <div className="container">
            <div className="col-md-6 mx-auto text-center">
                <div className="header-title">
                    <h1 className="wv-heading--title">
                        Formulario de Registro
                    </h1>
                    
                </div>
            </div>
            <div className="row">
                <div className="col-md-4 mx-auto">
                    <div className="myform form ">
                        <form action="" method="post" name="login">
                            <div className="form-group">
                                <input type="text" name="name" className="form-control my-input" id="name" placeholder="Nombre"/>
                            </div>
                            <div className="form-group">
                                <input type="text" name="apellido1" className="form-control my-input" id="apellido1" placeholder=" Primer apellido"/>
                            </div>
                            <div className="form-group">
                                <input type="text" name="apellido2" className="form-control my-input" id="apellido2" placeholder=" Segundo apellido"/>
                            </div>
                            <div className="form-group">
                                <input type="email" name="email" className="form-control my-input" id="email" placeholder="Email"/>
                            </div>
                            <div className="form-group">
                                <input type="password" min="0" name="password" id="password" className="form-control my-input" placeholder="Contraseña"/>
                            </div>
                            <div className="text-center ">
                                <button type="submit" className=" btn btn-block send-button tx-tfm">Crear Cuenta</button>
                            </div>
                            <div className="col-md-12 ">
                                <div className="login-or">
                                    
                                        <span className="span-or">or</span>
                                </div>
                            </div>
                            <div className="form-group">
                                <a className="btn btn-block g-button" href="#">
                                    <i className="fa fa-google"></i> Registro con Google
                                </a>
                            </div>
                            
                        </form>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default RegisterForm