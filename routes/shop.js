
const path = require('path');

//Express ayuda a iniciar un servidor para escuchar las conexiones
//en este caso en el puerto especificado
const express = require('express'); 

//Obtenemos la ruta de la aplicacion y la almacenamos en la variables
//rootDir 
const rootDir = require('../util/path');

//Creamos un objeto Router para utilizar sus funciones
const router = express.Router();


//El metodo join juntas todos los tres componentes y normaliza la ruta acceso al archivo
//indicado de tal manera que no importa el sistema operativo que estemos usando
//usamos la constante rootDir para crear la ruta donde esta "add-product.html"
router.get('/', (req, res, next)=>{
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

module.exports = router;