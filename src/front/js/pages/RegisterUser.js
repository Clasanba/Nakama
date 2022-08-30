import React from "react";
import { Link } from "react-router-dom";
import RegisterForm from "../component/registerForm";


 const RegisterUser = () => {
	

	return (
		<div className="container-fluid">
			<RegisterForm/>

			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
	);
}

export default RegisterUser
