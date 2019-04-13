//Express ayuda a iniciar un servidor para escuchar las conexiones
//en este caso en el puerto especificado
const express = require('express'); 

const router = express.Router();

/*La aplicación responde con “Hello World!” para las solicitudes al URL raíz (/) 
o a la ruta raíz. Para cada vía de acceso diferente, responderá con un error 404 Not Found.*/
router.use('/add-product', (req, res, next) => {
    res.send(
        '<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>'
        );
        //next(); // Permite que el objeto request ejecute el siguiente middleware 
});

router.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/')
});

module.exports = router;
