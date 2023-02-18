// Definición de una lista con alfanumericos y usando new Array()
const ciudadesDisponibles = new Array('Bogota', 'Lima', 'Córdoba')
console.log(ciudadesDisponibles)

// Definicón de lista de forma abreviada
const ciudadesViaje = ['Paris', 'Londres', 'Sydney']
console.log(ciudadesViaje)

{
  ciudadesDisponibles.push('Sao Paulo')
  ciudadesViaje.push('Miami')
  console.log(ciudadesDisponibles)
  console.log(ciudadesViaje)
  
  ciudadesDisponibles.unshift('Carlos Paz')
  ciudadesViaje.unshift('Tokio')
  console.log(ciudadesDisponibles)
  console.log(ciudadesViaje)
}
