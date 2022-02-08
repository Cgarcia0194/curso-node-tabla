const fs = require('fs');
const colores = require('colors');
let producto = '';

const getTabla = async (num, listar, tope) => {
    try {

        for (let i = 1; i <= tope; i++) {
            producto += `${num} x ${i} = ${num*i} \n`;
        }

        if (listar) {
            console.log(colores.america('================================================================'));
            console.log(colores.rainbow('TABLA DEL ' + num));
            console.log(colores.america('================================================================'));
            console.log(colores.random(producto.bold));
        }

        return 'Archivo creado correctamente';
    } catch (error) {
        throw error;
    }

};

const crearArchivo = async (num, listar, tope) => {
    try {

        getTabla(num, listar, tope)
            .then(nombreArchivo => console.log(nombreArchivo))
            .catch(err => console.log(err));

        fs.writeFileSync(`./salida/tabla del ${num}.txt`, producto);

        return `tabla del ${num}.txt`;

    } catch (error) {
        throw error;
    }
}
/*
const crearArchivo = (num, tope = 1) => {

    let producto = '';

    const getTabla = (num, tope) => {

        console.clear();
        console.log('================================================================');
        console.log(`TABLA DEL ${num} `);
        console.log('================================================================');

        for (let i = 1; i <= tope; i++) {
            producto += `${num} x ${i} = ${num*i} \n`;

        }

        console.log(producto);
        console.log('El archivo ha sido creado exitosamente');
    };

    getTabla(num, tope);

    
    //fs.writeFile(`tabla del ${num}`, producto, err => {
    //    if (err) {
    //        throw err;
    //    } else {
    //        console.log('tabla del: ', num, ' creada');
    //    }
    //});
    
    fs.writeFileSync(`tabla del ${num}.txt`, producto);

};

*/
//sirve como un exportar para que se puede usar por otros archivos de JS
module.exports = {
    crearArchivo
}