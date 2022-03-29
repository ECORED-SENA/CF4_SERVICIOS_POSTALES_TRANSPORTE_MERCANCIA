<template lang="pug">
.curso-main-container.pb-3.animated.fadeIn
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .row.d-flex.justify-content-center
      .col.col-12
        .titulo-principal.color-acento-contenido
          .titulo-principal__numero
            span 4
          h1 Contenedores

        .row.mb-5
          .col.col-12.col-lg-4.position-relative
            .sobre-flotante-t4
              img.w-50(src='@/assets/curso/banner/img01.svg', class='img-fluid')
            picture
              img(src='@/assets/curso/tema4/img01.png', alt='Contenedores', class='img-fluid')
          .col.col-12.col-lg-8.pt-5
            p Corresponden a elementos portátiles y con gran resistencia que protegen a la mercancía que se aloja en su interior de posibles golpes y permiten la ubicación y el apilado de mercancía, construyendo una unidad de carga, que posibilita una posterior manipulación y almacenaje, la que se puede realizar de manera manual o a través de aparatos de manutención, estos pueden ser en metal, los cuales por su resistencia son especialmente usados para el transporte de mercancía delicada y para su almacenaje se requiere estanterías que permitan colocar soportes específicos; también se encuentran contenedores en madera, los cuales normalmente se construyen sobre un pallet de madera dando la facilidad de poder usarse para el transporte como par su almacenaje en estanterías, finalmente se encuentran los contenedores en plástico, se construyen sobre una base de pallet de plástico y son especialmente usados en el sector de la alimentación.

            p Según su característica principal se pueden clasificar como apilables y no apilables, como se muestra a continuación:

        p.fw-bold Contenedores apilables 
        p Son aquellos que independientemente del material de construcción están dotados de patas o soportes de modo que se puedan colocar unos sobre otros, formando una pila de almacenamiento, en estos se destacan los siguientes: 

      .col.col-11.py-5
        img(src='@/assets/curso/tema4/img02.svg', alt='Contenedores apilables', class='img-fluid')

      .col.col-12.py-5
        p.fw-bold Contenedores no apilables 
        p Hace referencia a los contenedores que provistos de ruedas orientables y que se utilizan como elemento de enlace entre los almacenes y los centros de distribución, normalmente están construidos con tubos y alambres de acero, con laterales desmontables de forma que puedan encajar unos con otros para su almacenaje cuando están vacíos.

        p El uso de este tipo de contenedores se extendió para su utilización en las grandes cadenas de alimentación y las grandes superficies de ventas, entre algunas de las ventajas con los que estos cuentan se encuentran:


        ol.mt-5.lista-ol--cuadro.lista-separador
          li
            .lista-ol--cuadro__vineta
              span 1
            | Proteger la mercancía frente a robos o daños.
          li
            .lista-ol--cuadro__vineta
              span 2
            | Facilitar la entrega rápida de mercancía.
          li
            .lista-ol--cuadro__vineta
              span 3
            | Reducir tarifas debido a que pueden mover grandes volúmenes.



</template>

<script>
export default {
  name: 'Tema4',
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
