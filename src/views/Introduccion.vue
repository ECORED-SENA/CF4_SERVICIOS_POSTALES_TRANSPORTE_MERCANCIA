<template lang="pug">
.curso-main-container.introduccion.animated.fadeIn
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span i
      h1 Introducción
    
    p La actividad de almacenamiento consiste en ubicar la mercancía en la zona de almacenaje, para ello es importante utilizar los medios adecuados para el transporte interno de mercancía, así como las herramientas tecnológicas disponibles y ubicarla en la zona más conveniente, con el fin de acceder y localizarla fácilmente. 
    p A continuación, se invita a ver el siguiente video:

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video
    
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
