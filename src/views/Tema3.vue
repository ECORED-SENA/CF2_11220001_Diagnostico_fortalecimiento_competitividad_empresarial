<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5(data-aos="fade")
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Conclusiones diagnósticas y priorización estratégica competitiva      
    .row.justify-content-center.bg1
      .col-lg-10.mt-5
        img(src='@/assets/curso/tema3/1.png', alt='Texto que describa la imagen')
      p.mt-5 Continuando con el proceso de diagnóstico, una vez sensibilizada la información y clasificada en oportunidades, amenazas, fortalezas y debilidades, como se trató previamente, es el momento de sacar las conclusiones diagnósticas del ejercicio realizado, identificando y estableciendo aquellos factores de mayor impacto para la empresa, bien sean favorables o desfavorables, lo que constituirá el marco referencial para la toma de decisiones, fijación de objetivos y demás aspectos del futuro inmediato de la empresa, en aras del desarrollo competitivo.
      p En el siguiente vídeo se observa cómo se pueden sintetizar las conclusiones del diagnóstico exógeno:
    .row.justify-content-center.bg72
      .col-12.px-5
        .row.justify-content-center
          .col-lg-8
            .titulo-quinto.color-acento-contenido
              h4 Determinación de conclusiones diagnósticas exógenas
          .col-lg-10.mb-5
            figure
              .video
                iframe(width="560" height="315" src="https://www.youtube.com/embed/phsEKaT_LJo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          p.mb-5 De igual manera para establecer las conclusiones de diagnóstico endógeno, y facilitar el proceso, se expone el siguiente video:
          .col-lg-8
            .titulo-quinto.color-acento-contenido
              h4 Determinación de conclusiones diagnósticas endógenas
          .col-lg-10.mb-5
            figure
              .video
                iframe(width="560" height="315" src="https://www.youtube.com/embed/bEKXAX8hK_U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          p.mb-5 Las conclusiones diagnósticas generales para la competitividad se presentan en el siguiente video:
          .col-lg-8
            .titulo-quinto.color-acento-contenido
              h4 Conclusiones diagnósticas generales
          .col-lg-10
            figure
              .video
                iframe(width="560" height="315" src="https://www.youtube.com/embed/52dohN9ODKQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
         
</template>

<script>
export default {
  name: 'Tema3',
  components: {},
  data: () => ({
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
