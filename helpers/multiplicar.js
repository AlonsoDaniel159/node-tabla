const fs = require('fs');
const colors = require('colors');


const crearArchivo = async (base = 5, hasta = 10, listar) => {

    console.clear();

    try {
        
        let consola = '';
        let salida = '';
    
        for (let i = 1; i <= hasta; i++) {
            salida += `${base} X ${i} = ${base * i}\n`;
            consola += `${base} ${'X'.green} ${i} ${'='.green} ${base * i}\n`;
        }
    
        if( listar === true) {
            console.log('=================='.green);
            console.log(`   Tabla del: `.green, colors.blue(base));
            console.log('=================='.green);

            console.log(consola);
        }
    
        let fileName = `tabla-${base}.txt`;
        let path = `./salida/tabla-${base}.txt`;
        
        fs.writeFileSync(path, salida);
    
        return fileName;

    } catch (err) {

        throw err;

    }
}

module.exports = {
    crearArchivo
}