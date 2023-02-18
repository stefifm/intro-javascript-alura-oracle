const ciudadDestino = 'Lima'

const ciudadesDisponibles = ['Bogota', 'Lima', 'Santiago', 'Montevideo']

let edadPasajero = 17
let estaAcompanado = false
console.log(`Verificando pasajes para ${ciudadDestino}`)


if (edadPasajero >= 18 || estaAcompanado) {

  if (ciudadesDisponibles.indexOf(ciudadDestino) >= 0) {
    console.log('Vendo el pasaje')
  } else {
    console.log('Ciudad no disponible para la venta')
  }
  
} else {
  if (edadPasajero >= 16 && ciudadDestino === 'Lima') {
    console.log('Vendo el pasaje')
  } else {
    console.log('pasajero no cumple las reglas');
  }
}

