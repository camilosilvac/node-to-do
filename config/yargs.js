const opts = {
    descripcion: {
        demand: true,
        alias: 'd'
    },
    completado: {
        alias: 'c',
        default: true
    }
}

const argv = require('yargs')
    .command('actualizar', 'Actualiza el estado completado de una tarea', opts)
    .command('crear', 'Crear un elemento por hacer', opts)
    .command('borrar', 'Borra un elemento por hacer', opts)
    .help()
    .argv;

module.exports = {
    argv
}