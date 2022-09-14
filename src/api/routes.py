"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint, json, current_app
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token, get_jwt_identity, jwt_required, JWTManager
from flask_bcrypt import Bcrypt
from datetime import timedelta
from  dotenv  import  load_dotenv 
import cloudinary
import cloudinary.api
from cloudinary.uploader import upload

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
        time= timedelta(hours=24)
        access_token = create_access_token(identity=email, expires_delta=time)
        return jsonify({"access_token": access_token})

    return jsonify({}),400

# User Profile una vez logueado hago que me traiga los datos del usuario (ruta privada)
@api.route('/profile', methods=['GET'])
@jwt_required()
def user_profile():
    current_user = get_jwt_identity()
    user = User.query.filter_by(email=current_user).first()
    return jsonify(user.serialize()), 200

# User profile modificación de los datos de usuario (ruta privada)
@api.route('/profile', methods=['PUT'])
@jwt_required()
def user_profile_update():
    user = get_jwt_identity()
    name = request.json.get("name")
    first_name = request.json.get("firstName")
    last_name = request.json.get("lastName")
    email = request.json.get("email")
    password = request.json.get("password")
    user_name = request.json.get("user_name")
    # image = cloudinary.uploader.upload(request.files['image'])
    
    pw_hash = encrypt_pwd(password)
    
    user_update = User.query.filter_by(email=user).first()
    user_update.name = name
    user_update.first_name = first_name
    user_update.last_name = last_name
    # user_update.image = image['secure_url']
    
    # user_update.email = email -> eliminar para no tener que comprobar y guardar en la base de datos que el email esta libre
    user_update.password = pw_hash

    db.session.commit()
    response_body = {
        "message": "Usuario modificado correctamente"
    }
    return jsonify(response_body),200

# User profile image
@api.route('/profile/image', methods=['POST'])
@jwt_required()
def upload_image():
    if 'profile_image' in request.files:
        # upload file to uploadcare
        result = cloudinary.uploader.upload(request.files['profile_image'])

        # fetch for the user
        user_update = User.query.filter_by(email=user).first()
        # update the user with the given cloudinary image URL
        user_update.image = result['secure_url']

        db.session.add(user_update)
        db.session.commit()

        return jsonify(user_update.serialize()), 200
    else:
        raise APIException('Missing profile_image on the FormData')

# User profile eliminar cuenta (ruta privada)
@api.route("/profile", methods=['DELETE'])
@jwt_required()
def delete_user_profile():
    current_user = get_jwt_identity()
    delete_user = User.query.filter_by(email = current_user).first()
    
    db.session.delete(delete_user)
    db.session.commit()
    
    response_body = {
        "message": "Usuario eliminado correctamente"
    }
    return jsonify(response_body),200