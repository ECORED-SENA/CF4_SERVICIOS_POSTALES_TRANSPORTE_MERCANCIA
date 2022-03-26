<template lang="pug">
.curso-main-container.pb-3.animated.fadeIn
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .row
      .col.col-12
        .titulo-principal.color-acento-contenido
          .titulo-principal__numero
            span 2 
          h1 Tipos de almacenamiento

        p Un aspecto fundamental del proceso logístico es la actividad de almacenamiento, pues además de guardar la mercancía, esta debe estar protegida y conservada adecuadamente, así como facilitar la operación de despacho cuando es requerida. Es a través de los almacenes que se regula el flujo de existencias que están planificadas para llevar a cabo las funciones de almacenamiento.

        p Los principales objetivos del almacenamiento son los siguientes:
        br
        br
      .col.col-12
        SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
          .tarjeta.color-primario.p-4
            .row.justify-content-center.mb-3
              .col-auto.my-4
                img.img90(src='@/assets/curso/tema2/s01.svg' alt='AvatarTop')
            p Maximización del espacio.
        
          .tarjeta.color-acento-contenido.p-4
            .row.justify-content-center.mb-3
              .col-auto.my-4
                img.img90(src='@/assets/curso/tema2/s02.svg' alt='AvatarTop')
            p Maximización en la utilidad de los equipos.

          .tarjeta.color-primario.p-4
            .row.justify-content-center.mb-3
              .col-auto.my-4
                img.img90(src='@/assets/curso/tema2/s03.svg' alt='AvatarTop')
            p Maximización en el acceso a todos los materiales y mercancías.
        
          .tarjeta.color-acento-contenido.p-4
            .row.justify-content-center.mb-3
              .col-auto.my-4
                img.img90(src='@/assets/curso/tema2/s04.svg' alt='AvatarTop')
            p Maximización de la protección de todos los materiales y mercancías.

          .tarjeta.color-primario.p-4
            .row.justify-content-center.mb-3
              .col-auto.my-4
                img.img90(src='@/assets/curso/tema2/s05.svg' alt='AvatarTop')
            p Maximización de la utilización de la mano de obra.

        .row.mb-5.d-flex.align-items-center
          .col.col-12.col-lg-5
            picture
              img(src='@/assets/curso/tema2/img01.png', alt='Gestión del almacen', class='img-fluid')
          .col.col-12.col-lg-7
            p Para dar cumplimiento a estos objetivos, es necesario considerar la mano de obra, el espacio y los equipos con los que se cuenta, para contribuir a la correcta gestión del almacén permitiendo reducción de gastos y garantizando calidad en el servicio al cliente.
            br
            .cajon.color-acento-contenido.p-4.mb-4
              p Esta actividad de almacenaje se puede realizar en espacios edificados o no, con diferentes mercancías, bajo diferentes acuerdos, por eso es importante conocer la clasificación de los almacenamientos, como se verá a continuación:
        
        p.fw-bold Tipos de almacenes
        p El almacén cumple una función muy importante ya que funciona como regulador de la distribución de la mercancía, debido a que por razones de transporte o producción es necesario contar con disponibilidad inmediata, para suministrar los productos necesarios con calidad, cantidad, en el momento justo y con los menores costos posible. 
        p Existen diversas clasificaciones de almacenes según el fin para el cual se va a utilizar, entre estas se encuentran las siguientes: 


      .col.col-12.position-relative
        .row.d-flex.justify-content-center
          .col.col-12.col-lg-3.tarjeta-tipo-almacenamiento
            h4 Según el grado de automatización
            a.boton.color-primario(@click="modal1 = true")
              span Ver más 
                i.fas.fa-arrow-right
            .indicador--click(v-if="mostrarIndicador")

            ModalA(:abrir-modal.sync="modal1")
              .row.d-flex.justify-content-center
                .col.col-12
                  .h5.mb-2 Según el grado de automatización
                  p El movimiento de la mercancía en este tipo de almacenes se realiza de forma automática reduciendo al mínimo la intervención de personal. Se pueden distinguir los siguientes tipos en función de cómo se realice la manipulación de los productos, se usen los equipos y se apliquen los sistemas almacenaje:
                .col.col-4
                  img(src='@/assets/curso/tema2/img04.png', alt='Almacenes convencionales', class='img-fluid')
                  p.mt-4
                    span.fw-bold Almacenes convencionales: 
                    | están equipados estanterías y medios sencillos para el transporte interno, las actividades en el almacén se realizan de forma manual o por medio de carretillas elevadoras convencionales.
                .col.col-4
                  img(src='@/assets/curso/tema2/img05.png', alt='Almacenes automatizados', class='img-fluid')
                  p.mt-4
                    span.fw-bold Almacenes automatizados: 
                    | la mayoría de las actividades se realizan con medios mecánicos, pueden superar los 40 metros de altura y se reducen los pasillos para optimizar la capacidad de almacenamiento.


          .col.col-12.col-lg-3.tarjeta-tipo-almacenamiento
            h4.text-end Según la estructura o construcción
            div.text-end
              a.boton.color-acento-contenido(@click="modal2 = true")
                span Ver más 
                  i.fas.fa-arrow-right
              .indicador--click(v-if="mostrarIndicador")

            ModalA(:abrir-modal.sync="modal2")
              .row.d-flex.justify-content-center
                .col.col-12
                  .h5.mb-2 Según la estructura o construcción
                  p Hacen referencia a la estructura o instalaciones que protegen la mercancía contra agentes atmosféricos, dependiendo del tipo de producto y las necesidades que garanticen su conservación y seguridad, estos se pueden clasificar en los siguientes:
                .col.col-4
                  img(src='@/assets/curso/tema2/img06.png', alt='Almacenes a cielo abierto', class='img-fluid')
                  p.mt-4
                    span.fw-bold Almacenes a cielo abierto: 
                    | se usan para depositar productos que no sufren deterioro cuando se exponen a la intemperie, ejemplo: material cerámico, madera o vehículos. Normalmente se delimitan a través de una valla o por número o señales pintadas.
                .col.col-4
                  img(src='@/assets/curso/tema2/img07.png', alt='Almacenes cubiertos', class='img-fluid')
                  p.mt-4
                    span.fw-bold Almacenes cubiertos: 
                    | el objetivo es la protección de los materiales contra los efectos de los agentes atmosféricos.

        .row.d-flex.justify-content-center
          .col.col-12.col-lg-3.tarjeta-tipo-almacenamiento.d-flex.align-items-end
            .row
              .col-12
                a.mb-2.boton.color-acento-botones(@click="modal3 = true")
                  span Ver más 
                    i.fas.fa-arrow-right
                .indicador--click(v-if="mostrarIndicador")
              .col-12
                h4 Según la función logística

            ModalA(:abrir-modal.sync="modal3")
              .row.d-flex.justify-content-center
                .col.col-12
                  .h5.mb-2 Según la función logística
                  p Según su localización o punto estratégico de ubicación entre los puntos de venta y el centro de producción, se pueden clasificar en:
                .col.col-4
                  img(src='@/assets/curso/tema2/img08.png', alt='Almacén central', class='img-fluid')
                  p.mt-4
                    span.fw-bold Almacén central: 
                    | se vinculan con el proceso productivo, absorbiendo los flujos de salida de fábrica y enviándolos hacia distribuidores y grandes clientes.
                .col.col-4
                  img(src='@/assets/curso/tema2/img09.png', alt='Almacén de tránsito o consolidación', class='img-fluid')
                  p.mt-4
                    span.fw-bold Almacén de tránsito o consolidación: 
                    | se utilizan cuando la zona a cubrir por un almacén regional es muy extensa, se ubican en puntos estratégicos para que la carga y descarga sea rápida.
                .col.col-4
                  img(src='@/assets/curso/tema2/img10.png', alt='Almacén regional o de zona', class='img-fluid')
                  p.mt-4
                    span.fw-bold Almacén regional o de zona: 
                    | suministran a los clientes mayoristas y detallistas de una región están lo más cerca posible de los puntos de venta.


          .col.col-12.col-lg-3.tarjeta-tipo-almacenamiento.d-flex.align-items-end
            .row
              .col-12.d-flex.justify-content-end
                a.bg-boton-tipo(@click="modal4 = true")
                  span Ver más 
                    i.fas.fa-arrow-right
                .indicador--click(v-if="mostrarIndicador")

                ModalA(:abrir-modal.sync="modal4")
                  .row.d-flex.justify-content-center
                    .col.col-12
                      .h5.mb-2 Según la actividad de la empresa
                      p Según la actividad económica de la empresa y el uso posterior que se va a dar a la mercancía almacenada, se pueden requerir los siguientes tipos de almacén:
                    .col.col-4
                      img(src='@/assets/curso/tema2/img11.png', alt='Almacén de materias primas', class='img-fluid')
                      p.mt-4
                        span.fw-bold Almacén de materias primas: 
                        | se sitúa en la planta de producción, en este se encuentran los suministros que se usan en la producción.
                    .col.col-4
                      img(src='@/assets/curso/tema2/img12.png', alt='Almacén de productos terminados', class='img-fluid')
                      p.mt-4
                        span.fw-bold Almacén de productos terminados: 
                        | su función principal es ser regulador para varias empresas, consiguiendo que los productos tengas el mayor índice de rotación posible.
                    .col.col-4
                      img(src='@/assets/curso/tema2/img13.png', alt='Almacén general', class='img-fluid')
                      p.mt-4
                        span.fw-bold Almacén general: 
                        | se usa para almacenar herramientas y materiales auxiliares para la producción: combustible, baterías, , material de limpieza, etc.
              .col-12.mt-2
                h4.text-end Según la actividad de la empresa

        .row.imagen-tipo-almacenamiento
          .col-auto
            img(src='@/assets/curso/tema2/img02.svg', alt='Tipos de almacenes')

      .col.col-12
        p Para un almacenamiento eficaz es necesario planificar las diferentes zonas del almacén, teniendo en cuenta:

        ol.lista-ol--cuadro.lista-separador
          li
            .lista-ol--cuadro__vineta
              span 1
            | Necesidades de la mercancía a almacenar.
          li
            .lista-ol--cuadro__vineta
              span 2
            | Metodología de trabajo en el almacén.
          li
            .lista-ol--cuadro__vineta
              span 3
            | Unidades recibidas por suministro y frecuencia.
          li
            .lista-ol--cuadro__vineta
              span 4
            | Medios de transporte requeridos para trabajar en cada zona.
          li
            .lista-ol--cuadro__vineta
              span 5
            | Técnicas de almacenaje a emplear.
          li
            .lista-ol--cuadro__vineta
              span 6
            | Superficie de almacenamiento disponible.
          li
            .lista-ol--cuadro__vineta
              span 7
            | Personal.
        br
        br
        p.fw-bold Sistemas de almacenamiento 
        p Dependiendo del sector y la naturaleza de la empresa existen diferentes soluciones de almacenamiento específicas, con las cuales conseguir una mayor eficiencia en función de factores como: la manera de colocar la mercancía, la localización o las características de los materiales, a continuación, se presentan algunas formas de apilamiento a tener en cuenta:

    .row.d-flex.justify-content-center
      .col.col-10.my-4
        table.tabla-color-acento-contenido.m-auto
          thead
            tr
              th.w-25 Forma de apilado
              th Características
          tbody              
            tr
              th Almacenamiento ordenado
              td 
                p Los productos están asignados a una ubicación específica. 
                p La manipulación se realiza de forma eficaz.
                p Permite mayor control de existencias.
            tr
              th Almacenamiento no regulado
              td 
                p Según la rotación de la mercancía se van ocupando zonas disponibles. 
                p Deficiente control de existencias.
            tr
              th Almacenamiento en bloque
              td 
                p Almacenamiento según las operaciones de carga y descarga.
                p No requiere gastos derivados de instalaciones específicas.
            tr
              th Almacenamiento a granel
              td 
                p Para materiales diseñados como unidades de carga.
                p Según el tipo de producto, puede ser compatible con las condiciones ambientales del entorno.
      
      .col.col-12.my-4
        p Adicionalmente, a nivel general se pueden identificar los siguientes sistemas de almacenamiento:
      .col.col-12.d-flex.justify-content-center
        ImagenInfografica.mb-5
          template(v-slot:imagen)
            figure
              img.img600(src='@/assets/curso/tema2/img03.png', alt='Texto que describa la imagen')
        
          .tarjeta.bg-tarjeta-info.p-3(x='11.5%' y='63.5%' numero='')
            .h5.mb-2 Sistema de bloques apilados
            p Se trata de formar bloques de productos homogéneos separados por pasillos, los cuales permiten el fácil acceso cada uno de ellos, se usa cuando existe un número reducido de referencias, pero viene en grandes cantidades por referencia.
            p En este sistema se aprovecha la superficie a no haber estanterías, adicionalmente se reduce la cantidad de pasillos, sin embargo, es difícil acceder a una referencia específica y puede existir posibilidad de deterioro.

          .tarjeta.bg-tarjeta-info.p-3(x='33%' y='23%' numero='')
            .h5.mb-2 Sistema convencional
            p En este sistema se utiliza un soporte intermedio (estanterías) que separa la mercancía, permitiendo que el almacén aproveche su espacio.
            p Consiste en almacenar mercancía paletizada e individual. Se usa en los casos que se almacenan productos paletizados con variedad de referencias; la principal ventaja es que la mercancía se puede manipular sin dificultad y permite un control sencillo de las existencias, sin embargo, es necesario almacenar la mercancía con paletas de una sola medida, pues las estanterías están adaptadas a esa dimensión.

          .tarjeta.bg-tarjeta-info.p-3(x='61.8%' y='23%' numero='')
            .h5.mb-2 Sistema dinámico
            p Este sistema se utiliza para mercancías que requieren una rotación perfecta, está conformado por estanterías metálicas que tienen incorporados caminos de rodillos.
            p Estas pueden tener inclinación o estar dispuestas horizontalmente si existe automatización.

          .tarjeta.bg-tarjeta-info.p-3(x='85%' y='63.5%' numero='')
            .h5.mb-2 Sistema compacto
            p Permite el almacenamiento de la mercancía en estanterías, aceptando el paso de carretillas entre los pasillos formados por su propia estructura.
            p En este almacenamiento se logra ocupar la superficie y el volumen disponible del almacén. Es propicio para almacenar mercancía homogénea con gran cantidad de paletas por referencia.
</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    mostrarIndicador: true,
    modal1: false,
    modal2: false,
    modal3: false,
    modal4: false,
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
