import React, { useState } from "react";

const RegisterForm = () => {
    const [name, setName] = useState("")
    const [firstName, setFirstName]=useState("")
    const [lastName, setLastName]=useState("")
    const [userName, setUserName]=useState("")
    const [email, setEmail]=useState("")
    const [password, setPassword]=useState("")
    const [error, setError] = useState("")
    const image = "imagen por defecto"
    const handleSubmit = async (e) =>{
        e.preventDefault();
        const res = await fetch("https://3001-clasanba-nakama-o0oa8bahqvy.ws-eu63.gitpod.io/api/register",{
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
            console.log(data)
            //NAVEGAR A LA ROUTA DE LOGIN AUTOMATICAMENTE

        }else {
            const error = await res.json()
            setError(error.msg)
        }
    }


    return (
        
        <div className="container mt-4">
            <div className="col-md-6 mx-auto text-center ">
                <div className="header-title">
                    <h1 className="wv-heading--title fw-bold mb-4">
                        Formulario de Registro
                    </h1>
                    
                </div>
            </div>
            <div className="row">
                <div className="col-md-4 mx-auto">
                    <div className="myform form ">
                        {error && <p className="text-danger">{error}</p>}
                        <form onSubmit={handleSubmit} name="register">
                            
                            <div className="form-group mb-2">
                                <input type="text" onChange={(e) => setName(e.target.value)} value={name} name="name" className="form-control my-input" id="name" placeholder="Nombre" required/>
                            </div>
                            <div className="form-group mb-2">
                                <input type="text" onChange={(e) => setFirstName(e.target.value)} value={firstName} name="first_name" className="form-control my-input" id="apellido1" placeholder="Primer apellido" required/>
                            </div>
                            <div className="form-group mb-2">
                                <input type="text" onChange={(e) => setLastName(e.target.value)} value={lastName} name="last_name" className="form-control my-input" id="apellido2" placeholder="Segundo apellido"/>
                            </div>
                            <div className="form-group mb-2">
                                <input type="text" onChange={(e) => setUserName(e.target.value)} value={userName} name="user_name" className="form-control my-input" id="username" placeholder="Nombre usuario" required/>
                            </div>
                            <div className="form-group mb-2">
                                <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} name="email" className="form-control my-input" id="email" placeholder="Correo electrónico" required/>
                            </div>
                            <div className="form-group mb-2">
                                <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} name="password" id="password" className="form-control my-input" placeholder="Contraseña" required/>
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