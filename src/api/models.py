from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    name = db.Column(db.String(120), unique=False, nullable=False)
    first_name = db.Column(db.String(120), unique=False, nullable=False)
    last_name = db.Column(db.String(120), unique=False, nullable=False)
    user_name = db.Column(db.String(120), unique=False, nullable=False)
    image = db.Column(db.String(120), unique=False, nullable=False)
    favorite = db.relationship("Favorite",backref="User", lazy=True)
    
    def __repr__(self):
        return '<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "name": self.name,
            "first_name": self.first_name,
            "last_name": self.last_name,
            "user_name": self.user_name,
            "image": self.image,
            "pwd":self.password
        }
class Favorite(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"))
    
    def __repr__(self):
        return '<Favorite {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
        }
class Psychology(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    image= db.Column(db.String(120), unique=True, nullable=False)
    description = db.Column(db.String(120), unique=False, nullable=False)
    url = db.Column(db.String(120), unique=False, nullable=False)
    
    def __repr__(self):
        return '<Psychology {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "url": self.url,
            "description": self.description,
            "image": self.image,
        }

class Nutrition(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    image= db.Column(db.String(120), unique=True, nullable=False)
    description = db.Column(db.String(120), unique=False, nullable=False)
    url = db.Column(db.String(120), unique=False, nullable=False)

    def __repr__(self):
        return '<Nutrition {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "url": self.url,
            "description": self.description,
            "image": self.image,
        }

class Article(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    image= db.Column(db.String(120), unique=True, nullable=False)
    description = db.Column(db.String(120), unique=False, nullable=False)
    url = db.Column(db.String(120), unique=False, nullable=False)

    def __repr__(self):
        return '<Article {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "url": self.url,
            "description": self.description,
            "image": self.image,
        }