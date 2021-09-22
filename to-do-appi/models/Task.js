// task.js

const crypto = require('crypto');                             //Importando módulo crypto, pendiente de instalar.
const jwt = require('jsonwebtoken');                          //Importando módulo jsonwebtoken, pendiente de instalar.
const secret = require('../config').secret;                   

const mongoose = require('mongoose');                         //Importando mongoose.
const uniqueValidator = require("mongoose-unique-validator"); //Importando módulo mongoose-unique-validator, pendiente de instalar.

const TaskSchema = new mongoose.Schema({                   //Definiendo el objeto UsuarioSchema con el constructor Schema.
task: {                                                  //Definiendo cada campo con sus tipo sde datos y validaciones.
  type: String,
  unique: true, //este campo no se puede repetir
  required: [true, "no puede estar vacío"],
  match: [/^[a-zA-Z0-9]+$/, "es inválido"],
  index: true,
},                                           
status: { type: String, required: true },
},
{ timestamps: true }
);

// usando plugin de validación para que no se repitan correos ni usernames
TaskSchema.plugin(uniqueValidator, { message: "Ya existe" });

TaskSchema.methods.generarJWT = function() {
  const today = new Date();
  const exp = new Date(today);
  exp.setDate(today.getDate() + 60); // 60 días antes de expirar

  return jwt.sign({
    id: this._id,
    task: this.username,
    status: this.status,
    exp: parseInt(exp.getTime() / 1000),
  }, secret);
};

/**
 * Devuelve la representación de un usuario después de autenticar
 */
TaskSchema.methods.toAuthJSON = function(){
  return {
    task: this.task,
    status: this.status,
    token: this.generarJWT()
  };
};

/**
* Devuelve la representación de un usuario, sólo datos públicos
*/
TaskSchema.methods.publicData = function(){
  return {
    id: this.id,
    task: this.task,
    status: this.status,
  };
};

mongoose.model("Task", TaskSchema);    
