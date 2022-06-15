<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5(data-aos="fade")
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Indicadores de gestión   
    .row.bg11
      p Los indicadores de gestión son los instrumentos a través de los cuales la empresa miden sus desempeños en las diferentes funciones, actividades que desarrolla y que contrasta con los resultados esperados y fijados desde una planeación
      .row.justify-content-center.color1
        .col-lg-8.p-4
          p Cuando se habla de indicadores de gestión, hablamos de medición y control, que efectivamente es la función para la cual se establecen, es decir, son los instrumentos que facilitan identificar y evaluar los niveles de cumplimiento o desviación de los logros o actividades a realizar frente a los resultados esperados.
          p Un indicador de gestión o KPI (Key Performance Indicator), representa la forma de medir si una función, proyecto, actividad, área funcional, unidad de negocio, o persona, están alcanzando, logrando las metas y objetivos o resultados esperados.

        .col-lg-4
          img(src='@/assets/curso/tema2/1.svg', alt='Texto que describa la imagen')
      p.mt-4 Se deben utilizar indicadores de gestión en todos los niveles empresariales, para evaluar el éxito como el logro establecido en la planeación de la empresa. 
      p Los tipos de indicadores de gestión son:
      ImagenInfografica.color-acento-botones.mb-5
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/tema2/2.svg', alt='Texto que describa la imagen')

        .tarjeta.color-acento-botones.p-3(x="7.5%" y="47%" numero="")

          p <strong>Externos.</strong> Es externo y de aplicabilidad para la empresa cuando desde el entorno se fija y la empresa lo adopta como meta o medida de seguimiento, está disponible desde fuera de la compañía, y la empresa lo utiliza para compararse, por ejemplo: el índice de crecimiento del PIB para la industria o sector en que se participa o de la región donde se está operando la empresa, lo que traduce que las empresa deberá tener un crecimiento económico similar al mismo; otro ejemplo, puede ser la participación laboral entre hombres y mujeres, que para el caso de un nuevo puesto la empresa establecerá un índice de participación de mujeres y otro de hombres, estos indicadores los dispone el entorno, en que opera la empresa y pueden ser un referente.


        .tarjeta.color-acento-botones.p-3(x="21.5%" y="47%" numero="")

          p <strong>Internos.</strong>  Los indicadores internos son aquellos que establece la empresa de manera discrecional a partir de su necesidad y de lo que quiera medir, del tipo de objetivo, actividad o función, no todas las empresas, por ende, tienen los mismos indicadores, por ejemplo: las empresas industriales requieren medir el nivel de improductividad fallas en sus equipos, y en otras empresas se requiere un indicador alistamiento de máquinas. 
        
        .tarjeta.color-acento-botones.p-3(x="35.5%" y="47%" numero="")

          p <strong>Cualitativos.</strong>   Miden las percepciones, opiniones y preferencias, gustos; en la práctica de presentación, de estos indicadores son expuestas de forma cuantitativa, porque lo cualitativo lleva frecuencias de ocurrencia y es allí, donde adopta un sentido cuantitativo y numérico, pero no hay que olvidar que expresa cualidades. Como ejemplo de indicadores cualitativos, se puede mencionar: el índice de corrupción nacional o internacional, el nivel de satisfacción de los clientes de un producto o servicio, la rapidez de atención a los clientes, etc. 
        .tarjeta.color-acento-botones.p-3(x="50%" y="47%" numero="")

          p <strong>Cuantitativos.</strong>   Miden y cuantifican resultados, recursos, casos etc., son de naturaleza cuantitativos. Dentro de los ejemplos de indicadores cuantitativos se puede mencionar el índice de eficacia en cierre de ventas, lo ingresos por ventas de cierta línea de producto, el porcentaje de producto defectuoso, etc.
        .tarjeta.color-acento-botones.p-3(x="64.5%" y="47%" numero="")

          p <strong>Compuestos.</strong>    Cuando se correlacionan dos o más variables, por ejemplo, el margen de contribución, que es el resultado de dividir los costos unitarios entre el precio de venta de un producto.
        .tarjeta.color-acento-botones.p-3(x="78.4%" y="47%" numero="")

          p <strong>Estratégicos y Operativos.</strong>     Las empresas fijan objetivos corporativos como crecimiento, pero para identificar el cumplimiento se tienen que seguir indicadores de sentido estratégico como es el índice de participación en el mercado, el crecimiento del Margen de rentabilidad, pues de ellos dependerá la posibilidad de invertir. Por otra parte, los indicadores operativos son aquellos asociados a los niveles funcionales y de agregación material de valor, por ejemplo: tiempo promedio para cargar un camión de cervezas, número de pedidos devueltos. 
        .tarjeta.color-acento-botones.p-3(x="92.5%" y="47%" numero="")

          p <strong>Funcionales.</strong>      Este enfoque de clasificación de los indicadores de gestión se aborda en conformidad la organización de la empresa y sus áreas funcionales.
        .tarjeta.color-acento-botones.p-3(x="91.5%" y="92%" numero="")

          p <strong>Indicadores financieros.</strong>       Focalizados en el manejo de los recursos monetarios y de financiación de la operación de la empresa, entre los cuales se pueden mencionar: Incremento del margen de utilidad, índice ROI (Retorno sobre la inversión), nivel de endeudamiento, y el punto de equilibrio.
        .tarjeta.color-acento-botones.p-3(x="75%" y="92%" numero="")

          p <strong>Indicadores de producción.</strong>       Se relacionan con los indicadores de logística, pero se dan después de ella, para la transformación o elaboración de los productos, tiempos de ajuste de máquina, nivel de desperdicio, número de reprocesos, etc.
        .tarjeta.color-acento-botones.p-3(x="58.3%" y="92%" numero="")

          p <strong>Indicadores de logística.</strong>        Miden el nivel de rendimiento, oportunidad, cumplimiento y el nivel de optimización de los procesos, para mejorar la calidad e incrementar la productividad. Son utilizados para hacer mejora continua; por ejemplo: días de rotación de inventario, mínimos de stock, tiempo de reorden y aprovisionamiento, porcentaje de costo de fletes.
        .tarjeta.color-acento-botones.p-3(x="41.5%" y="92%" numero="")

          p <strong>Comunicación en redes sociales.</strong>         Cuando se quiere conocer el impacto de las publicaciones realizadas en las redes sociales, así como la participación en las ventas, por ejemplo: incremento del número de seguidores, alcance espero cubierto y real.
        .tarjeta.color-acento-botones.p-3(x="25%" y="92%" numero="")

          p <strong>Indicadores de para la función de ventas.</strong>          Es un conjunto de indicadores que tienen como fin, medir el desempeño en función de las ventas y facturación de un producto o servicio. Esta función puede generar varios indicadores como, por ejemplo: satisfacción del cliente, nivel de facturación, eficacia en visitas de ventas, nivel de descuento ofertado para vender, número de visitas, horas con mayor tránsito, ventas por visita, facturación promedio, etc.

      
      p En conclusión, las empresas en la medida que dispongan de indicadores de gestión tendrán la oportunidad de contar con información que les ayudará a mejorar el desarrollo y competitividad. 
      separador
      #t_2_1.titulo-segundo.color-acento-contenido
        h2 2.1.  Componentes
      p Es necesario establecer una serie de componentes que en lo posible todo indicador debe tener, para establecer los indicadores de gestión como instrumentos que permiten la identificación de estados actuales, leer la trazabilidad o historia reciente de la empresa, su evolución, así como para contar con instrumentos que permitan el desarrollo y cumplimiento de los planes y objetivos propuestos; estos son  (Jaramillo, 2015):
    .row.justify-content-center
      .col-lg-10
        SlyderF.mb-5(columnas="col-lg-12 col-xl-12")
          .tarjeta.color-acento-contenido.p-4
            .row.justify-content-center.mb-0
              .col-lg-3
                img(src='@/assets/curso/tema2/3.svg' alt='AvatarTop')
              .col-lg-9
                .row.mt-2
                  .col-sm.mb-5.mb-sm-0
                    ul.lista-ul--color
                      li.mb-0 
                        i.lista-ul__vineta
                        p.mb-0 <strong>Nombre:</strong> corresponde a la denominación por la cual será identificado, aparte de ser concreto debe definir claramente su objetivo y utilidad en lo posible.

                      li.mb-0 
                        i.lista-ul__vineta
                        p.mb-0 <strong>Código:</strong> todo indicador debe estar codificado en conformidad al proceso actividad con la que se relaciona.

                      li.mb-0 
                        i.lista-ul__vineta
                        p.mb-0 <strong>Unidades:</strong> refiere a la magnitud en que se expresa el indicador, pueden ser kg, litros por segundo, unidades, porcentaje, etc.

                      li.mb-0 
                        i.lista-ul__vineta
                        p <strong>Escala:</strong> es el patrón de medida en que se ubica las unidades en que se expresa el indicador.               
          .tarjeta.color-acento-contenido.p-4
            .row.justify-content-center.mb-0
              .col-lg-3
                img(src='@/assets/curso/tema2/4.svg' alt='AvatarTop')
              .col-lg-9
                .row.mt-2
                  .col-sm.mb-5.mb-sm-0
                    ul.lista-ul--color
                      li.mb-0 
                        i.lista-ul__vineta
                        p.mb-0 <strong>Status:</strong>  refiere a la lectura actual.

                      li.mb-0 
                        i.lista-ul__vineta
                        p.mb-0 <strong>Umbral:</strong>  es el valor esperado del indicador en condiciones normales.


                      li.mb-0 
                        i.lista-ul__vineta
                        p.mb-0 <strong>Horizonte:</strong>  es el tiempo esperado para el logro del umbral dentro de la escala.


                      li.mb-0 
                        i.lista-ul__vineta
                        p.mb-0 <strong>Rango de gestión:</strong> son los valores mínimo y máximo entre los cuales se debe expresar el indicador o presentar niveles de estatus.
                      li.mb-0 
                        i.lista-ul__vineta
                        p <strong>Forma de cálculo:</strong>  es la manera cómo se correlacionan las variables para poder expresar el objetivo o meta del indicador.
          .tarjeta.color-acento-contenido.p-4
            .row.justify-content-center.mb-0
              .col-lg-3
                img(src='@/assets/curso/tema2/5.svg' alt='AvatarTop')
              .col-lg-9
                .row.mt-2
                  .col-sm.mb-5.mb-sm-0
                    ul.lista-ul--color
                      li.mb-0 
                        i.lista-ul__vineta
                        p.mb-0 <strong>Forma de medición:</strong>  en todo indicador se debe establecer el procedimiento para realizar su medición y en qué momento se debe hacer la correlación de las variables.


                      li.mb-0 
                        i.lista-ul__vineta
                        p.mb-0 <strong>Fecha inicial:</strong>   es el momento a partir del cual entra en ejecución para medir el desempeño del indicador.



                      li.mb-0 
                        i.lista-ul__vineta
                        p.mb-0 <strong>Fecha final:</strong>   es el momento en el cual se debe hacer una revisión del indicador para determinar su pertinencia, ajuste de umbral, de la forma de medición, de la forma de cálculo o cualquier otro ajuste que requiera.
          
          .tarjeta.color-acento-contenido.p-4
            .row.justify-content-center.mb-0
              .col-lg-3
                img(src='@/assets/curso/tema2/6.svg' alt='AvatarTop')
              .col-lg-9
                .row.mt-2
                  .col-sm.mb-5.mb-sm-0
                    ul.lista-ul--color
                      li.mb-0 
                        i.lista-ul__vineta
                        p.mb-1 <strong>Responsable:</strong>   todo indicador debe tener un responsable del diseño y parametrización, a efectos de consulta por parte de los usuarios del indicador.



                      li.mb-0 
                        i.lista-ul__vineta
                        p.mb-0 <strong>Glosario:</strong>  los indicadores de gestión dentro de sus componentes de definición deben contemplar la estructura de un glosario de términos que definan las siglas, símbolos, iniciales y demás aspectos a que dé lugar, para que el usuario pueda consultar y poderlo utilizar apropiadamente.
    separador
    #t_2_2.titulo-segundo.color-acento-contenido
      h2 2.2.  Tipos y naturaleza de los indicadores
    p La determinación de la competitividad empresarial, desde el punto de vista de la gestión, se refiere a dos aspectos orientacionales qué tienen que ver con el impacto desde la empresa hacia fuera y de la empresa hacia adentro; es cuando se debe reconocer el concepto de eficiencia y eficacia como medidas de la efectividad empresarial, y para la productividad.
    .row.justify-content-center
      .col-lg-10
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="Eficiencia")
            .col-lg-1
            .col-lg-10
              p Establece que los indicadores de gestión, deben expresar que la empresa aplica los mejores métodos:
              .row.bg22
                .col-lg-4
                  img(src='@/assets/curso/tema2/7.svg', alt='Texto que describa la imagen')   
                .col-lg-8
                  .row.mt-2
                    .col-sm.mb-5.mb-sm-0
                      ul.lista-ul--color
                        li.mb-0 
                          i.lista-ul__vineta
                          p.mb-0 Aprovechando de manera óptima los recursos.
                        li.mb-0 
                          i.lista-ul__vineta
                          p.mb-0 Mejorando los tiempos de proceso.
                        li.mb-0 
                          i.lista-ul__vineta
                          p.mb-0 Reduciendo los costos operativos.
                        li.mb-0 
                          i.lista-ul__vineta
                          p.mb-0 Minimizando los desperdicios.
                        li.mb-0 
                          i.lista-ul__vineta
                          p.mb-0 Buscando nuevos métodos para realizar el trabajo.
            .col-lg-1
          div(titulo="Eficiencia")
            .row.justify-content-center
              .col-lg-1
              .col-lg-10
                p Establece que los indicadores de gestión, deben expresar que la empresa aplica los mejores métodos:
                .row.bg22
                  .col-lg-4
                    img(src='@/assets/curso/tema2/8.svg', alt='Texto que describa la imagen')   
                  .col-lg-8
                    .row.mt-2
                      .col-sm.mb-5.mb-sm-0
                        ul.lista-ul--color
                          li.mb-0 
                            i.lista-ul__vineta
                            p.mb-0 Con las características especificadas.

                          li.mb-0 
                            i.lista-ul__vineta
                            p.mb-0 En la cantidad requerida.

                          li.mb-0 
                            i.lista-ul__vineta
                            p.mb-0 En el momento oportuno.

                          li.mb-0 
                            i.lista-ul__vineta
                            p.mb-0 Al precio estipulado y negociado.
                p.mt-2 Es decir, la eficacia se relaciona con la satisfacción del cliente, la calidad del producto o servicio entregado, el resultado en general.

              .col-lg-1
      .row.justify-content-center
        .col-lg-10
          .bloque-texto-f.color-acento-contenido.pt-4.px-5.mb-4
            .bloque-texto-f__comillas
              i.fas.fa-quote-left
              i.fas.fa-quote-right
            p.bloque-texto-f__texto La efectividad es la correlación o producto de la eficiencia y la eficacia, lo que determina a la postre en la capacidad competitiva de la empresa. Así mismo, de estos dos conceptos, eficiencia y eficacia, se deriva el concepto de productividad, que no es más que la relación o medida de la eficiencia y la eficacia en función del tiempo.
            .bloque-texto-f__autor.mb-3
              h6.mb-0 - Osaín, 2007 
      p La siguiente figura muestra esquemáticamente la relación de la naturaleza de los indicadores de gestión, como un efecto desagregado de la efectividad.
      .row.justify-content-center.bg22
        .titulo-sexto.color-acento-contenido.mt-4
          h5 Figura 8.
          span Naturaleza de los indicadores de gestión.
        img.mt-4(src='@/assets/curso/tema2/9.svg', alt='Texto que describa la imagen')   
        p.mt-5 Para ampliar sobre cómo establecer indicadores de gestión se sugiere consultar en el material complementario, el artículo “Los indicadores de gestión como herramienta de competitividad empresarial”, donde se dan recomendaciones de las baterías de indicadores para las empresas.
        separador
        #t_2_3.titulo-segundo.color-acento-contenido
          h2 2.3.  Comportamiento y trazabilidad
        p Cuando se define el concepto de trazabilidad, se evoca a la reconstrucción de los hechos históricos, la ubicación, localización de información de un proceso, hasta llegar a un producto o servicio, acudiendo a los registros guardados.
      .row.justify-content-center
        .col-lg-10
          .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
            .bloque-texto-g__img(
              :style="{'background-image': `url(${require('@/assets/curso/tema2/10.png')})`}"
            )
            .bloque-texto-g__texto.p-4
              p.mb-0 En este sentido, los indicadores de gestión aportan en la trazabilidad de las empresas porque denotan el sentido evolutivo de su capacidad competitiva; se debe contar con un sistema de registro de información que facilite y describa estos comportamientos evolutivos de la empresa, para ver si se está cumpliendo con las metas u objetivos.
      
      p.text-center.mt-4 Una buena trazabilidad debe contener:
      .row.mb-5
        .col-md-3.col-lg.mb-5.mb-lg-0
          .tarjeta-avatar
            img(src='@/assets/curso/tema2/11.svg' alt='AvatarTop')

            .tarjeta.color-primario
              .text-white.p-4
                p Una cadena ininterrumpida de comparaciones. 

        .col-md-3.col-lg.mb-5.mb-lg-0
          .tarjeta-avatar
            img(src='@/assets/curso/tema2/12.svg' alt='AvatarTop')

            .tarjeta.color-primario
              .text-white.p-4
                p No contar con incertidumbre de la información real.
 
        .col-md-3.col-lg.mb-5.mb-lg-0
          .tarjeta-avatar
            img(src='@/assets/curso/tema2/13.svg' alt='AvatarTop')

            .tarjeta.color-primario
              .text-white.p-4
                p Sustentarse en registros y documentos.
        .col-md-3.col-lg.mb-5.mb-lg-0
          .tarjeta-avatar
            img(src='@/assets/curso/tema2/14.svg' alt='AvatarTop')
            .tarjeta.color-primario
              .text-white.p-4
                p Ajustes y recalibraciones del indicador que impulsan la evolución.
    .row.justify-content-center.mt-5
      .col-lg-8.bg9.py-md-4.py-2.px-5
        .row.align-items-center 
          .col-lg-9
            p.text-center.mb-0 Ejemplo trazabilidad del indicador de crecimiento en ventasen un año.
          .col-lg-3
            .row
              .col-auto
                a.boton.color-acento-botones.indicador__container(@click="modal1 = true")
                  span Observar
                  i.fas.fa-file
                  .indicador--click(v-if="mostrarIndicador")

            ModalA(:abrir-modal.sync="modal1")
              .row.justify-content-center
                .col-md-10
                  p Una empresa debe establecer un sistema de seguimiento sobre sus ventas, de tal manera que denote un sentido de evolución, permita evaluar el logro general del objetivo por crecimiento, y este detalle cómo se logró a través del tiempo.
                  .row.justify-content-center
                    .col-md-10
                      figure
                        img(src='@/assets/curso/tema2/15.svg', alt='Texto que describa la imagen')

</template>

<script>
export default {
  name: 'Tema2',
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
