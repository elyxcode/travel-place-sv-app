import { Place } from "@/interfaces/place";

// export const places: Place[] = 
//   [
//   {
//     "id": 1,
//     "name": "Parque Nacional El Boquerón",
//     "description": "Ubicado en la cima del volcán de San Salvador, este parque ofrece un cráter majestuoso de unos 5 km de diámetro y 558 m de profundidad, con senderos panorámicos, centro de interpretación, clima templado y abundante flora y fauna autóctona.",
//     "category": "Naturaleza / Parque nacional",
//     "location": {"lat": 13.733, "lng": -89.283},
//     "images": [
//       "https://upload.wikimedia.org/wikipedia/commons/4/44/Boquer%C3%B3n_crater.jpg",
//       "https://www.alltrails.com/photos/parks/el-salvador/la-libertad/parque-nacional-el-boqueron/6/19305305",
//       "https://elsalvador.travel/destination/parque-nacional-el-boqueron/en/"
//     ],
//     "externalLink": "https://en.wikipedia.org/wiki/El_Boquer%C3%B3n_National_Park",
//     "payRequired": true,
//     "initialPrice": 1.00
//   },
//   {
//     "id": 2,
//     "name": "Joya de Cerén",
//     "description": "Conocido como la “Pompeya de América”, este sitio arqueológico maya fue preservado bajo cenizas volcánicas, ofreciendo una ventana excepcional a la vida rural precolombina en Mesoamérica.",
//     "category": "Sitio arqueológico",
//     "location": {"lat": 13.82750, "lng": -89.35611},
//     "images": [
//       "https://upload.wikimedia.org/wikipedia/commons/3/3d/Joya_de_Cer%C3%A9n_Archaeological_Site.jpg",
//       "https://whc.unesco.org/uploads/thumb/675.jpg",
//       "https://elsalvador.travel/article/discover-joya-de-ceren-world-historic-heritage/en/"
//     ],
//     "externalLink": "https://en.wikipedia.org/wiki/Joya_de_Cer%C3%A9n",
//     "payRequired": true,
//     "initialPrice": 5.00
//   },
//   {
//     "id": 3,
//     "name": "Volcán de Santa Ana (Ilamatepec)",
//     "description": "El volcán más alto de El Salvador, con 2 381 m de altitud. Su cráter alberga un lago turquesa espectacular, y se ubica al oeste de la caldera de Coatepeque. Es un destino ideal para senderismo y admirar vistas panorámicas impresionantes.",
//     "category": "Volcán / Naturaleza",
//     "location": {"lat": 13.853, "lng": -89.630},
//     "images": [
//       "https://visibleearth.nasa.gov/images/5907/santa-ana-volcano-el-salvador",
//       "https://unsplash.com/photos/Santa-Ana-Volcano%2C-El-Salvador",
//       "https://www.gettyimages.com/photos/santa-ana-volcano-el-salvador"
//     ],
//     "externalLink": "https://en.wikipedia.org/wiki/Santa_Ana_Volcano",
//     "payRequired": false,
//     "initialPrice": 0.00
//   },
//   {
//     "id": 4,
//     "name": "Lago de Coatepeque",
//     "description": "Hermoso lago de cráter volcánico con aguas cristalinas azul turquesa. Popular para actividades acuáticas como kayak, jetski, y para relajarse en sus vistas panorámicas desde sus miradores naturales.",
//     "category": "Lago / Naturaleza",
//     "location": {"lat": 13.7, "lng": -89.6},
//     "images": [
//       "https://www.gettyimages.com/photos/lago-coatepeque",
//       "https://www.shutterstock.com/search/coatepeque-lake-el-salvador",
//       "https://stock.adobe.com/search?k=coatepeque+lake+el+salvador"
//     ],
//     "externalLink": null,
//     "payRequired": false,
//     "initialPrice": 0.00
//   },
//   {
//     "id": 5,
//     "name": "Parque Nacional Montecristo",
//     "description": "Reserva de bosque nuboso en Metapán. Fue la primera área protegida del país, refugio de robles, orquídeas y fauna silvestre diversa. Ideal para senderismo, observación de aves y contacto con la naturaleza.",
//     "category": "Parque nacional / Bosque nuboso",
//     "location": {"lat": 14.45, "lng": -89.37},
//     "images": [
//       "https://elsalvador.travel/destination/parque-nacional-montecristo/en/",
//       "https://www.gettyimages.com/photos/montecristo-el-salvador",
//       "https://www.shutterstock.com/search/montecristo-forest-el-salvador"
//     ],
//     "externalLink": null,
//     "payRequired": true,
//     "initialPrice": 3.00
//   },
//   {
//     "id": 6,
//     "name": "Tazumal",
//     "description": "Importante centro arqueológico maya en Chalchuapa. Destaca por su pirámide de 24 m y estructuras funerarias, junto con un museo que exhibe piezas prehispánicas y ofrece visitas guiadas.",
//     "category": "Sitio arqueológico",
//     "location": {"lat": 13.8, "lng": -89.7},
//     "images": [
//       "https://www.gettyimages.com/photos/tazumal-el-salvador",
//       "https://www.shutterstock.com/search/tazumal-el-salvador",
//       "https://elsalvador.travel/destination/tazumal/en/"
//     ],
//     "externalLink": null,
//     "payRequired": true,
//     "initialPrice": 5.00
//   },
//   {
//     "id": 7,
//     "name": "Playa El Tunco",
//     "description": "Conocida por su arena negra y formación rocosa, ideal para surfistas. Ambiente relajado y bohemio con bares, restaurantes y una comunidad surfista amigable.",
//     "category": "Playa",
//     "location": {"lat": 13.53, "lng": -89.83},
//     "images": [
//       "https://www.gettyimages.com/photos/el-tunco-el-salvador",
//       "https://www.shutterstock.com/search/el-tunco-beach-el-salvador",
//       "https://elsalvador.travel/destination/el-tunco/en/"
//     ],
//     "externalLink": null,
//     "payRequired": false,
//     "initialPrice": 0.00
//   },
//   {
//     "id": 8,
//     "name": "Cerro El Pital",
//     "description": "El punto más alto del país, con clima frío y vistas impresionantes. Cuenta con senderos, miradores naturales como la Peña Rajada, y opciones de acampada en su entorno montañoso.",
//     "category": "Montaña / Naturaleza",
//     "location": {"lat": 14.4, "lng": -88.56},
//     "images": [
//       "https://www.gettyimages.com/photos/cerro-el-pital",
//       "https://www.shutterstock.com/search/cerro-el-pital-el-salvador",
//       "https://elsalvador.travel/destination/cerro-el-pital/en/"
//     ],
//     "externalLink": null,
//     "payRequired": true,
//     "initialPrice": 3.00
//   },
//   {
//     "id": 9,
//     "name": "Parque Cuscatlán",
//     "description": "Parque urbano moderno en San Salvador con áreas verdes, senderos, zona cultural, auditorio, espacios deportivos y conexión Wi-Fi gratuita, ideal para familias y eventos culturales.",
//     "category": "Parque urbano",
//     "location": {"lat": 13.700, "lng": -89.200},
//     "images": [
//       "https://www.gettyimages.com/photos/parque-cuscatlan-el-salvador",
//       "https://www.shutterstock.com/search/parque-cuscatlan",
//       "https://elsalvador.travel/destination/parque-cuscatlan/en/"
//     ],
//     "externalLink": null,
//     "payRequired": false,
//     "initialPrice": 0.00
//   },
//   {
//     "id": 10,
//     "name": "Sunset Park (Puerto de La Libertad)",
//     "description": "Primer parque de diversiones permanente frente al mar en Centroamérica, parte del plan Surf City, con atracciones como rueda de la fortuna, carrusel y juegos mecánicos panorámicos al atardecer.",
//     "category": "Parque de diversiones / Playa",
//     "location": {"lat": 13.48, "lng": -89.28},
//     "images": [
//       "https://www.gettyimages.com/photos/sunset-park-el-salvador",
//       "https://www.shutterstock.com/search/sunset-park-el-salvador",
//       "https://elsalvador.travel/destination/sunset-park/en/"
//     ],
//     "externalLink": null,
//     "payRequired": false,
//     "initialPrice": 1.00
//   }
// ]

  export const places: Place[] = [
    {
      "name": "Playa El Tunco",
      "description": "Famosa por surf, ambiente bohemio y atardeceres.",
      "category": "playa",
      "location": {
        "lat": 13.4925,
        "lng": -89.3809,
        title: "La Libertad, El Salvador"
      },
      "images": [
        "https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6",
        "https://images.unsplash.com/photo-1483729558449-99ef09a8c325"
      ],
      "externalLink": "https://www.elsalvador.travel/playa-el-tunco/",
      "payRequired": false,
      "initialPrice": "Gratis"
    },
    {
      "name": "Volcán de Santa Ana",
      "description": "Volcán activo con cráter turquesa en la cima.",
      "category": "montaña",
      "location": {
        title: "Santa Ana, El Salvador",
        "lat": 13.8530,
        "lng": -89.6299
      },
      "images": [
        "https://images.unsplash.com/photo-1601584115197-04ecc0da31d8"
      ],
      "externalLink": "https://www.elsalvador.travel/volcan-santa-ana/",
      "payRequired": true,
      "initialPrice": "$5"
    },
    {
      "name": "Joya de Cerén",
      "description": "Sitio arqueológico conocido como 'Pompeya de América'.",
      "category": "historico",
      "location": {
        "lat": 13.8216,
        "lng": -89.3607,
        title: "San Salvador, El Salvador"
      },
      "images": [
        "https://images.unsplash.com/photo-1564501049416-2a5e7b7e0e9f"
      ],
      "externalLink": "https://www.museojoyadeceren.gob.sv/",
      "payRequired": true,
      "initialPrice": "$3"
    },
    {
      "name": "Lago de Coatepeque",
      "description": "Lago volcánico con aguas cristalinas ideales para natación.",
      "category": "lago",
      "location": {
        "lat": 13.8642,
        "lng": -89.5452,
        title: "San Salvador, El Salvador"
      },
      "images": [
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470"
      ],
      "externalLink": "https://www.elsalvador.travel/lago-de-coatepeque/",
      "payRequired": false,
      "initialPrice": "Gratis"
    },
    {
      "name": "Ruta de las Flores",
      "description": "Circuito de pueblos pintorescos con cafetales y artesanías.",
      "category": "ruta",
      "location": {
        "lat": 13.8767,
        "lng": -89.7360,
        title: "San Salvador, El Salvador"
      },
      "images": [
        "https://images.unsplash.com/photo-1464037866556-6812c9d1c72e"
      ],
      "externalLink": "https://www.elsalvador.travel/ruta-de-las-flores/",
      "payRequired": false,
      "initialPrice": "Gratis"
    },
    {
      "name": "Parque Nacional El Imposible",
      "description": "Reserva natural con biodiversidad y senderos para hiking.",
      "category": "naturaleza",
      "location": {
        "lat": 13.8500,
        "lng": -89.9333,
        title: "San Salvador, El Salvador"
      },
      "images": [
        "https://images.unsplash.com/photo-1470114716159-e389f8712fda"
      ],
      "externalLink": "https://www.salvanatura.org/el-imposible/",
      "payRequired": true,
      "initialPrice": "$10"
    },
    {
      "name": "Suchitoto",
      "description": "Pueblo colonial con calles empedradas y arte local.",
      "category": "ciudad",
      "location": {
        "lat": 13.9386,
        "lng": -89.0278,
        title: "San Salvador, El Salvador"
      },
      "images": [
        "https://images.unsplash.com/photo-1518391846015-55a9cc003b25"
      ],
      "externalLink": "https://www.elsalvador.travel/suchitoto/",
      "payRequired": false,
      "initialPrice": "Gratis"
    },
    {
      "name": "Playa El Cuco",
      "description": "Arena dorada y aguas tranquilas, ideal para familias.",
      "category": "playa",
      "location": {
        "lat": 13.1286,
        "lng": -88.2447,
        title: "San Salvador, El Salvador"
      },
      "images": [
        "https://images.unsplash.com/photo-1506929562872-bb421503ef21"
      ],
      "externalLink": "https://www.elsalvador.travel/playa-el-cuco/",
      "payRequired": false,
      "initialPrice": "Gratis"
    },
    {
      "name": "Cerro Verde",
      "description": "Parque con miradores al volcán de Izalco y Santa Ana.",
      "category": "montaña",
      "location": {
        "lat": 13.8275,
        "lng": -89.6236,
        title: "San Salvador, El Salvador"
      },
      "images": [
        "https://images.unsplash.com/photo-1452570053594-1b985d6ea890"
      ],
      "externalLink": "https://www.elsalvador.travel/cerro-verde/",
      "payRequired": true,
      "initialPrice": "$3"
    },
    {
      "name": "Tazumal",
      "description": "Ruinas mayas con pirámides bien conservadas.",
      "category": "historico",
      "location": {
        "lat": 13.9767,
        "lng": -89.6736,
        title: "San Salvador, El Salvador"
      },
      "images": [
        "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5"
      ],
      "externalLink": "https://www.elsalvador.travel/tazumal/",
      "payRequired": true,
      "initialPrice": "$5"
    }
  ]
