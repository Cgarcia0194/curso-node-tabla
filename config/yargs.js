const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        default: 1,
        describe: 'manda la base o el número que se quiere obtener la tabla'
    }).option('l', {
        alias: 'listar',
        type: 'boolean',
        demandOption: true,
        default: false,
        describe: 'lista en la consola el valor de la tabla'
    }).option('h', {
        alias: 'hasta',
        type: 'number',
        demandOption: false,
        default: 10,
        describe: 'Es el número el cual cuantas veces se va multplicar la base'
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw 'La base debe ser un número';
        }
        return true;
    })
    .argv; //extrae a argv

module.exports = argv;