//Express ayuda a iniciar un servidor para escuchar las conexiones
//en este caso en el puerto especificado
const express = require('express'); 

//Creamos un objeto Router para utilizar sus funciones
const router = express.Router();

router.get('/', (req, res, next)=>{
    res.send('<h1>HELLO FROM EXPRESS!</h1>')
});

module.exports = router;