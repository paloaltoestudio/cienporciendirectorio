// Cien por Cien — Directorio Estratégico de Liderazgos
// Datos reales generados desde 'DIRECTORIO LÍDERES (Respuestas).xlsx'

const CAUSAS_COLORES = {
  "Ambiente": "#4FB477",
  "Arte": "#E8885A",
  "Bienestar": "#F5C542",
  "Bienestar Integral En La Fundación Realizamos De Todas La…": "#B4A6E0",
  "Capitalismo Consciente": "#FF641F",
  "Comunicación Asertiva Para La Vida": "#E8885A",
  "Comunidad": "#E8885A",
  "Cultura": "#E8885A",
  "Defensa": "#B4A6E0",
  "Deportes ( Fútbol Jugado Por Mujeres)": "#F5C542",
  "Derechos Humanos": "#80ACEE",
  "Educación": "#6DC8C4",
  "Emocional": "#FFBE2F",
  "Emprendimiento": "#F79D7B",
  "Espacios De Bienestar": "#F5C542",
  "Gestión Comunitaria De Riesgo": "#F5C542",
  "Gestión Emocional": "#F79D7B",
  "Innovación": "#B4A6E0",
  "Juventud": "#7DC89A",
  "Liderazgo": "#FFBE2F",
  "Liderazgo Empresarial": "#B4A6E0",
  "Marca Personal": "#B4A6E0",
  "Masculinidades Conscientes": "#FCC3EC",
  "Mujeres": "#FF641F",
  "Oportunidades": "#6DC8C4",
  "Participación Ciudadana": "#B4A6E0",
  "Patrimonio": "#80ACEE",
  "Paz": "#FFBE2F",
  "Pensamiento Sistémico": "#7DC89A",
  "Prevención Del Comportamiento Suicida": "#7DC89A",
  "Propósito": "#F5C542",
  "Proyecto De Vida": "#80ACEE",
  "Representación Judicial": "#7DC89A",
  "Salid Fisica": "#80ACEE",
  "Salud": "#F5C542",
  "Salud Mental": "#80ACEE",
  "Seguridad Alimentos": "#B4A6E0",
  "Tejido Comunitario": "#7DC89A",
  "Trabajo En Equipo": "#FF641F"
};

const CAUSAS_TEXTO_OSCURO = {
  "Ambiente": true,
  "Arte": false,
  "Bienestar": true,
  "Bienestar Integral En La Fundación Realizamos De Todas La…": true,
  "Capitalismo Consciente": false,
  "Comunicación Asertiva Para La Vida": false,
  "Comunidad": false,
  "Cultura": false,
  "Defensa": true,
  "Deportes ( Fútbol Jugado Por Mujeres)": true,
  "Derechos Humanos": true,
  "Educación": true,
  "Emocional": true,
  "Emprendimiento": true,
  "Espacios De Bienestar": true,
  "Gestión Comunitaria De Riesgo": true,
  "Gestión Emocional": true,
  "Innovación": true,
  "Juventud": true,
  "Liderazgo": true,
  "Liderazgo Empresarial": true,
  "Marca Personal": true,
  "Masculinidades Conscientes": true,
  "Mujeres": false,
  "Oportunidades": true,
  "Participación Ciudadana": true,
  "Patrimonio": true,
  "Paz": true,
  "Pensamiento Sistémico": true,
  "Prevención Del Comportamiento Suicida": true,
  "Propósito": true,
  "Proyecto De Vida": true,
  "Representación Judicial": true,
  "Salid Fisica": true,
  "Salud": true,
  "Salud Mental": true,
  "Seguridad Alimentos": true,
  "Tejido Comunitario": true,
  "Trabajo En Equipo": false
};

const TODAS_CAUSAS = ["Educación", "Salud Mental", "Cultura", "Juventud", "Emprendimiento", "Mujeres", "Participación Ciudadana", "Ambiente", "Paz", "Derechos Humanos"];

const TODOS_TERRITORIOS = ["Area metropolitana", "BELEN Y DOCE DE OCTUBRE", "Barrio la cruz comuna 3 Medellín", "Belén, Laureles, Moravia, El Poblado", "Buenos Aires - Medellín", "Comuna 10", "Comuna 10 - Envigado", "Comuna 10 - La Candelaria", "Comuna 10 - Medellín", "Comuna 10- LA CANDERIA", "Comuna 11", "Comuna 12 ,La America", "Comuna 13", "Comuna 14", "Comuna 14 - Medellín", "Comuna 14, El Poblado", "Comuna 3 Manrique", "Comuna 4", "Comuna 4- Medellín", "Comuna 5", "Comuna 5, castilla", "Comuna 8 y 9 (Villa Hermosa, Buenos Aires) Medellín", "Comunas 10, 1, 3, etc", "Comunas 2 y 1, queremos llegar a todo Antioquia", "El Poblado", "El Poblado, Medellín", "En las 16 comunas", "Enviado - Támesis", "Envigado", "Global", "La Honda, Manrique (Comuna 3), Medellin", "Llevamos a cabo el programa en 3 sectores: Comuna 80 - El Limonar; Comuna 13 - Blanquizal; Comuna 8 - La Sierra", "Medellin", "Medellín", "Medellín y El Retiro", "Medellín y municipios de Antioquia , otras ciudades", "Medellín, Poblado", "Medellín, comuna 13", "Nacional", "Planeta Rica, Córdoba", "Poblado", "Poblado, Medellin", "Rionegro", "SANTA ELENA y Medellín", "San Antonio de Prado", "San Pedro de Uraba Antioquia", "Sna Sebastián de palmitas", "Toda la ciudad de Medellín", "Área Metropolitana Valle de Aburrá"];

const BUSCA_OPCIONES = ["Alianzas Estratégicas", "Visibilidad", "Financiación", "Formación", "Mentoría", "Voluntariado"];

const OFRECE_OPCIONES = ["Formación", "Consultoría", "Articulación Territorial", "Facilitación", "Movilización Comunitaria", "Investigación"];

const CAPACIDADES_DATA = {
  labels: ["Formación", "Gestión De Proyectos", "Comunicación", "Arte", "Cultura", "Organización Comunitaria", "Incidencia", "Investigación", "Mediación De Conflictos", "Tecnología"],
  values: [43, 34, 26, 16, 16, 15, 15, 12, 11, 4]
};

