<template lang="pug">
.curso-main-container.pb-3.animated.fadeIn
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .row.d-flex.justify-content-center.g-5
      .col.col-12
        .titulo-principal.color-acento-contenido
          .titulo-principal__numero
            span 1
          h1 Equipos y herramientas de manipulación de carga
      .col.col-10
        .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema1/img01.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Una correcta gestión de almacenamiento requiere evaluar los equipos que se usan para el manejo de materiales y de almacenamiento, procurando tener fácil acceso al material y capacidad de movimiento desde la posición de almacenamiento hasta los muelles de carga.
              br
              br
              | El uso correcto del equipo permite mejorar la gestión de almacenamiento, por ejemplo, para artículos con alta rotación se deben usar equipos que permitan recogerlos de manera fácil.
      .col.col-12
        .cajon.color-primario.p-4.mb-4
          p El objetivo de estos equipos es permitir que se minimicen los tiempos en las tareas de manipulación, evitar que los operarios realicen esfuerzos excesivos, reducir costos y contribuir a realizar las actividades de forma más eficiente.

        p La mercancía, debido a sus características, requiere de medios de manipulación y almacenamiento determinados, a continuación, se presentan algunas características de está a través de criterios de clasificación, los cuales requieren determinadas actividades de manipulación.

        br
        p.fw-bold Clasificación de los equipos de manipulación de carga
        p Corresponden a sistemas manuales o mecánicos que sirven para facilitar las actividades de carga y descarga, así como trasladar los materiales al almacén a razón de su actividad diaria. Este proceso ha sido mejorado, pues en un principio estas actividades eran desarrolladas solamente por los operarios haciendo uso de su fuerza bruta y las manos, hoy en día ya se cuenta con equipos especializados que permiten la manipulación de la mercancía. 
        p La elección del equipo adecuado depende de diferentes aspectos como:

    .row.mt-2
      .col.col-12.col-lg-4.p-0
        .tarjeta-amarilla.m-2
          p 01
          p.mt-2 Espacio físico del almacén.
      .col.col-12.col-lg-4.p-0
        .tarjeta-amarilla.m-2
          p 02
          p.mt-2 Condiciones de trabajo.
      .col.col-12.col-lg-4.p-0
        .tarjeta-amarilla.m-2
          p 03
          p.mt-2 Rotación de los productos, entre otros.
        
    .row.mt-4
      .col.col-12
        p Estos equipos se pueden clasificar en equipos de almacenamiento estático y de almacenamiento dinámico, como se evidencia en la tabla que se presenta a continuación con algunos ejemplos:
        br
        .titulo-sexto.color-acento-contenido
          h5 Tabla 1.
          span Equipos estáticos y dinámicos


        .tabla-b.color-acento-contenido.mb-5
          .tabla-b__header
            h5.mb-0 Estáticos
          table
            tr
              th.fs-6 Silos
              td Se utilizan para almacenar mercancía a granel: por ejemplo, arroz, trigo y en empresas de materiales prefabricados se almacenan, cemento o yeso.

        .tabla-b.color-acento-contenido.mb-5
          .tabla-b__header
            h5.mb-0 Dinámicos
          table
            tr
              th.fs-6 Sin traslado
              td A través de un movimiento continuo permiten el transporte de mercancía a través de equipos que están fijados al suelo o al techo del edificio: cintas transportadoras, grúas aéreas y transelevadores.

            tr
              th.fs-6 Con traslado
              td 
                p 
                  span.fw-bold Manuales:
                  |	transpaletas, apiladores.
                p 
                  span.fw-bold Mecánicos:
                  |	transpaleta, apilador, carretillas, transelevadores.

        p Ahora, se aborda con mayor detalle las características de los equipos dinámicos:
        br
        p.fw-bold Equipos dinámicos sin traslado  
        p Estos equipos tienen la ventaja de permitir un transporte continuo de mercancías, sin embargo, si la instalación en la bodega no es la pertinente puede ser una barrera para otros medios de transporte interno.
        p Dentro de esta clasificación se pueden encontrar los siguientes tipos:

        TabsA.color-acento-contenido.mb-5
          .tarjeta.p-4(titulo="Cintas transportadoras de banda")
            .row.mb-1.d-flex
              .col.col-12.col-lg-4.pt-2
                picture
                  img(src='@/assets/curso/tema1/img02.png', alt='Cintas transportadoras de banda', class='img-fluid')
              .col.col-12.col-lg-8.pt-2
                h5 Cintas transportadoras de banda
                p Hace referencia a una plataforma deslizante o banda sin fin, la cual se encuentra sobre un conjunto de rodillos; es útil para apoyar embalajes de base blanda o irregular y en el transporte de productos a granel.

          .tarjeta.p-4(titulo="Cinta transportadora de rodillos")
            .row.mb-1.d-flex
              .col.col-12.col-lg-4.pt-2
                picture
                  img(src='@/assets/curso/tema1/img03.png', alt='Cinta transportadora de rodillos', class='img-fluid')
              .col.col-12.col-lg-8.pt-2
                h5 Cinta transportadora de rodillos
                p Las cargas se pueden desplazar a consecuencia de la gravedad o el accionamiento de rodillos mediante motores eléctricos. Dependiendo de la separación entre los rodillos se puede utilizar para:
                p a. Transportar embalajes de superficie suave si la separación entre los rodillos es pequeña.
                p b. Transportar paletas de madera si la separación es mediana.
                p c. Para paletas de acero o contenedores si la separación es grande.

          .tarjeta.p-4(titulo="Grúas aéreas")
            .row.mb-1.d-flex
              .col.col-12.col-lg-4.pt-2
                picture
                  img(src='@/assets/curso/tema1/img04.png', alt='Grúas aéreas', class='img-fluid')
              .col.col-12.col-lg-8.pt-2
                h5 Grúas aéreas
                p Corresponden a equipos de transporte que se fijan al techo del almacén, permitiendo el transporte de la mercancía de una zona a la otra, se utilizan en gran medida en la industria del automóvil y en el sector textil.
                p Entre sus ventajas se encuentran, mantener despejado el suelo y el manejo de cargas muy pesadas, sin embargo, para poder instalarlos se requiere techos altos y resistentes, además de una gran inversión inicial.

          .tarjeta.p-4(titulo="Transelevadores")
            .row.mb-1.d-flex
              .col.col-12.col-lg-4.pt-2
                picture
                  img(src='@/assets/curso/tema1/img05.png', alt='Transelevadores', class='img-fluid')
              .col.col-12.col-lg-8.pt-2
                h5 Transelevadores
                p Son equipos que se mueven por pasillos estrechos a gran velocidad diseñados para almacenes automatizados y tienen movimientos longitudinales y verticales para retirar y colocar paletas de manera automatizada. Pueden ser de dos tipos:
                p 
                  span.fw-bold Con conductor:
                  |	lleva en una cabina al operador, el cual se encarga de desplazar el equipo a lo largo del pasillo y también realiza las elevaciones necesarias.
                p 
                  span.fw-bold Con microprocesador:
                  |	pueden ser semiautomáticos, que se controlan a través de un microprocesador situado en la cabecera del pasillo; o automáticos, controlados por un ordenador central que recibe las interacciones a través de un código de barras.
      
        br
        p.fw-bold Equipos dinámicos con traslado
        p Corresponden a equipos que se trasladan de un lugar a otro dentro del almacén, transportando al mismo tiempo la mercancía. Los equipos más utilizados en el almacén son los siguientes:
        br
 
        TabsB.color-acento-contenido.mb-5
          .py-4.py-md-5(titulo="Transpaletas" :icono="require('@/assets/curso/tema1/t01.svg')")
            .row
              .col-md-8.mb-4.mb-md-0
                h4 Transpaletas
                p Pueden transportar la carga a pequeñas distancias y elevarla algunos centímetros, son útiles para apoyar otros equipos y normalmente se encuentran en los muelles de carga y descarga. Se utilizan en almacenes con dimensiones reducidas y sin mucha altura.
                p 
                  span.fw-bold a. Manuales: 
                  | se usan en las tareas de agrupación de pedidos y carga y descarga de vehículos.
                p 
                  span.fw-bold b. Motorizados: 
                  | cuentas con un sistema eléctrico y permiten realizar recorridos más largos que el anterior y se utilizan para el mismo fin.

              .col-md-4
                figure
                  img(src='@/assets/curso/tema1/img06.png', alt='Transpaletas')

          .py-4.py-md-5(titulo="Apiladores" :icono="require('@/assets/curso/tema1/t02.svg')")
            .row
              .col-md-8.mb-4.mb-md-0
                h4 Apiladores
                p Son equipos capaces de transportar y elevar una paleta, permitiendo no solo desplazar la carga horizontalmente, sino verticalmente y de este modo realizar el trabajo de apilado. Se pueden distinguir los siguientes:
                p 
                  span.fw-bold a. De elevación manual: 
                  | permiten una elevación limitada, por eso no se deben usar con cargas pesadas, normalmente se utilizan para la carga y descarga de estanterías ubicadas en la recepción y expedición.
                p 
                  span.fw-bold b. Mixtos: 
                  | tienen tracción manual y eléctrica y es el tipo más usado.
                p 
                  span.fw-bold c. Autopropulsados: 
                  | realizan el traslado y la elevación de manera motorizada, no se recomiendan para recorridos largos y requieren una superficie lisa para el desplazamiento.

              .col-md-4
                figure
                  img(src='@/assets/curso/tema1/img07.png', alt='Apiladores')

          .py-4.py-md-5(titulo="Carretillas o montacargas" :icono="require('@/assets/curso/tema1/t03.svg')")
            .row
              .col-md-8.mb-4.mb-md-0
                h4 Carretillas o montacargas
                p Son equipos de contrapeso que cumplen con la función de transportar y soportar mediante la parte delantera del vehículo cualquier tipo de carga en #[i pallets] o contenedores. Pueden ser de los siguientes tipos:
                p 
                  span.fw-bold a. Contrabalanceada: 
                  | vehículo autopropulsado que realiza la carga por delante del punto de apoyo mediante horquillas.
                p 
                  span.fw-bold b. Retráctil: 
                  | es un equipo elevador que puede extender y recoger las horquillas o el mástil sobre si mismo y permite alcanzar alturas de elevación superiores.
                p 
                  span.fw-bold c. De toma lateral: 
                  | existen trilaterales, las cuales pueden manipular la carga de manera: frontal, izquierda y derecha o también las hay bilaterales (derecha/izquierda). Ofrecen mejor rendimiento cuando son guiadas a través de raíles, permitiendo así una mayor velocidad.
                p 
                  span.fw-bold d. Recogepedidos: 
                  | se forma por una cabina donde se sitúa el conductor y que se eleva junto con las horquillas para realizar tareas de reposición y 
                  em picking.

              .col-md-4
                figure
                  img(src='@/assets/curso/tema1/img08.png', alt='Carretillas o montacargas')

          .py-4.py-md-5(titulo="AGV (<em>Automatic Guided Vehicles</em>)" :icono="require('@/assets/curso/tema1/t04.svg')")
            .row
              .col-md-8.mb-4.mb-md-0
                h4 AGV                   
                  em (Automatic Guided Vehicles)
                p Son medios de transporte inteligentes que no requieren conductor, los cuales pueden ser programados para seguir una trayectoria y posicionarse en puntos determinados, normalmente constan de un ordenador central que se comunica con un 
                  em PC 
                  | o con un 
                  em máster 
                  | que dirige los vehículos. Entre las distintas tecnologías de guiado se encuentran las siguientes:
                p 
                  span.fw-bold a. Filoguiado: 
                  | el vehículo se desplaza guiado por un hilo conductor, el cual está instalado a poca profundidad bajo el suelo de la planta.
                p 
                  span.fw-bold b. Banda magnética pegada sobre la superficie del suelo: 
                  | el detector genera una señal que es intensa cuando se encuentra situado sobre la banda y disminuye si se desvía.
                p 
                  span.fw-bold c. Opto guiado: 
                  | siguen una trayectoria a través de una linea de pintura o banda adhesiva blanca, efectuando la detección de la línea mediante sensores ópticos. 

              .col-md-4
                figure
                  img(src='@/assets/curso/tema1/img09.png', alt='Automatic Guided Vehicles')




</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
