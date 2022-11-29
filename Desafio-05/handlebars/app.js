
import express from 'express';


//Se importa la ruta creada en index.js "router"
import { router } from './src/routes/index.js';
//Se importa engine de express-handlebars
import { engine } from 'express-handlebars';

//Crear servidor de express con el nombre app
const app = express();


//Middlewares para poder recibir informacion POST, PUT...
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//Establecemos la configuracion de handlebars
app.engine('hbs', engine({extname : 'hbs'}));
//establecemos el motor de plantillas que se utiliza
app.set('view engine', 'hbs');
//establecemos el directorio donde se encuentran los archivos de plantilla
app.set('views', './src/views');
//espacio publico del servidor, para que handlebars pueda acceder a la carpeta
app.use(express.static('public'));


//Middleware para que el servidor use router al llegar a /
app.use('/', router);



//Levantar el servidor
app.listen(3000, () => console.log('Servidor iniciado en el puerto 3000'));



