<template lang="pug">
.curso-main-container.pb-3.animated.fadeIn
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .row
      .col.col-12
        .titulo-principal.color-acento-contenido
          .titulo-principal__numero
            span 9 
          h1 Diferenciación

        .row.mb-4.d-flex.align-items-center
          .col.col-12.col-lg-4.position-relative
            .sobre-flotante-t9
              img.w-50(src='@/assets/curso/banner/img03.svg', class='img-fluid')          
            picture
              img(src='@/assets/curso/tema9/img01.png', alt='Diferenciación', class='img-fluid')
          .col.col-12.col-lg-8
            p Cuando se contabiliza menos mercancía de la que realmente existe, puede dar lugar a un exceso de existencias, como consecuencia de realizar aprovisionamiento antes de tiempo, provocando así problemas de espacio; así mismo cuando se contabiliza más mercancía de la existente, puede haber retrasos en la preparación y entrega de pedidos y provocar sobrecostos para remediar el error.
            p Otro caso que se puede presentar es cuando los datos en el sistema no son los correctos, lo que puede provocar que se venda un producto del cual no hay existencias o no vender un producto del que sí las hay, esto podría provocar desconfianza a los clientes y pérdidas de ventas.

        p Las diferencias entre la previsión y la realizada puede ser una de las principales causas de las desviaciones de los inventarios, para ello deben generarse planes preventivos y correctivos para alcanzar los objetivos.

        .cajon.color-primario.p-4.mb-4
          .row.py-4.px-0.d-flex.justify-content-center
            .col.col-10.px-0
              p.fw-bold Por ejemplo
              P Si el volumen del inventario ha aumentado se deberá espaciar el aprovisionamiento o reducir la cantidad de existencias, ayudando a reducir los productos obsoletos o caducados y en el caso de que el inventario se haya reducido se debe controlar que el nivel de servicio no baje al reducir el tiempo de aprovisionamiento o aumentar las faltas de existencia

        p.py-4 Teniendo en cuenta lo anterior, los tipos de desviaciones que pueden darse son:

        .row.p-2
          .col.col-12.col-lg-4
            .tarjeta.bg-tarjeta-amarilla.p-4
              img.img90.m-auto.mb-4(src='@/assets/curso/tema9/img02.svg', alt='', class='img-fluid')
              p.fw-bold.mb-0 Desviaciones positivas
              p Son aquellas en las que se detecta que las cantidades del inventario actual han cambiado respecto al objetivo o inventario inicial.
          .col.col-12.col-lg-4
            .tarjeta.p-4(style='background-color: #FFEECA')
              img.img90.m-auto.mb-4(src='@/assets/curso/tema9/img03.svg', alt='', class='img-fluid')
              p.fw-bold.mb-0 Desviaciones negativas
              p Son aquellas en las que se detecta que las cantidades del inventario actual han disminuido respecto al objetivo o inventario inicial.
          .col.col-12.col-lg-4
            .tarjeta.bg-tarjeta-amarilla.p-4
              img.img90.m-auto.mb-4(src='@/assets/curso/tema9/img04.svg', alt='', class='img-fluid')
              p.fw-bold.mb-0 Sin desviaciones
              p Es cuando se detecta que las cantidades del inventario actual no han experimentado variaciones respecto al inicial.
            


</template>

<script>
export default {
  name: 'Tema9',
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
