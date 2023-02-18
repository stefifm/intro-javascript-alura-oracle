const ciudadesDisponibles = ['Bogota', 'Lima', 'Córdoba']
const paisesViaje = ['Australia', 'Inglaterra', 'Japón']


// Mostrando el primer elemento de la lista
console.log(ciudadesDisponibles[0]);
console.log(paisesViaje[0]);

// Usando la función splice()

ciudadesDisponibles.splice(0, 2, 'París', 'Londres')
paisesViaje.splice(0, 2, 'Francia', 'China')
console.log(ciudadesDisponibles);
console.log(paisesViaje);