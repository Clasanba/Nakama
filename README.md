# NAKAMA
<img src="./src/front/img/preview_nakama.png"/>

## Tabla de Contenido.
1. [Descripción](#descripción)
2. [Tecnologías](#tecnologías)
3. [Instalación](#Instalación)

### 📝 Descripción
El proyecto nace con la idea de crear una comunidad dirigida a personas relacionadas directa o indirectamente con el cáncer, a través de la cual, puedan aprender aspectos sobre el día a día de la enfermedad.
- Finalidad: 
   * Que las personas puedan aprender a vivir CON la enfermedad, en vez de vivir PARA ella.
   * Poder mejorar la calidad de vida de los afectados.
   * Reforzar la idea de que el paciente es mucho más que un diagnóstico.
- Utilidad:
    * Que las personas puedan tener acceso a información verificada y contrastada a tráves de la biblioteca de psicología, nutrición e investigaciones científicas, ya que hoy en día la búsqueda de información puede ser abrumadora y peligrosa al mismo tiempo.
    * Acercar el deporte a sus vidas ya que la evidencia científica demuestra que la práctica de actividad física regular disminuye tanto el riesgo de padecer cáncer como de mortalidad por el mismo.
    * Construir una red de apoyo con personas en la misma situación y prefesionales de la salud.
- Objetivo:
    * Contribuir a la mejora de la calidad de vida de las personas.
    * Donar en un futuro la aplicación a alguna organización o asociación.
    * Crear una aplicación versátil.

Actualmente el proyecto se encuentra en desarrollo, estamos trabajando en el perfil profesional, que en el futuro será el encargado de subir la información de la biblioteca y quién personalizará los entrenamientos de los pacientes.
Una vez tengamos esa parte implementada el siguiente paso será la creación de la red social.    

### 💻 Tecnologías

- Front-End

 <img src="./src/front/img/stack-front.png"/>

- Back-End 

<img src="./src/front/img/stack-back.png"/>

- Otros

<img src="./src/front/img/otros-stack.png"/>



[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io#https://github.com/4GeeksAcademy/react-flask-hello.git)



### 💾 Instalación:

#### Instalación Back-End:

Es recomendable instalar primero el back-end, asegurate de tener Python 3.8, Pipenv y un motor de base de datos (se recomienda Posgress)

1. Instalar los paquetes de python: `$ pipenv install`
2. Crear un archivo .env basado en el .env.example: `$ cp .env.example .env`
3. Instala tu motor de base de datos y crea tu base de datos, dependiendo de tu base de datos tienes que crear una variable DATABASE_URL con uno de los posibles valores, asegúrate de reemplazar con la información de tu base de datos:

| Engine    | DATABASE_URL                                        |
| --------- | --------------------------------------------------- |
| SQLite    | sqlite:////test.db                                  |
| MySQL     | mysql://username:password@localhost:port/example    |
| Postgress | postgres://username:password@localhost:5432/example |
 
 ###

4. Migrar las migraciones: `$ pipenv run migrate` (omitir si no ha realizado cambios en los modelos `./src/api/models.py`)
5. Ejecutar las migraciones: `$ pipenv run upgrade`
6. Instalar JWT : `$ pipenv install Flask-JWT`
7. Instalar Bcrypt: `$ pipenv install flask-bcrypt`
8. Instalar Flask-Mail: `$ pipenv install Flask-Mail`
9. Ejecutar la aplicación: `$ pipenv run start`


#### Instalación Front-End:

-   Asegúrate de que utilizas la versión 14+ de Node y de que ya has instalado y ejecutado con éxito el backend.

1. Instalar los paquetes: `$ npm install`
2. Comienza a codificar! inicia el servidor de desarrollo de webpack `$ npm run start`
###


## 🚀 Proyecto desplegado :


https://proyectonakama.herokuapp.com/
