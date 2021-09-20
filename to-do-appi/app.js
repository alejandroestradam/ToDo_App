var express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors');

// Objeto global de la app
var app = express();

/*********************** Mongoose Configuration *******************************/
const mongoose = require("mongoose");

mongoose.connect(
    "mongodb+srv://alejandro11:alexander1@clusterbedu.k34fe.mongodb.net/test"
);

mongoose.set("debug", true);

require("./models/User");
// Aquí se importarán los modelos Mascota y Solicitud cuando estén listos

/*********************** Mongoose Configuration *******************************/

// configuración de middlewares
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Agregamos el código de nuestro router (routes/index.js)
app.use('/v1', require('./routes'));

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

