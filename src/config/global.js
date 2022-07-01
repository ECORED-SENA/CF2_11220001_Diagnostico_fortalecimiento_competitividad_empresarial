export default {
  global: {
    componenteFormativo:
      'Formulación diagnóstica y reconocimiento de iniciativas de desarrollo',
    descripcionCurso:
      'En este componente, el aprendiz focaliza su aprendizaje en la identificación de los factores críticos para la competitividad empresarial, la priorización y generación de conclusiones de diagnóstico, como base de los nuevos objetivos y acciones estratégicas, de tal manera, que describa el esquema de planeación del futuro inmediato de la empresa, en un esquema de mejor posición competitiva.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.svg'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Componentes del diagnóstico empresarial',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Generación de información',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Organización de la información',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Análisis de la información',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Indicadores de gestión',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Componentes',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Tipos y naturaleza de los indicadores',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Comportamiento y trazabilidad',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo:
          'Conclusiones diagnósticas y priorización estratégica competitiva',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Recomendaciones y formulación de planes',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Fijación de objetivos',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Determinación de estrategias',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo: 'Plan de acción',
            hash: 't_4_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.4',
            titulo: 'Control y seguimiento',
            hash: 't_4_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.5',
            titulo: 'Acciones correctivas',
            hash: 't_4_5',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Informes diagnósticos',
        desarrolloContenidos: true,
        subMenu: [],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Jaramillo, J. M. (2015). Indicadores de gestión. Bogotá: 3R Editores.',
    },
    {
      referencia:
        'Asesoría empresarial y coaching ejecutivo. ¿CÓMO INICIAR EL PROCESO DEL DIAGNÓSTICO EMPRESARIAL EN MI ORGANIZACIÓN?',
      link: 'https://www.youtube.com/watch?v=xbS2KO92BZU',
    },
    {
      referencia:
        'Laurence, P. (2014). Diagnóstico Organizacional. En L. Jayh. México D.F.: Centro Regional de Ayuda Técnica.',
    },
    {
      referencia:
        'Portugal, V. (2017). Diagnóstico Empresarial. Fundación universitaria del Areandina. ',
      link: 'https://core.ac.uk/download/pdf/326423305.pdf',
    },
    {
      referencia:
        'Rodriguez, D. (2012). Diagnóstico organizacional (4ta Edición ed.). México, D.F.: Alfa Omega Grupo Editor. S.A.',
    },
    {
      referencia: 'Osaín, C. L. (2007). Indicadores de Gestión. ',
      link:
        'https://www.ucipfg.com/Repositorio/MLGA/MLGA-03/semana2/indicadores-de-gestion.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Amenaza',
      significado:
        'se puede identificar como la probabilidad que un aspecto crítico, muy relacionado con la actividad de la empresa, la afecta sin poder evitarlo, solo puede mitigar o reducir el impacto.',
    },
    {
      termino: 'BCG',
      significado: ' Boston Consulting Group.',
    },
    {
      termino: 'Captura de información',
      significado:
        'acción de registrar la información que se desea analizar a través de un instrumento como pueden ser formularios, cuestionarios o entrevistas grabadas, etc.',
    },
    {
      termino: 'Conclusiones diagnósticas',
      significado:
        'conjunto de aspectos más relevantes para la empresa, que son críticas por su nivel de impacto. Pueden ser aspectos para mejorar o consolidar, pueden por ende estar en condición de desventaja o de ventaja competitiva, y sobre las cuales se adelantarán acciones o vigilancia y control.',
    },
    {
      termino: 'Consultor',
      significado:
        'experto en diseño y coordinación de actividades diagnósticas en empresas, que define el mejor protocolo para la empresa para facilitar la determinación del estado actual de la empresa en su contexto de operación.',
    },
    {
      termino: 'Cronograma',
      significado:
        'en diagnóstico, refiere a la determinación en función del tiempo, de las actividades a realizar, para capturar la información, como es la configuración de equipos de trabajo, diseño de instrumentos, captura de información, etc.',
    },
    {
      termino: 'Cultura organizacional',
      significado:
        'aspectos y hábitos comunes en las personas de la empresa, que comparten con los compañeros, tal como puede ser el cumplimiento, la calidad, las buenas maneras, lo que se defiende y cumple sin necesidad de normatividad, a pesar de que existe.',
    },
    {
      termino: 'Debilidad',
      significado:
        'comportamiento que tiene una variable controlable dentro de un factor, que hace que los impactos para la empresa sean desfavorables, ejemplo retrasos en las entregas.',
    },
    {
      termino: 'Diagnóstico empresarial',
      significado:
        'proceso de análisis integral de información de los diferentes aspectos o factores en los cuales está inmerso el ejercicio empresarial, con el fin de identificar el estado actual de competitividad, los aspectos a mejorar y las oportunidades por las que debe optar para un mejor futuro.',
    },
    {
      termino: 'DOFA',
      significado:
        'alude a debilidades, oportunidades, fortalezas y amenazas. También se conoce como FODA y DAFO, según cómo se ordenan las palabras que componen la expresión.',
    },
    {
      termino: 'Encuesta',
      significado:
        'técnica de aplicación de un cuestionario a una muestra de personas o de manera general o censal a todas las personas. Proporcionan información de opiniones, actitudes y comportamientos de los empleados, clientes, proveedores, etc.',
    },
    {
      termino: 'Estadísticas',
      significado:
        'conjunto de información agregada por tipo de variable o factor en la empresa, que se consolida para efectos de análisis y toma de decisiones.',
    },
    {
      termino: 'Factores',
      significado:
        'Conjunto de variables o aspectos que se agrupan por su familiaridad facilitando su análisis, ejemplo factores económicos, factores de comercialización y ventas.',
    },
    {
      termino: 'Factores críticos',
      significado:
        'aspectos o variables que inciden en la empresa de manera significativa, se denominan críticos, porque repercuten en el estado actual de la empresa. No siempre son los mismos, pueden cambiar con el tiempo.',
    },
    {
      termino: '<i>Focus Group</i>',
      significado:
        'metodología de sensibilización, indagación o investigación, que busca obtener información descriptiva o cualitativa, donde se reúne un conjunto de participantes para adelantar una entrevista o una argumentación temática, donde se busca registrar dichos argumentos u opiniones sobre un proceso, productos, servicios, resultados pasados, etc.',
    },
    {
      termino: 'KPI',
      significado:
        '<i>Key Performance</i> Indicator de su sigla traducida del inglés, indicador de gestión.',
    },
    {
      termino: 'Metodología',
      significado:
        'para procesos de diagnóstico, corresponde al definir las diferentes formas de capturar la información que se utilizará para análisis.',
    },
    {
      termino: 'Objetivos',
      significado:
        'propósitos de logros que fija la empresa a partir de su condición actual, los cuales pueden ser para crecer, vender, pero a su vez, pueden ser mitigar o erradicar una debilidad, ya que es plenamente controlable.',
    },
    {
      termino: 'Oportunidad',
      significado:
        'posibilidades que se le presentan a la empresa de poder actuar en condiciones de favorabilidad o beneficio, desarrollo.',
    },
    {
      termino: 'Participación diagnóstica',
      significado:
        'es el ejercicio de interpretación de la información capturada, por parte de equipos de trabajo diagnóstico, con el fin de identificar el estado actual de la variable o factor, si representa condición de relevancia o alto impacto en la operación de la empresa.',
    },
    {
      termino: '<i>PIB</i>',
      significado: 'Producto Interno Bruto.',
    },
    {
      termino: 'Preguntas abiertas',
      significado:
        'maneras que se tiene para obtener respuestas contextualizadas libremente por parte del empleado o encuestado, además permiten plantear una temática a la reflexión cuando la temática lo exija.',
    },
    {
      termino: 'Preguntas cerradas',
      significado:
        'preguntas que se determinan dado que se conocen las alternativas de respuesta, facilitan la tabulación y el conteo.',
    },
    {
      termino: 'Registro',
      significado:
        'captura de la información suministrada por los entrevistados, encuestados, que aporta un sentido de realidad, cumplimiento para quien lo expone, ya sea favorable o desfavorable.',
    },
    {
      termino: 'ROI',
      significado: 'retorno sobre la inversión.',
    },
  ],
  complementario: [
    {
      tema: 'Estadística básica',
      referencia:
        'Gregori, P. (2016). GA1239 Herramientas estadísticas básicas de la calidad. ',
      tipo: 'Página web',
      link:
        'http://www3.uji.es/~gregori/docencia/mt1021-1516/tema5-herramientas-pablo.html',
    },
    {
      tema: 'Estadística básica',
      referencia: 'Gutiérrez, A. (2021). Herramientas Estadísticas. ',
      tipo: 'Página web',
      link:
        'https://alfredogutierrez.weebly.com/16-herramientas-estadisticas.html',
    },
    {
      tema: 'Tipos y naturaleza de los indicadores',
      referencia:
        'Rojas Caro, J. y Matallana Quiroga, L. (2016). Los indicadores de gestión como herramienta de competitividad empresarial. ',
      tipo: 'Página web',
      link: 'https://ciencia.lasalle.edu.co/administracion_de_empresas',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'María Camila García Santamaría',
        cargo: 'Líder del equipo',
        centro: 'Dirección Géneral',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: ['Oscar Palito'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Sergio Mauricio Valencia Martínez',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },

      {
        nombre: 'María Eugenia Mejía López',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramírez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  //cio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