const LIDERES = [
  {
    "id": "jorge-david-vallejo-gomez",
    "numero": "01",
    "nombre": "Jorge David Vallejo Gómez",
    "organizacion": "Conexiones Jurídicas - SENA",
    "territorio": "Buenos Aires - Medellín",
    "municipio": "Medellín",
    "fotos": [
      "jorge-david-vallejo-gomez-00-0-primary.webp",
      "jorge-david-vallejo-gomez-00-1.webp"
    ],
    "causas": [
      "Derechos Humanos"
    ],
    "poblacion": [
      "Empresas"
    ],
    "capacidades": [
      "Mediación De Conflictos"
    ],
    "busca": [
      "Alianzas Estratégicas"
    ],
    "ofrece": [
      "Consultoría"
    ],
    "experiencia": 10,
    "disponible_alianzas": true,
    "que_hace": "Lidero Conexiones Jurídicas, una iniciativa de consultoría que acompaña a empresas en la implementación de procesos de debida diligencia empresarial en derechos humanos. Ayudo a identificar, prevenir, mitigar y gestionar riesgos que puedan afectar a trabajadores, comunidades y otros grupos de interés, fortaleciendo el cumplimiento normativo, la sostenibilidad y la reputación corporativa.",
    "problema": "Muchas empresas desconocen los riesgos en derechos humanos presentes en sus operaciones, relaciones laborales o cadenas de suministro, lo que puede generar conflictos, sanciones, daños reputacionales y pérdidas económicas. Mi trabajo permite anticipar estos riesgos mediante diagnósticos, matrices de riesgo, políticas internas y planes de acción que convierten los derechos humanos en una herramienta de gestión estratégica y prevención.",
    "con_quien": "Trabajo con empresas de diferentes sectores económicos, organizaciones, emprendimientos e instituciones que buscan fortalecer sus prácticas socioculturales, de sostenibilidad, inclusión, y conducta empresarial responsable. También colaboro con equipos directivos, áreas de talento humano, seguridad y salud en el trabajo, cumplimiento, sostenibilidad y gestión del riesgo, principalmente en Medellín y Antioquia, con posibilidad de acompañamiento a nivel nacional.",
    "que_ofrece_largo": "Ofrezco experiencia jurídica y pedagógica para diseñar e implementar estrategias de debida diligencia empresarial en derechos humanos. Aporto metodologías para la identificación y gestión de riesgos, elaboración de matrices de riesgos, políticas corporativas, reglamentos internos de trabajo, lineamientos de seguridad y salud en el trabajo, procesos de formación y fortalecimiento de capacidades, así como acompañamiento en la construcción de organizaciones más éticas, sostenibles y centradas en las personas.",
    "frase_vision": "Imaginemos un mundo donde las empresas no solo generan ganancias, sino que respetan los derechos humanos y cuidan el planeta, elevando el progreso y la inclusión de las comunidades",
    "alianzas_activas": "Quedadas Diversas, Fundación Oasis Pinto, Corporación ADN Socioambiental, Monarcas F.C.",
    "proyecto_autogestion": "",
    "contacto": {
      "email": "jorgedavidvallejo123@gmail.com",
      "telefono": "+573158955435",
      "web": null,
      "instagram": null
    },
    "foto": "images/lideres/jorge-david-vallejo-gomez-00-0-primary.webp"
  },
  {
    "id": "maria-paula-salazar-benavides",
    "numero": "02",
    "nombre": "María Paula Salazar Benavides",
    "organizacion": "SOMOS B+E",
    "territorio": "SANTA ELENA y Medellín",
    "municipio": "Medellín",
    "fotos": [
      "maria-paula-salazar-benavides-01-1.webp",
      "maria-paula-salazar-benavides-01-3.webp",
      "maria-paula-salazar-benavides-01-0.webp"
    ],
    "causas": [
      "Salud Mental",
      "Gestión Emocional",
      "Espacios De Bienestar"
    ],
    "poblacion": [
      "Todas Las Poblaciones"
    ],
    "capacidades": [
      "Formación",
      "Comunicación",
      "Gestión De Proyectos",
      "Facilitación De Procesos De Bienestar Holístico",
      "Desarrollo Humano"
    ],
    "busca": [
      "Alianzas",
      "Visibilidad",
      "Formas De Financiación"
    ],
    "ofrece": [
      "Formación",
      "Consultoría",
      "Facilitación"
    ],
    "experiencia": 8,
    "disponible_alianzas": true,
    "que_hace": "SOMOS B+E es un proyecto de bienestar integral que acompaña a personas, comunidades y organizaciones mediante terapias de Reiki, talleres y experiencias de bienestar. Nuestro propósito es fortalecer el autoconocimiento, la salud emocional y la consciencia, brindando herramientas para la transformación personal y la construcción de una vida más equilibrada y consciente.",
    "problema": "SOMOS B+E responde a la creciente necesidad de bienestar integral, fortaleciendo la salud emocional, mental y el desarrollo de habilidades para construir una vida y comunidades más saludables. Promovemos la salud mental y el bienestar integral.",
    "con_quien": "Trabajamos con personas, comunidades y organizaciones de Medellín, Santa Elena y el Oriente Antioqueño, de manera presencial y virtual, promoviendo el bienestar integral, la salud emocional y el desarrollo humano a través de experiencias de transformación y consciencia.",
    "que_ofrece_largo": "Ofrecemos experiencia en el diseño y facilitación de experiencias de bienestar integral, metodologías de desarrollo humano, terapias de Reiki, aromaterapia, musicoterapia y espacios de formación. Aportamos conocimientos en salud emocional, liderazgo consciente, gestión del bienestar y una red de aliados comprometidos con la transformación de personas, comunidades y organizaciones.",
    "frase_vision": "Inspirar una sociedad donde el bienestar integral, la consciencia y el amor por la vida transformen personas, comunidades y organizaciones, dejando un legado de bienestar para las futuras generaciones.",
    "alianzas_activas": "Tierra Activa, Sagradamente, Fundación Ariel Escuela para El Alma, Casa de la Cultura de Santa Elena, Transformarte en Movimiento (TEM Coaching)",
    "proyecto_autogestion": "",
    "contacto": {
      "email": "mariapaulasbienestar@gmail.com",
      "telefono": "302534333",
      "web": null,
      "instagram": "@mariapaulasomosbienestar"
    },
    "foto": "images/lideres/maria-paula-salazar-benavides-01-1.webp"
  },
  {
    "id": "yesid-alexander-sanchez-perez",
    "numero": "03",
    "nombre": "Yesid Alexander Sánchez Perez",
    "organizacion": "RED La Cruz",
    "territorio": "Barrio la cruz comuna 3 Medellín",
    "municipio": "Medellín",
    "fotos": [
      "yesid-alexander-sanchez-perez-02-1-primary.webp",
      "yesid-alexander-sanchez-perez-02-0.webp",
      "yesid-alexander-sanchez-perez-02-2.webp"
    ],
    "causas": [
      "Cultura",
      "Juventud",
      "Paz"
    ],
    "poblacion": [
      "Niñez",
      "Juventud",
      "Víctimas"
    ],
    "capacidades": [
      "Comunicación",
      "Organización Comunitaria",
      "Arte",
      "Cultura",
      "Tecnología"
    ],
    "busca": [
      "Financiación",
      "Voluntariado",
      "Alianzas Estratégicas"
    ],
    "ofrece": [
      "Formación",
      "Investigación",
      "Articulación Territorial"
    ],
    "experiencia": 12,
    "disponible_alianzas": true,
    "que_hace": "Lidero iniciativas de cogestión cívica como un colectivo de habitantes, impulsando proyectos de reforestación como \"Montaña de la Paz\" y desarrollando herramientas tecnológicas comunitarias como \"App del Barrio\" y \"reportes Del Barrio”",
    "problema": "Soluciono la falta de herramientas para la participación ciudadana y el deterioro ambiental, facilitando la veeduría pública, el reporte de problemas urbanos y la recuperación ecológica del territorio.",
    "con_quien": "Trabajo de la mano con los vecinos, la Junta de Acción Comunal y los colectivos ciudadanos del barrio Manrique Oriental en la ciudad de Medellín. Especialmente los barrios la cruz y la honda",
    "que_ofrece_largo": "Aporto más de doce años de experiencia en producción audiovisual, captura de medios avanzados (fotogrametría, drones), desarrollo web y estructuración de proyectos para escalar el impacto social.",
    "frase_vision": "“Consolidar un territorio resiliente donde la innovación tecnológica y la acción ciudadana se integren para transformar el espacio público y elevar la calidad de vida de nuestra comunidad.“",
    "alianzas_activas": "Junta de Acción Comunal de Manrique Oriental y autoridades ambientales locales (con quienes se articula la donación de especies nativas para reforestación), grupo de baila Flow Callejero, grupo de Baile Borboletas, Fundación Niños del Futuro, Proyecto “Hágalo Real”, Colectivo Los Planetarios, Inder la cruz...",
    "proyecto_autogestion": "Me gustaría escalar el proyecto de reforestación \"Montaña de la Paz\" en las laderas de la ciudad o expandir el alcance de herramientas de tecnología cívica y veeduría como \"App del Barrio\" y \"Reportes Del Barrio\". Me imagino ejecutando estas iniciativas en conjunto con organizaciones o líderes de CienPorCien enfocados en el desarrollo territorial, la sostenibilidad ambiental y la innovación ciudadana.",
    "contacto": {
      "email": "Yesoaudiovisual@gmail.com",
      "telefono": "+573013945812",
      "web": "https://sites.google.com/view/yesid-sanchez-perez/inicio",
      "instagram": "@yesoaudiovisual"
    },
    "foto": "images/lideres/yesid-alexander-sanchez-perez-02-1-primary.webp"
  },
  {
    "id": "karina-uribe",
    "numero": "04",
    "nombre": "Karina Uribe",
    "organizacion": "Emisora Tropicana",
    "territorio": "Comuna 11",
    "municipio": "Medellín",
    "fotos": [
      "karina-uribe-03-0.webp",
      "karina-uribe-03-2.webp",
      "karina-uribe-03-1.webp"
    ],
    "causas": [
      "Cultura",
      "Participación Ciudadana"
    ],
    "poblacion": [
      "Con Todos Los Grupos"
    ],
    "capacidades": [
      "Comunicación"
    ],
    "busca": [
      "Formación"
    ],
    "ofrece": [
      "Formación"
    ],
    "experiencia": 9,
    "disponible_alianzas": true,
    "que_hace": "Trabajo en una emisora, con esto le llegó a muchísimas personas y puedo enviar mensajes donde se ayuda a mejor el ánimo.",
    "problema": "Actitud de las personas, mejoramos el ánimo, ayudamos a buscar trabajo, por medio de la música animamos a la gente para que funcionen mejor en el día a día",
    "con_quien": "No tengo público específico, creo que le llegamos a toda la sociedad en especial estratos socioeconómicos del 1 al 3",
    "que_ofrece_largo": "Ayuda psicológica",
    "frase_vision": "Seguir ayudando por medio de la voz",
    "alianzas_activas": "No hay alianzas concretas pero trabajamos con varias empresas que preparan actividades en barrios y más",
    "proyecto_autogestion": "",
    "contacto": {
      "email": "uribekarina123@gmail.com",
      "telefono": "+573146403309",
      "web": null,
      "instagram": "Karinauribe28"
    },
    "foto": "images/lideres/karina-uribe-03-0.webp"
  },
  {
    "id": "ana-maria-jimenez",
    "numero": "05",
    "nombre": "Ana Maria Jimenez",
    "organizacion": "Taller sin Borde",
    "territorio": "Medellín y El Retiro",
    "municipio": "Retiro",
    "fotos": [
      "ana-maria-jimenez-04-0.webp",
      "ana-maria-jimenez-04-1.webp",
      "ana-maria-jimenez-04-2.webp"
    ],
    "causas": [
      "Educación",
      "Cultura",
      "Mujeres",
      "Emprendimiento",
      "Arte"
    ],
    "poblacion": [
      "Mujeres",
      "Publico En General"
    ],
    "capacidades": [
      "Formación",
      "Arte",
      "Cultura"
    ],
    "busca": [
      "Alianzas Estratégicas",
      "Visibilidad"
    ],
    "ofrece": [
      "Formación",
      "Consultoría",
      "Investigación",
      "Creacion De Objetos"
    ],
    "experiencia": 15,
    "disponible_alianzas": true,
    "que_hace": "Taller sin Borde es un estudio creativo dedicado a la investigación, creación y enseñanza. Desarrolla piezas de joyeria, escultura y proyectos que integran técnicas tradicionales, saberes ancestrales y procesos experimentales, con especial interés en la recuperación y reinterpretación de tecnologías prehispánicas de la metalurgia. Además de producir obra artística, ofrece talleres especializados y colabora con instituciones culturales, educativas y comunidades en proyectos de investigación y formación sensible.",
    "problema": "Taller sin Borde acompaña a personas que desean conectar con su propio ritmo, construir una práctica creativa sostenible y convertir su proyecto artístico en una forma de vida. En un mundo que privilegia la velocidad, la productividad y el reconocimiento externo, proponemos un espacio para detenerse, observar y crear desde el mundo interior. A través de la investigación, la enseñanza y la creación artística, fortalecemos procesos creativos que nacen de la sensibilidad, la atención y el trabajo con las manos. Revalorizamos el hacer manual, el conocimiento del cuerpo y la presencia como herramientas para desarrollar una práctica auténtica y significativa. Nuestro propósito es que cada persona pueda crear desde un lugar de conexión consigo misma, dando origen a joyas, objetos, esculturas, textos y espacios capaces de generar vínculos profundos con los demás. De esta manera, contribuimos a preservar saberes tradicionales y ancestrales, al tiempo que impulsamos nuevas formas de crear, habitar y relacionarnos con el mundo desde la creatividad consciente.",
    "con_quien": "Trabajamos con personas sensibles y creativas que buscan desarrollar un proyecto con sentido y encontrar una manera auténtica de compartirlo con el mundo. Acompañamos a quienes desean conectar con su cuerpo, cultivar una práctica creativa consciente y hacer una pausa en el ritmo acelerado del día a día para escucharse a través del proceso creativo. Nuestro trabajo está dirigido a artistas, joyeros, diseñadores y personas de cualquier disciplina que entienden la creatividad como un camino de exploración personal, transformación y construcción de una forma de vida coherente con sus valores.",
    "que_ofrece_largo": "Ofrecemos programas de formación, experiencias creativas y procesos de acompañamiento que integran el oficio, la investigación y el desarrollo personal. Contamos con la capacidad de diseñar experiencias para distintos públicos, desde personas que desean hacer de la joyería su profesión hasta quienes buscan un primer acercamiento a los metales como una herramienta de expresión y conexión consigo mismos. Desarrollamos clases y mentorías en joyería contemporánea, talleres vivenciales donde la creación de amuletos y objetos simbólicos acompaña procesos personales o colectivos, y experiencias diseñadas para fortalecer la creatividad, la atención y el trabajo manual. También creamos piezas y objetos con alto valor simbólico para personas, organizaciones y empresas que buscan conmemorar, comunicar o materializar un propósito a través de un objeto significativo. Además, ofrecemos acompañamiento en procesos creativos para artistas, emprendedores y equipos que desean desarrollar proyectos con mayor claridad, autenticidad y profundidad.",
    "frase_vision": "Es posible diseñar una vida donde cada uno decida qué es lo verdaderamente importante.",
    "alianzas_activas": "Merlin Producciones, Comfama, Sura.",
    "proyecto_autogestion": "",
    "contacto": {
      "email": "tallersinborde@gmail.com",
      "telefono": "+573052279052",
      "web": "www.tallersinborde.com",
      "instagram": "https://www.instagram.com/tallersinborde"
    },
    "foto": "images/lideres/ana-maria-jimenez-04-0.webp"
  },
  {
    "id": "maria-camila-correa-aguilar",
    "numero": "06",
    "nombre": "Maria Camila Correa Aguilar",
    "organizacion": "SENTIPENSANTES (PROYECTO PROPIO)",
    "territorio": "BELEN Y DOCE DE OCTUBRE",
    "municipio": "Medellín",
    "fotos": [
      "maria-camila-correa-aguilar-05-2-primary.webp",
      "maria-camila-correa-aguilar-05-3.webp",
      "maria-camila-correa-aguilar-05-0.webp"
    ],
    "causas": [
      "Salud Mental",
      "Educación",
      "Prevención Del Comportamiento Suicida"
    ],
    "poblacion": [
      "Niñez",
      "Juventud",
      "Personas Mayores",
      "Y En La Clasificación Por Profesión",
      "Con Docentes"
    ],
    "capacidades": [
      "Formación",
      "Gestión De Proyectos",
      "Investigación"
    ],
    "busca": [
      "Financiación",
      "Alianzas Estratégicas",
      "Visibilidad"
    ],
    "ofrece": [
      "Investigación",
      "Movilización Comunitaria",
      "Impacto En Pequeños Y Grandes Grupos De Interés",
      "Favoreciendo Espacios De Interés Organizacional",
      "Comunitario Y Clínico"
    ],
    "experiencia": 4,
    "disponible_alianzas": true,
    "que_hace": "A TRAVÉS DE CAPACITACIONES, TALLERES Y FORMACIONES PROMUEVO EL CUIDADO DE LA SALUD MENTAL Y LA PREVENCIÓN DEL COMPORTAMIENTO SUICIDA. INTEGRANDO HERRAMIENTAS DE ARTE TERAPIA, PSICOLOGÍA CLÍNICA Y ACTIVIDADES COTIDIANAS",
    "problema": "Acompaño a organizaciones y comunidades en la prevención de riesgos en salud mental y el fortalecimiento del bienestar integral de sus integrantes. A través de la prevención del espectro suicida y el desarrollo de habilidades para la vida, brindamos herramientas prácticas que favorecen el bienestar, la rentabilidad y el fortalecimiento del tejido social.",
    "con_quien": "POBLACIONES VULNERABLES, CICLOS DE VIDA INFANCIA, ADULTEZ Y ADULTO MAYOR, PROFESIONES ESPECIFICAS DE DOCENTES. BELÉN Y DOCE DE OCTUBRE, CON POSIBILIDAD DE EXPANSIÓN A CUALQUIER TERRITORIO",
    "que_ofrece_largo": "FORMACION EN PREVENCION DEL COMPORTAMIENTO SUICIDA Y SALUD MENTAL, INVESTIGACION PARA EL DESARROLLO DE ESTRATEGIAS PARA POBLACIONES ESPECIFICAS, CAPACITACIONES, CHARLAS, TALLERES Y EXPERIENCIAS VIVENCIALES",
    "frase_vision": "Visualizo un futuro donde la educación, las comunidades y las organizaciones sean espacios humanizados que formen personas con habilidades para la vida, fortalezcan el tejido social y promuevan culturas de bienestar que impulsen el desarrollo, la sostenibilidad y la rentabilidad.",
    "alianzas_activas": "NA",
    "proyecto_autogestion": "PROYECTO DE FORMACION PARA DOCENTES EN HABILIDADES SOCIOEMOCIONALES Y ATENCION HUMANIZADA. Y OTRO SERIA MOVILIZACIONES COMUNITARIAS EN PARQUES DE MUNICIPIOS O LUGARES CONCURRIDOS CON ACTIVIDADES PARA LA REFLEXION Y EL CUIDADO DE LA SALUD MENTAL",
    "contacto": {
      "email": "PSICOLOGIASENTIPENSANTES@GMAIL.COM",
      "telefono": "+573226253874",
      "web": "EN CONSTRUCCION",
      "instagram": "https://www.instagram.com/ps.sentipensantes?igsh=MTI4MWptYW1wdWN5aA=="
    },
    "foto": "images/lideres/maria-camila-correa-aguilar-05-2-primary.webp"
  },
  {
    "id": "natalia-ramirez-diaz",
    "numero": "07",
    "nombre": "Natalia Ramirez Diaz",
    "organizacion": "PIANOACADEMY corporación",
    "territorio": "Poblado",
    "municipio": "Medellín",
    "fotos": [
      "natalia-ramirez-diaz-06-0-primary.webp",
      "natalia-ramirez-diaz-06-1.webp",
      "natalia-ramirez-diaz-06-2.webp"
    ],
    "causas": [
      "Educación",
      "Cultura",
      "Emprendimiento"
    ],
    "poblacion": [
      "Niñez",
      "Juventud",
      "Personas Con Discapacidad"
    ],
    "capacidades": [
      "Formación",
      "Gestión De Proyectos",
      "Arte",
      "Cultura"
    ],
    "busca": [
      "Financiación",
      "Alianzas Estratégicas",
      "Visibilidad"
    ],
    "ofrece": [
      "Formación",
      "Movilización Comunitaria",
      "Articulación Territorial"
    ],
    "experiencia": 12,
    "disponible_alianzas": true,
    "que_hace": "La corporación PIANOACADEMY tiene como objetivo principal contribuir en los procesos de formación musical de la infancia, la primera infancia y la adolescencia a través de experiencias que potencien las capacidades de los mismos. Ofrecemos educación de alta calidad y acercamos a nuestros estudiantes a oportunidades reales en la música a través de participaciones en concursos y festivales nacionales e internacionales. PIANOACADEMY ofrece formación pianística de alto nivel bajo un modelo pedagógico propio (Metodología PianoAcademy), que integra técnica clásica rigurosa, neuroplasticidad y desarrollo humano integral, para niños, jóvenes y adultos en Medellín.",
    "problema": "Atiende el vacío entre la educación musical informal sin estándares claros y la formación técnica rígida desconectada del desarrollo humano, ofreciendo un proceso estructurado, medible y progresivo que forma músicos técnicamente sólidos y emocionalmente equilibrados, con rutas reales hacia escenarios competitivos, becas y proyección internacional.",
    "con_quien": "Niños y jóvenes con proyección profesional nacional e internacional, y adultos/jubilados que buscan estimulación cognitiva y bienestar emocional a través del piano. Opera en Medellín, Colombia, con proyección de convertirse en referente latinoamericano (10 años) y líder nacional con impacto cultural estructural (15–20 años).",
    "que_ofrece_largo": "Un modelo pedagógico validado y replicable (técnica clásica + neuroplasticidad + formación integral). Experiencia de más de 12 años en formación pianística y gestión institucional. Capacidad de organización de festivales, concursos, masterclasses y circuitos formativos. Redes y alianzas con conservatorios, universidades y plataformas culturales internacionales. Infraestructura, equipo docente calificado y esquema operativo estructurado (dirección, coordinación pedagógica, gestión administrativa).",
    "frase_vision": "PIANOACADEMY se proyecta como un puente entre el talento local y los escenarios del mundo, formando ciudadanos culturales con identidad, disciplina y visión global.",
    "alianzas_activas": "Vivat Música, Iberacademy, ODA (orquesta departamental de Antioquia)",
    "proyecto_autogestion": "Cómo funcionaría: • Sesiones de “improvisación consciente”: espacios donde la persona se sienta al piano sin ningún conocimiento previo y explora sonido, silencio y emoción guiada por un facilitador (parte pianista, parte terapeuta somático/mindfulness). No se busca “sonar bien”, se busca escuchar lo que aparece. • Círculos de piano y palabra: después de tocar, un espacio de conversación grupal tipo círculo de sanación, donde la música es la puerta de entrada a lo que la persona no puede nombrar directamente. • Musicoterapeutas certificados, porque esto necesita rigor clínico-terapéutico real, no solo intuición pedagógica. • Facilitadores de mindfulness, constelaciones familiares o trabajo somático, para diseñar la experiencia grupal con seguridad emocional. • Organizaciones de memoria y reconciliación en Medellín (que ya trabajan con víctimas del conflicto), porque ellos tienen la confianza comunitaria y la metodología de contención que tú, desde el piano, no tienes todavía. • Un espacio o finca en el Oriente antioqueño con vocación de retiro, como aliado logístico natural.",
    "contacto": {
      "email": "Pianoacademycorporacion@gmail.com",
      "telefono": "+573024640736",
      "web": "https://pianoacademycorporacion.com/",
      "instagram": "https://www.instagram.com/corporacionpianoacademy?igsh=MWdrZWc3YTRrcTNxMQ=="
    },
    "foto": "images/lideres/natalia-ramirez-diaz-06-0-primary.webp"
  },
  {
    "id": "catalina-benitez-lora",
    "numero": "08",
    "nombre": "Catalina Benitez Lora",
    "organizacion": "Medellin te Quiere Saludable de la Secretaria de Salud",
    "territorio": "Comuna 4",
    "municipio": "Medellín",
    "fotos": [
      "catalina-benitez-lora-07-0.webp",
      "catalina-benitez-lora-07-1.webp",
      "catalina-benitez-lora-07-2.webp"
    ],
    "causas": [
      "Salud Mental",
      "Paz",
      "Derechos Humanos"
    ],
    "poblacion": [
      "Juventud",
      "Víctimas",
      "Campesinado"
    ],
    "capacidades": [
      "Formación",
      "Comunicación",
      "Organización Comunitaria"
    ],
    "busca": [
      "Formación",
      "Alianzas Estratégicas",
      "Visibilidad"
    ],
    "ofrece": [
      "Investigación",
      "Movilización Comunitaria",
      "Articulación Territorial"
    ],
    "experiencia": 4,
    "disponible_alianzas": true,
    "que_hace": "Atención Primaria en Salud Mental",
    "problema": "Brindar estrategias de afrontamiento a partir de la identificación de riesgos y de protección",
    "con_quien": "Desde la atención Primaria en Salud, trabajo con personas, a nivel individual, familiar, educativo y comunitario",
    "que_ofrece_largo": "Orientación al logro, trabajo en equipo. Con conocimientos en Atención Primaria en Salud, técnicas en intervención psicosocial a nivel individual, familiar y comunitario. Actualmente me encuentro adelantando estudios en la Maestria de Psicología y Salud Mental.",
    "frase_vision": "Explorar la condición humana requiere reconocer el contexto en el que habita cada persona, así como sus experiencias, emociones y formas de comprender el mundo. En este sentido, la literatura, la pintura y la música permiten acercarnos a dimensiones como el dolor, el amor, el miedo, la identidad y el sentido de la existencia, aspectos que no siempre pueden expresarse mediante fórmulas científicas.",
    "alianzas_activas": "",
    "proyecto_autogestion": "",
    "contacto": {
      "email": "psic.catalina@gmail.com",
      "telefono": "+573006956685",
      "web": null,
      "instagram": "https://www.instagram.com/cata.benitez?igsh=MWlqb254bGtnN2szYw=="
    },
    "foto": "images/lideres/catalina-benitez-lora-07-0.webp"
  },
  {
    "id": "isabel-cristina-sanchez-uribe",
    "numero": "09",
    "nombre": "Isabel Cristina Sánchez Uribe",
    "organizacion": "Soy Mentora y emprendedora",
    "territorio": "Medellín",
    "municipio": "Medellín",
    "fotos": [
      "isabel-cristina-sanchez-uribe-08-0-primary.webp",
      "isabel-cristina-sanchez-uribe-08-1.webp",
      "isabel-cristina-sanchez-uribe-08-2.webp"
    ],
    "causas": [
      "Salud Mental",
      "Educación",
      "Cultura",
      "Mujeres",
      "Ambiente",
      "Emprendimiento"
    ],
    "poblacion": [
      "Mujeres",
      "Personas Mayores",
      "Zonas Rurales"
    ],
    "capacidades": [
      "Gestión De Proyectos",
      "Incidencia",
      "Estrategia",
      "Finanzas",
      "Mercado De Capitales"
    ],
    "busca": [
      "Voluntariado",
      "Alianzas Estratégicas",
      "Visibilidad"
    ],
    "ofrece": [
      "Formación",
      "Consultoría",
      "Articulación Territorial"
    ],
    "experiencia": 30,
    "disponible_alianzas": true,
    "que_hace": "Después de transformar organizaciones, hoy mi propósito es transformar vidas, conectando experiencia, liderazgo y finanzas con impacto social.",
    "problema": "Conectar, impulsar procesos de transformación personales y empresariales",
    "con_quien": "Medellín y Urabá… próximamente Chocó",
    "que_ofrece_largo": "Experiencia de 26 años en el mundo corporativo, liderando equipos de alto rendimiento en temas relacionados con mercado de capitales y transformación digital. Mentora de mujeres líderes en Medellín y Urabá. Pasión por la cultura y el patrimonio histórico. Interés por aportar a Medellín, Antioquia y Colombia para construir mejores ciudades y el país que soñamos. Speaker para compartir mi experiencia como líder y de lo que he vivido debido a excesos que han afectado mi salud incluyendo temas de salud mental",
    "frase_vision": "Vivirás muchas vidas.",
    "alianzas_activas": "Programa Mujeres Líderes Proantioquia Comfama, Fundación La JuanFe, Vibra en Alta, Mujeres MIT, Club Femenino Formas Íntimas, Casa Museo Tomás Carrasquilla en Santo Domingo Ant",
    "proyecto_autogestion": "Si",
    "contacto": {
      "email": "Issanche@hotmail.com",
      "telefono": "+573104420491",
      "web": null,
      "instagram": "http://www.linkedin.com/in/isabel-sanchez-uribe; https://www.instagram.com/issanche?igsh=bmo3bDR1MXc4dG4w&utm_source=qr"
    },
    "foto": "images/lideres/isabel-cristina-sanchez-uribe-08-0-primary.webp"
  },
  {
    "id": "pamela-moreno",
    "numero": "10",
    "nombre": "Pamela Moreno",
    "organizacion": "Fundación Montesser",
    "territorio": "Rionegro",
    "municipio": "Rionegro",
    "fotos": [
      "pamela-moreno-09-0-primary.webp",
      "pamela-moreno-09-1.webp",
      "pamela-moreno-09-2.webp"
    ],
    "causas": [
      "Educación",
      "Emprendimiento"
    ],
    "poblacion": [
      "Niñez",
      "Juventud"
    ],
    "capacidades": [
      "Formación",
      "Comunicación"
    ],
    "busca": [
      "Financiación",
      "Alianzas Estratégicas"
    ],
    "ofrece": [
      "Formación",
      "Consultoría"
    ],
    "experiencia": 5,
    "disponible_alianzas": true,
    "que_hace": "Conunidad educativa con filosofía montessori al alcance de niños, niñas y adolescentes de diferentes realidades socioeconómicas",
    "problema": "La guerra/miedo/lejanía entre clases sociales y la pereza por aprender y la ciencia.",
    "con_quien": "En Rioe Gro con familias de niveles estratos 6, 5, 4, 3 que apoyan para becar y que aprendan juntos con niños de 1 y 2",
    "que_ofrece_largo": "Nuestro espacio verde y amplio e. Rionegro. Capacitación en comunicación asertiva, neuroeducación y disciplina positiva y Montessori",
    "frase_vision": "Y",
    "alianzas_activas": "AFS",
    "proyecto_autogestion": "Si",
    "contacto": {
      "email": "soymontesser@gmail.com",
      "telefono": "+573174012986",
      "web": "www.soyMontesser.com",
      "instagram": "@soymontesser"
    },
    "foto": "images/lideres/pamela-moreno-09-0-primary.webp"
  },
  {
    "id": "maria-virginia-osorio-cabrera",
    "numero": "11",
    "nombre": "María Virginia Osorio Cabrera",
    "organizacion": "2uno3",
    "territorio": "Medellin",
    "municipio": "Medellín",
    "fotos": [
      "maria-virginia-osorio-cabrera-10-3-primary.webp",
      "maria-virginia-osorio-cabrera-10-0.webp",
      "maria-virginia-osorio-cabrera-10-1.webp"
    ],
    "causas": [
      "Paz"
    ],
    "poblacion": [
      "Público Muy Amplio",
      "Casi Que Haría Click En Todos Los Items"
    ],
    "capacidades": [
      "Formación",
      "Gestión De Proyectos",
      "Investigación"
    ],
    "busca": [
      "Financiación",
      "Alianzas Estratégicas",
      "Generar Espacios De Construcción De Paz"
    ],
    "ofrece": [
      "Formación",
      "Consultoría",
      "Facilitación"
    ],
    "experiencia": 5,
    "disponible_alianzas": true,
    "que_hace": "Promoción de espacios para re/generar y cuidar los vínculos sociales orientados a la construcción de condiciones de paz. Impulsamos modelos de relacionamiento que favorecen el crecimiento de las personas dentro de las comunidades y organizaciones a las que pertenecen. Promovemos proyectos de innovación social, formación y construcción multidimensional de la paz. Activamos escenarios de encuentro y conversación. Nuestro enfoque integra metodologías apreciativas, comunicación generativa y aprendizaje colaborativo para formar capacidades, inspirar nuevas formas de interacción y construir entornos donde las relaciones sean fuente de confianza, bienestar y florecimiento humano",
    "problema": "La fragilidad del tejido social, la polarización, la violencia, la falta de confianza y diálogo. Lo hacemos generando condiciones para que personas muy diferentes puedan volver a colaborar, desde la Investigación-Acción-Formación, orientada al aprendizaje, animar procesos de Florecimiento Humano Integral en diferentes ámbitos. Procesos en dónde las personas escuchen, comprendan, creen confianza, construyan propósitos comunes, reflexionen. .",
    "con_quien": "Acompañamos personas y organizaciones de diferentes sectores en la re/generación y cuidado de los vínculos que sostienen la dinámica institucional y dan vida al capital relacional. Promovemos procesos que posibilitan la cooperación, el reconocimiento recíproco y la transformación cultural. Lo hacemos en Medellín, pero también tenemos experiencia en otros contextos Colombianos e internacionales.",
    "que_ofrece_largo": "Consultorías e itinerarios formativos a medida para re/generar vínculos significativos, pensamiento compartido y aprendizaje cooperativo. Formación al diálogo, al crecimiento de los bienes relacionales y el capital conversacional. Activamos escenarios de encuentro y conversación. Desarrollamos de itinerarios formativos de formación orientados a la innovación y construcción de tejido social.",
    "frase_vision": "Impulsar el florecimiento humano integral, cultivando ecosistemas relacionales para la paz.",
    "alianzas_activas": "Conjugarte, Universidad Pontificia Bolivariana, Pastoral Social, Red de Economía Civil, Instituto Universitario Sophia ALC, Mesa Redonda",
    "proyecto_autogestion": "Indagaría en cuales son y promovería conversaciones necesarias para la convivencia y la construcción de paz en la ciudad. Generaría espacios para mejorar la calidad de la conversaciones sobre la ciudad para que el impacto de las acciones abarquen e impacten mucho más. Haría iniciativas que hagan visible la cantidad de procesos maravillosos que tiene esta ciudad. No se como expresarlo, pero trataría de animar, generar una especie de \"organismo vivo colectivo\" que pueda catalizar y potenciar el impacto que cada uno de los integrantes de 100x100 ya hace, un poco lo que hará este directorio, pero también dispnerse a escuchar junto con otros y otras todas las ideas, necesidades y poder facilitar esos encuentros. Más allá de las ideas concretas, sería animar y alimentar este ecosistema de liderazgo. También me articularía con otras iniciativas que apunten a mejorar la calidad espiritual de la ciudad, desde una perspectiva de diálogo confesional y no confesional. Con quienes me gustaría, con quienes resuenen a este tipo de ideas o propuestas.",
    "contacto": {
      "email": "info@2uno3.org",
      "telefono": "+573124498316",
      "web": "www.2uno3.org",
      "instagram": "2uno3corp"
    },
    "foto": "images/lideres/maria-virginia-osorio-cabrera-10-3-primary.webp"
  },
  {
    "id": "jorge-ivan-giraldo-giraldo",
    "numero": "12",
    "nombre": "Jorge Iván Giraldo Giraldo",
    "organizacion": "Niño Mágico S.A.S. BIC - Corazón de Niño",
    "territorio": "Comuna 10 - Envigado",
    "municipio": "Envigado",
    "fotos": [
      "jorge-ivan-giraldo-giraldo-11-0-primary.webp",
      "jorge-ivan-giraldo-giraldo-11-1.webp",
      "jorge-ivan-giraldo-giraldo-11-2.webp"
    ],
    "causas": [
      "Salud Mental",
      "Educación",
      "Cultura",
      "Emprendimiento"
    ],
    "poblacion": [
      "Personas Mayores",
      "Empresas",
      "Emprendimientos"
    ],
    "capacidades": [
      "Formación",
      "Gestión De Proyectos",
      "Incidencia"
    ],
    "busca": [
      "Financiación",
      "Alianzas Estratégicas",
      "Visibilidad"
    ],
    "ofrece": [
      "Formación",
      "Consultoría",
      "Facilitación"
    ],
    "experiencia": 20,
    "disponible_alianzas": true,
    "que_hace": "Lidero una Empresa BIC con certificación internacional como Empresa B por el impacto de las acciones que realizamos en torno a la Promoción de la Salud Mental desde la Psico Educación y la Educación Socio Emocional",
    "problema": "Brechas en el liderazgo por falta de herramientas prácticas para cuidar su salud mental, desarrollar sus competencias socio emocionales y mejorar su productividad que tienen un efecto negativo en los equipos con síntomas como burnout, rotación, ausentismo, ...",
    "con_quien": "1. Empresas grandes, medianas y pequeñas 2. Líderes de Impacto en Colombia y Latinoamérica 3. Hospitales, Clínicas y Centros de Adulto Mayor 4. Universidades",
    "que_ofrece_largo": "Conocimiento especializado para formar líderes de impacto, diseñar e implementar culturas de cuidado, promover la salud mental desde la psico educación y la educación socio emocional",
    "frase_vision": "Regeneramos culturas a través de la Educación Socio Emocional de líderes, equipos, comunidades y territorios para construir una paz sostenible",
    "alianzas_activas": "1. ITM (Instituto Tecnológico Metropolitano) 2. Sistema B Colombia 3. Red de Impacto LATAM 4. ACRIP (Asociación Colombiana de Gestión Humana) 5. AFSEC (Alianza por el Fomento de la Educación Socio Emocional en Colombia)",
    "proyecto_autogestion": "Sí, un proyecto relación con la Promoción de la Salud Mental con organizaciones que tengan incidencia en territorio como Comfama, Comfenalco, Cámaras de Comercio, Secretarías de Desarrollo Económico, Fundaciones Corporativas, Universidades y cualquier agremiación, grupo o persona que pueda sumar a este propósito",
    "contacto": {
      "email": "emociones@corazondenino.com.co",
      "telefono": "+573103914743",
      "web": "https://corazondenino.com.co/",
      "instagram": "https://www.linkedin.com/in/jorge-ivan-giraldo-giraldo/"
    },
    "foto": "images/lideres/jorge-ivan-giraldo-giraldo-11-0-primary.webp"
  },
  {
    "id": "brodny-yessid-herrera-lopez",
    "numero": "13",
    "nombre": "Brodny Yessid Herrera Lopez",
    "organizacion": "SENA",
    "territorio": "El Poblado",
    "municipio": "Medellín",
    "fotos": [
      "brodny-yessid-herrera-lopez-12-0-primary.webp",
      "brodny-yessid-herrera-lopez-12-1.webp",
      "brodny-yessid-herrera-lopez-12-2.webp"
    ],
    "causas": [
      "Educación",
      "Juventud",
      "Emprendimiento",
      "Pensamiento Sistémico"
    ],
    "poblacion": [
      "Juventud",
      "Personas Mayores",
      "Personas Con Discapacidad",
      "Comunidad Lgbtiq+",
      "Campesinado",
      "Empresas"
    ],
    "capacidades": [
      "Formación",
      "Gestión De Proyectos",
      "Comunicación",
      "Investigación",
      "Diseño De Servicios"
    ],
    "busca": [
      "Financiación",
      "Mentoría",
      "Alianzas Estratégicas",
      "Visibilidad"
    ],
    "ofrece": [
      "Formación",
      "Consultoría",
      "Facilitación",
      "Articulación Territorial"
    ],
    "experiencia": 7,
    "disponible_alianzas": true,
    "que_hace": "Ayudo a personas, empresas e instituciones a desarrollar su capacidad de pensar para diseñar mejores decisiones, mejores organizaciones y mejores futuros. Lo hago mediante consultoría, mentorías, formación y conferencias, integrando pensamiento sistémico, diseño de servicios, liderazgo y las siete competencias fundamentales que desarrollo en mi libro Cartas a Mauricio. Además, desde el SENA acompaño procesos de formación y articulación con empresas y territorios para fortalecer capacidades que generen impacto sostenible.",
    "problema": "Vivimos en un mundo lleno de respuestas, pero con pocas preguntas. Muchas organizaciones actúan sin comprender las causas de sus desafíos, toman decisiones aisladas y pierden de vista a las personas que hacen parte del sistema. Ayudo a ampliar los marcos de referencia para comprender la realidad con mayor profundidad, fortalecer el pensamiento estratégico y transformar organizaciones desde el servicio, la consciencia y el aprendizaje continuo.",
    "con_quien": "Trabajo con empresas grandes, medianas y pequeñas, instituciones educativas, entidades públicas, organizaciones sociales, emprendedores y líderes que buscan construir organizaciones más humanas, conscientes y sostenibles. También acompaño procesos territoriales desde la formación complementaria del SENA y proyectos de desarrollo empresarial y comunitario.",
    "que_ofrece_largo": "Ofrezco metodologías propias, procesos de consultoría, mentorías, talleres y conferencias que integran pensamiento sistémico, diseño de servicios, liderazgo, innovación y desarrollo organizacional. Mi trabajo nace del diálogo entre la investigación, la experiencia en organizaciones y la formación de personas y equipos para fortalecer capacidades, diseñar mejores servicios y construir futuros posibles desde una visión integral. Como parte de este recorrido, he reunido estos aprendizajes en Cartas a Mauricio, un libro que sintetiza las experiencias, reflexiones y principios que hoy orientan mi modelo de acompañamiento y transformación.",
    "frase_vision": "Mi visión es que un día las personas puedan ver más de lo que hoy pueden ver; que amplíen sus marcos de referencia para cocrear futuros que hoy creen imposibles, comprendiendo que cada decisión, por pequeña que parezca, tiene el poder de transformar la vida de otros y los sistemas de los que hacemos parte",
    "alianzas_activas": "",
    "proyecto_autogestion": "Más que llegar con un proyecto completamente definido, me interesa encontrar personas con quienes construirlo. Me motivan las iniciativas que conectan educación, emprendimiento, innovación y desarrollo territorial desde el pensamiento sistémico. Me gustaría aportar metodologías para ampliar marcos de referencia, facilitar conversaciones y cocrear soluciones que generen impacto real en Medellín. Creo que los mejores proyectos no nacen de una sola persona, sino de equipos diversos que aprenden a mirar los desafíos desde nuevas perspectivas.",
    "contacto": {
      "email": "byherreral@eafit.edu.co",
      "telefono": "+573218579687",
      "web": "https://yessidhl.my.canva.site/ https://www.linkedin.con/in/yessidhl",
      "instagram": "@yessidhl"
    },
    "foto": "images/lideres/brodny-yessid-herrera-lopez-12-0-primary.webp"
  },
  {
    "id": "luisa-fernanda-bolivar-henao",
    "numero": "14",
    "nombre": "Luisa Fernanda Bolívar Henao",
    "organizacion": "Luisa Crea Impacto- Museo pedro Nel Gómez",
    "territorio": "Comuna 4- Medellín",
    "municipio": "Medellín",
    "fotos": [
      "luisa-fernanda-bolivar-henao-13-0.webp",
      "luisa-fernanda-bolivar-henao-13-1.webp",
      "luisa-fernanda-bolivar-henao-13-2.webp"
    ],
    "causas": [
      "Salud Mental",
      "Mujeres",
      "Emprendimiento"
    ],
    "poblacion": [
      "Juventud",
      "Mujeres",
      "Personas Mayores"
    ],
    "capacidades": [
      "Gestión De Proyectos",
      "Comunicación",
      "Arte",
      "Cultura",
      "Tecnología"
    ],
    "busca": [
      "Formación",
      "Alianzas Estratégicas",
      "Visibilidad"
    ],
    "ofrece": [
      "Formación",
      "Consultoría",
      "Articulación Territorial"
    ],
    "experiencia": 10,
    "disponible_alianzas": true,
    "que_hace": "Luisa Crea Impacto es una iniciativa de comunicación, gestión cultural y fortalecimiento de capacidades que acompaña a mujeres en el desarrollo de sus habilidades, su confianza y su autonomía económica. Integro comunicación estratégica, formación en habilidades blandas, gestión cultural y articulación territorial para convertir conocimientos y talentos en oportunidades de crecimiento personal, profesional y económico.",
    "problema": "Muchas mujeres tienen conocimientos, talentos e iniciativas, pero enfrentan barreras para reconocer su potencial, comunicar lo que hacen, fortalecer sus capacidades y convertirlas en oportunidades de generación de ingresos.",
    "con_quien": "Principalmente con mujeres de Medellín y sus territorios, especialmente mujeres que desarrollan iniciativas, emprendimientos o proyectos comunitarios y culturales, y que buscan fortalecer sus capacidades personales y profesionales para avanzar hacia una mayor autonomía económica.",
    "que_ofrece_largo": "Ofrezco formación, consultoría y articulación en comunicación estratégica, gestión cultural, fortalecimiento de habilidades blandas y acompañamiento a iniciativas lideradas por mujeres. También aporto experiencia en creación de contenidos, gestión de proyectos, trabajo con comunidades, articulación institucional y desarrollo de estrategias para visibilizar iniciativas con propósito.",
    "frase_vision": "Que más mujeres reconozcan su capacidad de transformar sus vidas y sus territorios, convirtiendo sus talentos, conocimientos y voces en oportunidades de autonomía y desarrollo.",
    "alianzas_activas": "Museo Casa Museo Pedro Nel Gómez",
    "proyecto_autogestion": "Sí. Impulsaría “Mujeres que Crean Impacto”, un proceso de formación y acompañamiento para mujeres de Medellín que quieran fortalecer sus habilidades personales, comunicar mejor sus iniciativas y avanzar hacia una mayor autonomía económica. La propuesta combinaría habilidades blandas, comunicación, liderazgo, creatividad, gestión cultural y herramientas para visibilizar y fortalecer iniciativas económicas o comunitarias. La idea es que cada participante pueda reconocer lo que sabe hacer, convertirlo en una propuesta de valor y conectarlo con oportunidades y redes de su territorio. El proyecto tendría un componente territorial y de intercambio entre mujeres, para que el conocimiento no se quede únicamente en la formación, sino que se traduzca en iniciativas, colaboraciones y oportunidades reales.Me gustaría construirlo junto a integrantes de CienPorCien con experiencia en educación, emprendimiento, comunicación, innovación social, cultura y trabajo comunitario, especialmente personas que tengan conexión directa con diferentes territorios de Medellín. Considero que sería un equipo ideal porque permitiría integrar capacidades diversas: mientras unas personas aportan conocimiento técnico y metodologías, otras pueden contribuir desde la comunicación, la gestión cultural, el acompañamiento comunitario, la articulación institucional y la conexión con oportunidades. Mi aporte estaría principalmente en comunicación estratégica, formación, gestión cultural, articulación territorial y fortalecimiento de capacidades de las mujeres, buscando que las diferentes experiencias del equipo se conviertan en una propuesta colectiva con impacto medible en Medellín",
    "contacto": {
      "email": "fernandabolivar05@gmail.com",
      "telefono": "+573172756117",
      "web": null,
      "instagram": "luisacreaimpacto"
    },
    "foto": "images/lideres/luisa-fernanda-bolivar-henao-13-0.webp"
  },
  {
    "id": "lizeth-andrea-paniagua-saldarriaga",
    "numero": "15",
    "nombre": "Lizeth andrea Paniagua Saldarriaga",
    "organizacion": "Flor de loto",
    "territorio": "Medellín",
    "municipio": "Medellín",
    "fotos": [
      "lizeth-andrea-paniagua-saldarriaga-14-2-primary.webp",
      "lizeth-andrea-paniagua-saldarriaga-14-0.webp",
      "lizeth-andrea-paniagua-saldarriaga-14-1.webp"
    ],
    "causas": [
      "Salud",
      "Comunidad"
    ],
    "poblacion": [
      "Todas Las Personas Afectadas Por Enfermedades Transmisibles"
    ],
    "capacidades": [
      "Incidencia",
      "Investigación",
      "Organización Comunitaria"
    ],
    "busca": [
      "Financiación",
      "Alianzas Estratégicas"
    ],
    "ofrece": [
      "Consultoría",
      "Investigación",
      "Movilización Comunitaria",
      "Articulación Territorial"
    ],
    "experiencia": 20,
    "disponible_alianzas": true,
    "que_hace": "Soy médica magister en epidemiologia, máster en VIH, movilizo a las comunidades a apropiarse en el cuidado de la salud y al sector salud para lograr el abordaje comunitario del cuidado en salud",
    "problema": "Mejorar la calidad de vida de las personas al apropiarse de su cuidado en salud. Abogacía y movilización social en temas de salud pública, donde las comunidades tengan voz y voto",
    "con_quien": "Soy asesora comunitaria de la universidad de whashington para lograr el acceso a la profilaxis para prevenir la transmisión de VIH, articulación academia, EPs, entidad territorial de Antioquia",
    "que_ofrece_largo": "Toda la consultoría del abordaje comunitario en salud, monitoreo liderado por la comunidad, incidencia política para el cuidado desde el enfoque comunitario",
    "frase_vision": "Buena calidad de vida apropiados de nuestro propio cuidado",
    "alianzas_activas": "Universidad de Whashington, liga antituberculosa colombiana, gobernación de Antioquia",
    "proyecto_autogestion": "Cuidado de la salud desde un enfoque holistico, con las otras áreas que trabajan el bienestar",
    "contacto": {
      "email": "Lpaniagua8@yahoo.es",
      "telefono": "+573206394087",
      "web": null,
      "instagram": "Andreasaldarriaga8"
    },
    "foto": "images/lideres/lizeth-andrea-paniagua-saldarriaga-14-2-primary.webp"
  },
  {
    "id": "andres-mauricio-marin-correa",
    "numero": "16",
    "nombre": "Andrés Mauricio Marín Correa",
    "organizacion": "Caballito de mar",
    "territorio": "Comuna 5",
    "municipio": "Medellín",
    "fotos": [
      "andres-mauricio-marin-correa-15-0-primary.webp",
      "andres-mauricio-marin-correa-15-1.webp",
      "andres-mauricio-marin-correa-15-2.webp"
    ],
    "causas": [
      "Mujeres",
      "Paz",
      "Masculinidades Conscientes"
    ],
    "poblacion": [
      "Juventud",
      "Mujeres",
      "Hombres Adultos",
      "Adultos Jóvenes"
    ],
    "capacidades": [
      "Formación",
      "Comunicación",
      "Arte",
      "Cultura"
    ],
    "busca": [
      "Financiación",
      "Mentoría",
      "Alianzas Estratégicas"
    ],
    "ofrece": [
      "Formación",
      "Investigación",
      "Facilitación"
    ],
    "experiencia": 8,
    "disponible_alianzas": true,
    "que_hace": "Promovemos la transformación de las violencias machistas través de la educación, la cultura y la reflexión crítica. Y promovemos las masculinidades conscientes como un camino hacia la construcción de igualdad, justicia y paz.",
    "problema": "La. disminución de las violencias machistas en todas sus capas como camino hacia la reducción de brechas de desigualdad de género.",
    "con_quien": "Juventudes, empresas, comunidades, campesinos/as",
    "que_ofrece_largo": "Recursos pedagógicos y artísticos para la intervención social en temas de género y masculinidades conscientes.",
    "frase_vision": "Sueño un cielo sin los nubarrones de las violencias machistas, donde entendamos que todos y todas somos uno con los demás",
    "alianzas_activas": "Comfama, Unibán Fundación, Mesa de masculindiades de Medellín",
    "proyecto_autogestion": "Me gustaría impulsar un proyecto que escribimos algunos líderes del programa Liderario y que se llama Crisálida. Un proyevto sobre el Turismo con fines de eplotación sexual que busca ofrecer información de valor para prevenir y denunciar la explotación sexual infantil en entornos de turismo. No tengo claro con quien podría trabajarlo, porque aún no conozco todos los perfiles de Cien x Cien, pero seguro que hay aquí valiosas experiencias para materializar el proyecto. ¡Gracias!",
    "contacto": {
      "email": "caballitodelamar@gmail.com",
      "telefono": "+573194917117",
      "web": "caballitodemar.com.co",
      "instagram": "@caballitodemar.co"
    },
    "foto": "images/lideres/andres-mauricio-marin-correa-15-0-primary.webp"
  },
  {
    "id": "catalina-isabel-ortiz-rodriguez",
    "numero": "17",
    "nombre": "Catalina Isabel Ortiz Rodríguez",
    "organizacion": "Conecta, desde donde lidero el podcast Conecta y la comunidad Conecta Mujeres. Además, participo en procesos comunitarios en el barrio Patio Bonito (El Poblado)",
    "territorio": "Medellín",
    "municipio": "Medellín",
    "fotos": [
      "catalina-isabel-ortiz-rodriguez-16-1.webp",
      "catalina-isabel-ortiz-rodriguez-16-0.webp"
    ],
    "causas": [
      "Salud Mental",
      "Educación",
      "Participación Ciudadana"
    ],
    "poblacion": [
      "Trabajo Con Diferentes Poblaciones. De Manera Transversal"
    ],
    "capacidades": [
      "Formación",
      "Comunicación",
      "Liderazgo"
    ],
    "busca": [
      "Voluntariado",
      "Alianzas Estratégicas",
      "Visibilidad"
    ],
    "ofrece": [
      "Formación",
      "Consultoría",
      "Facilitación"
    ],
    "experiencia": 20,
    "disponible_alianzas": true,
    "que_hace": "Comunidad: participación en procesos de convivencia, organización vecinal y cuidado del territorio en Medellín, especialmente en Patio Bonito, El Poblado. Docente y comunicadora: formación y creación de contenidos sobre desarrollo humano, educación y bienestar. Conecta: podcast y plataforma educativa sobre salud mental y vínculos humanos, y Conecta Mujeres, red de más de 300 mujeres.",
    "problema": "Ayudo a transformar problemáticas y necesidades en acciones concretas: organizo información, conecto personas, facilito conversaciones y apoyo la construcción de acuerdos. En el trabajo vecinal de Patio Bonito, por ejemplo, he ayudado a organizar a los vecinos frente a situaciones que afectan la convivencia y el territorio, logrando llevar una preocupación colectiva a la construcción de acuerdos. También formo en liderazgo y comunicación verbal y no verbal, ayudando a las personas a expresarse, escribir y comunicar mejor. A través de Conecta Mujeres he construido una red de más de 320 mujeres para compartir oportunidades y fortalecer redes de apoyo.",
    "con_quien": "Comunidades y vecinos: Patio Bonito y otros sectores de Medellín, en procesos de convivencia, participación y cuidado del territorio. Mujeres: Medellín y Área Metropolitana, a través de Conecta Mujeres, red de más de 320 mujeres. Personas en formación: estudiantes, docentes y personas interesadas en fortalecer sus habilidades de comunicación, liderazgo y desarrollo humano. Instituciones: universidades y organizaciones que desarrollan procesos de formación, comunicación y transformación social.",
    "que_ofrece_largo": "Comunicación y escritura. Producción de contenido audiovisual. Facilitación de conversaciones poderosas y difíciles. Formación en liderazgo y comunicación verbal y no verbal. Articulación entre personas, comunidades e instituciones. Construcción de redes. Diseño de espacios de aprendizaje. Capacidad para traducir información compleja en mensajes claros.",
    "frase_vision": "Quiero contribuir a construir una Medellín donde las personas puedan imaginar nuevos futuros, escucharse, organizarse y convertir sus conversaciones en acciones que fortalezcan el bienestar, la comunidad y la ciudad.",
    "alianzas_activas": "Universidad Pontificia Bolivariana – UPB, Universidad EAFIT y Comfama. También he tenido articulación con la Secretaría de Participación Ciudadana, el Departamento Administrativo de Planeación y la Secretaría de Medio Ambiente de Medellín, en el marco de los procesos comunitarios del barrio Patio Bonito, en El Poblado. Además, participo en El Convite y lidero Conecta Mujeres, una red de más de 320 mujeres, junto con los procesos comunitarios del barrio Patio Bonito.",
    "proyecto_autogestion": "Me gustaría impulsar Medellín Conversa, una iniciativa para crear espacios de diálogo en distintos barrios donde vecinos, líderes, organizaciones e instituciones puedan conversar sobre los desafíos de su territorio, imaginar futuros posibles y construir acciones concretas para hacerlos realidad. Me gustaría desarrollarlo con integrantes de CienPorCien de diferentes perfiles y territorios, especialmente personas vinculadas con liderazgo comunitario, educación, cultura, salud mental, comunicación y participación ciudadana. La diversidad de experiencias permitiría crear una metodología que pueda replicarse en otros barrios de Medellín.",
    "contacto": {
      "email": "cataisaortiz@gmail.com",
      "telefono": "+573102237677",
      "web": null,
      "instagram": "https://www.instagram.com/podcast.conecta y. https://www.instagram.com/viajeraenconsciencia"
    },
    "foto": "images/lideres/catalina-isabel-ortiz-rodriguez-16-1.webp"
  },
  {
    "id": "natalia-andrea-cardenas-arango",
    "numero": "18",
    "nombre": "Natalia Andrea Cárdenas Arango",
    "organizacion": "Casa del Teatro biblioteca Gilberto Martínez",
    "territorio": "Comuna 12 ,La America",
    "municipio": "Medellín",
    "fotos": [
      "natalia-andrea-cardenas-arango-17-0.webp",
      "natalia-andrea-cardenas-arango-17-2.webp",
      "natalia-andrea-cardenas-arango-17-1.webp"
    ],
    "causas": [
      "Salud Mental",
      "Educación",
      "Cultura",
      "Juventud"
    ],
    "poblacion": [
      "Niñez",
      "Juventud",
      "Personas Mayores"
    ],
    "capacidades": [
      "Formación",
      "Investigación",
      "Arte",
      "Cultura"
    ],
    "busca": [
      "Formación",
      "Alianzas Estratégicas",
      "Visibilidad"
    ],
    "ofrece": [
      "Formación",
      "Investigación"
    ],
    "experiencia": 20,
    "disponible_alianzas": true,
    "que_hace": "Formadora y practicante de técnicas somáticas y de bienestar a través de la Creación escénica.",
    "problema": "Promover el autoconocimiento y la auto valoración, de los participantes a la formacion, dar a conocer que podemos tratar patrones mentales transformando posturas corporales.",
    "con_quien": "Casa del teatro de Medellín , Red de Creación escénica , Niquitao, La Pradera parte alta. Instituto Jorge Robledo. Ratón de Biblioteca",
    "que_ofrece_largo": "Formación en técnicas Somáticas y de Bienestar, danza creativa, teatro, danza en el agua, masaje energético, artes marciales, dirección de montajes para la escena.lo más",
    "frase_vision": "El Cuerpo como camino a la conciencia",
    "alianzas_activas": "Casa del teatro Biblioteca Gilberto Martínez, Ratón de biblioteca, Red de prácticas artísticas y culturales,",
    "proyecto_autogestion": "Si ,me encantaría ,de arte y sentido de pertenencia",
    "contacto": {
      "email": "somoselagua77@gmail.com",
      "telefono": "+573106607637",
      "web": null,
      "instagram": "Instagram Natalia luna Cardenas"
    },
    "foto": "images/lideres/natalia-andrea-cardenas-arango-17-0.webp"
  },
  {
    "id": "monica-arango-gomez",
    "numero": "19",
    "nombre": "Monica Arango Gómez",
    "organizacion": "Canas al aire, INDER DE MEDELLIN, adultos. Mayores/",
    "territorio": "Comuna 3 Manrique",
    "municipio": "Medellín",
    "fotos": [
      "monica-arango-gomez-18-0.webp",
      "monica-arango-gomez-18-2.webp",
      "monica-arango-gomez-18-1.webp"
    ],
    "causas": [
      "Salud Mental",
      "Ambiente",
      "Participación Ciudadana"
    ],
    "poblacion": [
      "Personas Mayores"
    ],
    "capacidades": [
      "Comunicación",
      "Organización Comunitaria",
      "Arte",
      "Cultura"
    ],
    "busca": [
      "Formación",
      "Alianzas Estratégicas",
      "Visibilidad"
    ],
    "ofrece": [
      "Formación",
      "Facilitación",
      "Inclusión Del Adulto Mayor",
      "En Proyectos De La Comunidad"
    ],
    "experiencia": 8,
    "disponible_alianzas": true,
    "que_hace": "Motivo a los adultos mayores, en hacerse sentir útiles, en la sociedad, son importantes en por su experiencia de vida",
    "problema": "El ser escuchados, hacerlos partícipes en proyectos baile, ejercicios, paseos, que les genere una paz mental tranquila",
    "con_quien": "No tengo ninguna, soy líder en el grupo, mediante la alcaldía de Medellín INDER, que nos facilita profesor gratuito para sus ejercicios.",
    "que_ofrece_largo": "Capacidades y conocimientos.",
    "frase_vision": "Vivir de los años, es una experiencia de vida, consejera y eficaz",
    "alianzas_activas": "No tengo, actualmente me preparo:0\"cien por cien\" Aldo Civico",
    "proyecto_autogestion": "Si, redes de cuidados y compañía para el adulto mayor, con Laura Rico",
    "contacto": {
      "email": "monicaarangogomez@gmail.com 3118136667",
      "telefono": "+573118136667",
      "web": "Redes sociales",
      "instagram": "Facebook"
    },
    "foto": "images/lideres/monica-arango-gomez-18-0.webp"
  },
  {
    "id": "natalia-zuluaga",
    "numero": "20",
    "nombre": "Natalia Zuluaga",
    "organizacion": "Abogada independiente defensora y representante de mujeres víctimas de mujeres VBG",
    "territorio": "Comunas 10, 1, 3, etc",
    "municipio": "Medellín",
    "fotos": [
      "natalia-zuluaga-19-4-primary.webp",
      "natalia-zuluaga-19-2.webp",
      "natalia-zuluaga-19-0.webp"
    ],
    "causas": [
      "Educación",
      "Cultura",
      "Mujeres",
      "Participación Ciudadana"
    ],
    "poblacion": [
      "Niñez",
      "Mujeres",
      "Víctimas"
    ],
    "capacidades": [
      "Formación",
      "Incidencia",
      "Mediación De Conflictos"
    ],
    "busca": [
      "Financiación",
      "Alianzas Estratégicas",
      "Visibilidad"
    ],
    "ofrece": [
      "Formación",
      "Consultoría",
      "Articulación Territorial"
    ],
    "experiencia": 21,
    "disponible_alianzas": true,
    "que_hace": "Soy abogada penalista, representante judicial y defensora de hombres, mujeres, niños, adolescentes y menores de edad vinculados a procesos penales o víctimas de delitos. Me interesa mucho la representación de adolescentes - menores de edad vinculados al sistema penal.",
    "problema": "A resolver asuntos judiciales de trascendencia penal, asesoría en colegios en temas de delitos en entornos escolares.",
    "con_quien": "En mi oficina particular, represento cualquier persona vinculada a procesos penales. Con la alcaldía en el mecanismo de defensa técnica, represento mujeres víctimas de violencias basadas en género.",
    "que_ofrece_largo": "Asesoría jurídico penal en materia de representación judicial y defensa de menores de edad vinculados al sistema de representación mujeres y hombres.",
    "frase_vision": "Si garantizamos bienestar en los niños, estamos garantizando una ciudad tranquila para los adultos.",
    "alianzas_activas": "Musicreando",
    "proyecto_autogestion": "",
    "contacto": {
      "email": "nataliaprocentro@gmail.com",
      "telefono": "+573013665573",
      "web": "@natalia.zuluaga.rivera",
      "instagram": "@natalia.zuluaga.rivera"
    },
    "foto": "images/lideres/natalia-zuluaga-19-4-primary.webp"
  },
  {
    "id": "miguel-angel-suaza-alarcon",
    "numero": "21",
    "nombre": "Miguel Ángel Suaza Alarcón",
    "organizacion": "La Provincia",
    "territorio": "Medellín, Poblado",
    "municipio": "Medellín",
    "fotos": [
      "miguel-angel-suaza-alarcon-20-0.webp",
      "miguel-angel-suaza-alarcon-20-1.webp"
    ],
    "causas": [
      "Cultura",
      "Juventud",
      "Ambiente"
    ],
    "poblacion": [
      "Juventud"
    ],
    "capacidades": [
      "Gestión De Proyectos",
      "Comunicación",
      "Investigación"
    ],
    "busca": [
      "Mentoría",
      "Alianzas Estratégicas",
      "Visibilidad"
    ],
    "ofrece": [
      "Consultoría",
      "Facilitación",
      "Articulación Territorial"
    ],
    "experiencia": 2,
    "disponible_alianzas": true,
    "que_hace": "Lidero una comunidad política y social llamada La Provincia. Lo que hacemos es crear contenido y propiciar espacios democráticos, respetuosos, seguros que coincidan con una identidad Antioqueña.",
    "problema": "Ayudamos a resolver mitos en la cultura antioqueña, desintoxicar la identidad paisa que ha sido contaminada por factores históricos. Además, estamos comprometidos en la creación de espacios físicos y digitales a favor de la democracia y la participación ciudadana.",
    "con_quien": "Trabajamos con jóvenes especialmente, jóvenes activos social y politicamente. Hemos trabajado con políticos y artistas, pero en esencia es una segmento joven.",
    "que_ofrece_largo": "Capacidad de organización, logística de eventos, marketing, mejoramiento de marcas. Lo hacemos también con fines comerciales pero cuando está relacionado con nuestro objetivo social, buscamos tener relaciones estrétegicas.",
    "frase_vision": "La Provincia será la facilitadora de espacios democráticos y culturales más importantes en Medellín.",
    "alianzas_activas": "Grupos juveniles.",
    "proyecto_autogestion": "Sí, me gustaría. Especialmente puedo aportar en el análisis de datos, levantamiento de información, georeferenciación de datos, y la comunicación digital de esos datos.",
    "contacto": {
      "email": "miguelangelsuazaalarcon@gmail.com",
      "telefono": "+573245919287",
      "web": "https://www.laprovinciaco.com/",
      "instagram": "https://www.instagram.com/laprovincia_co/"
    },
    "foto": "images/lideres/miguel-angel-suaza-alarcon-20-0.webp"
  },
  {
    "id": "paula-andrea-lopez-valencia",
    "numero": "22",
    "nombre": "Paula Andrea López Valencia",
    "organizacion": "Independiente",
    "territorio": "Envigado",
    "municipio": "Envigado",
    "fotos": [
      "paula-andrea-lopez-valencia-21-0-primary.webp",
      "paula-andrea-lopez-valencia-21-1.webp",
      "paula-andrea-lopez-valencia-21-2.webp"
    ],
    "causas": [
      "Salud Mental",
      "Educación",
      "Mujeres"
    ],
    "poblacion": [
      "Niñez",
      "Mujeres",
      "Personas Adultas (Hombres - Mujeres)"
    ],
    "capacidades": [
      "Formación",
      "Organización Comunitaria",
      "Mediación De Conflictos"
    ],
    "busca": [
      "Financiación",
      "Alianzas Estratégicas",
      "Visibilidad"
    ],
    "ofrece": [
      "Formación",
      "Movilización Comunitaria",
      "Facilitación"
    ],
    "experiencia": 10,
    "disponible_alianzas": true,
    "que_hace": "Soy educadora, reikista, psicóloga transpersonal y sacerdotisa. Además de ser coordinadora de un Colegio, facilito espacios sagrados de sanación, guiando a las personas a autorregular sus emociones, recordar su valor inherente y florecer en un estilo de vida de paz, abundancia y profundo bienestar emocional.",
    "problema": "Resuelvo la desconexión del cuerpo y el agotamiento emocional causado por la represión del sentir y la falta de sentido vital. Guío la sanación del femenino y masculino sagrado para liberar bloqueos de expresión, sanar heridas del pasado y restaurar la autoestima, permitiendo habitar la vida desde la calma y la libertad emocional.",
    "con_quien": "La mayoría de veces con niños y mujeres en Envigado.",
    "que_ofrece_largo": "Pongo a disposición mi maestría en regulación emocional, liderazgo en círculos de mujeres y facilitación de rituales de sanación. Aporto un portafolio de experiencias vivenciales de alto impacto, capacidad de convocatoria, acompañamiento terapéutico seguro y un compromiso absoluto con la excelencia, la ética y la abundancia compartida.",
    "frase_vision": "Soy un canal de luz y amor incondicional con capacidad de guiar a miles de almas hacia su autorregulación y libertad emocional.",
    "alianzas_activas": "Sí, con: Erika Klnkert, Catalina Mejía, Manuela Mejía, Johan Bueno y Maria Camila.",
    "proyecto_autogestion": "Sí. Impulsaría un programa social de salud mental y bienestar para llevar herramientas de mindfulness, psicología y círculos de apoyo a comunidades vulnerables, garantizando que la sanación emocional y el cuidado del ser sean un derecho accesible para todos y no un privilegio de pocos. Lo haría con quienes tengan las disposición y el conocimiento para apoyar esta iniciativa.",
    "contacto": {
      "email": "paulaandrealopezvalencia13@gmail.com",
      "telefono": "+573008727651",
      "web": null,
      "instagram": "paulopez0403"
    },
    "foto": "images/lideres/paula-andrea-lopez-valencia-21-0-primary.webp"
  },
  {
    "id": "mateo-munoz-campo",
    "numero": "23",
    "nombre": "Mateo Muñoz Campo",
    "organizacion": "PMO Antioquia",
    "territorio": "Comuna 5, castilla",
    "municipio": "Medellín",
    "fotos": [
      "mateo-munoz-campo-22-0.webp",
      "mateo-munoz-campo-22-1.webp",
      "mateo-munoz-campo-22-2.webp"
    ],
    "causas": [
      "Educación",
      "Ambiente",
      "Participación Ciudadana"
    ],
    "poblacion": [
      "Mujeres",
      "Víctimas",
      "Campesinado"
    ],
    "capacidades": [
      "Gestión De Proyectos",
      "Investigación",
      "Tecnología"
    ],
    "busca": [
      "Mentoría",
      "Alianzas Estratégicas"
    ],
    "ofrece": [
      "Formación",
      "Facilitación",
      "Articulación Territorial"
    ],
    "experiencia": 3,
    "disponible_alianzas": true,
    "que_hace": "Formulación de proyectos para consecución de recursos. Gestión de proyectos de CTeI",
    "problema": "Formación de alianzas para la presentación de proyectos de impacto y sostenibles.",
    "con_quien": "Municipios PDET y ZOMAC, sociedad civil, academia, sector privado.",
    "que_ofrece_largo": "Conocimiento en formulación de proyectos.",
    "frase_vision": "Si me preguntas y no se la respuesta, seremos dos preguntando.",
    "alianzas_activas": "",
    "proyecto_autogestion": "",
    "contacto": {
      "email": "mateo.munoz2@udea.edu.co",
      "telefono": "+573108441250",
      "web": null,
      "instagram": "mat.mc7"
    },
    "foto": "images/lideres/mateo-munoz-campo-22-0.webp"
  },
  {
    "id": "liliana-maria-zapata-sierra",
    "numero": "24",
    "nombre": "Liliana María Zapata Sierra",
    "organizacion": "Club deportivo formas intimas",
    "territorio": "Comuna 13",
    "municipio": "Medellín",
    "fotos": [
      "liliana-maria-zapata-sierra-23-0-primary.webp",
      "liliana-maria-zapata-sierra-23-1.webp",
      "liliana-maria-zapata-sierra-23-2.webp"
    ],
    "causas": [
      "Mujeres",
      "Deportes ( Fútbol Jugado Por Mujeres)"
    ],
    "poblacion": [
      "Niñez",
      "Juventud",
      "Mujeres"
    ],
    "capacidades": [
      "Gestión De Proyectos",
      "Proyectos Deportivos"
    ],
    "busca": [
      "Financiación",
      "Mentoría",
      "Alianzas Estratégicas"
    ],
    "ofrece": [
      "Consultoría",
      "Movilización Comunitaria"
    ],
    "experiencia": 35,
    "disponible_alianzas": true,
    "que_hace": "Liderar proyectos de fútbol femenino. Somos un club sin ánimo de lucro con 35 años de historia y más de 12.000 mujeres futboleras con cientos de casos de éxito. En el fútbol y en áreas interdisciplinarias.",
    "problema": "Situaciones de iniquidad de género en el deporte. Las familias aún persisten que las mujeres no son aptas para practicar el deporte que elijan. Un conflicto social, de largo aliento. Cuesta arriba, de relevos generacionales. Y muy muy pesado!",
    "con_quien": "Niñas futbolistas desde los 5 hasta los 20 años De todo el territorio colombiano especialmente antioqueño",
    "que_ofrece_largo": "Mi experiencia en organización de torneos, copas, competencias, talleres a clubes deportivos con menos oportunidades.",
    "frase_vision": "“HASTA EL FÚTBOL DE NOS ME LLEVE”",
    "alianzas_activas": "Fundación Fraternidad Medellín /Fundacion Saciar",
    "proyecto_autogestion": "Llevaría el fútbol femenino a otro nivel! Trabajaría con cualquiera de los 99 líderes que me acompañan en este proceso",
    "contacto": {
      "email": "gerencia@clubformasintimas.com",
      "telefono": "+573146184055",
      "web": "Club deportivo formas intimas",
      "instagram": "@clubformas"
    },
    "foto": "images/lideres/liliana-maria-zapata-sierra-23-0-primary.webp"
  },
  {
    "id": "erika-klinkert",
    "numero": "25",
    "nombre": "Erika Klinkert",
    "organizacion": "Fundación Atman Yoga e In Sight EAFIT",
    "territorio": "Medellín",
    "municipio": "Medellín",
    "fotos": [
      "erika-klinkert-24-0-primary.webp",
      "erika-klinkert-24-1.webp",
      "erika-klinkert-24-2.webp"
    ],
    "causas": [
      "Salud Mental",
      "Educación"
    ],
    "poblacion": [
      "Líderes Empresariales",
      "Líderes Comunitarios"
    ],
    "capacidades": [
      "Formación",
      "Gestión De Proyectos",
      "Diseño De Experiencias"
    ],
    "busca": [
      "Formación",
      "Alianzas Estratégicas"
    ],
    "ofrece": [
      "Formación",
      "Consultoría",
      "Facilitación"
    ],
    "experiencia": 25,
    "disponible_alianzas": true,
    "que_hace": "Acompaño a empresas, líderes y organizaciones a regenerar nuestro hogar en la Tierra, integrando estrategias de negocio de triple impacto, liderazgo auténtico y bienestar integral para generar prosperidad con impacto positivo en la sociedad y el planeta.",
    "problema": "Ayudo a resolver la desconexión entre el éxito económico, el bienestar humano y el cuidado del planeta, integrando estas tres dimensiones en la estrategia y el liderazgo auténtico de las organizaciones.",
    "con_quien": "Trabajo con empresas, líderes y estudiantes de posgrado, en la ciudad de Medellín. Desde la Fundación Atman Yoga lidero el movimiento de yoga, mindfulness y sabiduría ancestral para las empresas; como embajadora de InSight EAFIT acompaño procesos de liderazgo auténtico y estrategia competitiva; y en la Colegiatura Colombiana soy profesora titular del módulo Proyecto de Intervención de la Especialización en Intervención Creativa.",
    "que_ofrece_largo": "Ofrezco una visión integradora para abordar desafíos complejos, articulando estrategia de negocio de triple impacto, liderazgo Auténtico y bienestar integral. Facilito procesos de transformación en personas, equipos y organizaciones para generar valor público, prosperidad y regeneración del planeta.",
    "frase_vision": "Inspirar a los Seres para que juntos regeneremos nuestro hogar en la tierra con bienestar para todos.",
    "alianzas_activas": "Zenta Lab",
    "proyecto_autogestion": "Sí. Creo profundamente que las grandes transformaciones solo son posibles cuando personas de distintos sectores trabajan juntas por un propósito común. Me entusiasma la posibilidad de cocrear un proyecto que convierta a Medellín en un referente de liderazgo consciente, bienestar y regeneración.",
    "contacto": {
      "email": "eklinker@eafit.edu.co",
      "telefono": "+573122576704",
      "web": "N/A",
      "instagram": "@erika_Klinkert"
    },
    "foto": "images/lideres/erika-klinkert-24-0-primary.webp"
  },
  {
    "id": "jorge-andres-guerra-velez",
    "numero": "26",
    "nombre": "Jorge Andrés Guerra Vélez",
    "organizacion": "Parches pa Movernos",
    "territorio": "Medellin",
    "municipio": "Medellín",
    "fotos": [
      "jorge-andres-guerra-velez-25-1-primary.webp",
      "jorge-andres-guerra-velez-25-0.webp",
      "jorge-andres-guerra-velez-25-2.webp"
    ],
    "causas": [
      "Salud Mental",
      "Bienestar",
      "Innovación",
      "Propósito"
    ],
    "poblacion": [
      "Personas Entre Los 30",
      "50 Años"
    ],
    "capacidades": [
      "Formación",
      "Comunicación",
      "Incidencia"
    ],
    "busca": [
      "Mentoría",
      "Formación",
      "Alianzas Estratégicas"
    ],
    "ofrece": [
      "Consultoría",
      "Movilización Comunitaria",
      "Facilitación"
    ],
    "experiencia": 1,
    "disponible_alianzas": true,
    "que_hace": "Un modelo de acompañamiento que ayuda a las personas y equipos a potenciar la creatividad a través del movimiento físico, mental y de rutinas",
    "problema": "Resistencia al cambio, burnout, carencia de propósito y motivación, salud física, mental y emocional",
    "con_quien": "He trabajado con empresas como SURA, Bivett y también he facilitado charlas en la universidad de Medellín",
    "que_ofrece_largo": "Charlas, talleres, clases, mentorías y acompañamiento desde la movilización",
    "frase_vision": "Cuando yo me muevo, todo a mi al rededor se mueve. Porque el cambio una pequeña parte de mi, impacta todo lo demás",
    "alianzas_activas": "Equipos de SURA, Bivett y la universidad de Medellín",
    "proyecto_autogestion": "Todavía no conozco bien los demás proyectos",
    "contacto": {
      "email": "1jorgeguerra26@gmail.com",
      "telefono": "+573163999579",
      "web": null,
      "instagram": "https://www.instagram.com/parchespamovernos?igsh=MXJuaWhmdDE4c3N0Mg%3D%3D&utm_source=qr"
    },
    "foto": "images/lideres/jorge-andres-guerra-velez-25-1-primary.webp"
  },
  {
    "id": "sandra-zuluaga",
    "numero": "27",
    "nombre": "Sandra Zuluaga",
    "organizacion": "Fundación Raton de BIblioteca",
    "territorio": "Medellín",
    "municipio": "Medellín",
    "fotos": [
      "sandra-zuluaga-26-1-primary.webp",
      "sandra-zuluaga-26-0.webp",
      "sandra-zuluaga-26-2.webp"
    ],
    "causas": [
      "Educación",
      "Cultura"
    ],
    "poblacion": [
      "Niñez",
      "Juventud",
      "Mujeres",
      "Personas Mayores"
    ],
    "capacidades": [
      "Incidencia",
      "Organización Comunitaria",
      "Arte",
      "Cultura"
    ],
    "busca": [
      "Alianzas Estratégicas",
      "Visibilidad"
    ],
    "ofrece": [
      "Movilización Comunitaria",
      "Articulación Territorial"
    ],
    "experiencia": 9,
    "disponible_alianzas": true,
    "que_hace": "Promoción de lectura y gestión de bibliotecas en zona con vulnerabilidad económica",
    "problema": "Comprensión lectora, desarrollo comunitario, acceso a la cultura",
    "con_quien": "sectores con vulneración económica en poblaciones desde primera infancia hasta persona mayor",
    "que_ofrece_largo": "Encuentro con grupos organizados de todas las edades, sedes en zonas perifericas de Medellín",
    "frase_vision": "Somos espacios reconocidos en Medellín como lugares de encuentro y aprendizaje",
    "alianzas_activas": "Comfama, Fundaciones SURA, Fraternidad Medellín, Sofía Pérez de Soto, Muv, 8 Valores",
    "proyecto_autogestion": "Una nueva bilbioteca en la que también podamos ofrecer el programa del Balcón de los Artistas",
    "contacto": {
      "email": "direccion@ratondebiblioteca.org",
      "telefono": "+573104601601",
      "web": "www.ratondebiblioteca.org",
      "instagram": "@fundaraton"
    },
    "foto": "images/lideres/sandra-zuluaga-26-1-primary.webp"
  },
  {
    "id": "melissa-toro-nieto",
    "numero": "28",
    "nombre": "Melissa Toro Nieto",
    "organizacion": "Putamente Poderosas",
    "territorio": "Comuna 10",
    "municipio": "Medellín",
    "fotos": [
      "melissa-toro-nieto-27-2-primary.webp",
      "melissa-toro-nieto-27-0.webp",
      "melissa-toro-nieto-27-1.webp"
    ],
    "causas": [
      "Salud Mental",
      "Mujeres",
      "Derechos Humanos"
    ],
    "poblacion": [
      "Niñez",
      "Mujeres",
      "Comunidad Lgbtiq+"
    ],
    "capacidades": [
      "Formación",
      "Gestión De Proyectos",
      "Comunicación",
      "Incidencia",
      "Investigación"
    ],
    "busca": [
      "Financiación",
      "Alianzas Estratégicas",
      "Visibilidad"
    ],
    "ofrece": [
      "Consultoría",
      "Facilitación",
      "Articulación Territorial"
    ],
    "experiencia": 12,
    "disponible_alianzas": true,
    "que_hace": "Putamente Poderosas es una organización social dedicada a la defensa de los Derechos Humanos de mujeres y diversidades en situación de vulnerabilidad, específicamente de quienes ejercen o han ejercido el trabajo sexual o el sexo por supervivencia, así como de sus hijas e hijos, para romper ciclos de violencia. Nuestro enfoque se basa en procesos de acompañamiento de largo aliento, donde buscamos transformar realidades a través de tres pilares fundamentales: • Educación integral: Formación para la vida y el ejercicio de derechos. • Empoderamiento económico: Creación de oportunidades reales y dignas. • Entornos seguros: Construcción de espacios libres de violencia y estigmatización.",
    "problema": "Las mujeres que acompañamos viven en la intersección de múltiples exclusiones: ● Invisibilización social y estigmatización sistemática. ● Violencias físicas, sexuales y simbólicas profundamente naturalizadas. ● Pobreza extrema, maternidades solitarias y ausencia de redes de cuidado. ● Ausencia casi total de oferta institucional integral y sostenida. ● Hijos e hijas creciendo en entornos que reproducen el ciclo de exclusión. Y lo que no se transforma, se repite. Putamente Poderosas opera desde un modelo integral de transformación de largo aliento, basado en tres dimensiones interdependientes: 1.Transformación personal y psicoemocional 2. Transformación económica y educativa 3.Transformación social y cultural ● Formación para el trabajo y el emprendimiento, sin imposiciones. ● Generación de ingresos dignos a partir de talentos reales. ● Acceso a educación, arte y cultura para hijos e hijas. ● Rutas concretas para romper la repetición generacional de la pobreza. ● Acompañamiento psicosocial continuo, individual y colectivo. ● Procesos de sanación emocional y resignificación de la experiencia. ● Reapropiación del cuerpo, la voz y la identidad. ● Reconstrucción de autoestima, agencia y poder de decisión. ● Producción de narrativas que desmontan el estigma. ● Vocerías desde la experiencia vivida. ● Incidencia cultural y política para cambiar la forma enque la sociedad mira el trabajo sexual. ● Reivindicación del derecho a existir con dignidad.",
    "con_quien": "Mujeres y diversidades en situación de vulnerabilidad que ejercen el trabajo sexual y el sexo por supervivencia. Niños, Niñas y Adolescentes hijas e hijos de las mujeres con las que trabajamos. Específicamente en el centro de la ciudad de Medellín. Nuestros procesos se han ido descentralizando al barrio Santa Fe de Bogotá.",
    "que_ofrece_largo": "Desarrollamos experiencias diseñadas para la ciudadanía, empresas, organizaciones y equipos de trabajo que desean abrir conversaciones profundas sobre dignidad, derechos humanos, género y transformación cultural. Creemos firmemente que el cambio cultural comienza con conversaciones incómodas, honestas y humanas. No ofrecemos charlas o talleres tradicionales. Ofrecemos experiencias vivas que conectan arte, reflexión y encuentro humano. Son encuentros que transforman la manera en que entendemos la dignidad humana. Las experiencias de Putamente Poderosas permiten a grupos, equipos directivos y colaboradores: • Comprender realidades invisibilizadas de la sociedad • Reflexionar sobre estigma, desigualdad y dignidad • Conectar con historias reales que desafían prejuicios • Fortalecer culturas organizacionales más conscientes, inclusivas y humanas • Vincularse de manera auténtica con una causa social transformadora",
    "frase_vision": "Soñamos con un mundo donde los Derechos humanos no sean privilegios de unos pocos",
    "alianzas_activas": ". Comfama . Con Cora . Valientes ONG . One Inversión Social . Querida Lab . Granos de Arena . Min Cultura",
    "proyecto_autogestion": "Me gustaría poder llevar a Puta, cadeneta y chisme a todos los barrios y periferias de la ciudad. Es un espacio para construir un diálogo bidireccional entre las trabajadoras sexuales y la ciudadanía, encontrando en el arte manual una oportunidad para desaprender, deconstruir estereotipos y desmontar prejuicios, amplificar voces, construir memoria colectiva y al mismo tiempo, formar lazos sociales a partir del enfoque en derechos humanos. Un dispositivo de transformación cultural que humaniza a las trabajadoras sexuales.",
    "contacto": {
      "email": "Melissatoro@putamentepoderosas.org",
      "telefono": "+573168878087",
      "web": "https://www.instagram.com/putamentepoderosas",
      "instagram": "https://www.instagram.com/_melissatoro?utm_source=qr"
    },
    "foto": "images/lideres/melissa-toro-nieto-27-2-primary.webp"
  },
  {
    "id": "sandra-patricia-orozco-montoya",
    "numero": "29",
    "nombre": "Sandra Patricia Orozco Montoya",
    "organizacion": "Marca pesonal: Comunicacion en conexion - Human Partner - Medellín -",
    "territorio": "Medellín",
    "municipio": "Medellín",
    "fotos": [
      "sandra-patricia-orozco-montoya-28-0-primary.webp",
      "sandra-patricia-orozco-montoya-28-1.webp",
      "sandra-patricia-orozco-montoya-28-2.webp"
    ],
    "causas": [
      "Educación",
      "Paz",
      "Emprendimiento"
    ],
    "poblacion": [
      "Juventud",
      "Mujeres",
      "Comunidades Educativas",
      "Adultos"
    ],
    "capacidades": [
      "Formación",
      "Mediación De Conflictos"
    ],
    "busca": [
      "Formación",
      "Alianzas Estratégicas",
      "Visibilidad"
    ],
    "ofrece": [
      "Formación",
      "Facilitación",
      "Articulación Territorial"
    ],
    "experiencia": 20,
    "disponible_alianzas": true,
    "que_hace": "Acompaño organizaciones, entidades educativas a la construcción de comunidad desde la pedagogia de las relaciones (Human Partner). Creacion de espacios seguros para el fortalecimiento de vínculos por medio de la escucha para comprender y la palabra bondadosa (Comunicacion en Conexion)",
    "problema": "Provencion de herramientas para la transformacion de clos onflictos desde el enfoque restaurativo. Construcción de comunidad para el co-cuidado. Faciliaciones y formaciones en prácticas restaurativas (Human Partner). Acompaño en el desarrollo de habiilidades socioemocionales para la escucha para comprender y la palabra bondadosa (Comunicacion en Conexión)",
    "con_quien": "Comunidades educativas, organizaciones, equipos de trabajo. Adultos",
    "que_ofrece_largo": "Una experiencia de construcción de comunidad para el cuidado y co-cuidado,para fortalecer los vínculos entre los aliados y alinear expectativas que permitan tejer una red",
    "frase_vision": "Humanizar los encuentros, avanzar en cuidado y conexión",
    "alianzas_activas": "Corporación Surgir",
    "proyecto_autogestion": "Por el momento deseo escuchar para comprender",
    "contacto": {
      "email": "som367@gmail.com",
      "telefono": "+573218758939",
      "web": "www.humanpartner.org",
      "instagram": "@comunicacionenconexion / @humanpartner"
    },
    "foto": "images/lideres/sandra-patricia-orozco-montoya-28-0-primary.webp"
  },
  {
    "id": "jose-monsalve-lopez",
    "numero": "30",
    "nombre": "Jose Monsalve López",
    "organizacion": "Coporación Manguala",
    "territorio": "San Antonio de Prado",
    "municipio": "Medellín",
    "fotos": [
      "jose-monsalve-lopez-29-1-primary.webp",
      "jose-monsalve-lopez-29-0.webp",
      "jose-monsalve-lopez-29-2.webp"
    ],
    "causas": [
      "Educación",
      "Cultura"
    ],
    "poblacion": [
      "Niñez",
      "Juventud",
      "Comunidades Étnicas",
      "Migrantes"
    ],
    "capacidades": [
      "Investigación",
      "Organización Comunitaria",
      "Arte",
      "Cultura"
    ],
    "busca": [
      "Financiación",
      "Alianzas Estratégicas",
      "Visibilidad"
    ],
    "ofrece": [
      "Formación",
      "Facilitación",
      "Producción Con Enfasis En Arte Urbano Con Sentido Social"
    ],
    "experiencia": 17,
    "disponible_alianzas": true,
    "que_hace": "Soy muralista, sociólogo y gestor cultural; bajo el nombre de Eskibel desarrollo proyectos de muralismo social que articulan el arte, la investigación, la educación y el trabajo comunitario como herramientas para generar diálogo, memoria y transformación de los territorios. Soy fundador de la Corporación Educativa y Cultural Manguala, desde donde impulso procesos culturales y pedagógicos, entre ellos el Museo Escolar Héctor Abad Gómez, una iniciativa que convierte la escuela en un espacio vivo de memoria, creación y participación. Mi propósito es construir un mundo de murales y no de muros, como una apuesta por la libre circulación, el encuentro y el acceso a los derechos humanos.",
    "problema": "El problema que busco abordar es la falta de acceso y participación de las comunidades en experiencias culturales y artísticas que contribuyan a transformar y resignificar los espacios que habitan. Esto se relaciona con paisajes urbanos que muchas veces reproducen exclusión, fragmentación y poca diversidad de representaciones, así como con el limitado reconocimiento de la cultura y el arte como derechos fundamentales y como factores que contribuyen al bienestar y la salud de las comunidades.",
    "con_quien": "Trabajo con comunidades y organizaciones en contextos urbanos, principalmente en Medellín y otros territorios de Colombia, y también he desarrollado experiencias y colaboraciones internacionales, especialmente en Latinoamérica. Mi trabajo se enfoca en procesos de muralismo social y educación artística con comunidades, instituciones educativas, niñas, niños y jóvenes, adaptando cada proyecto a las características y necesidades del territorio.",
    "que_ofrece_largo": "Ofrezco experiencia en muralismo social, gestión cultural y trabajo comunitario, así como conocimientos en investigación social y diseño de procesos participativos. Cuento con la capacidad de desarrollar proyectos de intervención artística desde su conceptualización hasta su ejecución, articulando artistas, comunidades e instituciones. También aporto una red de contactos y experiencia en proyectos culturales nacionales e internacionales, además de la capacidad de gestión de la Corporación Educativa y Cultural Manguala para desarrollar procesos de mayor alcance.",
    "frase_vision": "Crear un mural junto a las comunidades de cualquier barrio, ciudad o país es una manera de proponer imágenes de un futuro deseado, una pintura que se crea a partir de la creatividad colectiva propende por el bien común. Poner en el centro de las ciudades murales con participación comunitaria es una manera de construir un mundo de murales y no de muros.",
    "alianzas_activas": "Institución Educativa Héctor Abad Gómez, Comfama, Agencia APP de Medellín, Corporación Proromeral.",
    "proyecto_autogestion": "Sí. Me gustaría impulsar un proyecto que ponga el arte y el muralismo al servicio de las organizaciones y las comunidades de Medellín, como una herramienta para abrir conversaciones sobre temas que necesitan ser escuchados, visibilizados o puestos en común, y para resignificar espacios a partir de las historias, necesidades y sueños de quienes los habitan. La idea sería desarrollar procesos en los que el mural sea el resultado de un ejercicio previo de escucha y diálogo, y no un fin en sí mismo: una forma de hacer visible aquello que una comunidad considera importante decir. Me gustaría llevarlo a cabo junto a integrantes de CienPorCien con experiencias diversas en trabajo comunitario, educación, cultura, comunicación y gestión de proyectos, porque considero que esa diversidad permitiría acompañar mejor las necesidades de cada organización y territorio. Sería una oportunidad para poner nuestros conocimientos al servicio de quienes ya están generando transformaciones en Medellín, ayudándoles a encontrar nuevas formas de comunicar, conversar y hacer visibles sus procesos. Mi aporte estaría principalmente en la dirección artística y metodológica de estos procesos, así como en la articulación con comunidades y organizaciones para convertir sus ideas y conversaciones en propuestas visuales con sentido artístico.",
    "contacto": {
      "email": "monsalvelopezjose@gmail.com",
      "telefono": "+573106002916",
      "web": null,
      "instagram": "https://www.instagram.com/eski.bel?igsh=MThvaWdwdXlibHVybg=="
    },
    "foto": "images/lideres/jose-monsalve-lopez-29-1-primary.webp"
  },
  {
    "id": "johan-esteban-sierra-aguirre",
    "numero": "31",
    "nombre": "Johan Esteban Sierra Aguirre",
    "organizacion": "Fundación Centro de Fe y Culturas",
    "territorio": "Comuna 14",
    "municipio": "Medellín",
    "fotos": [
      "johan-esteban-sierra-aguirre-30-0-primary.webp",
      "johan-esteban-sierra-aguirre-30-1.webp",
      "johan-esteban-sierra-aguirre-30-2.webp"
    ],
    "causas": [
      "Educación",
      "Juventud",
      "Ambiente",
      "Paz",
      "Participación Ciudadana"
    ],
    "poblacion": [
      "Juventud",
      "Personas Mayores",
      "Víctimas"
    ],
    "capacidades": [
      "Formación",
      "Gestión De Proyectos",
      "Organización Comunitaria"
    ],
    "busca": [
      "Financiación",
      "Mentoría",
      "Formación"
    ],
    "ofrece": [
      "Formación",
      "Facilitación",
      "Articulación Territorial"
    ],
    "experiencia": 8,
    "disponible_alianzas": true,
    "que_hace": "Formación en liderazgo",
    "problema": "Contribuir a la transformación de experiencias y contextos de injusticia y exclusión social, reforzando la cohesión social y el sentido de pertenencia",
    "con_quien": "Jóvenes de toda la ciudad",
    "que_ofrece_largo": "Facilitación de espacios",
    "frase_vision": "Al servicio de la igual dignidad de las personas",
    "alianzas_activas": "",
    "proyecto_autogestion": "",
    "contacto": {
      "email": "trabajoterritorial@centrofeyculturas.org.co",
      "telefono": "+573154967553",
      "web": null,
      "instagram": null
    },
    "foto": "images/lideres/johan-esteban-sierra-aguirre-30-0-primary.webp"
  },
  {
    "id": "gisela-zivic",
    "numero": "32",
    "nombre": "Gisela Zivic",
    "organizacion": "Fundación Prolírica de Antioquia",
    "territorio": "Medellín",
    "municipio": "Medellín",
    "fotos": [
      "gisela-zivic-31-2.webp",
      "gisela-zivic-31-0.webp",
      "gisela-zivic-31-1.webp"
    ],
    "causas": [
      "Salud Mental",
      "Educación",
      "Cultura"
    ],
    "poblacion": [
      "Todas Las Anteriores"
    ],
    "capacidades": [
      "Formación",
      "Gestión De Proyectos",
      "Arte",
      "Cultura"
    ],
    "busca": [
      "Financiación",
      "Alianzas Estratégicas",
      "Visibilidad"
    ],
    "ofrece": [
      "Formación",
      "Articulación Territorial"
    ],
    "experiencia": 32,
    "disponible_alianzas": true,
    "que_hace": "Prolírica de Antioquia somos una entidad sin ánimo de lucro dedicados a la transformación de las vidas a través de la cultura, el arte y el entretenimiento. Y con Nadistation trabajamos siendo un sistema de expansión del Ser.",
    "problema": "Con el arte y la cultura damos bienestar emocional, espiritual y transformamos con momentos de placer sensorial, así mismo con Nadistation que a través del sonido y distintas prácticas holisticas llegamos al ADN del Ser.",
    "con_quien": "Con la población de Medellín y distintos municipios del departamento. En estos 32 años años con Prolírica hemos llegado a 47 municipios y corregimientos del departamento.",
    "que_ofrece_largo": "Ofrecemos espectáculos, momentos de esparcimiento, shows, formación a niños y jóvenes en el arte de hacer un show completo, aprender a bailar, cantar y actuar. Y con Nadistation les ofrecemos Terapias de Sonido, retiros y festivales holisticos.",
    "frase_vision": "Somos el epicentro cultural de la ciudad y el departamento (Fundación Prolírica de Antioquia). Somos el sistema de expansión del Ser (Nadistation)",
    "alianzas_activas": "Bancolombia, Grupo Sura, secretaría de Cultura Ciudadana Alcaldía de Medellín, Ministerio de Cultura, entre otros.",
    "proyecto_autogestion": "Sí me gustaría. Haría los proyectos que necesite el entorno y que haga crecer a la ciudad y a los territorios, abierta para crear.",
    "contacto": {
      "email": "giselazivic@gmail.com",
      "telefono": "+573113341278",
      "web": "www.proliricadeantioquia.com",
      "instagram": "@proliricadeantioquia @giselazivic @nadistation"
    },
    "foto": "images/lideres/gisela-zivic-31-2.webp"
  },
  {
    "id": "gina-damato",
    "numero": "33",
    "nombre": "Gina D’Amato",
    "organizacion": "Fundación ARM",
    "territorio": "Global",
    "municipio": "Medellín",
    "fotos": [
      "gina-damato-32-0-primary.webp",
      "gina-damato-32-1.webp"
    ],
    "causas": [
      "Mujeres",
      "Ambiente",
      "Derechos Humanos"
    ],
    "poblacion": [
      "Mujeres",
      "Comunidades Étnicas",
      "Campesinado",
      "Mineros",
      "Mineras Artesanales",
      "De Pequeña Escala"
    ],
    "capacidades": [
      "Gestión De Proyectos",
      "Incidencia",
      "Conexión Con Mercados Globales"
    ],
    "busca": [
      "Alianzas Estratégicas"
    ],
    "ofrece": [
      "Facilitación",
      "Articulación Territorial"
    ],
    "experiencia": 20,
    "disponible_alianzas": true,
    "que_hace": "Trabajamos para transformar ecosistemas mineros para que se adopten las mejores prácticas y se genere desarrollo incluyente y responsable para las comunidades.",
    "problema": "Deterioro ambiental y exclusión social de comunidades.",
    "con_quien": "Con poblacion de mineros y mineras artesanales en todo Colombia.",
    "que_ofrece_largo": "Amplio conocimiento en estándares internacionales y conexión con mercados justos.",
    "frase_vision": "Trabajo por la transformación incluyente y sostenible de las comunidades rurales.",
    "alianzas_activas": "Alianza por el Amazonas, Fundación mi sangre, WWF Colombia.",
    "proyecto_autogestion": "Claro que si, estamos siempre listos.",
    "contacto": {
      "email": "ginadamatoh@gmail.com",
      "telefono": "+573206998110",
      "web": null,
      "instagram": "Gindamato"
    },
    "foto": "images/lideres/gina-damato-32-0-primary.webp"
  },
  {
    "id": "tatiana-serna-castrillon",
    "numero": "34",
    "nombre": "Tatiana Serna Castrillón",
    "organizacion": "Mujeres que Progresan Fundación",
    "territorio": "Comunas 2 y 1, queremos llegar a todo Antioquia",
    "municipio": "Medellín",
    "fotos": [
      "tatiana-serna-castrillon-33-3-primary.webp",
      "tatiana-serna-castrillon-33-0.webp",
      "tatiana-serna-castrillon-33-4.webp"
    ],
    "causas": [
      "Salud Mental",
      "Educación",
      "Cultura",
      "Mujeres",
      "Ambiente",
      "Paz",
      "Emprendimiento",
      "Derechos Humanos",
      "Participación Ciudadana"
    ],
    "poblacion": [
      "Niñez",
      "Mujeres",
      "Comunidad Lgbtiq+"
    ],
    "capacidades": [
      "Formación",
      "Gestión De Proyectos",
      "Organización Comunitaria",
      "Arte",
      "Cultura"
    ],
    "busca": [
      "Financiación",
      "Alianzas Estratégicas",
      "Visibilidad"
    ],
    "ofrece": [
      "Formación",
      "Consultoría",
      "Investigación",
      "Movilización Comunitaria",
      "Facilitación",
      "Articulación Territorial"
    ],
    "experiencia": 20,
    "disponible_alianzas": true,
    "que_hace": "Mujeres que Progresan es una fundación pensada para atender y brindar posibilidades de acceder a la salud física y mental, condiciones de vivienda digna, alimentación sostenible, formación para el autoempleo, apoyo en campañas de útiles escolares, regalos decembrinos y otros elementos especiales para niños y niñas de escasos recursos y especialmente beneficiando a las mujeres cabeza de familia, adultas mayores y mujeres en situación de vulnerabilidad.",
    "problema": "La falta de recursos o acceso a la información para obtener apoyos, conocimientos y ayudas son algunas de las problemáticas que apoyamos dando asesorías, capacitación y ayudas alimentarias, con objetos específicos como útiles escolares, jornadas de salud física y psicológica, entre otros.",
    "con_quien": "Actualmente favorecemos a la comuna 2, en ocasiones a la 1 y queremos llegar a nivel nacional e internacional.",
    "que_ofrece_largo": "Un equipo interdisciplinario listo para apoyar actividades y capacitaciones.",
    "frase_vision": "Ayudando a que el crecimiento y el bienestar sea de todas y todos paso a paso.",
    "alianzas_activas": "Constelaciones en BioConsciencia, Milena Bautista(psicóloga,Doula, consteladora), edil comuna, biblioteca pública de Santa Cruz",
    "proyecto_autogestion": "Me encantaría, que esto se vuelva una red de fortalecimiento para las organizaciones sociales de Antioquia. Cada una y uno somos una pieza clave e invaluable, en la que podemos ver cómo articulamos y aportamos desde nuestras capacidades.",
    "contacto": {
      "email": "Tatiserna.comunicaciones@gmail.com",
      "telefono": "+573002542714",
      "web": "En Construcción",
      "instagram": "@mujeresqueprogresan"
    },
    "foto": "images/lideres/tatiana-serna-castrillon-33-3-primary.webp"
  },
  {
    "id": "laura-maya-restrepo",
    "numero": "35",
    "nombre": "Laura Maya Restrepo",
    "organizacion": "Corporación Somos Por Naturaleza",
    "territorio": "La Honda, Manrique (Comuna 3), Medellin",
    "municipio": "Medellín",
    "fotos": [
      "laura-maya-restrepo-34-0.webp",
      "laura-maya-restrepo-34-1.webp",
      "laura-maya-restrepo-34-2.webp"
    ],
    "causas": [
      "Gestión Comunitaria De Riesgo",
      "Tejido Comunitario"
    ],
    "poblacion": [
      "Niñez",
      "Juventud",
      "Mujeres",
      "Personas Mayores",
      "Víctimas",
      "Comunidades Étnicas",
      "Campesinado"
    ],
    "capacidades": [
      "Gestión De Proyectos",
      "Comunicación",
      "Organización Comunitaria",
      "Incidencia"
    ],
    "busca": [
      "Financiación",
      "Alianzas Estratégicas",
      "Visibilidad",
      "Todas"
    ],
    "ofrece": [
      "Movilización Comunitaria",
      "Facilitación",
      "Articulación Territorial",
      "Formación"
    ],
    "experiencia": 2020,
    "disponible_alianzas": true,
    "que_hace": "Es un puente de articulación comunitaria y territorial en zonas de alta ladera en general, pero enfocado en formar y capacitar a la comunidad en gestión del riesgo para prevenir desastres, fortalecer la resiliencia local y proteger el territorio. Propósito central: Ser puente de formación y articulación comunitaria. Foco de acción: Gestión integral del riesgo en zonas de alta ladera. Estrategia: Educación popular, articulación territorial y trabajo comunitario directo.",
    "problema": "Transformar la inequidad y la pobreza —las verdaderas causas que llevan a tantas familias a habitar zonas de riesgo en las laderas— acompañando a la comunidad con amor, formación y articulación para construir un territorio más justo, seguro y digno para todos.",
    "con_quien": "Aunque nuestro trabajo resuena en toda la ciudad y la zona oriental, nuestro corazón y casa base están en el barrio La Honda (Comuna 3 - Manrique, Medellín). Desde la casa comunitaria de Somos por Naturaleza, echamos raíces para formar, articular y tejer territorio con la gente.",
    "que_ofrece_largo": "Ofrecemos formación integral en gestión del riesgo y soluciones basadas en la naturaleza, intercambio de saberes comunitarios con otros procesos de la ciudad y alianzas estratégicas de responsabilidad social empresarial para dinamizar la transformación del territorio.",
    "frase_vision": "«La fuerza está en lo colectivo» «Estamos a tiempo de atender lo importante para no tener que correr tras lo urgente y, sobre todo, para salvar vidas.»",
    "alianzas_activas": "Corporación Proyecto NN, Corporación de Victimas y Sobrevivientes del Barrio La Honda, La Otra Ciudad, La Mesa de Viendida y Hábitat de la Comuna 8, Corporación Región, El Convite, Colectivo No Solo de Pan Vive El Hambre, Corporación EveryDay Homeless, entre otros.",
    "proyecto_autogestion": "Si, pues tengo muchos amigos y amigas este espacio pero estoy contruyendo alianzas con Isabel Sánchez para trabajar en la gestión del riesgo, la vida digna y el buen vivir. Tambien con Camilo Quintero y el Convite de Ambiente, varios hacemos parte del coelctivo y queremos seguir apostado a temas colectivos pero no tengo claro sobre que.",
    "contacto": {
      "email": "colectivopornaturaleza@gmail.com y mayarestrepolaura@gmail.com",
      "telefono": "+57321629'0935",
      "web": "En construcción",
      "instagram": "https://www.instagram.com/somosxnaturaleza/"
    },
    "foto": "images/lideres/laura-maya-restrepo-34-0.webp"
  },
  {
    "id": "catalina-mejia",
    "numero": "36",
    "nombre": "Catalina Mejia",
    "organizacion": "Reserva Manakai",
    "territorio": "Planeta Rica, Córdoba",
    "municipio": "Planeta Rica",
    "fotos": [
      "catalina-mejia-35-0-primary.webp",
      "catalina-mejia-35-1.webp",
      "catalina-mejia-35-2.webp"
    ],
    "causas": [
      "Educación",
      "Cultura",
      "Ambiente"
    ],
    "poblacion": [
      "Niñez",
      "Campesinado"
    ],
    "capacidades": [
      "Gestión De Proyectos",
      "Desarrollo Sostenible",
      "Conservación Ambiental"
    ],
    "busca": [
      "Mentoría",
      "Voluntariado",
      "Alianzas Estratégicas"
    ],
    "ofrece": [
      "Consultoría",
      "Investigación"
    ],
    "experiencia": 10,
    "disponible_alianzas": true,
    "que_hace": "Manakai es una Reserva Natural de la Sociedad Civil dedicada a la conservación y restauración del Bosque Seco Tropical y sus ecosistemas asociados. Desarrolla acciones de restauración ecológica, monitoreo de la biodiversidad, investigación y educación ambiental, promoviendo la convivencia entre las comunidades locales y la naturaleza. También impulsa modelos de producción agropecuaria sostenible que contribuyen a la conservación y generan oportunidades para el desarrollo local.",
    "problema": "Manakai contribuye a enfrentar la pérdida y fragmentación del Bosque Seco Tropical, uno de los ecosistemas más amenazados de Colombia, y la disminución de su biodiversidad. A través de la conservación, restauración ecológica, monitoreo de fauna y trabajo con las comunidades vecinas, busca recuperar hábitats, fortalecer la conectividad ecológica y las relaciones entre los seres humanos y la naturaleza.",
    "con_quien": "Población campesina de la Vereda El Balsal en Planeta Rica, Córdoba",
    "que_ofrece_largo": "Manakai ofrece un espacio para implementar, probar y demostrar soluciones de conservación, restauración y producción sostenible en Bosque Seco Tropical. Cuenta con capacidades para el monitoreo de biodiversidad, restauración ecológica, educación ambiental y articulación con comunidades locales, así como con conocimiento del territorio y de sus dinámicas socioambientales. Está abierta a alianzas para desarrollar educación ambiental, investigación, fortalecer capacidades, movilizar recursos y generar soluciones replicables para la conservación y el desarrollo sostenible.",
    "frase_vision": "Promovemos el bienestar de todas las formas de vida, el uso sostenible de la biodiversidad y la gobernanza territorial, inspirando transformaciones comunitarias hacia un equilibrio armónico y duradero entre el ser humano y la naturaleza.",
    "alianzas_activas": "CVS, Parques Nacionales, Universidad de Córdoba",
    "proyecto_autogestion": "Estoy dispuesta a apoyar iniciativas lideradas por participantes de cien x cien",
    "contacto": {
      "email": "bosquemanakai@gmail.com",
      "telefono": "+573214687912",
      "web": "https://reservamanakai.com/",
      "instagram": "@reservamanakai"
    },
    "foto": "images/lideres/catalina-mejia-35-0-primary.webp"
  },
  {
    "id": "david-alzate-henao",
    "numero": "37",
    "nombre": "David Alzate Henao",
    "organizacion": "Grupo Cotrading",
    "territorio": "Comuna 14",
    "municipio": "Medellín",
    "fotos": [
      "david-alzate-henao-36-0-primary.webp",
      "david-alzate-henao-36-1.webp",
      "david-alzate-henao-36-2.webp"
    ],
    "causas": [
      "Educación",
      "Ambiente",
      "Emprendimiento"
    ],
    "poblacion": [
      "Juventud",
      "Personas Mayores",
      "Campesinado"
    ],
    "capacidades": [
      "Formación",
      "Organización Comunitaria",
      "Economía Solidaria"
    ],
    "busca": [
      "Formación",
      "Alianzas Estratégicas",
      "Visibilidad"
    ],
    "ofrece": [
      "Formación",
      "Consultoría",
      "Articulación Territorial"
    ],
    "experiencia": 15,
    "disponible_alianzas": true,
    "que_hace": "Ayudo a personas y empresas hacer viable financiera y estratégicamente su idea de negocio",
    "problema": "Estructura Financiera, operativa y estratégica de tu idea de negocio",
    "con_quien": "Emprendedores, campesinos, universitarios",
    "que_ofrece_largo": "Consulotoria, modelo de trabajo, acompañamiento",
    "frase_vision": "Ayudo a transformar tus ideas en oportunides y negocios",
    "alianzas_activas": "Pograma MEGA - Cámara de Comercio de Medellín",
    "proyecto_autogestion": "Si, emprendimiento ecologico y ambiental",
    "contacto": {
      "email": "dalzat1010@gmail.com",
      "telefono": "+573217526280",
      "web": "www.linkedin.com/in/david-alzate-henao-676a23371",
      "instagram": "www.linkedin.com/in/david-alzate-henao-676a23371"
    },
    "foto": "images/lideres/david-alzate-henao-36-0-primary.webp"
  },
  {
    "id": "laura-vasquez",
    "numero": "38",
    "nombre": "Laura Vásquez",
    "organizacion": "Independiente",
    "territorio": "Comuna 14 - Medellín",
    "municipio": "Medellín",
    "fotos": [
      "laura-vasquez-37-1-primary.webp",
      "laura-vasquez-37-0.webp",
      "laura-vasquez-37-2.webp"
    ],
    "causas": [
      "Salud Mental",
      "Mujeres"
    ],
    "poblacion": [
      "Niñez",
      "Juventud",
      "Mujeres"
    ],
    "capacidades": [
      "Formación",
      "Gestión De Proyectos",
      "Comunicación"
    ],
    "busca": [
      "Mentoría",
      "Formación",
      "Alianzas Estratégicas"
    ],
    "ofrece": [
      "Formación",
      "Consultoría",
      "Facilitación"
    ],
    "experiencia": 8,
    "disponible_alianzas": true,
    "que_hace": "Tengo como misión compartir herramientas de diferentes ámbitos enfocadas en el bienestar integral de los seres",
    "problema": "Problemas enfocados en la salud mental, bienestar emocional y regulación físico energética",
    "con_quien": "Población propensa o transitando problemas de salud mental severa",
    "que_ofrece_largo": "Capacitaciones de bienestar integral, consultas, prácticas somáticas",
    "frase_vision": "La verdadera transformación no comienza cuando te conviertes en alguien nuevo, sino cuando reconoces tu esencia y actúas en coherencia con tu ser",
    "alianzas_activas": "",
    "proyecto_autogestion": "Me encantaría poder aportar una semilla a nuestra ciudad.",
    "contacto": {
      "email": "Laurisj96@hotmail.com",
      "telefono": "+573054310904",
      "web": null,
      "instagram": "Laju96"
    },
    "foto": "images/lideres/laura-vasquez-37-1-primary.webp"
  },
  {
    "id": "carolina-jimenez-gonzalez",
    "numero": "39",
    "nombre": "Carolina Jiménez González",
    "organizacion": "Fundación Juanfe",
    "territorio": "Comuna 10 - Medellín",
    "municipio": "Medellín",
    "fotos": [
      "carolina-jimenez-gonzalez-38-2-primary.webp",
      "carolina-jimenez-gonzalez-38-0.webp",
      "carolina-jimenez-gonzalez-38-1.webp"
    ],
    "causas": [
      "Salud Mental",
      "Educación",
      "Juventud",
      "Mujeres"
    ],
    "poblacion": [
      "Niñez",
      "Juventud",
      "Mujeres"
    ],
    "capacidades": [
      "Formación"
    ],
    "busca": [
      "Formación",
      "Alianzas Estratégicas",
      "Visibilidad"
    ],
    "ofrece": [
      "Articulación Territorial"
    ],
    "experiencia": 8,
    "disponible_alianzas": true,
    "que_hace": "Acompañar madres adolescentes de la ciudad de Medellín y área metropolitana para romper ciclos de pobreza y generar transformación",
    "problema": "romper ciclos de pobreza, generar transformación y prevención de embarazos subsecuentes",
    "con_quien": "madres adolescentes de la ciudad de Medellín y área metropolitana (desde los 13 a los 21 años)",
    "que_ofrece_largo": "Formación técnica para las madres adolescentes que se vinculen a la Juafe y acompañamiento psicosocial, salud y nutrición",
    "frase_vision": "Transformando el mundo, una mujer a la vez",
    "alianzas_activas": "Alcaldía de Medellín, Unidad de niñez, Tejiendo Hogares, Comfama, Cesde",
    "proyecto_autogestion": "",
    "contacto": {
      "email": "carolina.gonzalez@juanfe.org",
      "telefono": "+573147926029",
      "web": null,
      "instagram": null
    },
    "foto": "images/lideres/carolina-jimenez-gonzalez-38-2-primary.webp"
  },
  {
    "id": "paula-andrea-roldan",
    "numero": "40",
    "nombre": "Paula Andrea Roldán",
    "organizacion": "Fundación Solidaridad Sin Límites",
    "territorio": "Nacional",
    "municipio": "Medellín",
    "fotos": [
      "paula-andrea-roldan-39-0.webp",
      "paula-andrea-roldan-39-1.webp",
      "paula-andrea-roldan-39-2.webp"
    ],
    "causas": [
      "Derechos Humanos",
      "Salid Fisica",
      "Emocional",
      "Seguridad Alimentos"
    ],
    "poblacion": [
      "Todas Las Anteriores"
    ],
    "capacidades": [
      "Formación",
      "Incidencia",
      "Organización Comunitaria",
      "Mediación De Conflictos"
    ],
    "busca": [
      "Financiación",
      "Voluntariado",
      "Alianzas Estratégicas"
    ],
    "ofrece": [
      "Formación",
      "Facilitación",
      "Articulación Territorial"
    ],
    "experiencia": 14,
    "disponible_alianzas": true,
    "que_hace": "SOLSILI ha desarrollado un modelo integral que articula: - Atención en salud primaria Medicina - familiar, enfermeria, nutrición, - fisioterapia, odontologia, psicologia, - farmacia, asesorias juridicas) - Salud mental acompañamiento - psicosocial - Orientación en derechos - Educación preventiva - Sostenibilidad ambiental",
    "problema": "Transformando el acceso a la salud y la dignidad en territorios vulnerables +1.200.000 atenciones | 15 departamentos | Colombia",
    "con_quien": "Trabajamos a nivel nacional",
    "que_ofrece_largo": "Salud+bienestar+economia circular: Nuestro modelo integra: Atención en salud Prevención ambiental Recuperación de residuos Generación de recursos sostenibles Impacto ambiental: 2.4 millones de litros de agua protegidos 190,5 kg de contaminación evitada",
    "frase_vision": "Cambiamos el mundo desde las pequeñas acciones.",
    "alianzas_activas": "Ejercito Nacional, Tecnologico de Antioquia, Corserba, Hogar Divina Providencia, Hope Humanitarian, Corberenice, Hogar María Auxiliadora",
    "proyecto_autogestion": "¿Te gustaría autogestionar algún proyecto? Sí. Me gustaría impulsar un proyecto social que genere cambios reales en comunidades de Medellín. ¿Qué proyecto impulsarías? Una iniciativa de liderazgo y voluntariado comunitario para identificar necesidades y convertirlas en acciones concretas. ¿Con quiénes y por qué? Con otros líderes de CienPorCien, jóvenes y profesionales con diferentes talentos, porque juntos podemos unir conocimiento, experiencia y voluntad de servicio para generar mayor impacto.",
    "contacto": {
      "email": "solidaridadsinlimites1@gmail.com",
      "telefono": "+573195151968",
      "web": "www.solidaridadsinlimites.org",
      "instagram": "https://www.instagram.com/solidaridadsinlimites/"
    },
    "foto": "images/lideres/paula-andrea-roldan-39-0.webp"
  },
  {
    "id": "camilo-quintero-giraldo",
    "numero": "41",
    "nombre": "Camilo Quintero Giraldo",
    "organizacion": "Convite de Ambiente",
    "territorio": "Belén, Laureles, Moravia, El Poblado",
    "municipio": "Medellín",
    "fotos": [
      "camilo-quintero-giraldo-40-0-primary.webp",
      "camilo-quintero-giraldo-40-1.webp",
      "camilo-quintero-giraldo-40-2.webp"
    ],
    "causas": [
      "Cultura",
      "Ambiente",
      "Participación Ciudadana"
    ],
    "poblacion": [
      "Juventud",
      "Mujeres",
      "Líderes Ambientales"
    ],
    "capacidades": [
      "Gestión De Proyectos",
      "Incidencia",
      "Mediación De Conflictos"
    ],
    "busca": [
      "Financiación",
      "Voluntariado",
      "Alianzas Estratégicas"
    ],
    "ofrece": [
      "Consultoría",
      "Investigación",
      "Articulación Territorial"
    ],
    "experiencia": 12,
    "disponible_alianzas": true,
    "que_hace": "Trabajo por ciudades y territorios más verdes, biodiversos y serenos. Lidero iniciativas ambientales y sociales como la Ley contra el Ruido (2450) y Ley de Ciudades Verdes y Biodiversas (Ley 2476) desde la política, el derecho y la participación ciudadana, buscando que las leyes se conviertan en cambios reales para la vida cotidiana.",
    "problema": "Ayudo a resolver problemas como la contaminación, el ruido, la pérdida de biodiversidad y el deterioro de nuestros espacios urbanos y naturales. Conecto a comunidades, empresas, instituciones y organizaciones para encontrar soluciones y lograr beneficios colectivos",
    "con_quien": "Trabajo principalmente con comunidades, organizaciones ambientales, colectivos ciudadanos, jóvenes, líderes sociales e instituciones públicas. Mi trabajo principal es especialmente en Antioquia y Medellín, pero también acompaño procesos en otras regiones de Colombia que defienden la serenidad, la sostenibilidad, la participación y una mejor calidad de vida.",
    "que_ofrece_largo": "Mi experiencia y conocimiento en temas ambientales, legislativos, jurídicos y políticos; tiempo y capacidad de gestión; difusión en redes sociales; una comunidad de voluntarios de El Convite; y, cuando corresponda, una curul en el Congreso puesta al servicio del interés colectivo (peticiones, debates de control político, audiencias públicas, proyectos de ley)",
    "frase_vision": "Una Colombia y una Antioquia donde cuidar la naturaleza, vivir con serenidad y encontrarnos en nuestras diferencias sea parte de la vida cotidiana.",
    "alianzas_activas": "Somos por Naturaleza, El Convite Político, Primero La Gente, Low Carbon City, Asociación Ambiente y Sociedad, Alianza Escazú",
    "proyecto_autogestion": "¿Te gustaría autogestionar algún proyecto para impactar positivamente Medellín junto a otrxs integrantes de CienPorCien? Sí. Me gustaría impulsar un proyecto que lleve prácticas de bienestar y serenidad a las 21 comunas de Medellín, conectando el yoga, el encuentro ciudadano y el cuidado del cuerpo y del territorio. ¿Qué proyecto impulsarías? Yoga en las 21 comunas de Medellín. La idea es realizar jornadas gratuitas de yoga y bienestar en distintos barrios y espacios públicos de la ciudad, acercando estas prácticas a personas que normalmente no tienen acceso a ellas. Más que hacer yoga, sería una excusa para encontrarnos, respirar, conversar y habitar la ciudad de otra manera. También me gustaría explorar otros proyectos como una Fiesta de la Serenidad, alrededor de la cultura, el arte y el cuidado, y una iniciativa de soberanía alimentaria que conecte alimentación, naturaleza y territorio. ¿Con quiénes te gustaría llevarlo a cabo y por qué consideras que serían un equipo ideal para hacerlo realidad? Para el proyecto de yoga me gustaría trabajar con MED, Manuela Mejía, Cristina Mejía y Erika Klinkert, porque cada una tiene experiencia, sensibilidad y capacidad para movilizar comunidades alrededor del bienestar y el yoga. Para la Fiesta de la Serenidad, sumaría a Ratón de Biblioteca y Conjugarte, porque tienen una relación muy bonita con la cultura, la lectura, el arte y el encuentro ciudadano. Y para trabajar la soberanía alimentaria, me gustaría hacerlo con Somos por Naturaleza, por su experiencia en conectar a las personas con la naturaleza y promover cambios en nuestra relación con el territorio y la alimentación.",
    "contacto": {
      "email": "cquintero8906@gmail.com",
      "telefono": "+573016601537",
      "web": "www.camideambiente.com",
      "instagram": "@camideambiente"
    },
    "foto": "images/lideres/camilo-quintero-giraldo-40-0-primary.webp"
  },
  {
    "id": "natalia-zuluaga-2",
    "numero": "42",
    "nombre": "Natalia Zuluaga",
    "organizacion": "Abogada litigante independiente",
    "territorio": "En las 16 comunas",
    "municipio": "Medellín",
    "fotos": [
      "natalia-zuluaga-2-41-1-primary.webp",
      "natalia-zuluaga-2-41-0.webp",
      "natalia-zuluaga-2-41-2.webp"
    ],
    "causas": [
      "Educación",
      "Juventud",
      "Mujeres",
      "Representación Judicial",
      "Defensa"
    ],
    "poblacion": [
      "Niñez",
      "Juventud",
      "Mujeres",
      "Personas Mayores",
      "Víctimas"
    ],
    "capacidades": [
      "Formación",
      "Gestión De Proyectos",
      "Representación Judicial",
      "Defensa En Sistema Penal De Adolescentes"
    ],
    "busca": [
      "Financiación",
      "Voluntariado",
      "Alianzas Estratégicas"
    ],
    "ofrece": [
      "Formación",
      "Consultoría",
      "Representación Judicial",
      "Defensa"
    ],
    "experiencia": 21,
    "disponible_alianzas": true,
    "que_hace": "Principalmente litigo en representaciòn de mujeres, hombres y adolescentes en procesos penales",
    "problema": "Resolver problemas en materia penal, asesoría y consultoría en materia penal, victimas muejeres de violencias basadas en genero y adolescentes vinculados al sistema de responsabilidad penal para adolescentes.",
    "con_quien": "Mujeres, hombres y adolescentes",
    "que_ofrece_largo": "asesoría y consultoría en materia penal. Violencias basadas en genero (explotación sexual - trata de personas, entre otros) y sistema penal para adolescentes.",
    "frase_vision": "Si garantizamos bienestar en los niños, estamos garantizando una mejor ciudad para los adultos",
    "alianzas_activas": "Musicreando",
    "proyecto_autogestion": "Quiero impulsar un proyecto que conecte jóvenes de todo Medellín. Los niños y chicos del sur y los de norte. Un Proyecto que ayude a prevenir la vinculación de jóvenes al mundo delincuencial.",
    "contacto": {
      "email": "nataliaprocentro@gmail.com",
      "telefono": "+573013665573",
      "web": "Natalia Zuluaga Rivera - Columnista opinión Colombiano",
      "instagram": "@natalia.zuluaga.rivera"
    },
    "foto": "images/lideres/natalia-zuluaga-2-41-1-primary.webp"
  },
  {
    "id": "patricia-buelvas-perez",
    "numero": "43",
    "nombre": "Patricia Buelvas Pérez",
    "organizacion": "EL COLEGIO COLEGIATURA",
    "territorio": "El Poblado, Medellín",
    "municipio": "Medellín",
    "fotos": [
      "patricia-buelvas-perez-42-0-primary.webp",
      "patricia-buelvas-perez-42-1.webp",
      "patricia-buelvas-perez-42-2.webp"
    ],
    "causas": [
      "Educación",
      "Juventud",
      "Paz"
    ],
    "poblacion": [
      "Juventud",
      "Adultos"
    ],
    "capacidades": [
      "Formación",
      "Comunicación"
    ],
    "busca": [
      "Financiación",
      "Alianzas Estratégicas"
    ],
    "ofrece": [
      "Formación",
      "Consultoría",
      "Facilitación"
    ],
    "experiencia": 12,
    "disponible_alianzas": true,
    "que_hace": "EL COLEGIO COLEGIATURA, además de su propósito de educación de jóvenes de los grados 10° y 11°, diseña, desarrolla e implementa vivencias formativas para jóvenes y adultos encaminadas al reconocimiento del Potencial ilimitado de cada ser humano.",
    "problema": "Nuestras vivencias formativas propician el autorreconocimiento del valor y la dignidad individual y como consecuencia, del otro, y permite la posibilidad de expandir la creatividad como herramienta de transformación individual y social.",
    "con_quien": "Trabajo con jóvenes y adultos de Antioquia (Medellín, La Unión, Envigado, entre otros) y Córdoba (Montería, Cotorra, Tuchín, San Carlos, entre otros), y he trabajado con comunidades en Sucre.",
    "que_ofrece_largo": "Ofrecemos diseño, desarrollo e implementación de vivencias formativas para jóvenes y adultos en organizaciones y comunidades.",
    "frase_vision": "El futuro solo se construye en un presente continuo.",
    "alianzas_activas": "Alianza con la Fundación Mi Sangre",
    "proyecto_autogestion": "",
    "contacto": {
      "email": "vicerrectoria@elcolegio.edu.co",
      "telefono": "+573108298938",
      "web": "www.elcolegio.edu.co",
      "instagram": "Instagram: elcolegio.colegiatura"
    },
    "foto": "images/lideres/patricia-buelvas-perez-42-0-primary.webp"
  },
  {
    "id": "johan-bueno-madrid",
    "numero": "44",
    "nombre": "Johan Bueno Madrid",
    "organizacion": "Colegiatura Colombiana",
    "territorio": "El Poblado",
    "municipio": "Medellín",
    "fotos": [
      "johan-bueno-madrid-43-0.webp",
      "johan-bueno-madrid-43-1.webp",
      "johan-bueno-madrid-43-2.webp"
    ],
    "causas": [
      "Salud Mental",
      "Educación",
      "Emprendimiento"
    ],
    "poblacion": [
      "Juventud",
      "Personas Adultas En Búsqueda De La Expansión De Su Potenc…"
    ],
    "capacidades": [
      "Formación",
      "Gestión De Proyectos",
      "Comunicación"
    ],
    "busca": [
      "Financiación",
      "Alianzas Estratégicas",
      "Visibilidad"
    ],
    "ofrece": [
      "Consultoría",
      "Facilitación"
    ],
    "experiencia": 10,
    "disponible_alianzas": true,
    "que_hace": "Acompaño a seres humanos, organizaciones e instituciones a través de mentoría y consultoría en procesos de transformación que les permitan descubrir y desarrollar su potencial para crear nuevas posibilidades de impacto en su vida, su trabajo y su entorno. Diseño experiencias, metodologías y estrategias que integran creatividad, pensamiento estratégico y desarrollo humano para impulsar cambios conscientes y sostenibles.",
    "problema": "Muchas personas y organizaciones enfrentan desafíos complejos desde formas de pensar que ya no responden a las necesidades del presente. Mi trabajo consiste en ampliar esa manera de comprender la realidad, fortaleciendo la creatividad, el liderazgo y la capacidad de transformar los desafíos en oportunidades de crecimiento, innovación y bienestar colectivo.",
    "con_quien": "Trabajo con personas que desean potenciar sus capacidades y liderar procesos de transformación en su vida y su profesión, así como con estudiantes de pregrado y posgrado, emprendedores, líderes, empresas, organizaciones, instituciones educativas y entidades públicas interesadas en fortalecer la creatividad, la innovación y el desarrollo humano como motores de cambio social y organizacional.",
    "que_ofrece_largo": "Ofrezco mentoría, consultoría, metodologías, experiencias y procesos que integran creatividad estratégica, intervención creativa, desarrollo humano, innovación, educación y comunicación para fortalecer personas, equipos y organizaciones. Facilito la creación de proyectos, programas y experiencias que generan capacidades, promueven el aprendizaje y construyen soluciones con impacto en los territorios y las comunidades.",
    "frase_vision": "Contribuir a un mundo donde cada ser humano reconozca su potencial creador y lo transforme en acciones capaces de generar bienestar, innovación y evolución para las personas, las organizaciones y la sociedad.",
    "alianzas_activas": "",
    "proyecto_autogestion": "Sí, me gustaría gestionar un proyecto en el que lo que estamos desarrollando en Cien x Cien, pueda impactar a más personas desde el aula de clase y en entornos organizacionales.",
    "contacto": {
      "email": "especializaciones@colegiatura.edu.co",
      "telefono": "+573015805098",
      "web": "https://www.colegiatura.edu.co",
      "instagram": "https://www.instagram.com/jbuenomadrid?utm_source=qr"
    },
    "foto": "images/lideres/johan-bueno-madrid-43-0.webp"
  },
  {
    "id": "silvana-tobon-cardona",
    "numero": "45",
    "nombre": "Silvana Tobón Cardona",
    "organizacion": "Consultora sector cultural",
    "territorio": "Área Metropolitana Valle de Aburrá",
    "municipio": "Medellín",
    "fotos": [
      "silvana-tobon-cardona-44-0-primary.webp",
      "silvana-tobon-cardona-44-2.webp",
      "silvana-tobon-cardona-44-1.webp"
    ],
    "causas": [
      "Cultura",
      "Ambiente",
      "Paz",
      "Emprendimiento",
      "Derechos Humanos",
      "Participación Ciudadana",
      "Patrimonio"
    ],
    "poblacion": [
      "Niñez",
      "Juventud",
      "Mujeres",
      "Personas Mayores",
      "Víctimas",
      "Comunidades Étnicas",
      "Comunidad Lgbtiq+",
      "Campesinado",
      "Vigías Del Patrimonio",
      "Funcionarios Públicos"
    ],
    "capacidades": [
      "Gestión De Proyectos",
      "Investigación",
      "Arte",
      "Cultura"
    ],
    "busca": [
      "Financiación",
      "Mentoría",
      "Alianzas Estratégicas"
    ],
    "ofrece": [
      "Consultoría",
      "Investigación",
      "Articulación Territorial"
    ],
    "experiencia": 20,
    "disponible_alianzas": true,
    "que_hace": "Soy historiadora y gestora cultural con más de 15 años liderando proyectos de patrimonio, memoria y edición independiente en Colombia e Iberoamérica. Coordino, gestiono, investigo y evalúo iniciativas culturales para instituciones públicas, museos y redes internacionales.",
    "problema": "Ayudo a que el patrimonio cultural y la memoria cultural de territorios y comunidades no se pierdan ni queden desconectados del desarrollo local. Transformo procesos investigativos en proyectos ejecutables, medibles y con impacto sociocultural real.",
    "con_quien": "Trabajo con comunidades, juntas de acción comunal, instituciones públicas (alcaldías, Ministerio de Cultura), empresas privadas, ONGs y redes iberoamericanas, principalmente en Antioquia, Colombia y con aliados en España, Portugal y México.",
    "que_ofrece_largo": "Ejecución eficiente y transparente de recursos, con proyectos sostenibles ambiental y socialmente que han beneficiado múltiples comunidades y territorios de Antioquia e Iberoamérica. Impacto medible en bienestar poblacional, respaldado por entregables documentados y evaluación rigurosa de resultados.",
    "frase_vision": "Que la memoria y el patrimonio cultural de nuestros territorios se reconozcan como activos económicos que impulsan desarrollo sostenible, identidad y bienestar para las comunidades que los habitan.",
    "alianzas_activas": "Secretarías de Cultura de Tijuana, Baja California y Sonora, Promotora Cultural de BC en Tijuana, Fundación Juan Ramón Jiménez (España), Red Iberoamericana de Editores Independientes, ICOMOS Colombia, Emisora Latina Stereo Medellín, Fundación Rafael Alberti, Banco de la República, Globalkultura Bilbao, entre otros.",
    "proyecto_autogestion": "Sí, me interesa liderar un proyecto colaborativo que active el desarrollo territorial de la ciudad. Podría se un mapeo vivo que recoja memorias, oralidades y saberes de las comunidades, pero escalado como herramienta pública y sostenible. Me gustaria trabajar también con integrantes de CienPorCien que aporten perfiles complementarios en tecnología, comunicación y gestión comunitaria, para fortalecer un trabajo interdisciplinario con raíces territoriales. Así mismo, estoy abierta a sumarme y aportar mi experiencia a proyectos ya existentes dentro de la red.",
    "contacto": {
      "email": "silvanatoboncardona@gmail.com",
      "telefono": "+573192510485",
      "web": "https://www.linkedin.com/in/silvana-tobón-cardona-70462b16a?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      "instagram": "https://www.facebook.com/share/1BgVpysaeH/"
    },
    "foto": "images/lideres/silvana-tobon-cardona-44-0-primary.webp"
  },
  {
    "id": "manuela-tejada-agudelo",
    "numero": "46",
    "nombre": "Manuela Tejada Agudelo",
    "organizacion": "Manuela Tejada Comunicaciones",
    "territorio": "Comuna 14, El Poblado",
    "municipio": "Medellín",
    "fotos": [
      "manuela-tejada-agudelo-45-0-primary.webp",
      "manuela-tejada-agudelo-45-1.webp",
      "manuela-tejada-agudelo-45-2.webp"
    ],
    "causas": [
      "Educación",
      "Comunicación Asertiva Para La Vida",
      "Liderazgo",
      "Marca Personal",
      "Trabajo En Equipo"
    ],
    "poblacion": [
      "Juventud",
      "Mujeres",
      "Empresarios",
      "Emprendedores",
      "Creadores De Contenido"
    ],
    "capacidades": [
      "Formación",
      "Gestión De Proyectos",
      "Comunicación"
    ],
    "busca": [
      "Formación",
      "Alianzas Estratégicas",
      "Visibilidad"
    ],
    "ofrece": [
      "Formación",
      "Consultoría",
      "Facilitación"
    ],
    "experiencia": 4,
    "disponible_alianzas": true,
    "que_hace": "Ofrezco herramientas de comunicacion asertiva para la vida, a través de la expresión oral, corporal y escrita, que faciliten los procesos de liderazgo,, trabajo en equipo, atención al cliente y desarrollo de marca personal.",
    "problema": "Ayudo a las personas a vencer el pánico escénico, a encontrar su propia voz y estilo de comunicación, a transmitir su mensaje de forma clara y asertiva.",
    "con_quien": "Trabajo con empresas de todo tipo, emprendedores, creadores de contenido, grupo de mujeres y jóvenes.",
    "que_ofrece_largo": "ofrezco experiencia en comunicación estratégica, asertiva y entrenamiento en expresión oral y corporal, respaldada por más de 15 años de experiencia en medios, conferencias y talleres para empresas, instituciones y líderes.",
    "frase_vision": "Sueño con una sociedad donde hablemos para conectar, dejar huella y abrir caminos que antes parecían imposibles.",
    "alianzas_activas": "Bancolombia, Essity, Comfenalco, Alegra, Centro de Conciliación Avancemos.",
    "proyecto_autogestion": "",
    "contacto": {
      "email": "Mnltejada@gmail.com",
      "telefono": "+573016313753",
      "web": "N.A",
      "instagram": "@manuelatejadacomunicaciones"
    },
    "foto": "images/lideres/manuela-tejada-agudelo-45-0-primary.webp"
  },
  {
    "id": "andrea-jaramillo-ramirez",
    "numero": "47",
    "nombre": "Andrea Jaramillo Ramírez",
    "organizacion": "Proyecto Caliandra",
    "territorio": "Enviado - Támesis",
    "municipio": "Tamesis",
    "fotos": [
      "andrea-jaramillo-ramirez-46-0-primary.webp"
    ],
    "causas": [
      "Salud Mental",
      "Educación",
      "Derechos Humanos"
    ],
    "poblacion": [
      "Mujeres",
      "Personas Mayores"
    ],
    "capacidades": [
      "Formación",
      "Gestión De Proyectos",
      "Mediación De Conflictos",
      "Tecnología"
    ],
    "busca": [
      "Mentoría",
      "Alianzas Estratégicas",
      "Visibilidad"
    ],
    "ofrece": [
      "Formación",
      "Consultoría",
      "Facilitación"
    ],
    "experiencia": 1,
    "disponible_alianzas": true,
    "que_hace": "Acompaño a personas a acercarse a la muerte, desde la gracia y la curiosidad.",
    "problema": "A soltar un poco el miedo a la muerte propia y el miedo a la muerte de una persona cercana.",
    "con_quien": "- Personas que estén cerca a la muerte, sus familiares y personas cercanas. - Personas con el interés de acercarse a la muerte.",
    "que_ofrece_largo": "- Acompañamiento en nuevas perspectivas sobre la muerte. - Consultoría organizacional enfocada en acompañar a morir aquello que se debe dejar morir en una organización.",
    "frase_vision": "Morimos bonito porque aprendimos a vivir bonito. El regalo de la muerte.",
    "alianzas_activas": "",
    "proyecto_autogestion": "Sí me gustaría. Podría ser interesante crear un equipo con Daniel Restrepo para crear un programa para personas enfocado en acompañar la muerte de aquello que necesitamos dejar morir en nuestras vidas.",
    "contacto": {
      "email": "andreajaramilloramirez@gmail.com",
      "telefono": "+573207886067",
      "web": "NA",
      "instagram": "NA"
    },
    "foto": "images/lideres/andrea-jaramillo-ramirez-46-0-primary.webp"
  },
  {
    "id": "luna-marcela-osorio-villada",
    "numero": "48",
    "nombre": "Luna Marcela Osorio Villada",
    "organizacion": "Organización social PRESENCIA Colombo Suiza, Programa La Bellota",
    "territorio": "Llevamos a cabo el programa en 3 sectores: Comuna 80 - El Limonar; Comuna 13 - Blanquizal; Comuna 8 - La Sierra",
    "municipio": "Medellín",
    "fotos": [
      "luna-marcela-osorio-villada-47-0.webp",
      "luna-marcela-osorio-villada-47-1.webp",
      "luna-marcela-osorio-villada-47-2.webp"
    ],
    "causas": [
      "Educación",
      "Juventud",
      "Participación Ciudadana"
    ],
    "poblacion": [
      "Niñez",
      "Juventud"
    ],
    "capacidades": [
      "Formación",
      "Gestión De Proyectos",
      "Comunicación"
    ],
    "busca": [
      "Financiación",
      "Formación",
      "Alianzas Estratégicas"
    ],
    "ofrece": [
      "Consultoría",
      "Facilitación",
      "Articulación Territorial"
    ],
    "experiencia": 43,
    "disponible_alianzas": true,
    "que_hace": "Acompañamiento integral para la identificación, desarrollo, clarificación y fortalecimiento de las habilidades y capacidades de niños, niñas y jóvenes, mediante la educación experiencial. Este proceso busca que los participantes reconozcan sus intereses, talentos y vocaciones, y desarrollen herramientas para tomar decisiones informadas frente a su proyecto de vida y a la elección de programas de formación postsecundaria, articulando sus capacidades y expectativas con las oportunidades del sector productivo.",
    "problema": "Contribuye a disminuir las brechas de acceso y permanencia en oportunidades educativas y laborales, fortaleciendo en niños, niñas y jóvenes las habilidades, capacidades y conocimientos necesarios para construir proyectos de vida con mayores posibilidades de desarrollo. Busca prevenir decisiones educativas y vocacionales desinformadas, acercando a los participantes a diferentes experiencias, áreas de interés y oportunidades de formación, y favoreciendo una transición más pertinente hacia la educación postsecundaria y el mundo laboral.",
    "con_quien": "Trabajamos principalmente con niños, niñas y jóvenes de comunidades en contextos de vulnerabilidad social de Medellín, especialmente en los sectores de Limonar (comuna 80), Blanquizal (comuna 13) y La Sierra (Comuna 8). A través de un acompañamiento cercano, vinculamos también a sus familias y otros actores comunitarios, educativos e institucionales, reconociendo que el desarrollo integral y la construcción del proyecto de vida requieren del fortalecimiento de las redes de apoyo.",
    "que_ofrece_largo": "Ofrecemos experiencia en acompañamiento educativo, vocacional y comunitario; metodologías de educación experiencial y aprendizaje basado en el juego; conocimiento cercano de las necesidades y potencialidades de niños, niñas, jóvenes y sus familias; y capacidad para diseñar y desarrollar experiencias formativas. A nuestros aliados les ofrecemos la posibilidad de aportar conocimientos, experiencias, recursos, espacios y oportunidades que amplíen el acceso de los participantes a nuevos aprendizajes, referentes, áreas de interés, formación y oportunidades para su proyecto de vida.",
    "frase_vision": "Construir un futuro en el que cada niño, niña y joven pueda reconocer su potencial, descubrir su vocación y acceder a oportunidades que le permitan transformar su proyecto de vida y su entorno.",
    "alianzas_activas": "Fundación Vibra en Alta, Fundación Fraternidad, Fundación MUV, H.A Bicicletas, Fundación Sofia Pérez de Soto, Casa Ferretera.",
    "proyecto_autogestion": "Podría ser una estrategia de articulación de oportunidades para jóvenes en educación superior, dirigida a quienes se encuentran cursando programas técnicos, tecnológicos o carreras profesionales. La iniciativa buscaría generar alianzas con empresas, universidades, organizaciones sociales y otros actores de la ciudad para ampliar las posibilidades de los jóvenes de explorar nuevos campos vocacionales, fortalecer sus competencias y acercarse a diferentes escenarios de formación y desarrollo profesional. A través de estas alianzas se promoverían oportunidades como procesos de articulación académica, experiencias y horas de labor social, acercamiento al sector productivo, espacios de formación complementaria, mentorías y otras experiencias que les permitan ampliar sus redes y perspectivas sobre su futuro profesional y ocupacional. Además, como equipo estamos abiertos a la adquisición de nuevos procesos de formación, de manera que podamos contar con mayores herramientas para orientar y acompañar no solo a los jovenes sino también a todos los niños y niñas que se encuentran en las diferentes etapas del programa.",
    "contacto": {
      "email": "luna.osorio@presencia.org.co",
      "telefono": "+573102917931",
      "web": "https://presencia.org.co/",
      "instagram": "https://www.instagram.com/presenciacs?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
    },
    "foto": "images/lideres/luna-marcela-osorio-villada-47-0.webp"
  },
  {
    "id": "wayra-azul-acurio",
    "numero": "49",
    "nombre": "Wayra Azul Acurio",
    "organizacion": "El llamado",
    "territorio": "Sna Sebastián de palmitas",
    "municipio": "Medellín",
    "fotos": [
      "wayra-azul-acurio-48-0.webp",
      "wayra-azul-acurio-48-1.webp",
      "wayra-azul-acurio-48-3.webp"
    ],
    "causas": [
      "Salud Mental",
      "Ambiente"
    ],
    "poblacion": [
      "Mujeres"
    ],
    "capacidades": [
      "Arte",
      "Cultura"
    ],
    "busca": [
      "Financiación",
      "Alianzas Estratégicas"
    ],
    "ofrece": [
      "Formación",
      "Facilitación",
      "Articulación Territorial"
    ],
    "experiencia": 5,
    "disponible_alianzas": true,
    "que_hace": "Hago retiros y experiencias para conectar con el ser. A través del liderazgo en la comunidad quiero implementar la vinculación con el territorio y su naturaleza.",
    "problema": "Parar. Detenerse ante la inmediata de vivir un día a día sin sentido. Conectarse con un espacio donde pueden elegir diferente, experimentar paz y tranquilidad.",
    "con_quien": "Por ahora mi acompañamiento ha sido para mujeres, en adelante será para el corregimiento.",
    "que_ofrece_largo": "Me gustaría crear un grupo de seres enfocados en esta línea para expandir estos encuentros y llegar a más personas en Medellín pueden contar con la facilitación en diferentes técnicas y vivir las experiencias de cerca.",
    "frase_vision": "Somos el puente para que otros puedan cruzar",
    "alianzas_activas": "Todavia estoy sola",
    "proyecto_autogestion": "Si, me gustaría iniciar con actividades de arte que vinculen a la ciudadania, connmurales de accion poetica que lindo que cien x cien se anime a dejar huella en los muros de Medellín.",
    "contacto": {
      "email": "Wayrawellnes@gmail.com",
      "telefono": "+573044331784",
      "web": null,
      "instagram": "@wayra_el.llamado"
    },
    "foto": "images/lideres/wayra-azul-acurio-48-0.webp"
  },
  {
    "id": "manuela-cifuentes-de-los-rios",
    "numero": "50",
    "nombre": "Manuela Cifuentes De los Rios",
    "organizacion": "Alcaldía de Medellín - Parceros Creadores",
    "territorio": "Toda la ciudad de Medellín",
    "municipio": "Medellín",
    "fotos": [
      "manuela-cifuentes-de-los-rios-49-2.webp",
      "manuela-cifuentes-de-los-rios-49-0.webp",
      "manuela-cifuentes-de-los-rios-49-1.webp"
    ],
    "causas": [
      "Salud Mental",
      "Juventud",
      "Proyecto De Vida",
      "Oportunidades"
    ],
    "poblacion": [
      "Juventud"
    ],
    "capacidades": [
      "Incidencia",
      "Mediación De Conflictos",
      "Arte",
      "Cultura"
    ],
    "busca": [
      "Formación",
      "Alianzas Estratégicas",
      "Visibilidad"
    ],
    "ofrece": [
      "Consultoría",
      "Investigación",
      "Articulación Territorial"
    ],
    "experiencia": 2,
    "disponible_alianzas": true,
    "que_hace": "Coordino el equipo de mentores que acompañan a los jovenes (Parceros) durante el tiempo que dura el programa. Además realizó articulaciones para llevar oportunidades reales a los jóvenes",
    "problema": "Disminuye la vinculación de los jóvenes en grupos armados. además promueve y otorga oportunidades de empleo y de formación de acuerdo a sus capacidades y contexto",
    "con_quien": "Alcaldía de Medellín en todas sus comunas y corregimientos. su población son jóvenes entre 14 y 28 años",
    "que_ofrece_largo": "Articulación publico - privada. Asesoría y acompañamiento frente a la realidad de la población. Jóvenes dispuestos y listos para el mundo laboral y educativo. Capacidad de convocatoria y movilización",
    "frase_vision": "Construir una Medellín donde cada joven pueda reconocer su potencial, conectar con nuevas oportunidades y convertirse en protagonista de la transformación de su territorio.",
    "alianzas_activas": "",
    "proyecto_autogestion": "Sí. Impulsaría el LABORatorio de Otredades, un espacio de encuentro y exploración para jóvenes que promueva el autoconocimiento, la conciencia relacional y el reconocimiento del otro como posibilidad de transformación. Me gustaría desarrollarlo con integrantes de CienPorCien con perfiles diversos —desde la psicología, el arte, el diseño, la educación y el trabajo comunitario— porque justamente creo que las distintas miradas y saberes son las que permiten crear soluciones más creativas y pertinentes para Medellín. La idea sería construir el proyecto con los territorios y sus jóvenes, no simplemente para ellos.",
    "contacto": {
      "email": "manuelacifuentesd@gmail.com",
      "telefono": "+573182901428",
      "web": null,
      "instagram": "@manuelacifuentesd"
    },
    "foto": "images/lideres/manuela-cifuentes-de-los-rios-49-2.webp"
  },
  {
    "id": "juan-sebastian-aguirre-echavarria",
    "numero": "51",
    "nombre": "Juan Sebastián Aguirre Echavarría",
    "organizacion": "Organziaciones sociales",
    "territorio": "Comuna 8 y 9 (Villa Hermosa, Buenos Aires) Medellín",
    "municipio": "Medellín",
    "fotos": [
      "juan-sebastian-aguirre-echavarria-50-0-primary.webp",
      "juan-sebastian-aguirre-echavarria-50-1.webp",
      "juan-sebastian-aguirre-echavarria-50-2.webp"
    ],
    "causas": [
      "Educación",
      "Juventud",
      "Emprendimiento",
      "Participación Ciudadana"
    ],
    "poblacion": [
      "Juventud"
    ],
    "capacidades": [
      "Formación",
      "Gestión De Proyectos",
      "Organización Comunitaria"
    ],
    "busca": [
      "Mentoría",
      "Voluntariado",
      "Alianzas Estratégicas",
      "Visibilidad"
    ],
    "ofrece": [
      "Formación",
      "Consultoría",
      "Facilitación",
      "Articulación Territorial"
    ],
    "experiencia": 3,
    "disponible_alianzas": true,
    "que_hace": "Acompaño, formo y oriento a los jóvenes de la ciudad en un proyecto llamado El Líder Sos Vos, desde allí acompañamos a los líderes en sus habilidades y fortalezas de liderazgo estudiantil. Los visibilizamos desde el territorio con la administración municipal.",
    "problema": "Es necesario liderazgos jovenes y tempranos en los establecimientos educativos que tengan el contexto y la capacidad de resolver y ejecutar en sus establecimientos educativos con las problemáticas actuales.",
    "con_quien": "Jovenes, líderes estudiantiles, comunidades barriales y comunales.",
    "que_ofrece_largo": "Conocimientos, voluntariado, conexiónes y cercanía con entidades del sector público.",
    "frase_vision": "Unidos y en comunidad se resuelven y se ejecutan más acciones.",
    "alianzas_activas": "Plataforma de juventud de Medellín, Veeduría Todos por Medellín.",
    "proyecto_autogestion": "",
    "contacto": {
      "email": "sebastian.aguirre0515@gmail.com",
      "telefono": "+573202388443",
      "web": null,
      "instagram": "@ssebasaguirre"
    },
    "foto": "images/lideres/juan-sebastian-aguirre-echavarria-50-0-primary.webp"
  },
  {
    "id": "melissa-cardona-sanchez",
    "numero": "52",
    "nombre": "Melissa Cardona Sánchez",
    "organizacion": "Comfama",
    "territorio": "Poblado",
    "municipio": "Medellín",
    "fotos": [
      "melissa-cardona-sanchez-lideres-melissa-cardona-3-primary.webp",
      "melissa-cardona-sanchez-lideres-melissa-cardona-2.webp",
      "melissa-cardona-sanchez-lideres-melissa-cardona-4.webp"
    ],
    "causas": [
      "Capitalismo Consciente",
      "Liderazgo Empresarial"
    ],
    "poblacion": [
      "Lideres Empresariales"
    ],
    "capacidades": [
      "Formación",
      "Eventos De Sensibilización"
    ],
    "busca": [
      "Formación",
      "Alianzas Estratégicas",
      "Visibilidad"
    ],
    "ofrece": [
      "Formación",
      "Espacios De Inspiracion"
    ],
    "experiencia": 8,
    "disponible_alianzas": true,
    "que_hace": "Desde Inspiración de la Gerencia Social de Comfama identificamos y traducimos tendencias, señales de cambio y conocimiento relevante para ayudar a líderes y organizaciones a comprender los desafíos del presente y anticipar los del futuro. Convertimos información y evidencia en contenidos, conversaciones y experiencias que amplían perspectivas, provocan nuevas preguntas y movilizan a la acción, contribuyendo a construir empresas más conscientes y conectadas con las transformaciones de las personas, las organizaciones y los territorios.",
    "problema": "Ayudamos a cerrar la brecha entre la abundancia de información y la capacidad de convertirla en conocimiento útil para la acción. Ante un entorno de cambios acelerados, identificamos y damos sentido a tendencias, señales y desafíos relevantes para que líderes y organizaciones puedan comprender mejor su contexto, anticipar transformaciones y tomar decisiones más informadas y conscientes, conectando sus retos empresariales con las realidades de las personas y los territorios.",
    "con_quien": "Trabajamos principalmente con líderes empresariales y organizaciones de Antioquia, especialmente aquellas vinculadas a Comfama, que tienen la capacidad de incidir en la transformación de sus empresas y entornos. A través de ellos buscamos amplificar el impacto hacia trabajadores, familias y territorios, conectando las conversaciones empresariales con los desafíos sociales, económicos y humanos de la región.",
    "que_ofrece_largo": "La posibilidad de generar alianzas o contratar proveedores para el conocimiento sobre tendencias y señales de cambio, capacidad de análisis y lectura de contexto, curaduría y producción de contenidos, construcción de narrativas y diseño de conversaciones y experiencias que conectan los desafíos empresariales con las transformaciones sociales y del territorio. Así como construir conjuntamente agendas y contenidos que generen valor para las organizaciones y sus líderes.",
    "frase_vision": "Inspirar nuevas formas de comprender el presente para imaginar y construir mejores futuros para las empresas, las personas y los territorios.",
    "alianzas_activas": "",
    "proyecto_autogestion": "",
    "contacto": {
      "email": "melissacardona@comfama.com.co",
      "telefono": "+573008689956",
      "web": "https://www.comfama.com/gerencia-social/",
      "instagram": "https://www.linkedin.com/in/melissa-cardona-sánchez-5316a671?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
    },
    "foto": "images/lideres/melissa-cardona-sanchez-lideres-melissa-cardona-3-primary.webp"
  },
  {
    "id": "doris-elena-ospina-munoz",
    "numero": "53",
    "nombre": "Doris Elena Ospina Muñoz",
    "organizacion": "Grupo Scout Primero UdeA",
    "territorio": "Comuna 4",
    "municipio": "Medellín",
    "fotos": [
      "doris-elena-ospina-munoz-52-0.webp",
      "doris-elena-ospina-munoz-52-1.webp",
      "doris-elena-ospina-munoz-52-2.webp"
    ],
    "causas": [
      "Salud Mental",
      "Educación",
      "Juventud"
    ],
    "poblacion": [
      "Niñez",
      "Juventud"
    ],
    "capacidades": [
      "Formación",
      "Gestión De Proyectos"
    ],
    "busca": [
      "Financiación",
      "Voluntariado",
      "Alianzas Estratégicas"
    ],
    "ofrece": [
      "Formación",
      "Facilitación"
    ],
    "experiencia": 20,
    "disponible_alianzas": true,
    "que_hace": "Formación para la vida y ciudadanía basados en el método scout.",
    "problema": "Formación en 5 dimensiones del desarrollo humano, corporalidad, afectividad, creatividad, espiritualidad y carácter.",
    "con_quien": "Niños, niñas, adolescentes, jóvenes y adultos.",
    "que_ofrece_largo": "Programas de formación basados en el método scout",
    "frase_vision": "Siempre Listos Para Servir",
    "alianzas_activas": "Universidad de Antioquia.",
    "proyecto_autogestion": "Sí, al Grupo Scout Primero le encantaría establecer alianzas con otras organizaciones para apoyar procesos y marcha y gestionar nuevas experiencias se formación a partir de la filosofía y el método scout. Especialmemte a nivel empresarial y comunitario con organizaciones que trabajen en Bienestar emocional y desarrollo.",
    "contacto": {
      "email": "Presidenteconsejo@gruposcoutprimero.org",
      "telefono": "+573145219851",
      "web": "https://www.instagram.com/gruposcoutprimero?igsh=aDQzMnFjMXllcTVs",
      "instagram": "https://www.instagram.com/gruposcoutprimero?igsh=aDQzMnFjMXllcTVs"
    },
    "foto": "images/lideres/doris-elena-ospina-munoz-52-0.webp"
  },
  {
    "id": "sara-gallego-guarin",
    "numero": "54",
    "nombre": "Sara Gallego Guarin",
    "organizacion": "Fundación Juanfe",
    "territorio": "Comuna 10 - La Candelaria",
    "municipio": "Medellín",
    "fotos": [
      "sara-gallego-guarin-53-0.webp",
      "sara-gallego-guarin-53-1.webp",
      "sara-gallego-guarin-53-2.webp"
    ],
    "causas": [
      "Salud Mental",
      "Educación",
      "Mujeres"
    ],
    "poblacion": [
      "Juventud",
      "Mujeres"
    ],
    "capacidades": [
      "Gestión De Proyectos",
      "Organización Comunitaria"
    ],
    "busca": [
      "Mentoría",
      "Formación",
      "Alianzas Estratégicas"
    ],
    "ofrece": [
      "Articulación Territorial"
    ],
    "experiencia": 25,
    "disponible_alianzas": true,
    "que_hace": "Acompaño procesos sociales con jóvenes madres y sus familias en la Fundación Juanfe, fortaleciendo redes de apoyo, proyecto de vida y articulación con aliados estratégicos para generar oportunidades y transformación social.",
    "problema": "Contribuyo a abordar las barreras sociales, familiares y educativas que pueden limitar las oportunidades de jóvenes madres. A través del acompañamiento social, el fortalecimiento de redes de apoyo y la articulación con aliados, buscamos favorecer su permanencia en los procesos de formación, fortalecer sus proyectos de vida y ampliar sus oportunidades para construir una vida con mayor autonomía.",
    "con_quien": "Madres adolescentes del área metropolitana, principalmente la ciudad de Medellín.",
    "que_ofrece_largo": "La Fundación Juanfe ofrece experiencia y conocimiento en el acompañamiento de jóvenes madres y sus familias, así como una metodología de intervención social orientada a fortalecer sus capacidades y oportunidades. Cuenta con experiencia en articulación con organizaciones, empresas e instituciones, facilitando alianzas que permiten conectar recursos, conocimientos y oportunidades con las necesidades de las jóvenes y sus territorios.",
    "frase_vision": "Ser una organización referente en la transformación social de jóvenes madres, generando oportunidades sostenibles que impacten sus vidas, familias y territorios.",
    "alianzas_activas": "No aplica",
    "proyecto_autogestion": "Impulsaría un proyecto de articulación de alianzas que conecte a Juanfe con integrantes de CienPorCien y sus organizaciones para generar nuevas oportunidades para las jóvenes madres y sus familias. Tomaría como referencia alianzas existentes, como la de Juanfe con Vibra en Alta, para identificar capacidades y recursos que puedan convertirse en iniciativas de impacto. Me gustaría trabajar con personas de diferentes disciplinas, porque sus conocimientos permitirían construir soluciones innovadoras, viables y alineadas con las necesidades del territorio. No partiría de crear algo nuevo desde cero, sino de conectar capacidades que ya existen para potenciar iniciativas que respondan a necesidades reales.",
    "contacto": {
      "email": "Sara.g@juanfe.org",
      "telefono": "+573218582252",
      "web": "https://juanfe.org/",
      "instagram": "https://www.instagram.com/fundacionjuanfe?igsh=cTc2eDh2M2JoYTB5"
    },
    "foto": "images/lideres/sara-gallego-guarin-53-0.webp"
  },
  {
    "id": "adriana-elizabeth-acosta-orozco",
    "numero": "55",
    "nombre": "Adriana Elizabeth Acosta Orozco",
    "organizacion": "Solidaridad sin límites",
    "territorio": "Medellín",
    "municipio": "Medellín",
    "fotos": [
      "adriana-elizabeth-acosta-orozco-54-2-primary.webp",
      "adriana-elizabeth-acosta-orozco-54-1.webp",
      "adriana-elizabeth-acosta-orozco-54-0.webp"
    ],
    "causas": [
      "Bienestar Integral En La Fundación Realizamos De Todas La…"
    ],
    "poblacion": [
      "Con Toda La Población Vulnerable"
    ],
    "capacidades": [
      "Organización Comunitaria",
      "Mediación De Conflictos",
      "Economía Solidaria"
    ],
    "busca": [
      "Financiación",
      "Mentoría",
      "Alianzas Estratégicas"
    ],
    "ofrece": [
      "Formación",
      "Movilización Comunitaria",
      "Articulación Territorial"
    ],
    "experiencia": 5,
    "disponible_alianzas": true,
    "que_hace": "Yo pertenezco al área de logística en l fundación",
    "problema": "Somos una organización de bienestar integral y por ende abarcamos muchas áreas sobre todo de la salud",
    "con_quien": "Población vulnerable a nivel nacional",
    "que_ofrece_largo": "Ofrecemos nuestro equipo de voluntarios están capacitados en varias áreas desde médicos ,abogados ,psicología",
    "frase_vision": "Acciones",
    "alianzas_activas": "Putamente poderosas",
    "proyecto_autogestion": "Si el proyecto sería una clínica móvil que pueda llevar salud a más territorios de Colombia con quién con todo los aliados que sean del sector salud y comunicaciones",
    "contacto": {
      "email": "adrianaacosta1975@gmail.com",
      "telefono": "+573197713486",
      "web": "Solidaridadsinlimites.com",
      "instagram": "Solidaridadsinlimites"
    },
    "foto": "images/lideres/adriana-elizabeth-acosta-orozco-54-2-primary.webp"
  },
  {
    "id": "daniel-restrepo",
    "numero": "56",
    "nombre": "Daniel Restrepo",
    "organizacion": "Tenemos que hablar",
    "territorio": "Poblado, Medellin",
    "municipio": "Medellín",
    "fotos": [
      "daniel-restrepo-55-0.webp"
    ],
    "causas": [
      "Salud Mental",
      "Emprendimiento"
    ],
    "poblacion": [
      "Cualquier Persona"
    ],
    "capacidades": [
      "Formación",
      "Comunicación",
      "Incidencia"
    ],
    "busca": [
      "Mentoría",
      "Formación",
      "Alianzas Estratégicas"
    ],
    "ofrece": [
      "Formación",
      "Consultoría",
      "Articulación Territorial"
    ],
    "experiencia": 10,
    "disponible_alianzas": true,
    "que_hace": "Promover la salud mental y la importancia de cuidarnos.",
    "problema": "Promoción y prevención en salud mental",
    "con_quien": "Cualquier persona que quiera acercarse a la salud mental. Hoy principalmente Medellin y Colombia en general.",
    "que_ofrece_largo": "Canales de comunicación, articulación para crecer y facilitar exposición.",
    "frase_vision": "”Hablando, tus miedos se parecen a los míos y se hacen más pequeños”",
    "alianzas_activas": "N/A",
    "proyecto_autogestion": "Si",
    "contacto": {
      "email": "hola@tenemosquehablar.co",
      "telefono": "+573127735967",
      "web": null,
      "instagram": "@tenemosquehablar_co"
    },
    "foto": "images/lideres/daniel-restrepo-55-0.webp"
  },
  {
    "id": "lilliana-sierra-martinez",
    "numero": "57",
    "nombre": "Lilliana Sierra Martínez",
    "organizacion": "Magna Comunicaciones",
    "territorio": "Medellín",
    "municipio": "Medellín",
    "fotos": [
      "lilliana-sierra-martinez-56-0-primary.webp",
      "lilliana-sierra-martinez-56-1.webp",
      "lilliana-sierra-martinez-56-2.webp"
    ],
    "causas": [
      "Cultura",
      "Mujeres",
      "Emprendimiento",
      "Derechos Humanos"
    ],
    "poblacion": [
      "Mujeres"
    ],
    "capacidades": [
      "Formación",
      "Gestión De Proyectos",
      "Comunicación"
    ],
    "busca": [
      "Financiación",
      "Alianzas Estratégicas",
      "Visibilidad"
    ],
    "ofrece": [
      "Formación",
      "Consultoría",
      "Movilización Comunitaria",
      "Facilitación"
    ],
    "experiencia": 13,
    "disponible_alianzas": true,
    "que_hace": "Lideramos el diseño y operación estratégica de proyectos sociales, organizacionales y ambientales. A través de la comunicación para la gobernanza y una logística inteligente, guiamos la transformación de ideas en soluciones de alto impacto.",
    "problema": "Resolvemos la complejidad operativa y estratégica que frena a los proyectos. Simplificamos procesos asumiendo la dirección logística y comunicacional, liberando a las organizaciones para que se enfoquen de lleno en su propósito esencial.",
    "con_quien": "Articulamos con gobiernos, empresas, organizaciones sociales y comunidades en diversos territorios, liderando procesos que conectan la toma de decisiones con el bienestar ciudadano y el desarrollo local sostenible.",
    "que_ofrece_largo": "Ofrecemos liderazgo estratégico en comunicación para la gobernanza, gestión logística integral, metodologías de innovación social y un equipo interdisciplinario capaz de operar proyectos de alto impacto de principio a fin.",
    "frase_vision": "Construir un futuro justo, inclusivo y sostenible transformando grandes ideas en soluciones estratégicas que regeneran comunidades y territorios.",
    "alianzas_activas": "Actualmente, nuestra alianza más visible y activa es nuestro rol como parte del equipo que ejecuta y opera el proyecto CienPorCien. Sin embargo, desde Magna tenemos una vocación articuladora y estamos completamente abiertos a consolidar nuevas alianzas con cualquier organización o líder del ecosistema.",
    "proyecto_autogestion": "Al ser quienes ejecutamos el proceso estratégico y de comunicaciones de CienPorCien, nuestro interés es transversal: queremos ser el motor que potencie los proyectos de la red. Estamos abiertos a articularnos con cualquier integrante del directorio, sumando nuestra capacidad operativa, logística y narrativa para hacer realidad sus iniciativas por Medellín.",
    "contacto": {
      "email": "lilliana.sierra.martinez@gmail.com",
      "telefono": "+573206968453",
      "web": "magnacomunicaciones.com",
      "instagram": "magnacomunicaciones.co"
    },
    "foto": "images/lideres/lilliana-sierra-martinez-56-0-primary.webp"
  },
  {
    "id": "stephany-ceballos-diez",
    "numero": "58",
    "nombre": "Stephany Ceballos Diez",
    "organizacion": "Independiente",
    "territorio": "Medellín",
    "municipio": "Medellín",
    "fotos": [
      "stephany-ceballos-diez-lideres-stephany-ceballos-diez-primary.webp",
      "stephany-ceballos-diez-lideres-stephany-ceballos-diez.webp"
    ],
    "causas": [
      "Cultura",
      "Juventud",
      "Emprendimiento"
    ],
    "poblacion": [
      "Juventud",
      "Mujeres"
    ],
    "capacidades": [
      "Formación",
      "Comunicación",
      "Arte",
      "Cultura"
    ],
    "busca": [
      "Formación",
      "Alianzas Estratégicas"
    ],
    "ofrece": [
      "Formación",
      "Consultoría",
      "Movilización Comunitaria"
    ],
    "experiencia": 2,
    "disponible_alianzas": true,
    "que_hace": "Soy comunicadora social, periodista y estratega digital. Diseño y lidero planes de comunicación e iniciativas de marketing para proyectos de alto impacto territorial y social, conectando organizaciones con sus audiencias clave.",
    "problema": "Traduzco proyectos institucionales y sociales complejos en narrativas claras y estrategias digitales efectivas. Logro que las iniciativas conecten genuinamente con la ciudadanía, fomentando la visibilidad, el relacionamiento público y la participación comunitaria.",
    "con_quien": "Trabajo con organizaciones sociales, entidades institucionales y proyectos territoriales. Mi enfoque principal abarca juventudes y comunidades en Medellín y el Oriente Antioqueño.",
    "que_ofrece_largo": "Ofrezco diseño de estrategias de comunicación y marketing, redacción de boletines de prensa, y producción de contenido digital y audiovisual desde la grabación hasta la edición.",
    "frase_vision": "Empoderar a los territorios y a sus comunidades a través de narrativas estratégicas que conectan, informan y movilizan hacia el desarrollo social.",
    "alianzas_activas": "Magna Comunicaciones, Valor Sostenible, Vibra en Alta, Cien por Cien",
    "proyecto_autogestion": "Me encantaría impulsar proyectos enfocados en la movilización cultural, el apoyo a jóvenes y el desarrollo social en los barrios. Me gustaría hacer equipo con líderes enfocados en la cultura y la gestión territorial que busquen potenciar su alcance. Haríamos un gran equipo porque ellos aportan el trabajo de base social y yo sumo la estrategia narrativa, audiovisual y de mercadeo para hacer que esas causas resuenen en toda la ciudad.",
    "contacto": {
      "email": "stephany.cdiez@gmail.com",
      "telefono": "",
      "web": null,
      "instagram": "stephanycdiez"
    },
    "foto": "images/lideres/stephany-ceballos-diez-lideres-stephany-ceballos-diez-primary.webp"
  },
  {
    "id": "janeth-sanchez-gonzalez",
    "numero": "59",
    "nombre": "Janeth Sánchez González",
    "organizacion": "Trabajadora social ESE Hospital Oscar Emiro Vergara Cruz",
    "territorio": "San Pedro de Uraba Antioquia",
    "municipio": "San Pedro De Uraba",
    "fotos": [],
    "causas": [
      "Salud Mental",
      "Educación",
      "Participación Ciudadana"
    ],
    "poblacion": [
      "Niñez",
      "Juventud",
      "Mujeres",
      "Personas Mayores",
      "Víctimas",
      "Campesinado"
    ],
    "capacidades": [
      "Formación",
      "Comunicación",
      "Investigación"
    ],
    "busca": [
      "Mentoría",
      "Formación",
      "Visibilidad"
    ],
    "ofrece": [
      "Formación",
      "Investigación",
      "Articulación Territorial"
    ],
    "experiencia": 2,
    "disponible_alianzas": true,
    "que_hace": "Trabajo en el area rural del municipio de San pedro de Uraba Ant, desde la prevencion y el cuidado de la salud mental en la poblacion, de manera individual y grupal",
    "problema": "Reconocimiento y acompañamiento en el area psicosocial, desde la prevencion y el reconocimiento de la salud mental",
    "con_quien": "Poblacion en general, es decir, niños, jovenes, adultos",
    "que_ofrece_largo": "Capacidad de trabajo en equipo y ganas de crecer mediante la capacitacion empoderamiento y acompañamiento",
    "frase_vision": "TRABAJA FUERTE, CENTRADO EN LO QUE PROYECTAS A FUTURO",
    "alianzas_activas": "ESE HOSPITAL OSCAR EMIRO VERGARA CRUZ- SAN PEDRO DE URABA ANTIOQUIA",
    "proyecto_autogestion": "Realmente siento mucho respeto y admiracion por el equipo CienPorCien,, desafortunadamente, no he tenido la oportunidad de asistir a un encuentro presencial, sin embargo me he conectado de manera sincronica y por el nivel de profesionalismo y calidad humana estaria feliz de participar con cualquiera de los integrantes",
    "contacto": {
      "email": "janethsanchez1504@gmail.com",
      "telefono": "+573147578493",
      "web": "janethsanchez1404@gmail.com",
      "instagram": "https://www.instagram.com/janeth.sanchezg?igsh=MTg0MXV2NXJodnVvcA%3D%3D&igsi=MTg0MXV2NXJodnVvcA%3D%3D&utm_source=qr"
    },
    "foto": null
  },
  {
    "id": "yeimi-carrillo-ferrer",
    "numero": "60",
    "nombre": "Yeimi Carrillo Ferrer",
    "organizacion": "Actualmente no pertenezco a ningún proceso.",
    "territorio": "Medellín, comuna 13",
    "municipio": "Medellín",
    "fotos": [],
    "causas": [
      "Salud Mental",
      "Juventud"
    ],
    "poblacion": [
      "Niñez",
      "Juventud",
      "Mujeres"
    ],
    "capacidades": [
      "Formación",
      "Incidencia",
      "Investigación"
    ],
    "busca": [
      "Voluntariado",
      "Formación",
      "Alianzas Estratégicas"
    ],
    "ofrece": [
      "Investigación",
      "Movilización Comunitaria",
      "Articulación Territorial"
    ],
    "experiencia": 2,
    "disponible_alianzas": true,
    "que_hace": "Anteriormente realizaba voluntariados con comunidad juvenil en temas de paz, artes y culturas. Trabajé con jóvenes fortaleciendo sus liderazgos y también he estado haciendo promoción y prevención en salud mental.",
    "problema": "Disminuye las brechas de conocimiento, fortalece redes de apoyo y motiva al trabajo comunitario en pro de la paz.",
    "con_quien": "Jóvenes y mujeres",
    "que_ofrece_largo": "Actualmente conocimientos y comunidades dispuestas a crear más redes y alianzas.",
    "frase_vision": "Seamos los líderes que hubiéramos deseado tener.",
    "alianzas_activas": "Corporación Sal y Luz (San Javier)",
    "proyecto_autogestion": "Si, me gustaría hacerlo con trabajadores sociales y psicólogos dispuestos a poner nuestro trabajo a comunidades vulnerables para fortalecer temas relacionados a habilidades para la vida",
    "contacto": {
      "email": "Carrilloferreryeimi@gmail.com",
      "telefono": "+573016231016",
      "web": null,
      "instagram": "@yeimicf0"
    },
    "foto": null
  },
  {
    "id": "paola-andrea-perez-velasquez",
    "numero": "61",
    "nombre": "Paola andrea perez velasquez",
    "organizacion": "Antioquia Scout",
    "territorio": "Area metropolitana",
    "municipio": "Medellín",
    "fotos": [
      "paola-andrea-perez-velasquez-60-0.webp",
      "paola-andrea-perez-velasquez-60-1.webp",
      "paola-andrea-perez-velasquez-60-2.webp"
    ],
    "causas": [
      "Educación",
      "Juventud",
      "Participación Ciudadana"
    ],
    "poblacion": [
      "Niñez",
      "Juventud",
      "Mujeres",
      "Víctimas",
      "Personas Con Discapacidad",
      "Comunidad Lgbtiq+"
    ],
    "capacidades": [
      "Formación",
      "Gestión De Proyectos",
      "Comunicación",
      "Mediación De Conflictos",
      "Economía Solidaria"
    ],
    "busca": [
      "Mentoría",
      "Formación",
      "Alianzas Estratégicas"
    ],
    "ofrece": [
      "Formación",
      "Consultoría",
      "Movilización Comunitaria",
      "Facilitación",
      "Articulación Territorial"
    ],
    "experiencia": 23,
    "disponible_alianzas": true,
    "que_hace": "Fomentar el liderazgo en niños, jóvenes, y adultos en pro de 5 áreas de crecimiento que son el carácter, la afectividad, corporalidad, sociabilidad, espiritualidad, por medio del aprender haciendo, aprender estando y aprender dando",
    "problema": "La vocacionalidad y el proyecto de vida en cada persona.",
    "con_quien": "Niños, niñas, jóvenes, adultos, lgtbi , medellin envigado sabaneta la estrella bello, copacabana, don matias, la ceja santuario, rionegro, san Vicente, urrao.",
    "que_ofrece_largo": "Formación en pedagogía constructivista, andragogia, juegos y canciones taller, taller de liderazgo, comunicación, diversidad e inclusion",
    "frase_vision": "Juntos para transformar",
    "alianzas_activas": "UDEA universidad CEIPA, fundacion del transporte",
    "proyecto_autogestion": "Articulacion de servicio con las diferentes fundaciones",
    "contacto": {
      "email": "Jeferegional@antioquiascout.org",
      "telefono": "+573233444463",
      "web": "www.antioquiascout.com",
      "instagram": "Antioquiascout"
    },
    "foto": "images/lideres/paola-andrea-perez-velasquez-60-0.webp"
  },
  {
    "id": "anderson-david-perez-mesa",
    "numero": "62",
    "nombre": "Anderson David Peréz Mesa",
    "organizacion": "Primero La Gente",
    "territorio": "Medellín",
    "municipio": "Medellín",
    "fotos": [
      "anderson-david-perez-mesa-61-0-primary.webp",
      "anderson-david-perez-mesa-61-1.webp",
      "anderson-david-perez-mesa-61-2.webp"
    ],
    "causas": [
      "Juventud",
      "Paz",
      "Participación Ciudadana"
    ],
    "poblacion": [
      "Juventud",
      "Comunidad Lgbtiq+"
    ],
    "capacidades": [
      "Formación",
      "Gestión De Proyectos",
      "Incidencia"
    ],
    "busca": [
      "Financiación",
      "Alianzas Estratégicas",
      "Visibilidad"
    ],
    "ofrece": [
      "Formación",
      "Movilización Comunitaria",
      "Articulación Territorial"
    ],
    "experiencia": 8,
    "disponible_alianzas": true,
    "que_hace": "Hago parte de la organización Primero la Gente desde hace tres años, donde apoyé su creación en Antioquia y el impulso de sus proyectos futuros. Mi liderazgo se enfoca en el activismo político y la incidencia social.",
    "problema": "Formamos y acompañamos a la próxima generación de líderes jóvenes para fortalecer su trabajo en las comunidades. A través de un activismo digital estratégico, posicionamos sus causas en la agenda pública para transformar el interés general en un impacto real y visible.",
    "con_quien": "Trabajamos con jóvenes, mujeres y población diversa en varios municipios de Antioquia: Copacabana, La Ceja, Fredonia, Amagá, Bello y Medellín",
    "que_ofrece_largo": "Formamos a jovenes a través de talleres de liderazgo, tambien ofrecemos clases sobre agenda legislativa (educación pública, erradicación de la ablación genital femenina, jóvenes rurales, estatuto de ciudadanía juvenil, protección a moradores, entre otros) y construcción de políticas públicas, liderada por el equipo de politólogos de nuestro movimiento. Contamos con estudiantes y profesionales multidisciplinarios listos para poner su conocimiento al servicio de tus necesidades, además de un enorme capital humano.",
    "frase_vision": "Una frase de Eduardo Galeano: \"La utopía está en el horizonte. Camino dos pasos, ella se aleja dos pasos y el horizonte se corre diez pasos más allá. ¿Entonces para qué sirve la utopía? Para eso sirve: para caminar.\"",
    "alianzas_activas": "El Convite de Ambiente",
    "proyecto_autogestion": "Si, estoy dispuesto a construir con otras organizaciones proyectos en conjunto",
    "contacto": {
      "email": "Anderperz11@gmail.com",
      "telefono": "+573226354797",
      "web": null,
      "instagram": "Daviidpperez"
    },
    "foto": "images/lideres/anderson-david-perez-mesa-61-0-primary.webp"
  },
  {
    "id": "david-alejandro-ganan-gonzalez",
    "numero": "63",
    "nombre": "David Alejandro Gañan Gonzalez",
    "organizacion": "Federación Nacional de Representantes Estudiantiles (FENARES).",
    "territorio": "Comuna 10- LA CANDERIA",
    "municipio": "Medellín",
    "fotos": [
      "david-alejandro-ganan-gonzalez-62-0-primary.webp",
      "david-alejandro-ganan-gonzalez-62-1.webp",
      "david-alejandro-ganan-gonzalez-62-2.webp"
    ],
    "causas": [
      "Educación"
    ],
    "poblacion": [
      "Juventud",
      "Víctimas"
    ],
    "capacidades": [
      "Formación",
      "Comunicación",
      "Mediación De Conflictos"
    ],
    "busca": [
      "Mentoría",
      "Formación",
      "Visibilidad"
    ],
    "ofrece": [
      "Formación",
      "Movilización Comunitaria",
      "Facilitación"
    ],
    "experiencia": 9,
    "disponible_alianzas": true,
    "que_hace": "Como parte de mi labor con la Federación Nacional de Representantes Estudiantiles (FENARES), trabajo en el fortalecimiento institucional, la articulación de liderazgos universitarios a nivel nacional y la estructuración de mecanismos de participación para los voceros estudiantiles.",
    "problema": "El trabajo articulado a través de la Federación Nacional de Representantes Estudiantiles (FENARES) aborda la desarticulación y falta de incidencia efectiva de los estamentos estudiantiles en el diseño de las políticas públicas de educación superior y la gestión del bienestar universitario. Concretamente, ayuda a resolver tres problemáticas estructurales: Brecha entre las políticas públicas nacionales y la realidad territorial: Las decisiones en educación superior (como reformas normativas, financiamiento o criterios de acreditación) suelen diseñarse centralizadamente. FENARES agrega las voces de líderes de todo el país para incidir con análisis técnico e insumos territoriales reales ante el Ministerio de Educación y órganos de decisión, transformando demandas aisladas en propuestas de política pública viables. Deficiencia y desactualización en los programas de Bienestar Universitario: En muchas instituciones, el bienestar se reduce a actividades recreativas y no a una estrategia integral de permanencia. Se abordan las deficiencias en salud mental, apoyos socioeconómicos y deserción escolar mediante diagnósticos comparados y modelos de buenas prácticas entre universidades para exigir y estructurar políticas de bienestar con enfoque de derechos y equidad. Fragmentación del liderazgo estudiantil y falta de continuidad: La alta rotación de los representantes genera pérdida de memoria histórica y capacidades técnicas. Se resuelve esto estandarizando herramientas de gestión, formación normativa y redes de gobernanza para que la representación estudiantil sea rigurosa, propositiva y con capacidad de negociación frente a las directivas universitarias y el Gobierno. Resultado concreto: Se pasa de la protesta o el reclamo desarticulado a una incidencia técnica, estructurada y de alcance nacional que impacta directamente en marcos normativos, asignación de recursos para bienestar y garantías reales para la permanencia estudiantil.",
    "con_quien": "Trabajo de manera directa con estudiantes de educación superior, representantes y líderes estudiantiles de instituciones públicas y privadas a lo largo del país, articulando esfuerzos a través de la red de la Federación Nacional de Representantes Estudiantiles (FENARES). Las poblaciones y territorios específicos en los que se focaliza esta labor comprenden: Poblaciones objetivo: Estudiantes universitarios y de instituciones de educación superior (IES): Especialmente aquellos en condiciones de vulnerabilidad socioeconómica, quienes enfrentan mayores barreras de permanencia y acceso a programas integrales de bienestar universitario. Líderes y voceros estudiantiles: Representantes electos a consejos superiores, académicos y comités institucionales de diversas IES de Colombia, que requieren fortalecimiento en capacidades técnicas, normativas y de negociación. Territorios específicos: Regiones y sedes descentralizadas: Enfoque prioritario en instituciones localizadas en departamentos y zonas donde la oferta institucional y los recursos para educación pública y bienestar son más limitados en comparación con las principales capitales (zonas del Pacífico, Caribe, Amazonía, Orinoquía y la región Andina). Nivel nacional y centros urbanos: Articulación con representaciones de las grandes universidades del país para consolidar una agenda común ante los entes territoriales y el Ministerio de Educación Nacional.",
    "que_ofrece_largo": "Conocimiento y rede contactos",
    "frase_vision": "Transformar la educación superior en Colombia consolidando representaciones estudiantiles colectivas, rigurosas e incidentes en las políticas públicas y en el bienestar integral de nuestras comunidades universitarias.",
    "alianzas_activas": "",
    "proyecto_autogestion": "",
    "contacto": {
      "email": "da-vi-02@hotmail.es",
      "telefono": "+573117705435",
      "web": null,
      "instagram": "https://www.instagram.com/fenaresoficial/"
    },
    "foto": "images/lideres/david-alejandro-ganan-gonzalez-62-0-primary.webp"
  },
  {
    "id": "clara-robledo-moreno",
    "numero": "64",
    "nombre": "Clara Robledo Moreno",
    "organizacion": "LaSavia · Laboratorio Botánico",
    "territorio": "Medellín y municipios de Antioquia , otras ciudades",
    "municipio": "Medellín",
    "fotos": [
      "clara-robledo-moreno-63-0-primary.webp",
      "clara-robledo-moreno-63-1.webp",
      "clara-robledo-moreno-63-2.webp"
    ],
    "causas": [
      "Educación",
      "Emprendimiento",
      "Ambiente",
      "Cultura"
    ],
    "poblacion": [
      "Comunidad Rural",
      "Urbana",
      "Juventud",
      "Campesinado"
    ],
    "capacidades": [
      "Formación",
      "Gestión De Proyectos",
      "Comunicación",
      "Arte",
      "Cultura"
    ],
    "busca": [
      "Financiación",
      "Alianzas Estratégicas",
      "Visibilidad"
    ],
    "ofrece": [
      "Formación",
      "Consultoría",
      "Facilitación",
      "Divulgación"
    ],
    "experiencia": 15,
    "disponible_alianzas": true,
    "que_hace": "Diseño y desarrollo procesos de educación, investigación, divulgación y acompañamiento en torno a la biodiversidad, las soluciones basadas en la naturaleza y la regeneración. Integro conocimientos científicos y saberes de los territorios para crear experiencias educativas, culturales y de comunicación que fortalezcan el vínculo con la naturaleza y las acciones de conservación.",
    "problema": "Contribuyo a cerrar la brecha entre el conocimiento sobre la biodiversidad y las decisiones y acciones que permiten cuidarla. Desarrollo metodologías y experiencias que facilitan la apropiación social del conocimiento, fortalecen capacidades locales y promueven relaciones más conscientes y regenerativas entre las personas, los territorios y la naturaleza.",
    "con_quien": "Trabajo con comunidades rurales y urbanas, organizaciones sociales, instituciones educativas, entidades públicas y privadas, colectivos culturales y ambientales, así como con diferentes públicos interesados en la biodiversidad. Desarrollo procesos en territorios rurales, campesinos y urbanos, adaptando las metodologías a sus contextos, saberes y necesidades.",
    "que_ofrece_largo": "Aporto más de 15 años de experiencia articulando biodiversidad, educación, comunicación, cultura y trabajo territorial. Ofrezco diseño metodológico, investigación, facilitación de diálogos sociales e interculturales, formación, creación de contenidos pedagógicos y divulgativos, expediciones botánicas, Agro Tours Campesinos, talleres y experiencias educativas, además del diseño y desarrollo de proyectos especiales para eventos, exposiciones y medios audiovisuales.",
    "frase_vision": "Una sociedad que reconoce la biodiversidad como parte esencial de la vida y fortalece, desde sus territorios y saberes, relaciones capaces de regenerarla y cuidarla.",
    "alianzas_activas": "",
    "proyecto_autogestion": "",
    "contacto": {
      "email": "lasavia.contacto@gmail.com",
      "telefono": "+573137486390",
      "web": null,
      "instagram": "Instagram y Youtube: @LaSavia.Vegetal"
    },
    "foto": "images/lideres/clara-robledo-moreno-63-0-primary.webp"
  }
];

const STATS = {
  total: 64,
  territorios: 49,
  causas: 10,
  disponibles: 64
};
