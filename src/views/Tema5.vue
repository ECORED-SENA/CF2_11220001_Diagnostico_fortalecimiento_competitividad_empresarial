<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5(data-aos="fade")
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Informes diagnósticos     
    .row.justify-content-center
      .col-lg-10
        p El informe que se debe construir a partir de un proceso de diagnóstico empresarial para la competitividad puede presentar diferentes contenidos o capítulos, lo cual depende de:
        img.mt-5(src='@/assets/curso/tema5/1.svg', alt='Texto que describa la imagen')
    .row.justify-content-center.bg99
      p.text-center.mt-5 Los contenidos básicos a presentar en un informe de diagnóstico regularmente son los siguientes:
      .row.justify-content-center
        .col-lg-8
          LineaTiempoD.color-acento-botones.mb-5
              .row.p-2.p-md-4(numero="1" titulo="Objetivo del diagnóstico")
                .row.justify-content-center
                  img(src='@/assets/curso/tema5/2.png', alt='Texto que describa la imagen')
                  p.mt-4 Si bien, este aspecto es claro para el gerente y el grupo de trabajo que adelantó el proceso, se busca por medio del informe evidenciar a cualquier lector, cuál fue el motivo por el que se realizó el diagnóstico (obtener información acerca de la empresa, resolver un problema que no era claro, conocer la perspectiva de la empresa, analizar la situación de algunas áreas de trabajo, entre otros)
                  p No debe ser una explicación amplia o extensa, pero debe expresar el sentido del diagnóstico, qué se quiere saber, para qué, etc.
                  p No hay que confundir este objetivo con los objetivos del plan derivado del diagnóstico.

              .row.p-2.p-md-4(numero="2" titulo="Descripción del plan de trabajo o proceso")
                .row.justify-content-center
                  img(src='@/assets/curso/tema5/3.png', alt='Texto que describa la imagen')
                  p.mt-4 Consiste en describir cuáles fueron los pasos o fases que se adelantaron para la realización del diagnóstico. Como primer punto es importante describir la muestra.
              .row.p-2.p-md-4(numero="3" titulo="Participación")
                .row.justify-content-center
                  img(src='@/assets/curso/tema5/4.png', alt='Texto que describa la imagen')
                  p.mt-4 Se debe mencionar en rol de los participantes en adelantar el proceso, y en suministrar la información, a qué grupos se convocó para que se aplicaran los instrumentos.
              .row.p-2.p-md-4(numero="4" titulo="Técnica o metodología")
                .row.justify-content-center
                  img(src='@/assets/curso/tema5/5.png', alt='Texto que describa la imagen')
                  p.mt-4 Se debe aclarar que técnica se desarrolló para la captura de la información, si fue más de una explicar, así mismo, qué tipos de instrumentos se desarrollaron y aplicaron, cuántas personas participaron efectivamente, empleados y otros públicos de interés como clientes, proveedores, etc.
              .row.p-2.p-md-4(numero="5" titulo="Describir el horizonte")
                .row.justify-content-center
                  img(src='@/assets/curso/tema5/6.png', alt='Texto que describa la imagen')
                  p.mt-4 Tiempo en el cual se llevó a cabo el proceso de diagnóstico, para cada fase, el diseño, la preparación, captura de información, análisis, etc. También decir cómo se desarrolló el análisis e interpretación de la información, quiénes participaron, qué técnicas se emplearon, etc.
              .row.p-2.p-md-4(numero="6" titulo="Análisis de informaciones")
                .row.justify-content-center
                  img(src='@/assets/curso/tema5/7.png', alt='Texto que describa la imagen')
                  p.mt-4 Se pueden presentar las herramientas de análisis utilizadas que ayudaron a organizar e identificar las variables críticas o factores (más relevantes), matriz BCG, diagrama causa efecto y el análisis DOFA, entre otros posibles que haya utilizado.
              .row.p-2.p-md-4(numero="7" titulo="Descripción de resultados")
                .row.justify-content-center
                  img(src='@/assets/curso/tema5/8.png', alt='Texto que describa la imagen')
                  p.mt-4 A partir de la organización de los datos que encontraron. Si son datos cuantitativos o cualitativos, se buscaba la descripción o la medición de los hallazgos. Presentar estos resultados con los recursos gráficos, estadísticos o de indicador que los evidencian.
              .row.p-2.p-md-4(numero="8" titulo="Técnica para la formulación")
                .row.justify-content-center
                  img(src='@/assets/curso/tema5/9.png', alt='Texto que describa la imagen')
                  p.mt-4 Cómo llegó a la propuesta de soluciones como la técnica derivada de DOFA, árbol de problemas y árbol de soluciones, etc.
              .row.p-2.p-md-4(numero="9" titulo="Conclusiones")
                .row.justify-content-center
                  img(src='@/assets/curso/tema5/10.png', alt='Texto que describa la imagen')
                  p.mt-4 Establecer si se logró el objetivo inicial y los hallazgos más relevantes dentro del informe.
              .row.p-2.p-md-4(numero="10" titulo="Anexos")
                .row.justify-content-center
                  img(src='@/assets/curso/tema5/11.png', alt='Texto que describa la imagen')
                  p.mt-4 Como complemento del cuerpo de documento de informe del diagnóstico, puede adjuntar los instrumentos de recolección que se usaron: formularios para entrevistas, encuestas, guías de observación, sin llegar a dar ejemplos, ni citar información recopilada, solo el esquema de diseño del instrumento. Si son electrónicos se puede fijar la imagen.
              .row.p-2.p-md-4(numero="11" titulo="Glosario")
                .row.justify-content-center
                  img(src='@/assets/curso/tema5/12.png', alt='Texto que describa la imagen')
                  p.mt-4 El documento debe llevar un glosario de términos, ya que muchos aspectos no son del lenguaje común de los participantes o interesados en el informe.
    p.text-center Otros componentes que se deben tener en cuenta para la elaboración del informe diagnóstico final son:
    SlyderB.mb-5.mt-5(:datos="datosSlyder")








