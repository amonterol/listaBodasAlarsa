//MODULOS DE NODEJS INCLUIDOS
//Path ayuda a manejar las rutas de acceso a los distintos directorios
//y archivos a traves de metodo "join"
const path = require('path');

//MODULOS DE NPM INCLUIDOS
//1.- Express ayuda a iniciar un servidor para escuchar las conexiones
//en este caso en el puerto especificado
const express = require('express'); 

//2.- 
const bodyParser = require('body-parser');

//Definimos un aplicacion express
const app = express();  

//Importamos el arhivo admin del directorio routes
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');


app.use(bodyParser.urlencoded({extended: false})); // ver opcion app.use(express.urlencoded({extended: true})); 

//Css es un archivo estatico es decir no es manejado por express router
//por lo cual debemos agregar otro middleware para el manejo de archivos
//estaticos del directorio public
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

//Middleware para manejar la ausencia de un recurso solicitado.
//Express ha ejecutado todas las rutas y funciones de middleware, 
//y ha comprobado que ninguna de ellas responde.
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
  });
  

//La aplicacion escucha las conexiones al puerto 3000
app.listen(3000);

