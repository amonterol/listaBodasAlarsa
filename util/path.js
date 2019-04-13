//Path ayuda a manejar las rutas de acceso a los distintos directorios
//y archivos 
const path = require('path');

//Este modulo nos ayuda a obtener la ruta completa de la aplicacion
//para usarla para rutear algunos archivos.
module.exports = path.dirname(process.mainModule.filename);