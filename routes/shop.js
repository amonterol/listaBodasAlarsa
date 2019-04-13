
const path = require('path');

//Express ayuda a iniciar un servidor para escuchar las conexiones
//en este caso en el puerto especificado
const express = require('express'); 

//Importamos 
const rootDir = require('../util/path');

//Creamos un objeto Router para utilizar sus funciones
const router = express.Router();


//El metodo join juntas todos los tres componentes y normaliza la ruta acceso al archivo
//indicado de tal manera que no importa el sistema operativo que estemos usando
//__dirname es el nombre del directorio del proyecto. 
router.get('/', (req, res, next)=>{
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

module.exports = router;