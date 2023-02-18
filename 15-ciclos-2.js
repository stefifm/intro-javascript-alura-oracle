// const ciudadesDisponibles = ['Bogota', 'Lima', 'Santiago', 'Montevideo']
// const precioCiudades = [500, 400, 380, 200]

const datos = [
  {
    'ciudad': 'Bogota',
    'precio': 500
  },
  {
    'ciudad': 'Lima',
    'precio': 400
  },
  {
    'ciudad': 'Santiago',
    'precio': 380
  },
  {
    'ciudad': 'Montevideo',
    'precio': 200
  }
]
const presupuestoDisponible = 400

let i = 0

// while ( i < datos.length && datos[i].precio > presupuestoDisponible) {
//   i++
// }

let ciudadSeleccionada = ''

do {
  if (datos[i].precio <= presupuestoDisponible) {
    ciudadSeleccionada = datos[i].ciudad
    break
  }
  i++
} while (i < datos.length && ciudadSeleccionada === '');

if (ciudadSeleccionada === '') {
  console.log('No tenemos pasajes disponibles')
} else {
  console.log(`Puedes comprar pasaje para: ${ciudadSeleccionada}`)
}