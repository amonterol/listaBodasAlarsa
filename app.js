//Modulos de Npm incluidos


//Express ayuda a iniciar un servidor para escuchar las conexiones
//en este caso en el puerto especificado
const express = require('express'); 

const bodyParser = require('body-parser');

//Definimos un aplicacion express
const app = express();  

app.use(bodyParser.urlencoded({extended: false}));
//app.use(express.urlencoded({extended: true})); 

/*La aplicación responde con “Hello World!” para las solicitudes al URL raíz (/) 
o a la ruta raíz. Para cada vía de acceso diferente, responderá con un error 404 Not Found.*/
app.use('/add-product', (req, res, next) => {
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
    //next(); // Permite que el objeto request ejecute el siguiente middleware 
});

app.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/')
});

app.use('/', (req, res, next)=>{
    res.send('<h1>HELLO FROM EXPRESS!</h1>')
});
//La aplicacion escucha las conexiones al puerto 3000
app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});

