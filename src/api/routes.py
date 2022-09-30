"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint, json, current_app
from api.models import db, User,Favorite
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token, get_jwt_identity, jwt_required, JWTManager
from flask_bcrypt import Bcrypt
from datetime import timedelta
from  dotenv  import  load_dotenv 
import cloudinary
import cloudinary.api
from cloudinary.uploader import upload
from flask_mail import Mail, Message
import random, string

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
    
    pw_hash = encrypt_pwd(password)
    
    user_update = User.query.filter_by(email=user).first()
    user_update.name = name
    user_update.first_name = first_name
    user_update.last_name = last_name

    # user_update.email = email -> eliminar para no tener que comprobar y guardar en la base de datos que el email esta libre
    user_update.password = pw_hash

    db.session.commit()
    response_body = {
        "message": "Usuario modificado correctamente"
    }
    return jsonify(response_body),200

# User profile image (ruta privada)
@api.route('/profile/image', methods=['POST'])
@jwt_required()
def upload_image():
    mailRegisterUser = get_jwt_identity()
  
    if 'profile_image' in request.files:
        # upload file to uploadcare
        result = cloudinary.uploader.upload(request.files['profile_image'])

        # fetch for the user
        user_update = User.query.filter_by(email= mailRegisterUser).first()
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

#  Recuperación de contraseña
@api.route("/recoverypassword", methods=['POST'])
def recovery_password():
    body = json.loads(request.data)
    email = body ["email"]
    # Genera contraseña aleatoria
    new_password = ''.join(random.choice(string.ascii_uppercase + string.digits) for x in range(15))
    # Encriptamos la nueva contraseña
    pw_hash = encrypt_pwd(new_password)
    user = User.query.filter_by(email=email).first()
    # Asigno el pass aleatorio al user
    if user !=None:
        user.password = pw_hash
        db.session.commit()
    # Aqui comenzaría el envio del mail con la pass 
        mail = Mail ()
        message = Message('Recuperación de contraseña', sender  = 'Nakama', recipients =[user.email])
        message.body = "Hola " + user.name + " tu nueva contraseña es " + new_password + " recuerda modificarla una vez inicies sesión."
        message.html ="<h1>Nakama</h1><h2> Hola " + user.name + " </h2> <p> Tu nuevo password es <b> " + new_password + " recuerda modificarla una vez inicies sesión.</b></p><p>Si usted no ha solicitado el cambio de contraseña ignore y elimine este mensaje por favor.</p> <p> Mensaje enviado automáticamente, no responda</p>"
        mail.send(message)
        response_body ={
            "message":" correo electrónico enviado correctamente"
        }
        return jsonify(response_body),200
    else:
        return jsonify({"message":"correo no registrado"}),400
    
    # Autenticación con Google
@api.route("/register_google", methods = ["POST"])
def google_login():
    name = request.json.get("name",None)
    email = request.json.get("email",None)
    photo = request.json.get("photo",None)
    print(photo)
    print(request.json)
    user = User.query.filter_by(email=email).first()
    if user is None:
        pw_hash = current_app.bcrypt.generate_password_hash("google").decode("utf-8")
        user_google = User(name=name,user_name= "",first_name="",last_name="",email=email, password=pw_hash, image=photo)
        db.session.add(user_google)
        db.session.commit()
        time= timedelta(hours=24)
        access_token = create_access_token(identity=email, expires_delta=time)
        return jsonify({"access_token":access_token,"email":email}),200
    else:
        return jsonify({"message":"error"}),400

# Favorites
@api.route("/favorite", methods=['PUT'])
@jwt_required()
def add_favorite():
    userEmail = get_jwt_identity()
    user = User.query.filter_by(email=userEmail).first()
    if not user : 
        return jsonify({}),400 
    
    url = request.json.get("url")
    url_image = request.json.get("url_image")
    title = request.json.get("title")
    fav = Favorite(user_id = user.id, url = url,url_image=url_image,title=title)
    
    db.session.add(fav)
    db.session.commit()
     
    response_body = {
        "message": "Video añadido correctamente"
    }
    return jsonify(response_body),200 

@api.route("/favorite", methods=['DELETE'])
@jwt_required()
def delete_favorite():
    id = request.json.get("id")
    delete_fav = Favorite.query.filter_by(id = id).first()
    
    db.session.delete(delete_fav)
    db.session.commit()
    
    response_body = {
        "message": "favorito eliminado correctamente"
    }
    return jsonify(response_body),200 

@api.route("/favorite", methods=['GET'])
@jwt_required()
def read_favorites():
    userEmail = get_jwt_identity()
    user = User.query.filter_by(email=userEmail).first()
    if not user : 
        return jsonify({}),400 
    
    
    favorites = Favorite.query.filter_by(user_id = user.id)
    
    def to_json(fav):
        return fav.serialize()
    
    return jsonify(list(map(to_json, favorites))),200 

@api.route('/professional_register', methods=['POST'])
def professional_register():
    # Recibe los datos de usuario 
    name = request.json.get("name")
    first_name = request.json.get("first_name")
    last_name = request.json.get("last_name")
    specialization = request.json.get("specialization")
    membership_number = request.json.get("membership_number")
    email = request.json.get("email")
    password = request.json.get("password")
    image = request.json.get("image")
    regex_letter = re.compile(r'^[a-zA-ZñÑáéíóúÁÉÍÓÚ]+$') 
           
    pw_hash = encrypt_pwd(password)
    user = User.query.filter_by(email=email).first()
    membershipnumber = User.query.filter_by(membership_number= membership_number).first()
    
    if not re.match(regex_letter, name):
            return jsonify({ "msg": "Nombre inválido"}), 400
        
    if not re.match(regex_letter, first_name):
            return jsonify({ "msg": "Apellido inválido"}), 400
    
    if user:
        if email == user.email:
            return jsonify({"msg": "Email ya registrado"}),401
    elif membershipnumber:
    
        if membershipnumber:

            if membership_number == membershipnumber.membership_number:
                return jsonify({"msg": "Usuario ya registrado"}),402
        
    else:
        new_professional = User(name = name,first_name =first_name,last_name =last_name, membership_number = membership_number, email = email, password = pw_hash, image = image, specialization = specialization)
        db.session.add(new_professional)
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
