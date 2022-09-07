import React from "react";

const ProfileUser = () => {
  return (

    <div className="container-fluid ">
            <div className="row">
        <div className="mt-2 text-center">
            <h1 className="text-success text-center">Nombre de usuario</h1>
        </div>
    </div>
            <div className="row d-flex justify-content-center mt-2">
            <div className="col-md-4">
                <div className="text-center">
                <img
                src="http://ssl.gstatic.com/accounts/ui/avatar_2x.png"
                className="avatar rounded-circle img-thumbnail"
                alt="avatar"
                />

                <input type="file" className="text-center center-block file-upload mt-2" />
            </div>



            
              <form
                className="form"
                action="##"
                method="post"
                id="registrationForm"
              >
                <div className="form-group d-flex justify-content-center">
                  <div className="col-md-6">
                        <label for="first_name">
                        <h4 className="text-success mt-2">Nombre</h4>
                        </label>
                        <input
                      type="text"
                      className="form-control"
                      name="name"
                      id="name"
                        />
                    </div>
                </div>
                <div className="form-group d-flex justify-content-center">
                  <div className="col-md-6">
                    <label for="last_name">
                      <h4 className="text-success">Apellido</h4>
                    </label>
                    <input type="text" className="form-control" name="firstName" />
                  </div>
                </div>

                <div className="form-group d-flex justify-content-center">
                  <div className="col-md-6">
                    <label for="email">
                      <h4 className="text-success">Correo electrónico </h4>
                    </label>
                    <input type="email" className="form-control" name="email" />
                  </div>
                </div>

                <div className="form-group d-flex justify-content-center">
                  <div className="col-lg-6">
                    <label for="password">
                      <h4 className="text-success">Contraseña</h4>
                    </label>
                    <input
                      type="password"
                      className="form-control mb-3"
                      name="password"
                    />
                  </div>
                </div>

                <div className="form-group ">
                  <div className="col-xs-12">
                    <button className="btn btn-lg btn btn-outline-success mx-5" type="submit">
                      {" "}
                      Guardar
                    </button>

                    <button className="btn btn-lg btn btn-outline-danger ms-2" type="delete">
                      Eliminar cuenta
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
    
  );
};
export default ProfileUser;
