<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5(data-aos="fade")
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Componentes del diagnóstico empresarial
    .row.bg2
      p Un diagnóstico empresarial es la determinación del estado actual en que opera una empresa, con el fin de identificar aspectos a mejorar y que permiten sostener o crecer la empresa; para ello, es necesario hacer una serie de investigaciones o indagaciones sobre diversos aspectos, variables o factores en diferentes escenarios, lo que implica un proceso para la generación de información, organización de la información y el análisis e interpretación de la dicha información.
      .titulo-sexto.color-acento-contenido.mt-4
        h5 Figura 1. 
        span Fases del proceso de información diagnóstica.
      .row.mb-4.mb-md-5(data-aos="fade-down")
        .col-lg-4.mb-3.mb-md-0
          .tarjeta.tarjeta-foto-hover
            .tarjeta-foto-hover__img: img(src='@/assets/curso/tema1/1.png')
            .tarjeta-foto-hover__titulo.d-flex.justify-content-left.align-items-center.p-2.bgc1
              h4.mb-0.text-white Generación de información
            .tarjeta-foto-hover__tarjeta.bg-degrade.d-flex.align-items-center.justify-content-center.a1

              .row.bgc1
                h5.text-white.mt-4 Generación de información
                .row.bgc2
                  p.mb-4.mt-4 Forma o instrumentos para recoger la información.
                  p.mb-4 Metodología para capturar la información.
                  p.mb-5 Momento o frecuencia de recolección.


        .col-lg-4.mb-3.mb-md-0
          .tarjeta.tarjeta-foto-hover(@mouseover="mostrarIndicador = false")
            .indicador--hover(v-if="mostrarIndicador")
            .tarjeta-foto-hover__img: img(src='@/assets/curso/tema1/2.png')
            .tarjeta-foto-hover__titulo.d-flex.justify-content-left.align-items-center.p-2.bgc1
              h4.mb-0.text-white Organización de la información
            .tarjeta-foto-hover__tarjeta.bg-degrade.d-flex.align-items-center.justify-content-center.a1
              .row.bgc1
                h5.text-white.mt-4 Organización de la información
                .row.bgc2
                  p.mb-4.mt-4 Proceso de compilación y procesamiento de la información/compilación.
                  p.mb-4 Almacenamiento y soportes de la información.

                  p.mb-5 Ordenamiento de la información.


        .col-lg-4.mb-3.mb-md-0
          .tarjeta.tarjeta-foto-hover
            .tarjeta-foto-hover__img: img(src='@/assets/curso/tema1/3.png')
            .tarjeta-foto-hover__titulo.d-flex.justify-content-left.align-items-center.p-2.bgc1
              h4.mb-0.text-white Análisis e interpretación de la información
            .tarjeta-foto-hover__tarjeta.bg-degrade.d-flex.align-items-center.justify-content-center.a1
              .row.bgc1
                h5.text-white.mt-4 Análisis e interpretación de la información

                .row.bgc2
                  p.mb-4.mt-4 Clasificar la información  como aspectos conducentes al éxto y al desmejoramiento, ya sean internos o externos.

                  p.mb-4 Establecer  sugerencias o posibles orientaciones a seguir.

      separador
      .row
        #t_1_1.titulo-segundo.color-acento-contenido
          h2 1.1. Generación de información
        p Es importante recordar, que para el desarrollo de un diagnóstico existen varias metodologías e instrumentos relacionados con  levantamiento de la información, lo cual depende en cierta medida de:
        .row.justify-content-center
          .col-lg-4
            img(src='@/assets/curso/tema1/4.svg', alt='Texto que describa la imagen')
          .col-lg-8
            .row.mt-2
              .col-sm.mb-5.mb-sm-0
                ul.lista-ul--color
                  li.mb-0 
                    i.lista-ul__vineta
                    | Lo que se quiere investigar.

                  li.mb-0 
                    i.lista-ul__vineta
                    | La naturaleza de la información.
                  li.mb-0 
                    i.lista-ul__vineta
                    | El tipo de factor o variable.
                  li.mb-0 
                    i.lista-ul__vineta
                    | El nivel de detalle y calidad de información a recoger.
            .col-md-12
              .cajon.color-primario.p-3.mb-1
                p La información se puede recoger de forma cualitativa o cuantitativa, puede ser de tipo descriptivo o cerrada, entre otras; por lo que, desarrollo de  instrumentos adecuados para la captura de estos posibles tipos y formas de información, los cuales pueden desarrollarse:
           
            .row
              .col-sm.mb-5.mb-sm-0
                ul.lista-ul--color
                  li.mb-0 
                    i.lista-ul__vineta
                    | Por medios electrónicos. 
                  li.mb-0 
                    i.lista-ul__vineta
                    | Formulario físico.
                  li.mb-0 
                    i.lista-ul__vineta
                    | Cuestionario personal para entregar a quienes participan.
                  li.mb-0 
                    i.lista-ul__vineta
                    | Formularios para realizar entrevistas personales o colectivas que son manejados por el encuestador.                 
                  li.mb-0 
                    i.lista-ul__vineta
                    | Formularios para registrar información por observación.            
      p Por otra parte, es evidente la necesidad de fijar el cronograma para la captura de información, donde según cada tipo de información y técnica de recolección, se debe realizar la asignación de los recursos y contar con ellos al momento de su levantamiento. La siguiente infografía presenta las técnicas de recolección de información.
      .row.justify-content-center.mt-5
        .col-lg-6.bg3.py-md-4.py-2.px-5
          .row.align-items-center 
            .col-lg-8

              p.mb-0 Técnicas de recolección de información.
            .col-lg-4
              a.boton.me-3.indicador__container(
                :href="obtenerLink('/downloads/prueba.pdf')"
                target="_blank"
                type="application/pdf"
                @mouseover="mostrarIndicador = false"
              )
                span Descargar
                i.fas.fa-file-download
                .indicador--click(v-if="mostrarIndicador")
    p Ahora, corresponde en conformidad al plan de trabajo y agendamiento para la captura de información, adelantar las jornadas de trabajo para la captura de información, el cual se presenta en el siguiente recurso.
    .row.justify-content-center.mt-4
      h3.text-center Plan de trabajo y agendamiento para la captura de información 
      p.text-center.mb-0 En el presente recurso se abordarán los elementos necesarios para obtener una buena generación de la información.
      p.text-center para generar buena información, se tienen en cuenta tres fases:
    .row.justify-content-center.mt-5
      .col-lg-1
      .col-lg-3.wii
        img(src='@/assets/curso/tema1/5.png', alt='Texto que describa la imagen')
        .row.bgc3.p-2
          p.text-center.text-small.mt-2 <strong>Preparación y alistamiento de los recursos</strong>
        .row.mt-2.justify-content-center
          .col-lg-4
            a.boton.me-3.indicador__container(
              :href="obtenerLink('/downloads/prueba.pdf')"
              target="_blank"
              type="application/pdf"
              @mouseover="mostrarIndicador = false"
            )
              span Descargar
              i.fas.fa-file-download
              .indicador--click(v-if="mostrarIndicador")
      .col-lg-3.wii
        img(src='@/assets/curso/tema1/6.png', alt='Texto que describa la imagen')
        .row.bgc3.p-2
          p.text-center <strong>Fuentes de información</strong>
        .row.mt-2.justify-content-center
          .col-lg-4
            a.boton.me-3.indicador__container(
              :href="obtenerLink('/downloads/prueba.pdf')"
              target="_blank"
              type="application/pdf"
              @mouseover="mostrarIndicador = false"
            )
              span Descargar
              i.fas.fa-file-download
              .indicador--click(v-if="mostrarIndicador")
      .col-lg-3.wii
        img(src='@/assets/curso/tema1/7.png', alt='Texto que describa la imagen')
        .row.bgc3.p-2
          p.text-center <strong>Captura de información</Strong>
        .row.mt-2.justify-content-center
          .col-lg-4
            a.boton.me-3.indicador__container(
              :href="obtenerLink('/downloads/prueba.pdf')"
              target="_blank"
              type="application/pdf"
              @mouseover="mostrarIndicador = false"
            )
              span Descargar
              i.fas.fa-file-download
              .indicador--click(v-if="mostrarIndicador")
      .col-lg-1
    separador
    .row.bg4
      #t_1_2.titulo-segundo.color-acento-contenido
        h2 1.2. Organización de la información 
      p La información capturada y reportada por los participantes consultados en el proceso de diagnóstico, debe compilarse en conformidad a su área y reporte, de la manera en que fueron convocados, para llevar un control de seguimiento; sin embargo, para efectos de adelantar el diagnóstico, y con miras a una toma de decisiones con enfoque estratégico, es necesario que la información sea ordenada por el líder y el equipo diagnóstico en conformidad a los tipos de información endógena y exógena, y sus respectivos factores, aspectos o variables, facilitando el análisis, interpretación y definición del nivel de impacto, sea positivo o negativo. En este ejercicio el grupo de diagnóstico en conjunto deberá revisar la información y homologar los ítems comunes, para evitar la duplicidad de la información, respecto a un mismo factor o aspecto.    
      .row.justify-content-center.mt-4
        .col-lg-10
          .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
            .bloque-texto-g__img(
              :style="{'background-image': `url(${require('@/assets/curso/tema1/8.png')})`}"
            )
            .bloque-texto-g__texto.p-4
              p.mb-0 Hay que tener en cuenta el tipo de información, descriptiva, cuantitativa o estadística, etc., esta debe establecerse y compilarse por cada tipo de factor al que se relaciona y no respecto al área remitente o funcionario.
                br
                br
                | Este proceso se puede ir desarrollando en la medida en que es reportada desde los participantes, en conformidad a lo establecido en el cronograma para esta fase del proceso.

        p.text-center.mt-4 La siguiente figura muestra el arribo de información de las diferentes áreas funcionales:
      .row.justify-content-center
        .col-lg-8 
          .titulo-sexto.color-acento-contenido.mt-4
            h5 Figura 2. 
            span Ordenamiento de la información.
          img(src='@/assets/curso/tema1/9.svg', alt='Texto que describa la imagen')
          .tabla-b.color-acento-contenido.mb-5.mt-5
            .tabla-b__header
              .row
                .col-lg-6
                  h4.mb-0.text-center Factores y Aspectos Exógenos
                .col-lg-6
                  h4.text-center Factores y Aspectos Endógenos
            table
              tr
                th 
                  p.font1.mb-0 - Políticos y gubernamentales
                  p.font1.mb-0  - Económicos
                  p.font1.mb-0  - Sociales y Demográficos
                  p.font1.mb-0  - Tecnológicos
                  p.font1.mb-0  - Clientes
                  p.font1.mb-0  - Proveedores
                  p.font1.mb-0  - Competencia

                td 
                  p.font1.mb-0   - Gestión administrativa estratégica
                  p.font1.mb-0  - Productos y servicios
                  p.font1.mb-0  - Mercado de clientes servidos
                  p.font1.mb-0  - Procesos empresariales:
                  p.font1.mb-0  - Marketing y comunicación
                  p.font1.mb-0  - Recursos humanos y Organización
                  p.font1.mb-0  - Posición Financiera
                  p.font1.mb-0  - Tecnología disponible
    separador
    #t_1_3.titulo-segundo.color-acento-contenido
      h2 1.3. Análisis de la información
    p A partir de la información reportada por los participantes del proceso, se procede a identificar la información de cada factor, sus aspectos y variables, de tal manera que se pueda analizar e interpretar el sentido de dicha información, es decir, si es favorable o desfavorable para la empresa, además, ir identificando la posición relativa de cada aspecto. 
    .row.justify-content-center
      .col-md-10
        .cajon.color-primario.p-4.mb-1
          p Para este ejercicio, es conveniente que el equipo de trabajo, desde el líder del diagnóstico, utilice una serie de instrumentos o herramientas como las que se presentan a continuación, para interpretar dicha información y que orientan a la empresa desde el punto de vista competitivo.
    .row.bg5.mb-5.mt-5
      .col-lg-1
      .col-lg-4.mt-4
        h4 Técnica análisis DOFA.     
    p Se ha convertido en una herramienta de análisis estratégico que permite identificar los factores y aspectos de variables endógenas y exógenas que inciden en la operación de la empresa y que pueden afectarla de manera favorable o desfavorable, permite focalizar cuáles son los factores más relevantes, evidenciando las conclusiones en que se debe concentrar la empresa para ampliar, mejorar o conservar su capacidad competitiva; permite a la empresa plantear una planeación de objetivos y, por ende fijar medidas estratégicas y planes de acción para el desarrollo de su competitividad a futuro.     
    .row.bg6
      .col-lg-5.mt-4
        img(src='@/assets/curso/tema1/10.svg', alt='Texto que describa la imagen')
      .col-lg-7.mt-4.mb-5
        p Esta metodología de análisis fue planteada por Albert S. Humphrey en los años 60, para orientar correctamente a las empresas en la toma de decisiones diferenciadas a cada situación, en especial las que se consideran importantes o críticas para el negocio de la empresa. Con el paso del tiempo, se ha complementado su desarrollo y técnica de aplicación, pero sigue guardando su principal objetivo que es identificar a partir del contexto, cómo opera una empresa, sus fortalezas, debilidades, amenazas y oportunidades.
    p.text-center Su aplicabilidad surge del concepto que se ha venido trabajando sobre los factores endógenos y exógenos, donde para cada uno establece dos condiciones:
    .row.justify-content-center
      .col-lg-10
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row.justify-cotentent-center(titulo="Factores endógenos")
            .col-md-1
            .col-md-10.mb-4.mb-md-0
              p Los factores y aspectos de las variables, se deben analizar en conformidad a las condiciones que están afectando la empresa en el momento en que se evalúa. 
              p Su particularidad, está en que su estado depende de los esfuerzos de la empresa, por tanto, son absolutamente controlables.
            .col-md-1
            .col-md-1
            .col-md-5
              .row.tq.p-4
                .row
                  .col-lg-10
                    h5 Fortalezas
                  .col-lg-2
                    img(src='@/assets/curso/tema1/ico1.svg', alt='Texto que describa la imagen')
                p.mt-2 Son aquellos aspectos que domina la empresa para su supervivencia, lo que le permite operar, por lo que se distingue, en qué es mejor que otros.
                p Ejemplo: la calidad del producto, por ello le compran y sobre todo le recompran.
            .col-md-1.wa
            .col-md-5
              .row.tq.p-4
                .row
                  .col-lg-10
                    h5 Debilidades
                  .col-lg-2
                    img(src='@/assets/curso/tema1/ico2.svg', alt='Texto que describa la imagen')
                p.mt-2 Es el comportamiento que tiene una variable controlable dentro de un factor, que hace que los impactos para la empresa sean desfavorables y la puedan estar induciendo a fracasos.
                p Ejemplo: retrasos en las entregas.

          div(titulo="Factores exógenos")
            .row.justify-content-center
              .col-md-1
              .col-md-10.mb-4.mb-md-0
                p Estos factores y aspectos de las variables se deben analizar en conformidad a las condiciones que están afectando la empresa en el momento en que se evalúa.  

                p Su particularidad está en que su estado NO depende de la empresa, sino que están en el entorno en que opera la empresa, por tanto, NO son controlables.

              .col-md-1
              .col-md-1
              .col-md-5
                .row.tq.p-4
                  .row
                    .col-lg-10
                      h5 Oportunidades

                    .col-lg-2
                      img(src='@/assets/curso/tema1/ico3.svg', alt='Texto que describa la imagen')
                  p.mt-2.mb-0 Son las posibilidades que se le presentan a la empresa de poder actuar en condiciones de favorabilidad o beneficio, desarrollo, crecimiento, porque el macroentorno se lo permite y lo favorece.
                  p Ejemplo: la reducción de los precios de los combustibles para una empresa transportadora.
              .col-md-1.wa
              .col-md-5
                .row.tq.p-4
                  .row
                    .col-lg-10
                      h5 Amenazas
                    .col-lg-2
                      img(src='@/assets/curso/tema1/ico4.svg', alt='Texto que describa la imagen')
                  p.mt-2 Son las posibilidades que uno o varios aspectos del macro o micro entorno afecten negativamente a la empresa, reduciendo su operación, beneficio, crecimiento, etc.
                  p Ejemplo: un aumento en los precios de los combustibles para una empresa transportadora.
    p.text-center Para hacer la clasificación de los factores y sus aspectos o variables, la técnica las dispone en una matriz 2x2 así:
    .row.justify-content-center
      .col-lg-6
        .titulo-sexto.color-acento-contenido
          h5.text-small Tabla 1. 
          span.text-small Estructura de condición de los aspectos según el impacto para la empresa.  
        img(src='@/assets/curso/tema1/15.svg', alt='Texto que describa la imagen')
    p.mt-5 La técnica establece, que una vez ya clasificada la información y determinado su nivel de impacto positivo o negativo, se procede a armar la Matriz DOFA propiamente dicha, para tomar las decisiones o acciones, haciendo los cruces pertinentes, esto implica focalizar en pocos aspectos críticos los factores para cada tipo, los de mayor relevancia o impacto a la empresa, porque a partir de allí se plantea la toma de decisiones y fijación de objetivos. La figura representa los datos a llenar para realizar una matriz DOFA.
    .row.justify-content-center.mt-5
      .col-lg-8
        .titulo-sexto.color-acento-contenido
          h5.text-small Figura 3. 
          span.text-small Estructura de la Matriz DOFA.       
        img(src='@/assets/curso/tema1/16.svg', alt='Texto que describa la imagen')
    p.mt-5 En el numeral 3 de este componente formativo se describe cómo es el ejercicio de priorización y de obtención de las conclusiones estratégicas y fijación de sugerencias para la fijación de objetivos.
    p Una vez, la información está ordenada por factores, se debe clasificar dicha información endógena y exógena según sea favorable o desfavorable: en fortalezas, debilidades, oportunidades y amenazas.
    .row.bg5.mb-5.mt-5
      .col-lg-1
      .col-lg-4.mt-4
        h4 Matriz BCG. 
    p La matriz BCG (Boston Consulting Group), es una herramienta desarrollada por esta compañía como instrumento de análisis gráfico del portafolio de productos, a partir de la posición que estos ocupan dentro de la empresa y su tendencia, con el fin de tomar decisiones para cada uno de estos, en búsqueda de la maximización de utilidades y beneficios.
    .row.justify-content-center.bg7
      .col-lg-8.bg8.p-5
        p Es una matriz de cuatro cuadrantes, cada uno distinguido por una figura o ícono, donde cada uno obedece a las características de comportamiento de los productos, como se muestra a continuación:
        .row.justify-cotent-center
          .col-lg-2
          .col-lg-8
            .titulo-sexto.color-acento-contenido
              h5.text-small Figura 4. 
              span.text-small Matriz BCG.     
            img(src='@/assets/curso/tema1/17.svg', alt='Texto que describa la imagen')
            h5.mt-2 Participación de mercado frente a los considerados competencia
      p.text-center Estos cuadrantes se definen entre 2 variables:
      .col-lg-8
        .row.justify-content-center
          .col-lg-2
            img.tamimg(src='@/assets/curso/tema1/ico5.svg', alt='Texto que describa la imagen')
          .col-lg-10.mt-3
            p <strong>Crecimiento en el mercado:</strong> cómo aumentan las ventas.
        .row.justify-content-center.mt-5
          .col-lg-2
            img.tamimg(src='@/assets/curso/tema1/ico6.svg', alt='Texto que describa la imagen')
          .col-lg-10.mt-3
            p <strong>Eje de participación de mercado:</strong>  cuánto de lo que se vende en el sector o industria contribuye a la empresa o cuánto de lo que vende la empresa representa cada producto. 
      .col-lg-10
        p.mt-4 La labor diagnóstica de la empresa es ubicar su portafolio de productos en los cuadrantes según corresponda, puede haber varios en un solo cuadrante o cuadrantes sin productos.
      .col-lg-8
        .cajon.color-acento-contenido.p-3.mb-1
          p.text-center Hay que tener en cuenta que esta clasificación de productos por categorías se da a partir de:
        .titulo-sexto.color-acento-contenido.mt-4
          h5.text-small Figura 5. 
          span.text-small Aplicación Matriz BCG.  
        ImagenInfograficaB.color-acento-botones.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema1/19.svg', alt='Texto que describa la imagen')

          div(x="60%" y="77%" tooltip="Perro: Productos Perro" numero="+")
            h5.c1 Perro: Productos Perro
            p Estos productos no presentan crecimiento en ventas y tienen baja participación de mercado frente a lo que se vende en el sector o industria, por ende, no contribuyen en los beneficios de la empresa regularmente, incluso llega a ser negativa la utilidad. En estos casos se recomienda retirar del portafolio y oferta de productos de estas referencias. En ocasiones, hay que mantenerlos, ya que representan la tradición de la empresa, tienen el posicionamiento y generan la confianza en los otros productos de la empresa, aun cuando su contribución a la empresa no es alto, regularmente fueron vacas lechera, que por cambios en las tendencias de consumo o por que salieron productos para la misma función o servicio con mejor tecnología o eficiencia se quedaron relegados, se podría desarrollar esos productos, para ver si se recompone su crecimiento, decisiones que deben tomar los empresarios al diagnosticar las potencialidades del producto.
          
          div(x="26.5%" y="77%" tooltip="Vaca: Productos Vaca Lechera" numero="+")
            h5.c1 Vaca: Productos Vaca Lechera
            p  Se denominan así porque son los productos más desarrollados que producen los ingresos más altos en la empresa, ya están bien posicionados en el mercado aunque cada vez es más difícil aumentar su crecimiento de ventas, porque el mercado ya está saturado o es inflexible De los recursos de estos productos se pueden retirar utilidades con que vive la empresa e invertir en los otros productos como Estrellas e interrogantes incluso.
          div(x="26.5%" y="34%" tooltip="Estrella: Productos Estrella" numero="+")
            h5.c1 Estrella: Productos Estrella
            p   Son aquellos con gran crecimiento y que están logrando buena participación de mercado. A estos productos ubicados en este cuadrante hay que estimularlos seguirles invirtiendo y no retirarles utilidades, hasta que no se vuelvan vacas lecheras.
          div(x="60%" y="34%" tooltip="Interrogante: Productos Interrogante" numero="+")
            h5.c1 Interrogante: Productos Interrogante
            p  Son aquellos productos que tienen un rápido crecimiento, pero con poca cuota de participación en el mercado, regularmente porque son nuevos. Se recomienda seguir invirtiéndoles porque son semillas que crecerán y se convertirán en productos estrella o vacas lecheras, se tiene que supervisar mucho porque también fácilmente se pueden convertir en productos perros, porque las personas consumen al inicio por exploración, pero si no gustan, no recompran, no crecerán.
          
        
    p A partir de la ubicación de los productos de portafolio de la empresa, se deben establecer las medidas estratégicas para el sostenimiento, ampliación y defensa de estos, en caso de continuar siendo atractivos y rentables para la empresa. Para el caso del ejemplo, es evidente que los 3 productos deben continuar y que en especial los productos 2 y 3, deben ser tratados con acciones que les permita continuar su desarrollo y crecimiento, mientras que en el producto número uno, las iniciativas buscarán la defensa de la participación en el mercado y la sostenibilidad del nivel de ventas en el largo plazo.
    .row.bg5.mb-5.mt-5
      .col-lg-1
      .col-lg-4.mt-4
        h4 Ciclo de vida del producto.
    p Es la representación gráfica de las diferentes fases por las que atraviesan los productos desde su desarrollo hasta su retiro de la oferta del portafolio de productos de la empresa y está constituido por cuatro fases plenamente identificables. 
    .row.justify-content-center  
      .col-lg-8
        .titulo-sexto.color-acento-contenido
          h5.text-small Figura 6. 
          span.text-small Ciclo de vida del producto.    
        img(src='@/assets/curso/tema1/20.svg', alt='Texto que describa la imagen')
    p.mt-5 Cada una de las fases se explican a continuación:
    TabsA.color-acento-botones.mb-5

      .tarjeta.color-acento-botones--borde.p-4(titulo="Introducción")
        .row.justify-content-center
          .col-lg-8
            p Todo producto empieza comercialmente en el momento en el que se lanza al mercado, se trata de una novedad para los clientes o consumidores porque lo desconocen, no conocen su desempeño, características etc.; lo que implica que las ventas sean bajas al principio, especialmente, si la empresa o marca asociada no es muy conocida, por ello, requiere de inversiones iniciales para su lanzamiento y distribución, colocación en tiendas, etc., haciendo por llegar a los clientes a través de estrategias de marketing, como promociones y publicidad.
            p Antes de lanzar el producto realizó el estudio, por lo que lo ideal es utilizar toda la información para llegar al tipo de público que pueda interesarse en ese producto u oportunidades para hacerlo.
          .col-lg-4
            img(src='@/assets/curso/tema1/21.png', alt='Texto que describa la imagen')

      .tarjeta.color-acento-botones--borde.p-4(titulo="Declive")
        .row.justify-content-center
          .col-lg-8
            p Se caracteriza por un cambio en las preferencias de compra de los clientes, una menor demanda del producto por cambios en las tendencias o modas, lo que se expresa en la fuerte caída de ventas; de ser este el caso el declive lo sufre también la competencia por lo que hay que entender que todos los productos tienen una vida limitada (salvo algunas excepciones que se amplían en el tiempo pero con grandes esfuerzos de mejora) por lo que, llega un momento en el que entran a no aportar a la empresa beneficios, sino que solamente cubren sus costos o llegan inclusive subsidiados por la misma empresa.

            p Sea cual sea la naturaleza del declive en ventas, hay dos opciones: renovar el producto o retirarlo totalmente del portafolio y del mercado en sí. Esta decisión debe tomarla la empresa en función de las necesidades del público, e identificando si no es rescatable, ya que está en declive, lo que quiere decir que viene de grandes ventas. 

          .col-lg-4
            img(src='@/assets/curso/tema1/22.png', alt='Texto que describa la imagen')

      .tarjeta.color-acento-botones--borde.p-4(titulo="Madurez")
        .row.justify-content-center
          .col-lg-8
            p Fase en la que el producto obtiene grandes niveles de ventas en unidades, y por ende en dinero, por lo cual, también tendrá que afrontar gran competencia y estos niveles de ventas pueden caer rápidamente.
            p Muchas empresas se suelen estabilizar en esa zona porque han comprendido las exigencias de los clientes y estos atienden su oferta adecuadamente, pero la empresa empieza a tener dificultades para crecer en ventas, por la competencia que es mayor, y porque el mercado se satura, se cubre y no es fácil ahora vender más, no hay más clientes a quien vender.
            p Por eso, la empresa debe buscar nuevos mercados o segmentos geográficos para llevar su producto, donde no ha tenido actividad comercial y pueda avanzar en nuevas ventas.

          .col-lg-4
            img(src='@/assets/curso/tema1/23.png', alt='Texto que describa la imagen')

      .tarjeta.color-acento-botones--borde.p-4(titulo="Crecimiento")
        .row.justify-content-center
          .col-lg-8
            p Después de la introducción de un producto, se da la fase del crecimiento. como un aumento de ventas en consecuencia de las acciones que se adelantaron durante la fase de introducción. Los consumidores conocieron el producto gracias a la promoción y publicidad y demás estrategias de marketing que se implementaron, por lo cual ha decidido confiar en la marca y seguir comprando o recomendar su compra. 

            p Esta fase de crecimiento se caracteriza por el aumento sostenido de las ventas y porque se empiezan a consolidar beneficios o utilidades del producto, hay que tener en cuenta que aparecerán competidores que intentarán hacer lo mismo y mejorar el producto; razón por la cual en esta fase es importante que la empresa siga llevando su estrategia de marketing para diferenciarse de la competencia y hacer mejoras al producto como ventaja competitiva. El cliente reconoce y le es muy importante que le mantengan la calidad del producto como el precio, por eso lo importante de añadir un valor o servicio extra. Por otro lado, como el producto se vuelve tendencia, es muy importante el aumento de la distribución o presencia comercial donde actúa para aumentar el nuevos clientes.

          .col-lg-4
            img(src='@/assets/curso/tema1/24.png', alt='Texto que describa la imagen')
    .row.justify-content-center.mt-5
      .col-lg-8.bg9.py-md-4.py-2.px-5
        .row.align-items-center 
          .col-lg-9
            p.text-center.mb-0 ¿ Por qué se caracteriza la fase de crecimiento ?
          .col-lg-3
            .row
              .col-auto
                a.boton.color-acento-botones.indicador__container(@click="modal1 = true")
                  span Observar
                  i.fas.fa-file
                  .indicador--click(v-if="mostrarIndicador")

            ModalA(:abrir-modal.sync="modal1")
              .row.align-items-center
                .col-md-1
                .col-md-4
                  figure
                    img(src='@/assets/curso/tema1/25.svg', alt='Texto que describa la imagen')
                .col-md-6.mb-4.mb-md-0
                  p Aumento sostenido de las ventas y por qué se empiezan a consolidar beneficios o utilidades del producto, hay que tener en cuenta que aparecerán competidores que intentarán hacer lo mismo y mejorar el producto; razón por la cual en esta fase es importante que la empresa siga llevando su estrategia de marketing para diferenciarse de la competencia y hacer mejoras al producto como ventaja competitiva.
                  p.mb-0 El cliente reconoce y le es muy importante que le mantengan la calidad del producto como el precio, por eso lo importante de añadir un valor o servicio extra.
                  p Como el producto se vuelve tendencia, es muy importante el aumento de la distribución o presencia comercial donde actúa para aumentar los nuevos clientes.
                .col-md-1
    .row.bg5.mb-5.mt-5
      .col-lg-1
      .col-lg-5.mt-4
        h4 Relación de la Matriz BCG y el ciclo de vida del producto.     
    p La capacidad competitiva de un producto o servicio debe estar correlacionada con el ciclo de vida que atraviesa al momento del diagnóstico con el fin de establecer las posibilidades estratégicas y de decisión. 
    .row.color1
      .col-lg-4
        img(src='@/assets/curso/tema1/26.svg', alt='Texto que describa la imagen')
      .col-lg-8.mt-5
        p Un producto con buena participación en el mercado y un crecimiento en ventas de manera sostenida puede ser la situación previa a un declive, por lo cual la empresa debe hacer este análisis y prepararse para hacer un reacondicionamiento o mejoramiento a su producto en pro de alargar su etapa de madurez, es decir, tomar la decisión de defender su posición relativa de mercado y seguir promoviendo el bien producto o servicio como un bien de calidad de vida para sus consumidores y como una alternativa de consumo para el mercado en general, esto es lo que la empresa procurará dependiendo de la fase en que se encuentre su producto, agilizar su efecto; en el caso del crecimiento, ampliar la fase de madurez y cuando se empiezan a evidenciar pérdidas de atractivo en el mercado y disminución de ventas, reforzar el producto para que no caiga en declive.
    p.mt-5 Para la etapa de introducción, los esfuerzos deben ser dinámicos y ágiles, sabiendo canalizar las inversiones para el posicionamiento y conocimiento ante los consumidores potenciales, resolviendo así el interrogante que representa estos productos para la matriz BCG.
    p En la siguiente figura, se puede correlacionar la relación existente entre el ciclo de vida del producto y la matriz BCG, identificando como el crecimiento en ventas se relaciona con la participación de mercado y el tiempo con la tasa de crecimiento en ventas, lo que sirve para alinear las decisiones estratégicas en la empresa según el tipo de mercado, clasificación y ciclo de vida de producto.
    .row.justify-content-center.mt-5 
      .col-lg-8
        .titulo-sexto.color-acento-contenido
          h5.text-small Figura 7. 
          span.text-small Relación de la matriz BCG y el ciclo de vida del producto. 
        img(src='@/assets/curso/tema1/27.svg', alt='Texto que describa la imagen')
    .row.bg5.mb-5.mt-5
      .col-lg-1
      .col-lg-5.mt-4
        h4 Estadística básica.
    .row.justify-content-center
      .col-lg-8
        p Los procesos de diagnóstico empresarial como ejercicio de investigación, se basan en la búsqueda de información y procesamiento de datos, de manera que se evidencie el estado actual, la evolución o la tendencia.
        p Una de las herramientas que permite este ejercicio con la información en los procesos de diagnóstico, es la estadística, la cual se define como la ciencia que se dedica al ordenamiento y análisis de conjuntos de datos para obtener descripciones, explicaciones o predicciones sobre aspectos percibidos y analizados.
        .row.justify-content-center.mt-5
          .col-lg-12.bg9.py-md-4.py-2.px-5
            .row.align-items-center 
              .col-lg-9
                p.text-center.mb-0 Los conceptos básicos de la estadística son:
              .col-lg-3
                .row
                  .col-auto
                    a.boton.color-acento-botones.indicador__container(@click="modal1 = true")
                      span Observar
                      i.fas.fa-file
                      .indicador--click(v-if="mostrarIndicador")

                ModalA(:abrir-modal.sync="modal1")
                  .row.align-items-center
                    .col-md-1
                    .col-md-4
                      figure
                        img(src='@/assets/curso/tema1/25.svg', alt='Texto que describa la imagen')
                    .col-md-6.mb-4.mb-md-0
                      p Aumento sostenido de las ventas y por qué se empiezan a consolidar beneficios o utilidades del producto, hay que tener en cuenta que aparecerán competidores que intentarán hacer lo mismo y mejorar el producto; razón por la cual en esta fase es importante que la empresa siga llevando su estrategia de marketing para diferenciarse de la competencia y hacer mejoras al producto como ventaja competitiva.
                      p.mb-0 El cliente reconoce y le es muy importante que le mantengan la calidad del producto como el precio, por eso lo importante de añadir un valor o servicio extra.
                      p Como el producto se vuelve tendencia, es muy importante el aumento de la distribución o presencia comercial donde actúa para aumentar los nuevos clientes.
                    .col-md-1
        p Algunos ejemplos del uso de estadística en Economía son:
        .row.mt-2
          .col-sm.mb-5.mb-sm-0
            ul.lista-ul--color
              .col-lg-12.fons
                li.mb-0
                  i.lista-ul__vineta
                  p.mb-0   Indicadores macroeconómicos agregados como el PIB y su contraste en diferentes periodos.
              li.mb-0 
                i.lista-ul__vineta
                p.mb-0   Comportamiento de las tasas de interés en los últimos años. 
              .col-lg-12.fons
                li.mb-0 
                  i.lista-ul__vineta.fons
                  p.fons.mb-0   Evolución de los precios por inflación en los últimos años.

      .col-lg-4
        img(src='@/assets/curso/tema1/28.png', alt='Texto que describa la imagen')
    p.mt-4 Por estas razones los gerentes y el personal del equipo de diagnóstico deben aprender a interpretar y usar la estadística como fuente de información agregada o resumida de algún tipo de variable o factor a analizar, para expresar los hallazgos más significativos. Estos datos se pueden expresar como:
    .row.justify-content-center.bg10
      .col-lg-10.mt-4
        i.fa-solid.fa-table-list
        h5 
          i.fas.fa-table.col
          span.col Diagrama de frecuencias o estratificación
        p Es una técnica de distribución de frecuencias de una variable, que busca estratificar el comportamiento de esta, no denota un sentido de orden específico. El siguiente ejemplo muestra su enfoque de uso:
      
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="Ejemplo diagrama de frecuencia")
            .col-lg-1
            .col-lg-10
              p Ejemplo: en un restaurante el gerente desea saber cómo realizar las compras de productos, para ello, recurre al análisis estadístico del promedio de ventas de platos de almuerzo, lo que le servirá como parámetro de compra para la semana.
              img(src='@/assets/curso/tema1/29.svg', alt='Texto que describa la imagen')
            
            .col-lg-1

          div(titulo="Desarrollo diagrama de frecuencia")
            .row
              .col-lg-1
              .col-lg-10
                p A partir de esta información suministrada por el administrador del restaurante, y quien resumió los promedios del número de platos que se venden diariamente en el restaurante, en una semana cualquiera, se construye el siguiente gráfico estadístico de estratificación de frecuencias de los almuerzos.
                img(src='@/assets/curso/tema1/30.svg', alt='Texto que describa la imagen')
              
              .col-lg-1
      .col-lg-10
        i.fa-solid.fa-table-list
        h5 
          i.fas.fa-table.col
          span.col  Histograma
        p Es la distribución del comportamiento de una variable continua que denota la distribución de las frecuencias a lo largo de la variable continua.
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="Ejemplo histograma")
            .col-lg-1
            .col-lg-10
              p En el caso del restaurante, el gerente desea saber cómo es el consumo semanal de platos vendidos, para lo cual el gerente el presenta la siguiente información:

              img(src='@/assets/curso/tema1/31.svg', alt='Texto que describa la imagen')
            
            .col-lg-1

          div(titulo="Desarrollo histograma")
            .row
              .col-lg-1
              .col-lg-10
                p En este caso la variable continua es la semana y sus días, entonces el gerente del restaurante puede identificar como es la frecuencia de compra del total de compras de la semana, en cada uno de los días de la semana.
                p Lo cual le servirá para tomar decisiones como la contratación de personal para los días de viernes, sábado y domingo, que son donde mayor demanda de servicios y ventas se realizan, así mejora la capacidad competitiva y de servicio del restaurante.

                img(src='@/assets/curso/tema1/32.svg', alt='Texto que describa la imagen')
              
              .col-lg-1  
      .col-lg-10
        h5 
          i.fas.fa-table.col
          span.col Diagramas de pastel

        p Es otro esquema de representación gráfica estadística que busca descomponer una variable en sus diferentes categorías, mostrando la cantidad de frecuencia o casos, evidenciando cuánto del total corresponde cada categoría dentro de la variable.  
        .tarjeta.tarjeta--azul.p-4.mb-5
          SlyderA(tipo="b")
            .row.justify-content-center
              .col-md-10.mb-4.mb-md-0
                img(src='@/assets/curso/tema1/33.svg', alt='Texto que describa la imagen')
                p.mt-4 Para el caso del restaurante se desea saber cómo es el comportamiento o flujo de comensales en el horario de almuerzo, para lo cual el gerente del restaurante recibe de su administrador la siguiente información. A partir de la información suministrada se elabora el diagrama de pastel.
            
            .row.justify-content-center
              .col-md-10.mb-4.mb-md-0
                img(src='@/assets/curso/tema1/34.svg', alt='Texto que describa la imagen')
                p.mt-4 Distribución ventas de almuerzos por franja horaria.
        p.mb-5 Para efectos de ampliar conocimientos y utilización de estas y otras herramientas estadísticas en las empresas, se recomienda en el material complementario, Herramientas estadísticas básicas de la calidad.
            
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    modal1: false,
    modal2: false,
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

<style lang="sass"></style>
