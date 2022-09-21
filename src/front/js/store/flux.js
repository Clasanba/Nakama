import { getToken } from "../auth";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			
			psychology: [
				{	id:1,
					title: "El cáncer y las emociones",
					image: "https://cdn.create.vista.com/api/media/small/184316586/stock-photo-a-woman-with-cancer-is",
					description: "Como sobrellevar los efectos secuandarios emocionales del cáncer y su tratamiento",
					url:"https://www.cancer.net/es/asimilaci%C3%B3n-con-cancer/manejo-de-las-emociones"
					
				},
				{	id:2,
					title: "Apoyo social e información",
					image: "https://lamenteesmaravillosa.com/wp-content/uploads/2015/02/shutterstock_172501724.jpg?auto=webp&quality=30&width=1920&crop=16:9,smart,safe",
					description: "Después de un diagnóstico de cáncer, es importante encontrar información confiable y buscar apoyo.",
					url:"https://www.cancer.net/es/asimilaci%C3%B3n-con-c%C3%A1ncer/c%C3%B3mo-buscar-apoyo-social-e-informaci%C3%B3n"
				},
				{	id:3,
					title: "Niños con cáncer: cómo ayudarles a mejorar su calidad de vida",
					image: "http://c.files.bbci.co.uk/0B28/production/_123265820_aladina4.jpg",
					description: "Como impacta la enfermedad en ellos e intervención psicológica",
					url:"https://lamenteesmaravillosa.com/ninos-con-cancer-ayudarles-mejorar-calidad-vida/"
				},
				{	id:4,
					title: "Atención a un ser querido",
					image: "https://static4.abc.es/media/bienestar/2020/02/06/sufrir-perdida-1-k66C--1200x630@abc.jpg",
					description: "Consejos sobre el cuidado de un paciente y cómo sobrellevar el diagnóstico.",
					url:"https://www.cancer.net/es/asimilacion-con-cancer/atencion-de-un-ser-querido"
				}

			],
			nutrition: [
				{	id:1,
					title: "Alimentación durante el cáncer",
					image: "https://www.cpen.cat/wp-content/uploads/alimentacio-cancer.jpg",
					description: "¿Puedo comer de todo o debo seguir una dieta especial? Consejos de nutrición",
					url:"https://www.cpen.cat/es/la-nutricion-y-la-alimentacion-durante-el-cancer/"
					
				},
				{	id:2,
					title: "Guía de alimentación",
					image: "https://www.semana.com/resizer/bc41nO-li1BvtT4zyX6NyET08CI=/1200x675/filters:format(jpg):quality(50)//cloudfront-us-east-1.images.arcpublishing.com/semana/M5J6SYXCSFEJLOSRO2I73G7HXA.jpg",
					description: "La información contenida en estas fichas ha de servirte como un complemento a los consejos de tu médico.",
					url:"https://www.contraelcancer.es/sites/default/files/migration/actualidad/publicaciones/documentos/guia-alimentos2015.pdf"
				},
				{	id:3,
					title: "Nutrición para los niños con cáncer",
					image: "https://us.123rf.com/450wm/mizina/mizina1908/mizina190800420/129341162-sopas-de-oto%C3%B1o-conjunto-de-varias-sopas-de-verduras-de-temporada-e-ingredientes-org%C3%A1nicos-sobre-fond.jpg?ver=6",
					description: "Esta guía puede ayudarle a aprender acerca de las necesidades nutricionales de su hijo y cómo el cáncer y su tratamiento pueden afectarlas",
					url:"https://www.cancer.org/es/tratamiento/los-ninos-y-el-cancer/cuando-su-hijo-tiene-cancer/nutricion.html"
				},
				{	id:4,
					title: "Problemas que pueden dificultar la alimentación",
					image: "https://www.edualimentaria.com/images/frutas-verduras/frutas_hortaliza_verduras.jpg",
					description: "Recomendaciones para minimizarlos y objetivos de las recomendaciones nutricionales.",
					url:"https://oncosaludable.es/es/inicio/alimentacion-nutricion/problemas-mas-frecuentes-que-pueden-dificultar-la-alimentacion-recomendaciones-para-minimizarlos"
				}

			],
			article: [
				{	id:1,
					title: "Ensayos clínicos",
					image: "https://img.blogs.es/anexom/wp-content/uploads/2018/05/participar-ensayo-clinico-laboratorio.jpg",
					description: "Todo lo que necesitas saber: ¿En qué consisten?¿Cómoparticipar?",
					url:"https://fundacionmdanderson.es/participar-ensayo-clinico"
					
				},
				{	id:2,
					title: "La terapia celular mejora la SLP en melanoma avanzado",
					image: "https://img.freepik.com/fotos-premium/celulas-t-atacan-celulas-cancerosas-fondo_151689-336.jpg",
					description: "Estudio aleatorizado que muestra resultados con (TIL) en pacientes con tumores sólidos.",
					url:"https://gacetamedica.com/investigacion/oncologia/esmo/la-terapia-celular-mejora-la-slp-en-melanoma-avanzado/"
				},
				{	id:3,
					title: "Avances frente a las neoplasias malignas de células B",
					image: "https://static.laverdad.es/www/multimedia/201904/15/media/cortadas/investigacion-cientifica-kX1F-U701174812333AzF-624x385@RC.jpg",
					description:"Los datos de los estudios SHINE y Captivate auguran cambios en LCM y LLC",
					url:"https://gacetamedica.com/investigacion/dos-nuevos-avances-frente-a-las-neoplasias-malignas-de-celulas-b/"
				},
				{	id:4,
					title: "Molecular Cell",
					image: "https://www.cnio.es/wp-content/uploads/2022/09/39a5587-baja-web-752x501.jpg",
					description: "Desvelada la estructura de la proteína RAF1, un paso clave para crear nuevos fármacos contra el cáncer de pulmón",
					url:"https://www.cnio.es/noticias/desvelada-la-estructura-de-la-proteina-raf1-un-paso-clave-para-crear-nuevos-farmacos-contra-el-cancer-de-pulmon/"
				}

			],
			user: [],
			mailSend: false,
			mailError:false,
			
			
			
			
			
		},
		actions: {
			// Trae los datos del usuario guardados en la BBDD
			getDataProfile: () => {
				fetch(process.env.BACKEND_URL + "/api/profile",{
					method: "GET",
					headers: {
						Authorization: "Bearer " + getToken(),
					  }
				})
				.then((resp) => resp.json())
				.then((data)=> setStore({user: data}))
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
		
			

				
				
			}
		}
	};


export default getState;
