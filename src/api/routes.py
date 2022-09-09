"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint, json, current_app
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token, get_jwt_identity, jwt_required, JWTManager
from flask_bcrypt import Bcrypt

api = Blueprint('api', __name__)

# función que encripta las contraseñas
def encrypt_pwd(pwd):
    return current_app.bcrypt.generate_password_hash(pwd).decode("utf-8")

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
    pw_hash = encrypt_pwd(password)
    
    # Utilizo query para filtrar el email
    user = User.query.filter_by(email=email).first()
    
    # Utilizo query para filtrar el username
    username = User.query.filter_by(user_name= user_name).first()
    
    if user:
        # Comprueba que el email no este en la BBDD
        if email == user.email:
            return jsonify({"msg": "Email ya registrado"}),401
    elif username:
    
        if username:
        # Comprueba que el username no este ya creado

            if user_name == username.user_name:
                return jsonify({"msg": "Usuario ya registrado"}),402
        
    else:    
    # Añade el nuevo usuario a la base de datos
        new_user = User(name = name,first_name =first_name,last_name =last_name, user_name = user_name, email = email, password = pw_hash, image = image)
        db.session.add(new_user)
        db.session.commit()
    
    response_body = {
        "message": "Usuario registrado correctamente"
    }

    return jsonify(response_body), 200 

def check_password(hash, password):
    try:
        return current_app.bcrypt.check_password_hash(hash, password)
    except: 
        return False

@api.route('/login', methods=['POST'])
def login():
    # Recibe los datos de usuario 

    email = request.json.get("email")
    password = request.json.get("password")
     

    # Utilizo query para filtrar el email y contraseña
    user = User.query.filter_by(email=email).first()
    
    if user and check_password(user.password, password):
        access_token = create_access_token(identity=email)
        return jsonify({"access_token": access_token})

    return jsonify({}),400

