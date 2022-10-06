import { getToken } from "../auth";

const getState = ({ setStore }) => {
  return {
    store: {
      checkAuth: false,
      favorites: [],
      psychology: [
        {
          id: 1,
          title: "El cáncer y las emociones",
          image:
            "https://cdn.create.vista.com/api/media/small/184316586/stock-photo-a-woman-with-cancer-is",
          description:
            "Como sobrellevar los efectos secuandarios emocionales del cáncer y su tratamiento",
          url: "https://www.cancer.net/es/asimilaci%C3%B3n-con-cancer/manejo-de-las-emociones",
        },
        {
          id: 2,
          title: "Apoyo social e información",
          image:
            "https://lamenteesmaravillosa.com/wp-content/uploads/2015/02/shutterstock_172501724.jpg?auto=webp&quality=30&width=1920&crop=16:9,smart,safe",
          description:
            "Después de un diagnóstico de cáncer, es importante encontrar información confiable y buscar apoyo.",
          url: "https://www.cancer.net/es/asimilaci%C3%B3n-con-c%C3%A1ncer/c%C3%B3mo-buscar-apoyo-social-e-informaci%C3%B3n",
        },
        {
          id: 3,
          title:
            "Niños con cáncer: cómo ayudarles a mejorar su calidad de vida",
          image:
            "http://c.files.bbci.co.uk/0B28/production/_123265820_aladina4.jpg",
          description:
            "Como impacta la enfermedad en ellos e intervención psicológica",
          url: "https://lamenteesmaravillosa.com/ninos-con-cancer-ayudarles-mejorar-calidad-vida/",
        },
        {
          id: 4,
          title: "Atención a un ser querido",
          image:
            "https://static4.abc.es/media/bienestar/2020/02/06/sufrir-perdida-1-k66C--1200x630@abc.jpg",
          description:
            "Consejos sobre el cuidado de un paciente y cómo sobrellevar el diagnóstico.",
          url: "https://www.cancer.net/es/asimilacion-con-cancer/atencion-de-un-ser-querido",
        },
        {
          id: 5,
          title: "Qué hacer cuando tienes ganas de huir y dejarlo todo",
          image:
            "https://lamenteesmaravillosa.com/wp-content/uploads/2021/06/chica-camino-bruma-768x470.jpg?auto=webp&quality=30&width=1920&crop=16:9,smart,safe",
          description:
            "Hay días en los que deseas escapar bien lejos y huir de todos los problemas. Sin embargo, ¿es esa la mejor solución? ¿Qué deberíamos hacer realmente cuando el peso de la vida se hace en ocasiones insufrible?",
          url: "https://lamenteesmaravillosa.com/que-hacer-cuando-tienes-ganas-huir-dejarlo-todo/",
        },
        {
          id: 6,
          title: "¿Cómo funcionan los analgésicos?",
          image:
            "https://lamenteesmaravillosa.com/wp-content/uploads/2019/10/hombre-tomando-analgesicos.jpg?auto=webp&quality=30&width=1920&crop=16:9,smart,safe",
          description:
            "Todos recurrimos en mayor o menor medida al consumo de pastillas para el dolor, o analgésicos. Pero, ¿cómo es su mecanismo de acción? En este artículo explicamos qué ocurre en nuestro cuerpo cuando sentimos dolor y cómo los analgésicos hacen que desaparezca o disminuya su intensidad.",
          url: "https://lamenteesmaravillosa.com/como-funcionan-los-analgesicos/",
        },
      ],
      nutrition: [
        {
          id: 1,
          title: "Alimentación durante el cáncer",
          image:
            "https://www.cpen.cat/wp-content/uploads/alimentacio-cancer.jpg",
          description:
            "¿Puedo comer de todo o debo seguir una dieta especial? Consejos de nutrición",
          url: "https://www.cpen.cat/es/la-nutricion-y-la-alimentacion-durante-el-cancer/",
        },
        {
          id: 2,
          title: "Guía de alimentación",
          image:
            "https://www.semana.com/resizer/bc41nO-li1BvtT4zyX6NyET08CI=/1200x675/filters:format(jpg):quality(50)//cloudfront-us-east-1.images.arcpublishing.com/semana/M5J6SYXCSFEJLOSRO2I73G7HXA.jpg",
          description:
            "La información contenida en estas fichas ha de servirte como un complemento a los consejos de tu médico.",
          url: "https://www.contraelcancer.es/sites/default/files/migration/actualidad/publicaciones/documentos/guia-alimentos2015.pdf",
        },
        {
          id: 3,
          title: "Nutrición para los niños con cáncer",
          image:
            "https://us.123rf.com/450wm/mizina/mizina1908/mizina190800420/129341162-sopas-de-oto%C3%B1o-conjunto-de-varias-sopas-de-verduras-de-temporada-e-ingredientes-org%C3%A1nicos-sobre-fond.jpg?ver=6",
          description:
            "Esta guía puede ayudarle a aprender acerca de las necesidades nutricionales de su hijo y cómo el cáncer y su tratamiento pueden afectarlas",
          url: "https://www.cancer.org/es/tratamiento/los-ninos-y-el-cancer/cuando-su-hijo-tiene-cancer/nutricion.html",
        },
        {
          id: 4,
          title: "Problemas que pueden dificultar la alimentación",
          image:
            "https://www.edualimentaria.com/images/frutas-verduras/frutas_hortaliza_verduras.jpg",
          description:
            "Recomendaciones para minimizarlos y objetivos de las recomendaciones nutricionales.",
          url: "https://oncosaludable.es/es/inicio/alimentacion-nutricion/problemas-mas-frecuentes-que-pueden-dificultar-la-alimentacion-recomendaciones-para-minimizarlos",
        },
        {
          id: 5,
          title:
            "Beneficios de una buena alimentación durante el tratamiento contra el cáncer",
          image:
            "https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bnV0cml0aW9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
          description:
            "La buena alimentación o nutrición es especialmente importante en caso de que padezca de cáncer debido a que tanto la enfermedad, como su tratamiento, pueden cambiar la forma en que come.",
          url: "https://www.cancer.org/es/tratamiento/supervivencia-durante-y-despues-del-tratamiento/bienestar-durante-el-tratamiento/nutricion/beneficios.html",
        },
        {
          id: 6,
          title:
            "Alimentación y estrés, dos conceptos con una estrecha relación",
          image:
            "https://www.quironprevencion.com/blogs/es/prevenidos/alimentacion-estres-dos-conceptos-estrecha-relacion.ficheros/40488-Tarros%20especies%20848.png?width=848&height=418",
          description:
            "¿Has notado cambios en tus rutinas alimenticias en épocas de más estrés? ¿Sabes cómo determinados alimentos te pueden ayudar a prevenir o controlar el estrés o la ansiedad?",
          url: "https://www.quironprevencion.com/blogs/es/prevenidos/alimentacion-estres-dos-conceptos-estrecha-relacion",
        },
      ],
      article: [
        {
          id: 1,
          title: "Ensayos clínicos",
          image:
            "https://img.blogs.es/anexom/wp-content/uploads/2018/05/participar-ensayo-clinico-laboratorio.jpg",
          description:
            "Todo lo que necesitas saber: ¿En qué consisten?¿Cómo participar?",
          url: "https://fundacionmdanderson.es/participar-ensayo-clinico",
        },
        {
          id: 2,
          title: "La terapia celular mejora la SLP en melanoma avanzado",
          image:
            "https://img.freepik.com/fotos-premium/celulas-t-atacan-celulas-cancerosas-fondo_151689-336.jpg",
          description:
            "Estudio aleatorizado que muestra resultados con (TIL) en pacientes con tumores sólidos.",
          url: "https://gacetamedica.com/investigacion/oncologia/esmo/la-terapia-celular-mejora-la-slp-en-melanoma-avanzado/",
        },
        {
          id: 3,
          title: "Avances frente a las neoplasias malignas de células B",
          image:
            "https://static.laverdad.es/www/multimedia/201904/15/media/cortadas/investigacion-cientifica-kX1F-U701174812333AzF-624x385@RC.jpg",
          description:
            "Los datos de los estudios SHINE y Captivate auguran cambios en LCM y LLC",
          url: "https://gacetamedica.com/investigacion/dos-nuevos-avances-frente-a-las-neoplasias-malignas-de-celulas-b/",
        },
        {
          id: 4,
          title: "Molecular Cell",
          image:
            "https://www.cnio.es/wp-content/uploads/2022/09/39a5587-baja-web-752x501.jpg",
          description:
            "Desvelada la estructura de la proteína RAF1, un paso clave para crear nuevos fármacos contra el cáncer de pulmón",
          url: "https://www.cnio.es/noticias/desvelada-la-estructura-de-la-proteina-raf1-un-paso-clave-para-crear-nuevos-farmacos-contra-el-cancer-de-pulmon/",
        },
        {
          id: 5,
          title:
            "Un estudio consigue eliminar totalmente algunos tipos de cáncer de páncreas en modelos animales",
          image:
            "https://www.contraelcancer.es/sites/default/files/research_projects/Para%20web%20%2826%29.png",
          description:
            "La Asociación Española Contra el Cáncer (AECC) y el Dr. Barbacid han presentado un proyecto de investigación que abre caminos para terapias efectivas en cáncer de páncreas.",
          url: "https://www.contraelcancer.es/es/investigacion/proyectos-aecc/estudio-consigue-eliminar-totalmente-tipos-cancer-pancreas-modelos-animales",
        },
        {
          id: 6,
          title:
            "Con la ayuda de los promotores de salud, las personas con cáncer avanzado van menos al hospital",
          image:
            "https://www.cancer.gov/sites/g/files/xnrzdm211/files/styles/cgov_article/public/cgov_image/media_image/2022-09/CHW.jpg?h=dd7958db&itok=8_ElTyEB",
          description:
            "Según un nuevo estudio, las personas con cáncer avanzado se beneficiaron de las visitas periódicas a domicilio de los promotores de salud, como menos viajes al hospital y más uso de los cuidados paliativos.",
          url: "https://www.cancer.gov/espanol/noticias/temas-y-relatos-blog/2022/promotores-de-salud-cancer-avanzado",
        },
      ],
      user: [],
      init:false,
      mailSend: false,
			mailError:false,
      auth:false,
    },
    actions: {
      init: () => {
        setStore({ checkAuth: true });
      },
      
      getDataProfile: () => {
        fetch(process.env.BACKEND_URL + "/api/profile", {
          method: "GET",
          headers: {
            Authorization: "Bearer " + getToken(),
          },
        })
          .then((resp) => resp.json())
          .then((data) => setStore({ user: data }));
      },
      login: () => {
        setStore({ isLoggedIn: true });
      },
      logout: (check = true) => {
        setStore({ isLoggedIn: false, checkAuth: check });
      },
      getFavorites: () => {
        fetch(process.env.BACKEND_URL + "/api/favorite", {
          method: "GET",
          headers: {
            Authorization: "Bearer " + getToken(),
          },
        })
          .then((response) => {
            if (response.status !== 200) {
              throw new Error();
            }
            return response.json();
          })
          .then((data) => {
            setStore({ favorites: data });
          });
      },
			
			// Recuperación de contraseña
			RecoveryPassword: async (email) =>{
				const options = {
					method: "POST",
					headers:{
						"Content-Type":"application/json"
					},
					body: JSON.stringify({email : email}),
				};
				try {
					const response = await fetch(
						process.env.BACKEND_URL + "/api/recoverypassword",options
					);
					if (response.status === 200){
						setStore({mailSend: true});
					}else {
						setStore({mailError: true});
					}
				} catch (error) {
					setStore({mailError: true})
				}

			},
      loginGoogle: async (user) => {
        
        try{
          const resp = await fetch(process.env.BACKEND_URL + "/api/register_google", {
          method: "POST",
          headers:{
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: user.firstName,
            email: user.email,
            photo: user.photoUrl,
            first_name: user.lastName,
            last_name:"",
            user_name: user.displayName,


          }),
        }
        );
        const data = await resp.json ();
        if (resp.status === 200){
          setStore({
            auth:true,
          });
          localStorage.setItem("token",data.access_token)
        }
        return data
      }catch (error){
        console.log ("Algo salió mal",error)
      }
    },
			}
		}
	};


export default getState;
