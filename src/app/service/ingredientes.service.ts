import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IngredientesService {

  listado = [
    {
      nombre: 'POLLO DESHUESADO',
      imagen: 'https://bc-affinitycontent.cec.ocp.oraclecloud.com/content/published/api/v1.1/assets/CONTE276854541A340DD8DE5F7A75110947F/native?cb=_cache_4ffe&channelToken=a5af575de2b442e0aea886b3f314a2a5',
      descripcion: 'Es carne de pollo rica en proteínas de alta calidad, que aporta los aminoácidos esenciales necesarios para que el perros o gatos mantengan una buena musculatura. Se la considera una carna saludable por la cantidad y tipo de grasa que contiene.',
      gamas: [
        {nombre: 'Original'}
      ],
      tags: 'CARNE'
    },
    {
      nombre: 'PAVO DESHUESADO',
      imagen: 'https://bc-affinitycontent.cec.ocp.oraclecloud.com/content/published/api/v1.1/assets/CONTBB6F2706071E478A9718FD0DF9C7884E/native?cb=_cache_4ffe&channelToken=a5af575de2b442e0aea886b3f314a2a5',
      descripcion: 'Es carne de pavo, con un alto contenido en proteína de alta calidad, que aporta los aminoácidos esenciales necesarios para que el perros o gatos mantengan una buena musculatura. Se la considera una carna saludable por su menor aporte calórico comparado con otras carnes.',
      gamas: [
        {nombre: 'Original'}
      ],
      tags: 'CARNE'
    }, {
      nombre: 'SALMÓN SIN ESPINAS',
      imagen: 'https://bc-affinitycontent.cec.ocp.oraclecloud.com/content/published/api/v1.1/assets/CONTA295CADF58984E06BD5AB53429CC2846/native?cb=_cache_4ffe&channelToken=a5af575de2b442e0aea886b3f314a2a5',
      descripcion: 'Es carne de salmón con un alto contenido en proteína y también en ácidos grasos omega-3 (EPA y DHA) que contribuye a mantener la musculatura y una correcta movilidad de las articulaciones. También aporta vitaminas como la B12, B3 y la vitamina D.',
      gamas: [
        {nombre: 'Original'}
      ],
      tags: 'Original'
    }, {
      nombre: 'POLLO CAMPERO DESHUESADO',
      imagen: 'https://bc-affinitycontent.cec.ocp.oraclecloud.com/content/published/api/v1.1/assets/CONTFA31BAACFBA949CE918E6813DADAEAB5/native?cb=_cache_4ffe&channelToken=a5af575de2b442e0aea886b3f314a2a5',
      descripcion: 'Es carne de pollo de corral criado al aire libre. Rica en proteínas de alta calidad, que aporta los aminoácidos esenciales necesarios para que los perros o gatos mantengan una buena musculatura. Se la considera una carne saludable, con un contenido en grasa menor que la carne de pollo habitual.',
      gamas: [
        {nombre: 'Selected'}
      ],
      tags: 'CARNE'
    }, {
      nombre: 'SALMÓN NORUEGO SIN ESPINAS',
      imagen: 'https://bc-affinitycontent.cec.ocp.oraclecloud.com/content/published/api/v1.1/assets/CONTF3C653EE9BAD4E2BBBFC650E6C12D401/native?cb=_cache_4ffe&channelToken=a5af575de2b442e0aea886b3f314a2a5',
      descripcion: 'Es carne de salmón con un alto contenido en proteína y también en ácidos grasos omega-3 (EPA y DHA) que contribuye a mantener la musculatura y una correcta movilidad de las articulaciones. También aporta vitaminas como la B12, B3 y la vitamina D.',
      gamas: [
        {nombre: 'Selected'}
      ],
      tags: 'CARNE'
    }, {
      nombre: 'TERNERA DESHUESADA',
      imagen: 'https://bc-affinitycontent.cec.ocp.oraclecloud.com/content/published/api/v1.1/assets/CONTC9F2708E71A64A19B8490EDF7AD600BB/native?cb=_cache_4ffe&channelToken=a5af575de2b442e0aea886b3f314a2a5',
      descripcion: 'La ternera es una carne roja de gran calidad por su alto contenido en proteína y aminoácidos esenciales que contribuyen a mantener una buena musculatura. También es una carne rica en hierro y zinc, así como en vitaminas B12, B3 y B6.',
      gamas: [
        {nombre: 'Selected'}
      ],
      tags: 'CARNE'
    }, {
      nombre: 'ZANAHORIA',
      imagen: 'https://bc-affinitycontent.cec.ocp.oraclecloud.com/content/published/api/v1.1/assets/CONTE3B65B083AC043F6A4FBF894957E0BE2/native?cb=_cache_4ffe&channelToken=a5af575de2b442e0aea886b3f314a2a5',
      descripcion: 'La zanahoria es una verdura de raíz rica en minerales, vitamina A y antioxidantes como los carotenos',
      gamas: [
        {
          nombre: 'Selected'
        },
        {
          nombre: 'Original'
        }
      ],
      tags: 'FRUTASYVERDURAS'
    }, {
      nombre: 'MANZANA',
      imagen: 'https://bc-affinitycontent.cec.ocp.oraclecloud.com/content/published/api/v1.1/assets/CONT351E0EFA767B4F78B19F9C4184AB61FC/native?cb=_cache_4ffe&channelToken=a5af575de2b442e0aea886b3f314a2a5',
      descripcion: 'La manzana es una fruta que destaca por su alto contenido en polifenoles como la quercetina, con efecto antioxidante. También es una buena fuente de fibra alimentaria y vitamina C.',
      gamas: [
        {
          nombre: 'Selected'
        },
        {
          nombre: 'Original'
        }
      ],
      tags: 'FRUTASYVERDURAS'
    }, {
      nombre: 'BRÓCOLI',
      imagen: 'https://bc-affinitycontent.cec.ocp.oraclecloud.com/content/published/api/v1.1/assets/CONT03B7B443B1CD437CA04A213C510E8A7D/native?cb=_cache_4ffe&channelToken=a5af575de2b442e0aea886b3f314a2a5',
      descripcion: 'Es una verdura rica en fibra alimentaria, vitaminas C, K, y E, vitaminas B y minerales. También tiene numerosos fitonutrientes con propiedades beneficiosas para la salud.',
      gamas: [
        {
          nombre: 'Selected'
        },
        {
          nombre: 'Original'
        }
      ],
      tags: 'FRUTASYVERDURAS'
    }, {
      nombre: 'ALGA MARINA',
      imagen: 'https://bc-affinitycontent.cec.ocp.oraclecloud.com/content/published/api/v1.1/assets/CONT42C2D0A2BE554B57BD45BA0926EE6198/native?cb=_cache_4ffe&channelToken=a5af575de2b442e0aea886b3f314a2a5',
      descripcion: 'Es fuente de minerales orgánicos naturales como el yodo, potasio y calcio. Contiene también carotenos, vitaminas B, C y ácidos grasos esenciales Omega-3. ',
      gamas: [
        {nombre: 'Selected'}
      ],
      tags: 'SUPERFOODS'
    }, {
      nombre: 'ROMERO',
      imagen: 'https://bc-affinitycontent.cec.ocp.oraclecloud.com/content/published/api/v1.1/assets/CONT1940BF2210F845AC92D6764C4D3E9855/native?cb=_cache_4ffe&channelToken=a5af575de2b442e0aea886b3f314a2a5',
      descripcion: 'El Romero es una planta aromática utilizada como especie en la cocina mediterránea. Es muy rica en antioxidantes naturales como el ácido rosmarínico, carnósico, o el carnosol.',
      gamas: [
        {nombre: 'Selected'}
      ],
      tags: 'SUPERFOODS'
    }, {
      nombre: 'COCO',
      imagen: 'https://bc-affinitycontent.cec.ocp.oraclecloud.com/content/published/api/v1.1/assets/CONT6FAE43E1E0E348849C878928BA930F8C/native?cb=_cache_4ffe&channelToken=a5af575de2b442e0aea886b3f314a2a5',
      descripcion: 'Gran fuente de minerales, como el magnesio',
      gamas: [
        {nombre: 'Selected'}
      ],
      tags: 'SUPERFOODS'
    }, {
      nombre: 'SEMILLAS DE CHÍA',
      imagen: 'https://bc-affinitycontent.cec.ocp.oraclecloud.com/content/published/api/v1.1/assets/CONT4972B003606F42FCB4A6DF02F231F405/native?cb=_cache_4ffe&channelToken=a5af575de2b442e0aea886b3f314a2a5',
      descripcion: 'Contienen grandes cantidades de ácidos grasos omega 3',
      gamas: [
        {nombre: 'Superfood Snacks'}
      ],
      tags: 'SUPERFOODS'
    }, {
      nombre: 'ESPINACA',
      imagen: 'https://bc-affinitycontent.cec.ocp.oraclecloud.com/content/published/api/v1.1/assets/CONTC867FB531A72490082AD9229CF75A746/native?cb=_cache_4ffe&channelToken=a5af575de2b442e0aea886b3f314a2a5',
      descripcion: 'Vegetal de hoja verde, rica en nutrientes y conocida por su contenido en hierro.',
      gamas: [
        {nombre: 'Superfood Snacks'}
      ],
      tags: 'SUPERFOODS'
    }, {
      nombre: 'QUINOA',
      imagen: 'https://bc-affinitycontent.cec.ocp.oraclecloud.com/content/published/api/v1.1/assets/CONT1DC6122E10BF41D7ACA23BDCE3C54A46/native?cb=_cache_4ffe&channelToken=a5af575de2b442e0aea886b3f314a2a5',
      descripcion: 'Semillas ricas en proteínas y aminoácidos.',
      gamas: [
        {nombre: 'Superfood Snacks'}
      ],
      tags: 'SUPERFOODS'
    }, {
      nombre: 'ARÁNDANOS ROJOS',
      imagen: 'https://bc-affinitycontent.cec.ocp.oraclecloud.com/content/published/api/v1.1/assets/CONTED9FDBE4CF0042DAA07F0A71559AB395/native?cb=_cache_4ffe&channelToken=a5af575de2b442e0aea886b3f314a2a5',
      descripcion: 'Frutos ricos en antioxidantes naturales.',
      gamas: [
        {nombre: 'Superfood Snacks'}
      ],
      tags: 'SUPERFOODS'
    }, {
      nombre: 'CALABAZA',
      imagen: 'https://bc-affinitycontent.cec.ocp.oraclecloud.com/content/published/api/v1.1/assets/CONTE8F686D493F44396A981A383A55FF807/native?cb=_cache_4ffe&channelToken=a5af575de2b442e0aea886b3f314a2a5',
      descripcion: 'Fruta conocida por ser fuente de fibra alimentaria y vitaminas.',
      gamas: [
        {nombre: 'Superfood Snacks'}
      ],
      tags: 'SUPERFOODS'
    }, {
      nombre: 'ARROZ INTEGRAL',
      imagen: 'https://bc-affinitycontent.cec.ocp.oraclecloud.com/content/published/api/v1.1/assets/CONTAB7DA800FE7E45838E4928943860FEB3/native?cb=_cache_4ffe&channelToken=a5af575de2b442e0aea886b3f314a2a5',
      descripcion: 'El arroz integral o brown rice es el grano de arroz al que no se le ha quitado la parte del salvado y del germen, lo que le da esa tonalidad marrón. Por eso retiene gran cantidad de nutrientes comparado con el arroz blanco, como la fibra, ácidos grasos esenciales, vitaminas B (sobretodo niacina), carotenoides, polifenoles y minerales como manganeso, selenio, fósforo, cobre y magnesio. Además es una excelente fuente de carbohidratos muy digestibles.',
      gamas: [
        {        nombre: 'Original'
      }
      ],
      tags: 'CEREALESINTEGRALES'
    }, {
      nombre: 'AVENA',
      imagen: 'https://bc-affinitycontent.cec.ocp.oraclecloud.com/content/published/api/v1.1/assets/CONTEF691BA33E754EC991ACEB072B48A27F/native?cb=_cache_4ffe&channelToken=a5af575de2b442e0aea886b3f314a2a5',
      descripcion: 'La avena es un cereal con un perfil nutritivo muy completo. Es rico en carbohidratos, proteína y fibra. Fibra que ayuda a regular el tránsito intestinal, a controlar el peso y tiene un efecto positivo sobre la flora intestinal. También es fuente de minerales y vitaminas del grupo B.',
      gamas: [{
        nombre: 'Original'
      }],
      tags: 'CEREALESINTEGRALES'
    }, {
      nombre: 'PATATA',
      imagen: 'https://bc-affinitycontent.cec.ocp.oraclecloud.com/content/published/api/v1.1/assets/CONTD84DE4DF89F64EAAB4D437CF054D7428/native?cb=_cache_4ffe&channelToken=a5af575de2b442e0aea886b3f314a2a5',
      descripcion: 'Es un tubérculo rico en carbohidratos fácilmente digestibles, que aporta fibra alimentaria, minerales y vitaminas B y C. También contiene carotenoides y flavonoides con actividad antioxidante.',
      gamas: [
        { nombre: 'Original' }
      ],
      tags: 'HIDRATOSDECARBONO'
    }, {
      nombre: 'BONIATO',
      imagen: 'https://bc-affinitycontent.cec.ocp.oraclecloud.com/content/published/api/v1.1/assets/CONTE1ACFD0295B64F11980D82C8887618B1/native?cb=_cache_4ffe&channelToken=a5af575de2b442e0aea886b3f314a2a5',
      descripcion: 'El boniato es una excelente fuente de vitamina A, vitamina C, minerales y fibra. También contiene carotenoides y flavonoides con actividad antioxidante.',
      gamas: [
        { nombre: 'Selected' }
      ],
      tags: 'HIDRATOSDECARBONO'
    }, {
      nombre: 'GARBANZOS',
      imagen: 'https://bc-affinitycontent.cec.ocp.oraclecloud.com/content/published/api/v1.1/assets/CONT0A90932F906F4FD89517EBF56E9DBEA7/native?cb=_cache_4ffe&channelToken=a5af575de2b442e0aea886b3f314a2a5',
      descripcion: 'El garbanzo es una leguminosa con un nivel moderado de calorías y rica en proteína vegetal y fibra que ayuda a regular el tránsito intestinal.',
      gamas: [
        { nombre: 'Selected' },
        { nombre: 'Original}' }
      ],
      tags: 'HIDRATOSDECARBONO'
    }, {
      nombre: 'GUISANTES',
      imagen: 'https://bc-affinitycontent.cec.ocp.oraclecloud.com/content/published/api/v1.1/assets/CONTD09D7490710F47E88F0FBCF11C92C153/native?cb=_cache_4ffe&channelToken=a5af575de2b442e0aea886b3f314a2a5',
      descripcion: 'El guisante es una leguminosa rica en fibra que favorece el desarrollo de la flora intestinal sana y ayuda a controlar la glucosa en sangre. Su proteína es rica en leucina, aminoácido que ayuda a mantener la masa muscular. Es también fuente de minerales y vitaminas B.',
      gamas: [
        { nombre: 'Selected' },
        { nombre: 'Original' }
      ],
      tags: 'HIDRATOSDECARBONO'
    }
  ]


  constructor() { }



  devolverListaASeleccion(cantidad: number) {
    const elementosAlAzar: any[] = [];
    const copiaLista = [...this.listado]; // Crear una copia para no modificar la lista original

    while (elementosAlAzar.length < cantidad) {
      const indiceAleatorio = Math.floor(Math.random() * copiaLista.length);
      elementosAlAzar.push(copiaLista.splice(indiceAleatorio, 1)[0]);
    }

    return elementosAlAzar;
  }

  devolverTodo() {
    return this.listado;
  }
}
