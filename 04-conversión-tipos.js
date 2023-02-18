// Alfanumerico

// let nombrePasajero = 'Silvia Perez'

// nombrePasajero = 'Marcos Perez'

// Logico o booleano

let pasajeActivo = true


// Numerico
let valorPasaje = 1000
const impuesto = 100
const tasaEmbarque = 60
const porcentajeTasaEmbarque = 60/100
var gestionAgencia = 100


// Operaciones aritmeticas
// Suma
let total = valorPasaje + tasaEmbarque + gestionAgencia
// console.log('Total 1: ', total);

// Orden de presedencia
let totalBoletos = valorPasaje + valorPasaje * porcentajeTasaEmbarque + gestionAgencia
// console.log('Total 2: ', totalBoletos);

let totalPasajeConImpuesto = (valorPasaje + impuesto) + (valorPasaje + impuesto) * porcentajeTasaEmbarque + gestionAgencia
// console.log('Total 3: ', totalPasajeConImpuesto);

// Concatenación de textos

let nombrePasajero = 'Leonardo'
let apellidoPasajero = 'Pérez'
let nameCompleto = nombrePasajero + ' ' +apellidoPasajero

let pasaporte = parseFloat('1000') + parseInt('12')
console.log(pasaporte);

let divi = '100' / '10'
let multi = '100' * '10'

// console.log(multi);d

// No es un número

let notANumber = parseInt('Hola')
console.log(notANumber);
