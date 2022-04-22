<template lang="pug">
.curso-main-container.pb-3.animated.fadeIn
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .row.d-flex.justify-content-center
      .col.col-12
        .titulo-principal.color-acento-contenido
          .titulo-principal__numero
            span 6
          h1 Registros

        p Cada fase del proceso logístico debe estar documentado, con el fin de tener un mayor control sobre las actividades que se realizan; con la implementación de un #[i software] SGA se logra la automatización de la recopilación de información para facilitar el control de los documentos de los almacenes, además de reducir los errores y aumentar la productividad.

        p Existen diferentes tipos de #[i software] con los que se logra:
        
        img.img700.m-auto.my-5(src='@/assets/curso/tema6/img01.svg', alt='Tipos de software', class='img-fluid')   

        p La única manera de registrar las operaciones que se realizan en el almacén es a través de documentos y las soluciones de #[i software] son las que permiten hoy en día automatizar la recogida de la información y facilitar el acceso a los datos en cualquier momento y lugar.

        p Algunos de los documentos que se utilizan para registrar las actividades en el almacén son los siguientes:

      .col.col-12
        .row.mt-4
          .col.col-12.col-lg-4
            .tarjeta-text-up-full
              img.img450(src='@/assets/curso/tema6/w01.jpg', alt='', class='img-fluid')
              .tarjeta-text-up-full__texto
                img.img90.my-4(src='@/assets/curso/tema6/wi01.svg', alt='', class='img-fluid')
                h5 Pedidos
                p A través de este se solicitan productos o mercancías.            
            
          .col.col-12.col-lg-4
            .tarjeta-text-up-full
              img.img450(src='@/assets/curso/tema6/w02.jpg', alt='', class='img-fluid')
              .tarjeta-text-up-full__texto
                img.img90.my-4(src='@/assets/curso/tema6/wi02.svg', alt='', class='img-fluid')
                h5 Entrada de almacén
                p Es un documento con el cual se garantiza el ingreso de la mercancía en la empresa y se provee información sobre estas entradas.
          
          .col.col-12.col-lg-4
            .tarjeta-text-up-full
              img.img450(src='@/assets/curso/tema6/w03.jpg', alt='', class='img-fluid')
              .tarjeta-text-up-full__texto
                img.img90.my-4(src='@/assets/curso/tema6/wi03.svg', alt='', class='img-fluid')
                h5 Recepción de mercancías
                p Se trata de certificar qué artículos se recibieron de los pedidos u órdenes de compra.

        .row.mt-4.d-flex.justify-content-center
          .col.col-12.col-lg-4
            .tarjeta-text-up-full
              img.img450(src='@/assets/curso/tema6/w04.jpg', alt='', class='img-fluid')
              .tarjeta-text-up-full__texto
                img.img90.my-4(src='@/assets/curso/tema6/wi04.svg', alt='', class='img-fluid')
                h5 Controles de los niveles de #[i stock]
                p Permite tener un control sobre las existencias en el almacén, los productos enviados y aquellos que necesitan ser repuestos.

          .col.col-12.col-lg-4
            .tarjeta-text-up-full
              img.img450(src='@/assets/curso/tema6/w05.jpg', alt='', class='img-fluid')
              .tarjeta-text-up-full__texto
                img.img90.my-4(src='@/assets/curso/tema6/wi05.svg', alt='', class='img-fluid')
                h5 Tarjeta de almacén
                p Se registran todos los movimientos de mercancía, para llevar un control sobre las entradas y salidas, así como saber cuándo es necesario realizar un nuevo pedido.

</template>

<script>
export default {
  name: 'Tema6',
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
