const argv = require('./config/yargs').argv;
const colors = require('colors')
const porHacer = require('./por-hacer/por-hacer')

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;

    case 'listar':
        let listado = porHacer.getListado();

        listado.forEach(tarea => {
            console.log('========Tarea por Hacer========='.green);
            console.log(tarea.descripcion);
            console.log(`Completado: ${tarea.completado}`);
            console.log('================================'.green);
        });
        break;

    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);

        if (actualizado) {
            console.log('Actualizado');
        } else {
            console.log('Error! No Actualizado');
        }
        break;

    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);

        if (borrado) {
            console.log('Borrado');
        } else {
            console.log('Error! No borrado.');
        }
        break;

    default:
        console.log('Comando no es reconocido');
        break;
}