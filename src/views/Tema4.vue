<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5(data-aos="fade")
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Recomendaciones y formulación de planes    
    .row.justify-content-center.bg1
      .row.justify-content-center.mt-5
        .col-lg-10
          .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
            .bloque-texto-g__img(
              :style="{'background-image': `url(${require('@/assets/curso/tema4/1.png')})`}"
            )
            .bloque-texto-g__texto.p-4
              p.mb-0 La matriz DOFA, dentro de sus múltiples posibilidades en pro del desarrollo competitivo empresarial, se puede utilizar como marco referencial de actuación y no meramente como un ejercicio para fijar iniciativas estratégicas de cruces entre oportunidades y fortalezas, oportunidades y debilidades, fortalezas y amenazas, y debilidades y amenazas. 
          p.mt-4 Este primer enfoque de tomar iniciativas de acción tiene que alinearse con el sentido estratégico corporativo, por tal motivo, un nuevo uso será el concerniente a la fijación de iniciativas de actuación y posteriormente de objetivos, para lo cual se invita a ver el siguiente video:
    .row.justify-content-center.mb-4
      .col-lg-8.col22
        p.text-center <strong>Recomendaciones o sugerencias para el desarrollo estratégico – recomendaciones para emprender planes</strong>
    figure.mb-4
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/MsadzGMq-s4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    separador
    .row.bgt41
      #t_4_1.titulo-segundo.color-acento-contenido
        h2 4.1. Fijación de objetivos 
      p Una funcionalidad adicional de la matriz DOFA es, que como define el marco referencial para la planeación, sirve para definir los objetivos empresariales tanto los corporativos como funcionales o de unidad de negocio. 
      p En el siguiente video se muestra cómo la matriz DOFA facilita este propósito:
      .row.justify-content-center.mb-4.mt-5
        .col-lg-8.col22
          p.text-center <strong>Recomendaciones o sugerencias para el desarrollo estratégico – fijación de objetivos</strong>
      figure.mb-4
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/pBow0WDS6tg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      separador
      #t_4_2.titulo-segundo.color-acento-contenido
        h2 4.2. Determinación de estrategias
      p Todos los objetivos se valen de estrategias para su logro, y las conclusiones estratégicas permiten realizar esta fijación estratégica, como se muestra en el siguiente vídeo:
    .row.justify-content-center.mb-4.mt-5
      .col-lg-8.col22
        p.text-center <strong>Recomendaciones o sugerencias para el desarrollo estratégico - determinación de estrategias y tácticas</strong>
    figure.mb-4
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/ITCUHW1CuBo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    separador
    #t_4_3.titulo-segundo.color-acento-contenido
      h2 4.3. Plan de acción
    p El marco referencial encontrado a partir de la metodología DOFA, permite no solo fijar objetivos corporativos que se deben traducir en objetivos funcionales de unidad de negocio, sino establecer todo un esquema de diseño de formulación de plan de acción, como las iniciativas para el logro de los objetivos.
    p El siguiente video explica secuencialmente estos pasos:
    .row.justify-content-center.mb-4.mt-5
      .col-lg-8.col22
        p.text-center <strong>DOFA como inspiración de fijación de planes de acción</strong>
    figure.mb-4
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/u7GnWIeT9Z0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    separador
    .row.bgt42  
      #t_4_4.titulo-segundo.color-acento-contenido
        h2 4.4. Control y seguimiento
      p El control y seguimiento según la metodología establecida, exige medidas diferenciales para cada posición estratégica, lo cual se aborda en el siguiente video:
      .row.justify-content-center.mb-4.mt-5
        .col-lg-8.col22
          p.text-center <strong>Control y seguimiento al plan de acción por cada iniciativa de desarrollo</strong>
      figure.mb-4
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/fo2rctkiO6I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        .row.justify-content-center.mt-5
          .col-lg-8.bg9
            .row.py-3.px-5.align-items-center
              .col-lg-9
                p.mb-3.mb-md-0 La siguiente figura muestra un formato de ejemplo que se debe diligenciar para llevar el registro y control de las iniciativas del plan de acción.
              .col-lg-3
                .row
                  .col-auto
                    a.boton.color-acento-botones.indicador__container.aqw(@click="modal1 = true")
                      span <strong>Observar</strong>
                      i.fas.fa-file
                      .indicador--click(v-if="mostrarIndicador")
                ModalA(:abrir-modal.sync="modal1")
                  .row.justify-content-center
                    .col-md-12
                      .titulo-sexto.color-acento-contenido.mt-4
                        h5.text-small Figura 9. 
                        span.text-small  Formato para el registro y control de las iniciativas del plan de acción.
                      .row.justify-content-center
                        .col-md-12
                          figure
                            img(src='@/assets/curso/tema4/8.svg', alt='Texto que describa la imagen')     
      separador
      #t_4_5.titulo-segundo.color-acento-contenido
        h2 4.5. Acciones correctivas
      p Las acciones correctivas al plan de desarrollo empresarial, ya no se hacen desde lo particular (posiciones relativas) sino como un todo, que recoge el modelo de desarrollo empresarial. Para la empresa es la conjugación de iniciativas de desarrollo que deben buscar la evolución global; desde este enfoque, el siguiente video, explica cómo hacerlo:
    .row.justify-content-center.mb-4.mt-5
      .col-lg-8.col22
        p.text-center <strong>Ajuste y control al plan de desarrollo y competitividad de la empresa</strong>
    figure.mb-4
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
                                                                                       



</template>

<script>
export default {
  name: 'Tema4',
  components: {},
  data: () => ({
    modal1: false,
    modal2: false,
    hash: 0,
  }),
  watch: {
    $route(to) {
      if (to.hash?.length) {
        const numero = to.hash.split('_')[1]
        this.mostrarCollapse(numero)
        document.getElementById('MapaGroup01').scrollIntoView({
          behavior: 'smooth',
        })
      }
    },
  },
  mounted() {
    this.$nextTick(() => {
      if (this.$route.hash.length) {
        const numero = this.$route.hash.split('_')[1]
        this.hash = numero
        setTimeout(() => {
          document.getElementById('MapaGroup01').scrollIntoView({
            behavior: 'smooth',
          })
        }, 500)
      }
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
  methods: {
    mostrarCollapse(id) {
      console.log(document.querySelector('#boton' + id))
      document.querySelector('#boton' + id).click()
    },
  },
}
</script>

<style lang="sass" scoped></style>
