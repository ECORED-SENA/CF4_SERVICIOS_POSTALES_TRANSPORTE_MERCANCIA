<template lang="pug">
.curso-main-container.pb-3.animated.fadeIn
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .row.d-flex.justify-content-center
      .col.col-12
        .titulo-principal.color-acento-contenido
          .titulo-principal__numero
            span 3
          h1 Ubicación de mercancía

        .row.mb-5
          .col.col-12.col-lg-8.pt-5
            p Para asignar la ubicación de la mercancía en el almacén es importante tener en cuenta las características de esta, como, rotación, peso, volumen, entre otras.
            p Estos datos son útiles para la toma de decisiones a la hora de definir: el tamaño de las paletas, los equipos, el sistema de almacenamiento y la amplitud de los pasillos y en general de todo lo que pueda condicionar los metros cuadrados y cúbicos que se tendrán que destinar para el almacenamiento.
            p A continuación, se presentan algunos criterios de clasificación de las mercancías y sus determinadas actividades de manipulación, que son importantes a la hora de ubicar la mercancía en el almacén, a saber:
          .col.col-12.col-lg-4.position-relative
            .sobre-flotante-t3
              img.w-50(src='@/assets/curso/banner/img03.svg', class='img-fluid')
            picture
              img(src='@/assets/curso/tema3/img01.png', alt='Ubicación de mercancía', class='img-fluid')

        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg-tarjeta-acordeon")
          .row(titulo="Según volumen o dimensiones")
            .col-12.mb-4.mb-md-0
              .tabla-a.color-acento-contenido 
                table
                  thead
                  tr.bg-table1
                    th.w-25.text-center Cargas
                    th Características
                  tbody
                    tr.bg-table2
                      td.fs-6 Pequeñas y medianas
                      td.text-table Se pueden manipular con las manos (hasta 10 kg).
                    tr.bg-table3
                      td.fs-6 Paletizadas
                      td.text-table Se encuentran sobre paletas.
                    tr.bg-table2
                      td.fs-6 Voluminosas
                      td.text-table Sus dimensiones forman parte del producto, no se pueden apilar, ejemplo: lavadoras.
                    tr.bg-table3
                      td.fs-6 Dimensiones especiales
                      td.text-table Requieren ser manipuladas con puente grúa.                     
                    tr.bg-table2
                      td.fs-6 Muy voluminosas
                      td.text-table Puede ser una unidad muy grande o la agrupación de varias mercancías (contenedor).
                    tr.bg-table3
                      td.fs-6 Volumen excepcional
                      td.text-table Medidas extremadamente grandes que necesitan transporte especial, el cual debe contar con permisos y normas de señalización.

          .row(titulo="Según forma de ubicación")
            .col-12.mb-4.mb-md-0
              .tabla-a.color-acento-contenido 
                table
                  thead
                  tr.bg-table1
                    th.w-25.text-center Cargas
                    th Características
                  tbody
                    tr.bg-table2
                      td.fs-6 Sencillas 
                      td.text-table Se depositan unidades individuales en las estanterías del almacén.
                    tr.bg-table3
                      td.fs-6 Apilables
                      td.text-table Se colocan unas encima de otras.

          .row(titulo="Según fragilidad")
            .col-12.mb-4.mb-md-0
              .tabla-a.color-acento-contenido 
                table
                  thead
                  tr.bg-table1
                    th.w-25.text-center Cargas
                    th Características
                  tbody
                    tr.bg-table2
                      td.fs-6 Resistentes 
                      td.text-table Pueden soportar mucho peso, ejemplo: losas de mármol.
                    tr.bg-table3
                      td.fs-6 Ligeras
                      td.text-table Soportan peso encima, pero con limitaciones, ejemplo: cajas de leche.
                    tr.bg-table2
                      td.fs-6 Frágiles 
                      td.text-table No soportan peso encima, se deben poner de manera individual.

          .row(titulo="Según propiedades")
            .col-12.mb-4.mb-md-0
              .tabla-a.color-acento-contenido 
                table
                  thead
                  tr.bg-table1
                    th.w-25.text-center Cargas
                    th Características
                  tbody
                    tr.bg-table2
                      td.fs-6 Perecederas
                      td.text-table Tienen fecha de caducidad, por eso hay que dar salida a la mercancía más antigua. Por ejemplo: alimentación o fármacos.
                    tr.bg-table3
                      td.fs-6 Duraderas
                      td.text-table No es necesario establecer un orden prioritario de salida y el tiempo de almacenaje no es una variable primordial.

          .row(titulo="Según rotación")
            .col-12.mb-4.mb-md-0
              .tabla-a.color-acento-contenido 
                table
                  thead
                  tr.bg-table1
                    th.w-25.text-center Cargas
                    th Características
                  tbody
                    tr.bg-table2
                      td.fs-6 Altas
                      td.text-table Aquellas con ritmo elevado de entradas y salidas.
                    tr.bg-table3
                      td.fs-6 Medias
                      td.text-table Rotación media.
                    tr.bg-table2
                      td.fs-6 Bajas
                      td.text-table Apenas registran movimientos en el almacén.

      .col.col-12
        p Para este punto, según el tipo de mercancía es importante que vengan en #[i pallets], en cajas, bien preparadas y protegidas para su respectivo transporte hasta el centro de distribución; ya puestas en el almacén, el coordinador de recibo y despacho se debe encargar de ubicar los productos de tal manera que se encuentren listos para un próximo envío.
        p Toda ubicación en el almacén debe tener una codificación única, fácilmente diferenciada del resto para identificar las diferentes dependencias y asignarles un código que permita el rápido y correcto reconocimiento de cada área, pasillo o estantería, este método de codificación puede ser definido por cada empresa.
        p Por ejemplo:

        .row.justify-content-center.align-items-stretch
          .col-lg-6.my-5
            p.p-3.text-center.bg-color-acento-contenido Codificación por estantería o lineal
            img.w-75.m-auto.mt-3(src='@/assets/curso/tema3/img02.svg', alt='Codificación por estantería o lineal', class='img-fluid')
            .bg-color-acento-contenido.p-4.mt-3
              p #[b  Nota.] Tomada de Campo, Hervás y Revilla (2013). 
              
              p.mb-0 Las estanterías se numeran de forma correlativa, adicionalmente se deben numerar los niveles de profundidad o ubicaciones, posteriormente se numeran las alturas, empezando por el suelo asignando un número de forma correlativa a medida que se asciende. Se pueden realizar recorridos de ida y vuelta en el mismo pasillo.
          .col-lg-6.my-5
            p.p-3.text-center.bg-color-acento-contenido Codificación por pasillo o peine
            img.w-75.m-auto.mt-3(src='@/assets/curso/tema3/img03.svg', alt='Codificación por pasillo o peine', class='img-fluid')
            .bg-color-acento-contenido.p-4.mt-3
              p #[b Nota.] Tomada de Campo, Hervás y Revilla (2013).

              p.mb-1 Cada pasillo tiene asignado un consecutivo, de tal forma que solo se puede recorrer el pasillo en un solo sentido. Se irán numerando de izquierda a derecha los niveles de profundidad, con el fin de asignar los números impares a la izquierda y los pares a la derecha, posteriormente se deben numerar las alturas de cada nivel.
            
        .cajon.color-primario.p-4.mb-4
          p Aunque normalmente se usan estanterías sencillas de una o dos posiciones, es importante tener en cuenta la rotación del producto y la facilidad de acceso, para este caso se podría hacer uso de estanterías dinámicas por gravedad, las cuales permiten que el producto siempre esté disponible para su recogida teniendo en cuenta que los mecanismos de rodillo facilitan el trabajo, en este caso se utiliza el sistema FIFO (primeros en entrar, primeros en salir).

        p Aunque los almacenes representan costos, son necesarios para una operación adecuada de los procesos de distribución.

        br
        p El proceso de ubicación en el almacén tiene especial énfasis en las políticas de ubicación, las cuales definen la manera en que serán ubicados los bienes, para que los tiempos de recuperación sean más rápidos.

        ol.mt-4.lista-ol--cuadro.lista-separador
          li
            .lista-ol--cuadro__vineta
              span 1
            | Ubicación aleatoria. 
          li
            .lista-ol--cuadro__vineta
              span 2
            | Por clases.
          li
            .lista-ol--cuadro__vineta
              span 3
            | Familias.

          li
            .lista-ol--cuadro__vineta
              span 4
            | Más cerca.
          li
            .lista-ol--cuadro__vineta
              span 5
            | Por volumen. .

        br
        p 
          span.fw-bold Nota. 
          | Tener además en cuenta el tiempo de almacenamiento: temporal, estacional, semipermanente. 

        h5 Normas para la colocación de la mercancía 
        p Es importante que las personas que manipulan la mercancía conozcan las normas o reglas para ubicar la mercancía, entre las que se encuentran:

      .col.col-11.my-5
        img(src='@/assets/curso/tema3/img04.svg', alt='Normas para la colocación de la mercancía', class='img-fluid')

      .col.col-12
        p Para realizar los mínimos recorridos internos, se puede clasificar el stock mediante el #[b método ABC], el cual permite ordenar y categorizar las referencias según la frecuencia de salida en un periodo determinado.

        br
        p.fw-bold Método ABC
        p Uno de criterios que se deben tener en cuenta para colocar los productos en el almacén es la rotación, para categorizar estos productos en función de la rotación se utiliza el método ABC, este facilita la ordenación de todas las referencias según sus índices de ventas, adicionalmente permite la administración de los recursos de inventario y facilita la toma de decisiones. 
          span.fw-bold Este análisis se basa en la Ley de Pareto, en el cual se pueden clasificar los artículos en tres grupos A, B o C así:

        img.w-75.m-auto.py-5(src='@/assets/curso/tema3/img05.png', alt='Método ABC', class='img-fluid')



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
