const ciudadesDisponibles = ['Bogota', 'Lima', 'Santiago', 'Montevideo']
const precioCiudades = [500, 400, 380, 200]
const presupuestoDisponible = 190

// While

let i = 0

while (precioCiudades[i] > presupuestoDisponible && i < ciudadesDisponibles.length) {
  i++
}

if (i === ciudadesDisponibles.length) {
  console.log('No tenemos pasajes disponibles')
} else {
  console.log(`Puedes comprar pasaje para: ${ciudadesDisponibles[i]}`)
}
