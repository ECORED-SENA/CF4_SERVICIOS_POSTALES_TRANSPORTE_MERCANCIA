<template lang="pug">
.curso-main-container.pb-3.animated.fadeIn
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .row
      .col.col-12
        .titulo-principal.color-acento-contenido
          .titulo-principal__numero
            span 7
          h1 Sistema de Gestión de Almacenes - SGA    

        .row.mb-5
          .col.col-12.col-lg-5.position-relative
            .sobre-flotante-t7
              img.w-50(src='@/assets/curso/banner/img03.svg', class='img-fluid')
            picture
              img(src='@/assets/curso/tema7/img01.png', alt='Sistema de Gestión de Almacenes', class='img-fluid')
          .col.col-12.col-lg-7.pt-4
            p
              span.fw-bold También llamado WMS 
                em (Warehousing Management System) 
                | es un software que permite la gestión y control de las actividades que se realizan en el almacén, llamado “el corazón” del centro de distribución. 
              | A través de este se logra un control sobre todas las fases de la operación logística, este sistema maneja desde el control de inventario, asignación de tareas y equipos en tiempo real a partir de una serie de configuraciones de manera personalizadas, haciendo uso por ejemplo de alarmas que permiten avisar los límites de stock y evitar roturas. 

            p Se ha hecho evidente la evolución del proceso a través del cual se registra y manipula toda actividad logística pasando desde el uso de papel y lápiz por el registro de tablas de Excel hasta la aplicación de los sistemas SGA y radiofrecuencia. 

        p El objetivo principal de este sistema es controlar el movimiento y almacenaje de materiales en la empresa mediante una combinación artículo, localización, cantidad, unidad de medida e información de la orden para determinar dónde almacenar recoger mercancías y entre las principales ventajas se encuentran:

        img.w-75.m-auto(src='@/assets/curso/tema7/img02.svg', alt='Sistema de gestión de almacenes', class='img-fluid')

        .cajon.color-primario.p-4.my-4
          .h5 ¿Por qué implementar SGA?
          p El SGA da solución a la problemática de clasificación y orden en el almacén y el proceso de toma de inventarios, permitiendo visibilidad dentro del almacén en movimiento, pues el manejo de información se hace en tiempo real, actualmente este sistema permite administrar el orden, los recursos y las ubicaciones de los materiales en el almacén; con ello se logra correcta toma de decisiones, reducción de costos, optimización en tiempos de entrega y finalmente la satisfacción del cliente.

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
