<template lang="pug">
.curso-main-container.pb-3.animated.fadeIn
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .row
      .col.col-12
        .titulo-principal.color-acento-contenido
          .titulo-principal__numero
            span 5
          h1 Herramientas de comunicación

        p A través de las herramientas de información y comunicación se busca mejorar los flujos de información, hoy en día en la gestión de los almacenes se utilizan diferentes Tecnologías de la Información y la Comunicación como:


        ol.mt-5.lista-ol--cuadro.lista-separador
          li
            .lista-ol--cuadro__vineta
              span 1
            em Warehouse Management System (WMS).
          li
            .lista-ol--cuadro__vineta
              span 2
            em Labor Management System (LMS).
          li
            .lista-ol--cuadro__vineta
              span 3
            em Yard Management System (YMS).
          li
            .lista-ol--cuadro__vineta
              span 3
            em Picking To Voice y Picking To Light.

        p A continuación, se ofrece una visión general de cada una de ellas:

        .row.mt-2
          .col.col-12.col-md-6.col-lg-4.mt-4
            .tarjeta-text-up
              img(src='@/assets/curso/tema5/img01.png', alt='WMS', class='img-fluid')
              .tarjeta-text-up__texto
                h5 
                  em
                    | WMS (Warehouse Management System)
                p.mb-0 Sistema de Información que permite la administración del flujo del producto e información dentro del proceso de almacenamiento teniendo en cuenta las siguientes funciones:
                ol.lista-ol
                  li.mb-0
                    span.text-bold a. 
                    | Recepción.
                  li.mb-0
                    span.text-bold b. 
                    | Almacenamiento.
                  li.mb-0
                    span.text-bold c. 
                    | Administración de inventarios.
                  li.mb-0
                    span.text-bold d. 
                    | Procesamiento de órdenes y cobros.
                  li.mb-0
                    span.text-bold e. 
                    | Preparación de pedidos.

          .col.col-12.col-md-6.col-lg-4.mt-4
            .tarjeta-text-up
              img(src='@/assets/curso/tema5/img02.png', alt='WMS', class='img-fluid')
              .tarjeta-text-up__texto
                h5
                  em
                    | LMS (Labor Management System)                
                p Tiene como fin controlar las actividades de los operadores del almacén, siendo un complemento del WMS. Con este sistema se logra mejorar la productividad del almacén, como consecuencia de la mejora en el desempeño de los trabajadores y el aprovechamiento de los recursos.
          .col.col-12.col-md-6.col-lg-4.mt-4
            .tarjeta-text-up
              img(src='@/assets/curso/tema5/img03.png', alt='WMS', class='img-fluid')
              .tarjeta-text-up__texto
                h5
                  em
                    | RFID (Radio Frecuency Identification)               
                p Es una tecnología la cual usa ondas de radio para identificar los productos de forma automática, involucrando el uso de etiquetas o tags que emiten señales de radio a los encargados de recoger las señales. Este sistema tiene gran potencial de uso ya que permite la codificación de los productos con el estándar internacional de codificación, la cual identifica de manera única un producto a nivel mundial.
          .col.col-12.col-md-6.col-lg-4.mt-4
            .tarjeta-text-up
              img(src='@/assets/curso/tema5/img04.png', alt='WMS', class='img-fluid')
              .tarjeta-text-up__texto
                h5.font-italic Picking to voice y picking to light                
                p.mb-0 El  
                  span.fw-bold.font-italic picking to light 
                  | es un conjunto de luces que indican las ubicaciones donde recoger los productos, las cantidades y tienen conexión con el sistema de inventarios, el cual se actualiza en tiempo real una vez realizada la operación.
                p El  
                  span.fw-bold.font-italic picking to voice 
                  | permite al operario del almacén llevar un equipo de comunicación para recibir y enviar mensajes acerca de las operaciones de recogida de productos.
          .col.col-12.col-md-6.col-lg-4.mt-4
            .tarjeta-text-up
              img(src='@/assets/curso/tema5/img05.png', alt='WMS', class='img-fluid')
              .tarjeta-text-up__texto
                h5 Código de barras              
                p Tecnología de codificación que permite capturar información de los números de identificación de artículos, unidades logísticas y localizaciones de manera automática en cualquier punto.
                p Es representado gráficamente por un rectángulo compuesto de barras y espacios claros y oscuros permitiendo así la lectura a través de un lector óptico.

          .col.col-12.col-md-6.col-lg-4.mt-4
            .tarjeta-text-up
              img(src='@/assets/curso/tema5/img06.png', alt='WMS', class='img-fluid')
              .tarjeta-text-up__texto
                h5
                  em
                    | YMS (Yard Management System)              
                p Sistema de administración de patios, el cual permite controlar los muelles de recepción y despacho, rastreo y seguimiento del movimiento que realizan los trailers a través de tecnología de localización en tiempo real.





</template>

<script>
export default {
  name: 'Tema3',
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
