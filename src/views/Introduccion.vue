<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5(data-aos="fade")
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.bg1
      .col-md-8.mt-5
        .cajon.color-primario.p-4.mb-4
          p.text-center Bienvenido al componente formativo Formulación diagnóstica y reconocimiento de iniciativas de desarrollo. El siguiente video nos presenta, de forma general, la temática a desarrollar a lo largo del componente: el diagnóstico empresarial.
      figure.mb-5
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/_o_xu1cMoHQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)


</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
