<template lang="pug">
.curso-main-container.pb-3.animated.fadeIn
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .row
      .col.col-12
        .titulo-principal.color-acento-contenido
          .titulo-principal__numero
            span 8
          h1 Manejo de 
            em #[i software]: 
            | entrada, interpretación y salida de datos

        .row.mb-5.d-flex.align-items-center
          .col.col-12.col-lg-8
            .bloque-texto-d.color-primario.p-4
              .bloque-texto-d__texto.mb-2
                i.fas.fa-quote-left
                h3.text-regular El <em> software</em> con el cual se realiza el control del almacén dispone de herramientas para asignar valores a cada ubicación, por ejemplo, peso, volumen, capacidad, etc. y es mediante este <em> software</em> que se puede definir y parametrizar el almacén con el fin de facilitar la realización de las actividades de entrada, ubicación y preparación de los productos, para lograr una optimización de recorridos en el almacén.
                i.fas.fa-quote-right
              .bloque-texto-d__autor
                .h5.mb-0 (Campo, Hervás y Revilla, 2013)
          .col.col-12.col-lg-4.position-relative
            .sobre-flotante-t8
              img.w-50(src='@/assets/curso/banner/img01.svg', class='img-fluid')
            picture
              img(src='@/assets/curso/tema8/img01.png', alt='', class='img-fluid')

        p Todo debe estar respaldado por los sistemas documentales de la empresa, utilizando sistemas informáticos adecuados a las características de la empresa y capaces de mostrar información precisa, así como de facilitar la entrada de datos y la salida de información: órdenes de trabajo, pedidos, etiquetas, trazabilidad, indicadores de rendimiento.    

        .cajon.color-acento-contenido.p-4.mt-4
          .row.d-flex.justify-content-center.align-items-center
            .col.col-1.p-0
              img.img90(src='@/assets/curso/tema8/img02.svg', alt='', class='img-fluid')
            .col.col-9
              p Hoy se está en la era de la inteligencia artificial que se caracteriza por la automatización total de la manufactura y exige a la logística adaptarse a los nuevos cambios, por lo tanto, es necesario capacitar al capital humano para llevar adelante esta transformación digital y preparar los cambios organizacionales para facilitar la adopción de esta tecnología.
</template>

<script>
export default {
  name: 'Tema8',
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
