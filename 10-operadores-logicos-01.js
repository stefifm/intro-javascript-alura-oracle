// Operadores de comparación

const ciudadDestino = 'Santiago'

const ciudadesDisponibles = ['Bogota', 'Lima', 'Santiago', 'Montevideo']

// bloque condicional con if, evalua una condicion

const costoPasaje = '1000'

if (costoPasaje == 1000) {
  console.log('El pasaje vale 1000')
} else {
  console.log('No se encontró el precio')
}

// Operadores lógicos: AND, OR, NOT
// Validar edad del pasajero y la ciudad

let edadPasajero = 17
let estaAcompanado = false
console.log(`Verificando pasajes para ${ciudadDestino}`)

if ((ciudadesDisponibles.indexOf(ciudadDestino) >= 0) && (edadPasajero >= 19 || estaAcompanado)) {
  console.log('Vendo el pasaje')
} else {
  console.log('Ciudad no disponible para la venta o pasajero no cumple las reglas')
}

// Aplicando NOT

edadPasajero = 19
estaAcompanado = true

console.log(`Verificando pasajes para ${ciudadDestino}`)

if (!((ciudadesDisponibles.indexOf(ciudadDestino) >= 0) && (edadPasajero >= 18 || estaAcompanado))) {
  console.log('Ciudad no disponible para la venta o pasajero no cumple las reglas')
} else {
  console.log('Vendo el pasaje')
}
