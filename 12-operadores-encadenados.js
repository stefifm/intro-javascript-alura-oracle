const ciudadDestino = 'Santiago'

const ciudadesDisponibles = ['Bogota', 'Lima', 'Santiago', 'Montevideo']

let edadPasajero = 25
let estaAcompanado = false
let tienePasaporte = true
let estaCasado = false

console.log(`Verificando pasajes para ${ciudadDestino}`)

if (ciudadesDisponibles.indexOf(ciudadDestino) >= 0 
    && edadPasajero >= 18 && tienePasaporte && !estaCasado) {
  console.log('Paquete para solteros disponible')
} else {
  console.log('Ciudad no disponible para la venta o pasajero no cumple las reglas')
}