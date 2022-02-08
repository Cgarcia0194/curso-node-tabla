//sirve para importar el otro archivo de multiplicar
const {
    number,
    boolean
} = require('yargs');

const {
    crearArchivo
} = require('./helpers/multiplicar.js');

const argv = require('./config/yargs.js');

console.clear();

crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo, ' creado'))
    .catch(err => console.log(err));