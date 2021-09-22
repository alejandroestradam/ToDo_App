var express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    mongoose = require("mongoose");

    var isProduction = process.env.NODE_ENV === 'production';
mongoose.connect(
      "mongodb+srv://alejandro11:alexander1@clusterbedu.k34fe.mongodb.net/ToDoApp"
)
.then(()=>{ console.log ("success")})
.catch(()=>{console.log("Error al conectar a la Base de Datos")})

// Objeto global de la app
var app = express();

require('./models/task');
require('./models/Usuario');
require('./config/passport');

// configuración de middlewares
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Código del router (carpeta routes)
app.use('/v1', require('./routes'));
app.use('/usuario', require('./routes/usuario'));

// Manejando los errores 404
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Iniciando el servidor...
var server = app.listen(process.env.PORT || 3000, function(){
  console.log('Escuchando en el puerto ' + server.address().port);
});
