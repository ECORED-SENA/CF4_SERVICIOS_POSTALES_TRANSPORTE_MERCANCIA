export default {
  global: {
    componenteFormativo: 'Disposición de objetos postales y mercancía',
    descripcionCurso:
      'La actividad de almacenamiento consiste en ubicar la mercancía en la zona de almacenaje hasta que sea solicitada por el cliente; para ello es importante utilizar los medios adecuados para el transporte interno de mercancía, así como las herramientas tecnológicas disponibles y ubicarla en la zona más conveniente, con el fin de acceder y localizarla fácilmente.',
    imagenBannerPrincipal: require('@/assets/curso/banner/imagen-banner.svg'),
    fondoBannerPrincipal: require('@/assets/curso/banner/fondo-banner.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Equipos y herramientas de manipulación de carga',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Tipos de almacenamiento',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Ubicación de mercancía',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Contenedores',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Herramientas de comunicación',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Registros',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema7',
        icono: 'far fa-file-alt',
        numero: '7',
        titulo: 'Sistema de Gestión de Almacenes - SGA',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema8',
        icono: 'far fa-file-alt',
        numero: '8',
        titulo:
          'Manejo de <i>software</i>: entrada, interpretación y salida de datos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema9',
        icono: 'far fa-file-alt',
        numero: '9',
        titulo: 'Diferenciación',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Sintesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Arrieta Posada, J. (Junio de 2011). <em>SCIELO</em>. Obtenido de Aspectos a considerar para una buena gestión en los almacenes de las empresas (CEDIS). <em>Journal of Economics, Finance and Administrative Science, 16(30).</em>',
      link:
        'http://www.scielo.org.pe/scielo.php?script=sci_arttext&pid=S2077-18862011000100007',
    },
    {
      referencia:
        'Campo, V., A., Hervás, E., A., y Revilla, R., M. (2013). <em>Operaciones de almacenaje.</em> McGraw Hill.',
    },
    {
      referencia:
        'Correa Espinal, A., & Gómez Montoya , R. (Septiembre de 2009). <em>Tecnologías de la información y comunicación en la gestión de almacenes</em>.',
      link: 'http://www.scielo.org.co/pdf/eg/v26n117/v26n117a09.pdf',
    },
    {
      referencia:
        'Escudero, S., J. (2019). <em>Logística de almacenamiento</em>. Paraninfo.',
    },
    {
      referencia:
        'Flamarique, S. (2018). <em>Gestión de existencias en el almacén</em>. Marge Books.',
      link:
        'https://books.google.com.co/books?id=CDd8DwAAQBAJ&printsec=frontcover&dq=gestion+de+existencias+en+el+almacen&hl=es&sa=X&redir_esc=y#v=onepage&q=gestion%20de%20existencias%20en%20el%20almacen&f=false',
    },
    {
      referencia:
        'Gómez, A., Iglesias, M., De la Fuente, D., y Menéndez , M. (2008). <em>Estado del arte en políticas de ubicación de productos en almacén</em>. II International Conference on Industrial Engineering and Industrial Management XII Congreso de Ingeniería de Organización September 3-5, 2008, Burgos, Spain.',
      link:
        'http://adingor.es/congresos/web/uploads/cio/cio2008/LOGISTIC//1095-1102.pdf',
    },
    {
      referencia:
        'Mauleón, M. (2003). <em>Sistemas de alamacenaje y picking.</em> Ediciones Díaz de Santos.',
    },
    {
      referencia:
        'Pérez, H., M. (2014). <em>Almacenamiento de materiales.</em> Marge Books.',
      link:
        'https://books.google.es/books?hl=es&lr=&id=fnPDDQAAQBAJ&oi=fnd&pg=PA11&dq=almacenamiento+&ots=lFsLWzq0fg&sig=HSAdBBne2sGEzlJRG55I-yoLvSA#v=onepage&q&f=false',
    },
    {
      referencia:
        'Rodríguez, R., R. (2015). Guía de seguridad en procesos de almacenamiento y manejo de cargas. Fremap.',
      link:
        'https://www.udc.es/arquivos/sites/udc/prl/procedementos/Guiaxseg.xalmacenam.xyxmanejoxcargas.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Almacenamiento',
      significado:
        'utilización óptima de un espacio asignado para colocar una determinada cantidad de elementos o referencias.',
    },
    {
      termino: 'Granel',
      significado:
        'mercancía transportada sin envase o embalaje, generalmente referido a minerales, semillas, abonos, líquidos, cementos, etc.',
    },
    {
      termino: 'Inventario',
      significado:
        'acumulación de cualquier producto o artículo usado en la organización.',
    },
    {
      termino: '<em>Layout</em>',
      significado: 'disposición en planta de las diferentes zonas de almacén.',
    },
    {
      termino: 'Logística',
      significado:
        'proceso de planear, implementar y controlar efectiva y eficientemente el flujo y almacenamiento de bienes, servicios e información relacionada del punto de origen al punto de consumo con el propósito de cumplir los requisitos del cliente.',
    },
    {
      termino: '<em>Pallet</em>',
      significado:
        'plataforma reutilizable usada en la estiba de carga para facilitar el aprovechamiento del espacio de almacenamiento y de bodega de transporte, y las operaciones de manipulación.',
    },
    {
      termino: '<em>Stock</em>',
      significado:
        'producto almacenado listo para ser vendido, distribuido o usado.',
    },
    {
      termino: 'Unidad de carga',
      significado:
        'presentación de las mercaderías objeto de transporte, de manera que puedan ser manipuladas por medios mecánicos.',
    },
  ],
  complementario: [
    {
      texto:
        'Gómez, A., Iglesias, M., De la Fuente, D., y Menéndez, M. (2008). <em>Estado del arte en políticas de ubicación de productos en almacén.</em>',
      tipo: 'Artículo',
      link:
        'http://adingor.es/congresos/web/uploads/cio/cio2008/LOGISTIC//1095-1102.pdf',
    },
    {
      texto:
        'Correa, A., Gómez, R., y Cano, J. (2009). <em>Gestión de almacenes y Tecnologías de la Información y Comunicación (TIC).</em>',
      tipo: 'Artículo',
      link: 'http://www.scielo.org.co/pdf/eg/v26n117/v26n117a09.pdf',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: ['Nombre 1', 'Nombre 2'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
