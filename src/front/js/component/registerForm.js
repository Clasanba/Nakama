import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

import register from '../../styles/register.css'

const RegisterForm = () => {
    const [name, setName] = useState("")
    const [firstName, setFirstName]=useState("")
    const [lastName, setLastName]=useState("")
    const [userName, setUserName]=useState("")
    const [email, setEmail]=useState("")
    const [password, setPassword]=useState("")
    const [values, setValues]= useState({showPassword: false})
    const [error, setError] = useState("")
    const image = "imagen por defecto"
    const navigate = useNavigate()

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
      };
    
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };
      const onFormSubmit = (e) => {
        if (!e.target.checkValidity()) {
          e.preventDefault();
          e.stopPropagation();
        }
    
        e.target.classList.add("was-validated");
      };

    const handleSubmit = async (e) =>{
        e.preventDefault();
        
            const res = await fetch("https://3001-clasanba-nakama-3oq8t6kbx63.ws-eu63.gitpod.io/api/register",{
                method: 'POST',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify({
                    name,
                    first_name:firstName,
                    last_name:lastName,
                    user_name:userName,
                    email,
                    password,
                    image
                })
            })
            if(res.ok){
                const data = await res.json()
                navigate("/login")
                
    
            }else {
                const error = await res.json()
                setError(error.msg)
            }
        }


    return (

        
        <div className="container mt-4">
            <div className="col-md-6 mx-auto text-center ">
                <div className="header-title">
                    <h1 className="wv-heading--title fw-bold mb-4 text-success">
                        Formulario de Registro
                    </h1>
                    
                </div>
            </div>
            <div className="row">
                <div className="col-md-4 mx-auto">
                    <div className="myform form ">
                        {error && <p className="text-danger">{error}</p>}
                        <form onSubmit={onFormSubmit} name="register"  className="needs-validation"noValidate>
                            
                            <div className="form-group mb-2 ">
                                <input type="text" onChange={(e) => setName(e.target.value)} value={name} name="name" className="form-control my-input" id="validationCustom01" placeholder="Nombre" pattern="/ ^ [a-zA-Z] + [a-zA-Z] + $ /;" required/>
                                <div className="invalid-feedback">Nombre incorrecto</div>
                            </div>
                            <div className="form-group mb-2">
                                <input type="text" onChange={(e) => setFirstName(e.target.value)} value={firstName} name="first_name" className="form-control my-input" id="apellido1" placeholder="Primer apellido" pattern="/ ^ [a-zA-Z] + [a-zA-Z] + $ /;" required/>
                                <div className="invalid-feedback">Apellido incorrecto</div>
                            </div>
                            <div className="form-group mb-2">
                                <input type="text" onChange={(e) => setLastName(e.target.value)} value={lastName} name="last_name" className="form-control my-input" id="apellido2" placeholder="Segundo apellido" pattern="/ ^ [a-zA-Z] + [a-zA-Z] + $ /;"/>
                                <div className="invalid-feedback">Apellido incorrecto</div>
                            </div>
                            <div className="form-group mb-2">
                                <input type="text" onChange={(e) => setUserName(e.target.value)} value={userName} name="user_name" className="form-control my-input" id="username" placeholder="Nombre usuario" required/>
                                <div className="invalid-feedback">Introduzca nombre de usuario</div>
                            </div>
                            <div className="form-group mb-2">
                                <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} name="email" className="form-control my-input" id="email" placeholder="Correo electrónico"  pattern="/^[^@]+@[^@]+.[a-zA-Z]{2,}$" required/>
                                <div className="invalid-feedback">Email incorrecto</div>
                            </div>
                            <div className="form-group mb-2 d-flex justify-content-end" >
                 
                                <input type={values.showPassword ? 'text' : 'password'} minLength="8" maxLength="16"  onChange={(e) => setPassword(e.target.value)} value={password} name="password" id="password" className="form-control my-input" placeholder="Contraseña" required/>
                                <div className="invalid-feedback">La contraseña debe contener entre 8-16 caracteres (mayúsculas,minúsculas y dígito)</div>
                                <span
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                    className="show-pass">
                                                                    
                                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                </span>
                            </div>
                            
                            <div className="container-btn ">
                            <div className="text-center ">
                                <button type="submit" className=" btn btn-block send-button tx-tfm btn-success">Crear Cuenta</button>
                            </div>
                            
                            <div className="col-md-12 ">
                                <div className="login-or text-center">
                                    
                                        <span className="span-or">o</span>
                                </div>
                            </div>
                            <div className="form-group text-center">
                                <button className="btn btn-block g-button btn-danger" href="#">
                                    <i className="fa fa-google"></i> Registro con Google
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