const ciudadesDisponibles = ['Bogota', 'Lima', 'Santiago', 'Montevideo']

const paisesDisponibles = [
  'Colombia',
  'Perú',
  'Chile',
  'Brasil',
  'Argentina',
  'Uruguay',
  'Venezuela',
]

const cantidadCiudades = ciudadesDisponibles.length
const cantidadPaises = paisesDisponibles.length

console.log(`La cantidad de ciudades disponibles es: ${cantidadCiudades}`)
console.log(`La cantidad de países disponibles es: ${cantidadPaises}`)

// Remover el primer elemento de la lista
ciudadesDisponibles.shift()

// Remover el último elemento de la lista
ciudadesDisponibles.pop()

console.log(ciudadesDisponibles);

// Usando filter en paises

const filtroPaises = paisesDisponibles.filter((e) => e.length > 6)

console.log(filtroPaises);

// Función join()

console.log(paisesDisponibles.join('\n'));

// Ordenando lista

console.log(paisesDisponibles.sort());

// Conociendo la posición de un elemento

console.log(`La posición de Perú es: ${paisesDisponibles.indexOf('Perú')}`);

// Uniendo dos listas
const listaCiudadesYPaises = paisesDisponibles.concat(ciudadesDisponibles)
console.log('Lista de países y ciudades: ');
console.log(listaCiudadesYPaises);