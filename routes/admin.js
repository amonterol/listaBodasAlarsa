//Path ayuda a manejar las rutas de acceso a los distintos directorios
//y archivos a traves de metodo "join"
const path = require('path');

//Express ayuda a iniciar un servidor para escuchar las conexiones
//en este caso en el puerto especificado
const express = require('express'); 

//Obtenemos la ruta de la aplicacion y la almacenamos en la variables
//rootDir 
const rootDir = require('../util/path');

const router = express.Router();

//La aplicación responde con la pagina “add-product.html” para las solicitudes al URL (/add-product) 
//usamos la constante rootDir para crear la ruta donde esta "add-product.html"
// /admin/add-product ==> GET
router.get('/add-product', (req, res, next) => {
    res. sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

// /admin/add-product ==> POST
router.post('/add-product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;
