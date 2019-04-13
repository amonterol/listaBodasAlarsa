//Path ayuda a manejar las rutas de acceso a los distintos directorios
//y archivos a traves de metodo "join"
const path = require('path');

//Express ayuda a iniciar un servidor para escuchar las conexiones
//en este caso en el puerto especificado
const express = require('express'); 

const router = express.Router();

//La aplicación responde con la pagina “add-product.html” para las solicitudes al URL (/add-product) 
// /admin/add-product ==> GET
router.use('/add-product', (req, res, next) => {
    res. sendFile(path.join(__dirname, '../', 'views', 'add-product.html'))
});

// /admin/add-product ==> POST
router.post('/add-product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/')
});

module.exports = router;