</template>

<script>
export default {
  name: 'Tema5',
  components: {},
  data: () => ({
    datosSlyder: [
      {
        titulo: 'Estructura de forma',
        texto:
          '- La organización debe ser capitular y su desarrollo cronológico a lo realizado, guardando el orden numérico.<br> - Escrito en un lenguaje asequible a cualquier lector coherencia del informe.<br> - En fuentes de fácil lectura.<br> - Utilización adecuada de los instrumentos de recolección de datos.<br> - Debe denotar un estilo de redacción uniforme.<br> - Debe presentar las citas y consultas en formato APA.',

        imagen: require('@/assets/curso/tema5/13.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Presentación y aprobación',
        texto:
          'El documento de diagnóstico se debe presentar a la dirección de la empresa, para su correspondiente lectura, quien realizará las observaciones para ampliación de detalles, o complemento, pero que no debe influir en los resultados y hallazgos, quizá puede sugerir iniciativas de planeación (estas fueron consultadas previamente para su formulación como parte del ejercicio de participación) por lo que, quizá el ajuste sea de forma. Una vez aprobado por parte de la dirección de la empresa, se procederá a su publicación, en conformidad a las directrices dadas.',
        imagen: require('@/assets/curso/tema5/14.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Fuentes de información',
        texto:
          'En este aparte se debe mencionar los tipos de fuentes utilizadas para el ejercicio de levantamiento de información, fuentes primarias, secundarias, en este ítem se presenta formalmente como parte de un proceso de investigación que se realizó.',
        imagen: require('@/assets/curso/tema5/15.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Comunicación empresarial, difusión diagnóstica',
        texto:
          'Los resultados de un proceso diagnóstico se deben publicar internamente, y serán de conocimiento de la empresa en general, lo que se tiene que definir son las formas y canales.<br><br> A través de cápsulas en la intranet de la empresa o por cuentas de correo electrónico, se deja en un repositorio institucional, promoviendo su consulta y lectura. Cada empresa buscará la mejor manera de difundir y sensibilizar los resultados del diagnóstico y plan de solución, presentando el derecho de confidencialidad y exclusividad de la información, para la empresa.',
        imagen: require('@/assets/curso/tema5/16.png'),
      },
      {
        titulo: 'Repositorio',
        texto:
          'Es el lugar físico, en la nube, página web, link que alberga el documento de diagnóstico realizado, donde se podrá consultar las informaciones y procedimientos desarrollados que sustentan el documento.  ',
        imagen: require('@/assets/curso/tema5/17.png'),
      },
    ],
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass">
.slyder__btn
  background-color:#2C53A0
.slyder__btn i
  color: white
.col-lg-4.order-lg-1 h3
  color: #9F321D
</style>
