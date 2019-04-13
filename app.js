//Modulos de Npm incluidos

//Express ayuda a iniciar un servidor para escuchar las conexiones
//en este caso en el puerto especificado
const express = require('express'); 

//
const bodyParser = require('body-parser');

//Importamos el arhivo admin del directorio routes
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

//Definimos un aplicacion express
const app = express();  

app.use(bodyParser.urlencoded({extended: false}));
//app.use(express.urlencoded({extended: true})); 

app.use(adminRoutes);
app.use(shopRoutes);

//Middleware para manejar la ausencia de un recurso solicitado.
//Express ha ejecutado todas las rutas y funciones de middleware, 
//y ha comprobado que ninguna de ellas responde.
app.use((req, res, next) => {
    res.status(404).send('<h1>Disculpe! No se encontró la página solicitada.</h1>');
  });
  

//La aplicacion escucha las conexiones al puerto 3000
app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});

