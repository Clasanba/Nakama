"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint, json, current_app
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token, get_jwt_identity, jwt_required, JWTManager
from flask_bcrypt import Bcrypt

api = Blueprint('api', __name__)

# user registration
@api.route('/register', methods=['POST'])
def register():
    # Recibe los datos de usuario 
    name = request.json.get("name")
    first_name = request.json.get("first_name")
    last_name = request.json.get("last_name")
    user_name = request.json.get("user_name")
    email = request.json.get("email")
    password = request.json.get("password")
    image = request.json.get("image") 
           
    #Encripta la contraseña
    pw_hash = current_app.bcrypt.generate_password_hash(password).decode("utf-8")
    
    # Utilizo query para filtrar el email
    user = User.query.filter_by(email=email).first()
    
    # Utilizo query para filtrar el username
    username = User.query.filter_by(user_name= user_name).first()
    
    if user:
        # Comprueba que el email no este en la BBDD
        if email == user.email:
            return jsonify({"msg": "email ya registrado"}),401
    if username:
        # Comprueba que el username no este ya creado
            if user_name == username.user_name:
                return jsonify({"msg": "usuario ya registrado"}),402
        
    else:    
    # Añade el nuevo usuario a la base de datos
        new_user = User(name = name,first_name =first_name,last_name =last_name, user_name = user_name, email = email, password = pw_hash, image = image)
        db.session.add(new_user)
        db.session.commit()
    
    response_body = {
        "message": "Usuario registrado correctamente"
    }

    return jsonify(response_body), 200